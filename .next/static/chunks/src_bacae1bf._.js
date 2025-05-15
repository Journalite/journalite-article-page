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
"[project]/src/services/userService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createUserProfile": (()=>createUserProfile),
    "getUserProfile": (()=>getUserProfile),
    "isUsernameTaken": (()=>isUsernameTaken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export al as updateProfile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
;
;
;
async function isUsernameTaken(username) {
    try {
        const usernameQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('username', '==', username.toLowerCase()));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(usernameQuery);
        return !querySnapshot.empty;
    } catch (error) {
        console.error('Error checking username:', error);
        throw error;
    }
}
async function createUserProfile(uid, profile) {
    try {
        // First check if this user ID already has a profile
        const existingUserProfile = await getUserProfile(uid);
        if (existingUserProfile) {
            console.log('User profile already exists, skipping creation');
            return;
        }
        // Check if email already exists in another profile
        const emailQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('email', '==', profile.email.toLowerCase()));
        const emailQuerySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(emailQuery);
        if (!emailQuerySnapshot.empty) {
            throw new Error('Email is already associated with another account');
        }
        // Check if the username is already taken
        const usernameTaken = await isUsernameTaken(profile.username);
        if (usernameTaken) {
            throw new Error('Username is already taken');
        }
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        // Create the user profile
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(userRef, {
            uid,
            firstName: profile.firstName,
            lastName: profile.lastName,
            username: profile.username.toLowerCase(),
            email: profile.email.toLowerCase(),
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
        });
        // Update the user's display name in Firebase Auth
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser, {
                displayName: profile.username
            });
        }
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
}
async function getUserProfile(uid) {
    try {
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (userDoc.exists()) {
            return userDoc.data();
        }
        return null;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/register/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export ab as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ah__as__sendEmailVerification$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export ah as sendEmailVerification>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export Y as GoogleAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export d as signInWithPopup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/userService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
async function handleEmailSignUp(email, password) {
    try {
        const userCredential = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], email, password);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ah__as__sendEmailVerification$3e$__["sendEmailVerification"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser);
        }
        console.log('Sign-up successful', userCredential.user);
        return userCredential;
    } catch (error) {
        console.error('Sign-up failed', error);
        throw error;
    }
}
async function handleGoogleSignUp() {
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__["GoogleAuthProvider"]();
    try {
        // Before attempting sign-in, we'll set up auth state change handling
        let authInProgress = true;
        let existingAccount = false;
        // Set up one-time auth state listener to detect if this is a sign-in to existing account
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], (user)=>{
            if (user && authInProgress) {
                authInProgress = false;
                existingAccount = true;
                unsubscribe();
            }
        });
        // Attempt sign-in with Google
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], provider);
        authInProgress = false;
        unsubscribe();
        const user = result.user;
        // Check if this was an existing user that just signed in
        if (existingAccount) {
            console.log('User already exists, signed in with existing account');
            return result;
        }
        // If we got here, it's a new user - check for existing profile just to be safe
        const existingProfile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(user.uid);
        // If a profile exists, user has signed in before 
        if (existingProfile) {
            console.log('User already has a profile, proceeding to app');
            return result;
        }
        // New user needs a profile - prepare data from Google account info
        const userDisplayName = user.displayName || '';
        const nameParts = userDisplayName.split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';
        // Generate a username from the email address (before the @ symbol)
        const emailUsername = user.email?.split('@')[0] || '';
        // Check if the username is already taken
        const isUsernameAvailable = !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUsernameTaken"])(emailUsername);
        if (isUsernameAvailable) {
            // Username is available, create profile with it
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserProfile"])(user.uid, {
                firstName,
                lastName,
                username: emailUsername,
                email: user.email || ''
            });
        } else {
            // Username is taken, we'll let the user choose a new one in the profile setup page
            // But we still create a temporary profile with a random suffix
            const randomSuffix = Math.floor(Math.random() * 10000);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserProfile"])(user.uid, {
                firstName,
                lastName,
                username: `${emailUsername}${randomSuffix}`,
                email: user.email || ''
            });
        }
        console.log('Google sign-up successful', user);
        return result;
    } catch (error) {
        // Check specific Firebase error codes
        if (error.code === 'auth/account-exists-with-different-credential') {
            throw new Error('An account already exists with the same email address but different sign-in credentials. Please sign in using the original method.');
        }
        console.error('Google sign-up failed', error);
        throw error;
    }
}
function Register() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [touchedFields, setTouchedFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [customValidation, setCustomValidation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [usernameAvailable, setUsernameAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCheckingUsername, setIsCheckingUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBlur = (e)=>{
        const { name, value, validity } = e.target;
        setTouchedFields({
            ...touchedFields,
            [name]: true
        });
        // Clear previous validation message
        setCustomValidation({
            ...customValidation,
            [name]: ''
        });
        // Add a custom validation message if empty
        if (validity.valueMissing) {
            let message = 'This field is required';
            if (name === 'email') message = 'Please enter your email address';
            if (name === 'password') message = 'Please enter a password';
            if (name === 'confirmPassword') message = 'Please confirm your password';
            if (name === 'firstName') message = 'Please enter your first name';
            if (name === 'lastName') message = 'Please enter your last name';
            if (name === 'username') message = 'Please choose a username';
            setCustomValidation({
                ...customValidation,
                [name]: message
            });
        }
    };
    const checkUsername = async (username)=>{
        if (username.length < 2) {
            setUsernameAvailable(null);
            return;
        }
        try {
            setIsCheckingUsername(true);
            const taken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUsernameTaken"])(username);
            setUsernameAvailable(!taken);
        } catch (error) {
            console.error('Error checking username:', error);
        } finally{
            setIsCheckingUsername(false);
        }
    };
    const handleUsernameChange = (e)=>{
        const value = e.target.value;
        setUsername(value);
        // Debounce the username check
        const timeoutId = setTimeout(()=>{
            if (value.length >= 2) {
                checkUsername(value);
            } else {
                setUsernameAvailable(null);
            }
        }, 500);
        return ()=>clearTimeout(timeoutId);
    };
    const validateForm = ()=>{
        const newValidation = {};
        const newTouchedFields = {};
        let isValid = true;
        // Email validation
        newTouchedFields.email = true;
        if (!email.trim()) {
            newValidation.email = 'Please enter your email address';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newValidation.email = 'Please enter a valid email address';
            isValid = false;
        }
        // Password validation
        newTouchedFields.password = true;
        if (!password) {
            newValidation.password = 'Please enter a password';
            isValid = false;
        } else if (password.length < 6) {
            newValidation.password = 'Password must be at least 6 characters';
            isValid = false;
        }
        // Confirm password validation
        newTouchedFields.confirmPassword = true;
        if (password !== confirmPassword) {
            newValidation.confirmPassword = 'Passwords do not match';
            isValid = false;
        }
        // First name validation
        newTouchedFields.firstName = true;
        if (!firstName.trim()) {
            newValidation.firstName = 'Please enter your first name';
            isValid = false;
        }
        // Last name validation
        newTouchedFields.lastName = true;
        if (!lastName.trim()) {
            newValidation.lastName = 'Please enter your last name';
            isValid = false;
        }
        // Username validation
        newTouchedFields.username = true;
        if (!username.trim()) {
            newValidation.username = 'Please choose a username';
            isValid = false;
        } else if (username.length < 2) {
            newValidation.username = 'Username must be at least 2 characters';
            isValid = false;
        } else if (usernameAvailable === false) {
            newValidation.username = 'This username is already taken';
            isValid = false;
        }
        setTouchedFields({
            ...touchedFields,
            ...newTouchedFields
        });
        setCustomValidation({
            ...customValidation,
            ...newValidation
        });
        return isValid;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);
        setError('');
        try {
            // First, check if the username is available before trying to create auth account
            const isUsernameAvailable = !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isUsernameTaken"])(username);
            if (!isUsernameAvailable) {
                setCustomValidation({
                    ...customValidation,
                    username: 'This username is already taken'
                });
                throw new Error('Username is already taken');
            }
            // Create the authentication account
            const userCredential = await handleEmailSignUp(email, password);
            // Create the user profile in Firestore
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserProfile"])(userCredential.user.uid, {
                firstName,
                lastName,
                username,
                email
            });
            // Redirect to login page on successful registration
            router.push('/login');
        } catch (err) {
            let errorMessage = 'Failed to create account';
            if (err instanceof Error) {
                // Handle specific Firebase errors
                if (err.message.includes('email-already-in-use')) {
                    errorMessage = 'This email is already registered. Please use a different email or sign in.';
                    setCustomValidation({
                        ...customValidation,
                        email: 'This email is already registered'
                    });
                } else if (err.message.includes('invalid-email')) {
                    errorMessage = 'Please enter a valid email address';
                    setCustomValidation({
                        ...customValidation,
                        email: 'Please enter a valid email address'
                    });
                } else if (err.message.includes('weak-password')) {
                    errorMessage = 'Password is too weak. Please use at least 6 characters.';
                    setCustomValidation({
                        ...customValidation,
                        password: 'Password is too weak'
                    });
                } else if (err.message.includes('Username is already taken')) {
                    errorMessage = 'This username is already taken. Please choose a different username.';
                    setCustomValidation({
                        ...customValidation,
                        username: 'This username is already taken'
                    });
                }
            }
            setError(errorMessage);
            console.error(err);
        } finally{
            setIsLoading(false);
        }
    };
    // Show validation styling only if field is touched
    const getInputClasses = (fieldName)=>{
        const baseClasses = "w-full px-5 py-3.5 bg-[#f8f5ec] border border-[#e8e1d1] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500";
        if (touchedFields[fieldName] && customValidation[fieldName]) {
            return `${baseClasses} border-red-300 bg-red-50`;
        }
        // Add green border for valid username
        if (fieldName === 'username' && username.length >= 2 && usernameAvailable === true) {
            return `${baseClasses} border-green-300 bg-green-50`;
        }
        return baseClasses;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#f5efe0] flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-1/2 flex flex-col justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm mx-auto px-6 md:px-0 md:ml-20 xl:ml-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-6xl font-serif font-normal text-slate-900",
                                    children: "Journalite"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 text-lg md:text-xl text-slate-800 italic",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Every thought has a doorway."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "This is yours."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 p-3 bg-red-50 text-red-700 text-sm rounded-md",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4 w-full",
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "firstName",
                                                    name: "firstName",
                                                    type: "text",
                                                    className: getInputClasses('firstName'),
                                                    placeholder: "First name",
                                                    value: firstName,
                                                    onChange: (e)=>setFirstName(e.target.value),
                                                    onBlur: handleBlur,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 17
                                                }, this),
                                                touchedFields.firstName && customValidation.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-500",
                                                    children: customValidation.firstName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "lastName",
                                                    name: "lastName",
                                                    type: "text",
                                                    className: getInputClasses('lastName'),
                                                    placeholder: "Last name",
                                                    value: lastName,
                                                    onChange: (e)=>setLastName(e.target.value),
                                                    onBlur: handleBlur,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this),
                                                touchedFields.lastName && customValidation.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-500",
                                                    children: customValidation.lastName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "username",
                                                    name: "username",
                                                    type: "text",
                                                    className: getInputClasses('username'),
                                                    placeholder: "Username",
                                                    value: username,
                                                    onChange: handleUsernameChange,
                                                    onBlur: handleBlur,
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                isCheckingUsername && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-3 top-1/2 transform -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin h-5 w-5 border-2 border-slate-500 rounded-full border-t-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/register/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this),
                                                !isCheckingUsername && username.length >= 2 && usernameAvailable === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        touchedFields.username && customValidation.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-500",
                                            children: customValidation.username
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this),
                                        !customValidation.username && username.length >= 2 && usernameAvailable === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-green-500",
                                            children: "Username is available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        !customValidation.username && username.length >= 2 && usernameAvailable === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-500",
                                            children: "Username is already taken"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            className: getInputClasses('email'),
                                            placeholder: "Email address",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            onBlur: handleBlur,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        touchedFields.email && customValidation.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-500",
                                            children: customValidation.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "password",
                                            name: "password",
                                            type: "password",
                                            className: getInputClasses('password'),
                                            placeholder: "Password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            onBlur: handleBlur,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        touchedFields.password && customValidation.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-500",
                                            children: customValidation.password
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "confirmPassword",
                                            name: "confirmPassword",
                                            type: "password",
                                            className: getInputClasses('confirmPassword'),
                                            placeholder: "Confirm password",
                                            value: confirmPassword,
                                            onChange: (e)=>setConfirmPassword(e.target.value),
                                            onBlur: handleBlur,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this),
                                        touchedFields.confirmPassword && customValidation.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-500",
                                            children: customValidation.confirmPassword
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 441,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full flex items-center justify-center px-4 py-3.5 bg-[#1a1a19] text-white rounded-md hover:bg-[#2a2a29] focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
                                        disabled: isLoading,
                                        children: isLoading ? "Creating your account..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mr-2",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Create your account"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/register/page.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/register/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center pt-2 text-slate-700 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2",
                                            children: "Already have an account?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "hover:text-slate-900",
                                            children: "Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/register/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/register/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 space-y-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-full flex items-center justify-center px-4 py-3 border border-[#e8e1d1] bg-[#f8f5ec] rounded-md hover:bg-[#f0ece3] transition-colors",
                                onClick: async ()=>{
                                    try {
                                        setIsLoading(true);
                                        setError('');
                                        await handleGoogleSignUp();
                                        router.push('/profile-setup');
                                    } catch (err) {
                                        console.error('Google sign-up error:', err);
                                        // Handle specific errors with user-friendly messages
                                        if (err.message?.includes('account already exists')) {
                                            setError('An account with this email already exists. Please use the sign-in page or a different email.');
                                        } else if (err.code === 'auth/popup-closed-by-user') {
                                            setError('Sign-in was cancelled. Please try again.');
                                        } else if (err.code === 'auth/network-request-failed') {
                                            setError('Network error. Please check your internet connection and try again.');
                                        } else {
                                            setError('Google sign-up failed. Please try again or use email registration.');
                                        }
                                    } finally{
                                        setIsLoading(false);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 mr-2",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                                fill: "#4285F4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/page.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                                fill: "#34A853"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/page.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                                fill: "#FBBC05"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                                fill: "#EA4335"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/register/page.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-800",
                                        children: "Sign up with Google"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/register/page.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/register/page.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20 mb-8 text-slate-700 italic",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Words are the threads of thought."
                            }, void 0, false, {
                                fileName: "[project]/src/app/register/page.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/register/page.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block w-1/2 relative bg-[#f5efe0]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
                    style: {
                        backgroundImage: 'url("/images/login.png")',
                        pointerEvents: 'none'
                    },
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/register/page.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/register/page.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
_s(Register, "ea2aTa3QIoa+cBPCNIONbjf+jEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Register;
var _c;
__turbopack_context__.k.register(_c, "Register");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bacae1bf._.js.map