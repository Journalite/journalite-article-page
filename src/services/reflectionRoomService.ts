import { doc, setDoc, updateDoc, serverTimestamp, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db, auth } from '@/firebase/clientApp';

/**
 * Enable reflection room for an article (author only)
 */
export async function enableReflectionRoom(articleId: string, topic: string): Promise<void> {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error('Authentication required');
    }

    try {
        // Update article to enable reflection room
        const articleRef = doc(db, 'articles', articleId);
        await updateDoc(articleRef, {
            hasReflectionRoom: true,
            updatedAt: serverTimestamp()
        });

        // Create reflection room metadata
        const metadataRef = doc(db, 'reflections', articleId, 'metadata', 'main');
        await setDoc(metadataRef, {
            topic: topic,
            createdAt: serverTimestamp(),
            authorId: currentUser.uid
        });

    } catch (error) {
        console.error('Error enabling reflection room:', error);
        throw error;
    }
}

/**
 * Disable reflection room for an article (author only)
 */
export async function disableReflectionRoom(articleId: string): Promise<void> {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error('Authentication required');
    }

    try {
        // Update article to disable reflection room
        const articleRef = doc(db, 'articles', articleId);
        await updateDoc(articleRef, {
            hasReflectionRoom: false,
            updatedAt: serverTimestamp()
        });

    } catch (error) {
        console.error('Error disabling reflection room:', error);
        throw error;
    }
}

/**
 * Update reflection room topic (author only) and clear all messages
 */
export async function updateReflectionTopic(articleId: string, newTopic: string): Promise<void> {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error('Authentication required');
    }

    try {
        // Clear all messages first when topic changes
        const messagesRef = collection(db, 'reflections', articleId, 'messages');
        const snapshot = await getDocs(messagesRef);

        const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
        await Promise.all(deletePromises);

        // Update the topic
        const metadataRef = doc(db, 'reflections', articleId, 'metadata', 'main');
        await updateDoc(metadataRef, {
            topic: newTopic,
            updatedAt: serverTimestamp()
        });

    } catch (error) {
        console.error('Error updating reflection topic:', error);
        throw error;
    }
} 