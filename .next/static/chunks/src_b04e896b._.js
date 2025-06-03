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
    // Code block node
    code_block: {
        content: 'text*',
        marks: '',
        group: 'block',
        code: true,
        defining: true,
        parseDOM: [
            {
                tag: 'pre',
                preserveWhitespace: 'full'
            }
        ],
        toDOM () {
            return [
                'pre',
                [
                    'code',
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
    console.log('Building input rules plugin...');
    const rules = [];
    // 1) Smart text rules (quotes, em-dash, ellipsis) - but be more conservative
    // Only add ellipsis to avoid conflicts with typing
    rules.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ellipsis"]);
    console.log('Added basic smart text rules');
    // 2) Bullet list: typing "- " at start of line (more precise pattern to avoid cursor jumping)
    const bulletRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^([-+*])\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list, (match)=>null, (match, node)=>({
            tight: true
        }));
    rules.push(bulletRule);
    console.log('Added bullet list rule');
    // 3) Ordered list: typing "1. " at start of line (more precise)
    const orderedRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^(\d+)\.\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list, (match)=>({
            order: +match[1]
        }), (match, node)=>({
            tight: true
        }));
    rules.push(orderedRule);
    console.log('Added ordered list rule');
    // 4) Headings: typing "#" to "######" followed by space (FIXED: more precise to prevent cursor jumping)
    const headingRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])(/^(#{1,6})\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, (match)=>({
            level: match[1].length
        }));
    rules.push(headingRule);
    console.log('Added heading rule');
    // 5) Blockquote: typing "> " at start of line (more precise)
    const blockquoteRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])(/^>\s$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.blockquote);
    rules.push(blockquoteRule);
    console.log('Added blockquote rule');
    // 6) Code block: typing "```" at start of line (no space needed for this one)
    const codeRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])(/^```$/, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.code_block);
    rules.push(codeRule);
    console.log('Added code block rule');
    console.log('Total input rules created:', rules.length);
    const plugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$inputrules$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputRules"])({
        rules
    });
    console.log('Input rules plugin created successfully');
    return plugin;
}
// Build keymap with common shortcuts
function buildKeymap() {
    const keys = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseKeymap"],
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
        // Enhanced list item navigation
        'Enter': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
        'Mod-[': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
        'Mod-]': (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sinkListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item),
        // Simplified backspace handling
        'Backspace': (state, dispatch, view)=>{
            const { $from, empty } = state.selection;
            if (empty && $from.parent.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item && $from.parentOffset === 0 && $from.parent.content.size === 0) {
                if (dispatch) {
                    const lifted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liftListItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.list_item)(state, dispatch);
                    if (!lifted) {
                        const tr = state.tr;
                        const range = $from.blockRange();
                        if (range) {
                            tr.setBlockType(range.start, range.end, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph);
                            dispatch(tr);
                        }
                    }
                }
                return true;
            }
            return false; // Fall back to default
        },
        // History
        'Mod-z': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undo"],
        'Mod-y': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redo"],
        'Shift-Mod-z': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redo"]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keymap"])(keys);
}
function createPlugins() {
    console.log('Creating ProseMirror plugins...');
    const inputRulesPlugin = buildInputRulesPlugin();
    console.log('Input rules plugin ready');
    const historyPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$history$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["history"])();
    console.log('History plugin ready');
    const keymapPlugin = buildKeymap();
    console.log('Keymap plugin ready');
    const dropCursorPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$dropcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dropCursor"])();
    console.log('Drop cursor plugin ready');
    const gapCursorPlugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$gapcursor$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gapCursor"])();
    console.log('Gap cursor plugin ready');
    console.log('Exit heading plugin ready');
    const allPlugins = [
        // Input rules MUST come before keymap for auto-formatting to work
        inputRulesPlugin,
        historyPlugin,
        keymapPlugin,
        dropCursorPlugin,
        gapCursorPlugin,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$exitHeadingPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exitHeadingPlugin"]
    ];
    console.log('All plugins created. Total count:', allPlugins.length);
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
  "editor": "Editor-module__x7ssIG__editor",
  "editorContent": "Editor-module__x7ssIG__editorContent",
  "keyboardHint": "Editor-module__x7ssIG__keyboardHint",
  "loading": "Editor-module__x7ssIG__loading",
  "prosemirrorEditor": "Editor-module__x7ssIG__prosemirrorEditor",
  "slideInFromTop": "Editor-module__x7ssIG__slideInFromTop",
  "toolbar": "Editor-module__x7ssIG__toolbar",
  "toolbarButton": "Editor-module__x7ssIG__toolbarButton",
  "toolbarGroup": "Editor-module__x7ssIG__toolbarGroup",
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
 */ const Editor = ({ articleId, initialContent = '', onChange, placeholder = 'Tell your story...', className = '' })=>{
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Initialize ProseMirror editor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            // Guard against SSR - ProseMirror needs browser environment
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            console.log('Editor: useEffect running on client');
            console.log('Editor: editorRef.current:', editorRef.current);
            console.log('Editor: viewRef.current:', viewRef.current);
            if (!editorRef.current) {
                console.log('Editor: editorRef.current is null, cannot initialize');
                return;
            }
            if (viewRef.current) {
                console.log('Editor: viewRef.current already exists, skipping');
                return;
            }
            try {
                console.log('Editor: Starting initialization...');
                // Parse initial content
                let initialDoc;
                try {
                    if (initialContent) {
                        // Try to parse as JSON first, then as HTML
                        if (initialContent.startsWith('{')) {
                            const jsonDoc = JSON.parse(initialContent);
                            initialDoc = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodeFromJSON(jsonDoc);
                        } else {
                            // Clean HTML and parse
                            const cleanHtml = initialContent.replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '').replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
                            initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseHTML"])(cleanHtml);
                        }
                    } else {
                        initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyDocument"])();
                    }
                    console.log('Editor: Initial document created successfully');
                } catch (error) {
                    console.error('Error parsing initial content:', error);
                    initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyDocument"])();
                }
                // Validate that we have a valid document
                if (!initialDoc) {
                    console.error('Failed to create initial document');
                    initialDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEmptyDocument"])();
                }
                console.log('Editor: Creating editor state...');
                // Create editor state
                const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorState"].create({
                    doc: initialDoc,
                    plugins: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$plugins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlugins"])()
                });
                console.log('Editor: Creating editor view...');
                // Create editor view
                const view = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorView"](editorRef.current, {
                    state,
                    dispatchTransaction: {
                        "Editor.useEffect": (transaction)=>{
                            const newState = view.state.apply(transaction);
                            view.updateState(newState);
                            // 1) fire onChange only when the *document* changed
                            if (transaction.docChanged && onChange) {
                                const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeToHTML"])(newState.doc);
                                const json = newState.doc.toJSON();
                                onChange(html, json);
                            }
                            // 2) but force a React re-render whenever *either*
                            //    the document OR the selection changed
                            if (transaction.docChanged || transaction.selectionSet) {
                                forceUpdate({
                                    "Editor.useEffect": (v)=>v + 1
                                }["Editor.useEffect"]); // <- one line does the trick
                            }
                        }
                    }["Editor.useEffect"],
                    attributes: {
                        class: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prosemirrorEditor} prosemirror-content`,
                        'data-placeholder': placeholder,
                        'contenteditable': 'true',
                        'role': 'textbox',
                        'aria-multiline': 'true'
                    },
                    editable: {
                        "Editor.useEffect": ()=>true
                    }["Editor.useEffect"],
                    handleDOMEvents: {
                        // Ensure proper focus handling
                        focus: {
                            "Editor.useEffect": (view, event)=>{
                                console.log('Editor focused');
                                return false; // Let ProseMirror handle it
                            }
                        }["Editor.useEffect"],
                        blur: {
                            "Editor.useEffect": (view, event)=>{
                                console.log('Editor blurred');
                                return false; // Let ProseMirror handle it
                            }
                        }["Editor.useEffect"]
                    }
                });
                console.log('Editor: EditorView created successfully');
                viewRef.current = view;
                setIsReady(true);
                console.log('Editor: setIsReady(true) called - editor should now be visible');
            } catch (error) {
                console.error('Error initializing editor:', error);
                console.error('Error details:', error.message, error.stack);
                // Set ready to true anyway to show the editor, even if there was an error
                setIsReady(true);
            }
            // Cleanup function
            return ({
                "Editor.useEffect": ()=>{
                    if (viewRef.current) {
                        console.log('Editor: Cleaning up view');
                        viewRef.current.destroy();
                        viewRef.current = null;
                    }
                }
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], []);
    // Toolbar action handlers - simplified
    const toggleBold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleBold]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.strong)(state, dispatch, viewRef.current);
            viewRef.current.focus();
        }
    }["Editor.useCallback[toggleBold]"], []);
    const toggleItalic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleItalic]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleMark"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.em)(state, dispatch, viewRef.current);
            viewRef.current.focus();
        }
    }["Editor.useCallback[toggleItalic]"], []);
    const setHeading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setHeading]": (level)=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingCmd"])(level)(state, dispatch, viewRef.current);
            viewRef.current.focus();
        }
    }["Editor.useCallback[setHeading]"], []);
    const setParagraph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setParagraph]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paragraphCmd"])()(state, dispatch, viewRef.current);
            viewRef.current.focus();
        }
    }["Editor.useCallback[setParagraph]"], []);
    const setBlockquote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setBlockquote]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$commands$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleBlockquote"])(state, dispatch, viewRef.current);
            viewRef.current.focus();
        }
    }["Editor.useCallback[setBlockquote]"], [
        forceUpdate
    ]);
    const setCodeBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[setCodeBlock]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBlockType"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.code_block)(state, dispatch, viewRef.current);
            viewRef.current.focus();
        }
    }["Editor.useCallback[setCodeBlock]"], []);
    const toggleBulletList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleBulletList]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.bullet_list)(state, dispatch, viewRef.current);
            viewRef.current.focus();
        }
    }["Editor.useCallback[toggleBulletList]"], []);
    const toggleOrderedList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[toggleOrderedList]": ()=>{
            if (!viewRef.current) return;
            const { state, dispatch } = viewRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapInList"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.ordered_list)(state, dispatch, viewRef.current);
            viewRef.current.focus();
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
    }["Editor.useCallback[isMarkActive]"], [
        forceUpdate
    ]);
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
    }["Editor.useCallback[isBlockActive]"], [
        forceUpdate
    ]);
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
    }["Editor.useCallback[isInBlockquote]"], [
        forceUpdate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editor} ${className}`,
        children: [
            isReady ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isMarkActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.strong) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: toggleBold,
                                title: "Bold (⌘/Ctrl+B)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "B"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 300,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 295,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isMarkActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].marks.em) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: toggleItalic,
                                title: "Italic (⌘/Ctrl+I)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "I"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Editor.jsx",
                                    lineNumber: 307,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 302,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 294,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.paragraph) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: setParagraph,
                                title: "Paragraph (⌘/Ctrl+0)",
                                children: "P"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 313,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, {
                                    level: 1
                                }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setHeading(1),
                                title: "Heading 1 (⌘/Ctrl+Shift+1)",
                                children: "H1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 320,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, {
                                    level: 2
                                }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setHeading(2),
                                title: "Heading 2 (⌘/Ctrl+Shift+2)",
                                children: "H2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 327,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.heading, {
                                    level: 3
                                }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setHeading(3),
                                title: "Heading 3 (⌘/Ctrl+Shift+3)",
                                children: "H3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 334,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 312,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                onClick: toggleBulletList,
                                title: "Bullet List",
                                children: "• List"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 345,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                onClick: toggleOrderedList,
                                title: "Ordered List",
                                children: "1. List"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 352,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isInBlockquote() ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: setBlockquote,
                                title: "Blockquote (⌘/Ctrl+>)",
                                children: '" Quote'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 359,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isBlockActive(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$editor$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"].nodes.code_block) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: setCodeBlock,
                                title: "Code Block",
                                children: "</>"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 366,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 344,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarGroup,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                            onClick: insertImage,
                            title: "Insert Image",
                            children: "🖼️ Image"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Editor.jsx",
                            lineNumber: 377,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 376,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                onClick: undoCommand,
                                title: "Undo (⌘/Ctrl+Z)",
                                children: "↶ Undo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 388,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                onClick: redoCommand,
                                title: "Redo (⌘/Ctrl+Y)",
                                children: "↷ Redo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 395,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 387,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keyboardHint,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                children: "⌘B"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 406,
                                columnNumber: 25
                            }, this),
                            " Bold   ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                children: "⌘I"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 406,
                                columnNumber: 51
                            }, this),
                            " Italic   ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                children: "⌘⇧1-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Editor.jsx",
                                lineNumber: 406,
                                columnNumber: 79
                            }, this),
                            " Headings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Editor.jsx",
                        lineNumber: 405,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 292,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading editor..."
            }, void 0, false, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 410,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: editorRef,
                className: `ProseMirror ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$Editor$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorContent}`,
                "aria-label": "Rich text editor",
                style: {
                    minHeight: '300px',
                    opacity: isReady ? 1 : 0.5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Editor.jsx",
                lineNumber: 414,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Editor.jsx",
        lineNumber: 289,
        columnNumber: 9
    }, this);
};
_s(Editor, "KLI752btygXHiwN8Xol70/vP3v8=");
_c = Editor;
const __TURBOPACK__default__export__ = Editor;
var _c;
__turbopack_context__.k.register(_c, "Editor");
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
            if (articleId && user) {
                const fetchArticle = {
                    "ArticleComposer.useEffect.fetchArticle": async ()=>{
                        try {
                            setIsLoading(true);
                            const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleById"])(articleId);
                            if (!article) {
                                setError('Article not found');
                                router.push('/');
                                return;
                            }
                            // Verify article ownership
                            if (article.authorId !== user.uid) {
                                setError('You can only edit your own articles');
                                router.push('/');
                                return;
                            }
                            // Set form data
                            setTitle(article.title);
                            // Process HTML to extract and clean the content
                            const cleanContent = article.body.replace(/data-[\w-]+="[^"]*"/g, '');
                            setContent(cleanContent);
                            setTags(article.tags || []);
                            setCoverImage(article.coverImage || '');
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
                // Editor will start with empty content - no need for document model
                setIsLoading(false);
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
            // Only update if content has actually changed
            if (html !== content) {
                setContent(html);
                // Reset saved status when content changes
                if (isSaved) {
                    setIsSaved(false);
                }
            }
        }
    }["ArticleComposer.useCallback[handleEditorChange]"], [
        content,
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
                        onUpdateComplete(updatedArticleData);
                    }
                    // THIS IS CRITICAL: Go directly to the article page by ID (not slug) to avoid issues
                    // when title/slug changes
                    setTimeout(()=>{
                        console.log('Applying changes immediately and redirecting to article ID page');
                        // Direct navigation to our ID-based view route
                        window.location.href = `/articles/${articleId}/view?updated=true&time=${Date.now()}`;
                        // Add a fallback in case something goes wrong - but use ID-based routing
                        setTimeout(()=>{
                            if (window.location.pathname.includes('/edit')) {
                                console.log('Fallback navigation to ID-based article page');
                                window.location.href = `/articles/${articleId}?updated=true&time=${Date.now()}`;
                            }
                        }, 2000);
                    }, 1000);
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
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].composerLoading,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleComposer.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading article..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleComposer.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ArticleComposer.tsx",
            lineNumber: 298,
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
                            lineNumber: 310,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 309,
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
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleComposer.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    "Saved"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionButton,
                                onClick: handleSaveDraft,
                                disabled: isSaving || isPublishing,
                                children: "Save draft"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].publishButton,
                                onClick: handlePublish,
                                disabled: isSaving || isPublishing || !title.trim() || !content.trim(),
                                children: articleId ? 'Update' : 'Publish'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 308,
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
                        lineNumber: 344,
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
                                lineNumber: 356,
                                columnNumber: 11
                            }, this),
                            coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverImagePreview,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: coverImage,
                                    alt: "Cover preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleComposer.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleComposer.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 355,
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
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, tag, true, {
                                    fileName: "[project]/src/components/ArticleComposer.tsx",
                                    lineNumber: 373,
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
                                lineNumber: 386,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 400,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleComposer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Editor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            articleId: articleId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                            initialContent: content,
                            onChange: handleEditorChange,
                            placeholder: "Tell your story..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleComposer.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleComposer.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleComposer.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleComposer.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, this);
};
_s(ArticleComposer, "yXpDUDWHW84dpObw0DDaKhBHGeU=", false, function() {
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
  "follow-button": "home-module__i0QXTG__follow-button",
  "footer": "home-module__i0QXTG__footer",
  "formActions": "home-module__i0QXTG__formActions",
  "formControl": "home-module__i0QXTG__formControl",
  "formGroup": "home-module__i0QXTG__formGroup",
  "formLabel": "home-module__i0QXTG__formLabel",
  "formTextarea": "home-module__i0QXTG__formTextarea",
  "fullWidthContainer": "home-module__i0QXTG__fullWidthContainer",
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
"[project]/src/app/edit-article/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditArticlePage)
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
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Create a cached version of useSearchParams
const getSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cache"])(_s(()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    return searchParams;
}, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
}));
// Component to safely use search params inside Suspense
function EditArticleContent() {
    _s1();
    // Get search params using the cached function
    const params = getSearchParams();
    const articleId = params?.get('id') || '';
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditArticleContent.useEffect": ()=>{
            // Check if user is authenticated
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "EditArticleContent.useEffect.unsubscribe": (user)=>{
                    const isAuth = !!user;
                    setIsAuthenticated(isAuth);
                    setIsLoading(false);
                    // Redirect to login if not authenticated
                    if (!isAuth) {
                        router.push(`/login?redirect=/edit-article?id=${articleId}`);
                    }
                }
            }["EditArticleContent.useEffect.unsubscribe"]);
            return ({
                "EditArticleContent.useEffect": ()=>unsubscribe()
            })["EditArticleContent.useEffect"];
        }
    }["EditArticleContent.useEffect"], [
        articleId,
        router
    ]);
    // Check if we have an article ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditArticleContent.useEffect": ()=>{
            if (!isLoading && isAuthenticated && !articleId) {
                router.push('/my-thoughts');
            }
        }
    }["EditArticleContent.useEffect"], [
        articleId,
        isAuthenticated,
        isLoading,
        router
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/edit-article/page.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/edit-article/page.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Please log in to edit articles."
            }, void 0, false, {
                fileName: "[project]/src/app/edit-article/page.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/edit-article/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    if (!articleId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "No article ID provided."
            }, void 0, false, {
                fileName: "[project]/src/app/edit-article/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/edit-article/page.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullWidthContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/my-thoughts",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                        children: "← Back to My Thoughts"
                    }, void 0, false, {
                        fileName: "[project]/src/app/edit-article/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Edit Article"
                    }, void 0, false, {
                        fileName: "[project]/src/app/edit-article/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/edit-article/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    articleId: articleId
                }, void 0, false, {
                    fileName: "[project]/src/app/edit-article/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/edit-article/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/edit-article/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s1(EditArticleContent, "L8i7ZY4TYxwHK5pyJqk1wbjAfSA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EditArticleContent;
function EditArticlePage() {
    // Wrap the component that uses useSearchParams in Suspense
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/edit-article/page.tsx",
                lineNumber: 92,
                columnNumber: 59
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/edit-article/page.tsx",
            lineNumber: 92,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditArticleContent, {}, void 0, false, {
            fileName: "[project]/src/app/edit-article/page.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/edit-article/page.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c1 = EditArticlePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "EditArticleContent");
__turbopack_context__.k.register(_c1, "EditArticlePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_b04e896b._.js.map