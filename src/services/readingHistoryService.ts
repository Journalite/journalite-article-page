import {
    doc,
    setDoc,
    getDoc,
    query,
    collection,
    where,
    getDocs,
    orderBy,
    limit,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    Timestamp
} from 'firebase/firestore';
import { db, auth } from '../firebase/clientApp';

export interface ReadingProgress {
    userId: string;
    articleId: string;
    articleTitle: string;
    articleSlug: string;
    progress: number; // 0-100 percentage
    lastReadAt: Timestamp;
    estimatedTimeLeft: number; // in minutes
}

export interface RecentlyViewed {
    userId: string;
    articleId: string;
    articleTitle: string;
    articleSlug: string;
    viewedAt: Timestamp;
    authorName: string;
}

export interface SavedArticle {
    userId: string;
    articleId: string;
    articleTitle: string;
    articleSlug: string;
    savedAt: Timestamp;
    authorName: string;
    tags?: string[];
}

// Save or update reading progress
export async function saveReadingProgress(
    articleId: string,
    articleTitle: string,
    articleSlug: string,
    progress: number,
    estimatedTimeLeft: number
): Promise<void> {
    const user = auth.currentUser;
    if (!user) return;

    const progressDoc = doc(db, 'readingProgress', `${user.uid}_${articleId}`);

    await setDoc(progressDoc, {
        userId: user.uid,
        articleId,
        articleTitle,
        articleSlug,
        progress,
        lastReadAt: serverTimestamp(),
        estimatedTimeLeft
    });
}

// Get user's reading progress (unfinished articles)
export async function getUserReadingProgress(userId?: string): Promise<ReadingProgress[]> {
    const user = auth.currentUser;
    const targetUserId = userId || user?.uid;
    if (!targetUserId) return [];

    try {
        const progressRef = collection(db, 'readingProgress');
        const q = query(
            progressRef,
            where('userId', '==', targetUserId),
            where('progress', '<', 100), // Only unfinished articles
            orderBy('lastReadAt', 'desc'),
            limit(5)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            ...doc.data(),
            lastReadAt: doc.data().lastReadAt
        })) as ReadingProgress[];
    } catch (error) {
        console.error('Error fetching reading progress:', error);
        return [];
    }
}

// Add article to recently viewed
export async function addToRecentlyViewed(
    articleId: string,
    articleTitle: string,
    articleSlug: string,
    authorName: string
): Promise<void> {
    const user = auth.currentUser;
    if (!user) return;

    const recentDoc = doc(db, 'recentlyViewed', `${user.uid}_${articleId}`);

    await setDoc(recentDoc, {
        userId: user.uid,
        articleId,
        articleTitle,
        articleSlug,
        authorName,
        viewedAt: serverTimestamp()
    });
}

// Get user's recently viewed articles
export async function getRecentlyViewed(userId?: string): Promise<RecentlyViewed[]> {
    const user = auth.currentUser;
    const targetUserId = userId || user?.uid;
    if (!targetUserId) return [];

    try {
        const recentRef = collection(db, 'recentlyViewed');
        const q = query(
            recentRef,
            where('userId', '==', targetUserId),
            orderBy('viewedAt', 'desc'),
            limit(5)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            ...doc.data(),
            viewedAt: doc.data().viewedAt
        })) as RecentlyViewed[];
    } catch (error) {
        console.error('Error fetching recently viewed:', error);
        return [];
    }
}

// Save article for later
export async function saveArticleForLater(
    articleId: string,
    articleTitle: string,
    articleSlug: string,
    authorName: string,
    tags?: string[]
): Promise<void> {
    const user = auth.currentUser;
    if (!user) return;

    const savedDoc = doc(db, 'savedArticles', `${user.uid}_${articleId}`);

    await setDoc(savedDoc, {
        userId: user.uid,
        articleId,
        articleTitle,
        articleSlug,
        authorName,
        tags: tags || [],
        savedAt: serverTimestamp()
    });
}

// Remove article from saved
export async function removeSavedArticle(articleId: string): Promise<void> {
    const user = auth.currentUser;
    if (!user) return;

    const savedDoc = doc(db, 'savedArticles', `${user.uid}_${articleId}`);
    await deleteDoc(savedDoc);
}

// Get user's saved articles
export async function getSavedArticles(userId?: string): Promise<SavedArticle[]> {
    const user = auth.currentUser;
    const targetUserId = userId || user?.uid;
    if (!targetUserId) return [];

    try {
        const savedRef = collection(db, 'savedArticles');
        const q = query(
            savedRef,
            where('userId', '==', targetUserId),
            orderBy('savedAt', 'desc'),
            limit(10)
        );

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            ...doc.data(),
            savedAt: doc.data().savedAt
        })) as SavedArticle[];
    } catch (error) {
        console.error('Error fetching saved articles:', error);
        return [];
    }
}

// Check if article is saved by user
export async function isArticleSaved(articleId: string): Promise<boolean> {
    const user = auth.currentUser;
    if (!user) return false;

    try {
        const savedDoc = doc(db, 'savedArticles', `${user.uid}_${articleId}`);
        const docSnap = await getDoc(savedDoc);
        return docSnap.exists();
    } catch (error) {
        console.error('Error checking if article is saved:', error);
        return false;
    }
}

// Format time ago helper
export function formatTimeAgo(timestamp: Timestamp): string {
    const now = new Date();
    const time = timestamp.toDate();
    const diff = now.getTime() - time.getTime();

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
        return `${minutes} min ago`;
    } else if (hours < 24) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days < 7) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        return time.toLocaleDateString();
    }
} 