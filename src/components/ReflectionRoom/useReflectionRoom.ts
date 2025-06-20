'use client'

import { useState, useEffect, useCallback } from 'react';
import {
    collection,
    doc,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    deleteDoc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    Timestamp
} from 'firebase/firestore';
import { auth, db } from '@/firebase/clientApp';
import { getUserProfile } from '@/services/userService';

export interface ReflectionMessage {
    id: string;
    userId: string;
    userName: string;
    content: string;
    createdAt: Timestamp;
    read: boolean;
}

export interface ReflectionMetadata {
    topic: string;
    createdAt: Timestamp;
    authorId: string;
}

export const useReflectionRoom = (articleId: string) => {
    const [messages, setMessages] = useState<ReflectionMessage[]>([]);
    const [topic, setTopic] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [unreadCount, setUnreadCount] = useState(0);

    const currentUser = auth.currentUser;

    // Load metadata (topic)
    const loadMetadata = useCallback(async () => {
        try {
            const metadataRef = doc(db, 'reflections', articleId, 'metadata', 'main');
            const metadataSnap = await getDoc(metadataRef);

            if (metadataSnap.exists()) {
                const data = metadataSnap.data() as ReflectionMetadata;
                setTopic(data.topic);
            }
        } catch (error) {
            console.error('Error loading reflection metadata:', error);
            setError('Failed to load discussion topic');
        }
    }, [articleId]);

    // Set up real-time listener for messages
    useEffect(() => {
        if (!articleId) return;

        setLoading(true);

        const messagesRef = collection(db, 'reflections', articleId, 'messages');
        const q = query(messagesRef, orderBy('createdAt', 'asc'));

        const unsubscribe = onSnapshot(q,
            (snapshot) => {
                const messagesData: ReflectionMessage[] = [];
                let unreadCounter = 0;

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const message: ReflectionMessage = {
                        id: doc.id,
                        userId: data.userId,
                        userName: data.userName,
                        content: data.content,
                        createdAt: data.createdAt,
                        read: data.read || false
                    };

                    messagesData.push(message);

                    // Count unread messages not from current user
                    if (!message.read && message.userId !== currentUser?.uid) {
                        unreadCounter++;
                    }
                });

                setMessages(messagesData);
                setUnreadCount(unreadCounter);
                setLoading(false);
                setError(null);
            },
            (error) => {
                console.error('Error listening to messages:', error);
                setError('Failed to load messages');
                setLoading(false);
            }
        );

        // Load metadata
        loadMetadata();

        return () => unsubscribe();
    }, [articleId, currentUser?.uid, loadMetadata]);

    // Send a new message
    const sendMessage = useCallback(async (content: string) => {
        if (!currentUser || !content.trim()) return;

        try {
            // Get user profile for display name
            const userProfile = await getUserProfile(currentUser.uid);
            const userName = userProfile ?
                `${userProfile.firstName} ${userProfile.lastName}` :
                currentUser.displayName || currentUser.email?.split('@')[0] || 'Anonymous';

            const messagesRef = collection(db, 'reflections', articleId, 'messages');

            await addDoc(messagesRef, {
                userId: currentUser.uid,
                userName: userName,
                content: content.trim(),
                createdAt: serverTimestamp(),
                read: false
            });
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }, [currentUser, articleId]);

    // Mark all messages as read
    const markAllAsRead = useCallback(async () => {
        if (!currentUser) return;

        try {
            const messagesRef = collection(db, 'reflections', articleId, 'messages');
            const snapshot = await getDocs(messagesRef);

            const updatePromises = snapshot.docs
                .filter(doc => {
                    const data = doc.data();
                    return !data.read && data.userId !== currentUser.uid;
                })
                .map(doc =>
                    setDoc(doc.ref, { read: true }, { merge: true })
                );

            await Promise.all(updatePromises);
        } catch (error) {
            console.error('Error marking messages as read:', error);
        }
    }, [currentUser, articleId]);

    // Create initial metadata for new reflection room
    const createReflectionRoom = useCallback(async (discussionTopic: string) => {
        if (!currentUser) return;

        try {
            const metadataRef = doc(db, 'reflections', articleId, 'metadata', 'main');
            await setDoc(metadataRef, {
                topic: discussionTopic,
                createdAt: serverTimestamp(),
                authorId: currentUser.uid
            });

            setTopic(discussionTopic);
        } catch (error) {
            console.error('Error creating reflection room:', error);
            throw error;
        }
    }, [currentUser, articleId]);

    // Delete a message (only the message author can delete)
    const deleteMessage = useCallback(async (messageId: string) => {
        if (!currentUser) return;

        try {
            const messageRef = doc(db, 'reflections', articleId, 'messages', messageId);

            // First verify the message belongs to the current user
            const messageSnap = await getDoc(messageRef);
            if (!messageSnap.exists()) {
                throw new Error('Message not found');
            }

            const messageData = messageSnap.data();
            if (messageData.userId !== currentUser.uid) {
                throw new Error('You can only delete your own messages');
            }

            // Delete the message
            await deleteDoc(messageRef);
        } catch (error) {
            console.error('Error deleting message:', error);
            throw error;
        }
    }, [currentUser, articleId]);

    return {
        messages,
        topic,
        loading,
        error,
        unreadCount,
        sendMessage,
        deleteMessage,
        markAllAsRead,
        createReflectionRoom
    };
}; 