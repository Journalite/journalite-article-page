import { collection, addDoc, getDocs, getDoc, doc, query, orderBy, Timestamp, where, DocumentData, DocumentSnapshot, deleteDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db, auth } from './clientApp';
import { createCommentNotification } from './notifications';

// Article interface matching our Firestore structure
export interface Article {
    id?: string;
    title: string;
    body: string;
    createdAt: Timestamp;
    authorId: string;
    authorName: string;
    tags: string[];
    coverImage?: string;
    slug?: string;
    status?: 'published' | 'drafts';
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

// Get all articles from Firestore, ordered by createdAt desc
export async function getArticles(includeDrafts = false) {
    try {
        const articlesRef = collection(db, 'articles');
        let q;

        if (includeDrafts) {
            // Return all articles regardless of status
            q = query(articlesRef, orderBy('createdAt', 'desc'));
        } else {
            // Only return published articles
            q = query(
                articlesRef,
                orderBy('createdAt', 'desc')
            );
        }

        const querySnapshot = await getDocs(q);

        const articles: Article[] = [];
        querySnapshot.forEach((doc) => {
            const articleData = doc.data() as Omit<Article, 'id'>;

            // Include documents where status is 'published' or not set at all
            if (!includeDrafts && articleData.status === 'drafts') {
                return;
            }

            // Include articles with status='published' or no status field
            if (!includeDrafts && articleData.status !== undefined && articleData.status !== 'published') {
                return;
            }

            articles.push({
                id: doc.id,
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
export async function getArticleById(id: string) {
    try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data() as Omit<Article, 'id'>
            };
        } else {
            throw new Error('Article not found');
        }
    } catch (error) {
        console.error('Error getting article:', error);
        throw error;
    }
}

// Get a single article by slug
export async function getArticleBySlug(slug: string) {
    try {
        const articlesRef = collection(db, 'articles');
        const q = query(articlesRef, where('slug', '==', slug));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            throw new Error('Article not found');
        }

        const docSnap = querySnapshot.docs[0];
        return {
            id: docSnap.id,
            ...docSnap.data() as Omit<Article, 'id'>
        };
    } catch (error) {
        console.error('Error getting article by slug:', error);
        throw error;
    }
}

// Create a new article
export async function createArticle(article: Omit<Article, 'id' | 'createdAt' | 'authorId' | 'authorName'>) {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('You must be logged in to create an article');
        }

        // Create the basic article object with required fields
        const newArticle: any = {
            title: article.title,
            body: article.body,
            slug: article.slug || article.title
                .toLowerCase()
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-'),
            createdAt: Timestamp.now(),
            authorId: user.uid,
            authorName: user.displayName || 'Anonymous',
            tags: article.tags || [],
            status: article.status || 'published' // Default to published if not specified
        };

        // Only add optional fields if they exist and have values
        if (article.coverImage) {
            newArticle.coverImage = article.coverImage;
        }

        const docRef = await addDoc(collection(db, 'articles'), newArticle);
        return {
            id: docRef.id,
            ...newArticle
        };
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

        // First check if the article exists and belongs to the current user
        const articleRef = doc(db, 'articles', articleId);
        const articleSnap = await getDoc(articleRef);

        if (!articleSnap.exists()) {
            throw new Error('Article not found');
        }

        const articleData1 = articleSnap.data();
        if (articleData1.authorId !== user.uid) {
            throw new Error('You can only edit your own articles');
        }

        // Create the update object
        const updateData: any = {};

        // Only include fields that were provided
        if (articleData.title !== undefined) {
            updateData.title = articleData.title;

            // If title changed, update slug as well (unless slug is explicitly provided)
            if (articleData.slug === undefined) {
                updateData.slug = articleData.title
                    .toLowerCase()
                    .replace(/[^\w\s]/gi, '')
                    .replace(/\s+/g, '-');
            }
        }

        if (articleData.body !== undefined) {
            updateData.body = articleData.body;
        }

        if (articleData.tags !== undefined) {
            updateData.tags = articleData.tags;
        }

        if (articleData.status !== undefined) {
            updateData.status = articleData.status;
        }

        if (articleData.coverImage !== undefined) {
            updateData.coverImage = articleData.coverImage;
        }

        if (articleData.slug !== undefined) {
            updateData.slug = articleData.slug;
        }

        // Update the article
        await updateDoc(articleRef, updateData);

        // Return the updated article
        const updatedArticleSnap = await getDoc(articleRef);
        return {
            id: updatedArticleSnap.id,
            ...updatedArticleSnap.data() as Omit<Article, 'id'>
        };
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
                commentId: doc.id, // Add commentId for compatibility with existing UI
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

        const newComment = {
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: Timestamp.now(),
            likes: [],
            replies: []
        };

        const docRef = await addDoc(collection(db, 'articles', articleId, 'comments'), newComment);

        // Get article information for the notification
        const articleRef = doc(db, 'articles', articleId);
        const articleSnap = await getDoc(articleRef);

        if (articleSnap.exists()) {
            const articleData = articleSnap.data();
            // Trigger notification to the article owner
            await createCommentNotification(
                articleData.authorId,
                articleId,
                articleData.slug || '',
                articleData.title || 'Article',
                docRef.id,
                content
            );
        }

        return {
            id: docRef.id,
            commentId: docRef.id, // Add commentId for compatibility
            ...newComment
        };
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
}

export async function addReply(articleId: string, commentId: string, content: string) {
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

        const newReply = {
            replyId: Math.random().toString(36).substring(2, 15), // Generate a unique ID
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: Timestamp.now(),
            likes: []
        };

        // Add the reply to the replies array
        await updateDoc(commentRef, {
            replies: arrayUnion(newReply)
        });

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

        // Check if the user already liked the comment
        const likes = commentData.likes || [];
        const hasLiked = likes.includes(userId);

        if (hasLiked) {
            // Remove the like
            await updateDoc(commentRef, {
                likes: arrayRemove(userId)
            });

            // Get updated likes
            const updatedSnap = await getDoc(commentRef);
            const updatedData = updatedSnap.data() as ArticleComment;

            return {
                success: true,
                action: 'unliked',
                likes: updatedData.likes,
                count: updatedData.likes.length
            };
        } else {
            // Add the like
            await updateDoc(commentRef, {
                likes: arrayUnion(userId)
            });

            // Get updated likes
            const updatedSnap = await getDoc(commentRef);
            const updatedData = updatedSnap.data() as ArticleComment;

            return {
                success: true,
                action: 'liked',
                likes: updatedData.likes,
                count: updatedData.likes.length
            };
        }
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

        // Check if the user is the comment author
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

        // Get the article to check ownership
        const articleDoc = await getDoc(doc(db, 'articles', articleId));

        if (!articleDoc.exists()) {
            throw new Error('Article not found');
        }

        const articleData = articleDoc.data();

        // Only the author can delete their article
        if (articleData.authorId !== user.uid) {
            throw new Error('You can only delete your own articles');
        }

        // Delete the article
        await deleteDoc(doc(db, 'articles', articleId));

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
export async function getArticlesByTag(tag: string) {
    try {
        const articlesRef = collection(db, 'articles');

        // Query for articles that have the specified tag and are published
        const q = query(
            articlesRef,
            where('tags', 'array-contains', tag),
            where('status', '==', 'published'),
            orderBy('createdAt', 'desc')
        );

        const querySnapshot = await getDocs(q);

        const articles: Article[] = [];
        querySnapshot.forEach((doc) => {
            const articleData = doc.data() as Omit<Article, 'id'>;
            articles.push({
                id: doc.id,
                ...articleData
            });
        });

        return articles;
    } catch (error) {
        console.error('Error getting articles by tag:', error);
        throw error;
    }
} 