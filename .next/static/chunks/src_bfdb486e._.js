(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/styles/ArticlePage.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "articleActions": "ArticlePage-module__RPh7Qa__articleActions",
  "articleDetails": "ArticlePage-module__RPh7Qa__articleDetails",
  "articleHeader": "ArticlePage-module__RPh7Qa__articleHeader",
  "articleMeta": "ArticlePage-module__RPh7Qa__articleMeta",
  "articlePageContainer": "ArticlePage-module__RPh7Qa__articlePageContainer",
  "articleTitle": "ArticlePage-module__RPh7Qa__articleTitle",
  "authButtons": "ArticlePage-module__RPh7Qa__authButtons",
  "authorAvatar": "ArticlePage-module__RPh7Qa__authorAvatar",
  "authorDetails": "ArticlePage-module__RPh7Qa__authorDetails",
  "authorInfo": "ArticlePage-module__RPh7Qa__authorInfo",
  "authorName": "ArticlePage-module__RPh7Qa__authorName",
  "authorNameLink": "ArticlePage-module__RPh7Qa__authorNameLink",
  "cancelButton": "ArticlePage-module__RPh7Qa__cancelButton",
  "commentsContainer": "ArticlePage-module__RPh7Qa__commentsContainer",
  "dropdownItem": "ArticlePage-module__RPh7Qa__dropdownItem",
  "editButton": "ArticlePage-module__RPh7Qa__editButton",
  "editingHeader": "ArticlePage-module__RPh7Qa__editingHeader",
  "errorContainer": "ArticlePage-module__RPh7Qa__errorContainer",
  "errorMessage": "ArticlePage-module__RPh7Qa__errorMessage",
  "headerActions": "ArticlePage-module__RPh7Qa__headerActions",
  "headerContainer": "ArticlePage-module__RPh7Qa__headerContainer",
  "headerLogo": "ArticlePage-module__RPh7Qa__headerLogo",
  "likeButton": "ArticlePage-module__RPh7Qa__likeButton",
  "likeIcon": "ArticlePage-module__RPh7Qa__likeIcon",
  "liked": "ArticlePage-module__RPh7Qa__liked",
  "loadingContainer": "ArticlePage-module__RPh7Qa__loadingContainer",
  "loadingIndicator": "ArticlePage-module__RPh7Qa__loadingIndicator",
  "loginButton": "ArticlePage-module__RPh7Qa__loginButton",
  "logoLink": "ArticlePage-module__RPh7Qa__logoLink",
  "pageContainer": "ArticlePage-module__RPh7Qa__pageContainer",
  "pageHeader": "ArticlePage-module__RPh7Qa__pageHeader",
  "profileCircle": "ArticlePage-module__RPh7Qa__profileCircle",
  "profileDropdown": "ArticlePage-module__RPh7Qa__profileDropdown",
  "profileMenu": "ArticlePage-module__RPh7Qa__profileMenu",
  "relatedTag": "ArticlePage-module__RPh7Qa__relatedTag",
  "relatedTagsHeading": "ArticlePage-module__RPh7Qa__relatedTagsHeading",
  "relatedTagsList": "ArticlePage-module__RPh7Qa__relatedTagsList",
  "relatedTagsSection": "ArticlePage-module__RPh7Qa__relatedTagsSection",
  "signupButton": "ArticlePage-module__RPh7Qa__signupButton",
  "spin": "ArticlePage-module__RPh7Qa__spin",
  "tag": "ArticlePage-module__RPh7Qa__tag",
  "tagContainer": "ArticlePage-module__RPh7Qa__tagContainer",
  "writeButton": "ArticlePage-module__RPh7Qa__writeButton",
});
}}),
"[project]/src/firebase/clientApp.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "analytics": (()=>analytics),
    "app": (()=>app),
    "auth": (()=>auth),
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/analytics/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Firebase configuration from environment variables
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCFpybhLt43iKUw6lNahU1n2zjYv0BXmf4"),
    authDomain: ("TURBOPACK compile-time value", "journalitev1.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "journalitev1"),
    storageBucket: ("TURBOPACK compile-time value", "journalitev1.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "897263211529"),
    appId: ("TURBOPACK compile-time value", "1:897263211529:web:bae4a00910a2236d6d54d8"),
    measurementId: ("TURBOPACK compile-time value", "G-ZYT8PRMT0D")
};
///
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
// Initialize Analytics only in browser environment
let analytics;
if ("TURBOPACK compile-time truthy", 1) {
    try {
        analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])(app);
    } catch (error) {
    // Analytics initialization skipped in development
    }
}
// Initialize Firebase Authentication
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
// Initialize Firestore
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// Configure custom auth actions URL
if ("TURBOPACK compile-time truthy", 1) {
    const actionCodeSettings = {
        url: `${window.location.origin}/reset-password`,
        handleCodeInApp: true
    };
// We need to update this in the forgot-password component when sending the reset email
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/firebase/notifications.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCommentNotification": (()=>createCommentNotification),
    "createFollowNotification": (()=>createFollowNotification),
    "deleteNotification": (()=>deleteNotification),
    "getUnreadNotificationsCount": (()=>getUnreadNotificationsCount),
    "getUserNotifications": (()=>getUserNotifications),
    "markAllNotificationsAsRead": (()=>markAllNotificationsAsRead),
    "markNotificationAsRead": (()=>markNotificationAsRead)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
;
;
async function createCommentNotification(ownerId, articleId, articleSlug, articleTitle, commentId, commentText) {
    try {
        // Skip if the owner is the commenter (don't notify yourself)
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser || currentUser.uid === ownerId) {
            return null;
        }
        // Create notification object
        const notification = {
            userId: ownerId,
            type: 'comment',
            read: false,
            sourceId: commentId,
            sourceType: 'comment',
            message: `${currentUser.displayName || 'Someone'} commented on your article: "${commentText.substring(0, 50)}${commentText.length > 50 ? '...' : ''}"`,
            fromUser: {
                id: currentUser.uid,
                name: currentUser.displayName || 'Anonymous'
            },
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            articleSlug,
            articleTitle
        };
        // Add to Firestore
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'notifications'), notification);
        return {
            id: docRef.id,
            ...notification
        };
    } catch (error) {
        console.error('Error creating notification:', error);
        return null;
    }
}
async function createFollowNotification(targetUserId, followerName, followerId, followerUsername) {
    try {
        // Skip if user is following themselves (shouldn't happen due to checks in followUser)
        if (targetUserId === followerId) {
            return null;
        }
        // Create notification object
        const notification = {
            userId: targetUserId,
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
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now()
        };
        // Add to Firestore
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'notifications'), notification);
        return {
            id: docRef.id,
            ...notification
        };
    } catch (error) {
        console.error('Error creating follow notification:', error);
        return null;
    }
}
async function getUserNotifications(unreadOnly = false) {
    try {
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        // Create base query
        const notificationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'notifications');
        let q;
        if (unreadOnly) {
            // Only fetch unread notifications
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('read', '==', false), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(100));
        } else {
            // Fetch all notifications
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(100));
        }
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const notifications = [];
        querySnapshot.forEach((doc)=>{
            notifications.push({
                id: doc.id,
                ...doc.data()
            });
        });
        return notifications;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
}
async function markNotificationAsRead(notificationId) {
    try {
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        const notificationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'notifications', notificationId);
        const notificationSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(notificationRef);
        if (!notificationSnap.exists()) {
            throw new Error('Notification not found');
        }
        const notificationData = notificationSnap.data();
        // Check if the notification belongs to the current user
        if (notificationData.userId !== currentUser.uid) {
            throw new Error('Unauthorized access to notification');
        }
        // Update the read status
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(notificationRef, {
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
async function markAllNotificationsAsRead() {
    try {
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        const notificationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'notifications');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('read', '==', false));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        // Create an array of promises to update each notification
        const updatePromises = querySnapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(doc.ref, {
                read: true
            }));
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
async function deleteNotification(notificationId) {
    try {
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        const notificationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'notifications', notificationId);
        const notificationSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(notificationRef);
        if (!notificationSnap.exists()) {
            throw new Error('Notification not found');
        }
        const notificationData = notificationSnap.data();
        // Check if the notification belongs to the current user
        if (notificationData.userId !== currentUser.uid) {
            throw new Error('Unauthorized access to notification');
        }
        // Delete the notification
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(notificationRef);
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting notification:', error);
        throw error;
    }
}
async function getUnreadNotificationsCount() {
    try {
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            return 0;
        }
        const notificationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'notifications');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('read', '==', false));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.size;
    } catch (error) {
        console.error('Error counting unread notifications:', error);
        return 0;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MinimalNotificationBell.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "badge": "MinimalNotificationBell-module__DQnHDG__badge",
  "button": "MinimalNotificationBell-module__DQnHDG__button",
  "container": "MinimalNotificationBell-module__DQnHDG__container",
  "content": "MinimalNotificationBell-module__DQnHDG__content",
  "dot": "MinimalNotificationBell-module__DQnHDG__dot",
  "dropdown": "MinimalNotificationBell-module__DQnHDG__dropdown",
  "empty": "MinimalNotificationBell-module__DQnHDG__empty",
  "footer": "MinimalNotificationBell-module__DQnHDG__footer",
  "header": "MinimalNotificationBell-module__DQnHDG__header",
  "icon": "MinimalNotificationBell-module__DQnHDG__icon",
  "item": "MinimalNotificationBell-module__DQnHDG__item",
  "list": "MinimalNotificationBell-module__DQnHDG__list",
  "message": "MinimalNotificationBell-module__DQnHDG__message",
  "seeMore": "MinimalNotificationBell-module__DQnHDG__seeMore",
  "time": "MinimalNotificationBell-module__DQnHDG__time",
  "unread": "MinimalNotificationBell-module__DQnHDG__unread",
  "viewAll": "MinimalNotificationBell-module__DQnHDG__viewAll",
});
}}),
"[project]/src/components/MinimalNotificationBell.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/notifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/MinimalNotificationBell.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/**
 * A minimalistic notification bell component designed for the article page header
 */ const MinimalNotificationBell = ()=>{
    _s();
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const notificationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch unread count on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MinimalNotificationBell.useEffect": ()=>{
            const fetchUnreadCount = {
                "MinimalNotificationBell.useEffect.fetchUnreadCount": async ()=>{
                    const count = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnreadNotificationsCount"])();
                    setUnreadCount(count);
                }
            }["MinimalNotificationBell.useEffect.fetchUnreadCount"];
            fetchUnreadCount();
            // Refresh every minute
            const interval = setInterval(fetchUnreadCount, 60000);
            return ({
                "MinimalNotificationBell.useEffect": ()=>clearInterval(interval)
            })["MinimalNotificationBell.useEffect"];
        }
    }["MinimalNotificationBell.useEffect"], []);
    // Handle clicks outside the dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MinimalNotificationBell.useEffect": ()=>{
            const handleClickOutside = {
                "MinimalNotificationBell.useEffect.handleClickOutside": (event)=>{
                    if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["MinimalNotificationBell.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "MinimalNotificationBell.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["MinimalNotificationBell.useEffect"];
        }
    }["MinimalNotificationBell.useEffect"], []);
    // Fetch notifications when dropdown is opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MinimalNotificationBell.useEffect": ()=>{
            if (isOpen) {
                fetchNotifications();
            }
        }
    }["MinimalNotificationBell.useEffect"], [
        isOpen
    ]);
    const fetchNotifications = async ()=>{
        try {
            const fetchedNotifications = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserNotifications"])(false);
            setNotifications(fetchedNotifications);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    };
    const handleNotificationClick = async (notification)=>{
        try {
            if (!notification.read && notification.id) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markNotificationAsRead"])(notification.id);
                // Update local state
                setUnreadCount((prev)=>Math.max(prev - 1, 0));
                setNotifications((prev)=>prev.map((n)=>n.id === notification.id ? {
                            ...n,
                            read: true
                        } : n));
            }
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };
    const formatTime = (timestamp)=>{
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();
        const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
        if (diffMinutes < 1) return 'Just now';
        if (diffMinutes < 60) return `${diffMinutes}m ago`;
        const diffHours = Math.floor(diffMinutes / 60);
        if (diffHours < 24) return `${diffHours}h ago`;
        const diffDays = Math.floor(diffHours / 24);
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString();
    };
    const getNotificationLink = (notification)=>{
        if (notification.type === 'follow') {
            if (notification.fromUser?.username) {
                return `/user/${notification.fromUser.username}`;
            }
            return '/notifications';
        } else if (notification.articleSlug) {
            return `/articles?slug=${notification.articleSlug}`;
        } else {
            return '/notifications';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        ref: notificationRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                onClick: handleToggle,
                "aria-label": "Notifications",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M13.73 21a2 2 0 0 1-3.46 0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                        children: unreadCount
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/notifications",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewAll,
                                children: "View All"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                        children: notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                            children: "No notifications yet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                            lineNumber: 157,
                            columnNumber: 15
                        }, this) : notifications.slice(0, 5).map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: getNotificationLink(notification),
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item} ${!notification.read ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unread : ''}`,
                                onClick: ()=>handleNotificationClick(notification),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                children: notification.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                                                children: formatTime(notification.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, this),
                                    !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                        lineNumber: 177,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, notification.id, true, {
                                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    notifications.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/notifications",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seeMore,
                            children: "See more notifications"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MinimalNotificationBell.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MinimalNotificationBell.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
};
_s(MinimalNotificationBell, "vuXpQjFjpJLjfRqop9Q3Fw4UzJY=");
_c = MinimalNotificationBell;
const __TURBOPACK__default__export__ = MinimalNotificationBell;
var _c;
__turbopack_context__.k.register(_c, "MinimalNotificationBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/highlightService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addCommentToHighlight": (()=>addCommentToHighlight),
    "addReactionToHighlight": (()=>addReactionToHighlight),
    "deleteHighlight": (()=>deleteHighlight),
    "generateHighlightShareUrl": (()=>generateHighlightShareUrl),
    "getArticleHighlights": (()=>getArticleHighlights),
    "getUserHighlights": (()=>getUserHighlights),
    "removeCommentFromHighlight": (()=>removeCommentFromHighlight),
    "removeReactionFromHighlight": (()=>removeReactionFromHighlight),
    "saveHighlight": (()=>saveHighlight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
const saveHighlight = async (articleId, userId, text, prefix, suffix, tag = 'insight')=>{
    try {
        const highlightData = {
            articleId,
            userId,
            text,
            prefix,
            suffix,
            tag,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            comments: [],
            reactions: {},
            userReactions: {}
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights'), highlightData);
        return docRef.id;
    } catch (error) {
        console.error('Error saving highlight:', error);
        throw error;
    }
};
const getArticleHighlights = async (articleId, userId)=>{
    try {
        let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId));
        // If userId is provided, filter by user to make highlights private
        if (userId) {
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', userId));
        }
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.error('Error getting highlights:', error);
        return [];
    }
};
const getUserHighlights = async (userId)=>{
    try {
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', userId));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
    } catch (error) {
        console.error('Error getting user highlights:', error);
        return [];
    }
};
const deleteHighlight = async (highlightId)=>{
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId));
    } catch (error) {
        console.error('Error deleting highlight:', error);
        throw error;
    }
};
const addCommentToHighlight = async (highlightId, userId, content)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        const comment = {
            userId,
            content,
            createdAt: new Date().toISOString()
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            comments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(comment)
        });
    } catch (error) {
        console.error('Error adding comment to highlight:', error);
        throw error;
    }
};
const removeCommentFromHighlight = async (highlightId, comment)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            comments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayRemove"])(comment)
        });
    } catch (error) {
        console.error('Error removing comment from highlight:', error);
        throw error;
    }
};
const addReactionToHighlight = async (highlightId, userId, emoji)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        // Note: This is a simplified approach. In production, you'd want to use a transaction
        // to ensure consistency when multiple users react simultaneously
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            [`reactions.${emoji}`]: (await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).increment(1),
            [`userReactions.${userId}`]: emoji
        });
    } catch (error) {
        console.error('Error adding reaction to highlight:', error);
        throw error;
    }
};
const removeReactionFromHighlight = async (highlightId, userId, emoji)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            [`reactions.${emoji}`]: (await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).increment(-1),
            [`userReactions.${userId}`]: null
        });
    } catch (error) {
        console.error('Error removing reaction from highlight:', error);
        throw error;
    }
};
const generateHighlightShareUrl = (articleSlug, highlightId, baseUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : ("TURBOPACK unreachable", undefined))=>{
    return `${baseUrl}/articles?slug=${articleSlug}#highlight=${highlightId}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/HighlightContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HighlightProvider": (()=>HighlightProvider),
    "useHighlights": (()=>useHighlights)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/highlightService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
const HighlightContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const HighlightProvider = ({ children, articleId })=>{
    _s();
    const [highlights, setHighlights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HighlightProvider.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "HighlightProvider.useEffect.unsubscribe": (user)=>{
                    setCurrentUser(user);
                }
            }["HighlightProvider.useEffect.unsubscribe"]);
            return ({
                "HighlightProvider.useEffect": ()=>unsubscribe()
            })["HighlightProvider.useEffect"];
        }
    }["HighlightProvider.useEffect"], []);
    // Load highlights for the current article (user-specific)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HighlightProvider.useEffect": ()=>{
            const loadHighlights = {
                "HighlightProvider.useEffect.loadHighlights": async ()=>{
                    if (articleId && currentUser) {
                        setLoading(true);
                        try {
                            // Pass user ID to get only current user's highlights
                            const userHighlights = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleHighlights"])(articleId, currentUser.uid);
                            setHighlights(userHighlights);
                        } catch (error) {
                            console.error('Error loading highlights:', error);
                        } finally{
                            setLoading(false);
                        }
                    } else {
                        // If no user is logged in, clear highlights
                        setHighlights([]);
                        setLoading(false);
                    }
                }
            }["HighlightProvider.useEffect.loadHighlights"];
            loadHighlights();
        }
    }["HighlightProvider.useEffect"], [
        articleId,
        currentUser
    ]);
    // Save a new highlight
    const handleSaveHighlight = async (text, prefix, suffix, articleId, tag)=>{
        if (!currentUser) {
            alert('You must be logged in to highlight text');
            return null;
        }
        try {
            const highlightId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveHighlight"])(articleId, currentUser.uid, text, prefix, suffix, tag);
            // Add the new highlight to state
            const newHighlight = {
                id: highlightId,
                articleId,
                userId: currentUser.uid,
                text,
                prefix,
                suffix,
                tag,
                createdAt: new Date(),
                reactions: {},
                userReactions: {}
            };
            setHighlights((prev)=>[
                    ...prev,
                    newHighlight
                ]);
            return highlightId;
        } catch (error) {
            console.error('Error saving highlight:', error);
            return null;
        }
    };
    // Remove a highlight
    const handleRemoveHighlight = async (highlightId)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteHighlight"])(highlightId);
            setHighlights((prev)=>prev.filter((h)=>h.id !== highlightId));
        } catch (error) {
            console.error('Error removing highlight:', error);
        }
    };
    // Apply highlight styling to a DOM element with improved range handling
    const highlightElement = (range, tag)=>{
        try {
            // Clean up the range to avoid partial word selections
            const selectedText = range.toString().trim();
            if (!selectedText) return;
            // Create a new range to ensure clean boundaries
            const cleanRange = document.createRange();
            cleanRange.setStart(range.startContainer, range.startOffset);
            cleanRange.setEnd(range.endContainer, range.endOffset);
            // Expand range to word boundaries if needed
            const startContainer = cleanRange.startContainer;
            const endContainer = cleanRange.endContainer;
            if (startContainer.nodeType === Node.TEXT_NODE) {
                const text = startContainer.textContent || '';
                let startOffset = cleanRange.startOffset;
                // Move start to word boundary if we're in the middle of a word
                while(startOffset > 0 && /\S/.test(text.charAt(startOffset - 1))){
                    startOffset--;
                }
                cleanRange.setStart(startContainer, startOffset);
            }
            if (endContainer.nodeType === Node.TEXT_NODE) {
                const text = endContainer.textContent || '';
                let endOffset = cleanRange.endOffset;
                // Move end to word boundary if we're in the middle of a word
                while(endOffset < text.length && /\S/.test(text.charAt(endOffset))){
                    endOffset++;
                }
                cleanRange.setEnd(endContainer, endOffset);
            }
            const highlightMark = document.createElement('mark');
            highlightMark.className = `article-highlight highlight-${tag}`;
            // Try to surround the contents with the highlight
            try {
                cleanRange.surroundContents(highlightMark);
            } catch (error) {
                // If surrounding fails (e.g., crosses element boundaries), extract and wrap
                const fragment = cleanRange.extractContents();
                highlightMark.appendChild(fragment);
                cleanRange.insertNode(highlightMark);
            }
            // Clear the selection to prevent UI confusion
            window.getSelection()?.removeAllRanges();
        } catch (error) {
            console.error('Error highlighting range:', error);
        }
    };
    const contextValue = {
        highlights,
        loading,
        saveHighlight: handleSaveHighlight,
        removeHighlight: handleRemoveHighlight,
        highlightElement
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/HighlightContext.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
};
_s(HighlightProvider, "yTHnioKn0PNuRAnlHsczK4VHG2A=");
_c = HighlightProvider;
const useHighlights = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(HighlightContext);
    if (context === undefined) {
        throw new Error('useHighlights must be used within a HighlightProvider');
    }
    return context;
};
_s1(useHighlights, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "HighlightProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HighlightToolbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const highlightTags = [
    {
        tag: 'insight',
        label: 'Insight',
        color: '#3B82F6',
        icon: '💡'
    },
    {
        tag: 'question',
        label: 'Question',
        color: '#F59E0B',
        icon: '❓'
    },
    {
        tag: 'quote',
        label: 'Quote',
        color: '#10B981',
        icon: '💬'
    },
    {
        tag: 'important',
        label: 'Important',
        color: '#EF4444',
        icon: '⭐'
    }
];
const HighlightToolbar = ({ selection, onHighlight, onResponse, onShare, onAiAssist })=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showColorOptions, setShowColorOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toolbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HighlightToolbar.useEffect": ()=>{
            // Don't show toolbar if no selection or empty selection
            if (!selection || selection.isCollapsed) {
                setIsVisible(false);
                setShowColorOptions(false);
                return;
            }
            // Get the selection's bounding rectangle
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            // Get viewport and toolbar dimensions
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const toolbarWidth = toolbarRef.current?.offsetWidth || 280;
            const toolbarHeight = toolbarRef.current?.offsetHeight || 40;
            // Calculate horizontal position (keep within viewport)
            let left = rect.left + rect.width / 2;
            const margin = 16; // Margin from screen edges
            // Ensure toolbar doesn't go off screen horizontally
            if (left - toolbarWidth / 2 < margin) {
                left = toolbarWidth / 2 + margin;
            } else if (left + toolbarWidth / 2 > windowWidth - margin) {
                left = windowWidth - toolbarWidth / 2 - margin;
            }
            // Calculate vertical position
            let top = rect.top - toolbarHeight - 10 + window.scrollY;
            // If toolbar would be above viewport, place it below selection
            if (rect.top - toolbarHeight - 10 < 0) {
                top = rect.bottom + 10 + window.scrollY;
            }
            // Additional mobile-specific adjustments
            const isMobile = windowWidth <= 768;
            if (isMobile) {
                // On mobile, ensure toolbar is always visible
                const viewportTop = window.scrollY;
                const viewportBottom = window.scrollY + windowHeight;
                // If toolbar would be above viewport
                if (top < viewportTop + margin) {
                    top = viewportTop + margin;
                }
                // If toolbar would be below viewport
                if (top + toolbarHeight > viewportBottom - margin) {
                    top = viewportBottom - toolbarHeight - margin;
                }
            }
            setPosition({
                top,
                left
            });
            // Show the toolbar
            setIsVisible(true);
        }
    }["HighlightToolbar.useEffect"], [
        selection
    ]);
    // Handle highlighting action with tag
    const handleHighlight = (tag)=>{
        if (selection && !selection.isCollapsed) {
            const range = selection.getRangeAt(0);
            const selectedText = selection.toString();
            onHighlight(selectedText, range, tag);
            // Clear selection after highlighting
            window.getSelection()?.removeAllRanges();
            setIsVisible(false);
            setShowColorOptions(false);
        }
    };
    // Toggle color options
    const toggleColorOptions = ()=>{
        setShowColorOptions(!showColorOptions);
    };
    // Handle response action
    const handleResponse = ()=>{
        if (selection && !selection.isCollapsed && onResponse) {
            const selectedText = selection.toString();
            onResponse(selectedText);
            // Clear selection after response
            window.getSelection()?.removeAllRanges();
            setIsVisible(false);
        }
    };
    // Handle share action
    const handleShare = ()=>{
        if (selection && !selection.isCollapsed && onShare) {
            const selectedText = selection.toString();
            onShare(selectedText);
            // Clear selection after share
            window.getSelection()?.removeAllRanges();
            setIsVisible(false);
        }
    };
    // Handle AI assist action
    const handleAiAssist = ()=>{
        if (selection && !selection.isCollapsed && onAiAssist) {
            const selectedText = selection.toString();
            onAiAssist(selectedText);
            // Clear selection after AI assist
            window.getSelection()?.removeAllRanges();
            setIsVisible(false);
        }
    };
    // Only render if there's a valid selection and in browser
    if (!isVisible || "object" === 'undefined') {
        return null;
    }
    // Use portal to render outside of article container
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: toolbarRef,
        className: "highlight-toolbar",
        style: {
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translateX(-50%)',
            zIndex: 1000
        },
        children: !showColorOptions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleColorOptions,
                    className: "highlight-btn highlight-btn-main",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Highlight"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this),
                onResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleResponse,
                    className: "highlight-btn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 175,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 174,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Response"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 177,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                    lineNumber: 173,
                    columnNumber: 13
                }, this),
                onShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleShare,
                    className: "highlight-btn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "18",
                                    cy: "5",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "6",
                                    cy: "12",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "18",
                                    cy: "19",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "8.59",
                                    y1: "13.51",
                                    x2: "15.42",
                                    y2: "17.49"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "15.41",
                                    y1: "6.51",
                                    x2: "8.59",
                                    y2: "10.49"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Share"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                    lineNumber: 182,
                    columnNumber: 13
                }, this),
                onAiAssist && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAiAssist,
                    className: "highlight-btn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "3",
                                    y: "3",
                                    width: "18",
                                    height: "18",
                                    rx: "2",
                                    ry: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 197,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "8",
                                    y1: "12",
                                    x2: "16",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "8",
                                    x2: "12",
                                    y2: "16"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 196,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Journa AI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 201,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                    lineNumber: 195,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "highlight-color-options",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "highlight-color-label",
                    children: "Choose highlight type:"
                }, void 0, false, {
                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this),
                highlightTags.map((tagInfo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleHighlight(tagInfo.tag),
                        className: "highlight-color-btn",
                        style: {
                            backgroundColor: tagInfo.color
                        },
                        title: tagInfo.label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "highlight-icon",
                                children: tagInfo.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "highlight-label",
                                children: tagInfo.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tagInfo.tag, true, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 209,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleColorOptions,
                    className: "highlight-btn highlight-btn-cancel",
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/src/components/HighlightToolbar.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HighlightToolbar.tsx",
            lineNumber: 206,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HighlightToolbar.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this), document.body);
};
_s(HighlightToolbar, "IIBAuSUrTT+86zXOtwdrH2950tQ=");
_c = HighlightToolbar;
const __TURBOPACK__default__export__ = HighlightToolbar;
var _c;
__turbopack_context__.k.register(_c, "HighlightToolbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ShareModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ShareModal = ({ isOpen, onClose, highlightText, articleTitle, shareUrl })=>{
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareModal.useEffect": ()=>{
            if (copied) {
                const timer = setTimeout({
                    "ShareModal.useEffect.timer": ()=>setCopied(false)
                }["ShareModal.useEffect.timer"], 3000);
                return ({
                    "ShareModal.useEffect": ()=>clearTimeout(timer)
                })["ShareModal.useEffect"];
            }
        }
    }["ShareModal.useEffect"], [
        copied
    ]);
    // Handle escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareModal.useEffect": ()=>{
            const handleEscape = {
                "ShareModal.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["ShareModal.useEffect.handleEscape"];
            if (isOpen) {
                document.addEventListener('keydown', handleEscape);
                document.body.style.overflow = 'hidden';
            }
            return ({
                "ShareModal.useEffect": ()=>{
                    document.removeEventListener('keydown', handleEscape);
                    document.body.style.overflow = 'unset';
                }
            })["ShareModal.useEffect"];
        }
    }["ShareModal.useEffect"], [
        isOpen,
        onClose
    ]);
    const handleCopyLink = async ()=>{
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
        } catch (error) {
            console.error('Failed to copy link:', error);
        }
    };
    const handleNativeShare = async ()=>{
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Highlight from "${articleTitle}"`,
                    text: `"${highlightText}" - from "${articleTitle}"`,
                    url: shareUrl
                });
                onClose();
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error sharing:', error);
                }
            }
        }
    };
    const shareText = `"${highlightText}" - from "${articleTitle}"`;
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: '1rem'
        },
        onClick: onClose,
        className: "jsx-8795408d21c696e",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    padding: '2rem',
                    maxWidth: '500px',
                    width: '100%',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                    animation: 'modalSlideIn 0.3s ease-out'
                },
                onClick: (e)=>e.stopPropagation(),
                className: "jsx-8795408d21c696e",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#6B7280',
                            padding: '0.25rem',
                            borderRadius: '0.375rem',
                            transition: 'color 0.2s ease'
                        },
                        onMouseOver: (e)=>e.currentTarget.style.color = '#374151',
                        onMouseOut: (e)=>e.currentTarget.style.color = '#6B7280',
                        className: "jsx-8795408d21c696e",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1.5rem'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: '0 0 0.5rem 0',
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: '#1F2937'
                                },
                                className: "jsx-8795408d21c696e",
                                children: "✨ Share Highlight"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    color: '#6B7280',
                                    fontSize: '0.875rem'
                                },
                                className: "jsx-8795408d21c696e",
                                children: [
                                    'Share this highlight from "',
                                    articleTitle,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#F9FAFB',
                            border: '2px solid #E5E7EB',
                            borderRadius: '0.75rem',
                            padding: '1.25rem',
                            marginBottom: '1.5rem'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    color: '#374151',
                                    fontStyle: 'italic',
                                    marginBottom: '0.75rem'
                                },
                                className: "jsx-8795408d21c696e",
                                children: [
                                    '"',
                                    highlightText,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.875rem',
                                    color: '#6B7280',
                                    fontWeight: '500'
                                },
                                className: "jsx-8795408d21c696e",
                                children: [
                                    '— from "',
                                    articleTitle,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1.5rem'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: 'block',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    color: '#374151',
                                    marginBottom: '0.5rem'
                                },
                                className: "jsx-8795408d21c696e",
                                children: "Share Link"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.5rem'
                                },
                                className: "jsx-8795408d21c696e",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: shareUrl,
                                        readOnly: true,
                                        style: {
                                            flex: 1,
                                            padding: '0.75rem',
                                            border: '1px solid #D1D5DB',
                                            borderRadius: '0.5rem',
                                            fontSize: '0.875rem',
                                            backgroundColor: '#F9FAFB',
                                            fontFamily: 'monospace'
                                        },
                                        className: "jsx-8795408d21c696e"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ShareModal.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCopyLink,
                                        style: {
                                            padding: '0.75rem 1rem',
                                            backgroundColor: copied ? '#10B981' : '#3B82F6',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '0.5rem',
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            whiteSpace: 'nowrap'
                                        },
                                        className: "jsx-8795408d21c696e",
                                        children: copied ? '✓ Copied!' : '📋 Copy'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ShareModal.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '0.75rem',
                            justifyContent: 'flex-end'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            "object" !== 'undefined' && typeof navigator !== 'undefined' && 'share' in navigator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleNativeShare,
                                style: {
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#6366F1',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                },
                                onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#5B21B6',
                                onMouseOut: (e)=>e.currentTarget.style.backgroundColor = '#6366F1',
                                className: "jsx-8795408d21c696e",
                                children: "📤 Share"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#F3F4F6',
                                    color: '#374151',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease'
                                },
                                onMouseOver: (e)=>e.currentTarget.style.backgroundColor = '#E5E7EB',
                                onMouseOut: (e)=>e.currentTarget.style.backgroundColor = '#F3F4F6',
                                className: "jsx-8795408d21c696e",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ShareModal.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8795408d21c696e",
                children: "@keyframes modalSlideIn{0%{opacity:0;transform:translateY(-20px)scale(.95)}to{opacity:1;transform:translateY(0)scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ShareModal.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this), document.body);
};
_s(ShareModal, "iLRnj6p1aUC92XRQ4XjssuOA6JM=");
_c = ShareModal;
const __TURBOPACK__default__export__ = ShareModal;
var _c;
__turbopack_context__.k.register(_c, "ShareModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ArticleHighlights.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HighlightToolbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/HighlightContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/highlightService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ShareModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
// Get context for a selection with improved handling
const getSelectionContext = (selection)=>{
    const result = {
        prefix: '',
        suffix: ''
    };
    if (!selection || selection.rangeCount === 0) return result;
    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();
    // Get the full text content of the container
    const container = range.commonAncestorContainer;
    const containerElement = container.nodeType === Node.TEXT_NODE ? container.parentElement : container;
    if (!containerElement) return result;
    // Get all text content from the container
    const fullText = containerElement.textContent || '';
    const cleanSelectedText = selectedText.replace(/\s+/g, ' ');
    // Find the position of our selected text in the full text
    const startIndex = fullText.indexOf(cleanSelectedText);
    if (startIndex !== -1) {
        // Get context with word boundaries to avoid partial word issues
        const contextLength = 50;
        const prefixStart = Math.max(0, startIndex - contextLength);
        const suffixEnd = Math.min(fullText.length, startIndex + cleanSelectedText.length + contextLength);
        // Extract prefix and suffix, ensuring we don't break words
        let prefix = fullText.substring(prefixStart, startIndex);
        let suffix = fullText.substring(startIndex + cleanSelectedText.length, suffixEnd);
        // Trim to word boundaries
        prefix = prefix.replace(/^\S*\s/, ''); // Remove partial word at start
        suffix = suffix.replace(/\s\S*$/, ''); // Remove partial word at end
        result.prefix = prefix;
        result.suffix = suffix;
    }
    return result;
};
// Apply highlights to existing content in the DOM
const applyHighlightsToContent = (highlights, articleContent)=>{
    if (!highlights || !articleContent) return;
    // Check if highlights are already applied correctly
    const existingHighlights = articleContent.querySelectorAll('.article-highlight');
    const existingHighlightIds = Array.from(existingHighlights).map((el)=>el.getAttribute('data-highlight-id')).filter(Boolean);
    const newHighlightIds = highlights.map((h)=>h.id);
    // If the same highlights are already applied, don't re-apply
    if (existingHighlightIds.length === newHighlightIds.length && existingHighlightIds.every((id)=>newHighlightIds.includes(id))) {
        return;
    }
    // First clear existing highlights to prevent duplicates
    existingHighlights.forEach((el)=>{
        const parent = el.parentNode;
        if (parent) {
            // Replace the highlight with its text content
            const textNode = document.createTextNode(el.textContent || '');
            parent.replaceChild(textNode, el);
            // Normalize to merge adjacent text nodes
            parent.normalize();
        }
    });
    // Then apply all highlights from the database
    highlights.forEach((highlight)=>{
        // Function to find text in the DOM using prefix and suffix as context
        const findTextInDOM = (text, prefix, suffix)=>{
            // Create a text finder walker
            const walker = document.createTreeWalker(articleContent, NodeFilter.SHOW_TEXT, null);
            // Pattern to search for (prefix + text + suffix)
            const pattern = (prefix + text + suffix).trim();
            let node;
            while(node = walker.nextNode()){
                const content = node.textContent || '';
                const index = content.indexOf(pattern);
                if (index !== -1) {
                    // Found the text with context, create a range
                    const range = document.createRange();
                    const prefixLength = prefix.trim().length;
                    range.setStart(node, index + prefixLength);
                    range.setEnd(node, index + prefixLength + text.trim().length);
                    return range;
                }
            }
            return null;
        };
        // Try to find and highlight the text
        const range = findTextInDOM(highlight.text, highlight.prefix, highlight.suffix);
        if (range) {
            try {
                // Create highlight mark
                const mark = document.createElement('mark');
                mark.className = `article-highlight highlight-${highlight.tag || 'insight'}`;
                mark.dataset.highlightId = highlight.id;
                // Apply highlight
                range.surroundContents(mark);
            } catch (error) {
                console.error('Error applying highlight:', error);
            }
        }
    });
};
const ArticleHighlights = ({ articleId, children, articleTitle = 'Article', articleSlug = '', onShare })=>{
    _s();
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { highlights, saveHighlight, removeHighlight, highlightElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHighlights"])();
    const [contentRef, setContentRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showResponseModal, setShowResponseModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTextForResponse, setSelectedTextForResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showAiModal, setShowAiModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTextForAi, setSelectedTextForAi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeHighlight, setActiveHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUnhighlightToolbar, setShowUnhighlightToolbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHidingToolbar, setIsHidingToolbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unhighlightPosition, setUnhighlightPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareHighlightText, setShareHighlightText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Function to hide toolbar with animation
    const hideToolbarWithAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[hideToolbarWithAnimation]": ()=>{
            setIsHidingToolbar(true);
            // After animation completes, actually hide the toolbar
            setTimeout({
                "ArticleHighlights.useCallback[hideToolbarWithAnimation]": ()=>{
                    setShowUnhighlightToolbar(false);
                    setIsHidingToolbar(false);
                }
            }["ArticleHighlights.useCallback[hideToolbarWithAnimation]"], 150); // Match this with CSS transition duration
        }
    }["ArticleHighlights.useCallback[hideToolbarWithAnimation]"], []);
    // Handle text selection with mobile-specific improvements
    const handleSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleSelection]": ()=>{
            // If unhighlight toolbar is active, don't process regular selections
            if (showUnhighlightToolbar) return;
            // Add a small delay to ensure selection is stable on mobile
            setTimeout({
                "ArticleHighlights.useCallback[handleSelection]": ()=>{
                    const currentSelection = window.getSelection();
                    if (currentSelection && !currentSelection.isCollapsed) {
                        const selectedText = currentSelection.toString().trim();
                        // Filter out selections that are too long (likely accidental)
                        if (selectedText && selectedText.length > 0 && selectedText.length < 1000) {
                            // Check if selection is within our article content
                            const range = currentSelection.getRangeAt(0);
                            const container = range.commonAncestorContainer;
                            const articleContainer = container.nodeType === Node.TEXT_NODE ? container.parentElement?.closest('.article-highlight-container') : container?.closest('.article-highlight-container');
                            if (articleContainer) {
                                setSelection(currentSelection);
                            } else {
                                setSelection(null);
                            }
                        } else {
                            setSelection(null);
                        }
                    } else {
                        setSelection(null);
                    }
                }
            }["ArticleHighlights.useCallback[handleSelection]"], 100); // Short delay for mobile stability
        }
    }["ArticleHighlights.useCallback[handleSelection]"], [
        showUnhighlightToolbar
    ]);
    // Handle highlight button click
    const handleHighlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleHighlight]": (selectedText, range, tag)=>{
            if (selectedText && range) {
                // Get context for the selection
                const context = getSelectionContext(window.getSelection());
                // Save highlight to database with tag
                saveHighlight(selectedText.trim(), context.prefix, context.suffix, articleId, tag);
                // Apply highlight visually with tag-based styling
                highlightElement(range, tag);
            }
        }
    }["ArticleHighlights.useCallback[handleHighlight]"], [
        articleId,
        saveHighlight,
        highlightElement
    ]);
    // Handle highlight click to show unhighlight option
    const handleHighlightClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleHighlightClick]": (e)=>{
            // Check if click is on a highlight
            const target = e.target;
            if (target.classList.contains('article-highlight')) {
                e.preventDefault();
                e.stopPropagation();
                // Get highlight info
                const highlightId = target.dataset.highlightId;
                const highlightText = target.textContent || '';
                if (highlightId) {
                    // Reset hiding state if it was set
                    setIsHidingToolbar(false);
                    // Set active highlight
                    setActiveHighlight({
                        id: highlightId,
                        text: highlightText
                    });
                    // Position unhighlight toolbar near the highlight
                    const rect = target.getBoundingClientRect();
                    setUnhighlightPosition({
                        top: rect.top - 40 + window.scrollY,
                        left: rect.left + rect.width / 2
                    });
                    // Show unhighlight toolbar
                    setShowUnhighlightToolbar(true);
                    // Hide regular selection toolbar if visible
                    setSelection(null);
                }
            } else {
                // If clicking elsewhere, hide unhighlight toolbar with animation
                if (showUnhighlightToolbar) {
                    hideToolbarWithAnimation();
                    setActiveHighlight(null);
                }
            }
        }
    }["ArticleHighlights.useCallback[handleHighlightClick]"], [
        showUnhighlightToolbar,
        hideToolbarWithAnimation
    ]);
    // Handle unhighlight action
    const handleUnhighlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleUnhighlight]": ()=>{
            if (activeHighlight && activeHighlight.id) {
                // Start the hiding animation
                hideToolbarWithAnimation();
                // Store the ID before resetting the active highlight
                const highlightId = activeHighlight.id;
                // Reset active highlight state
                setActiveHighlight(null);
                // Remove highlight from database
                removeHighlight(highlightId);
                // Find and remove highlight from DOM
                if (contentRef) {
                    const highlightEl = contentRef.querySelector(`[data-highlight-id="${highlightId}"]`);
                    if (highlightEl && highlightEl.parentNode) {
                        const textNode = document.createTextNode(highlightEl.textContent || '');
                        highlightEl.parentNode.replaceChild(textNode, highlightEl);
                        highlightEl.parentNode.normalize();
                    }
                }
            }
        }
    }["ArticleHighlights.useCallback[handleUnhighlight]"], [
        activeHighlight,
        removeHighlight,
        contentRef,
        hideToolbarWithAnimation
    ]);
    // Handle response button click
    const handleResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleResponse]": (selectedText)=>{
            setSelectedTextForResponse(selectedText);
            setShowResponseModal(true);
        }
    }["ArticleHighlights.useCallback[handleResponse]"], []);
    // Handle share button click
    const handleShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleShare]": (selectedText)=>{
            setShareHighlightText(selectedText);
            setShowShareModal(true);
        }
    }["ArticleHighlights.useCallback[handleShare]"], []);
    // Handle AI assist button click
    const handleAiAssist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleAiAssist]": (selectedText)=>{
            setSelectedTextForAi(selectedText);
            setShowAiModal(true);
        }
    }["ArticleHighlights.useCallback[handleAiAssist]"], []);
    // Set up selection event listener with mobile improvements
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleHighlights.useEffect": ()=>{
            document.addEventListener('selectionchange', handleSelection);
            // Additional mobile touch handling
            const handleTouchEnd = {
                "ArticleHighlights.useEffect.handleTouchEnd": ()=>{
                    // Small delay to ensure selection is finalized
                    setTimeout(handleSelection, 150);
                }
            }["ArticleHighlights.useEffect.handleTouchEnd"];
            // Only add touch handlers on mobile devices
            if ('ontouchstart' in window) {
                document.addEventListener('touchend', handleTouchEnd);
            }
            return ({
                "ArticleHighlights.useEffect": ()=>{
                    document.removeEventListener('selectionchange', handleSelection);
                    if ('ontouchstart' in window) {
                        document.removeEventListener('touchend', handleTouchEnd);
                    }
                }
            })["ArticleHighlights.useEffect"];
        }
    }["ArticleHighlights.useEffect"], [
        handleSelection
    ]);
    // Set up click listener for highlights
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleHighlights.useEffect": ()=>{
            if (contentRef) {
                contentRef.addEventListener('click', handleHighlightClick);
                return ({
                    "ArticleHighlights.useEffect": ()=>{
                        contentRef.removeEventListener('click', handleHighlightClick);
                    }
                })["ArticleHighlights.useEffect"];
            }
        }
    }["ArticleHighlights.useEffect"], [
        contentRef,
        handleHighlightClick
    ]);
    // Add click listener to document to hide unhighlight toolbar when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleHighlights.useEffect": ()=>{
            const handleDocumentClick = {
                "ArticleHighlights.useEffect.handleDocumentClick": (e)=>{
                    if (showUnhighlightToolbar) {
                        const target = e.target;
                        if (!target.closest('.highlight-toolbar') && !target.classList.contains('article-highlight')) {
                            hideToolbarWithAnimation();
                            setActiveHighlight(null);
                        }
                    }
                }
            }["ArticleHighlights.useEffect.handleDocumentClick"];
            document.addEventListener('click', handleDocumentClick);
            return ({
                "ArticleHighlights.useEffect": ()=>{
                    document.removeEventListener('click', handleDocumentClick);
                }
            })["ArticleHighlights.useEffect"];
        }
    }["ArticleHighlights.useEffect"], [
        showUnhighlightToolbar,
        hideToolbarWithAnimation
    ]);
    // Apply highlights from database when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleHighlights.useEffect": ()=>{
            if (contentRef && highlights.length > 0) {
                // Add a small delay to ensure DOM is stable after re-renders
                const timeoutId = setTimeout({
                    "ArticleHighlights.useEffect.timeoutId": ()=>{
                        applyHighlightsToContent(highlights, contentRef);
                    }
                }["ArticleHighlights.useEffect.timeoutId"], 50);
                return ({
                    "ArticleHighlights.useEffect": ()=>clearTimeout(timeoutId)
                })["ArticleHighlights.useEffect"];
            }
        }
    }["ArticleHighlights.useEffect"], [
        highlights,
        contentRef
    ]);
    // Get ref to content element
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[setRef]": (node)=>{
            if (node && node !== contentRef) {
                setContentRef(node);
            }
        }
    }["ArticleHighlights.useCallback[setRef]"], [
        contentRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightToolbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selection: selection,
                onHighlight: handleHighlight,
                onResponse: handleResponse,
                onShare: handleShare,
                onAiAssist: handleAiAssist
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            showUnhighlightToolbar && activeHighlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `highlight-toolbar unhighlight-toolbar ${isHidingToolbar ? 'hiding' : ''}`,
                style: {
                    position: 'absolute',
                    top: `${unhighlightPosition.top}px`,
                    left: `${unhighlightPosition.left}px`,
                    transform: isHidingToolbar ? 'translateY(-10px) translateX(-50%)' : 'translateX(-50%)',
                    zIndex: 1000
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUnhighlight,
                        className: "highlight-btn highlight-btn-danger",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "9",
                                        x2: "12",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "9",
                                        x2: "18",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Unhighlight"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            handleShare(activeHighlight.text);
                            hideToolbarWithAnimation();
                        },
                        className: "highlight-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "18",
                                        cy: "5",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "6",
                                        cy: "12",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "18",
                                        cy: "19",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "8.59",
                                        y1: "13.51",
                                        x2: "15.42",
                                        y2: "17.49"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "15.41",
                                        y1: "6.51",
                                        x2: "8.59",
                                        y2: "10.49"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Share"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            handleResponse(activeHighlight.text);
                            hideToolbarWithAnimation();
                        },
                        className: "highlight-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Response"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: setRef,
                className: "article-highlight-container",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            showResponseModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-response-modal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "highlight-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "highlight-modal-close",
                            onClick: ()=>setShowResponseModal(false),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 446,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Respond to highlighted text"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-selected-text",
                            children: [
                                '"',
                                selectedTextForResponse,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 453,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "highlight-response-input",
                            placeholder: "Write your response..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "highlight-response-submit",
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                    lineNumber: 445,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 444,
                columnNumber: 9
            }, this),
            showAiModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-ai-modal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "highlight-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "highlight-modal-close",
                            onClick: ()=>setShowAiModal(false),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Journa AI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-selected-text",
                            children: [
                                '"',
                                selectedTextForAi,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-ai-options",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Explain this"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Fact check"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Provide context"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Summarize"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 479,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 475,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-ai-response",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "highlight-ai-loading",
                                children: "Journa AI is thinking..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 483,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 481,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                    lineNumber: 466,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 465,
                columnNumber: 9
            }, this),
            showShareModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShareModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showShareModal,
                onClose: ()=>setShowShareModal(false),
                highlightText: shareHighlightText,
                articleTitle: articleTitle,
                shareUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateHighlightShareUrl"])(articleSlug, articleId)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(ArticleHighlights, "oUOZsRtdDimYjuhEdBlrviOtEJY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHighlights"]
    ];
});
_c = ArticleHighlights;
const __TURBOPACK__default__export__ = ArticleHighlights;
var _c;
__turbopack_context__.k.register(_c, "ArticleHighlights");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MoodToggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MoodToggle = ({ initialEnabled = true, className = '', style = {} })=>{
    _s();
    const [moodFeatureEnabled, setMoodFeatureEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialEnabled);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoodToggle.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "MoodToggle.useEffect.unsubscribe": (user)=>{
                    setCurrentUser(user);
                    if (user) {
                        // Load user's mood preference from localStorage
                        const savedPreference = localStorage.getItem('moodFeatureEnabled');
                        if (savedPreference !== null) {
                            setMoodFeatureEnabled(JSON.parse(savedPreference));
                        } else {
                            setMoodFeatureEnabled(true);
                        }
                    } else {
                        setMoodFeatureEnabled(false);
                    }
                }
            }["MoodToggle.useEffect.unsubscribe"]);
            return ({
                "MoodToggle.useEffect": ()=>unsubscribe()
            })["MoodToggle.useEffect"];
        }
    }["MoodToggle.useEffect"], []);
    const handleToggle = ()=>{
        console.log('🎨 MoodToggle clicked - should NOT trigger parent re-render');
        if (!currentUser) return;
        // Optimistic update with animation
        setIsAnimating(true);
        setTimeout(()=>setIsAnimating(false), 300);
        const newEnabled = !moodFeatureEnabled;
        setMoodFeatureEnabled(newEnabled);
        localStorage.setItem('moodFeatureEnabled', JSON.stringify(newEnabled));
        console.log('🎨 Mood feature toggled to:', newEnabled);
        // Force immediate DOM updates for mood backgrounds
        const body = document.body;
        if (newEnabled) {
            body.classList.add('mood-feature-enabled');
            body.classList.remove('mood-feature-disabled');
        } else {
            body.classList.add('mood-feature-disabled');
            body.classList.remove('mood-feature-enabled');
        }
        // Dispatch custom event to notify other components without causing re-renders
        window.dispatchEvent(new CustomEvent('moodFeatureToggle', {
            detail: {
                enabled: newEnabled
            }
        }));
        // Force update of existing mood background elements
        const moodElements = document.querySelectorAll('[data-mood-element]');
        moodElements.forEach((element)=>{
            if (newEnabled) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    };
    if (!currentUser) {
        return null; // Don't show toggle for unauthenticated users
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleToggle,
        className: className,
        style: {
            ...style,
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.1)' : 'scale(1)'
        },
        title: moodFeatureEnabled ? "Turn off mood feature" : "Turn on mood feature",
        children: moodFeatureEnabled ? 'ON' : 'OFF'
    }, void 0, false, {
        fileName: "[project]/src/components/MoodToggle.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
};
_s(MoodToggle, "ORBNkp59NigrfSA52To5ch0sJkQ=");
_c = MoodToggle;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(MoodToggle);
var _c, _c1;
__turbopack_context__.k.register(_c, "MoodToggle");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ReflectionToggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ReflectionToggle = ({ articleId, className = '', style = {} })=>{
    _s();
    const [showReflectionPanel, setShowReflectionPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reflectionCount, setReflectionCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentReflection, setCurrentReflection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPrompt, setCurrentPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isEditingPrompt, setIsEditingPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Base reflection prompts
    const basePrompts = [
        "How does this make you feel?",
        "What questions does this raise for you?",
        "How does this connect to your own experiences?",
        "What would you have done differently?",
        "What surprises you most about this?",
        "How might this change your perspective?",
        "What emotions are you experiencing right now?",
        "What does this remind you of?",
        "If you could ask the author one question, what would it be?",
        "How does this challenge your existing beliefs?"
    ];
    const getDefaultPrompt = ()=>{
        return basePrompts[reflectionCount % basePrompts.length];
    };
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReflectionToggle.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "ReflectionToggle.useEffect.unsubscribe": (user)=>{
                    setCurrentUser(user);
                }
            }["ReflectionToggle.useEffect.unsubscribe"]);
            return ({
                "ReflectionToggle.useEffect": ()=>unsubscribe()
            })["ReflectionToggle.useEffect"];
        }
    }["ReflectionToggle.useEffect"], []);
    // Initialize prompt when panel opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReflectionToggle.useEffect": ()=>{
            if (showReflectionPanel && !currentPrompt) {
                setCurrentPrompt(getDefaultPrompt());
            }
        }
    }["ReflectionToggle.useEffect"], [
        showReflectionPanel,
        reflectionCount
    ]);
    const toggleReflectionPanel = ()=>{
        console.log('✍️ ReflectionToggle clicked - should NOT trigger parent re-render');
        setIsAnimating(true);
        setTimeout(()=>setIsAnimating(false), 300);
        setShowReflectionPanel(!showReflectionPanel);
        if (!showReflectionPanel) {
            setCurrentPrompt(getDefaultPrompt());
        }
    };
    const handlePromptEdit = ()=>{
        setIsEditingPrompt(true);
    };
    const handlePromptSave = ()=>{
        setIsEditingPrompt(false);
    };
    const getRandomPrompt = ()=>{
        const randomIndex = Math.floor(Math.random() * basePrompts.length);
        setCurrentPrompt(basePrompts[randomIndex]);
    };
    const handleReflectionSubmit = async ()=>{
        if (!currentReflection.trim() || !currentUser) return;
        setIsSubmitting(true);
        try {
            console.log('Starting reflection submission:', {
                articleId,
                currentPrompt,
                currentReflection,
                reflectionCount
            });
            // Import the reflection service
            const { saveReflectionResponse } = await __turbopack_context__.r("[project]/src/services/reflectionService.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            // Save the reflection with proper metadata
            await saveReflectionResponse(articleId, `prompt_${Date.now()}`, currentPrompt, currentReflection, reflectionCount, true // isPrivate
            );
            console.log('Reflection saved successfully');
            // Update count and close panel
            setReflectionCount((prev)=>prev + 1);
            setCurrentReflection('');
            setShowReflectionPanel(false);
        } catch (error) {
            console.error('Error saving reflection:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!currentUser) {
        return null; // Don't show for unauthenticated users
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "data-reflection-element": "floating-button",
                onClick: toggleReflectionPanel,
                className: className,
                style: {
                    position: 'fixed',
                    bottom: window.innerWidth <= 768 ? '20px' : '40px',
                    right: window.innerWidth <= 768 ? '20px' : '40px',
                    width: window.innerWidth <= 768 ? '48px' : '56px',
                    height: window.innerWidth <= 768 ? '48px' : '56px',
                    borderRadius: '50%',
                    background: showReflectionPanel ? 'linear-gradient(135deg, #1d4ed8, #7c3aed)' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    border: 'none',
                    boxShadow: showReflectionPanel ? '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.2)' : '0 6px 20px rgba(59, 130, 246, 0.3)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    transform: isAnimating ? 'scale(1.1)' : showReflectionPanel ? 'scale(1.05)' : 'scale(1)',
                    backdropFilter: 'blur(10px)',
                    ...style
                },
                title: showReflectionPanel ? "Close reflection" : "Open reflection",
                children: showReflectionPanel ? '✕' : '✍️'
            }, void 0, false, {
                fileName: "[project]/src/components/ReflectionToggle.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            showReflectionPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: window.innerWidth <= 768 ? '80px' : '110px',
                    right: window.innerWidth <= 768 ? '20px' : '40px',
                    left: window.innerWidth <= 768 ? '20px' : 'auto',
                    width: window.innerWidth <= 768 ? 'auto' : '380px',
                    maxWidth: window.innerWidth <= 768 ? 'none' : '380px',
                    maxHeight: window.innerWidth <= 768 ? '400px' : '500px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: window.innerWidth <= 768 ? '16px' : '24px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    zIndex: 999,
                    animation: 'gentleSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    padding: window.innerWidth <= 768 ? '16px' : '24px',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
              @keyframes gentleSlideUp {
                from {
                  opacity: 0;
                  transform: translateY(20px) scale(0.98);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '20px',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: '0 0 12px 0',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                },
                                children: "Time to Reflect ✨"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative'
                                },
                                children: isEditingPrompt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: currentPrompt,
                                    onChange: (e)=>setCurrentPrompt(e.target.value),
                                    onBlur: handlePromptSave,
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') handlePromptSave();
                                        if (e.key === 'Escape') {
                                            setCurrentPrompt(getDefaultPrompt());
                                            setIsEditingPrompt(false);
                                        }
                                    },
                                    autoFocus: true,
                                    style: {
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '2px solid #3b82f6',
                                        borderRadius: '12px',
                                        background: 'white',
                                        fontSize: '14px',
                                        textAlign: 'center',
                                        outline: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionToggle.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            onClick: handlePromptEdit,
                                            style: {
                                                margin: 0,
                                                fontSize: '14px',
                                                color: '#64748b',
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                                padding: '4px 8px',
                                                borderRadius: '8px',
                                                transition: 'all 0.2s ease'
                                            },
                                            title: "Click to edit question",
                                            children: currentPrompt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionToggle.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: getRandomPrompt,
                                            style: {
                                                background: 'rgba(59, 130, 246, 0.1)',
                                                border: 'none',
                                                borderRadius: '6px',
                                                padding: '4px 8px',
                                                fontSize: '12px',
                                                color: '#3b82f6',
                                                cursor: 'pointer',
                                                fontWeight: '500'
                                            },
                                            title: "Get different question",
                                            children: "🎲"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionToggle.tsx",
                                            lineNumber: 266,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionToggle.tsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: currentReflection,
                        onChange: (e)=>setCurrentReflection(e.target.value),
                        placeholder: "Share your thoughts...",
                        style: {
                            width: '100%',
                            height: '120px',
                            padding: '12px',
                            border: '2px solid #e2e8f0',
                            borderRadius: '12px',
                            background: 'white',
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            resize: 'vertical',
                            outline: 'none',
                            transition: 'border-color 0.2s ease',
                            marginBottom: '16px'
                        },
                        onFocus: (e)=>{
                            e.target.style.borderColor = '#3b82f6';
                        },
                        onBlur: (e)=>{
                            e.target.style.borderColor = '#e2e8f0';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowReflectionPanel(false),
                                style: {
                                    background: 'transparent',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: '8px 16px',
                                    fontSize: '14px',
                                    color: '#64748b',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease'
                                },
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReflectionSubmit,
                                disabled: !currentReflection.trim() || isSubmitting,
                                style: {
                                    background: currentReflection.trim() ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : '#e2e8f0',
                                    border: 'none',
                                    borderRadius: '12px',
                                    padding: '8px 20px',
                                    fontSize: '14px',
                                    color: currentReflection.trim() ? 'white' : '#94a3b8',
                                    cursor: currentReflection.trim() ? 'pointer' : 'not-allowed',
                                    fontWeight: '600',
                                    transition: 'all 0.2s ease',
                                    opacity: isSubmitting ? 0.7 : 1
                                },
                                children: isSubmitting ? 'Saving...' : 'Save Reflection'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReflectionToggle.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(ReflectionToggle, "gq5lBM5a/xLIx4sxbsZwudfTlgw=");
_c = ReflectionToggle;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ReflectionToggle);
var _c, _c1;
__turbopack_context__.k.register(_c, "ReflectionToggle");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/ArticleWithHighlights.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "articleContainer": "ArticleWithHighlights-module__TI8ibW__articleContainer",
  "articleContent": "ArticleWithHighlights-module__TI8ibW__articleContent",
  "errorContainer": "ArticleWithHighlights-module__TI8ibW__errorContainer",
  "errorMessage": "ArticleWithHighlights-module__TI8ibW__errorMessage",
  "loadingContainer": "ArticleWithHighlights-module__TI8ibW__loadingContainer",
  "loadingIndicator": "ArticleWithHighlights-module__TI8ibW__loadingIndicator",
  "spin": "ArticleWithHighlights-module__TI8ibW__spin",
});
}}),
"[project]/src/services/articleService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/services/articleService.ts
// // or wherever your interface lives
__turbopack_context__.s({
    "deleteComment": (()=>deleteComment),
    "deleteReply": (()=>deleteReply),
    "getArticle": (()=>getArticle),
    "getArticleComments": (()=>getArticleComments),
    "likeComment": (()=>likeComment),
    "likeReply": (()=>likeReply),
    "postComment": (()=>postComment),
    "postReply": (()=>postReply)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function getArticle(slug) {
    // 1. Read your base URL (make sure .env.local has NEXT_PUBLIC_API_BASE_URL)
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    // 2. Construct the correct Flask endpoint
    const url = `${baseUrl}/api/prototype/v1/article/${slug}`;
    // 3. Fetch it
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch article: ${res.status} ${res.statusText}`);
    }
    // 4. Parse JSON and return
    return res.json();
}
async function getArticleComments(slug) {
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    const url = `${baseUrl}/api/prototype/v1/article/${slug}/comments`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch comments: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
async function postComment(slug, userId, content) {
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    const url = `${baseUrl}/api/prototype/v1/article/${slug}/comment`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            content
        })
    });
    if (!res.ok) {
        throw new Error(`Failed to post comment: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
async function postReply(slug, commentId, userId, content) {
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    const url = `${baseUrl}/api/prototype/v1/article/${slug}/comment/${commentId}/reply`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            content
        })
    });
    if (!res.ok) {
        throw new Error(`Failed to post reply: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
async function likeComment(slug, commentId, userId) {
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    const url = `${baseUrl}/api/prototype/v1/article/${slug}/comment/${commentId}/like`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId
        })
    });
    if (!res.ok) {
        throw new Error(`Failed to like comment: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
async function likeReply(slug, commentId, replyId, userId) {
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    const url = `${baseUrl}/api/prototype/v1/article/${slug}/comment/${commentId}/reply/${replyId}/like`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId
        })
    });
    if (!res.ok) {
        throw new Error(`Failed to like reply: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
async function deleteComment(slug, commentId, userId) {
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    const url = `${baseUrl}/api/prototype/v1/article/${slug}/comment/${commentId}?userId=${userId}`;
    const res = await fetch(url, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error(`Failed to delete comment: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
async function deleteReply(slug, commentId, replyId, userId) {
    const baseUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5001") || 'http://127.0.0.1:5001';
    const url = `${baseUrl}/api/prototype/v1/article/${slug}/comment/${commentId}/reply/${replyId}?userId=${userId}`;
    const res = await fetch(url, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error(`Failed to delete reply: ${res.status} ${res.statusText}`);
    }
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/syntaxHighlighter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "autoHighlightCodeBlocks": (()=>autoHighlightCodeBlocks),
    "highlightCodeBlocks": (()=>highlightCodeBlocks),
    "highlightDynamicContent": (()=>highlightDynamicContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/prism.js [app-client] (ecmascript)");
// Import language support
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$javascript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-javascript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-typescript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$jsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-jsx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$tsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-tsx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$python$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-python.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$java$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-java.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-c.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$cpp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-cpp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$csharp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-csharp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$php$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-php.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$ruby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-ruby.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$go$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-go.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$rust$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-rust.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$sql$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-sql.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$bash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-bash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$yaml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-yaml.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-markdown.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function highlightCodeBlocks(container) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } // SSR guard
    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach((codeBlock)=>{
        const pre = codeBlock.parentElement;
        // Get language from class name or data attribute
        let language = 'javascript'; // default
        // Check for language-* class on the code element
        const classNames = codeBlock.className.split(' ');
        for (const className of classNames){
            if (className.startsWith('language-')) {
                language = className.replace('language-', '');
                break;
            }
        }
        // Check for data-language on the pre element
        if (pre.hasAttribute('data-language')) {
            language = pre.getAttribute('data-language');
        }
        // Apply syntax highlighting if language is supported
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].languages[language]) {
            try {
                const code = codeBlock.textContent || '';
                const highlightedCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].highlight(code, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].languages[language], language);
                codeBlock.innerHTML = highlightedCode;
                // Add language indicator
                pre.setAttribute('data-language', language);
                pre.style.position = 'relative';
            } catch (error) {
                console.warn('Syntax highlighting failed for language:', language, error);
            }
        }
    });
}
function autoHighlightCodeBlocks() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } // SSR guard
    const highlightOnLoad = ()=>{
        const containers = [
            document.querySelector('.article-content'),
            document.querySelector('.paragraph-text'),
            document.querySelector('.paragraph-block'),
            document.body
        ].filter(Boolean);
        containers.forEach((container)=>{
            if (container) {
                highlightCodeBlocks(container);
            }
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', highlightOnLoad);
    } else {
        highlightOnLoad();
    }
}
function highlightDynamicContent() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } // SSR guard
    // Wait a bit for DOM to settle
    setTimeout(()=>{
        autoHighlightCodeBlocks();
    }, 100);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ClientSideHighlighter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientSideHighlighter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const CLIENT_SIDE_HIGHLIGHTER_SCRIPT = `
// Simple syntax highlighting without external dependencies
function highlightCode() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    const pre = codeBlock.parentElement;
    if (!pre) return;
    
    // Apply dark theme
    pre.style.backgroundColor = '#1e1e1e';
    pre.style.color = '#d4d4d4';
    pre.style.border = '1px solid #333';
    pre.style.borderRadius = '8px';
    pre.style.padding = '16px';
    pre.style.fontFamily = "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
    pre.style.fontSize = '14px';
    pre.style.lineHeight = '1.6';
    pre.style.overflowX = 'auto';
    pre.style.position = 'relative';
    
    const code = codeBlock.textContent || '';
    let highlightedCode = code;
    
    // Simplified highlighting to avoid regex issues
    try {
      // Keywords
      const keywords = ['const', 'let', 'var', 'function', 'class', 'interface', 'type', 'enum', 'import', 'export', 'from', 'as', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'default', 'try', 'catch', 'finally', 'async', 'await', 'new', 'this', 'extends', 'implements', 'private', 'public', 'protected', 'static'];
      keywords.forEach(keyword => {
        const regex = new RegExp('\\\\b' + keyword + '\\\\b', 'g');
        highlightedCode = highlightedCode.replace(regex, '<span style="color: #569cd6; font-weight: 500;">' + keyword + '</span>');
      });
      
      // Simple string highlighting
      highlightedCode = highlightedCode.replace(/"([^"]*)"/g, '<span style="color: #ce9178;">"$1"</span>');
      highlightedCode = highlightedCode.replace(/'([^']*)'/g, '<span style="color: #ce9178;">\'$1\'</span>');
      
      // Numbers
      highlightedCode = highlightedCode.replace(/\\b\\d+\\.?\\d*\\b/g, '<span style="color: #b5cea8;">$&</span>');
      
      // Comments
      highlightedCode = highlightedCode.replace(/\/\/.*$/gm, '<span style="color: #6a9955; font-style: italic;">$&</span>');
    } catch (e) {
      console.warn('Syntax highlighting failed:', e);
      // Keep original code if highlighting fails
    }
    
    codeBlock.innerHTML = highlightedCode;
    
    // Add language indicator if available
    let language = 'code';
    const classNames = codeBlock.className.split(' ');
    for (const className of classNames) {
      if (className.startsWith('language-')) {
        language = className.replace('language-', '');
        break;
      }
    }
    
    if (pre.hasAttribute('data-language')) {
      language = pre.getAttribute('data-language');
    }
    
    // Add language badge
    const badge = document.createElement('div');
    badge.textContent = language.toUpperCase();
    badge.style.position = 'absolute';
    badge.style.top = '8px';
    badge.style.right = '12px';
    badge.style.background = 'rgba(255, 255, 255, 0.1)';
    badge.style.color = '#a0a0a0';
    badge.style.padding = '2px 8px';
    badge.style.borderRadius = '4px';
    badge.style.fontSize = '12px';
    badge.style.fontWeight = '500';
    badge.style.letterSpacing = '0.5px';
    pre.appendChild(badge);
  });
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', highlightCode);
} else {
  highlightCode();
}

// Also run on dynamic content changes
const observer = new MutationObserver(() => {
  setTimeout(highlightCode, 100);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
`;
function ClientSideHighlighter() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientSideHighlighter.useEffect": ()=>{
            // Create and inject the script
            const script = document.createElement('script');
            script.textContent = CLIENT_SIDE_HIGHLIGHTER_SCRIPT;
            document.head.appendChild(script);
            return ({
                "ClientSideHighlighter.useEffect": ()=>{
                    // Cleanup if needed
                    try {
                        document.head.removeChild(script);
                    } catch (e) {
                    // Script might already be removed
                    }
                }
            })["ClientSideHighlighter.useEffect"];
        }
    }["ClientSideHighlighter.useEffect"], []);
    return null; // This component doesn't render anything
}
_s(ClientSideHighlighter, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ClientSideHighlighter;
var _c;
__turbopack_context__.k.register(_c, "ClientSideHighlighter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/getMoodFromText.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMoodFromText": (()=>getMoodFromText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sentiment$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sentiment/lib/index.js [app-client] (ecmascript)");
;
function getMoodFromText(text) {
    const sentiment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sentiment$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const result = sentiment.analyze(text);
    const lowerText = text.toLowerCase();
    // Define emotion keywords
    const angryWords = [
        'angry',
        'furious',
        'rage',
        'mad',
        'hate',
        'disgusted',
        'outraged',
        'pissed',
        'frustrated',
        'livid',
        'infuriated',
        'enraged',
        'trump',
        'politician',
        'corrupt',
        'stupid',
        'idiot',
        'terrible',
        'awful',
        'worst',
        'disgusting',
        'pathetic'
    ];
    const joyfulWords = [
        'happy',
        'joy',
        'excited',
        'amazing',
        'wonderful',
        'fantastic',
        'great',
        'awesome',
        'brilliant',
        'excellent',
        'perfect',
        'beautiful',
        'love',
        'celebrate',
        'triumph',
        'success',
        'victory',
        'delighted',
        'cheerful',
        'blissful'
    ];
    const peacefulWords = [
        'calm',
        'peaceful',
        'serene',
        'tranquil',
        'gentle',
        'soothing',
        'quiet',
        'meditation',
        'zen',
        'harmony',
        'balance',
        'nature',
        'garden',
        'sunset',
        'ocean',
        'mindful',
        'breathe',
        'stillness'
    ];
    const energeticWords = [
        'energy',
        'power',
        'strong',
        'dynamic',
        'intense',
        'passionate',
        'vibrant',
        'bold',
        'fierce',
        'electric',
        'explosive',
        'powerful',
        'charged',
        'pumped',
        'motivated',
        'driven'
    ];
    const sadWords = [
        'sad',
        'depressed',
        'melancholy',
        'grief',
        'sorrow',
        'tragic',
        'heartbreak',
        'crying',
        'tears',
        'lonely',
        'despair',
        'hopeless',
        'miserable',
        'devastated',
        'broken'
    ];
    // Count keyword matches
    const angryCount = angryWords.filter((word)=>lowerText.includes(word)).length;
    const joyfulCount = joyfulWords.filter((word)=>lowerText.includes(word)).length;
    const peacefulCount = peacefulWords.filter((word)=>lowerText.includes(word)).length;
    const energeticCount = energeticWords.filter((word)=>lowerText.includes(word)).length;
    const sadCount = sadWords.filter((word)=>lowerText.includes(word)).length;
    // Determine mood based on keyword frequency and sentiment
    if (angryCount >= 2 || angryCount >= 1 && result.score < -2) return 'angry';
    if (joyfulCount >= 2 || joyfulCount >= 1 && result.score > 3) return 'joyful';
    if (peacefulCount >= 2 || peacefulCount >= 1 && result.score > 0) return 'peaceful';
    if (energeticCount >= 2 || energeticCount >= 1 && Math.abs(result.score) > 2) return 'energetic';
    if (sadCount >= 2 || sadCount >= 1 && result.score < -1) return 'sad';
    // Fallback to sentiment score
    if (result.score > 2) return 'joyful';
    if (result.score < -3) return 'angry';
    if (result.score < -1) return 'sad';
    return 'reflective';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/moodThemes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "moodThemes": (()=>moodThemes)
});
const moodThemes = {
    joyful: {
        gradientStart: '#FFD700',
        gradientEnd: '#FF6B6B',
        accent: '#FF4757' // Bright red
    },
    angry: {
        gradientStart: '#FF416C',
        gradientEnd: '#FF4B2B',
        accent: '#B71C1C' // Dark red
    },
    energetic: {
        gradientStart: '#00F260',
        gradientEnd: '#0575E6',
        accent: '#1565C0' // Deep blue
    },
    peaceful: {
        gradientStart: '#A8E6CF',
        gradientEnd: '#88D8C0',
        accent: '#4CAF50' // Forest green
    },
    reflective: {
        gradientStart: '#667eea',
        gradientEnd: '#764ba2',
        accent: '#5E35B1' // Royal purple
    },
    sad: {
        gradientStart: '#4facfe',
        gradientEnd: '#00f2fe',
        accent: '#0288D1' // Ocean blue
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ArticleWithHighlights.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/HighlightContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleHighlights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleHighlights.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MoodToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MoodToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticleWithHighlights.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$articleService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/articleService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$syntaxHighlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/syntaxHighlighter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientSideHighlighter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientSideHighlighter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getMoodFromText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/moodThemes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const ArticleWithHighlights = ({ articleId, initialHtml, isAuthenticated = false, articleTitle = 'Article', articleSlug = '' })=>{
    _s();
    const [moodFeatureEnabled, setMoodFeatureEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialHtml);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('reflective');
    const articleContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Apply syntax highlighting when content loads
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleWithHighlights.useEffect": ()=>{
            if (articleContainerRef.current && (initialHtml || article)) {
                // Small delay to ensure DOM is updated
                setTimeout({
                    "ArticleWithHighlights.useEffect": ()=>{
                        if (articleContainerRef.current) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$syntaxHighlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highlightCodeBlocks"])(articleContainerRef.current);
                        }
                    }
                }["ArticleWithHighlights.useEffect"], 100);
            }
        }
    }["ArticleWithHighlights.useEffect"], [
        initialHtml,
        article
    ]);
    // Analyze mood when content is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleWithHighlights.useEffect": ()=>{
            const content = getContentToDisplay();
            if (content) {
                // Extract text from HTML for sentiment analysis
                const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
                if (textContent) {
                    const detectedMood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMoodFromText"])(textContent);
                    setMood(detectedMood);
                }
            }
        }
    }["ArticleWithHighlights.useEffect"], [
        initialHtml,
        article
    ]);
    const handleShare = (text)=>{
        if (navigator.share) {
            navigator.share({
                title: article?.title || 'Shared highlight',
                text: `"${text}" - from article ${articleId}`,
                url: window.location.href
            }).catch((error)=>console.error('Error sharing:', error));
        } else {
            const shareText = `"${text}" - from article ${articleId} ${window.location.href}`;
            navigator.clipboard.writeText(shareText).then(()=>alert('Highlight copied to clipboard!')).catch((error)=>console.error('Error copying to clipboard:', error));
        }
    };
    // Load the article if needed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleWithHighlights.useEffect": ()=>{
            if (initialHtml || article) return;
            const fetchArticle = {
                "ArticleWithHighlights.useEffect.fetchArticle": async ()=>{
                    try {
                        setIsLoading(true);
                        const articleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$articleService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticle"])(articleId);
                        if (!articleData) {
                            setError('Article not found');
                            return;
                        }
                        let content = '';
                        if (typeof articleData.content === 'string') {
                            content = articleData.content;
                        } else {
                            content = articleData.content.map({
                                "ArticleWithHighlights.useEffect.fetchArticle": (p)=>`<p>${p.text}</p>`
                            }["ArticleWithHighlights.useEffect.fetchArticle"]).join('\n');
                        }
                        const cleanHtml = content.replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '').replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
                        setArticle({
                            title: articleData.title,
                            body: cleanHtml
                        });
                    } catch (error) {
                        console.error('Error loading article:', error);
                        setError('Failed to load article');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["ArticleWithHighlights.useEffect.fetchArticle"];
            fetchArticle();
        }
    }["ArticleWithHighlights.useEffect"], [
        articleId,
        article,
        initialHtml
    ]);
    // Get the content to display
    const getContentToDisplay = ()=>{
        if (initialHtml) {
            return initialHtml.replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '').replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
        }
        return article?.body || '';
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading article..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightProvider"], {
        articleId: articleId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientSideHighlighter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            margin: '1rem 0',
                            padding: '1rem',
                            backgroundImage: isAuthenticated ? `linear-gradient(270deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd})` : 'linear-gradient(270deg, #9CA3AF, #6B7280)',
                            backgroundSize: '200% 200%',
                            animation: 'slideGradient 8s ease infinite alternate',
                            borderRadius: '20px',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            fontSize: '0.875rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#F7FAFC',
                                            fontWeight: '500',
                                            fontSize: '0.875rem',
                                            opacity: 0.9
                                        },
                                        children: isAuthenticated ? '🎨 Atmosphere adapted' : '🔒 Sign in for enhanced features'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#F7FAFC',
                                            fontWeight: '600',
                                            fontSize: '0.875rem'
                                        },
                                        children: "✨ Enhanced features active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#F7FAFC',
                                            fontWeight: '500',
                                            fontSize: '0.75rem'
                                        },
                                        children: "Mood Background"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MoodToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        style: {
                                            padding: '0.4rem 0.8rem',
                                            border: 'none',
                                            background: 'rgba(255, 255, 255, 0.2)',
                                            color: '#F7FAFC',
                                            borderRadius: '20px',
                                            fontSize: '0.7rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
                                            backdropFilter: 'blur(10px)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#F7FAFC',
                                            fontWeight: '500',
                                            fontSize: '0.75rem'
                                        },
                                        children: "Interactive Reflections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: isAuthenticated ? ()=>setReflectionsEnabled(!reflectionsEnabled) : undefined,
                                        style: {
                                            padding: '0.4rem 0.8rem',
                                            border: 'none',
                                            background: isAuthenticated && reflectionsEnabled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                                            color: isAuthenticated && reflectionsEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent : '#F7FAFC',
                                            borderRadius: '20px',
                                            fontSize: '0.7rem',
                                            fontWeight: '600',
                                            cursor: isAuthenticated ? 'pointer' : 'not-allowed',
                                            transition: 'all 0.3s ease',
                                            boxShadow: isAuthenticated && reflectionsEnabled ? '0 2px 8px rgba(255, 255, 255, 0.3)' : '0 1px 4px rgba(0, 0, 0, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            opacity: isAuthenticated ? 1 : 0.6
                                        },
                                        title: reflectionsEnabled ? "Turn off reflections" : "Turn on reflections",
                                        children: isAuthenticated && reflectionsEnabled ? 'ON' : 'OFF'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleHighlights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        articleId: articleId,
                        articleTitle: articleTitle,
                        articleSlug: articleSlug,
                        onShare: handleShare,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: articleContainerRef,
                                    dangerouslySetInnerHTML: {
                                        __html: getContentToDisplay()
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            reflectionsEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                articleId: articleId
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                lineNumber: 258,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
};
_s(ArticleWithHighlights, "B3g0+xy7yBZzBKJv1dw8smMZZNI=");
_c = ArticleWithHighlights;
const __TURBOPACK__default__export__ = ArticleWithHighlights;
var _c;
__turbopack_context__.k.register(_c, "ArticleWithHighlights");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/firebase/articles.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/notifications.ts [app-client] (ecmascript)");
;
;
;
async function getArticles(options = {}) {
    const { limit, includeDrafts = false } = options;
    console.log('getArticles called with limit:', limit);
    try {
        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
        const queryConstraints = [];
        if (!includeDrafts) {
            // If status is explicitly 'published' OR if status field does not exist (older data might not have it)
            // Firestore doesn't easily support "OR" across different fields or "field not exists" in combination with other `where` on same field.
            // A common approach is to ensure all articles have a status.
            // For now, we'll explicitly query for 'published'. If you need to include articles where 'status' is undefined
            // as 'published', you might need two separate queries or adjust your data model to always include a 'status'.
            queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'));
        }
        // Always order by creation date
        queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        if (limit && limit > 0) {
            console.log('Adding limit constraint:', limit);
            queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(limit));
        }
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, ...queryConstraints);
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        console.log('Query returned document count:', querySnapshot.size);
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
    try {
        // Super aggressive cache-busting
        const timestamp = Date.now();
        console.log(`🔄 DIRECT FETCH: Getting article with ID: ${id} (time: ${timestamp})`);
        // Completely bypass any caching by making a direct Firestore call
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', id);
        // Direct Firestore fetch with no caching
        // Get fresh data directly
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const articleData = {
                id: docSnap.id,
                ...docSnap.data()
            };
            console.log('✅ Article found:', articleData.title);
            console.log('📄 Content length:', articleData.body?.length || 0);
            console.log('🏷️ Tags:', articleData.tags?.join(', ') || 'none');
            // Return fresh data
            return articleData;
        } else {
            console.log('❌ Article not found for ID:', id);
            return null;
        }
    } catch (error) {
        console.error('🛑 Error getting article:', error);
        throw error;
    }
}
async function getArticleBySlug(slug) {
    try {
        console.log(`Getting article by slug: ${slug}, timestamp: ${Date.now()}`);
        // Try multiple attempts to get fresh data
        let attempts = 0;
        const maxAttempts = 2;
        while(attempts < maxAttempts){
            attempts++;
            console.log(`Attempt ${attempts} to get article by slug`);
            // Short delay between attempts
            if (attempts > 1) {
                await new Promise((resolve)=>setTimeout(resolve, 500));
            }
            const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('slug', '==', slug), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            if (!querySnapshot.empty) {
                const docSnap = querySnapshot.docs[0];
                const articleData = {
                    id: docSnap.id,
                    ...docSnap.data()
                };
                console.log('Article found by slug:', articleData.title, 'Content length:', articleData.body?.length || 0);
                return articleData;
            } else if (attempts >= maxAttempts) {
                console.log('Article not found for slug after multiple attempts:', slug);
                return null;
            }
            console.log(`Article not found by slug on attempt ${attempts}, will retry...`);
        }
        return null;
    } catch (error) {
        console.error('Error getting article by slug:', error);
        throw error;
    }
}
async function createArticle(articleInput) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to create an article');
        }
        const newArticleData = {
            title: articleInput.title,
            body: articleInput.body,
            slug: articleInput.slug || articleInput.title.toLowerCase().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, ''),
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now(),
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
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles'), newArticleData);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to edit an article');
        }
        const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId);
        const articleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
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
            console.log('Updated slug to:', updateData.slug);
        }
        updateData.updatedAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(articleRef, updateData);
        const updatedArticleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
        return {
            id: updatedArticleSnap.id,
            ...updatedArticleSnap.data()
        };
    } catch (error) {
        console.error('Error updating article:', error);
        throw error;
    }
}
async function getArticleComments(articleId) {
    try {
        const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(commentsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to comment');
        }
        const newComment = {
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            likes: [],
            replies: []
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments'), newComment);
        const articleInfoForNotification = await getArticleById(articleId);
        if (articleInfoForNotification && articleInfoForNotification.authorId !== user.uid) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommentNotification"])(articleInfoForNotification.authorId, articleId, articleInfoForNotification.slug || '', articleInfoForNotification.title || 'Article', docRef.id, content);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to reply');
        }
        const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
        const commentSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }
        const newReply = {
            replyId: Math.random().toString(36).substring(2, 15),
            userId: user.uid,
            userName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
            content,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            likes: []
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
            replies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(newReply)
        });
        const commentData = commentSnap.data();
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
async function likeComment(articleId, commentId) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to like a comment');
        }
        const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
        const commentSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }
        const commentData = commentSnap.data();
        const userId = user.uid;
        const likes = commentData.likes || [];
        const hasLiked = likes.includes(userId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
            likes: hasLiked ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayRemove"])(userId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(userId)
        });
        const updatedSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to delete a comment');
        }
        const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
        const commentSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
        if (!commentSnap.exists()) {
            throw new Error('Comment not found');
        }
        const commentData = commentSnap.data();
        if (commentData.userId !== user.uid) {
            throw new Error('You can only delete your own comments');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(commentRef);
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
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to delete an article');
        }
        const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId);
        const articleDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
        if (!articleDoc.exists()) {
            throw new Error('Article not found');
        }
        const articleData = articleDoc.data();
        if (articleData.authorId !== user.uid) {
            throw new Error('You can only delete your own articles');
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(articleRef);
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
        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
        const queryConstraints = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('tags', 'array-contains', tag),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc')
        ];
        if (queryLimit && queryLimit > 0) {
            queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(queryLimit));
        }
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, ...queryConstraints);
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/comment.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "commentActions": "comment-module__H_rXLG__commentActions",
  "commentAvatar": "comment-module__H_rXLG__commentAvatar",
  "commentContent": "comment-module__H_rXLG__commentContent",
  "commentDate": "comment-module__H_rXLG__commentDate",
  "commentDeleteBtn": "comment-module__H_rXLG__commentDeleteBtn",
  "commentError": "comment-module__H_rXLG__commentError",
  "commentForm": "comment-module__H_rXLG__commentForm",
  "commentHeader": "comment-module__H_rXLG__commentHeader",
  "commentInput": "comment-module__H_rXLG__commentInput",
  "commentInputContainer": "comment-module__H_rXLG__commentInputContainer",
  "commentItem": "comment-module__H_rXLG__commentItem",
  "commentLikeBtn": "comment-module__H_rXLG__commentLikeBtn",
  "commentLoading": "comment-module__H_rXLG__commentLoading",
  "commentSection": "comment-module__H_rXLG__commentSection",
  "commentSectionTitle": "comment-module__H_rXLG__commentSectionTitle",
  "commentSubmit": "comment-module__H_rXLG__commentSubmit",
  "commentUser": "comment-module__H_rXLG__commentUser",
  "commentsList": "comment-module__H_rXLG__commentsList",
  "inThread": "comment-module__H_rXLG__inThread",
  "liked": "comment-module__H_rXLG__liked",
  "loadingDot": "comment-module__H_rXLG__loadingDot",
  "loadingDots": "comment-module__H_rXLG__loadingDots",
  "loginButton": "comment-module__H_rXLG__loginButton",
  "loginModal": "comment-module__H_rXLG__loginModal",
  "loginModalButton": "comment-module__H_rXLG__loginModalButton",
  "loginModalButtons": "comment-module__H_rXLG__loginModalButtons",
  "loginModalClose": "comment-module__H_rXLG__loginModalClose",
  "loginModalOverlay": "comment-module__H_rXLG__loginModalOverlay",
  "loginModalText": "comment-module__H_rXLG__loginModalText",
  "loginModalTitle": "comment-module__H_rXLG__loginModalTitle",
  "loginPromptContainer": "comment-module__H_rXLG__loginPromptContainer",
  "noComments": "comment-module__H_rXLG__noComments",
  "open": "comment-module__H_rXLG__open",
  "primary": "comment-module__H_rXLG__primary",
  "pulse": "comment-module__H_rXLG__pulse",
  "repliesToggle": "comment-module__H_rXLG__repliesToggle",
  "repliesToggleIcon": "comment-module__H_rXLG__repliesToggleIcon",
  "replyAvatar": "comment-module__H_rXLG__replyAvatar",
  "replyButtons": "comment-module__H_rXLG__replyButtons",
  "replyCancel": "comment-module__H_rXLG__replyCancel",
  "replyContent": "comment-module__H_rXLG__replyContent",
  "replyDate": "comment-module__H_rXLG__replyDate",
  "replyForm": "comment-module__H_rXLG__replyForm",
  "replyHeader": "comment-module__H_rXLG__replyHeader",
  "replyInput": "comment-module__H_rXLG__replyInput",
  "replyItem": "comment-module__H_rXLG__replyItem",
  "replySection": "comment-module__H_rXLG__replySection",
  "replySubmit": "comment-module__H_rXLG__replySubmit",
  "replyToggle": "comment-module__H_rXLG__replyToggle",
  "replyUser": "comment-module__H_rXLG__replyUser",
  "secondary": "comment-module__H_rXLG__secondary",
});
}}),
"[project]/src/components/CommentSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/moodThemes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/comment.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const CommentSection = ({ slug, articleId: propArticleId, isComplex, mood = 'reflective', moodFeatureEnabled = false })=>{
    _s();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [focusState, setFocusState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyContent, setReplyContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submittingReply, setSubmittingReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedReplies, setExpandedReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLoginPrompt, setShowLoginPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [articleId, setArticleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(propArticleId || null);
    // This user object will be updated when authenticated
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        name: 'Reader'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentSection.useEffect": ()=>{
            // Check authentication status
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "CommentSection.useEffect.unsubscribe": (user)=>{
                    const isAuth = !!user;
                    setIsAuthenticated(isAuth);
                    if (isAuth && user) {
                        setCurrentUser({
                            id: user.uid,
                            name: user.displayName || user.email?.split('@')[0] || 'User'
                        });
                    } else {
                        setCurrentUser({
                            id: '',
                            name: 'Reader'
                        });
                    }
                }
            }["CommentSection.useEffect.unsubscribe"]);
            return ({
                "CommentSection.useEffect": ()=>unsubscribe()
            })["CommentSection.useEffect"];
        }
    }["CommentSection.useEffect"], []);
    // First, get the article ID from the slug if not provided directly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentSection.useEffect": ()=>{
            if (propArticleId) {
                setArticleId(propArticleId);
                return;
            }
            if (!slug) return;
            const fetchArticleId = {
                "CommentSection.useEffect.fetchArticleId": async ()=>{
                    try {
                        const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleBySlug"])(slug);
                        if (article && article.id) {
                            setArticleId(article.id);
                        }
                    } catch (err) {
                        console.error('Error fetching article:', err);
                        setError('Unable to load article details.');
                    }
                }
            }["CommentSection.useEffect.fetchArticleId"];
            fetchArticleId();
        }
    }["CommentSection.useEffect"], [
        slug,
        propArticleId
    ]);
    // Then, fetch comments when we have the articleId
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentSection.useEffect": ()=>{
            if (!articleId) return;
            setLoading(true);
            const fetchComments = {
                "CommentSection.useEffect.fetchComments": async ()=>{
                    try {
                        const commentsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleComments"])(articleId);
                        // Add a small delay to show loading animation
                        setTimeout({
                            "CommentSection.useEffect.fetchComments": ()=>{
                                setComments(commentsData);
                                setLoading(false);
                            }
                        }["CommentSection.useEffect.fetchComments"], 800);
                    } catch (err) {
                        console.error('Error fetching comments:', err);
                        setError('Unable to load discussions. Please refresh the page to try again.');
                        setLoading(false);
                    }
                }
            }["CommentSection.useEffect.fetchComments"];
            fetchComments();
        }
    }["CommentSection.useEffect"], [
        articleId
    ]);
    const handleCommentSubmit = async (e)=>{
        e.preventDefault();
        if (!newComment.trim() || submitting || !articleId) return;
        if (!isAuthenticated) {
            setShowLoginPrompt(true);
            return;
        }
        try {
            setSubmitting(true);
            const comment = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addComment"])(articleId, newComment);
            setComments((prev)=>[
                    comment,
                    ...prev
                ]);
            setNewComment('');
            setSubmitting(false);
            setFocusState(false); // Reset focus state after submission
        } catch (err) {
            console.error('Error adding comment:', err);
            setError('Your response could not be posted. Please try again.');
            setSubmitting(false);
        }
    };
    const handleReplySubmit = async (commentId)=>{
        if (!replyContent.trim() || submittingReply || !articleId) return;
        if (!isAuthenticated) {
            setShowLoginPrompt(true);
            return;
        }
        try {
            setSubmittingReply(true);
            const reply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addReply"])(articleId, commentId, replyContent);
            // Update the local state with the new reply
            setComments((prev)=>prev.map((comment)=>comment.commentId === commentId || comment.id === commentId ? {
                        ...comment,
                        replies: [
                            ...comment.replies || [],
                            reply
                        ]
                    } : comment));
            // Reset reply state
            setReplyContent('');
            setReplyingTo(null);
            setSubmittingReply(false);
            // Ensure replies for this comment are expanded
            setExpandedReplies((prev)=>({
                    ...prev,
                    [commentId]: true
                }));
        } catch (err) {
            console.error('Error adding reply:', err);
            setSubmittingReply(false);
        }
    };
    const handleLikeComment = async (commentId)=>{
        if (!isAuthenticated || !articleId) {
            setShowLoginPrompt(true);
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["likeComment"])(articleId, commentId);
            // Update local state
            setComments((prev)=>prev.map((comment)=>comment.commentId === commentId || comment.id === commentId ? {
                        ...comment,
                        likes: result.likes
                    } : comment));
        } catch (err) {
            console.error('Error liking comment:', err);
        }
    };
    const handleDeleteComment = async (commentId)=>{
        if (!isAuthenticated || !articleId) {
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteComment"])(articleId, commentId);
            // Remove comment from local state
            setComments((prev)=>prev.filter((comment)=>comment.commentId !== commentId && comment.id !== commentId));
        } catch (err) {
            console.error('Error deleting comment:', err);
        }
    };
    const toggleReplies = (commentId)=>{
        setExpandedReplies((prev)=>({
                ...prev,
                [commentId]: !prev[commentId]
            }));
    };
    // Helper to format dates
    const formatDate = (timestamp)=>{
        if (!timestamp) return 'Unknown date';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        // For recent dates, use relative time (which is less prone to hydration issues)
        if (diffInSeconds < 60) {
            return 'Just now';
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (diffInSeconds < 604800) {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else {
            // Use consistent UTC timezone and locale for older dates
            try {
                const options = {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    timeZone: 'UTC'
                };
                return date.toLocaleDateString('en-US', options);
            } catch (error) {
                console.error('Error formatting date:', error);
                return 'Unknown date';
            }
        }
    };
    // Generate a user avatar with initial
    const getUserAvatar = (name, userId, isReply = false)=>{
        const initial = name?.charAt(0).toUpperCase() || 'A';
        const colors = [
            '#4f46e5',
            '#0ea5e9',
            '#10b981',
            '#f59e0b',
            '#ef4444'
        ];
        const colorIndex = userId ? Math.abs(userId.charCodeAt(0) % colors.length) : 0;
        const bgColor = colors[colorIndex];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: isReply ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyAvatar : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentAvatar,
            style: {
                backgroundColor: bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: isReply ? '0.9rem' : '1.2rem'
            },
            children: initial
        }, void 0, false, {
            fileName: "[project]/src/components/CommentSection.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSection,
        style: moodFeatureEnabled ? {
            background: `linear-gradient(160deg, 
          rgba(255, 255, 255, 0.1) 0%, 
          ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}08 30%, 
          ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}06 70%, 
          rgba(255, 255, 255, 0.05) 100%)`,
            borderRadius: '32px',
            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}12`,
            boxShadow: `
          0 8px 32px -8px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}08,
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
            backdropFilter: 'blur(20px) saturate(1.1)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            padding: '2rem'
        } : {},
        children: [
            moodFeatureEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            right: '-50%',
                            bottom: '-50%',
                            background: `
                radial-gradient(circle at 30% 20%, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}04, transparent 40%), 
                radial-gradient(circle at 70% 80%, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}03, transparent 40%),
                radial-gradient(circle at 20% 70%, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}02, transparent 30%)
              `,
                            animation: 'moodFloat 20s ease-in-out infinite',
                            pointerEvents: 'none',
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: '32px',
                            background: `linear-gradient(45deg, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}05, 
                transparent, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}05)`,
                            filter: 'blur(1px)',
                            opacity: 0.6,
                            pointerEvents: 'none',
                            zIndex: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSectionTitle,
                        style: moodFeatureEnabled ? {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent,
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            textShadow: `0 0 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}30, 0 0 40px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}15`,
                            transition: 'all 0.3s ease'
                        } : {
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            color: '#333'
                        },
                        children: "💬 Join the Discussion"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentError,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "8",
                                        x2: "12",
                                        y2: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "16",
                                        x2: "12.01",
                                        y2: "16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentForm,
                        onSubmit: handleCommentSubmit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentInputContainer,
                            style: moodFeatureEnabled ? {
                                background: `linear-gradient(135deg, 
              rgba(255, 255, 255, ${focusState ? '0.15' : '0.08'}), 
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}${focusState ? '12' : '06'}, 
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}${focusState ? '08' : '04'})`,
                                border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}${focusState ? '25' : '15'}`,
                                borderRadius: '24px',
                                boxShadow: focusState ? `0 8px 32px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}20, 
                 inset 0 1px 0 rgba(255, 255, 255, 0.2)` : `0 4px 16px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}10`,
                                backdropFilter: 'blur(12px)',
                                transform: focusState ? 'translateY(-2px)' : 'translateY(0)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                overflow: 'hidden'
                            } : {
                                opacity: focusState ? 1 : 0.85,
                                transition: 'opacity 0.3s ease'
                            },
                            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentAvatar,
                                        children: getUserAvatar(currentUser.name, currentUser.id)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentInput,
                                        placeholder: "Share your thoughts...",
                                        value: newComment,
                                        onChange: (e)=>setNewComment(e.target.value),
                                        onFocus: ()=>setFocusState(true),
                                        onBlur: ()=>{
                                            if (!newComment.trim()) {
                                                setFocusState(false);
                                            }
                                        },
                                        style: moodFeatureEnabled ? {
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: 'none',
                                            borderRadius: '20px',
                                            color: '#2d3748',
                                            fontSize: '1rem',
                                            padding: '1rem',
                                            resize: 'vertical',
                                            minHeight: '120px',
                                            backdropFilter: 'blur(8px)',
                                            transition: 'all 0.3s ease'
                                        } : {}
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSubmit,
                                        type: "submit",
                                        disabled: !newComment.trim() || submitting,
                                        style: moodFeatureEnabled ? {
                                            background: `linear-gradient(135deg, 
                    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent}, 
                    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd})`,
                                            border: 'none',
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontWeight: '600',
                                            padding: '0.75rem 1.5rem',
                                            boxShadow: `0 4px 16px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent}40`,
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform: 'translateY(0)',
                                            cursor: 'pointer'
                                        } : {},
                                        onMouseEnter: moodFeatureEnabled ? (e)=>{
                                            if (!e.currentTarget.disabled) {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = `0 8px 24px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent}60`;
                                            }
                                        } : undefined,
                                        onMouseLeave: moodFeatureEnabled ? (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = `0 4px 16px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent}40`;
                                        } : undefined,
                                        children: submitting ? '✨ Posting...' : '💬 Post'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginPromptContainer,
                                onClick: ()=>setShowLoginPrompt(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentInput,
                                        placeholder: "Login to join the discussion...",
                                        disabled: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSubmit} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginButton}`,
                                        type: "button",
                                        onClick: ()=>setShowLoginPrompt(true),
                                        children: "Login to comment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 477,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 386,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 385,
                        columnNumber: 7
                    }, this),
                    showLoginPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalOverlay,
                        onClick: ()=>setShowLoginPrompt(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModal,
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalClose,
                                    onClick: ()=>setShowLoginPrompt(false),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalTitle,
                                    children: "Join the conversation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalText,
                                    children: "Sign in to Journalite to share your thoughts and join the discussion."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalButtons,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary}`,
                                            children: "Log In"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommentSection.tsx",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/register",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary}`,
                                            children: "Create Account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommentSection.tsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentLoading,
                        style: moodFeatureEnabled ? {
                            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.1), 
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}06)`,
                            borderRadius: '24px',
                            padding: '2rem',
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}10`,
                            textAlign: 'center'
                        } : {},
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: moodFeatureEnabled ? {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent,
                                    fontWeight: '500',
                                    marginBottom: '1rem'
                                } : {},
                                children: "✨ Loading comments..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDots,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDot,
                                        style: moodFeatureEnabled ? {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart
                                        } : {}
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDot,
                                        style: moodFeatureEnabled ? {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent
                                        } : {}
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 538,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDot,
                                        style: moodFeatureEnabled ? {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd
                                        } : {}
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noComments,
                        style: moodFeatureEnabled ? {
                            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.15) 0%, 
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}08 50%, 
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}06 100%)`,
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}12`,
                            borderRadius: '24px',
                            boxShadow: `
              0 6px 24px -8px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}10,
              inset 0 1px 0 rgba(255, 255, 255, 0.12)
            `,
                            backdropFilter: 'blur(12px)',
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent,
                            fontWeight: '500',
                            padding: '2rem',
                            textAlign: 'center',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        } : {},
                        children: "Be the first to share your thoughts on this article."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentsList,
                        children: comments.map((comment)=>{
                            const commentId = comment.commentId || comment.id || '';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentItem,
                                style: moodFeatureEnabled ? {
                                    background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.12) 0%, 
                    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}06 50%, 
                    ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}04 100%)`,
                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}10`,
                                    borderRadius: '24px',
                                    boxShadow: `
                    0 4px 20px -6px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}08,
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                } : {},
                                onMouseEnter: moodFeatureEnabled ? (e)=>{
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                    e.currentTarget.style.boxShadow = `
                    0 8px 28px -6px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}12,
                    inset 0 1px 0 rgba(255, 255, 255, 0.15)
                  `;
                                } : undefined,
                                onMouseLeave: moodFeatureEnabled ? (e)=>{
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = `
                    0 4px 20px -6px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}08,
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `;
                                } : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentHeader,
                                        children: [
                                            getUserAvatar(comment.userName, comment.userId),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentUser,
                                                children: comment.userName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 617,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentDate,
                                                children: formatDate(comment.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 618,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 615,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentContent,
                                        children: comment.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 620,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentLikeBtn} ${comment.likes.includes(currentUser.id) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liked : ''}`,
                                                onClick: ()=>handleLikeComment(commentId),
                                                "aria-pressed": comment.likes.includes(currentUser.id),
                                                "aria-label": comment.likes.includes(currentUser.id) ? "Unlike comment" : "Like comment",
                                                children: [
                                                    comment.likes.includes(currentUser.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        className: "w-4 h-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CommentSection.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        "stroke-width": "1.5",
                                                        stroke: "currentColor",
                                                        className: "w-4 h-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CommentSection.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: comment.likes.length > 0 ? comment.likes.length : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 624,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyToggle,
                                                onClick: ()=>{
                                                    if (isAuthenticated) {
                                                        setReplyingTo(replyingTo === commentId ? null : commentId);
                                                    } else {
                                                        setShowLoginPrompt(true);
                                                    }
                                                },
                                                "aria-label": "Reply to comment",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        "stroke-width": "1.5",
                                                        stroke: "currentColor",
                                                        className: "w-4 h-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CommentSection.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Reply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 656,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, this),
                                            comment.userId === currentUser.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentDeleteBtn,
                                                onClick: ()=>handleDeleteComment(commentId),
                                                "aria-label": "Delete comment",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        "stroke-width": "1.5",
                                                        stroke: "currentColor",
                                                        className: "w-4 h-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            "stroke-linecap": "round",
                                                            "stroke-linejoin": "round",
                                                            d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09.996-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CommentSection.tsx",
                                                            lineNumber: 667,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 661,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 623,
                                        columnNumber: 17
                                    }, this),
                                    comment.replies && comment.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].repliesToggle,
                                                onClick: ()=>toggleReplies(commentId),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].repliesToggleIcon} ${expandedReplies[commentId] ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ''}`,
                                                        children: "▷"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 23
                                                    }, this),
                                                    `${comment.replies.length} ${comment.replies.length === 1 ? 'reply' : 'replies'}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 677,
                                                columnNumber: 21
                                            }, this),
                                            expandedReplies[commentId] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replySection,
                                                children: comment.replies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyItem,
                                                        style: moodFeatureEnabled ? {
                                                            background: `linear-gradient(135deg, 
                                rgba(255, 255, 255, 0.08) 0%, 
                                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}04 50%, 
                                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}03 100%)`,
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}08`,
                                                            borderRadius: '20px',
                                                            boxShadow: `
                                0 2px 12px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}06,
                                inset 0 1px 0 rgba(255, 255, 255, 0.08)
                              `,
                                                            backdropFilter: 'blur(8px)',
                                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                            margin: '0.75rem 0',
                                                            padding: '1rem'
                                                        } : {},
                                                        onMouseEnter: moodFeatureEnabled ? (e)=>{
                                                            e.currentTarget.style.transform = 'translateX(4px)';
                                                            e.currentTarget.style.boxShadow = `
                                0 4px 16px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}10,
                                inset 0 1px 0 rgba(255, 255, 255, 0.12)
                              `;
                                                        } : undefined,
                                                        onMouseLeave: moodFeatureEnabled ? (e)=>{
                                                            e.currentTarget.style.transform = 'translateX(0)';
                                                            e.currentTarget.style.boxShadow = `
                                0 2px 12px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}06,
                                inset 0 1px 0 rgba(255, 255, 255, 0.08)
                              `;
                                                        } : undefined,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyHeader,
                                                                children: [
                                                                    getUserAvatar(reply.userName, reply.userId, true),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyUser,
                                                                        children: reply.userName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                                        lineNumber: 726,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyDate,
                                                                        children: formatDate(reply.createdAt)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                                        lineNumber: 727,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                                lineNumber: 724,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyContent,
                                                                children: reply.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, reply.replyId, true, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 688,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    replyingTo === commentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyForm} ${comment.replies && comment.replies.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inThread : ''}`,
                                        style: moodFeatureEnabled ? {
                                            background: `linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.1) 0%, 
                        ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}06 50%, 
                        ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}04 100%)`,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}12`,
                                            borderRadius: '20px',
                                            boxShadow: `0 3px 16px -4px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}08`,
                                            backdropFilter: 'blur(10px)',
                                            padding: '1.5rem',
                                            margin: '1rem 0'
                                        } : {},
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyInput,
                                                placeholder: "Write a reply...",
                                                value: replyContent,
                                                onChange: (e)=>setReplyContent(e.target.value),
                                                style: moodFeatureEnabled ? {
                                                    background: 'rgba(255, 255, 255, 0.08)',
                                                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}10`,
                                                    borderRadius: '16px',
                                                    backdropFilter: 'blur(6px)',
                                                    color: '#2d3748',
                                                    padding: '1rem',
                                                    fontSize: '0.95rem'
                                                } : {}
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 756,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyButtons,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyCancel,
                                                        onClick: ()=>{
                                                            setReplyingTo(null);
                                                            setReplyContent('');
                                                        },
                                                        style: moodFeatureEnabled ? {
                                                            background: 'rgba(255, 255, 255, 0.1)',
                                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}15`,
                                                            borderRadius: '12px',
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent,
                                                            padding: '0.5rem 1rem',
                                                            transition: 'all 0.3s ease'
                                                        } : {},
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replySubmit,
                                                        disabled: !replyContent.trim() || submittingReply,
                                                        onClick: ()=>handleReplySubmit(commentId),
                                                        style: moodFeatureEnabled ? {
                                                            background: `linear-gradient(135deg, 
                            ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent}, 
                            ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd})`,
                                                            border: 'none',
                                                            borderRadius: '12px',
                                                            color: 'white',
                                                            fontWeight: '600',
                                                            padding: '0.5rem 1rem',
                                                            boxShadow: `0 2px 8px -2px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent}40`,
                                                            transition: 'all 0.3s ease'
                                                        } : {},
                                                        children: submittingReply ? '✨ Posting...' : '💬 Post Reply'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 771,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 741,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, commentId, true, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 581,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 577,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CommentSection.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
};
_s(CommentSection, "dieBYPEKNE8br97SEl2rIT2EMMA=");
_c = CommentSection;
const __TURBOPACK__default__export__ = CommentSection;
var _c;
__turbopack_context__.k.register(_c, "CommentSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/editor/schema.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createEmptyDocument": (()=>createEmptyDocument),
    "parseHTML": (()=>parseHTML),
    "schema": (()=>schema),
    "serializeToHTML": (()=>serializeToHTML)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-model/dist/index.js [app-client] (ecmascript)");
;
// Define all nodes manually including list nodes
const nodes = {
    // Document node - the root
    doc: {
        content: 'block+'
    },
    // Text node - inline text content
    text: {
        group: 'inline'
    },
    // Paragraph node - basic block containing inline content
    paragraph: {
        content: 'inline*',
        group: 'block',
        parseDOM: [
            {
                tag: 'p'
            }
        ],
        toDOM () {
            return [
                'p',
                0
            ];
        }
    },
    // Heading node with levels 1-6
    heading: {
        attrs: {
            level: {
                default: 1
            }
        },
        content: 'inline*',
        group: 'block',
        defining: true,
        parseDOM: [
            {
                tag: 'h1',
                attrs: {
                    level: 1
                }
            },
            {
                tag: 'h2',
                attrs: {
                    level: 2
                }
            },
            {
                tag: 'h3',
                attrs: {
                    level: 3
                }
            },
            {
                tag: 'h4',
                attrs: {
                    level: 4
                }
            },
            {
                tag: 'h5',
                attrs: {
                    level: 5
                }
            },
            {
                tag: 'h6',
                attrs: {
                    level: 6
                }
            }
        ],
        toDOM (node) {
            return [
                `h${node.attrs.level}`,
                0
            ];
        }
    },
    // Hard break node
    hard_break: {
        inline: true,
        group: 'inline',
        selectable: false,
        parseDOM: [
            {
                tag: 'br'
            }
        ],
        toDOM () {
            return [
                'br'
            ];
        }
    },
    // Image node with enhanced attributes
    image: {
        inline: true,
        attrs: {
            src: {},
            alt: {
                default: null
            },
            title: {
                default: null
            },
            width: {
                default: null
            },
            height: {
                default: null
            }
        },
        group: 'inline',
        draggable: true,
        parseDOM: [
            {
                tag: 'img[src]',
                getAttrs (dom) {
                    return {
                        src: dom.getAttribute('src'),
                        title: dom.getAttribute('title'),
                        alt: dom.getAttribute('alt'),
                        width: dom.getAttribute('width'),
                        height: dom.getAttribute('height')
                    };
                }
            }
        ],
        toDOM (node) {
            const { src, alt, title, width, height } = node.attrs;
            const attrs = {
                src
            };
            if (alt != null) attrs.alt = alt;
            if (title != null) attrs.title = title;
            if (width != null) attrs.width = width;
            if (height != null) attrs.height = height;
            return [
                'img',
                attrs
            ];
        }
    },
    // Blockquote node
    blockquote: {
        content: 'block+',
        group: 'block',
        defining: true,
        parseDOM: [
            {
                tag: 'blockquote'
            }
        ],
        toDOM () {
            return [
                'blockquote',
                0
            ];
        }
    },
    // Code block node with language support
    code_block: {
        content: 'text*',
        marks: '',
        group: 'block',
        code: true,
        defining: true,
        attrs: {
            language: {
                default: 'javascript'
            }
        },
        parseDOM: [
            {
                tag: 'pre',
                preserveWhitespace: 'full',
                getAttrs (node) {
                    // First check for data-language attribute on pre element
                    const dataLanguage = node.getAttribute('data-language');
                    if (dataLanguage) {
                        return {
                            language: dataLanguage
                        };
                    }
                    // Then check for language-* class on code element
                    const codeElement = node.querySelector('code');
                    if (codeElement) {
                        const className = codeElement.className || '';
                        const languageMatch = className.match(/language-(\w+)/);
                        if (languageMatch) {
                            return {
                                language: languageMatch[1]
                            };
                        }
                    }
                    // Default to javascript
                    return {
                        language: 'javascript'
                    };
                },
                getContent (node, schema) {
                    // Extract plain text content from the code element, 
                    // ignoring any HTML syntax highlighting spans
                    const codeElement = node.querySelector('code');
                    if (codeElement) {
                        const text = codeElement.textContent || codeElement.innerText || '';
                        return text ? [
                            schema.text(text)
                        ] : [];
                    }
                    return [];
                }
            }
        ],
        toDOM (node) {
            return [
                'pre',
                {
                    'data-language': node.attrs.language
                },
                [
                    'code',
                    {
                        class: `language-${node.attrs.language}`
                    },
                    0
                ]
            ];
        }
    },
    // Horizontal rule
    horizontal_rule: {
        group: 'block',
        parseDOM: [
            {
                tag: 'hr'
            }
        ],
        toDOM () {
            return [
                'hr'
            ];
        }
    },
    // List nodes - manually defined to avoid addListNodes issue
    bullet_list: {
        content: 'list_item+',
        group: 'block',
        parseDOM: [
            {
                tag: 'ul'
            }
        ],
        toDOM () {
            return [
                'ul',
                0
            ];
        }
    },
    ordered_list: {
        content: 'list_item+',
        group: 'block',
        attrs: {
            order: {
                default: 1
            }
        },
        parseDOM: [
            {
                tag: 'ol',
                getAttrs (dom) {
                    return {
                        order: dom.hasAttribute('start') ? +dom.getAttribute('start') : 1
                    };
                }
            }
        ],
        toDOM (node) {
            return node.attrs.order == 1 ? [
                'ol',
                0
            ] : [
                'ol',
                {
                    start: node.attrs.order
                },
                0
            ];
        }
    },
    list_item: {
        content: 'paragraph block*',
        parseDOM: [
            {
                tag: 'li'
            }
        ],
        toDOM () {
            return [
                'li',
                0
            ];
        },
        defining: true
    }
};
// Define marks
const marks = {
    // Strong mark (bold)
    strong: {
        parseDOM: [
            {
                tag: 'strong'
            },
            {
                tag: 'b',
                getAttrs: (node)=>node.style.fontWeight != 'normal' && null
            },
            {
                style: 'font-weight',
                getAttrs: (value)=>/^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
            }
        ],
        toDOM () {
            return [
                'strong',
                0
            ];
        }
    },
    // Emphasis mark (italic)
    em: {
        parseDOM: [
            {
                tag: 'i'
            },
            {
                tag: 'em'
            },
            {
                style: 'font-style=italic'
            }
        ],
        toDOM () {
            return [
                'em',
                0
            ];
        }
    },
    // Code mark (inline code)
    code: {
        parseDOM: [
            {
                tag: 'code'
            }
        ],
        toDOM () {
            return [
                'code',
                0
            ];
        }
    },
    // Link mark with enhanced attributes
    link: {
        attrs: {
            href: {},
            title: {
                default: null
            },
            target: {
                default: null
            }
        },
        inclusive: false,
        parseDOM: [
            {
                tag: 'a[href]',
                getAttrs (dom) {
                    return {
                        href: dom.getAttribute('href'),
                        title: dom.getAttribute('title'),
                        target: dom.getAttribute('target')
                    };
                }
            }
        ],
        toDOM (node) {
            const { href, title, target } = node.attrs;
            const attrs = {
                href
            };
            if (title != null) attrs.title = title;
            if (target != null) attrs.target = target;
            return [
                'a',
                attrs,
                0
            ];
        }
    }
};
const schema = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Schema"]({
    nodes,
    marks
});
function createEmptyDocument() {
    return schema.node('doc', null, [
        schema.node('paragraph')
    ]);
}
function parseHTML(html) {
    if (!html || html.trim() === '') {
        return createEmptyDocument();
    }
    const div = document.createElement('div');
    div.innerHTML = html;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMParser"].fromSchema(schema).parse(div);
}
function serializeToHTML(doc) {
    const div = document.createElement('div');
    div.appendChild(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMSerializer"].fromSchema(schema).serializeFragment(doc.content));
    return div.innerHTML;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/editor/commandHelpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "withListLift": (()=>withListLift)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-schema-list/dist/index.js [app-client] (ecmascript)");
;
const withListLift = (cmd, listItemNode)=>{
    return (state, dispatch, view)=>{
        let lifted = false;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(listItemNode)(state, dispatch, view)) {
            // state has changed, pull the fresh state from the view
            state = view.state;
            lifted = true;
        }
        const ok = cmd(state, dispatch, view);
        return lifted || ok;
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/editor/commands.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "headingCmd": (()=>headingCmd),
    "paragraphCmd": (()=>paragraphCmd),
    "toggleBlockquote": (()=>toggleBlockquote)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-schema-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commandHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/commandHelpers.js [app-client] (ecmascript)");
;
;
;
;
const { heading, paragraph, list_item, blockquote } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes;
const headingCmd = (level)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commandHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withListLift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBlockType"])(heading, {
        level
    }), list_item);
const paragraphCmd = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commandHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withListLift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBlockType"])(paragraph), list_item);
const toggleBlockquote = (state, dispatch, view)=>{
    // 1. If we're *inside* a blockquote anywhere in the selection, lift it out
    const { from, to } = state.selection;
    let inQuote = false;
    state.doc.nodesBetween(from, to, (node)=>{
        if (node.type === blockquote) {
            inQuote = true;
            return false; // early exit
        }
        return true;
    });
    if (inQuote) {
        // also lift once if we're inside a list → blockquote → paragraph
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(list_item)(state, dispatch)) return true;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])(state, dispatch);
    }
    // 2. Otherwise wrap the selection in a new blockquote
    //    (lift out of list first so the quote sits at top level)
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(list_item)(state, dispatch)) {
        // state has changed; fetch the fresh state from the view
        state = view.state;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapIn"])(blockquote)(state, dispatch, view);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/editor/exitHeadingPlugin.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "exitHeadingPlugin": (()=>exitHeadingPlugin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/schema.js [app-client] (ecmascript)");
;
;
;
const exitHeadingPlugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
    key: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PluginKey"]('exitHeading'),
    props: {
        handleKeyDown (view, event) {
            if (event.key !== 'Enter' || event.shiftKey) return false;
            const { state, dispatch } = view;
            const { $from, empty } = state.selection;
            const { heading, paragraph } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes;
            // Only trigger if the cursor is at the *end* of a heading
            if (empty && $from.parent.type === heading && $from.parentOffset === $from.parent.content.size) {
                event.preventDefault(); // stop default split behaviour
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBlockType"])(paragraph)(state, dispatch, view);
            }
            return false; // let other handlers run
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/editor/syntaxHighlighting.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "syntaxHighlightingPlugin": (()=>syntaxHighlightingPlugin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/prism.js [app-client] (ecmascript)");
// Import language support
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$javascript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-javascript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$typescript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-typescript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$jsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-jsx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$tsx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-tsx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$css$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-css.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$scss$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-scss.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$python$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-python.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$java$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-java.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-c.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$cpp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-cpp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$csharp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-csharp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$php$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-php.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$ruby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-ruby.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$go$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-go.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$rust$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-rust.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$sql$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-sql.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$bash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-bash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$yaml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-yaml.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$markdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-markdown.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function createCodeBlockDecorations(doc, schema) {
    const decorations = [];
    doc.descendants((node, pos)=>{
        if (node.type === schema.nodes.code_block) {
            const language = node.attrs.language || 'javascript';
            const text = node.textContent;
            if (text && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].languages[language]) {
                try {
                    // Use Prism to tokenize the code
                    const tokens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tokenize(text, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].languages[language]);
                    let from = pos + 1; // Start after the opening tag
                    let offset = 0;
                    function processTokens(tokens) {
                        tokens.forEach((token)=>{
                            if (typeof token === 'string') {
                                offset += token.length;
                            } else if (typeof token === 'object' && token.type && token.content) {
                                let tokenContent = token.content;
                                let tokenLength = 0;
                                // Handle nested tokens
                                if (Array.isArray(tokenContent)) {
                                    // For complex tokens with nested content, flatten to string
                                    tokenContent = token.content.map((t)=>typeof t === 'string' ? t : t.content || '').join('');
                                    tokenLength = tokenContent.length;
                                } else if (typeof tokenContent === 'string') {
                                    tokenLength = tokenContent.length;
                                } else {
                                    tokenLength = String(tokenContent).length;
                                }
                                if (tokenLength > 0) {
                                    const tokenStart = from + offset;
                                    const tokenEnd = tokenStart + tokenLength;
                                    // Create decoration for this token
                                    decorations.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"].inline(tokenStart, tokenEnd, {
                                        class: `token ${token.type}`,
                                        'data-token-type': token.type
                                    }));
                                }
                                offset += tokenLength;
                            }
                        });
                    }
                    processTokens(tokens);
                } catch (error) {
                    console.warn('Syntax highlighting failed for language:', language, error);
                }
            }
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecorationSet"].create(doc, decorations);
}
function syntaxHighlightingPlugin(schema) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plugin"]({
        key: 'syntaxHighlighting',
        state: {
            init (_, { doc }) {
                return createCodeBlockDecorations(doc, schema);
            },
            apply (transaction, oldState) {
                if (transaction.docChanged) {
                    return createCodeBlockDecorations(transaction.doc, schema);
                }
                return oldState.map(transaction.mapping, transaction.doc);
            }
        },
        props: {
            decorations (state) {
                return this.getState(state);
            }
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/editor/plugins.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildInputRulesPlugin": (()=>buildInputRulesPlugin),
    "buildKeymap": (()=>buildKeymap),
    "createPlugins": (()=>createPlugins)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-history/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-keymap/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-schema-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-inputrules/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-dropcursor/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-gapcursor/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$exitHeadingPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/exitHeadingPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$syntaxHighlighting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/syntaxHighlighting.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
// Create input rules for automatic formatting
function buildInputRulesPlugin() {
    const rules = [];
    // 1) Smart text rules - only ellipsis to avoid conflicts
    rules.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ellipsis"]);
    // 2) Bullet list: typing "- " at start of line
    const bulletRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^([-+*])\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list, (match)=>null, (match, node)=>({
            tight: true
        }));
    rules.push(bulletRule);
    // 3) Ordered list: typing "1. " at start of line
    const orderedRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^(\d+)\.\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list, (match)=>({
            order: +match[1]
        }), (match, node)=>({
            tight: true
        }));
    rules.push(orderedRule);
    // 4) Headings: typing "#" to "######" followed by space
    const headingRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])(/^(#{1,6})\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, (match)=>({
            level: match[1].length
        }));
    rules.push(headingRule);
    // 5) Blockquote: typing "> " at start of line
    const blockquoteRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^>\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.blockquote);
    rules.push(blockquoteRule);
    // 6) Code block: typing "```" or "```javascript" at start of line
    const codeRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])(/^```([a-zA-Z0-9]*)?$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.code_block, (match)=>({
            language: match[1] || 'javascript'
        }));
    rules.push(codeRule);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputRules"])({
        rules
    });
}
// Build keymap with common shortcuts
function buildKeymap() {
    const keys = {
        // Text formatting shortcuts
        'Mod-b': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.strong),
        'Mod-i': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.em),
        // Block type shortcuts - now using selection-aware commands
        'Mod-0': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paragraphCmd"])(),
        'Mod-Shift-1': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(1),
        'Mod-Shift-2': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(2),
        'Mod-Shift-3': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(3),
        'Mod-Shift-4': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(4),
        'Mod-Shift-5': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(5),
        'Mod-Shift-6': (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(6),
        'Mod->': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleBlockquote"],
        'Shift-Ctrl->': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleBlockquote"],
        // List shortcuts
        'Shift-Ctrl-8': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list),
        'Shift-Ctrl-9': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list),
        // Enhanced list item navigation - only for list items
        'Enter': (state, dispatch, view)=>{
            const { $from, empty } = state.selection;
            // Handle Enter in list items
            if ($from.parent.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item)(state, dispatch);
            }
            // For all other cases, return false to let baseKeymap handle it
            return false;
        },
        'Mod-[': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
        'Mod-]': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinkListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
        // Only handle backspace for empty list items
        'Backspace': (state, dispatch, view)=>{
            const { $from, empty } = state.selection;
            if (empty && $from.parent.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item && $from.parentOffset === 0 && $from.parent.content.size === 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item)(state, dispatch);
            }
            return false; // Let baseKeymap handle normal backspace
        },
        // History
        'Mod-z': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undo"],
        'Mod-y': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redo"],
        'Shift-Mod-z': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redo"]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keymap"])(keys);
}
function createPlugins() {
    const inputRulesPlugin = buildInputRulesPlugin();
    const historyPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"])();
    const baseKeymapPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keymap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseKeymap"]); // Essential for basic editor functionality
    const customKeymapPlugin = buildKeymap();
    const dropCursorPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropCursor"])();
    const gapCursorPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gapCursor"])();
    const allPlugins = [
        // Input rules MUST come before keymap for auto-formatting to work
        inputRulesPlugin,
        historyPlugin,
        // Base keymap MUST come first to handle basic interactions
        baseKeymapPlugin,
        // Exit heading plugin must come before custom keymap
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$exitHeadingPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exitHeadingPlugin"],
        // Custom keymap comes after base keymap
        customKeymapPlugin,
        dropCursorPlugin,
        gapCursorPlugin,
        // Syntax highlighting for code blocks
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$syntaxHighlighting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syntaxHighlightingPlugin"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"])
    ];
    return allPlugins;
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/Editor.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "ProseMirror": "Editor-module__x7ssIG__ProseMirror",
  "active": "Editor-module__x7ssIG__active",
  "divider": "Editor-module__x7ssIG__divider",
  "editor": "Editor-module__x7ssIG__editor",
  "editorContainer": "Editor-module__x7ssIG__editorContainer",
  "editorContent": "Editor-module__x7ssIG__editorContent",
  "formatGroup": "Editor-module__x7ssIG__formatGroup",
  "headingIcon": "Editor-module__x7ssIG__headingIcon",
  "loading": "Editor-module__x7ssIG__loading",
  "loadingSpinner": "Editor-module__x7ssIG__loadingSpinner",
  "modernToolbar": "Editor-module__x7ssIG__modernToolbar",
  "prosemirrorEditor": "Editor-module__x7ssIG__prosemirrorEditor",
  "slideInFromTop": "Editor-module__x7ssIG__slideInFromTop",
  "spin": "Editor-module__x7ssIG__spin",
  "toolBtn": "Editor-module__x7ssIG__toolBtn",
  "toolbarContainer": "Editor-module__x7ssIG__toolbarContainer",
});
}}),
"[project]/src/components/Editor.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-view/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-commands/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-schema-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-history/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-keymap/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-dropcursor/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-gapcursor/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$plugins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/plugins.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/editor/commands.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/Editor.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * ProseMirror-based Rich Text Editor
 * 
 * A modern, extensible editor built with ProseMirror
 * 
 * Props:
 * - articleId: string - Unique identifier for the article
 * - initialContent?: string - JSON string or HTML initial content
 * - onChange?: function - Callback when content changes (content: string, json: any) => void
 * - placeholder?: string - Placeholder text for empty editor
 * - className?: string - Additional CSS classes
 */ const Editor = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s(({ articleId, initialContent = '', onChange, placeholder = 'Tell your story...', className = '' }, ref)=>{
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onChange); // Store onChange in ref to avoid re-renders
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update onChange ref when it changes
    onChangeRef.current = onChange;
    // Method to insert text at cursor position
    const insertTextAtCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[insertTextAtCursor]": (text)=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            const { selection } = state;
            // Create a text node with the new content
            const textNode = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].text(text);
            // Create transaction to insert text at current position
            const transaction = state.tr.replaceSelectionWith(textNode);
            // Apply the transaction
            dispatch(transaction);
            // Focus the editor
            viewRef.current.focus();
        }
    }["Editor.useCallback[insertTextAtCursor]"], []);
    // Expose method to parent component
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useImperativeHandle(ref, {
        "Editor.useImperativeHandle": ()=>({
                insertText: insertTextAtCursor,
                focus: ({
                    "Editor.useImperativeHandle": ()=>viewRef.current?.focus()
                })["Editor.useImperativeHandle"]
            })
    }["Editor.useImperativeHandle"], [
        insertTextAtCursor
    ]);
    // Initialize ProseMirror editor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            // Guard against SSR - ProseMirror needs browser environment
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            if (!editorRef.current || viewRef.current) {
                return;
            }
            try {
                // Create document with initial content if provided
                let initialDoc;
                if (initialContent && initialContent.trim()) {
                    console.log('Editor: Loading initial content, length:', initialContent.length);
                    try {
                        initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseHTML"])(initialContent);
                        console.log('Editor: Successfully parsed HTML content');
                    } catch (parseError) {
                        console.error('Editor: Failed to parse HTML content:', parseError);
                        initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyDocument"])();
                    }
                } else {
                    console.log('Editor: No initial content, creating empty document');
                    initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyDocument"])();
                }
                // Debug: console.log('Created initial document:', initialDoc.toJSON());
                // Add back essential plugins gradually
                const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"].create({
                    doc: initialDoc,
                    plugins: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keymap"])({
                            // Custom shortcuts FIRST (higher priority)
                            'Mod-b': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.strong),
                            'Mod-i': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.em),
                            'Mod-z': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undo"],
                            'Mod-y': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redo"],
                            // Auto-formatting shortcuts
                            'Enter': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
                            'Mod-[': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
                            'Mod-]': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinkListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
                            'Space': {
                                "Editor.useEffect.state": (state, dispatch)=>{
                                    const { $from } = state.selection;
                                    console.log("🕵️‍♂️ Space handler triggered. beforeCursor:", $from.parent.textContent.slice(0, $from.parentOffset));
                                    if ($from.parent.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph) {
                                        const beforeCursor = $from.parent.textContent.slice(0, $from.parentOffset);
                                        // Auto-heading: ## + space = H2, ### + space = H3
                                        const headingMatch = beforeCursor.match(/^(#{1,6})$/);
                                        if (headingMatch) {
                                            const level = headingMatch[1].length;
                                            const tr = state.tr.delete($from.start(), $from.pos).setBlockType($from.start(), $from.start(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, {
                                                level
                                            });
                                            dispatch(tr);
                                            return true;
                                        }
                                        // Auto-bold: **text** + space = bold
                                        const boldMatch = beforeCursor.match(/\*\*([^*]+)\*\*$/);
                                        if (boldMatch) {
                                            const start = $from.pos - boldMatch[0].length;
                                            const tr = state.tr.delete(start, $from.pos).insertText(boldMatch[1] + ' ', start).addMark(start, start + boldMatch[1].length, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.strong);
                                            dispatch(tr);
                                            return true;
                                        }
                                        // Auto-italic: *text* + space = italic
                                        const italicMatch = beforeCursor.match(/(?<!\*)\*([^*]+)\*$/);
                                        if (italicMatch) {
                                            const start = $from.pos - italicMatch[0].length;
                                            const tr = state.tr.delete(start, $from.pos).insertText(italicMatch[1] + ' ', start).addMark(start, start + italicMatch[1].length, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.em);
                                            dispatch(tr);
                                            return true;
                                        }
                                        // Auto-code: `text` + space = inline code
                                        const codeMatch = beforeCursor.match(/`([^`]+)`$/);
                                        if (codeMatch) {
                                            const start = $from.pos - codeMatch[0].length;
                                            const tr = state.tr.delete(start, $from.pos).insertText(codeMatch[1] + ' ', start).addMark(start, start + codeMatch[1].length, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.code);
                                            dispatch(tr);
                                            return true;
                                        }
                                        // Auto-bullet list: - + space or * + space = bullet list
                                        const bulletMatch = beforeCursor.match(/^[-*]$/);
                                        if (bulletMatch) {
                                            console.log('Bullet list match:', bulletMatch[0]);
                                            try {
                                                // Create a simple list item with empty paragraph
                                                const listItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph.create());
                                                const bulletList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list.create(null, listItem);
                                                // Delete exactly the dash/asterisk character
                                                const dashPos = $from.pos - 1; // Position of the dash
                                                let tr = state.tr.delete(dashPos, $from.pos) // Remove exactly the - or *
                                                .replaceWith(dashPos, dashPos, bulletList);
                                                // Position cursor inside list item (after the transaction is built)
                                                tr = tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(tr.doc, dashPos + 2));
                                                dispatch(tr);
                                                console.log('Auto bullet list creation: success');
                                                return true;
                                            } catch (error) {
                                                console.log('Auto bullet list creation failed:', error);
                                            }
                                        }
                                        // Auto-ordered list: 1. + space = ordered list
                                        const orderedMatch = beforeCursor.match(/^1\.$/);
                                        if (orderedMatch) {
                                            console.log('Ordered list match:', orderedMatch[0]);
                                            try {
                                                // Create a simple list item with empty paragraph
                                                const listItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph.create());
                                                const orderedList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list.create(null, listItem);
                                                // Delete exactly the "1." characters
                                                const numberedPos = $from.pos - 2; // Position of the "1."
                                                let tr = state.tr.delete(numberedPos, $from.pos) // Remove exactly the 1.
                                                .replaceWith(numberedPos, numberedPos, orderedList);
                                                // Position cursor inside list item (after the transaction is built)
                                                tr = tr.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextSelection"].create(tr.doc, numberedPos + 2));
                                                dispatch(tr);
                                                console.log('Auto ordered list creation: success');
                                                return true;
                                            } catch (error) {
                                                console.log('Auto ordered list creation failed:', error);
                                            }
                                        }
                                    }
                                    // Default space behavior
                                    return false;
                                }
                            }["Editor.useEffect.state"]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keymap"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseKeymap"]),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropCursor"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gapCursor"])()
                    ]
                });
                // Add back minimal transaction handling
                const view = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"](editorRef.current, {
                    state,
                    editable: {
                        "Editor.useEffect": ()=>true
                    }["Editor.useEffect"],
                    dispatchTransaction: {
                        "Editor.useEffect": (transaction)=>{
                            // Apply transaction normally
                            const newState = view.state.apply(transaction);
                            view.updateState(newState);
                            // Call onChange only when content actually changes
                            if (transaction.docChanged && onChangeRef.current) {
                                const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeToHTML"])(newState.doc);
                                const json = newState.doc.toJSON();
                                onChangeRef.current(html, json);
                            }
                        }
                    }["Editor.useEffect"],
                    attributes: {
                        'data-placeholder': placeholder || 'Tell your story...'
                    }
                });
                viewRef.current = view;
                setIsReady(true);
                // Focus the editor after it's ready
                setTimeout({
                    "Editor.useEffect": ()=>{
                        if (view && !view.isDestroyed) {
                            view.focus();
                        }
                    }
                }["Editor.useEffect"], 100);
            } catch (error) {
                console.error('Error initializing editor:', error);
                setIsReady(true);
            }
            // Cleanup function
            return ({
                "Editor.useEffect": ()=>{
                    if (viewRef.current) {
                        viewRef.current.destroy();
                        viewRef.current = null;
                    }
                }
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], []); // Only initialize once
    // Separate effect to handle initialContent changes without destroying editor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            if (!viewRef.current || !isReady || !initialContent) return;
            console.log('Editor: Updating content without reinitializing, length:', initialContent.length);
            try {
                const newDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseHTML"])(initialContent);
                const currentContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeToHTML"])(viewRef.current.state.doc);
                // Only update if content is actually different
                if (initialContent !== currentContent) {
                    const transaction = viewRef.current.state.tr.replaceWith(0, viewRef.current.state.doc.content.size, newDoc.content);
                    viewRef.current.dispatch(transaction);
                    console.log('Editor: Content updated successfully');
                }
            } catch (error) {
                console.error('Editor: Failed to update content:', error);
            }
        }
    }["Editor.useEffect"], [
        initialContent,
        isReady
    ]);
    // Toolbar action handlers - properly implemented
    const toggleBold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleBold]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.strong);
            if (command(state, dispatch)) {
                viewRef.current.focus();
            }
        }
    }["Editor.useCallback[toggleBold]"], []);
    const toggleItalic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleItalic]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.em);
            if (command(state, dispatch)) {
                viewRef.current.focus();
            }
        }
    }["Editor.useCallback[toggleItalic]"], []);
    const setHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setHeading]": (level)=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(level);
            if (command(state, dispatch, viewRef.current)) {
                viewRef.current.focus();
            }
        }
    }["Editor.useCallback[setHeading]"], []);
    const setParagraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setParagraph]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paragraphCmd"])();
            if (command(state, dispatch, viewRef.current)) {
                viewRef.current.focus();
            }
        }
    }["Editor.useCallback[setParagraph]"], []);
    const setBlockquote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setBlockquote]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            const command = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleBlockquote"];
            if (command(state, dispatch, viewRef.current)) {
                viewRef.current.focus();
            }
        }
    }["Editor.useCallback[setBlockquote]"], []);
    const setCodeBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setCodeBlock]": ()=>{
            if (!viewRef.current) return;
            // Ask user for language
            const language = prompt('Enter programming language (e.g., javascript, python, css):', 'javascript');
            if (!language) return;
            const { state, dispatch } = viewRef.current;
            const { from, to } = state.selection;
            // Create code block with language attribute
            const codeBlock = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.code_block.create({
                language: language.toLowerCase()
            });
            const transaction = state.tr.replaceRangeWith(from, to, codeBlock);
            if (dispatch) {
                dispatch(transaction);
                viewRef.current.focus();
            }
        }
    }["Editor.useCallback[setCodeBlock]"], []);
    const toggleBulletList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleBulletList]": ()=>{
            if (!viewRef.current) return;
            console.log('Bullet list button clicked');
            const { state, dispatch } = viewRef.current;
            const { $from, $to } = state.selection;
            try {
                // Try simple list creation approach
                const listItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph.create(null, $from.parent.content));
                const bulletList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list.create(null, listItem);
                const tr = state.tr.replaceWith($from.start(), $to.end(), bulletList);
                dispatch(tr);
                console.log('Manual bullet list creation: success');
                viewRef.current.focus();
            } catch (error) {
                console.log('Manual bullet list creation failed:', error);
                // Fallback to wrapInList
                const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list);
                const result = command(state, dispatch);
                console.log('wrapInList fallback result:', result);
                if (result) viewRef.current.focus();
            }
        }
    }["Editor.useCallback[toggleBulletList]"], []);
    const toggleOrderedList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleOrderedList]": ()=>{
            if (!viewRef.current) return;
            console.log('Ordered list button clicked');
            const { state, dispatch } = viewRef.current;
            const { $from, $to } = state.selection;
            try {
                // Try simple list creation approach
                const listItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph.create(null, $from.parent.content));
                const orderedList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list.create(null, listItem);
                const tr = state.tr.replaceWith($from.start(), $to.end(), orderedList);
                dispatch(tr);
                console.log('Manual ordered list creation: success');
                viewRef.current.focus();
            } catch (error) {
                console.log('Manual ordered list creation failed:', error);
                // Fallback to wrapInList
                const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list);
                const result = command(state, dispatch);
                console.log('wrapInList fallback result:', result);
                if (result) viewRef.current.focus();
            }
        }
    }["Editor.useCallback[toggleOrderedList]"], []);
    const insertImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[insertImage]": ()=>{
            const url = prompt('Enter image URL:');
            if (url && viewRef.current) {
                const { state, dispatch } = viewRef.current;
                const imageNode = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.image.create({
                    src: url,
                    alt: ''
                });
                const transaction = state.tr.replaceSelectionWith(imageNode);
                dispatch(transaction);
                viewRef.current.focus();
            }
        }
    }["Editor.useCallback[insertImage]"], []);
    const undoCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[undoCommand]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undo"])(state, dispatch);
            viewRef.current.focus();
        }
    }["Editor.useCallback[undoCommand]"], []);
    const redoCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[redoCommand]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redo"])(state, dispatch);
            viewRef.current.focus();
        }
    }["Editor.useCallback[redoCommand]"], []);
    // Check if a mark or node is active (range-aware for multi-block selections)
    const isMarkActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[isMarkActive]": (markType)=>{
            if (!viewRef.current) return false;
            const { from, $from, to, empty } = viewRef.current.state.selection;
            if (empty) {
                return markType.isInSet(viewRef.current.state.storedMarks || $from.marks());
            }
            return viewRef.current.state.doc.rangeHasMark(from, to, markType);
        }
    }["Editor.useCallback[isMarkActive]"], []);
    const isBlockActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[isBlockActive]": (nodeType, attrs = {})=>{
            if (!viewRef.current) return false;
            const { from, to } = viewRef.current.state.selection;
            let allMatch = true;
            viewRef.current.state.doc.nodesBetween(from, to, {
                "Editor.useCallback[isBlockActive]": (node)=>{
                    if (node.isTextblock && !node.hasMarkup(nodeType, attrs)) {
                        allMatch = false;
                        return false; // early exit
                    }
                    return true;
                }
            }["Editor.useCallback[isBlockActive]"]);
            return allMatch;
        }
    }["Editor.useCallback[isBlockActive]"], []);
    const isInBlockquote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[isInBlockquote]": ()=>{
            if (!viewRef.current) return false;
            const { from, to } = viewRef.current.state.selection;
            let inQuote = false;
            viewRef.current.state.doc.nodesBetween(from, to, {
                "Editor.useCallback[isInBlockquote]": (node)=>{
                    if (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.blockquote) {
                        inQuote = true;
                        return false; // early exit
                    }
                    return true;
                }
            }["Editor.useCallback[isInBlockquote]"]);
            return inQuote;
        }
    }["Editor.useCallback[isInBlockquote]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editor,
        style: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px'
        },
        children: [
            isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modernToolbar,
                style: {
                    opacity: 1,
                    visibility: 'visible',
                    position: 'relative',
                    top: 'auto',
                    left: 'auto',
                    transform: 'none',
                    marginBottom: '20px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formatGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn} ${isMarkActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.strong) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: toggleBold,
                                    title: "Bold (⌘B)",
                                    "aria-label": "Bold",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M13.5 15.5H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM10 6.5h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v-2zm5.6 4.5c.75-.9 1.2-2.05 1.2-3.3 0-2.76-2.24-5-5-5H6.5C5.67 2.7 5 3.37 5 4.2v15.6c0 .83.67 1.5 1.5 1.5h8.5c3.31 0 6-2.69 6-6 0-2.5-1.49-4.65-3.4-5.3z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 509,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 508,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 502,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn} ${isMarkActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.em) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: toggleItalic,
                                    title: "Italic (⌘I)",
                                    "aria-label": "Italic",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 519,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 518,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 512,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 501,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 524,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formatGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, {
                                        level: 1
                                    }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: ()=>setHeading(1),
                                    title: "Large Heading (⌘⇧1)",
                                    "aria-label": "Heading 1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingIcon,
                                        children: "H1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 534,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 528,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, {
                                        level: 2
                                    }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: ()=>setHeading(2),
                                    title: "Medium Heading (⌘⇧2)",
                                    "aria-label": "Heading 2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingIcon,
                                        children: "H2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 542,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 536,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, {
                                        level: 3
                                    }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: ()=>setHeading(3),
                                    title: "Small Heading (⌘⇧3)",
                                    "aria-label": "Heading 3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingIcon,
                                        children: "H3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 550,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 544,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 527,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 554,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formatGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn,
                                    onClick: toggleBulletList,
                                    title: "Bullet List",
                                    "aria-label": "Bullet list",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 565,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 564,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 558,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn,
                                    onClick: toggleOrderedList,
                                    title: "Numbered List",
                                    "aria-label": "Numbered list",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 575,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 574,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 568,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn} ${isInBlockquote() ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: setBlockquote,
                                    title: "Quote (⌘>)",
                                    "aria-label": "Quote",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 585,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 584,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 578,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 557,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 590,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formatGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn,
                                    onClick: insertImage,
                                    title: "Add Image",
                                    "aria-label": "Insert image",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 601,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 600,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 594,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.code_block) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                    onClick: setCodeBlock,
                                    title: "Code Block",
                                    "aria-label": "Code block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 611,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 610,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 604,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 593,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 616,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formatGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn,
                                    onClick: undoCommand,
                                    title: "Undo (⌘Z)",
                                    "aria-label": "Undo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 627,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 626,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 620,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolBtn,
                                    onClick: redoCommand,
                                    title: "Redo (⌘Y)",
                                    "aria-label": "Redo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Editor.jsx",
                                            lineNumber: 637,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 636,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 630,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 619,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Editor.jsx",
                    lineNumber: 499,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 498,
                columnNumber: 17
            }, this),
            !isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                    }, void 0, false, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 648,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Loading editor..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 649,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 647,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: editorRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prosemirrorEditor,
                "aria-label": "Rich text editor",
                style: {
                    minHeight: '400px',
                    opacity: isReady ? 1 : 0.3
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 654,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Editor.jsx",
        lineNumber: 495,
        columnNumber: 9
    }, this);
}, "o6OudcFfh93t8NJ8xXT2f0xbgog=")), "o6OudcFfh93t8NJ8xXT2f0xbgog=");
_c1 = Editor;
Editor.displayName = 'Editor';
const __TURBOPACK__default__export__ = Editor;
var _c, _c1;
__turbopack_context__.k.register(_c, "Editor$React.forwardRef");
__turbopack_context__.k.register(_c1, "Editor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/reflectionService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_REFLECTION_PROMPTS": (()=>DEFAULT_REFLECTION_PROMPTS),
    "createReflectionJournal": (()=>createReflectionJournal),
    "deleteReflectionResponse": (()=>deleteReflectionResponse),
    "getPromptByIndex": (()=>getPromptByIndex),
    "getRandomReflectionPrompt": (()=>getRandomReflectionPrompt),
    "getReflectionInspiration": (()=>getReflectionInspiration),
    "getReflectionResponses": (()=>getReflectionResponses),
    "getReflectionThemes": (()=>getReflectionThemes),
    "getUserReflectionJournals": (()=>getUserReflectionJournals),
    "saveReflectionResponse": (()=>saveReflectionResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
;
;
const DEFAULT_REFLECTION_PROMPTS = [
    {
        id: 'emotion-1',
        text: 'How does this make you feel?',
        type: 'emotion',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'choice-1',
        text: 'Would you have made the same choice?',
        type: 'choice',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'note-1',
        text: 'Write your own note to the author.',
        type: 'note',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'custom-1',
        text: 'What questions does this raise for you?',
        type: 'custom',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'custom-2',
        text: 'How does this relate to your own experience?',
        type: 'custom',
        triggerPosition: 'paragraph',
        isDefault: true
    }
];
async function saveReflectionResponse(articleId, promptId, promptText, response, position, isPrivate = true) {
    console.log('saveReflectionResponse called with:', {
        articleId,
        promptId,
        promptText,
        response,
        position,
        isPrivate
    });
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    console.log('Current user:', user ? user.uid : 'Not authenticated');
    if (!user) {
        // Save to local storage if user is not authenticated
        console.log('User not authenticated, saving to local storage');
        saveReflectionToLocalStorage(articleId, promptId, promptText, response, position, isPrivate);
        return;
    }
    const responseId = `${user.uid}_${articleId}_${promptId}_${Date.now()}`;
    const reflectionDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'reflectionResponses', responseId);
    const reflectionResponse = {
        id: responseId,
        userId: user.uid,
        articleId,
        promptId,
        promptText,
        response,
        position,
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        isPrivate
    };
    try {
        console.log('Attempting to save to Firestore with ID:', responseId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(reflectionDoc, reflectionResponse);
        console.log('Successfully saved to Firestore');
        // Also save a backup to local storage
        saveReflectionToLocalStorage(articleId, promptId, promptText, response, position, isPrivate);
    } catch (error) {
        console.error('Error saving reflection response:', error);
        // Fallback to local storage
        saveReflectionToLocalStorage(articleId, promptId, promptText, response, position, isPrivate);
    }
}
// Save to local storage for offline functionality
function saveReflectionToLocalStorage(articleId, promptId, promptText, response, position, isPrivate) {
    try {
        const storageKey = `reflection_${articleId}`;
        console.log('Saving to local storage with key:', storageKey);
        const existingData = localStorage.getItem(storageKey);
        const reflections = existingData ? JSON.parse(existingData) : [];
        console.log('Existing reflections:', reflections.length);
        const newReflection = {
            id: `local_${Date.now()}`,
            promptId,
            promptText,
            response,
            position,
            createdAt: new Date().toISOString(),
            isPrivate
        };
        reflections.push(newReflection);
        localStorage.setItem(storageKey, JSON.stringify(reflections));
        console.log('Successfully saved to local storage. Total reflections:', reflections.length);
    } catch (error) {
        console.error('Error saving reflection to local storage:', error);
    }
}
async function getReflectionResponses(articleId) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    // Start with local storage data
    const localReflections = getReflectionsFromLocalStorage(articleId);
    if (!user) {
        return localReflections;
    }
    try {
        const reflectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'reflectionResponses');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(reflectionRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', user.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'asc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const firestoreReflections = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                createdAt: doc.data().createdAt
            }));
        // Merge local and Firestore data, removing duplicates
        const allReflections = [
            ...firestoreReflections,
            ...localReflections
        ];
        const uniqueReflections = allReflections.filter((reflection, index, self)=>index === self.findIndex((r)=>r.promptId === reflection.promptId && r.position === reflection.position));
        return uniqueReflections.sort((a, b)=>a.position - b.position);
    } catch (error) {
        console.error('Error fetching reflection responses:', error);
        return localReflections;
    }
}
// Get reflections from local storage
function getReflectionsFromLocalStorage(articleId) {
    try {
        const storageKey = `reflection_${articleId}`;
        const data = localStorage.getItem(storageKey);
        if (!data) return [];
        const reflections = JSON.parse(data);
        return reflections.map((reflection)=>({
                ...reflection,
                userId: 'local',
                articleId,
                createdAt: new Date(reflection.createdAt)
            }));
    } catch (error) {
        console.error('Error reading reflections from local storage:', error);
        return [];
    }
}
function getRandomReflectionPrompt() {
    const randomIndex = Math.floor(Math.random() * DEFAULT_REFLECTION_PROMPTS.length);
    return DEFAULT_REFLECTION_PROMPTS[randomIndex];
}
function getPromptByIndex(index) {
    return DEFAULT_REFLECTION_PROMPTS[index % DEFAULT_REFLECTION_PROMPTS.length];
}
async function createReflectionJournal(articleId, articleTitle, articleSlug, responses) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    if (!user) return;
    const journalId = `${user.uid}_${articleId}`;
    const journalDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'reflectionJournals', journalId);
    const journalEntry = {
        userId: user.uid,
        articleId,
        articleTitle,
        articleSlug,
        responses,
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
    };
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(journalDoc, journalEntry);
    } catch (error) {
        console.error('Error creating reflection journal:', error);
    }
}
async function getUserReflectionJournals(userId) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    const targetUserId = userId || user?.uid;
    // Get all reflection responses and build journal entries from them
    const journalMap = new Map();
    // Get from Firestore if user is authenticated
    if (user && targetUserId) {
        try {
            const reflectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'reflectionResponses');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(reflectionRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', targetUserId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            querySnapshot.docs.forEach((doc)=>{
                const response = doc.data();
                const articleId = response.articleId;
                if (!journalMap.has(articleId)) {
                    journalMap.set(articleId, {
                        userId: response.userId,
                        articleId: articleId,
                        articleTitle: `Loading...`,
                        articleSlug: articleId,
                        responses: [],
                        createdAt: response.createdAt,
                        updatedAt: response.createdAt
                    });
                }
                const journal = journalMap.get(articleId);
                journal.responses.push(response);
                // Update the updated time to the latest response
                if (response.createdAt > journal.updatedAt) {
                    journal.updatedAt = response.createdAt;
                }
            });
        } catch (error) {
            console.error('Error fetching reflection responses from Firestore:', error);
        }
    }
    // Also get from local storage
    try {
        const localStorageKeys = Object.keys(localStorage).filter((key)=>key.startsWith('reflection_'));
        localStorageKeys.forEach((key)=>{
            const articleId = key.replace('reflection_', '');
            const data = localStorage.getItem(key);
            if (!data) return;
            try {
                const reflections = JSON.parse(data);
                if (!Array.isArray(reflections)) return;
                reflections.forEach((reflection)=>{
                    const response = {
                        id: reflection.id || `local_${Date.now()}`,
                        userId: 'local',
                        articleId: articleId,
                        promptId: reflection.promptId,
                        promptText: reflection.promptText,
                        response: reflection.response,
                        position: reflection.position,
                        createdAt: new Date(reflection.createdAt),
                        isPrivate: reflection.isPrivate
                    };
                    if (!journalMap.has(articleId)) {
                        journalMap.set(articleId, {
                            userId: 'local',
                            articleId: articleId,
                            articleTitle: `Loading...`,
                            articleSlug: articleId,
                            responses: [],
                            createdAt: response.createdAt,
                            updatedAt: response.createdAt
                        });
                    }
                    const journal = journalMap.get(articleId);
                    // Check if this response already exists (avoid duplicates)
                    const exists = journal.responses.some((r)=>r.promptId === response.promptId && r.position === response.position && r.response === response.response);
                    if (!exists) {
                        journal.responses.push(response);
                        if (response.createdAt > journal.updatedAt) {
                            journal.updatedAt = response.createdAt;
                        }
                    }
                });
            } catch (error) {
                console.error('Error parsing local storage reflection data:', error);
            }
        });
    } catch (error) {
        console.error('Error reading from local storage:', error);
    }
    // Convert map to array and fetch article titles
    const journals = Array.from(journalMap.values()).filter((journal)=>journal.responses.length > 0);
    // Fetch article metadata for each journal using Firebase document ID
    await Promise.all(journals.map(async (journal)=>{
        try {
            // Use Firebase getArticleById since the articleId is a Firebase document ID
            const { getArticleById } = await __turbopack_context__.r("[project]/src/firebase/articles.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const firebaseArticle = await getArticleById(journal.articleId);
            if (firebaseArticle) {
                journal.articleTitle = firebaseArticle.title;
                journal.articleSlug = firebaseArticle.slug || journal.articleId; // Update slug if available
                console.log(`Successfully fetched title for ${journal.articleId}: ${firebaseArticle.title}`);
            } else {
                journal.articleTitle = `Article: ${journal.articleId}`;
                console.log(`Article not found for ID: ${journal.articleId}`);
            }
        } catch (error) {
            console.error(`Error fetching article for ${journal.articleId}:`, error);
            journal.articleTitle = `Article: ${journal.articleId}`;
        }
    }));
    // Sort by updated time
    journals.sort((a, b)=>{
        const timeA = a.updatedAt instanceof Date ? a.updatedAt.getTime() : a.updatedAt.toMillis();
        const timeB = b.updatedAt instanceof Date ? b.updatedAt.getTime() : b.updatedAt.toMillis();
        return timeB - timeA;
    });
    return journals;
}
async function deleteReflectionResponse(articleId, reflectionId) {
    console.log('Deleting reflection:', {
        articleId,
        reflectionId
    });
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    let deletedFromFirestore = false;
    let deletedFromLocal = false;
    // Delete from Firestore if user is authenticated
    if (user) {
        try {
            // Try to find and delete from Firestore
            const reflectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'reflectionResponses');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(reflectionRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', user.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('id', '==', reflectionId));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            if (!querySnapshot.empty) {
                const docToDelete = querySnapshot.docs[0];
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(docToDelete.ref);
                console.log('Successfully deleted from Firestore');
                deletedFromFirestore = true;
            }
        } catch (error) {
            console.error('Error deleting from Firestore:', error);
        }
    }
    // Delete from local storage
    try {
        const storageKey = `reflection_${articleId}`;
        const existingData = localStorage.getItem(storageKey);
        if (existingData) {
            const reflections = JSON.parse(existingData);
            const filteredReflections = reflections.filter((r)=>r.id !== reflectionId);
            if (filteredReflections.length !== reflections.length) {
                if (filteredReflections.length === 0) {
                    localStorage.removeItem(storageKey);
                } else {
                    localStorage.setItem(storageKey, JSON.stringify(filteredReflections));
                }
                console.log('Successfully deleted from local storage');
                deletedFromLocal = true;
            }
        }
    } catch (error) {
        console.error('Error deleting from local storage:', error);
    }
    return deletedFromFirestore || deletedFromLocal;
}
async function getReflectionInspiration(userId) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    const targetUserId = userId || user?.uid;
    const inspirations = [];
    const seenResponses = new Set();
    // Get from Firestore if user is authenticated
    if (user && targetUserId) {
        try {
            const reflectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'reflectionResponses');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(reflectionRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', targetUserId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(10) // Get recent reflections
            );
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            // Create a map to get article titles
            const articleTitleMap = new Map();
            for (const doc of querySnapshot.docs){
                const response = doc.data();
                if (response.response && response.response.length > 20) {
                    const normalizedResponse = response.response.toLowerCase().trim();
                    if (!seenResponses.has(normalizedResponse)) {
                        seenResponses.add(normalizedResponse);
                        // Try to get article title if not cached
                        let articleTitle = articleTitleMap.get(response.articleId);
                        if (!articleTitle) {
                            try {
                                const { getArticleById } = await __turbopack_context__.r("[project]/src/firebase/articles.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                                const article = await getArticleById(response.articleId);
                                articleTitle = article?.title || 'Unknown Article';
                                articleTitleMap.set(response.articleId, articleTitle);
                            } catch (error) {
                                articleTitle = 'Unknown Article';
                            }
                        }
                        inspirations.push({
                            response: response.response,
                            articleTitle: articleTitle,
                            promptText: response.promptText
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching inspiration from Firestore:', error);
        }
    }
    // Also get from local storage
    try {
        const localStorageKeys = Object.keys(localStorage).filter((key)=>key.startsWith('reflection_'));
        const localReflections = [];
        localStorageKeys.forEach((key)=>{
            const data = localStorage.getItem(key);
            if (data) {
                try {
                    const reflections = JSON.parse(data);
                    if (Array.isArray(reflections)) {
                        localReflections.push(...reflections);
                    }
                } catch (error) {
                    console.error('Error parsing local storage reflection:', error);
                }
            }
        });
        // Sort by creation date and take recent ones
        localReflections.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 10).forEach((reflection)=>{
            if (reflection.response && reflection.response.length > 20) {
                const normalizedResponse = reflection.response.toLowerCase().trim();
                if (!seenResponses.has(normalizedResponse)) {
                    seenResponses.add(normalizedResponse);
                    inspirations.push({
                        response: reflection.response,
                        articleTitle: 'Local Article',
                        promptText: reflection.promptText
                    });
                }
            }
        });
    } catch (error) {
        console.error('Error reading inspiration from local storage:', error);
    }
    // Shuffle and return up to 5 inspirations
    const shuffled = inspirations.sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, 5);
}
async function getReflectionThemes(userId) {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
    const targetUserId = userId || user?.uid;
    const themes = new Set();
    const prompts = [];
    // Get prompts from Firestore
    if (user && targetUserId) {
        try {
            const reflectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'reflectionResponses');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(reflectionRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', targetUserId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(20));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            querySnapshot.docs.forEach((doc)=>{
                const response = doc.data();
                if (response.promptText) {
                    prompts.push(response.promptText);
                }
            });
        } catch (error) {
            console.error('Error fetching themes from Firestore:', error);
        }
    }
    // Get from local storage
    try {
        const localStorageKeys = Object.keys(localStorage).filter((key)=>key.startsWith('reflection_'));
        localStorageKeys.forEach((key)=>{
            const data = localStorage.getItem(key);
            if (data) {
                try {
                    const reflections = JSON.parse(data);
                    if (Array.isArray(reflections)) {
                        reflections.forEach((reflection)=>{
                            if (reflection.promptText) {
                                prompts.push(reflection.promptText);
                            }
                        });
                    }
                } catch (error) {
                    console.error('Error parsing local storage for themes:', error);
                }
            }
        });
    } catch (error) {
        console.error('Error reading themes from local storage:', error);
    }
    // Extract themes from prompts
    prompts.forEach((prompt)=>{
        const lowerPrompt = prompt.toLowerCase();
        if (lowerPrompt.includes('feel')) themes.add('emotions');
        if (lowerPrompt.includes('choice') || lowerPrompt.includes('decision')) themes.add('decision-making');
        if (lowerPrompt.includes('experience')) themes.add('personal experience');
        if (lowerPrompt.includes('question')) themes.add('questioning');
        if (lowerPrompt.includes('surprise')) themes.add('unexpected insights');
        if (lowerPrompt.includes('perspective') || lowerPrompt.includes('view')) themes.add('perspectives');
        if (lowerPrompt.includes('author')) themes.add('dialogue with authors');
        if (lowerPrompt.includes('relate') || lowerPrompt.includes('connect')) themes.add('connections');
    });
    return Array.from(themes).slice(0, 6);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/InspirationWidget.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "InspirationWidget-module__v4iIya__active",
  "closeButton": "InspirationWidget-module__v4iIya__closeButton",
  "content": "InspirationWidget-module__v4iIya__content",
  "empty": "InspirationWidget-module__v4iIya__empty",
  "footer": "InspirationWidget-module__v4iIya__footer",
  "header": "InspirationWidget-module__v4iIya__header",
  "inspirationButton": "InspirationWidget-module__v4iIya__inspirationButton",
  "inspirationItem": "InspirationWidget-module__v4iIya__inspirationItem",
  "inspirationWidget": "InspirationWidget-module__v4iIya__inspirationWidget",
  "loading": "InspirationWidget-module__v4iIya__loading",
  "refreshButton": "InspirationWidget-module__v4iIya__refreshButton",
  "spin": "InspirationWidget-module__v4iIya__spin",
  "spinner": "InspirationWidget-module__v4iIya__spinner",
  "subtitle": "InspirationWidget-module__v4iIya__subtitle",
  "tab": "InspirationWidget-module__v4iIya__tab",
  "tabs": "InspirationWidget-module__v4iIya__tabs",
  "themeItem": "InspirationWidget-module__v4iIya__themeItem",
  "themePrompt": "InspirationWidget-module__v4iIya__themePrompt",
  "themeTag": "InspirationWidget-module__v4iIya__themeTag",
  "useButton": "InspirationWidget-module__v4iIya__useButton",
});
}}),
"[project]/src/components/InspirationWidget.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reflectionService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reflectionService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/InspirationWidget.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const InspirationWidget = ({ onInsert })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inspirations, setInspirations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [themes, setThemes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('inspirations');
    const loadInspirationData = async ()=>{
        setLoading(true);
        try {
            const [inspirationData, themeData] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reflectionService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReflectionInspiration"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reflectionService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReflectionThemes"])()
            ]);
            setInspirations(inspirationData);
            setThemes(themeData);
        } catch (error) {
            console.error('Error loading inspiration data:', error);
        } finally{
            setLoading(false);
        }
    };
    const handleToggle = ()=>{
        if (!isOpen) {
            loadInspirationData();
        }
        setIsOpen(!isOpen);
    };
    const handleInsert = (text)=>{
        if (onInsert) {
            onInsert(text);
        }
        setIsOpen(false);
    };
    const generateWritingPrompt = (theme)=>{
        const prompts = {
            'emotions': 'Explore a moment when your emotions surprised you...',
            'decision-making': 'Write about a decision that changed your perspective...',
            'personal experience': 'Reflect on an experience that shaped who you are today...',
            'questioning': 'What questions have been on your mind lately?',
            'unexpected insights': 'Share something that recently surprised you...',
            'perspectives': 'How has your viewpoint on something important changed?',
            'dialogue with authors': 'What would you say to an author whose work moved you?',
            'connections': 'Write about connections you\'ve discovered between different ideas...'
        };
        return prompts[theme] || `Write about ${theme}...`;
    };
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleToggle,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inspirationButton,
            title: "Get inspiration from your reflections",
            children: "✨ Inspiration"
        }, void 0, false, {
            fileName: "[project]/src/components/InspirationWidget.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inspirationWidget,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "💡 Your Reflection Insights"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InspirationWidget.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(false),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InspirationWidget.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InspirationWidget.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab} ${activeTab === 'inspirations' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                        onClick: ()=>setActiveTab('inspirations'),
                        children: [
                            "Recent Thoughts (",
                            inspirations.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InspirationWidget.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab} ${activeTab === 'themes' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                        onClick: ()=>setActiveTab('themes'),
                        children: [
                            "Writing Themes (",
                            themes.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InspirationWidget.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InspirationWidget.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/src/components/InspirationWidget.tsx",
                            lineNumber: 104,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading your insights..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/InspirationWidget.tsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InspirationWidget.tsx",
                    lineNumber: 103,
                    columnNumber: 21
                }, this) : activeTab === 'inspirations' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inspirationsList,
                    children: inspirations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "💭 No reflections yet!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 111,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Start reading articles and reflecting to build your inspiration library."
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 112,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InspirationWidget.tsx",
                        lineNumber: 110,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Your past reflections that might spark new ideas:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 116,
                                columnNumber: 33
                            }, this),
                            inspirations.map((inspiration, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inspirationItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                '"',
                                                inspiration.response,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 119,
                                            columnNumber: 41
                                        }, this),
                                        inspiration.articleTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '12px',
                                                color: '#6b7280',
                                                marginTop: '4px'
                                            },
                                            children: [
                                                "From: ",
                                                inspiration.articleTitle
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 121,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const attribution = inspiration.articleTitle ? ` (inspired by "${inspiration.articleTitle}")` : '';
                                                handleInsert(`"${inspiration.response}"${attribution} - This reminds me of...`);
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].useButton,
                                            children: "Use as starting point"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 125,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 118,
                                    columnNumber: 37
                                }, this))
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/InspirationWidget.tsx",
                    lineNumber: 108,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themesList,
                    children: themes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "🎨 No themes identified yet!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 143,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Keep reflecting on articles to discover your writing themes."
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 144,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InspirationWidget.tsx",
                        lineNumber: 142,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Writing prompts based on your reflection patterns:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 148,
                                columnNumber: 33
                            }, this),
                            themes.map((theme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeTag,
                                            children: theme
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 151,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themePrompt,
                                            children: generateWritingPrompt(theme)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 152,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleInsert(generateWritingPrompt(theme)),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].useButton,
                                            children: "Start writing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 153,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 150,
                                    columnNumber: 37
                                }, this))
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/InspirationWidget.tsx",
                    lineNumber: 140,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InspirationWidget.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: loadInspirationData,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].refreshButton,
                    disabled: loading,
                    children: "🔄 Refresh insights"
                }, void 0, false, {
                    fileName: "[project]/src/components/InspirationWidget.tsx",
                    lineNumber: 168,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InspirationWidget.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InspirationWidget.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
};
_s(InspirationWidget, "Aa1mxxunjTU/GuukmqZuzwjBciQ=");
_c = InspirationWidget;
const __TURBOPACK__default__export__ = InspirationWidget;
var _c;
__turbopack_context__.k.register(_c, "InspirationWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/ArticleComposer.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "actionButton": "ArticleComposer-module__UcJHvq__actionButton",
  "actionButtons": "ArticleComposer-module__UcJHvq__actionButtons",
  "articleComposer": "ArticleComposer-module__UcJHvq__articleComposer",
  "composerContent": "ArticleComposer-module__UcJHvq__composerContent",
  "composerHeader": "ArticleComposer-module__UcJHvq__composerHeader",
  "composerLoading": "ArticleComposer-module__UcJHvq__composerLoading",
  "coverImageInput": "ArticleComposer-module__UcJHvq__coverImageInput",
  "coverImagePreview": "ArticleComposer-module__UcJHvq__coverImagePreview",
  "editorContainer": "ArticleComposer-module__UcJHvq__editorContainer",
  "errorMessage": "ArticleComposer-module__UcJHvq__errorMessage",
  "fadeIn": "ArticleComposer-module__UcJHvq__fadeIn",
  "imageUrlInput": "ArticleComposer-module__UcJHvq__imageUrlInput",
  "loadingIndicator": "ArticleComposer-module__UcJHvq__loadingIndicator",
  "logo": "ArticleComposer-module__UcJHvq__logo",
  "logoContainer": "ArticleComposer-module__UcJHvq__logoContainer",
  "publishButton": "ArticleComposer-module__UcJHvq__publishButton",
  "removeTagButton": "ArticleComposer-module__UcJHvq__removeTagButton",
  "savedIndicator": "ArticleComposer-module__UcJHvq__savedIndicator",
  "spin": "ArticleComposer-module__UcJHvq__spin",
  "tag": "ArticleComposer-module__UcJHvq__tag",
  "tagContainer": "ArticleComposer-module__UcJHvq__tagContainer",
  "tagInput": "ArticleComposer-module__UcJHvq__tagInput",
  "titleInput": "ArticleComposer-module__UcJHvq__titleInput",
});
}}),
"[project]/src/components/ArticleComposer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Editor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Editor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InspirationWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticleComposer.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const ArticleComposer = ({ articleId, onUpdateComplete })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [coverImage, setCoverImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isPublishing, setIsPublishing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!articleId);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentTag, setCurrentTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tagInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-resize title textarea as content grows
    const autoResizeTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleComposer.useCallback[autoResizeTitle]": ()=>{
            if (titleRef.current) {
                titleRef.current.style.height = 'auto';
                titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
                // Set focus to title if it's empty when component loads
                if (!title && titleRef.current) {
                    titleRef.current.focus();
                }
            }
        }
    }["ArticleComposer.useCallback[autoResizeTitle]"], [
        title
    ]);
    // Set up authentication listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleComposer.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "ArticleComposer.useEffect.unsubscribe": (user)=>{
                    setUser(user);
                    if (!user) {
                        // Redirect to login if not authenticated
                        router.push('/login?redirect=compose');
                    }
                }
            }["ArticleComposer.useEffect.unsubscribe"]);
            return ({
                "ArticleComposer.useEffect": ()=>unsubscribe()
            })["ArticleComposer.useEffect"];
        }
    }["ArticleComposer.useEffect"], [
        router
    ]);
    // Load article data if in edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleComposer.useEffect": ()=>{
            console.log('ArticleComposer useEffect - articleId:', articleId, 'user:', user?.uid);
            if (articleId && user) {
                const fetchArticle = {
                    "ArticleComposer.useEffect.fetchArticle": async ()=>{
                        try {
                            console.log('Fetching article for editing, ID:', articleId);
                            setIsLoading(true);
                            const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleById"])(articleId);
                            console.log('Fetched article:', article?.title, 'Body length:', article?.body?.length);
                            if (!article) {
                                console.log('Article not found');
                                setError('Article not found');
                                router.push('/');
                                return;
                            }
                            // Verify article ownership
                            if (article.authorId !== user.uid) {
                                console.log('User not authorized to edit this article');
                                setError('You can only edit your own articles');
                                router.push('/');
                                return;
                            }
                            // Set form data
                            console.log('Setting title:', article.title);
                            setTitle(article.title);
                            // Process HTML to extract and clean the content
                            const cleanContent = article.body.replace(/data-[\w-]+="[^"]*"/g, '');
                            console.log('Setting content, length:', cleanContent.length, 'Preview:', cleanContent.substring(0, 100) + '...');
                            setContent(cleanContent);
                            setTags(article.tags || []);
                            setCoverImage(article.coverImage || '');
                            console.log('Article data loaded successfully for editing');
                        } catch (error) {
                            console.error('Error loading article:', error);
                            setError('Failed to load article');
                        } finally{
                            setIsLoading(false);
                        }
                    }
                }["ArticleComposer.useEffect.fetchArticle"];
                fetchArticle();
            } else if (!articleId) {
                console.log('No articleId, starting with empty content');
                // Editor will start with empty content - no need for document model
                setIsLoading(false);
            } else {
                console.log('User not logged in, waiting...');
            }
        }
    }["ArticleComposer.useEffect"], [
        articleId,
        user,
        router
    ]);
    // Auto-resize title when it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleComposer.useEffect": ()=>{
            autoResizeTitle();
        }
    }["ArticleComposer.useEffect"], [
        title,
        autoResizeTitle
    ]);
    // Auto-save draft periodically (every 30 seconds)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleComposer.useEffect": ()=>{
            let timer;
            if (user && title.trim() && content.trim() && !isSaving && !isPublishing) {
                timer = setTimeout({
                    "ArticleComposer.useEffect": ()=>{
                        saveArticle('drafts');
                    }
                }["ArticleComposer.useEffect"], 30000);
            }
            return ({
                "ArticleComposer.useEffect": ()=>{
                    if (timer) clearTimeout(timer);
                }
            })["ArticleComposer.useEffect"];
        }
    }["ArticleComposer.useEffect"], [
        user,
        title,
        content,
        isSaving,
        isPublishing
    ]);
    // Handle title changes
    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
    };
    // Handle editor content changes with debouncing for better performance
    const handleEditorChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleComposer.useCallback[handleEditorChange]": (html, json)=>{
            // Use functional update to avoid dependency on current content
            setContent({
                "ArticleComposer.useCallback[handleEditorChange]": (prevContent)=>{
                    // Only update if content has actually changed
                    if (html !== prevContent) {
                        // Reset saved status when content changes
                        if (isSaved) {
                            setIsSaved(false);
                        }
                        return html;
                    }
                    return prevContent;
                }
            }["ArticleComposer.useCallback[handleEditorChange]"]);
        }
    }["ArticleComposer.useCallback[handleEditorChange]"], [
        isSaved
    ]);
    // Handle tag input
    const handleTagInputChange = (e)=>{
        setCurrentTag(e.target.value);
    };
    // Handle tag input keydown
    const handleTagInputKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        }
    };
    // Add a tag
    const addTag = ()=>{
        const tag = currentTag.trim().toLowerCase();
        if (tag && !tags.includes(tag) && tags.length < 5) {
            setTags([
                ...tags,
                tag
            ]);
            setCurrentTag('');
        }
    };
    // Remove a tag
    const removeTag = (tagToRemove)=>{
        setTags(tags.filter((tag)=>tag !== tagToRemove));
    };
    // Handle cover image input
    const handleCoverImageChange = (e)=>{
        setCoverImage(e.target.value);
    };
    // Handle focus moving from title to editor
    const handleTitleKeyDown = (e)=>{
        // When user presses Enter in the title field, move focus to the editor
        if (e.key === 'Enter') {
            e.preventDefault();
        // Note: The new Editor component will handle its own focus
        // when the user starts typing in the editor area
        }
    };
    // Save article (draft or published)
    const saveArticle = async (status = 'drafts')=>{
        if (!user) {
            setError('You must be logged in to save an article');
            return;
        }
        if (!title.trim()) {
            setError('Title is required');
            return;
        }
        if (!content.trim()) {
            setError('Content is required');
            return;
        }
        try {
            setIsSaving(true);
            setError('');
            // Clean HTML content to avoid any strange formatting
            const cleanContent = content.replace(/data-[\w-]+="[^"]*"/g, '');
            const articleData = {
                title: title.trim(),
                body: cleanContent,
                tags,
                coverImage: coverImage.trim(),
                status
            };
            console.log('Saving article data:', articleData);
            if (articleId) {
                try {
                    // Update existing article
                    const updatedArticle = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateArticle"])(articleId, articleData);
                    console.log('Article updated successfully:', updatedArticle?.title);
                    // Show saved indicator
                    setIsSaved(true);
                    // Wait a moment for Firebase to fully process the update
                    await new Promise((resolve)=>setTimeout(resolve, 500));
                    // Get the updated article with fresh data
                    const updatedArticleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleById"])(articleId);
                    console.log('Fetched updated article data:', updatedArticleData?.title);
                    // Call the callback if provided, pass the updated article data
                    if (onUpdateComplete) {
                        console.log('Calling onUpdateComplete callback instead of navigating');
                        onUpdateComplete(updatedArticleData);
                    } else {
                        // Only navigate if no callback is provided (standalone editor usage)
                        console.log('No callback provided, navigating to article page');
                        setTimeout(()=>{
                            window.location.href = `/articles/${articleId}/view?updated=true&time=${Date.now()}`;
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Error updating article:', error);
                    setError('Failed to update article. Please try again.');
                    setIsSaved(false);
                }
            } else {
                // Create new article
                const newArticle = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createArticle"])(articleData);
                if (status === 'published') {
                    // Redirect to the new article page
                    router.push(`/articles/${newArticle.id}`);
                } else {
                    // Redirect to dashboard
                    router.push(`/dashboard`);
                }
            }
        } catch (error) {
            console.error('Error saving article:', error);
            setError('Failed to save article. Please try again.');
        } finally{
            setIsSaving(false);
            setIsPublishing(false);
        }
    };
    // Handle publish button click
    const handlePublish = async ()=>{
        if (!content.trim()) {
            setError('Content is required');
            return;
        }
        setIsPublishing(true);
        await saveArticle('published');
    };
    // Handle save draft button click
    const handleSaveDraft = async ()=>{
        await saveArticle('drafts');
    };
    // Handle inserting text from inspiration widget
    const handleInsertInspiration = (text)=>{
        // Try to insert using the editor ref first
        if (editorRef.current && editorRef.current.insertText) {
            editorRef.current.insertText('\n\n' + text + '\n\n');
        } else {
            // Fallback: append to content with proper spacing
            setContent((prevContent)=>{
                const newContent = prevContent.trim() ? prevContent + '\n\n<p>' + text + '</p>' : '<p>' + text + '</p>';
                return newContent;
            });
        }
        // Focus the editor after insertion
        setTimeout(()=>{
            if (editorRef.current && editorRef.current.focus) {
                editorRef.current.focus();
            }
        }, 100);
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composerLoading,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleComposer.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading article..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleComposer.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ArticleComposer.tsx",
            lineNumber: 330,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleComposer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composerHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                            children: "Journalite"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleComposer.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButtons,
                        children: [
                            isSaved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].savedIndicator,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ArticleComposer.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this),
                                    "Saved"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                onClick: handleSaveDraft,
                                disabled: isSaving || isPublishing,
                                children: "Save draft"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].publishButton,
                                onClick: handlePublish,
                                disabled: isSaving || isPublishing || !title.trim() || !content.trim(),
                                children: articleId ? 'Update' : 'Publish'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composerContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: titleRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleInput,
                        value: title,
                        onChange: handleTitleChange,
                        onKeyDown: handleTitleKeyDown,
                        placeholder: "Title",
                        rows: 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverImageInput,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: coverImage,
                                onChange: handleCoverImageChange,
                                placeholder: "Add a cover image (enter image URL)",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageUrlInput
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverImagePreview,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: coverImage,
                                    alt: "Cover preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleComposer.tsx",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagContainer,
                        children: [
                            tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                    children: [
                                        tag,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeTagButton,
                                            onClick: ()=>removeTag(tag),
                                            "aria-label": `Remove ${tag} tag`,
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ArticleComposer.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, tag, true, {
                                    fileName: "[project]/src/components/ArticleComposer.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this)),
                            tags.length < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: tagInputRef,
                                type: "text",
                                value: currentTag,
                                onChange: handleTagInputChange,
                                onKeyDown: handleTagInputKeyDown,
                                onBlur: addTag,
                                placeholder: tags.length === 0 ? "Add up to 5 tags..." : "Add another tag...",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagInput
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 432,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Editor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ref: editorRef,
                            articleId: articleId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                            initialContent: content,
                            onChange: handleEditorChange,
                            placeholder: "Tell your story..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleComposer.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onInsert: handleInsertInspiration
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleComposer.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
};
_s(ArticleComposer, "zpVV+sGZ1BGJnmO7wpkmaMW7YXY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ArticleComposer;
const __TURBOPACK__default__export__ = ArticleComposer;
var _c;
__turbopack_context__.k.register(_c, "ArticleComposer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LikeButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const LikeButton = ({ articleId, initialLikes = [], className = '', styles = {} })=>{
    _s();
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLikes);
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LikeButton.useEffect": ()=>{
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "LikeButton.useEffect.unsubscribe": (user)=>{
                    setCurrentUser(user);
                    if (user) {
                        setIsLiked(likes.includes(user.uid));
                    } else {
                        setIsLiked(false);
                    }
                }
            }["LikeButton.useEffect.unsubscribe"]);
            return ({
                "LikeButton.useEffect": ()=>unsubscribe()
            })["LikeButton.useEffect"];
        }
    }["LikeButton.useEffect"], [
        likes
    ]);
    // Update like status when initialLikes change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LikeButton.useEffect": ()=>{
            setLikes(initialLikes);
            if (currentUser) {
                setIsLiked(initialLikes.includes(currentUser.uid));
            }
        }
    }["LikeButton.useEffect"], [
        initialLikes,
        currentUser
    ]);
    const handleLikeClick = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log('👍 LikeButton clicked - should NOT trigger parent re-render');
        if (!currentUser) {
            alert('Please login to like articles');
            return;
        }
        // Optimistic update with animation
        setIsAnimating(true);
        setTimeout(()=>setIsAnimating(false), 300);
        try {
            if (isLiked) {
                // Unlike
                const newLikes = likes.filter((uid)=>uid !== currentUser.uid);
                setLikes(newLikes);
                setIsLiked(false);
                console.log('👍 Unlike completed - likes:', newLikes.length);
                // Update Firestore
                const { doc, updateDoc, arrayRemove } = await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const { db } = await __turbopack_context__.r("[project]/src/firebase/clientApp.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const articleRef = doc(db, 'articles', articleId);
                await updateDoc(articleRef, {
                    likes: arrayRemove(currentUser.uid)
                });
            } else {
                // Like
                const newLikes = [
                    ...likes,
                    currentUser.uid
                ];
                setLikes(newLikes);
                setIsLiked(true);
                console.log('👍 Like completed - likes:', newLikes.length);
                // Update Firestore
                const { doc, updateDoc, arrayUnion } = await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const { db } = await __turbopack_context__.r("[project]/src/firebase/clientApp.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                const articleRef = doc(db, 'articles', articleId);
                await updateDoc(articleRef, {
                    likes: arrayUnion(currentUser.uid)
                });
            }
        } catch (error) {
            console.error('Error updating like status:', error);
            // Revert on error
            if (isLiked) {
                setLikes([
                    ...likes,
                    currentUser.uid
                ]);
                setIsLiked(true);
            } else {
                setLikes(likes.filter((uid)=>uid !== currentUser.uid));
                setIsLiked(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${className} ${isLiked ? styles.liked : ''}`,
        onClick: handleLikeClick,
        "aria-label": isLiked ? 'Unlike article' : 'Like article',
        style: {
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.2)' : 'scale(1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: isLiked ? "currentColor" : "none",
                stroke: "currentColor",
                strokeWidth: "2",
                className: styles.likeIcon,
                style: {
                    transition: 'all 0.3s ease',
                    filter: isAnimating ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                }, void 0, false, {
                    fileName: "[project]/src/components/LikeButton.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LikeButton.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: likes.length > 0 ? likes.length : ''
            }, void 0, false, {
                fileName: "[project]/src/components/LikeButton.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LikeButton.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
_s(LikeButton, "3BQblcuRfOvD1FV7b3gK9ip7oBw=");
_c = LikeButton;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(LikeButton);
var _c, _c1;
__turbopack_context__.k.register(_c, "LikeButton");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/articles/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ArticlePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticlePage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MinimalNotificationBell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleWithHighlights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleWithHighlights.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommentSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CommentSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleComposer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LikeButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LikeButton.tsx [app-client] (ecmascript)");
// Import Firestore article service
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getMoodFromText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/moodThemes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Author mapping from homepage for consistency
const authorMapping = {
    '84b2f82c-1e93-498a-983e-3b30a8379e63': 'Samuel Green',
    user_002: 'Alex Martinez',
    'kristen-lee-id': 'Kristen Lee',
    'alex-wen-id': 'Alex Wen',
    'hannah-cole-id': 'Hannah Cole'
};
// Convert Firestore article to UI format for RenderArticle
// This adapter should ensure the object passed to RenderArticle has the fields RenderArticle expects.
const adaptFirestoreArticle = (firestoreArticle)=>{
    const slug = firestoreArticle.slug || (firestoreArticle.title || 'untitled').toLowerCase().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
    const now = new Date().toISOString();
    // Base fields required by RenderArticle's BaseArticleInfo
    const adapted = {
        id: firestoreArticle.id || '',
        _id: firestoreArticle.id || '',
        title: firestoreArticle.title || 'Untitled Article',
        slug: slug,
        authorId: firestoreArticle.authorId,
        authorName: firestoreArticle.authorName || 'Unknown Author',
        coverImageUrl: firestoreArticle.coverImage || null,
        tags: firestoreArticle.tags || [],
        likes: firestoreArticle.likes || [],
        createdAt: firestoreArticle.createdAt ? firestoreArticle.createdAt.toDate().toISOString() : now,
        updatedAt: firestoreArticle.updatedAt ? firestoreArticle.updatedAt.toDate().toISOString() : now,
        excerpt: firestoreArticle.excerpt || '',
        // Fields for SimpleArticle vs ComplexArticle differentiation by RenderArticle
        // RenderArticle will use its type guards (isSimple, isComplex)
        // We pass both `body` and a potential `content` array if Firestore structure supports it.
        body: firestoreArticle.body || '',
        content: firestoreArticle.content || undefined,
        // If firestoreArticle.content is not an array, RenderArticle's isComplex will be false.
        // Other optional fields RenderArticle might use from ComplexArticle type
        reposts: firestoreArticle.reposts || [],
        viewCount: firestoreArticle.viewCount || 0
    };
    // If firestoreArticle.content is indeed an array of paragraphs, map it.
    // This specific mapping logic might be too complex for the adapter if FirestoreArticle's content isn't already structured as Paragraph[].
    // For now, we pass it as is, and RenderArticle's isComplex will determine how to use it or 'body'.
    // If `firestoreArticle.content` is an array and matches Paragraph structure, it will be used.
    // Otherwise, RenderArticle's `isSimple` path will likely take over using `adapted.body`.
    return adapted;
};
function Article() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const slug = params?.get('slug');
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [articleHtml, setArticleHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mood detection state
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('reflective');
    const [moodFeatureEnabled, setMoodFeatureEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Initialize window width on client side
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Article.useEffect": ()=>{
            setWindowWidth(window.innerWidth);
            const handleResize = {
                "Article.useEffect.handleResize": ()=>{
                    setWindowWidth(window.innerWidth);
                }
            }["Article.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Article.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Article.useEffect"];
        }
    }["Article.useEffect"], []);
    // Load mood feature preference from localStorage (only for authenticated users)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Article.useEffect": ()=>{
            if (isAuthenticated) {
                const savedPreference = localStorage.getItem('moodFeatureEnabled');
                console.log('Loading mood feature preference from localStorage for authenticated user:', savedPreference);
                if (savedPreference !== null) {
                    const enabled = JSON.parse(savedPreference);
                    console.log('Setting mood feature enabled to:', enabled);
                    setMoodFeatureEnabled(enabled);
                } else {
                    console.log('No saved preference found for authenticated user, using default: true');
                    setMoodFeatureEnabled(true);
                }
            } else {
                console.log('User not authenticated, disabling mood feature');
                setMoodFeatureEnabled(false);
            }
        }
    }["Article.useEffect"], [
        isAuthenticated
    ]);
    // Check if user is authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Article.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "Article.useEffect.unsubscribe": (user)=>{
                    setIsAuthenticated(!!user);
                    setCurrentUser(user);
                // Note: Like status is now handled by LikeButton component
                }
            }["Article.useEffect.unsubscribe"]);
            return ({
                "Article.useEffect": ()=>unsubscribe()
            })["Article.useEffect"];
        }
    }["Article.useEffect"], [
        article
    ]);
    // Handle clicks outside the profile menu to close it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Article.useEffect": ()=>{
            const handleClickOutside = {
                "Article.useEffect.handleClickOutside": (event)=>{
                    const target = event.target;
                    const profileMenu = document.getElementById('profile-menu');
                    const profileButton = document.getElementById('profile-button');
                    if (profileMenu && !profileMenu.contains(target) && profileButton && !profileButton.contains(target)) {
                        setIsProfileMenuOpen(false);
                    }
                }
            }["Article.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Article.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["Article.useEffect"];
        }
    }["Article.useEffect"], []);
    // Fetch article data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Article.useEffect": ()=>{
            const fetchArticle = {
                "Article.useEffect.fetchArticle": async ()=>{
                    if (!slug) {
                        setError('No article slug provided');
                        setIsLoading(false);
                        return;
                    }
                    try {
                        const articleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleBySlug"])(slug);
                        if (!articleData) {
                            setError('Article not found');
                            setIsLoading(false);
                            return;
                        }
                        // Clean HTML content
                        const cleanHtml = articleData.body.replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '').replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
                        setArticleHtml(cleanHtml);
                        setLikes(articleData.likes || []);
                        // Calculate read time (approx 200 words per minute)
                        const wordCount = articleData.body.split(/\s+/).length;
                        const readTimeMinutes = Math.ceil(wordCount / 200);
                        // Format date
                        const date = articleData.createdAt ? new Date(articleData.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }) : 'Unknown date';
                        setArticle({
                            id: articleData.id,
                            title: articleData.title,
                            authorName: articleData.authorName || 'Anonymous',
                            authorId: articleData.authorId,
                            createdAt: date,
                            readTime: readTimeMinutes,
                            likes: articleData.likes || [],
                            tags: articleData.tags || [],
                            slug: slug
                        });
                        setTags(articleData.tags || []);
                        setIsLoading(false);
                    } catch (error) {
                        console.error('Error fetching article:', error);
                        setError('Failed to load article');
                        setIsLoading(false);
                    }
                }
            }["Article.useEffect.fetchArticle"];
            fetchArticle();
        }
    }["Article.useEffect"], [
        slug
    ]);
    // Analyze mood when article content is loaded (only for authenticated users)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Article.useEffect": ()=>{
            if (articleHtml && isAuthenticated) {
                // Extract text from HTML for sentiment analysis
                const textContent = articleHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
                if (textContent) {
                    const detectedMood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMoodFromText"])(textContent);
                    setMood(detectedMood);
                }
            }
        }
    }["Article.useEffect"], [
        articleHtml,
        isAuthenticated
    ]);
    const handleSignOut = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            setIsProfileMenuOpen(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    const toggleSidebar = ()=>{
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    const toggleProfileMenu = ()=>{
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };
    // Debug console for re-renders
    console.log('🔄 Articles page Article component re-rendered at:', new Date().toLocaleTimeString());
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator
                }, void 0, false, {
                    fileName: "[project]/src/app/articles/page.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading article..."
                }, void 0, false, {
                    fileName: "[project]/src/app/articles/page.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/articles/page.tsx",
            lineNumber: 257,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/articles/page.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/articles/page.tsx",
            lineNumber: 266,
            columnNumber: 7
        }, this);
    }
    // Handle when editing is complete
    const handleUpdateComplete = ()=>{
        console.log('Article update complete - refreshing content');
        // Set editing state to false
        setIsEditing(false);
        // Refetch the article to show updated content without changing routes
        const refetchArticle = async ()=>{
            try {
                setIsLoading(true);
                // Add a small delay to ensure Firebase has processed the update
                await new Promise((resolve)=>setTimeout(resolve, 500));
                const articleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleBySlug"])(slug || '');
                if (!articleData) {
                    setError('Article not found');
                    setIsLoading(false);
                    return;
                }
                // Clean HTML content
                const cleanHtml = articleData.body.replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '').replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
                setArticleHtml(cleanHtml);
                setLikes(articleData.likes || []);
                // Calculate read time (approx 200 words per minute)
                const wordCount = articleData.body.split(/\s+/).length;
                const readTimeMinutes = Math.ceil(wordCount / 200);
                // Format date
                const date = articleData.createdAt ? new Date(articleData.createdAt.seconds * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) : 'Unknown date';
                setArticle({
                    id: articleData.id,
                    title: articleData.title,
                    authorName: articleData.authorName || 'Anonymous',
                    authorId: articleData.authorId,
                    createdAt: date,
                    readTime: readTimeMinutes,
                    likes: articleData.likes || [],
                    tags: articleData.tags || [],
                    slug: slug || ''
                });
                setTags(articleData.tags || []);
                console.log('Article refreshed successfully - mood feature state preserved');
            } catch (error) {
                console.error('Error refetching article:', error);
                setError('Failed to refresh article content');
            } finally{
                setIsLoading(false);
            }
        };
        refetchArticle();
    };
    if (isEditing && article) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editingHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsEditing(false),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                            children: "← Back to Article"
                        }, void 0, false, {
                            fileName: "[project]/src/app/articles/page.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Editing: ",
                                article.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/articles/page.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/articles/page.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    articleId: article.id,
                    onUpdateComplete: handleUpdateComplete
                }, void 0, false, {
                    fileName: "[project]/src/app/articles/page.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/articles/page.tsx",
            lineNumber: 344,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articlePageContainer,
        style: {
            position: 'relative',
            backgroundColor: '#ffffff'
        },
        children: [
            moodFeatureEnabled && isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `linear-gradient(45deg, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}40, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}60, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}30, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}50)`,
                            backgroundSize: '400% 400%',
                            animation: 'gradientFlow 8s ease-in-out infinite',
                            filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                            zIndex: 0,
                            transition: 'background-image 1s ease-in-out',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/page.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px),
                radial-gradient(circle at 45% 15%, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle at 15% 85%, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
                            backgroundSize: '4px 4px, 6px 6px, 3px 3px, 5px 5px',
                            animation: 'grainMove 20s linear infinite',
                            opacity: 0.6,
                            mixBlendMode: 'soft-light',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/page.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `radial-gradient(ellipse at 30% 50%, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}25, 
                transparent 70%), 
                radial-gradient(ellipse at 70% 80%, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}30, 
                transparent 70%)`,
                            backgroundSize: '800% 800%',
                            animation: 'waveFlow 12s linear infinite reverse',
                            filter: 'contrast(1.15) blur(0.5px)',
                            zIndex: 0,
                            transition: 'background-image 1s ease-in-out',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/page.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `radial-gradient(circle at 20% 20%, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}20, 
                transparent 40%), 
                radial-gradient(circle at 80% 60%, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}25, 
                transparent 50%),
                radial-gradient(circle at 40% 90%, 
                ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}15, 
                transparent 35%)`,
                            animation: 'orbFloat 15s ease-in-out infinite',
                            filter: 'contrast(1.2) saturate(0.9)',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/page.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.02) 1deg, transparent 2deg),
                repeating-linear-gradient(90deg, transparent, rgba(0,0,0,0.01) 1px, transparent 2px),
                repeating-linear-gradient(0deg, transparent, rgba(255,255,255,0.015) 1px, transparent 3px)
              `,
                            backgroundSize: '2px 2px, 1px 1px, 3px 3px',
                            animation: 'fineGrain 25s linear infinite reverse',
                            opacity: 0.4,
                            mixBlendMode: 'overlay',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/page.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            article && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                        style: moodFeatureEnabled && isAuthenticated ? {
                            position: 'relative',
                            zIndex: 10000,
                            background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.15) 0%, 
                  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}12 40%, 
                  ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd}08 100%)`,
                            backdropFilter: 'blur(24px) saturate(180%)',
                            borderBottom: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}25`,
                            boxShadow: `
                  0 2px 8px -2px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}15,
                  0 8px 32px -8px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}20,
                  inset 0 1px 0 rgba(255, 255, 255, 0.25),
                  inset 0 -1px 0 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}10
                `,
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}15`,
                            borderTop: 'none'
                        } : {
                            position: 'relative',
                            zIndex: 10000
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoLink,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLogo,
                                        style: moodFeatureEnabled && isAuthenticated ? {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent,
                                            fontWeight: '700',
                                            textShadow: `0 0 20px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}30, 0 0 40px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}15`,
                                            transition: 'all 0.3s ease'
                                        } : {
                                            fontWeight: '700'
                                        },
                                        children: "Journalite"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/page.tsx",
                                        lineNumber: 508,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/articles/page.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerActions,
                                    children: [
                                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MinimalNotificationBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/src/app/articles/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileMenu,
                                            id: "profile-menu",
                                            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileCircle,
                                                        onClick: toggleProfileMenu,
                                                        id: "profile-button",
                                                        children: currentUser?.displayName?.charAt(0) || currentUser?.email?.charAt(0) || 'U'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 23
                                                    }, this),
                                                    isProfileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDropdown,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Home"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/my-thoughts",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "My Thoughts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/dashboard",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Dashboard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/write",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Write a story"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 542,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/create-article",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Create Article"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/explore",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Explore"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/profile",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Profile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/settings",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Settings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleSignOut,
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdownItem,
                                                                children: "Sign out"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authButtons,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/login",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginButton,
                                                        children: "Sign in"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/signup",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signupButton,
                                                        children: "Get started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/page.tsx",
                                                lineNumber: 552,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/articles/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/articles/page.tsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/articles/page.tsx",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/page.tsx",
                        lineNumber: 481,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageContainer,
                        style: {
                            position: 'relative',
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleTitle,
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleMeta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorAvatar,
                                                        children: article.authorName.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorDetails,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/user/${article.authorName.toLowerCase().replace(/\s+/g, '')}`,
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorNameLink,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorName,
                                                                    children: article.authorName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/articles/page.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 575,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleDetails,
                                                                children: [
                                                                    article.createdAt,
                                                                    " · ",
                                                                    article.readTime,
                                                                    " min read"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/articles/page.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/page.tsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleActions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LikeButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        articleId: article.id,
                                                        initialLikes: likes,
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].likeButton}`,
                                                        styles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 19
                                                    }, this),
                                                    isAuthenticated && article.authorId === currentUser?.uid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                                        onClick: ()=>setIsEditing(true),
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/page.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this),
                                    article.tags && article.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagContainer,
                                        children: article.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                                children: tag
                                            }, index, false, {
                                                fileName: "[project]/src/app/articles/page.tsx",
                                                lineNumber: 609,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/page.tsx",
                                lineNumber: 568,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleWithHighlights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                articleId: article.id,
                                initialHtml: articleHtml || undefined,
                                isAuthenticated: isAuthenticated,
                                articleTitle: article.title,
                                articleSlug: article.slug,
                                ...isAuthenticated && {
                                    moodFeatureEnabled: moodFeatureEnabled,
                                    onToggleMoodFeature: (enabled)=>{
                                        console.log('Toggling mood feature:', enabled);
                                        setMoodFeatureEnabled(enabled);
                                        localStorage.setItem('moodFeatureEnabled', JSON.stringify(enabled));
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/page.tsx",
                                lineNumber: 616,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentsContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommentSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    articleId: article.id,
                                    ...isAuthenticated && {
                                        mood: mood,
                                        moodFeatureEnabled: moodFeatureEnabled
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/articles/page.tsx",
                                    lineNumber: 634,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/page.tsx",
                                lineNumber: 633,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relatedTagsSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relatedTagsHeading,
                                        children: "Related Tags"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/page.tsx",
                                        lineNumber: 645,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relatedTagsList,
                                        children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/tag/${tag.toLowerCase()}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].relatedTag,
                                                children: [
                                                    "# ",
                                                    tag
                                                ]
                                            }, tag, true, {
                                                fileName: "[project]/src/app/articles/page.tsx",
                                                lineNumber: 648,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/page.tsx",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/write",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].writeButton,
                                        children: "Write"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/page.tsx",
                                        lineNumber: 658,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/page.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/page.tsx",
                        lineNumber: 566,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/articles/page.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_s(Article, "gWht5kylylGDZZ2ypEvXIsPN73g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Article;
function ArticlePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading article..."
        }, void 0, false, {
            fileName: "[project]/src/app/articles/page.tsx",
            lineNumber: 671,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Article, {}, void 0, false, {
            fileName: "[project]/src/app/articles/page.tsx",
            lineNumber: 672,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/articles/page.tsx",
        lineNumber: 671,
        columnNumber: 5
    }, this);
}
_c1 = ArticlePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "Article");
__turbopack_context__.k.register(_c1, "ArticlePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bfdb486e._.js.map