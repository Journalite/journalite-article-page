import {
    doc,
    collection,
    onSnapshot,
    setDoc,
    deleteDoc,
    serverTimestamp,
    query,
    where,
    orderBy,
    limit,
    Timestamp,
    getDocs
} from 'firebase/firestore';
import { db, auth } from '../firebase/clientApp';
import { getUserProfile, UserProfile } from './userService';

export interface PresenceUser {
    uid: string;
    username: string;
    firstName: string;
    lastName: string;
    lastSeen: Timestamp;
    articleId: string;
}

export interface ActiveUser extends PresenceUser {
    profile?: UserProfile;
}

class PresenceService {
    private presenceRefs: Map<string, () => void> = new Map();
    private heartbeatIntervals: Map<string, NodeJS.Timeout> = new Map();
    private cleanupInterval: NodeJS.Timeout | null = null;
    private isDestroyed = false;

    constructor() {
        // Run cleanup every 60 seconds instead of 30 (reduce memory pressure)
        this.cleanupInterval = setInterval(() => {
            if (!this.isDestroyed) {
                this.cleanupStalePresence();
            }
        }, 60000); // Increased from 30s to 60s
    }

    /**
     * Start tracking user presence for an article
     */
    async startPresence(articleId: string): Promise<void> {
        if (this.isDestroyed) return;

        const user = auth.currentUser;
        if (!user) {
            // User not authenticated - silently return
            return;
        }

        try {
            // Get user profile for display info
            const userProfile = await getUserProfile(user.uid);
            if (!userProfile) return;

            const presenceRef = doc(db, 'articlePresence', `${articleId}_${user.uid}`);

            // Set initial presence
            await setDoc(presenceRef, {
                uid: user.uid,
                username: userProfile.username,
                firstName: userProfile.firstName,
                lastName: userProfile.lastName,
                lastSeen: serverTimestamp(),
                articleId: articleId
            });

            // Set up heartbeat to update presence every 30 seconds instead of 15 (reduce database calls)
            const heartbeatInterval = setInterval(async () => {
                // Only update if user is still authenticated and page is visible
                if (auth.currentUser && !document.hidden && !this.isDestroyed) {
                    try {
                        await setDoc(presenceRef, {
                            uid: user.uid,
                            username: userProfile.username,
                            firstName: userProfile.firstName,
                            lastName: userProfile.lastName,
                            lastSeen: serverTimestamp(),
                            articleId: articleId
                        });
                    } catch (error) {
                        // If there's an error, stop the heartbeat
                        clearInterval(heartbeatInterval);
                        this.heartbeatIntervals.delete(articleId);
                    }
                }
            }, 30000); // Increased from 15s to 30s

            this.heartbeatIntervals.set(articleId, heartbeatInterval);

            // Set up comprehensive cleanup handlers
            const cleanup = () => {
                this.stopPresence(articleId);
            };

            // Clean up on various events
            const beforeUnloadHandler = cleanup;
            const pageHideHandler = cleanup;
            const visibilityChangeHandler = () => {
                // If page becomes hidden for more than 60 seconds, clean up
                if (document.hidden) {
                    setTimeout(() => {
                        if (document.hidden && !this.isDestroyed) {
                            this.stopPresence(articleId);
                        }
                    }, 60000); // Increased from 30s to 60s
                }
            };

            window.addEventListener('beforeunload', beforeUnloadHandler);
            window.addEventListener('pagehide', pageHideHandler);
            document.addEventListener('visibilitychange', visibilityChangeHandler);

            // Clean up when user logs out
            const authCleanup = auth.onAuthStateChanged((user) => {
                if (!user && !this.isDestroyed) {
                    this.stopPresence(articleId);
                }
            });

            this.presenceRefs.set(articleId, () => {
                window.removeEventListener('beforeunload', beforeUnloadHandler);
                window.removeEventListener('pagehide', pageHideHandler);
                document.removeEventListener('visibilitychange', visibilityChangeHandler);
                authCleanup();
            });

        } catch (error) {
            // Error starting presence - fail silently in production
        }
    }

    /**
     * Stop tracking user presence for an article
     */
    async stopPresence(articleId: string): Promise<void> {
        const user = auth.currentUser;
        if (!user) return; // Silent return for unauthenticated users

        try {
            // Clear heartbeat interval
            const interval = this.heartbeatIntervals.get(articleId);
            if (interval) {
                clearInterval(interval);
                this.heartbeatIntervals.delete(articleId);
            }

            // Remove presence document
            const presenceRef = doc(db, 'articlePresence', `${articleId}_${user.uid}`);
            await deleteDoc(presenceRef);

            // Clean up event listeners
            const cleanup = this.presenceRefs.get(articleId);
            if (cleanup) {
                window.removeEventListener('beforeunload', cleanup);
                this.presenceRefs.delete(articleId);
            }

        } catch (error) {
            // Error stopping presence - fail silently in production
        }
    }

    /**
     * Subscribe to active users for an article
     */
    subscribeToActiveUsers(
        articleId: string,
        callback: (users: ActiveUser[]) => void
    ): () => void {
        // Query for users active in the last 45 seconds (more strict)
        const cutoffTime = new Date(Date.now() - 45 * 1000); // 45 seconds ago

        const presenceQuery = query(
            collection(db, 'articlePresence'),
            where('articleId', '==', articleId),
            where('lastSeen', '>', Timestamp.fromDate(cutoffTime)),
            orderBy('lastSeen', 'desc'),
            limit(10) // Get up to 10 users, we'll show max 5
        );

        const unsubscribe = onSnapshot(presenceQuery, async (snapshot) => {
            try {
                const users: ActiveUser[] = [];

                for (const docSnapshot of snapshot.docs) {
                    const data = docSnapshot.data() as PresenceUser;

                    // Skip current user
                    if (auth.currentUser && data.uid === auth.currentUser.uid) {
                        continue;
                    }

                    // Get full user profile for avatar/display
                    try {
                        const profile = await getUserProfile(data.uid);
                        users.push({
                            ...data,
                            profile: profile || undefined
                        });
                    } catch (error) {
                        // Error fetching user profile - add user without full profile as fallback
                        users.push({
                            ...data,
                            profile: undefined
                        });
                    }
                }

                callback(users);
            } catch (error) {
                // Error processing presence updates - return empty array
                callback([]);
            }
        }, (error) => {
            // Error in presence subscription - return empty array
            callback([]);
        });

        return unsubscribe;
    }

    /**
     * Clean up stale presence data that hasn't been updated recently
     */
    private async cleanupStalePresence(): Promise<void> {
        try {
            // Clean up presence data older than 1 minute
            const staleTime = new Date(Date.now() - 60 * 1000);

            const staleQuery = query(
                collection(db, 'articlePresence'),
                where('lastSeen', '<', Timestamp.fromDate(staleTime))
            );

            const staleSnapshot = await getDocs(staleQuery);

            // Delete stale presence documents
            const deletePromises = staleSnapshot.docs.map((docSnapshot) =>
                deleteDoc(docSnapshot.ref)
            );

            if (deletePromises.length > 0) {
                await Promise.all(deletePromises);
                // Cleanup completed silently - consider using a proper logging service for monitoring
            }
        } catch (error) {
            // Error cleaning up stale presence - fail silently
        }
    }

    /**
     * Clean up all presence tracking
     */
    cleanup(): void {
        // Clear cleanup interval
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
            this.cleanupInterval = null;
        }

        // Clear all heartbeat intervals
        this.heartbeatIntervals.forEach((interval) => {
            clearInterval(interval);
        });
        this.heartbeatIntervals.clear();

        // Remove all event listeners
        this.presenceRefs.forEach((cleanup) => {
            cleanup();
        });
        this.presenceRefs.clear();

        this.isDestroyed = true;
    }
}

// Export singleton instance
export const presenceService = new PresenceService();

// Clean up service when the module is unloaded
if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
        presenceService.cleanup();
    });
} 