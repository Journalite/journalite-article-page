import { db } from '@/firebase/clientApp';
import {
    collection,
    doc,
    addDoc,
    getDocs,
    query,
    where,
    deleteDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    serverTimestamp
} from 'firebase/firestore';

export interface Highlight {
    id: string;
    articleId: string;
    userId: string;
    text: string;
    prefix: string;
    suffix: string;
    createdAt: any; // Firestore timestamp
    comments?: Comment[];
}

interface Comment {
    userId: string;
    content: string;
    createdAt: string;
}

export const saveHighlight = async (
    articleId: string,
    userId: string,
    text: string,
    prefix: string,
    suffix: string
): Promise<string> => {
    try {
        const highlightData = {
            articleId,
            userId,
            text,
            prefix,
            suffix,
            createdAt: serverTimestamp(),
            comments: []
        };

        const docRef = await addDoc(collection(db, 'highlights'), highlightData);
        return docRef.id;
    } catch (error) {
        console.error('Error saving highlight:', error);
        throw error;
    }
};

export const getArticleHighlights = async (articleId: string): Promise<Highlight[]> => {
    try {
        const q = query(
            collection(db, 'highlights'),
            where('articleId', '==', articleId)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Highlight));
    } catch (error) {
        console.error('Error getting highlights:', error);
        return [];
    }
};

export const getUserHighlights = async (userId: string): Promise<Highlight[]> => {
    try {
        const q = query(
            collection(db, 'highlights'),
            where('userId', '==', userId)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Highlight));
    } catch (error) {
        console.error('Error getting user highlights:', error);
        return [];
    }
};

export const deleteHighlight = async (highlightId: string): Promise<void> => {
    try {
        await deleteDoc(doc(db, 'highlights', highlightId));
    } catch (error) {
        console.error('Error deleting highlight:', error);
        throw error;
    }
};

export const addCommentToHighlight = async (
    highlightId: string,
    userId: string,
    content: string
): Promise<void> => {
    try {
        const highlightRef = doc(db, 'highlights', highlightId);

        const comment = {
            userId,
            content,
            createdAt: new Date().toISOString(),
        };

        await updateDoc(highlightRef, {
            comments: arrayUnion(comment)
        });
    } catch (error) {
        console.error('Error adding comment to highlight:', error);
        throw error;
    }
};

export const removeCommentFromHighlight = async (
    highlightId: string,
    comment: Comment
): Promise<void> => {
    try {
        const highlightRef = doc(db, 'highlights', highlightId);

        await updateDoc(highlightRef, {
            comments: arrayRemove(comment)
        });
    } catch (error) {
        console.error('Error removing comment from highlight:', error);
        throw error;
    }
}; 