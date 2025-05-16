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
async function getArticles(includeDrafts = false) {
    try {
        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
        let q;
        if (includeDrafts) {
            // Return all articles regardless of status
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        } else {
            // Only return published articles
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        }
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const articles = [];
        querySnapshot.forEach((doc)=>{
            const articleData = doc.data();
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
async function getArticleById(id) {
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', id);
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            };
        } else {
            throw new Error('Article not found');
        }
    } catch (error) {
        console.error('Error getting article:', error);
        throw error;
    }
}
async function getArticleBySlug(slug) {
    try {
        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('slug', '==', slug));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        if (querySnapshot.empty) {
            throw new Error('Article not found');
        }
        const docSnap = querySnapshot.docs[0];
        return {
            id: docSnap.id,
            ...docSnap.data()
        };
    } catch (error) {
        console.error('Error getting article by slug:', error);
        throw error;
    }
}
async function createArticle(article) {
    try {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            throw new Error('You must be logged in to create an article');
        }
        // Create the basic article object with required fields
        const newArticle = {
            title: article.title,
            body: article.body,
            slug: article.slug || article.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            authorId: user.uid,
            authorName: user.displayName || 'Anonymous',
            tags: article.tags || [],
            status: article.status || 'published' // Default to published if not specified
        };
        // Only add optional fields if they exist and have values
        if (article.coverImage) {
            newArticle.coverImage = article.coverImage;
        }
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles'), newArticle);
        return {
            id: docRef.id,
            ...newArticle
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
        // First check if the article exists and belongs to the current user
        const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId);
        const articleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
        if (!articleSnap.exists()) {
            throw new Error('Article not found');
        }
        const articleData1 = articleSnap.data();
        if (articleData1.authorId !== user.uid) {
            throw new Error('You can only edit your own articles');
        }
        // Create the update object
        const updateData = {};
        // Only include fields that were provided
        if (articleData.title !== undefined) {
            updateData.title = articleData.title;
            // If title changed, update slug as well (unless slug is explicitly provided)
            if (articleData.slug === undefined) {
                updateData.slug = articleData.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(articleRef, updateData);
        // Return the updated article
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
        // Get article information for the notification
        const articleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId);
        const articleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(articleRef);
        if (articleSnap.exists()) {
            const articleData = articleSnap.data();
            // Trigger notification to the article owner
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommentNotification"])(articleData.authorId, articleId, articleData.slug || '', articleData.title || 'Article', docRef.id, content);
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
        // Add the reply to the replies array
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
            replies: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(newReply)
        });
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
        // Check if the user already liked the comment
        const likes = commentData.likes || [];
        const hasLiked = likes.includes(userId);
        if (hasLiked) {
            // Remove the like
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
                likes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayRemove"])(userId)
            });
            // Get updated likes
            const updatedSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
            const updatedData = updatedSnap.data();
            return {
                success: true,
                action: 'unliked',
                likes: updatedData.likes,
                count: updatedData.likes.length
            };
        } else {
            // Add the like
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
                likes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(userId)
            });
            // Get updated likes
            const updatedSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(commentRef);
            const updatedData = updatedSnap.data();
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
        // Check if the user is the comment author
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
        // Get the article to check ownership
        const articleDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId));
        if (!articleDoc.exists()) {
            throw new Error('Article not found');
        }
        const articleData = articleDoc.data();
        // Only the author can delete their article
        if (articleData.authorId !== user.uid) {
            throw new Error('You can only delete your own articles');
        }
        // Delete the article
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles', articleId));
        return {
            success: true,
            message: 'Article deleted successfully'
        };
    } catch (error) {
        console.error('Error deleting article:', error);
        throw error;
    }
}
async function getArticlesByTag(tag) {
    try {
        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
        // Query for articles that have the specified tag and are published
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('tags', 'array-contains', tag), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const articles = [];
        querySnapshot.forEach((doc)=>{
            const articleData = doc.data();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/ArticleForm.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "activeButton": "ArticleForm-module__2UFh2G__activeButton",
  "articleForm": "ArticleForm-module__2UFh2G__articleForm",
  "articleFormContainer": "ArticleForm-module__2UFh2G__articleFormContainer",
  "articleFormHeader": "ArticleForm-module__2UFh2G__articleFormHeader",
  "articleFormSubtitle": "ArticleForm-module__2UFh2G__articleFormSubtitle",
  "articleFormTitle": "ArticleForm-module__2UFh2G__articleFormTitle",
  "cancelButton": "ArticleForm-module__2UFh2G__cancelButton",
  "characterCount": "ArticleForm-module__2UFh2G__characterCount",
  "characterWarning": "ArticleForm-module__2UFh2G__characterWarning",
  "editorToolbar": "ArticleForm-module__2UFh2G__editorToolbar",
  "errorAlert": "ArticleForm-module__2UFh2G__errorAlert",
  "errorIcon": "ArticleForm-module__2UFh2G__errorIcon",
  "formActions": "ArticleForm-module__2UFh2G__formActions",
  "formControl": "ArticleForm-module__2UFh2G__formControl",
  "formGroup": "ArticleForm-module__2UFh2G__formGroup",
  "formHint": "ArticleForm-module__2UFh2G__formHint",
  "formLabel": "ArticleForm-module__2UFh2G__formLabel",
  "formTextarea": "ArticleForm-module__2UFh2G__formTextarea",
  "imagePreview": "ArticleForm-module__2UFh2G__imagePreview",
  "loading": "ArticleForm-module__2UFh2G__loading",
  "loadingSpinner": "ArticleForm-module__2UFh2G__loadingSpinner",
  "optionalLabel": "ArticleForm-module__2UFh2G__optionalLabel",
  "richTextEditor": "ArticleForm-module__2UFh2G__richTextEditor",
  "spin": "ArticleForm-module__2UFh2G__spin",
  "statusDropdown": "ArticleForm-module__2UFh2G__statusDropdown",
  "submitButton": "ArticleForm-module__2UFh2G__submitButton",
  "tag": "ArticleForm-module__2UFh2G__tag",
  "tagsPreview": "ArticleForm-module__2UFh2G__tagsPreview",
  "toolbarButton": "ArticleForm-module__2UFh2G__toolbarButton",
});
}}),
"[project]/src/components/ArticleForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticleForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$bold$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-bold/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$italic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-italic/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-code/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
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
const ArticleForm = ()=>{
    _s();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [coverImage, setCoverImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('published');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bodyCharCount, setBodyCharCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Initialize TipTap editor
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                heading: {
                    levels: [
                        1,
                        2,
                        3
                    ]
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$bold$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$italic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"].configure({
                openOnClick: false
            })
        ],
        content: '',
        onUpdate: {
            "ArticleForm.useEditor[editor]": ({ editor })=>{
                const html = editor.getHTML();
                setBody(html);
                // Count approximate characters (excluding HTML tags)
                const textContent = editor.getText();
                setBodyCharCount(textContent.length);
            }
        }["ArticleForm.useEditor[editor]"],
        // Enable keyboard shortcuts
        enableInputRules: true,
        enablePasteRules: true
    });
    // Helper function to set link
    const setLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleForm.useCallback[setLink]": ()=>{
            const url = window.prompt('URL');
            if (url) {
                editor?.chain().focus().extendMarkRange('link').setLink({
                    href: url
                }).run();
            }
        }
    }["ArticleForm.useCallback[setLink]"], [
        editor
    ]);
    // Helper function to add image
    const addImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleForm.useCallback[addImage]": ()=>{
            const url = window.prompt('Image URL');
            if (url) {
                editor?.chain().focus().setImage({
                    src: url
                }).run();
            }
        }
    }["ArticleForm.useCallback[addImage]"], [
        editor
    ]);
    // Custom keyboard shortcut handler
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleForm.useCallback[handleKeyDown]": (event)=>{
            // Ctrl+Shift+I for image insertion
            if (event.ctrlKey && event.shiftKey && event.key === 'I') {
                event.preventDefault();
                addImage();
            }
        }
    }["ArticleForm.useCallback[handleKeyDown]"], [
        addImage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleForm.useEffect": ()=>{
            // Clean up editor on unmount
            return ({
                "ArticleForm.useEffect": ()=>{
                    editor?.destroy();
                }
            })["ArticleForm.useEffect"];
        }
    }["ArticleForm.useEffect"], [
        editor
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!title || !body) {
            setError('Title and content are required');
            return;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
            setError('You must be logged in to create an article');
            return;
        }
        try {
            setIsSubmitting(true);
            setError('');
            // Convert tags string to array
            const tagsArray = tags.split(',').map((tag)=>tag.trim()).filter((tag)=>tag !== '');
            // Create article in Firestore - create a base article object
            const articleData = {
                title,
                body,
                tags: tagsArray,
                status
            };
            // Only add the coverImage field if it has a value
            if (coverImage.trim() !== '') {
                articleData.coverImage = coverImage;
            }
            // Create the article with the cleaned data
            const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createArticle"])(articleData);
            // Redirect to the appropriate page based on the status
            if (status === 'published') {
                router.push(`/articles?slug=${article.slug}`);
            } else {
                router.push('/my-thoughts');
            }
        } catch (error) {
            console.error('Error creating article:', error);
            setError('Failed to create article. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    // Writing tips
    const writingTips = [
        "Use a clear, compelling title that captures interest",
        "Break your content into smaller paragraphs for readability",
        "Add relevant tags to help readers discover your article",
        "Consider adding a cover image to make your article stand out"
    ];
    // Get a random tip to display
    const randomTip = writingTips[Math.floor(Math.random() * writingTips.length)];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleFormContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleFormHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleFormTitle,
                        children: "Create Your Story"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleFormSubtitle,
                        children: "Share your thoughts, ideas, and insights with the world"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleForm.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorAlert,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorIcon,
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleForm.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleForm,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "title",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                children: "Title"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "title",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                required: true,
                                placeholder: "Enter a captivating title for your article...",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formControl,
                                maxLength: 100
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHint,
                                children: "A good title is clear, specific, and engaging"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "coverImage",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                children: [
                                    "Cover Image URL ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionalLabel,
                                        children: "optional"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 186,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                id: "coverImage",
                                value: coverImage,
                                onChange: (e)=>setCoverImage(e.target.value),
                                placeholder: "https://example.com/image.jpg",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formControl
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHint,
                                children: "Add a cover image to make your article visually appealing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePreview,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: coverImage,
                                    alt: "Cover preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleForm.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "tags",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                children: [
                                    "Tags ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionalLabel,
                                        children: "comma separated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 206,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "tags",
                                value: tags,
                                onChange: (e)=>setTags(e.target.value),
                                placeholder: "technology, news, science, learning",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formControl
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHint,
                                children: "Tags help readers discover your content"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagsPreview,
                                children: tags.split(',').map((tag, index)=>tag.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                        children: tag.trim()
                                    }, index, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDropdown}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "status",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "status",
                                value: status,
                                onChange: (e)=>setStatus(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formControl,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "published",
                                        children: "Published (visible to everyone)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "drafts",
                                        children: "Save as Draft (only visible to you)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "body",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                children: "Content"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorToolbar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleHeading({
                                                level: 1
                                            }).run(),
                                        className: editor?.isActive('heading', {
                                            level: 1
                                        }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Heading 1 (Ctrl+Alt+1)",
                                        children: "H1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleHeading({
                                                level: 2
                                            }).run(),
                                        className: editor?.isActive('heading', {
                                            level: 2
                                        }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Heading 2 (Ctrl+Alt+2)",
                                        children: "H2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleHeading({
                                                level: 3
                                            }).run(),
                                        className: editor?.isActive('heading', {
                                            level: 3
                                        }) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Heading 3 (Ctrl+Alt+3)",
                                        children: "H3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleBold().run(),
                                        className: editor?.isActive('bold') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Bold (Ctrl+B)",
                                        children: "Bold"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleItalic().run(),
                                        className: editor?.isActive('italic') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Italic (Ctrl+I)",
                                        children: "Italic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleCode().run(),
                                        className: editor?.isActive('code') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Code (Ctrl+E)",
                                        children: "Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: setLink,
                                        className: editor?.isActive('link') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Link (Ctrl+K)",
                                        children: "Link"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: addImage,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Insert Image",
                                        children: "Image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleBulletList().run(),
                                        className: editor?.isActive('bulletList') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Bullet List (Ctrl+Shift+8)",
                                        children: "Bullet List"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>editor?.chain().focus().toggleOrderedList().run(),
                                        className: editor?.isActive('orderedList') ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                        title: "Numbered List (Ctrl+Shift+7)",
                                        children: "Numbered List"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleForm.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                                editor: editor,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].richTextEditor,
                                onKeyDown: handleKeyDown
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].characterCount,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: bodyCharCount > 3000 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].characterWarning : '',
                                    children: [
                                        bodyCharCount,
                                        " characters"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ArticleForm.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHint,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "✨ Tip: ",
                                        randomTip
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ArticleForm.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                disabled: isSubmitting,
                                children: isSubmitting ? status === 'published' ? 'Publishing...' : 'Saving...' : status === 'published' ? 'Publish Article' : 'Save as Draft'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleForm.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleForm.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleForm.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleForm.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
};
_s(ArticleForm, "cch9iFz/DYXJH9vurKqlvmmCB70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = ArticleForm;
const __TURBOPACK__default__export__ = ArticleForm;
var _c;
__turbopack_context__.k.register(_c, "ArticleForm");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleForm.tsx [app-client] (ecmascript)");
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
    const [isSidebarCollapsed, setIsSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateArticlePage.useEffect": ()=>{
            // Set window width on client side
            setWindowWidth(window.innerWidth);
            const handleResize = {
                "CreateArticlePage.useEffect.handleResize": ()=>{
                    setWindowWidth(window.innerWidth);
                }
            }["CreateArticlePage.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "CreateArticlePage.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["CreateArticlePage.useEffect"];
        }
    }["CreateArticlePage.useEffect"], []);
    // Use different default sidebar state based on screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateArticlePage.useEffect": ()=>{
            setIsSidebarCollapsed(windowWidth < 768);
        }
    }["CreateArticlePage.useEffect"], [
        windowWidth
    ]);
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
    const toggleSidebar = ()=>{
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    const handleLogout = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/create-article/page.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/create-article/page.tsx",
            lineNumber: 64,
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
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login?redirect=/create-article",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginLink,
                    children: "Login Now"
                }, void 0, false, {
                    fileName: "[project]/src/app/create-article/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/create-article/page.tsx",
            lineNumber: 72,
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
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['toggle-button'],
                                onClick: toggleSidebar,
                                "aria-label": isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar',
                                children: isSidebarCollapsed ? '→' : '←'
                            }, void 0, false, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/create-article/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['vertical-nav'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-home']}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/my-thoughts",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-thoughts']}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "My Thoughts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/create-article",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-create']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "Create Article"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/explore",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-explore']}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/my-profile",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-profile']}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "My Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-link']} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-logout']}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-icon'],
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "Log out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/create-article/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/create-article/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['center-column']} ${isSidebarCollapsed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['expanded'] : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/create-article/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/create-article/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['right-sidebar'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['sidebar-heading'],
                        children: "Tips for Writing"
                    }, void 0, false, {
                        fileName: "[project]/src/app/create-article/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['writing-tips'],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['writing-tip'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "📝 Keep it clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Use simple language and short paragraphs for better readability."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['writing-tip'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "🔍 Check your facts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Ensure your information is accurate and from reliable sources."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['writing-tip'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "📊 Add context"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Help readers understand the bigger picture around your topic."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['writing-tip'],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "📸 Visual appeal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Adding a cover image can make your article more engaging."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/create-article/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/create-article/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/create-article/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/create-article/page.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/create-article/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(CreateArticlePage, "TWuNZCnDYPk6/27zmjkMTswXEIw=", false, function() {
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

//# sourceMappingURL=src_db7f776b._.js.map