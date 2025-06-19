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

    constructor() {
        // Run cleanup every 30 seconds to remove stale presence data
        this.cleanupInterval = setInterval(() => {
            this.cleanupStalePresence();
        }, 30000);
    }

    /**
     * Start tracking user presence for an article
     */
    async startPresence(articleId: string): Promise<void> {
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

            // Set up heartbeat to update presence every 15 seconds (more frequent)
            const heartbeatInterval = setInterval(async () => {
                // Only update if user is still authenticated and page is visible
                if (auth.currentUser && !document.hidden) {
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
            }, 15000); // 15 seconds (more frequent updates)

            this.heartbeatIntervals.set(articleId, heartbeatInterval);

            // Set up comprehensive cleanup handlers
            const cleanup = () => {
                this.stopPresence(articleId);
            };

            // Clean up on various events
            window.addEventListener('beforeunload', cleanup);
            window.addEventListener('pagehide', cleanup);
            document.addEventListener('visibilitychange', () => {
                // If page becomes hidden for more than 30 seconds, clean up
                if (document.hidden) {
                    setTimeout(() => {
                        if (document.hidden) {
                            this.stopPresence(articleId);
                        }
                    }, 30000);
                }
            });

            // Clean up when user logs out
            const authCleanup = auth.onAuthStateChanged((user) => {
                if (!user) {
                    this.stopPresence(articleId);
                }
            });

            this.presenceRefs.set(articleId, () => {
                cleanup();
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