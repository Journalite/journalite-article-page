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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/notifications.ts [app-client] (ecmascript)");
;
;
;
async function getArticles(options = {}) {
    const { limit, includeDrafts = false } = options;
    if (("TURBOPACK compile-time value", "development") === 'development' && limit) {
        console.log('getArticles called with limit:', limit);
    }
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
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('Adding limit constraint:', limit);
            }
            queryConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(limit));
        }
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, ...queryConstraints);
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', id);
        // Direct Firestore fetch with no caching
        // Get fresh data directly
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
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
            const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('slug', '==', slug), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(1));
            const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('Updated slug to:', updateData.slug);
            }
        }
        updateData.updatedAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(articleRef, updateData);
        const updatedArticleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
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
                createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now(),
                updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now()
            };
        }
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
            if ("TURBOPACK compile-time truthy", 1) {
                console.log(`User ${user.uid} replied to comment ${commentId} by ${commentData.userId} on article ${articleInfo?.title}`);
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommentNotification"])(commentData.userId, articleId, articleInfo?.slug || '', articleInfo?.title || 'Article', newReply.replyId, content);
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
  "seamlessEditor": "Editor-module__x7ssIG__seamlessEditor",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.log('Editor: Loading initial content, length:', initialContent.length);
                    }
                    try {
                        initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseHTML"])(initialContent);
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.log('Editor: Successfully parsed HTML content');
                        }
                    } catch (parseError) {
                        console.error('Editor: Failed to parse HTML content:', parseError);
                        initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyDocument"])();
                    }
                } else {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.log('Editor: No initial content, creating empty document');
                    }
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
                                    if ("TURBOPACK compile-time truthy", 1) {
                                        console.log("🕵️‍♂️ Space handler triggered. beforeCursor:", $from.parent.textContent.slice(0, $from.parentOffset));
                                    }
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
                                            if ("TURBOPACK compile-time truthy", 1) {
                                                console.log('Bullet list match:', bulletMatch[0]);
                                            }
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
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log('Auto bullet list creation: success');
                                                }
                                                return true;
                                            } catch (error) {
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log('Auto bullet list creation failed:', error);
                                                }
                                            }
                                        }
                                        // Auto-ordered list: 1. + space = ordered list
                                        const orderedMatch = beforeCursor.match(/^1\.$/);
                                        if (orderedMatch) {
                                            if ("TURBOPACK compile-time truthy", 1) {
                                                console.log('Ordered list match:', orderedMatch[0]);
                                            }
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
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log('Auto ordered list creation: success');
                                                }
                                                return true;
                                            } catch (error) {
                                                if ("TURBOPACK compile-time truthy", 1) {
                                                    console.log('Auto ordered list creation failed:', error);
                                                }
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
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('Editor: Updating content without reinitializing, length:', initialContent.length);
            }
            try {
                const newDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseHTML"])(initialContent);
                const currentContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeToHTML"])(viewRef.current.state.doc);
                // Only update if content is actually different
                if (initialContent !== currentContent) {
                    const transaction = viewRef.current.state.tr.replaceWith(0, viewRef.current.state.doc.content.size, newDoc.content);
                    viewRef.current.dispatch(transaction);
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.log('Editor: Content updated successfully');
                    }
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
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('Bullet list button clicked');
            }
            const { state, dispatch } = viewRef.current;
            const { $from, $to } = state.selection;
            try {
                // Try simple list creation approach
                const listItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph.create(null, $from.parent.content));
                const bulletList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list.create(null, listItem);
                const tr = state.tr.replaceWith($from.start(), $to.end(), bulletList);
                dispatch(tr);
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('Manual bullet list creation: success');
                }
                viewRef.current.focus();
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('Manual bullet list creation failed:', error);
                }
                // Fallback to wrapInList
                const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list);
                const result = command(state, dispatch);
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('wrapInList fallback result:', result);
                }
                if (result) viewRef.current.focus();
            }
        }
    }["Editor.useCallback[toggleBulletList]"], []);
    const toggleOrderedList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleOrderedList]": ()=>{
            if (!viewRef.current) return;
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('Ordered list button clicked');
            }
            const { state, dispatch } = viewRef.current;
            const { $from, $to } = state.selection;
            try {
                // Try simple list creation approach
                const listItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item.create(null, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph.create(null, $from.parent.content));
                const orderedList = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list.create(null, listItem);
                const tr = state.tr.replaceWith($from.start(), $to.end(), orderedList);
                dispatch(tr);
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('Manual ordered list creation: success');
                }
                viewRef.current.focus();
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('Manual ordered list creation failed:', error);
                }
                // Fallback to wrapInList
                const command = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list);
                const result = command(state, dispatch);
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('wrapInList fallback result:', result);
                }
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
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editor} ${className === 'seamless-editor' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seamlessEditor : ''}`,
        style: className === 'seamless-editor' ? {} : {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px'
        },
        children: [
            isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modernToolbar,
                style: className === 'seamless-editor' ? {} : {
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
                                            lineNumber: 549,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 548,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 542,
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
                                            lineNumber: 559,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 558,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 552,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 541,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 564,
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
                                        lineNumber: 574,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 568,
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
                                        lineNumber: 582,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 576,
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
                                        lineNumber: 590,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 584,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 567,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 594,
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
                                            lineNumber: 605,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 604,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 598,
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
                                            lineNumber: 615,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 614,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 608,
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
                                            lineNumber: 625,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 624,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 618,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 597,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 630,
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
                                            lineNumber: 641,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 640,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 634,
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
                                            lineNumber: 651,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 650,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 644,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 633,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 656,
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
                                            lineNumber: 667,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 666,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 660,
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
                                            lineNumber: 677,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Editor.jsx",
                                        lineNumber: 676,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 670,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 659,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Editor.jsx",
                    lineNumber: 539,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 538,
                columnNumber: 17
            }, this),
            !isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                    }, void 0, false, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 688,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Loading editor..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 689,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 687,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: editorRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prosemirrorEditor,
                "aria-label": "Rich text editor",
                style: {
                    minHeight: className === 'seamless-editor' ? '500px' : '400px',
                    opacity: isReady ? 1 : 0.3,
                    ...className === 'seamless-editor' ? {
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                        margin: 0,
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#1f2937'
                    } : {}
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 694,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Editor.jsx",
        lineNumber: 535,
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
"[project]/src/components/icons/CustomIcons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AtmosphereIcon": (()=>AtmosphereIcon),
    "AutoIcon": (()=>AutoIcon),
    "BulbIcon": (()=>BulbIcon),
    "CloseIcon": (()=>CloseIcon),
    "CommentIcon": (()=>CommentIcon),
    "ComputerIcon": (()=>ComputerIcon),
    "DiceIcon": (()=>DiceIcon),
    "EnhancedIcon": (()=>EnhancedIcon),
    "HeartIcon": (()=>HeartIcon),
    "InspirationIcon": (()=>InspirationIcon),
    "LoadingIcon": (()=>LoadingIcon),
    "LockClosedIcon": (()=>LockClosedIcon),
    "LockIcon": (()=>LockIcon),
    "NotificationIcon": (()=>NotificationIcon),
    "PaletteIcon": (()=>PaletteIcon),
    "ReflectionIcon": (()=>ReflectionIcon),
    "RocketIcon": (()=>RocketIcon),
    "SendIcon": (()=>SendIcon),
    "SettingsIcon": (()=>SettingsIcon),
    "ShareIcon": (()=>ShareIcon),
    "SparkleIcon": (()=>SparkleIcon),
    "StarIcon": (()=>StarIcon),
    "TheaterIcon": (()=>TheaterIcon),
    "ThinkingIcon": (()=>ThinkingIcon),
    "ThoughtIcon": (()=>ThoughtIcon),
    "ThumbsUpIcon": (()=>ThumbsUpIcon),
    "UserIcon": (()=>UserIcon),
    "WarningIcon": (()=>WarningIcon),
    "WriteIcon": (()=>WriteIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
;
;
const NotificationIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.73 21a2 2 0 0 1-3.46 0",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
_c = NotificationIcon;
const ThoughtIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CustomIcons.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, this);
_c1 = ThoughtIcon;
const SparkleIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z",
                fill: color,
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, this);
_c2 = SparkleIcon;
const CommentIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CustomIcons.tsx",
            lineNumber: 82,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
_c3 = CommentIcon;
const ThumbsUpIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CustomIcons.tsx",
            lineNumber: 102,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, this);
_c4 = ThumbsUpIcon;
const HeartIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CustomIcons.tsx",
            lineNumber: 122,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 114,
        columnNumber: 3
    }, this);
_c5 = HeartIcon;
const ThinkingIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 138,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 139,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "17",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 140,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 130,
        columnNumber: 3
    }, this);
_c6 = ThinkingIcon;
const BulbIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 21h6m-6 0v-1a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1m-6 0h6m-1-9a4 4 0 1 1-8 0 4 4 0 0 1 8 0z",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CustomIcons.tsx",
            lineNumber: 153,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 145,
        columnNumber: 3
    }, this);
_c7 = BulbIcon;
const StarIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26",
            fill: color
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CustomIcons.tsx",
            lineNumber: 173,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 165,
        columnNumber: 3
    }, this);
_c8 = StarIcon;
const WarningIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 189,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "9",
                x2: "12",
                y2: "13",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 197,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "17",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 198,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 181,
        columnNumber: 3
    }, this);
_c9 = WarningIcon;
const SendIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "2",
                x2: "11",
                y2: "13",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 211,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "22,2 15,22 11,13 2,9",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 212,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 203,
        columnNumber: 3
    }, this);
_c10 = SendIcon;
const ShareIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "5",
                r: "3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 225,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "12",
                r: "3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 226,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "19",
                r: "3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 227,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8.59",
                y1: "13.51",
                x2: "15.42",
                y2: "17.49",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 228,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15.41",
                y1: "6.51",
                x2: "8.59",
                y2: "10.49",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 229,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 217,
        columnNumber: 3
    }, this);
_c11 = ShareIcon;
const LockIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "11",
                width: "18",
                height: "11",
                rx: "2",
                ry: "2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 242,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11V7a5 5 0 0 1 10 0v4",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 243,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 234,
        columnNumber: 3
    }, this);
_c12 = LockIcon;
const InspirationIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22l1.18-7.86-5-4.87 6.91-1.01L12 2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 256,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                fill: color,
                opacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 262,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 248,
        columnNumber: 3
    }, this);
_c13 = InspirationIcon;
const PaletteIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "13.5",
                cy: "6.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 275,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "10.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 276,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "7.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 277,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6.5",
                cy: "12.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 278,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 279,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 267,
        columnNumber: 3
    }, this);
_c14 = PaletteIcon;
const LoadingIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            animation: 'spin 1s linear infinite'
        },
        className: "jsx-6ec09a169201e4bb" + " " + (className || ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: color,
                strokeWidth: "2",
                strokeDasharray: "60",
                strokeDashoffset: "20",
                fill: "none",
                strokeLinecap: "round",
                className: "jsx-6ec09a169201e4bb"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 298,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6ec09a169201e4bb",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 289,
        columnNumber: 3
    }, this);
_c15 = LoadingIcon;
const ReflectionIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 327,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 12h10m-5-4v8",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 333,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 339,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 319,
        columnNumber: 3
    }, this);
_c16 = ReflectionIcon;
const AutoIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v6.5l4.5-4.5M12 22v-6.5l-4.5 4.5M22 12h-6.5l4.5-4.5M2 12h6.5L4 7.5",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 352,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 359,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 344,
        columnNumber: 3
    }, this);
_c17 = AutoIcon;
const DiceIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 372,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 373,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 374,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "16",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 375,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 364,
        columnNumber: 3
    }, this);
_c18 = DiceIcon;
const LockClosedIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "11",
                width: "18",
                height: "10",
                rx: "2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 388,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11V7a5 5 0 0 1 10 0v4",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 389,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "16",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 390,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 380,
        columnNumber: 3
    }, this);
_c19 = LockClosedIcon;
const UserIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 403,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "7",
                r: "4",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 404,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 395,
        columnNumber: 3
    }, this);
_c20 = UserIcon;
const SettingsIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 417,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-3.5L19 9.5m-14 5L7.5 12M16.5 7.5L19 5m-14 14l2.5-2.5",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 418,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 409,
        columnNumber: 3
    }, this);
_c21 = SettingsIcon;
const ComputerIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "3",
                width: "20",
                height: "14",
                rx: "2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 431,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "21",
                x2: "16",
                y2: "21",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 432,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "17",
                x2: "12",
                y2: "21",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 433,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 423,
        columnNumber: 3
    }, this);
_c22 = ComputerIcon;
const TheaterIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12c3-5 7-8 10-8s7 3 10 8c-3 5-7 8-10 8s-7-3-10-8z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 446,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 447,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 2l1.5 4L12 2l2.5 4L16 2",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 448,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 438,
        columnNumber: 3
    }, this);
_c23 = TheaterIcon;
const RocketIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 461,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 462,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 463,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 464,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 453,
        columnNumber: 3
    }, this);
_c24 = RocketIcon;
const EnhancedIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22l1.18-7.86-5-4.87 6.91-1.01L12 2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 477,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8v8m-4-4h8",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 478,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 469,
        columnNumber: 3
    }, this);
_c25 = EnhancedIcon;
const AtmosphereIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 491,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 492,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 16c0-1.1.9-2 2-2s2 .9 2 2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 493,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "8",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 494,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 483,
        columnNumber: 3
    }, this);
_c26 = AtmosphereIcon;
const WriteIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 507,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 508,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 499,
        columnNumber: 3
    }, this);
_c27 = WriteIcon;
const CloseIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 521,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 522,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 513,
        columnNumber: 3
    }, this);
_c28 = CloseIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28;
__turbopack_context__.k.register(_c, "NotificationIcon");
__turbopack_context__.k.register(_c1, "ThoughtIcon");
__turbopack_context__.k.register(_c2, "SparkleIcon");
__turbopack_context__.k.register(_c3, "CommentIcon");
__turbopack_context__.k.register(_c4, "ThumbsUpIcon");
__turbopack_context__.k.register(_c5, "HeartIcon");
__turbopack_context__.k.register(_c6, "ThinkingIcon");
__turbopack_context__.k.register(_c7, "BulbIcon");
__turbopack_context__.k.register(_c8, "StarIcon");
__turbopack_context__.k.register(_c9, "WarningIcon");
__turbopack_context__.k.register(_c10, "SendIcon");
__turbopack_context__.k.register(_c11, "ShareIcon");
__turbopack_context__.k.register(_c12, "LockIcon");
__turbopack_context__.k.register(_c13, "InspirationIcon");
__turbopack_context__.k.register(_c14, "PaletteIcon");
__turbopack_context__.k.register(_c15, "LoadingIcon");
__turbopack_context__.k.register(_c16, "ReflectionIcon");
__turbopack_context__.k.register(_c17, "AutoIcon");
__turbopack_context__.k.register(_c18, "DiceIcon");
__turbopack_context__.k.register(_c19, "LockClosedIcon");
__turbopack_context__.k.register(_c20, "UserIcon");
__turbopack_context__.k.register(_c21, "SettingsIcon");
__turbopack_context__.k.register(_c22, "ComputerIcon");
__turbopack_context__.k.register(_c23, "TheaterIcon");
__turbopack_context__.k.register(_c24, "RocketIcon");
__turbopack_context__.k.register(_c25, "EnhancedIcon");
__turbopack_context__.k.register(_c26, "AtmosphereIcon");
__turbopack_context__.k.register(_c27, "WriteIcon");
__turbopack_context__.k.register(_c28, "CloseIcon");
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
  "backButton": "home-module__i0QXTG__backButton",
  "backLink": "home-module__i0QXTG__backLink",
  "backToAllButton": "home-module__i0QXTG__backToAllButton",
  "cancelButton": "home-module__i0QXTG__cancelButton",
  "cancelReplyButton": "home-module__i0QXTG__cancelReplyButton",
  "center-column": "home-module__i0QXTG__center-column",
  "centerSearchContainer": "home-module__i0QXTG__centerSearchContainer",
  "centerSearchInput": "home-module__i0QXTG__centerSearchInput",
  "centerSearchNoResults": "home-module__i0QXTG__centerSearchNoResults",
  "centerSearchResultItem": "home-module__i0QXTG__centerSearchResultItem",
  "centerSearchResults": "home-module__i0QXTG__centerSearchResults",
  "centerSearchWrapper": "home-module__i0QXTG__centerSearchWrapper",
  "clearSearchButton": "home-module__i0QXTG__clearSearchButton",
  "closePromptButton": "home-module__i0QXTG__closePromptButton",
  "codeBlock": "home-module__i0QXTG__codeBlock",
  "codeBlockContainer": "home-module__i0QXTG__codeBlockContainer",
  "codeContent": "home-module__i0QXTG__codeContent",
  "codeLineNumbers": "home-module__i0QXTG__codeLineNumbers",
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
  "editorContainer": "home-module__i0QXTG__editorContainer",
  "editorHeader": "home-module__i0QXTG__editorHeader",
  "emptyState": "home-module__i0QXTG__emptyState",
  "errorAlert": "home-module__i0QXTG__errorAlert",
  "errorIcon": "home-module__i0QXTG__errorIcon",
  "errorMessage": "home-module__i0QXTG__errorMessage",
  "expanded": "home-module__i0QXTG__expanded",
  "explore-container": "home-module__i0QXTG__explore-container",
  "explore-header": "home-module__i0QXTG__explore-header",
  "explore-section": "home-module__i0QXTG__explore-section",
  "explore-subtitle": "home-module__i0QXTG__explore-subtitle",
  "explore-title": "home-module__i0QXTG__explore-title",
  "fadeIn": "home-module__i0QXTG__fadeIn",
  "feature-desc": "home-module__i0QXTG__feature-desc",
  "feature-large": "home-module__i0QXTG__feature-large",
  "feature-title": "home-module__i0QXTG__feature-title",
  "featured-articles-grid": "home-module__i0QXTG__featured-articles-grid",
  "featured-card": "home-module__i0QXTG__featured-card",
  "featured-content": "home-module__i0QXTG__featured-content",
  "featured-excerpt": "home-module__i0QXTG__featured-excerpt",
  "featured-image": "home-module__i0QXTG__featured-image",
  "featured-label": "home-module__i0QXTG__featured-label",
  "featured-meta": "home-module__i0QXTG__featured-meta",
  "featured-title": "home-module__i0QXTG__featured-title",
  "features": "home-module__i0QXTG__features",
  "focused": "home-module__i0QXTG__focused",
  "follow-button": "home-module__i0QXTG__follow-button",
  "footer": "home-module__i0QXTG__footer",
  "formActions": "home-module__i0QXTG__formActions",
  "formControl": "home-module__i0QXTG__formControl",
  "formGroup": "home-module__i0QXTG__formGroup",
  "formLabel": "home-module__i0QXTG__formLabel",
  "formTextarea": "home-module__i0QXTG__formTextarea",
  "fullWidthContainer": "home-module__i0QXTG__fullWidthContainer",
  "function": "home-module__i0QXTG__function",
  "glass-button": "home-module__i0QXTG__glass-button",
  "glass-button-danger": "home-module__i0QXTG__glass-button-danger",
  "glass-button-primary": "home-module__i0QXTG__glass-button-primary",
  "glass-button-success": "home-module__i0QXTG__glass-button-success",
  "glass-card": "home-module__i0QXTG__glass-card",
  "glass-card-highlight": "home-module__i0QXTG__glass-card-highlight",
  "glass-container": "home-module__i0QXTG__glass-container",
  "glass-content": "home-module__i0QXTG__glass-content",
  "glass-empty-state": "home-module__i0QXTG__glass-empty-state",
  "glass-highlight": "home-module__i0QXTG__glass-highlight",
  "glass-loading": "home-module__i0QXTG__glass-loading",
  "glass-modal": "home-module__i0QXTG__glass-modal",
  "glass-modal-overlay": "home-module__i0QXTG__glass-modal-overlay",
  "glass-nav-button": "home-module__i0QXTG__glass-nav-button",
  "glass-nav-container": "home-module__i0QXTG__glass-nav-container",
  "glass-notification-read": "home-module__i0QXTG__glass-notification-read",
  "glass-notification-unread": "home-module__i0QXTG__glass-notification-unread",
  "glass-profile-container": "home-module__i0QXTG__glass-profile-container",
  "glass-profile-header": "home-module__i0QXTG__glass-profile-header",
  "glass-tag": "home-module__i0QXTG__glass-tag",
  "glass-tag-warning": "home-module__i0QXTG__glass-tag-warning",
  "header": "home-module__i0QXTG__header",
  "hero": "home-module__i0QXTG__hero",
  "hero-subtitle": "home-module__i0QXTG__hero-subtitle",
  "hero-title": "home-module__i0QXTG__hero-title",
  "highlight": "home-module__i0QXTG__highlight",
  "holographic-shine": "home-module__i0QXTG__holographic-shine",
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
  "nav-create": "home-module__i0QXTG__nav-create",
  "nav-explore": "home-module__i0QXTG__nav-explore",
  "nav-home": "home-module__i0QXTG__nav-home",
  "nav-icon": "home-module__i0QXTG__nav-icon",
  "nav-learn": "home-module__i0QXTG__nav-learn",
  "nav-link": "home-module__i0QXTG__nav-link",
  "nav-login": "home-module__i0QXTG__nav-login",
  "nav-news": "home-module__i0QXTG__nav-news",
  "nav-signin": "home-module__i0QXTG__nav-signin",
  "nav-text": "home-module__i0QXTG__nav-text",
  "nav-thoughts": "home-module__i0QXTG__nav-thoughts",
  "nav-trending": "home-module__i0QXTG__nav-trending",
  "no-results": "home-module__i0QXTG__no-results",
  "noComments": "home-module__i0QXTG__noComments",
  "noResults": "home-module__i0QXTG__noResults",
  "number": "home-module__i0QXTG__number",
  "open": "home-module__i0QXTG__open",
  "operator": "home-module__i0QXTG__operator",
  "optionalLabel": "home-module__i0QXTG__optionalLabel",
  "profile-button": "home-module__i0QXTG__profile-button",
  "profile-dropdown": "home-module__i0QXTG__profile-dropdown",
  "profile-dropdown-item": "home-module__i0QXTG__profile-dropdown-item",
  "profile-dropdown-separator": "home-module__i0QXTG__profile-dropdown-separator",
  "profileAvatar": "home-module__i0QXTG__profileAvatar",
  "profileBio": "home-module__i0QXTG__profileBio",
  "profileContent": "home-module__i0QXTG__profileContent",
  "profileHeader": "home-module__i0QXTG__profileHeader",
  "profileInfo": "home-module__i0QXTG__profileInfo",
  "profileName": "home-module__i0QXTG__profileName",
  "profileUsername": "home-module__i0QXTG__profileUsername",
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
  "resultUserAvatar": "home-module__i0QXTG__resultUserAvatar",
  "resultUserInfo": "home-module__i0QXTG__resultUserInfo",
  "resultUserName": "home-module__i0QXTG__resultUserName",
  "resultUserUsername": "home-module__i0QXTG__resultUserUsername",
  "right-sidebar": "home-module__i0QXTG__right-sidebar",
  "roleSelect": "home-module__i0QXTG__roleSelect",
  "roleTag": "home-module__i0QXTG__roleTag",
  "searchContainer": "home-module__i0QXTG__searchContainer",
  "searchIcon": "home-module__i0QXTG__searchIcon",
  "searchInput": "home-module__i0QXTG__searchInput",
  "searchInputWrapper": "home-module__i0QXTG__searchInputWrapper",
  "searchLoadingIcon": "home-module__i0QXTG__searchLoadingIcon",
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
  "shimmer": "home-module__i0QXTG__shimmer",
  "sidebar-collapse-button": "home-module__i0QXTG__sidebar-collapse-button",
  "sidebar-footer": "home-module__i0QXTG__sidebar-footer",
  "sidebar-header": "home-module__i0QXTG__sidebar-header",
  "sidebar-heading": "home-module__i0QXTG__sidebar-heading",
  "sidebarSection": "home-module__i0QXTG__sidebarSection",
  "slideDown": "home-module__i0QXTG__slideDown",
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
  "tag-button": "home-module__i0QXTG__tag-button",
  "tag-button-active": "home-module__i0QXTG__tag-button-active",
  "tag-description": "home-module__i0QXTG__tag-description",
  "tag-header": "home-module__i0QXTG__tag-header",
  "tag-list": "home-module__i0QXTG__tag-list",
  "tags-selector": "home-module__i0QXTG__tags-selector",
  "tagsPreview": "home-module__i0QXTG__tagsPreview",
  "three-column-layout": "home-module__i0QXTG__three-column-layout",
  "toggle-button": "home-module__i0QXTG__toggle-button",
  "toggleRepliesButton": "home-module__i0QXTG__toggleRepliesButton",
  "top-left-logo": "home-module__i0QXTG__top-left-logo",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-client] (ecmascript)");
// import { useEffect, LoadingIcon } from 'react' and './icons/CustomIcons'; // Unused
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/home.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-8 right-8 z-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleToggle,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button-primary']} flex items-center gap-2 px-6 py-4 text-sm font-semibold`,
                title: "Get inspiration from your reflections",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InspirationIcon"], {
                        size: 16,
                        color: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/InspirationWidget.tsx",
                        lineNumber: 72,
                        columnNumber: 21
                    }, this),
                    "Inspiration"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InspirationWidget.tsx",
                lineNumber: 67,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/InspirationWidget.tsx",
            lineNumber: 66,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-8 right-8 z-40 w-96",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-modal']} max-h-96 overflow-hidden`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-highlight']
                }, void 0, false, {
                    fileName: "[project]/src/components/InspirationWidget.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-content'],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-6 border-b border-white/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-stone-800 flex items-center gap-2 font-serif",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulbIcon"], {
                                            size: 18,
                                            color: "#f59e0b"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 88,
                                            columnNumber: 29
                                        }, this),
                                        "Your Reflection Insights"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-stone-500 hover:text-stone-700 text-xl font-bold leading-none",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InspirationWidget.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex p-4 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-tag']} flex-1 text-center py-2 text-sm font-semibold transition-all ${activeTab === 'inspirations' ? 'bg-blue-500/20 text-blue-700 border-blue-300/30' : 'hover:bg-white/20'}`,
                                    onClick: ()=>setActiveTab('inspirations'),
                                    children: [
                                        "Recent Thoughts (",
                                        inspirations.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-tag']} flex-1 text-center py-2 text-sm font-semibold transition-all ${activeTab === 'themes' ? 'bg-blue-500/20 text-blue-700 border-blue-300/30' : 'hover:bg-white/20'}`,
                                    onClick: ()=>setActiveTab('themes'),
                                    children: [
                                        "Writing Themes (",
                                        themes.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InspirationWidget.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 max-h-64 overflow-y-auto",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center py-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InspirationWidget.tsx",
                                        lineNumber: 127,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-stone-600",
                                        children: "Loading your insights..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InspirationWidget.tsx",
                                        lineNumber: 128,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 126,
                                columnNumber: 29
                            }, this) : activeTab === 'inspirations' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: inspirations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 text-stone-500 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThoughtIcon"], {
                                                    size: 16,
                                                    color: "#6b7280"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold",
                                                    children: "No reflections yet!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 134,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-stone-500",
                                            children: "Start reading articles and reflecting to build your inspiration library."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 138,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 133,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-stone-600 mb-4 font-semibold",
                                            children: "Your past reflections that might spark new ideas:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 142,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: inspirations.map((inspiration, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-card']} p-4`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-card-highlight']
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-stone-700 italic mb-2",
                                                                    children: [
                                                                        '"',
                                                                        inspiration.response,
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                                    lineNumber: 148,
                                                                    columnNumber: 57
                                                                }, this),
                                                                inspiration.articleTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-stone-500 mb-3",
                                                                    children: [
                                                                        "From: ",
                                                                        inspiration.articleTitle
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 61
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        const attribution = inspiration.articleTitle ? ` (inspired by "${inspiration.articleTitle}")` : '';
                                                                        handleInsert(`"${inspiration.response}"${attribution} - This reminds me of...`);
                                                                    },
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button-primary']} text-xs px-3 py-1 w-full`,
                                                                    children: "Use as starting point"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 143,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 131,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: themes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 text-stone-500 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaletteIcon"], {
                                                    size: 16,
                                                    color: "#6b7280"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold",
                                                    children: "No themes identified yet!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 174,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-stone-500",
                                            children: "Keep reflecting on articles to discover your writing themes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 178,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                    lineNumber: 173,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-stone-600 mb-4 font-semibold",
                                            children: "Writing prompts based on your reflection patterns:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 182,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: themes.map((theme, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-card']} p-4`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-card-highlight']
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-tag']} inline-block mb-2 text-xs`,
                                                                    children: theme
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-stone-700 mb-3",
                                                                    children: generateWritingPrompt(theme)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleInsert(generateWritingPrompt(theme)),
                                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button-primary']} text-xs px-3 py-1 w-full`,
                                                                    children: "Start writing"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/InspirationWidget.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InspirationWidget.tsx",
                                            lineNumber: 183,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 171,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InspirationWidget.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-white/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: loadInspirationData,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button']} text-sm px-4 py-2 w-full disabled:opacity-50`,
                                disabled: loading,
                                children: "🔄 Refresh insights"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InspirationWidget.tsx",
                                lineNumber: 208,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InspirationWidget.tsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InspirationWidget.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/InspirationWidget.tsx",
            lineNumber: 81,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/InspirationWidget.tsx",
        lineNumber: 80,
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
"[project]/src/components/ArticleComposer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Editor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Editor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InspirationWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/home.module.css [app-client] (css module)");
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
const ArticleComposer = ({ articleId, onUpdateComplete, backToArticleAction, editingTitle })=>{
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
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('ArticleComposer useEffect - articleId:', articleId, 'user:', user ? '[USER_LOGGED_IN]' : 'undefined');
            }
            if (articleId && user) {
                const fetchArticle = {
                    "ArticleComposer.useEffect.fetchArticle": async ()=>{
                        try {
                            if ("TURBOPACK compile-time truthy", 1) {
                                console.log('Fetching article for editing, ID:', articleId);
                            }
                            setIsLoading(true);
                            const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleById"])(articleId);
                            if (("TURBOPACK compile-time value", "development") === 'development' && article) {
                                console.log('Fetched article:', article.title, 'Body length:', article.body?.length);
                            }
                            if (!article) {
                                if ("TURBOPACK compile-time truthy", 1) {
                                    console.log('Article not found');
                                }
                                setError('Article not found');
                                router.push('/');
                                return;
                            }
                            // Verify article ownership
                            if (article.authorId !== user.uid) {
                                if ("TURBOPACK compile-time truthy", 1) {
                                    console.log('User not authorized to edit this article');
                                }
                                setError('You can only edit your own articles');
                                router.push('/');
                                return;
                            }
                            // Set form data
                            if ("TURBOPACK compile-time truthy", 1) {
                                console.log('Setting title:', article.title);
                            }
                            setTitle(article.title);
                            // Process HTML to extract and clean the content
                            const cleanContent = article.body.replace(/data-[\w-]+="[^"]*"/g, '');
                            if ("TURBOPACK compile-time truthy", 1) {
                                console.log('Setting content, length:', cleanContent.length, 'Preview:', cleanContent.substring(0, 100) + '...');
                            }
                            setContent(cleanContent);
                            setTags(article.tags || []);
                            setCoverImage(article.coverImage || '');
                            if ("TURBOPACK compile-time truthy", 1) {
                                console.log('Article data loaded successfully for editing');
                            }
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
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('No articleId, starting with empty content');
                }
                // Editor will start with empty content - no need for document model
                setIsLoading(false);
            } else {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.log('User not logged in, waiting...');
                }
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
    // Save article function
    const saveArticle = async (status = 'drafts')=>{
        if (!user) {
            setError('You must be logged in to save articles');
            return;
        }
        if (!title.trim()) {
            setError('Title is required');
            return;
        }
        try {
            setError('');
            setIsSaving(true);
            const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            const articleData = {
                title: title.trim(),
                body: content,
                tags,
                coverImage,
                status,
                authorId: user.uid,
                authorName: user.displayName || user.email || 'Anonymous',
                slug
            };
            if (articleId) {
                // Update existing article
                try {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.log('Updating article with ID:', articleId);
                    }
                    const updatedArticleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateArticle"])(articleId, articleData);
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.log('Article updated successfully');
                    }
                    setIsSaved(true);
                    if (onUpdateComplete) {
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.log('Calling onUpdateComplete callback instead of navigating');
                        }
                        onUpdateComplete(updatedArticleData);
                    } else {
                        // Only navigate if no callback is provided (standalone editor usage)
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.log('No callback provided, navigating to article page');
                        }
                        setTimeout(()=>{
                            router.push(`/articles/?slug=${slug}`);
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
                    // Redirect to the new article page using slug
                    router.push(`/articles/?slug=${slug}`);
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
            className: "min-h-screen flex items-center justify-center",
            style: {
                background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
                backgroundAttachment: 'fixed'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-loading'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-stone-600 text-lg",
                        children: "Loading your article..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 352,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 350,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ArticleComposer.tsx",
            lineNumber: 346,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-container']} min-h-screen w-full`,
        style: {
            background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
            backgroundAttachment: 'fixed',
            position: 'relative',
            borderRadius: '0px',
            border: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-highlight']
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-container']} fixed top-6 left-6 right-6 z-50 max-w-6xl mx-auto`,
                style: {
                    backdropFilter: 'blur(20px) saturate(180%)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-highlight']
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-content']} flex items-center justify-between p-4`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    backToArticleAction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: backToArticleAction,
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button']} flex items-center gap-2 px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ArticleComposer.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            "Back to Article"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold text-stone-800 font-serif",
                                        children: "Journalite"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-stone-500 text-sm",
                                        children: articleId ? editingTitle ? `Editing: ${editingTitle}` : 'Editing' : 'Writing'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this),
                                    isSaved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-green-600 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "16",
                                                height: "16",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ArticleComposer.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this),
                                            "Saved"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button']} px-4 py-2 text-sm font-semibold disabled:opacity-50`,
                                        onClick: handleSaveDraft,
                                        disabled: isSaving || isPublishing,
                                        children: isSaving ? 'Saving...' : 'Save Draft'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-button-primary']} px-4 py-2 text-sm font-semibold disabled:opacity-50`,
                                        onClick: handlePublish,
                                        disabled: isSaving || isPublishing || !title.trim() || !content.trim(),
                                        children: isPublishing ? 'Publishing...' : articleId ? 'Update' : 'Publish'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['glass-content']} pt-32 pb-16 min-h-screen w-full max-w-4xl mx-auto`,
                style: {
                    paddingLeft: '64px',
                    paddingRight: '64px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: titleRef,
                        value: title,
                        onChange: handleTitleChange,
                        onKeyDown: handleTitleKeyDown,
                        placeholder: "Title",
                        rows: 1,
                        className: "w-full bg-transparent border-none outline-none resize-none overflow-hidden text-5xl font-bold text-stone-800 placeholder-stone-400 font-serif leading-tight mb-8 focus:outline-none",
                        style: {
                            minHeight: '60px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    (coverImage || title.length > 10) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            !coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: coverImage,
                                onChange: handleCoverImageChange,
                                placeholder: "Add a cover image URL...",
                                className: "w-full bg-transparent border-none outline-none text-stone-600 placeholder-stone-400 py-2 border-b border-stone-200 focus:border-stone-400 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 445,
                                columnNumber: 15
                            }, this),
                            coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: coverImage,
                                        alt: "Cover",
                                        className: "w-full h-64 object-cover rounded-2xl mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 455,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: coverImage,
                                        onChange: handleCoverImageChange,
                                        placeholder: "Cover image URL...",
                                        className: "w-full bg-white/70 backdrop-blur border border-stone-200 outline-none text-stone-600 placeholder-stone-400 py-1.5 px-3 rounded-md focus:border-stone-400 transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, this),
                    (tags.length > 0 || title.length > 5) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 flex flex-wrap gap-2 items-center",
                        children: [
                            tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-2.5 py-0.5 bg-blue-100/50 backdrop-blur text-blue-700 rounded-full text-sm font-medium flex items-center gap-1.5",
                                    children: [
                                        tag,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-blue-600 hover:text-blue-800 font-bold text-base leading-none",
                                            onClick: ()=>removeTag(tag),
                                            "aria-label": `Remove ${tag} tag`,
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ArticleComposer.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, tag, true, {
                                    fileName: "[project]/src/components/ArticleComposer.tsx",
                                    lineNumber: 476,
                                    columnNumber: 15
                                }, this)),
                            tags.length < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: tagInputRef,
                                type: "text",
                                value: currentTag,
                                onChange: handleTagInputChange,
                                onKeyDown: handleTagInputKeyDown,
                                onBlur: addTag,
                                placeholder: tags.length === 0 ? "Add tags..." : "Add tag...",
                                className: "bg-transparent border-none outline-none text-stone-600 placeholder-stone-400 min-w-24 py-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 489,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 bg-red-50/80 border border-red-200 rounded-xl text-red-700 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-[500px] w-full",
                        style: {
                            background: 'transparent'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Editor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            ref: editorRef,
                            ...{
                                articleId: articleId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                                initialContent: content,
                                onChange: handleEditorChange,
                                placeholder: "Write your story...",
                                className: "seamless-editor"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleComposer.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InspirationWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onInsert: handleInsertInspiration
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleComposer.tsx",
        lineNumber: 359,
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
"[project]/src/app/create-article/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateArticlePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleComposer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/home.module.css [app-client] (css module)");
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
function CreateArticlePage() {
    _s();
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateArticlePage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "CreateArticlePage.useEffect.unsubscribe": (user)=>{
                    setIsAuthenticated(!!user);
                    setIsLoading(false);
                    // If not authenticated after checking, redirect to login
                    if (!user) {
                        router.push('/login?redirect=/create-article');
                    }
                }
            }["CreateArticlePage.useEffect.unsubscribe"]);
            return ({
                "CreateArticlePage.useEffect": ()=>unsubscribe()
            })["CreateArticlePage.useEffect"];
        }
    }["CreateArticlePage.useEffect"], [
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/create-article/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/create-article/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "You must be logged in to create an article."
                }, void 0, false, {
                    fileName: "[project]/src/app/create-article/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login?redirect=/create-article",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginLink,
                    children: "Login Now"
                }, void 0, false, {
                    fileName: "[project]/src/app/create-article/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/create-article/page.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/create-article/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(CreateArticlePage, "gBxVu1SA7f3pQnwrBAXirG9ngqk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateArticlePage;
var _c;
__turbopack_context__.k.register(_c, "CreateArticlePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a807fbd1._.js.map