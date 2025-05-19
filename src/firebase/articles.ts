import { collection, addDoc, getDocs, getDoc, doc, query, orderBy, Timestamp, where, DocumentData, DocumentSnapshot, deleteDoc, updateDoc, arrayUnion, arrayRemove, limit as firestoreLimit, QueryConstraint } from 'firebase/firestore';
import { db, auth } from './clientApp';
import { createCommentNotification } from './notifications';

// Article interface matching our Firestore structure
export interface Article {
    id?: string;
    title: string;
    body: string;
    createdAt: Timestamp;
    updatedAt?: Timestamp;
    authorId: string;
    authorName: string;
    tags?: string[];
    coverImage?: string | null;
    slug?: string;
    status?: 'published' | 'drafts';
    likes?: string[];
    excerpt?: string;
    viewCount?: number;
    reposts?: string[];
    comments?: any[];
}

// Comment interfaces for Firestore
export interface ArticleComment {
    id?: string;
    commentId?: string;
    userId: string;
    userName: string;
    content: string;
    createdAt: Timestamp;
    likes: string[];
    replies: CommentReply[];
}

export interface CommentReply {
    replyId: string;
    userId: string;
    userName: string;
    content: string;
    createdAt: Timestamp;
    likes: string[];
}

// Get articles from Firestore, ordered by createdAt desc, with optional limit and draft inclusion
export async function getArticles(options: { limit?: number; includeDrafts?: boolean } = {}) {
    const { limit, includeDrafts = false } = options;
    console.log('getArticles called with limit:', limit);
    try {
        const articlesRef = collection(db, 'articles');
        const queryConstraints = [];

        if (!includeDrafts) {
            // If status is explicitly 'published' OR if status field does not exist (older data might not have it)
            // Firestore doesn't easily support "OR" across different fields or "field not exists" in combination with other `where` on same field.
            // A common approach is to ensure all articles have a status.
            // For now, we'll explicitly query for 'published'. If you need to include articles where 'status' is undefined
            // as 'published', you might need two separate queries or adjust your data model to always include a 'status'.
            queryConstraints.push(where('status', '==', 'published'));
        }
        // Always order by creation date
        queryConstraints.push(orderBy('createdAt', 'desc'));

        if (limit && limit > 0) {
            console.log('Adding limit constraint:', limit);
            queryConstraints.push(firestoreLimit(limit));
        }

        const q = query(articlesRef, ...queryConstraints);
        const querySnapshot = await getDocs(q);
        console.log('Query returned document count:', querySnapshot.size);

        const articles: Article[] = [];
        querySnapshot.forEach((docSnapshot) => {
            const articleData = docSnapshot.data() as Omit<Article, 'id'>;

            // The query now handles filtering for published status if includeDrafts is false.
            // If includeDrafts is true, no status filter is applied in the query.
            articles.push({
                id: docSnapshot.id,
                ...articleData
            });
        });

        return articles;
    } catch (error) {
        console.error('Error getting articles:', error);
        throw error;
    }
}

// Get a single article by ID
export async function getArticleById(id: string): Promise<Article | null> {
    try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            } as Article;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting article:', error);
        throw error;
    }
}

// Get a single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    try {
        const articlesRef = collection(db, 'articles');
        const q = query(articlesRef, where('slug', '==', slug), where('status', '==', 'published'));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const docSnap = querySnapshot.docs[0];
        return {
            id: docSnap.id,
            ...docSnap.data()
        } as Article;
    } catch (error) {
        console.error('Error getting article by slug:', error);
        throw error;
    }
}

// Create a new article
export async function createArticle(articleInput: Partial<Omit<Article, 'id' | 'createdAt' | 'authorId' | 'authorName'>> & { title: string; body: string; }) {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to create an article');
        }

        const newArticleData: Omit<Article, 'id'> = {
            title: articleInput.title,
            body: articleInput.body,
            slug: articleInput.slug || articleInput.title
                .toLowerCase()
                .replace(/[\s\W-]+/g, '-')
                .replace(/^-+|-+$/g, ''),
            createdAt: Timestamp.now(),
            authorId: user.uid,
            authorName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            tags: articleInput.tags || [],
            status: articleInput.status || 'published',
            coverImage: articleInput.coverImage || null,
            likes: [],
            excerpt: articleInput.excerpt || '',
            viewCount: 0,
            reposts: [],
            comments: []
        };

        const docRef = await addDoc(collection(db, 'articles'), newArticleData);
        return {
            id: docRef.id,
            ...newArticleData
        } as Article;
    } catch (error) {
        console.error('Error creating article:', error);
        throw error;
    }
}

// Update an existing article
export async function updateArticle(articleId: string, articleData: Partial<Omit<Article, 'id' | 'createdAt' | 'authorId' | 'authorName'>>) {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to edit an article');
        }

        const articleRef = doc(db, 'articles', articleId);
        const articleSnap = await getDoc(articleRef);

        if (!articleSnap.exists()) {
            throw new Error('Article not found');
        }

        const existingArticleData = articleSnap.data() as Article;
        if (existingArticleData.authorId !== user.uid) {
            throw new Error('You can only edit your own articles');
        }

        const updateData: Partial<Article> = { ...articleData };

        if (articleData.title && !articleData.slug) {
            updateData.slug = articleData.title
                .toLowerCase()
                .replace(/[\s\W-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
        updateData.updatedAt = Timestamp.now();

        await updateDoc(articleRef, updateData);

        const updatedArticleSnap = await getDoc(articleRef);
        return {
            id: updatedArticleSnap.id,
            ...updatedArticleSnap.data()
        } as Article;
    } catch (error) {
        console.error('Error updating article:', error);
        throw error;
    }
}

// Comments functions
export async function getArticleComments(articleId: string) {
    try {
        const commentsRef = collection(db, 'articles', articleId, 'comments');
        const q = query(commentsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const comments: ArticleComment[] = [];
        querySnapshot.forEach((doc) => {
            const commentData = doc.data() as Omit<ArticleComment, 'id' | 'commentId'>;
            comments.push({
                id: doc.id,
                commentId: doc.id,
                ...commentData,
                replies: commentData.replies || []
            });
        });

        return comments;
    } catch (error) {
        console.error('Error getting comments:', error);
        throw error;
    }
}

export async function addComment(articleId: string, content: string) {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to comment');
        }

        const newComment: Omit<ArticleComment, 'id' | 'commentId'> = {
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: Timestamp.now(),
            likes: [],
            replies: []
        };

        const docRef = await addDoc(collection(db, 'articles', articleId, 'comments'), newComment);

        const articleInfoForNotification = await getArticleById(articleId);
        if (articleInfoForNotification && articleInfoForNotification.authorId !== user.uid) {
            await createCommentNotification(
                articleInfoForNotification.authorId,
                articleId,
                articleInfoForNotification.slug || '',
                articleInfoForNotification.title || 'Article',
                docRef.id,
                content
            );
        }

        return {
            id: docRef.id,
            commentId: docRef.id,
            ...newComment
        } as ArticleComment;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
}

export async function addReply(articleId: string, commentId: string, content: string): Promise<CommentReply> {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to reply');
        }

        const commentRef = doc(db, 'articles', articleId, 'comments', commentId);
        const commentSnap = await getDoc(commentRef);

        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }

        const newReply: CommentReply = {
            replyId: Math.random().toString(36).substring(2, 15),
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: Timestamp.now(),
            likes: []
        };

        await updateDoc(commentRef, {
            replies: arrayUnion(newReply)
        });

        const commentData = commentSnap.data() as ArticleComment;
        if (commentData.userId !== user.uid) {
            const articleInfo = await getArticleById(articleId);
            console.log(`User ${user.uid} replied to comment ${commentId} by ${commentData.userId} on article ${articleInfo?.title}`);
        }

        return newReply;
    } catch (error) {
        console.error('Error adding reply:', error);
        throw error;
    }
}

export async function likeComment(articleId: string, commentId: string) {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to like a comment');
        }

        const commentRef = doc(db, 'articles', articleId, 'comments', commentId);
        const commentSnap = await getDoc(commentRef);

        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }

        const commentData = commentSnap.data() as ArticleComment;
        const userId = user.uid;

        const likes = commentData.likes || [];
        const hasLiked = likes.includes(userId);

        await updateDoc(commentRef, {
            likes: hasLiked ? arrayRemove(userId) : arrayUnion(userId)
        });

        const updatedSnap = await getDoc(commentRef);
        const updatedData = updatedSnap.data() as ArticleComment;

        return {
            success: true,
            action: hasLiked ? 'unliked' : 'liked',
            likes: updatedData.likes,
            count: updatedData.likes.length
        };
    } catch (error) {
        console.error('Error liking comment:', error);
        throw error;
    }
}

export async function deleteComment(articleId: string, commentId: string) {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to delete a comment');
        }

        const commentRef = doc(db, 'articles', articleId, 'comments', commentId);
        const commentSnap = await getDoc(commentRef);

        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }

        const commentData = commentSnap.data() as ArticleComment;

        if (commentData.userId !== user.uid) {
            throw new Error('You can only delete your own comments');
        }

        await deleteDoc(commentRef);

        return {
            success: true,
            message: 'Comment deleted successfully'
        };
    } catch (error) {
        console.error('Error deleting comment:', error);
        throw error;
    }
}

// Delete an article
export async function deleteArticle(articleId: string) {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to delete an article');
        }

        const articleRef = doc(db, 'articles', articleId);
        const articleDoc = await getDoc(articleRef);

        if (!articleDoc.exists()) {
            throw new Error('Article not found');
        }

        const articleData = articleDoc.data() as Article;

        if (articleData.authorId !== user.uid) {
            throw new Error('You can only delete your own articles');
        }

        await deleteDoc(articleRef);

        return {
            success: true,
            message: 'Article deleted successfully'
        };
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
}

// Get articles by tag
export async function getArticlesByTag(tag: string, options: { limit?: number } = {}) {
    const { limit: queryLimit } = options;
    try {
        const articlesRef = collection(db, 'articles');
        const queryConstraints: QueryConstraint[] = [
            where('tags', 'array-contains', tag),
            where('status', '==', 'published'),
            orderBy('createdAt', 'desc')
        ];

        if (queryLimit && queryLimit > 0) {
            queryConstraints.push(firestoreLimit(queryLimit));
        }

        const q = query(articlesRef, ...queryConstraints);
        const querySnapshot = await getDocs(q);

        const articles: Article[] = [];
        querySnapshot.forEach((docSnapshot) => {
            articles.push({
                id: docSnapshot.id,
                ...docSnapshot.data()
            } as Article);
        });

        return articles;
    } catch (error) {
        console.error('Error getting articles by tag:', error);
        throw error;
    }
} 