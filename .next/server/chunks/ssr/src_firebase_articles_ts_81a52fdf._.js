module.exports = {

"[project]/src/firebase/articles.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addComment": (()=>addComment),
    "addReply": (()=>addReply),
    "createArticle": (()=>createArticle),
    "deleteArticle": (()=>deleteArticle),
    "deleteComment": (()=>deleteComment),
    "getArticleById": (()=>getArticleById),
    "getArticleBySlug": (()=>getArticleBySlug),
    "getArticleComments": (()=>getArticleComments),
    "getArticles": (()=>getArticles),
    "getArticlesByTag": (()=>getArticlesByTag),
    "likeComment": (()=>likeComment),
    "updateArticle": (()=>updateArticle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/notifications.ts [app-ssr] (ecmascript)");
;
;
;
async function getArticles(options = {}) {
    const { limit, includeDrafts = false } = options;
    if (("TURBOPACK compile-time value", "development") === 'development' && limit) {
        console.log('getArticles called with limit:', limit);
    }
    try {
        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles');
        const queryConstraints = [];
        if (!includeDrafts) {
            // If status is explicitly 'published' OR if status field does not exist (older data might not have it)
            // Firestore doesn't easily support "OR" across different fields or "field not exists" in combination with other `where` on same field.
            // A common approach is to ensure all articles have a status.
            // For now, we'll explicitly query for 'published'. If you need to include articles where 'status' is undefined
            // as 'published', you might need two separate queries or adjust your data model to always include a 'status'.
            queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'));
        }
        // Always order by creation date
        queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        if (limit && limit > 0) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('Adding limit constraint:', limit);
            }
            queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(limit));
        }
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(articlesRef, ...queryConstraints);
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        if ("TURBOPACK compile-time truthy", 1) {
            console.log('Query returned document count:', querySnapshot.size);
        }
        const articles = [];
        querySnapshot.forEach((docSnapshot)=>{
            const articleData = docSnapshot.data();
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
async function getArticleById(id) {
    const timestamp = Date.now();
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`🔄 DIRECT FETCH: Getting article with ID: ${id} (time: ${timestamp})`);
    }
    try {
        // Completely bypass any caching by making a direct Firestore call
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', id);
        // Direct Firestore fetch with no caching
        // Get fresh data directly
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const articleData = {
                id: docSnap.id,
                ...docSnap.data()
            };
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('✅ Article found:', articleData.title);
                console.log('📄 Content length:', articleData.body?.length || 0);
                console.log('🏷️ Tags:', articleData.tags?.join(', ') || 'none');
            }
            // Return fresh data
            return articleData;
        } else {
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('❌ Article not found for ID:', id);
            }
            return null;
        }
    } catch (error) {
        console.error('🛑 Error getting article:', error);
        throw error;
    }
}
async function getArticleBySlug(slug) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`Getting article by slug: ${slug}, timestamp: ${Date.now()}`);
    }
    // Implement retry logic for better reliability
    const maxAttempts = 3;
    let attempts = 0;
    while(attempts < maxAttempts){
        attempts++;
        if ("TURBOPACK compile-time truthy", 1) {
            console.log(`Attempt ${attempts} to get article by slug`);
        }
        try {
            const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('slug', '==', slug), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(1));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                const articleData = {
                    id: doc.id,
                    ...doc.data()
                };
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('Article found by slug:', articleData.title, 'Content length:', articleData.body?.length || 0);
                }
                return articleData;
            } else if (attempts === maxAttempts) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('Article not found for slug after multiple attempts:', slug);
                }
                return null;
            } else {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log(`Article not found by slug on attempt ${attempts}, will retry...`);
                }
                await new Promise((resolve)=>setTimeout(resolve, 1000)); // Wait 1 second before retry
            }
        } catch (error) {
            console.error('Error getting article by slug:', error);
            if (attempts === maxAttempts) throw error;
        }
    }
    return null;
}
async function createArticle(articleInput) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to create an article');
        }
        const newArticleData = {
            title: articleInput.title,
            body: articleInput.body,
            slug: articleInput.slug || articleInput.title.toLowerCase().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, ''),
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            authorId: user.uid,
            authorName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            tags: articleInput.tags || [],
            status: articleInput.status || 'published',
            coverImage: articleInput.coverImage || null,
            likes: [],
            excerpt: articleInput.excerpt || '',
            viewCount: 0,
            reposts: [],
            comments: [],
            hasReflectionRoom: articleInput.hasReflectionRoom || false
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles'), newArticleData);
        return {
            id: docRef.id,
            ...newArticleData
        };
    } catch (error) {
        console.error('Error creating article:', error);
        throw error;
    }
}
async function updateArticle(articleId, articleData) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to edit an article');
        }
        const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId);
        const articleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
        if (!articleSnap.exists()) {
            throw new Error('Article not found');
        }
        const existingArticleData = articleSnap.data();
        if (existingArticleData.authorId !== user.uid) {
            throw new Error('You can only edit your own articles');
        }
        const updateData = {
            ...articleData
        };
        // Always update slug when title changes to ensure published articles reflect changes
        if (articleData.title) {
            updateData.slug = articleData.title.toLowerCase().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('Updated slug to:', updateData.slug);
            }
        }
        updateData.updatedAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(articleRef, updateData);
        const updatedArticleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
        if (updatedArticleSnap.exists()) {
            const updatedData = updatedArticleSnap.data();
            return {
                id: updatedArticleSnap.id,
                ...updatedData
            };
        } else {
            // Fallback: return the expected data structure
            return {
                id: articleId,
                ...updateData,
                createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
                updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
            };
        }
    } catch (error) {
        console.error('Error updating article:', error);
        throw error;
    }
}
async function getArticleComments(articleId) {
    try {
        const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(commentsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const comments = [];
        querySnapshot.forEach((doc)=>{
            const commentData = doc.data();
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
async function addComment(articleId, content) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to comment');
        }
        const newComment = {
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            likes: [],
            replies: []
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments'), newComment);
        const articleInfoForNotification = await getArticleById(articleId);
        if (articleInfoForNotification && articleInfoForNotification.authorId !== user.uid) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCommentNotification"])(articleInfoForNotification.authorId, articleId, articleInfoForNotification.slug || '', articleInfoForNotification.title || 'Article', docRef.id, content);
        }
        return {
            id: docRef.id,
            commentId: docRef.id,
            ...newComment
        };
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
}
async function addReply(articleId, commentId, content) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to reply');
        }
        const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
        const commentSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }
        const newReply = {
            replyId: Math.random().toString(36).substring(2, 15),
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            likes: []
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
            replies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(newReply)
        });
        const commentData = commentSnap.data();
        if (commentData.userId !== user.uid) {
            const articleInfo = await getArticleById(articleId);
            if ("TURBOPACK compile-time truthy", 1) {
                console.log(`User ${user.uid} replied to comment ${commentId} by ${commentData.userId} on article ${articleInfo?.title}`);
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCommentNotification"])(commentData.userId, articleId, articleInfo?.slug || '', articleInfo?.title || 'Article', newReply.replyId, content);
        }
        return newReply;
    } catch (error) {
        console.error('Error adding reply:', error);
        throw error;
    }
}
async function likeComment(articleId, commentId) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to like a comment');
        }
        const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
        const commentSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }
        const commentData = commentSnap.data();
        const userId = user.uid;
        const likes = commentData.likes || [];
        const hasLiked = likes.includes(userId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
            likes: hasLiked ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRemove"])(userId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(userId)
        });
        const updatedSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
        const updatedData = updatedSnap.data();
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
async function deleteComment(articleId, commentId) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to delete a comment');
        }
        const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
        const commentSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }
        const commentData = commentSnap.data();
        if (commentData.userId !== user.uid) {
            throw new Error('You can only delete your own comments');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(commentRef);
        return {
            success: true,
            message: 'Comment deleted successfully'
        };
    } catch (error) {
        console.error('Error deleting comment:', error);
        throw error;
    }
}
async function deleteArticle(articleId) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to delete an article');
        }
        const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId);
        const articleDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
        if (!articleDoc.exists()) {
            throw new Error('Article not found');
        }
        const articleData = articleDoc.data();
        if (articleData.authorId !== user.uid) {
            throw new Error('You can only delete your own articles');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(articleRef);
        return {
            success: true,
            message: 'Article deleted successfully'
        };
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
}
async function getArticlesByTag(tag, options = {}) {
    const { limit: queryLimit } = options;
    try {
        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles');
        const queryConstraints = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('tags', 'array-contains', tag),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc')
        ];
        if (queryLimit && queryLimit > 0) {
            queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(queryLimit));
        }
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(articlesRef, ...queryConstraints);
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const articles = [];
        querySnapshot.forEach((docSnapshot)=>{
            articles.push({
                id: docSnapshot.id,
                ...docSnapshot.data()
            });
        });
        return articles;
    } catch (error) {
        console.error('Error getting articles by tag:', error);
        throw error;
    }
}
}}),

};

//# sourceMappingURL=src_firebase_articles_ts_81a52fdf._.js.map