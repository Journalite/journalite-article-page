import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    orderBy,
    Timestamp,
    where,
    updateDoc,
    deleteDoc,
    limit
} from 'firebase/firestore';
import { db, auth } from './clientApp';

// Notification interface matching Firestore structure
export interface Notification {
    id?: string;
    userId: string;
    type: 'comment' | 'reply' | 'like' | 'follow';
    read: boolean;
    sourceId: string; // ID of the article/comment
    sourceType: 'article' | 'comment' | 'user';
    message: string;
    fromUser: {
        id: string;
        name: string;
        username?: string; // Add username field for profile links
    };
    createdAt: Timestamp;
    articleSlug?: string; // Optional slug to link directly to the article
    articleTitle?: string; // Optional article title for context
}

/**
 * Create a new notification when someone comments on a user's post
 */
export async function createCommentNotification(
    ownerId: string,
    articleId: string,
    articleSlug: string,
    articleTitle: string,
    commentId: string,
    commentText: string
) {
    try {
        // Skip if the owner is the commenter (don't notify yourself)
        const currentUser = auth.currentUser;
        if (!currentUser || currentUser.uid === ownerId) {
            return null;
        }

        // Create notification object
        const notification: Omit<Notification, 'id'> = {
            userId: ownerId, // Who will receive the notification
            type: 'comment',
            read: false,
            sourceId: commentId,
            sourceType: 'comment',
            message: `${currentUser.displayName || 'Someone'} commented on your article: "${commentText.substring(0, 50)}${commentText.length > 50 ? '...' : ''}"`,
            fromUser: {
                id: currentUser.uid,
                name: currentUser.displayName || 'Anonymous'
            },
            createdAt: Timestamp.now(),
            articleSlug,
            articleTitle
        };

        // Add to Firestore
        const docRef = await addDoc(collection(db, 'notifications'), notification);

        return {
            id: docRef.id,
            ...notification
        };
    } catch (error) {
        console.error('Error creating notification:', error);
        return null;
    }
}

/**
 * Create a new notification when someone follows a user
 */
export async function createFollowNotification(
    targetUserId: string,
    followerName: string,
    followerId: string,
    followerUsername: string
) {
    try {
        // Skip if user is following themselves (shouldn't happen due to checks in followUser)
        if (targetUserId === followerId) {
            return null;
        }

        // Create notification object
        const notification: Omit<Notification, 'id'> = {
            userId: targetUserId, // Who will receive the notification
            type: 'follow',
            read: false,
            sourceId: followerId,
            sourceType: 'user',
            message: `${followerName} (@${followerUsername}) started following you`,
            fromUser: {
                id: followerId,
                name: followerName,
                username: followerUsername
            },
            createdAt: Timestamp.now()
        };

        // Add to Firestore
        const docRef = await addDoc(collection(db, 'notifications'), notification);

        return {
            id: docRef.id,
            ...notification
        };
    } catch (error) {
        console.error('Error creating follow notification:', error);
        return null;
    }
}

/**
 * Get all notifications for the current user
 */
export async function getUserNotifications(unreadOnly = false) {
    try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }

        // Create base query
        const notificationsRef = collection(db, 'notifications');
        let q;

        if (unreadOnly) {
            // Only fetch unread notifications
            q = query(
                notificationsRef,
                where('userId', '==', currentUser.uid),
                where('read', '==', false),
                orderBy('createdAt', 'desc'),
                limit(100)
            );
        } else {
            // Fetch all notifications
            q = query(
                notificationsRef,
                where('userId', '==', currentUser.uid),
                orderBy('createdAt', 'desc'),
                limit(100)
            );
        }

        const querySnapshot = await getDocs(q);

        const notifications: Notification[] = [];
        querySnapshot.forEach((doc) => {
            notifications.push({
                id: doc.id,
                ...doc.data() as Omit<Notification, 'id'>
            });
        });

        return notifications;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
}

/**
 * Mark a notification as read
 */
export async function markNotificationAsRead(notificationId: string) {
    try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }

        const notificationRef = doc(db, 'notifications', notificationId);
        const notificationSnap = await getDoc(notificationRef);

        if (!notificationSnap.exists()) {
            throw new Error('Notification not found');
        }

        const notificationData = notificationSnap.data() as Notification;

        // Check if the notification belongs to the current user
        if (notificationData.userId !== currentUser.uid) {
            throw new Error('Unauthorized access to notification');
        }

        // Update the read status
        await updateDoc(notificationRef, {
            read: true
        });

        return {
            success: true
        };
    } catch (error) {
        console.error('Error marking notification as read:', error);
        throw error;
    }
}

/**
 * Mark all notifications as read for the current user
 */
export async function markAllNotificationsAsRead() {
    try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }

        const notificationsRef = collection(db, 'notifications');
        const q = query(
            notificationsRef,
            where('userId', '==', currentUser.uid),
            where('read', '==', false)
        );

        const querySnapshot = await getDocs(q);

        // Create an array of promises to update each notification
        const updatePromises = querySnapshot.docs.map(doc =>
            updateDoc(doc.ref, { read: true })
        );

        // Execute all updates in parallel
        await Promise.all(updatePromises);

        return {
            success: true,
            count: querySnapshot.size
        };
    } catch (error) {
        console.error('Error marking all notifications as read:', error);
        throw error;
    }
}

/**
 * Delete a notification
 */
export async function deleteNotification(notificationId: string) {
    try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }

        const notificationRef = doc(db, 'notifications', notificationId);
        const notificationSnap = await getDoc(notificationRef);

        if (!notificationSnap.exists()) {
            throw new Error('Notification not found');
        }

        const notificationData = notificationSnap.data() as Notification;

        // Check if the notification belongs to the current user
        if (notificationData.userId !== currentUser.uid) {
            throw new Error('Unauthorized access to notification');
        }

        // Delete the notification
        await deleteDoc(notificationRef);

        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting notification:', error);
        throw error;
    }
}

/**
 * Get the count of unread notifications
 */
export async function getUnreadNotificationsCount() {
    try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
            return 0;
        }

        const notificationsRef = collection(db, 'notifications');
        const q = query(
            notificationsRef,
            where('userId', '==', currentUser.uid),
            where('read', '==', false)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
    } catch (error) {
        console.error('Error counting unread notifications:', error);
        return 0;
    }
} 