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

export type HighlightTag = 'insight' | 'question' | 'quote' | 'important';

export interface Highlight {
    id: string;
    articleId: string;
    userId: string;
    text: string;
    prefix: string;
    suffix: string;
    tag: HighlightTag;
    createdAt: any; // Firestore timestamp
    comments?: Comment[];
    reactions?: { [emoji: string]: number };
    userReactions?: { [userId: string]: string }; // Track which user reacted with what emoji
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
    suffix: string,
    tag: HighlightTag = 'insight'
): Promise<string> => {
    try {
        const highlightData = {
            articleId,
            userId,
            text,
            prefix,
            suffix,
            tag,
            createdAt: serverTimestamp(),
            comments: [],
            reactions: {},
            userReactions: {}
        };

        const docRef = await addDoc(collection(db, 'highlights'), highlightData);
        return docRef.id;
    } catch (error) {
        console.error('Error saving highlight:', error);
        throw error;
    }
};

export const getArticleHighlights = async (articleId: string, userId?: string): Promise<Highlight[]> => {
    try {
        let q = query(
            collection(db, 'highlights'),
            where('articleId', '==', articleId)
        );

        // If userId is provided, filter by user to make highlights private
        if (userId) {
            q = query(
                collection(db, 'highlights'),
                where('articleId', '==', articleId),
                where('userId', '==', userId)
            );
        }

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

export const addReactionToHighlight = async (
    highlightId: string,
    userId: string,
    emoji: string
): Promise<void> => {
    try {
        const highlightRef = doc(db, 'highlights', highlightId);

        // Note: This is a simplified approach. In production, you'd want to use a transaction
        // to ensure consistency when multiple users react simultaneously
        await updateDoc(highlightRef, {
            [`reactions.${emoji}`]: (await import('firebase/firestore')).increment(1),
            [`userReactions.${userId}`]: emoji
        });
    } catch (error) {
        console.error('Error adding reaction to highlight:', error);
        throw error;
    }
};

export const removeReactionFromHighlight = async (
    highlightId: string,
    userId: string,
    emoji: string
): Promise<void> => {
    try {
        const highlightRef = doc(db, 'highlights', highlightId);

        await updateDoc(highlightRef, {
            [`reactions.${emoji}`]: (await import('firebase/firestore')).increment(-1),
            [`userReactions.${userId}`]: null
        });
    } catch (error) {
        console.error('Error removing reaction from highlight:', error);
        throw error;
    }
};

export const generateHighlightShareUrl = (
    articleSlug: string,
    highlightId: string,
    baseUrl: string = typeof window !== 'undefined' ? window.location.origin : ''
): string => {
    return `${baseUrl}/articles?slug=${articleSlug}#highlight=${highlightId}`;
}; 