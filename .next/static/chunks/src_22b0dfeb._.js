(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/styles/home.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "home-module__i0QXTG__active",
  "activeTab": "home-module__i0QXTG__activeTab",
  "adminAvatar": "home-module__i0QXTG__adminAvatar",
  "alertInfo": "home-module__i0QXTG__alertInfo",
  "alertSuccess": "home-module__i0QXTG__alertSuccess",
  "alertWarning": "home-module__i0QXTG__alertWarning",
  "article-card": "home-module__i0QXTG__article-card",
  "article-container": "home-module__i0QXTG__article-container",
  "article-content": "home-module__i0QXTG__article-content",
  "article-cover-image": "home-module__i0QXTG__article-cover-image",
  "article-excerpt": "home-module__i0QXTG__article-excerpt",
  "article-grid": "home-module__i0QXTG__article-grid",
  "article-header": "home-module__i0QXTG__article-header",
  "article-image": "home-module__i0QXTG__article-image",
  "article-meta": "home-module__i0QXTG__article-meta",
  "article-page": "home-module__i0QXTG__article-page",
  "article-paragraph": "home-module__i0QXTG__article-paragraph",
  "article-tag": "home-module__i0QXTG__article-tag",
  "article-tags": "home-module__i0QXTG__article-tags",
  "article-title": "home-module__i0QXTG__article-title",
  "articleForm": "home-module__i0QXTG__articleForm",
  "articleFormContainer": "home-module__i0QXTG__articleFormContainer",
  "articleFormHeader": "home-module__i0QXTG__articleFormHeader",
  "articleFormSubtitle": "home-module__i0QXTG__articleFormSubtitle",
  "articleFormTitle": "home-module__i0QXTG__articleFormTitle",
  "author-avatar": "home-module__i0QXTG__author-avatar",
  "author-info": "home-module__i0QXTG__author-info",
  "author-name": "home-module__i0QXTG__author-name",
  "avatarPlaceholder": "home-module__i0QXTG__avatarPlaceholder",
  "back-link": "home-module__i0QXTG__back-link",
  "backLink": "home-module__i0QXTG__backLink",
  "backToAllButton": "home-module__i0QXTG__backToAllButton",
  "cancelButton": "home-module__i0QXTG__cancelButton",
  "cancelReplyButton": "home-module__i0QXTG__cancelReplyButton",
  "center-column": "home-module__i0QXTG__center-column",
  "clearSearchButton": "home-module__i0QXTG__clearSearchButton",
  "closePromptButton": "home-module__i0QXTG__closePromptButton",
  "codeBlock": "home-module__i0QXTG__codeBlock",
  "codeBlockContainer": "home-module__i0QXTG__codeBlockContainer",
  "codeContent": "home-module__i0QXTG__codeContent",
  "codeLineNumbers": "home-module__i0QXTG__codeLineNumbers",
  "collapsed": "home-module__i0QXTG__collapsed",
  "comment": "home-module__i0QXTG__comment",
  "commentActions": "home-module__i0QXTG__commentActions",
  "commentAuthor": "home-module__i0QXTG__commentAuthor",
  "commentAvatar": "home-module__i0QXTG__commentAvatar",
  "commentContent": "home-module__i0QXTG__commentContent",
  "commentControls": "home-module__i0QXTG__commentControls",
  "commentDate": "home-module__i0QXTG__commentDate",
  "commentForm": "home-module__i0QXTG__commentForm",
  "commentHeader": "home-module__i0QXTG__commentHeader",
  "commentInput": "home-module__i0QXTG__commentInput",
  "commentInputContainer": "home-module__i0QXTG__commentInputContainer",
  "commentInputWrapper": "home-module__i0QXTG__commentInputWrapper",
  "commentItem": "home-module__i0QXTG__commentItem",
  "commentMeta": "home-module__i0QXTG__commentMeta",
  "commentsList": "home-module__i0QXTG__commentsList",
  "container": "home-module__i0QXTG__container",
  "copyButton": "home-module__i0QXTG__copyButton",
  "cover-image": "home-module__i0QXTG__cover-image",
  "cta-button": "home-module__i0QXTG__cta-button",
  "deleteButton": "home-module__i0QXTG__deleteButton",
  "developerAvatar": "home-module__i0QXTG__developerAvatar",
  "discussionSection": "home-module__i0QXTG__discussionSection",
  "discussionTitle": "home-module__i0QXTG__discussionTitle",
  "docContent": "home-module__i0QXTG__docContent",
  "docNav": "home-module__i0QXTG__docNav",
  "docNavItem": "home-module__i0QXTG__docNavItem",
  "docNavItemActive": "home-module__i0QXTG__docNavItemActive",
  "docSearchContainer": "home-module__i0QXTG__docSearchContainer",
  "docSearchInput": "home-module__i0QXTG__docSearchInput",
  "docSidebar": "home-module__i0QXTG__docSidebar",
  "docSubheading": "home-module__i0QXTG__docSubheading",
  "docText": "home-module__i0QXTG__docText",
  "docTitle": "home-module__i0QXTG__docTitle",
  "docsContainer": "home-module__i0QXTG__docsContainer",
  "documentationContainer": "home-module__i0QXTG__documentationContainer",
  "edit-button": "home-module__i0QXTG__edit-button",
  "emptyState": "home-module__i0QXTG__emptyState",
  "errorAlert": "home-module__i0QXTG__errorAlert",
  "errorIcon": "home-module__i0QXTG__errorIcon",
  "errorMessage": "home-module__i0QXTG__errorMessage",
  "expanded": "home-module__i0QXTG__expanded",
  "fadeIn": "home-module__i0QXTG__fadeIn",
  "feature-desc": "home-module__i0QXTG__feature-desc",
  "feature-title": "home-module__i0QXTG__feature-title",
  "featured-card": "home-module__i0QXTG__featured-card",
  "featured-content": "home-module__i0QXTG__featured-content",
  "featured-excerpt": "home-module__i0QXTG__featured-excerpt",
  "featured-image": "home-module__i0QXTG__featured-image",
  "featured-label": "home-module__i0QXTG__featured-label",
  "featured-meta": "home-module__i0QXTG__featured-meta",
  "featured-title": "home-module__i0QXTG__featured-title",
  "features": "home-module__i0QXTG__features",
  "follow-button": "home-module__i0QXTG__follow-button",
  "footer": "home-module__i0QXTG__footer",
  "formActions": "home-module__i0QXTG__formActions",
  "formControl": "home-module__i0QXTG__formControl",
  "formGroup": "home-module__i0QXTG__formGroup",
  "formLabel": "home-module__i0QXTG__formLabel",
  "formTextarea": "home-module__i0QXTG__formTextarea",
  "function": "home-module__i0QXTG__function",
  "header": "home-module__i0QXTG__header",
  "hero": "home-module__i0QXTG__hero",
  "hero-subtitle": "home-module__i0QXTG__hero-subtitle",
  "hero-title": "home-module__i0QXTG__hero-title",
  "highlight": "home-module__i0QXTG__highlight",
  "imagePreview": "home-module__i0QXTG__imagePreview",
  "keyword": "home-module__i0QXTG__keyword",
  "left-sidebar": "home-module__i0QXTG__left-sidebar",
  "likeButton": "home-module__i0QXTG__likeButton",
  "liked": "home-module__i0QXTG__liked",
  "loading": "home-module__i0QXTG__loading",
  "loadingSpinner": "home-module__i0QXTG__loadingSpinner",
  "loginButton": "home-module__i0QXTG__loginButton",
  "loginLink": "home-module__i0QXTG__loginLink",
  "loginPrompt": "home-module__i0QXTG__loginPrompt",
  "loginPromptButtons": "home-module__i0QXTG__loginPromptButtons",
  "logo": "home-module__i0QXTG__logo",
  "main-grid": "home-module__i0QXTG__main-grid",
  "menu-overlay": "home-module__i0QXTG__menu-overlay",
  "nav-explore": "home-module__i0QXTG__nav-explore",
  "nav-home": "home-module__i0QXTG__nav-home",
  "nav-icon": "home-module__i0QXTG__nav-icon",
  "nav-learn": "home-module__i0QXTG__nav-learn",
  "nav-link": "home-module__i0QXTG__nav-link",
  "nav-login": "home-module__i0QXTG__nav-login",
  "nav-logout": "home-module__i0QXTG__nav-logout",
  "nav-plans": "home-module__i0QXTG__nav-plans",
  "nav-profile": "home-module__i0QXTG__nav-profile",
  "nav-settings": "home-module__i0QXTG__nav-settings",
  "nav-signup": "home-module__i0QXTG__nav-signup",
  "nav-text": "home-module__i0QXTG__nav-text",
  "nav-thoughts": "home-module__i0QXTG__nav-thoughts",
  "no-results": "home-module__i0QXTG__no-results",
  "noComments": "home-module__i0QXTG__noComments",
  "noResults": "home-module__i0QXTG__noResults",
  "number": "home-module__i0QXTG__number",
  "operator": "home-module__i0QXTG__operator",
  "optionalLabel": "home-module__i0QXTG__optionalLabel",
  "profileAvatar": "home-module__i0QXTG__profileAvatar",
  "profileBio": "home-module__i0QXTG__profileBio",
  "profileContent": "home-module__i0QXTG__profileContent",
  "profileHeader": "home-module__i0QXTG__profileHeader",
  "profileInfo": "home-module__i0QXTG__profileInfo",
  "profileName": "home-module__i0QXTG__profileName",
  "profileUsername": "home-module__i0QXTG__profileUsername",
  "prompt-banner": "home-module__i0QXTG__prompt-banner",
  "prompt-button": "home-module__i0QXTG__prompt-button",
  "prompt-icon": "home-module__i0QXTG__prompt-icon",
  "prompt-text": "home-module__i0QXTG__prompt-text",
  "quote-card": "home-module__i0QXTG__quote-card",
  "quote-tag": "home-module__i0QXTG__quote-tag",
  "reaction-bar": "home-module__i0QXTG__reaction-bar",
  "reaction-button": "home-module__i0QXTG__reaction-button",
  "reaction-icon": "home-module__i0QXTG__reaction-icon",
  "read-link": "home-module__i0QXTG__read-link",
  "repliesList": "home-module__i0QXTG__repliesList",
  "replyActions": "home-module__i0QXTG__replyActions",
  "replyAuthor": "home-module__i0QXTG__replyAuthor",
  "replyAvatar": "home-module__i0QXTG__replyAvatar",
  "replyButton": "home-module__i0QXTG__replyButton",
  "replyContent": "home-module__i0QXTG__replyContent",
  "replyDate": "home-module__i0QXTG__replyDate",
  "replyForm": "home-module__i0QXTG__replyForm",
  "replyHeader": "home-module__i0QXTG__replyHeader",
  "replyInput": "home-module__i0QXTG__replyInput",
  "replyInputContainer": "home-module__i0QXTG__replyInputContainer",
  "replyItem": "home-module__i0QXTG__replyItem",
  "replyMeta": "home-module__i0QXTG__replyMeta",
  "right-sidebar": "home-module__i0QXTG__right-sidebar",
  "roleSelect": "home-module__i0QXTG__roleSelect",
  "roleTag": "home-module__i0QXTG__roleTag",
  "searchBarContainer": "home-module__i0QXTG__searchBarContainer",
  "searchContainer": "home-module__i0QXTG__searchContainer",
  "searchInput": "home-module__i0QXTG__searchInput",
  "searchInputWrapper": "home-module__i0QXTG__searchInputWrapper",
  "searchResultAvatar": "home-module__i0QXTG__searchResultAvatar",
  "searchResultInfo": "home-module__i0QXTG__searchResultInfo",
  "searchResultItem": "home-module__i0QXTG__searchResultItem",
  "searchResultName": "home-module__i0QXTG__searchResultName",
  "searchResultRole": "home-module__i0QXTG__searchResultRole",
  "searchResultRoleAdmin": "home-module__i0QXTG__searchResultRoleAdmin",
  "searchResultRoleDeveloper": "home-module__i0QXTG__searchResultRoleDeveloper",
  "searchResultRoleUser": "home-module__i0QXTG__searchResultRoleUser",
  "searchResultUsername": "home-module__i0QXTG__searchResultUsername",
  "searchResults": "home-module__i0QXTG__searchResults",
  "searchResultsContainer": "home-module__i0QXTG__searchResultsContainer",
  "searchResultsTitle": "home-module__i0QXTG__searchResultsTitle",
  "section-title": "home-module__i0QXTG__section-title",
  "sectionHeading": "home-module__i0QXTG__sectionHeading",
  "sectionTitle": "home-module__i0QXTG__sectionTitle",
  "sidebar-collapse-button": "home-module__i0QXTG__sidebar-collapse-button",
  "sidebar-footer": "home-module__i0QXTG__sidebar-footer",
  "sidebar-header": "home-module__i0QXTG__sidebar-header",
  "sidebar-heading": "home-module__i0QXTG__sidebar-heading",
  "sidebarSearch": "home-module__i0QXTG__sidebarSearch",
  "sidebarSection": "home-module__i0QXTG__sidebarSection",
  "spin": "home-module__i0QXTG__spin",
  "statBox": "home-module__i0QXTG__statBox",
  "statLabel": "home-module__i0QXTG__statLabel",
  "statNumber": "home-module__i0QXTG__statNumber",
  "statsContainer": "home-module__i0QXTG__statsContainer",
  "string": "home-module__i0QXTG__string",
  "submitButton": "home-module__i0QXTG__submitButton",
  "submitReplyButton": "home-module__i0QXTG__submitReplyButton",
  "tabButton": "home-module__i0QXTG__tabButton",
  "tabContainer": "home-module__i0QXTG__tabContainer",
  "tag": "home-module__i0QXTG__tag",
  "tag-description": "home-module__i0QXTG__tag-description",
  "tag-header": "home-module__i0QXTG__tag-header",
  "tag-list": "home-module__i0QXTG__tag-list",
  "tagsPreview": "home-module__i0QXTG__tagsPreview",
  "three-column-layout": "home-module__i0QXTG__three-column-layout",
  "toggle-button": "home-module__i0QXTG__toggle-button",
  "toggleRepliesButton": "home-module__i0QXTG__toggleRepliesButton",
  "topic-tag": "home-module__i0QXTG__topic-tag",
  "topics": "home-module__i0QXTG__topics",
  "trending-list": "home-module__i0QXTG__trending-list",
  "trending-tag": "home-module__i0QXTG__trending-tag",
  "type": "home-module__i0QXTG__type",
  "userAvatar": "home-module__i0QXTG__userAvatar",
  "userManagementContainer": "home-module__i0QXTG__userManagementContainer",
  "userTableCell": "home-module__i0QXTG__userTableCell",
  "usersTable": "home-module__i0QXTG__usersTable",
  "usersTableContainer": "home-module__i0QXTG__usersTableContainer",
  "variable": "home-module__i0QXTG__variable",
  "vertical-nav": "home-module__i0QXTG__vertical-nav",
  "write-button": "home-module__i0QXTG__write-button",
  "writer-avatar": "home-module__i0QXTG__writer-avatar",
  "writer-info": "home-module__i0QXTG__writer-info",
  "writer-item": "home-module__i0QXTG__writer-item",
  "writer-name": "home-module__i0QXTG__writer-name",
  "writers": "home-module__i0QXTG__writers",
  "writing-tip": "home-module__i0QXTG__writing-tip",
  "writing-tips": "home-module__i0QXTG__writing-tips",
});
}}),
"[project]/src/app/notifications/notifications.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "deleteButton": "notifications-module__gv5qsq__deleteButton",
  "emptyIcon": "notifications-module__gv5qsq__emptyIcon",
  "emptyState": "notifications-module__gv5qsq__emptyState",
  "header": "notifications-module__gv5qsq__header",
  "markAllButton": "notifications-module__gv5qsq__markAllButton",
  "message": "notifications-module__gv5qsq__message",
  "notificationActions": "notifications-module__gv5qsq__notificationActions",
  "notificationCard": "notifications-module__gv5qsq__notificationCard",
  "notificationContent": "notifications-module__gv5qsq__notificationContent",
  "notificationsList": "notifications-module__gv5qsq__notificationsList",
  "readButton": "notifications-module__gv5qsq__readButton",
  "statCard": "notifications-module__gv5qsq__statCard",
  "statLabel": "notifications-module__gv5qsq__statLabel",
  "statValue": "notifications-module__gv5qsq__statValue",
  "summary": "notifications-module__gv5qsq__summary",
  "time": "notifications-module__gv5qsq__time",
  "title": "notifications-module__gv5qsq__title",
  "unread": "notifications-module__gv5qsq__unread",
  "viewButton": "notifications-module__gv5qsq__viewButton",
});
}}),
"[project]/src/app/notifications/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotificationsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/notifications.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/notifications/notifications.module.css [app-client] (css module)");
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
function NotificationsPage() {
    _s();
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Check authentication status on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationsPage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "NotificationsPage.useEffect.unsubscribe": (user)=>{
                    const isAuth = !!user;
                    setIsAuthenticated(isAuth);
                    if (!isAuth) {
                        router.push('/login?redirect=/notifications');
                    } else {
                        // Load notifications
                        fetchNotifications();
                    }
                }
            }["NotificationsPage.useEffect.unsubscribe"]);
            return ({
                "NotificationsPage.useEffect": ()=>unsubscribe()
            })["NotificationsPage.useEffect"];
        }
    }["NotificationsPage.useEffect"], [
        router
    ]);
    // Fetch all notifications
    const fetchNotifications = async ()=>{
        try {
            setIsLoading(true);
            const fetchedNotifications = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserNotifications"])(false);
            setNotifications(fetchedNotifications);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally{
            setIsLoading(false);
        }
    };
    // Mark notification as read
    const handleMarkAsRead = async (notification)=>{
        if (!notification.id || notification.read) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markNotificationAsRead"])(notification.id);
            // Update local state
            setNotifications((prevNotifications)=>prevNotifications.map((n)=>n.id === notification.id ? {
                        ...n,
                        read: true
                    } : n));
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };
    // Mark all notifications as read
    const handleMarkAllAsRead = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAllNotificationsAsRead"])();
            // Update local state
            setNotifications((prevNotifications)=>prevNotifications.map((n)=>({
                        ...n,
                        read: true
                    })));
        } catch (error) {
            console.error('Error marking all notifications as read:', error);
        }
    };
    // Delete a notification
    const handleDelete = async (notificationId)=>{
        if (!notificationId) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteNotification"])(notificationId);
            // Update local state
            setNotifications((prevNotifications)=>prevNotifications.filter((n)=>n.id !== notificationId));
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };
    const toggleSidebar = ()=>{
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    const formatTime = (timestamp)=>{
        if (!timestamp) return '';
        try {
            const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return 'Invalid date';
        }
    };
    // Get the appropriate link for different notification types
    const getNotificationLink = (notification)=>{
        if (notification.type === 'follow') {
            // For follow notifications, link to the user profile using their username
            if (notification.fromUser?.username) {
                return `/user/${notification.fromUser.username}`;
            }
            // Fallback to extracting username from message if not available in fromUser
            const usernameMatch = notification.message.match(/@([a-zA-Z0-9_]+)/);
            if (usernameMatch) {
                return `/user/${usernameMatch[1]}`;
            }
            // Default fallback
            return '/notifications';
        } else if (notification.articleSlug) {
            // For article-related notifications (comments, likes, etc.)
            return `/articles?slug=${notification.articleSlug}`;
        } else {
            // Default to notifications page
            return '#';
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading notifications..."
            }, void 0, false, {
                fileName: "[project]/src/app/notifications/page.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/notifications/page.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['three-column-layout'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['left-sidebar']} ${isSidebarCollapsed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['collapsed'] : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['sidebar-header'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                                children: "Journalite"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['toggle-button'],
                                onClick: toggleSidebar,
                                "aria-label": isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar",
                                children: isSidebarCollapsed ? "→" : "←"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notifications/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['vertical-nav'],
                        children: isAuthenticated ? // Navigation for authenticated users
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-home']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/my-thoughts",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-thoughts']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "My Thoughts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/create-article",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-create']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Create Article"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/explore",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-explore']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Explore"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/notifications",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/my-profile",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-profile']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "My Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/settings",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-settings']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : // Navigation for non-authenticated users
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-home']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-login']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/learn",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-learn']}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                            children: "Learn More"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/notifications/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/notifications/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/notifications/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/notifications/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['center-column'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].markAllButton,
                                onClick: handleMarkAllAsRead,
                                children: "Mark all as read"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notifications/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyIcon,
                                children: "🔔"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "No notifications yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "When you receive notifications, they will appear here."
                            }, void 0, false, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notifications/page.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationsList,
                        children: notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationCard} ${!notification.read ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unread : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                                                children: notification.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/notifications/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].time,
                                                children: formatTime(notification.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/notifications/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/notifications/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: getNotificationLink(notification),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewButton,
                                                onClick: ()=>handleMarkAsRead(notification),
                                                children: "View"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/notifications/page.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this),
                                            !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readButton,
                                                onClick: ()=>handleMarkAsRead(notification),
                                                children: "Mark as read"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/notifications/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                                                onClick: ()=>notification.id && handleDelete(notification.id),
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/notifications/page.tsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/notifications/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, notification.id, true, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/notifications/page.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/notifications/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['right-sidebar'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['sidebar-heading'],
                        children: "Notifications Summary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/notifications/page.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summary,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                        children: notifications.filter((n)=>!n.read).length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/notifications/page.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: "Unread"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/notifications/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                        children: notifications.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/notifications/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$notifications$2f$notifications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/notifications/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/notifications/page.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/notifications/page.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/notifications/page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/notifications/page.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(NotificationsPage, "cQ/AZ6x/SDdyfXm/5DRBLJtqLmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NotificationsPage;
var _c;
__turbopack_context__.k.register(_c, "NotificationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_22b0dfeb._.js.map