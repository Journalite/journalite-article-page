import {
    collection,
    doc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
    addDoc,
    updateDoc,
    getDoc,
    getDocs,
    serverTimestamp,
    Timestamp,
    and,
    or
} from 'firebase/firestore';
import { auth, db } from '@/firebase/clientApp';
import { getUserProfile } from './userService';
import { getEncryptionService } from './encryptionService';

// User profile cache to reduce Firebase queries
const userProfileCache = new Map<string, { profile: any; timestamp: number }>();
const unreadCountCache = new Map<string, { count: number; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const UNREAD_CACHE_DURATION = 30 * 1000; // 30 seconds for unread counts

async function getCachedUserProfile(userId: string) {
    const cached = userProfileCache.get(userId);
    const now = Date.now();

    // Return cached profile if it's less than 5 minutes old
    if (cached && (now - cached.timestamp) < CACHE_DURATION) {
        return cached.profile;
    }

    // Fetch fresh profile
    const profile = await getUserProfile(userId);
    if (profile) {
        userProfileCache.set(userId, { profile, timestamp: now });
    }

    return profile;
}

async function getCachedUnreadCount(conversationId: string, userId: string): Promise<number> {
    const cacheKey = `${conversationId}-${userId}`;
    const cached = unreadCountCache.get(cacheKey);
    const now = Date.now();

    // Return cached count if it's less than 30 seconds old
    if (cached && (now - cached.timestamp) < UNREAD_CACHE_DURATION) {
        return cached.count;
    }

    // Fetch fresh count
    const count = await getUnreadMessageCount(conversationId, userId);
    unreadCountCache.set(cacheKey, { count, timestamp: now });

    return count;
}

export interface Message {
    id: string;
    conversationId: string;
    senderId: string;
    receiverId: string;
    content: string;
    type: 'text' | 'image' | 'profile' | 'article'; // Added article type
    timestamp: Timestamp;
    read: boolean;
    isEncrypted?: boolean; // Added encryption support
    editedAt?: Timestamp;
    profileAttachment?: {
        uid: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string;
    };
    articleAttachment?: {
        slug: string;
        title: string;
        excerpt?: string;
        coverImageUrl?: string;
        authorName?: string;
        readTime?: number;
        publishedDate?: string;
        isExternal?: boolean;
        externalUrl?: string;
    };
}

export interface Conversation {
    id: string;
    participants: string[]; // Array of user IDs
    lastMessage: {
        content: string;
        senderId: string;
        timestamp: Timestamp;
        read: boolean;
    };
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

export interface ConversationWithUser {
    conversation: Conversation;
    otherUser: {
        uid: string;
        username: string;
        firstName: string;
        lastName: string;
    };
    unreadCount: number;
}

/**
 * Get or create a conversation between two users
 */
export async function getOrCreateConversation(currentUserId: string, otherUserId: string): Promise<string> {
    if (!currentUserId || !otherUserId) {
        throw new Error('Both user IDs are required');
    }

    if (currentUserId === otherUserId) {
        throw new Error('Cannot create conversation with yourself');
    }

    try {
        // Check if conversation already exists
        const conversationsRef = collection(db, 'conversations');
        const q = query(
            conversationsRef,
            where('participants', 'array-contains', currentUserId)
        );

        const snapshot = await getDocs(q);

        // Find existing conversation with the other user
        for (const doc of snapshot.docs) {
            const conversation = doc.data() as Conversation;
            if (conversation.participants.includes(otherUserId)) {
                return doc.id;
            }
        }

        // Create new conversation if none exists
        const newConversation = {
            participants: [currentUserId, otherUserId].sort(), // Sort for consistency
            lastMessage: {
                content: '',
                senderId: '',
                timestamp: serverTimestamp(),
                read: false
            },
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };

        const docRef = await addDoc(conversationsRef, newConversation);
        return docRef.id;
    } catch (error) {
        console.error('Error getting or creating conversation:', error);
        throw error;
    }
}

/**
 * Send a message in a conversation with optional encryption
 */
export async function sendMessage(
    conversationId: string,
    receiverId: string,
    content: string,
    type: 'text' | 'image' = 'text'
): Promise<string> {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error('User must be authenticated to send messages');
    }

    if (!content.trim()) {
        throw new Error('Message content cannot be empty');
    }

    try {
        const encryptionService = getEncryptionService();
        let messageContent = content.trim();
        let isEncrypted = false;

        // Check if both users have encryption enabled
        if (type === 'text' && encryptionService.isEncryptionAvailable()) {
            const receiverHasEncryption = await encryptionService.hasEncryptionEnabled(receiverId);

            if (receiverHasEncryption) {
                // Encrypt the message
                const encryptedContent = await encryptionService.encryptMessage(messageContent, receiverId);

                if (encryptedContent) {
                    messageContent = encryptedContent;
                    isEncrypted = true;
                }
            }
        }

        // Add message to messages collection
        const messagesRef = collection(db, 'messages');
        const newMessage: any = {
            conversationId,
            senderId: currentUser.uid,
            receiverId,
            content: messageContent,
            type,
            timestamp: serverTimestamp(),
            read: false
        };

        // Add encryption flag if message is encrypted
        if (isEncrypted) {
            newMessage.isEncrypted = true;
        }

        const messageDoc = await addDoc(messagesRef, newMessage);

        // Update conversation's last message
        // For encrypted messages, show a placeholder in the conversation list
        const lastMessageContent = isEncrypted ? '🔒 Encrypted message' : messageContent;

        const conversationRef = doc(db, 'conversations', conversationId);
        await updateDoc(conversationRef, {
            lastMessage: {
                content: lastMessageContent,
                senderId: currentUser.uid,
                timestamp: serverTimestamp(),
                read: false
            },
            updatedAt: serverTimestamp()
        });

        // Invalidate unread count cache for receiver
        const receiverCacheKey = `${conversationId}-${receiverId}`;
        unreadCountCache.delete(receiverCacheKey);

        return messageDoc.id;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}

/**
 * Send a profile message in a conversation
 */
export async function sendProfileMessage(
    conversationId: string,
    receiverId: string,
    profileData: {
        uid: string;
        username: string;
        firstName: string;
        lastName: string;
        bio?: string;
    }
): Promise<string> {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error('User must be authenticated to send messages');
    }

    if (!profileData.uid || !profileData.username) {
        throw new Error('Profile data must include uid and username');
    }

    try {
        // Add profile message to messages collection
        const messagesRef = collection(db, 'messages');
        const newMessage = {
            conversationId,
            senderId: currentUser.uid,
            receiverId,
            content: `Shared ${profileData.firstName} ${profileData.lastName}'s profile`,
            type: 'profile' as const,
            timestamp: serverTimestamp(),
            read: false,
            profileAttachment: profileData
        };

        const messageDoc = await addDoc(messagesRef, newMessage);

        // Update conversation's last message
        const conversationRef = doc(db, 'conversations', conversationId);
        await updateDoc(conversationRef, {
            lastMessage: {
                content: `Shared ${profileData.firstName} ${profileData.lastName}'s profile`,
                senderId: currentUser.uid,
                timestamp: serverTimestamp(),
                read: false
            },
            updatedAt: serverTimestamp()
        });

        // Invalidate unread count cache for receiver
        const receiverCacheKey = `${conversationId}-${receiverId}`;
        unreadCountCache.delete(receiverCacheKey);

        return messageDoc.id;
    } catch (error) {
        console.error('Error sending profile message:', error);
        throw error;
    }
}

/**
 * Send an article message in a conversation
 */
export async function sendArticleMessage(
    conversationId: string,
    receiverId: string,
    articleData: {
        slug: string;
        title: string;
        excerpt?: string;
        coverImageUrl?: string;
        authorName?: string;
        readTime?: number;
        publishedDate?: string;
        isExternal?: boolean;
        externalUrl?: string;
    }
): Promise<string> {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error('User must be authenticated to send messages');
    }

    if (!articleData.slug || !articleData.title) {
        throw new Error('Article data must include slug and title');
    }

    try {
        // Sanitize articleData by removing undefined fields to comply with Firestore restrictions
        const sanitizedArticleData: any = {};
        (Object.keys(articleData) as (keyof typeof articleData)[]).forEach((key) => {
            const value = articleData[key];
            if (value !== undefined) {
                sanitizedArticleData[key] = value;
            }
        });

        // Add article message to messages collection
        const messagesRef = collection(db, 'messages');
        const newMessage = {
            conversationId,
            senderId: currentUser.uid,
            receiverId,
            content: `Shared article: "${sanitizedArticleData.title}"`,
            type: 'article' as const,
            timestamp: serverTimestamp(),
            read: false,
            articleAttachment: sanitizedArticleData
        };

        const messageDoc = await addDoc(messagesRef, newMessage);

        // Update conversation's last message
        const conversationRef = doc(db, 'conversations', conversationId);
        await updateDoc(conversationRef, {
            lastMessage: {
                content: `Shared article: "${sanitizedArticleData.title}"`,
                senderId: currentUser.uid,
                timestamp: serverTimestamp(),
                read: false
            },
            updatedAt: serverTimestamp()
        });

        // Invalidate unread count cache for receiver
        const receiverCacheKey = `${conversationId}-${receiverId}`;
        unreadCountCache.delete(receiverCacheKey);

        return messageDoc.id;
    } catch (error) {
        console.error('Error sending article message:', error);
        throw error;
    }
}

/**
 * Get messages for a conversation with real-time updates
 */
export function subscribeToMessages(
    conversationId: string,
    callback: (messages: Message[]) => void,
    messageLimit: number = 50
): () => void {
    try {
        const messagesRef = collection(db, 'messages');
        const q = query(
            messagesRef,
            where('conversationId', '==', conversationId),
            orderBy('timestamp', 'desc'),
            limit(messageLimit)
        );

        return onSnapshot(q, (snapshot) => {
            const messages: Message[] = [];
            snapshot.forEach((doc) => {
                messages.push({
                    id: doc.id,
                    ...doc.data()
                } as Message);
            });

            // Reverse to show oldest first
            callback(messages.reverse());
        });
    } catch (error) {
        console.error('Error subscribing to messages:', error);
        throw error;
    }
}

/**
 * Get user's conversations with real-time updates (OPTIMIZED)
 */
export function subscribeToConversations(
    userId: string,
    callback: (conversations: ConversationWithUser[]) => void
): () => void {
    try {
        const conversationsRef = collection(db, 'conversations');
        const q = query(
            conversationsRef,
            where('participants', 'array-contains', userId),
            orderBy('updatedAt', 'desc')
        );

        return onSnapshot(q, async (snapshot) => {
            const conversationsWithUsers: ConversationWithUser[] = [];

            // Batch process all user profile fetches
            const userProfilePromises = new Map<string, Promise<any>>();

            for (const doc of snapshot.docs) {
                const conversation = { id: doc.id, ...doc.data() } as Conversation;
                const otherUserId = conversation.participants.find(id => id !== userId);

                if (otherUserId && !userProfilePromises.has(otherUserId)) {
                    userProfilePromises.set(otherUserId, getCachedUserProfile(otherUserId));
                }
            }

            // Wait for all user profiles to load
            const userProfiles = new Map<string, any>();
            for (const [userId, promise] of userProfilePromises) {
                try {
                    const profile = await promise;
                    if (profile) {
                        userProfiles.set(userId, profile);
                    }
                } catch (error) {
                    console.error(`Error fetching profile for user ${userId}:`, error);
                }
            }

            // Build conversations with user data
            for (const doc of snapshot.docs) {
                const conversation = { id: doc.id, ...doc.data() } as Conversation;
                const otherUserId = conversation.participants.find(id => id !== userId);

                if (!otherUserId) continue;

                const otherUserProfile = userProfiles.get(otherUserId);
                if (!otherUserProfile) continue;

                // Get unread count (this could also be cached)
                const unreadCount = await getCachedUnreadCount(conversation.id, userId);

                conversationsWithUsers.push({
                    conversation,
                    otherUser: {
                        uid: otherUserProfile.uid,
                        username: otherUserProfile.username,
                        firstName: otherUserProfile.firstName,
                        lastName: otherUserProfile.lastName
                    },
                    unreadCount
                });
            }

            callback(conversationsWithUsers);
        });
    } catch (error) {
        console.error('Error subscribing to conversations:', error);
        throw error;
    }
}

/**
 * Mark messages as read
 */
export async function markMessagesAsRead(conversationId: string, userId: string): Promise<void> {
    try {
        const messagesRef = collection(db, 'messages');
        const q = query(
            messagesRef,
            where('conversationId', '==', conversationId),
            where('receiverId', '==', userId),
            where('read', '==', false)
        );

        const snapshot = await getDocs(q);

        const updatePromises = snapshot.docs.map(doc =>
            updateDoc(doc.ref, { read: true })
        );

        await Promise.all(updatePromises);

        // Invalidate unread count cache after marking as read
        const cacheKey = `${conversationId}-${userId}`;
        unreadCountCache.delete(cacheKey);
    } catch (error) {
        console.error('Error marking messages as read:', error);
        throw error;
    }
}

/**
 * Get unread message count for a conversation
 */
export async function getUnreadMessageCount(conversationId: string, userId: string): Promise<number> {
    try {
        const messagesRef = collection(db, 'messages');
        const q = query(
            messagesRef,
            where('conversationId', '==', conversationId),
            where('receiverId', '==', userId),
            where('read', '==', false)
        );

        const snapshot = await getDocs(q);
        return snapshot.size;
    } catch (error) {
        console.error('Error getting unread message count:', error);
        return 0;
    }
}

/**
 * Get total unread message count for a user
 */
export async function getTotalUnreadCount(userId: string): Promise<number> {
    try {
        const messagesRef = collection(db, 'messages');
        const q = query(
            messagesRef,
            where('receiverId', '==', userId),
            where('read', '==', false)
        );

        const snapshot = await getDocs(q);
        return snapshot.size;
    } catch (error) {
        console.error('Error getting total unread count:', error);
        return 0;
    }
}

/**
 * Search conversations by username
 */
export async function searchConversations(userId: string, searchTerm: string): Promise<ConversationWithUser[]> {
    try {
        const conversationsRef = collection(db, 'conversations');
        const q = query(
            conversationsRef,
            where('participants', 'array-contains', userId)
        );

        const snapshot = await getDocs(q);
        const conversationsWithUsers: ConversationWithUser[] = [];

        for (const doc of snapshot.docs) {
            const conversation = { id: doc.id, ...doc.data() } as Conversation;

            const otherUserId = conversation.participants.find(id => id !== userId);
            if (!otherUserId) continue;

            const otherUserProfile = await getUserProfile(otherUserId);
            if (!otherUserProfile) continue;

            // Filter by search term
            const searchLower = searchTerm.toLowerCase();
            if (
                otherUserProfile.username.toLowerCase().includes(searchLower) ||
                otherUserProfile.firstName.toLowerCase().includes(searchLower) ||
                otherUserProfile.lastName.toLowerCase().includes(searchLower)
            ) {
                const unreadCount = await getCachedUnreadCount(conversation.id, userId);

                conversationsWithUsers.push({
                    conversation,
                    otherUser: {
                        uid: otherUserProfile.uid,
                        username: otherUserProfile.username,
                        firstName: otherUserProfile.firstName,
                        lastName: otherUserProfile.lastName
                    },
                    unreadCount
                });
            }
        }

        return conversationsWithUsers.sort((a, b) =>
            b.conversation.updatedAt.toMillis() - a.conversation.updatedAt.toMillis()
        );
    } catch (error) {
        console.error('Error searching conversations:', error);
        throw error;
    }
} 