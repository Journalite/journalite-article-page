module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Import the functions you need from the SDKs you need
__turbopack_context__.s({
    "analytics": (()=>analytics),
    "app": (()=>app),
    "auth": (()=>auth),
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-7829abf2.js [app-ssr] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
// Initialize Analytics only in browser environment
let analytics;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
// Initialize Firebase Authentication
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
// Initialize Firestore
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// Configure custom auth actions URL
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
// We need to update this in the forgot-password component when sending the reset email
}
;
}}),
"[project]/src/services/externalArticleService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ExternalArticleService": (()=>ExternalArticleService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
;
;
class ExternalArticleService {
    // Get or create social data for an external article
    static async getOrCreateSocialData(externalId, source, title, url) {
        try {
            // Encode the external ID to ensure it's safe for Firestore document IDs
            const encodedExternalId = encodeURIComponent(externalId);
            const socialId = `${source}-${encodedExternalId}`;
            const socialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'external_articles', socialId);
            const socialDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(socialRef);
            if (socialDoc.exists()) {
                return {
                    id: socialId,
                    ...socialDoc.data()
                };
            } else {
                // Create new social data entry
                const newSocialData = {
                    externalId,
                    source,
                    title,
                    url,
                    likes: [],
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                    lastActivity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                };
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(socialRef, newSocialData);
                return {
                    id: socialId,
                    ...newSocialData
                };
            }
        } catch (error) {
            console.error('Error getting or creating social data:', error);
            throw error;
        }
    }
    // Like or unlike an external article
    static async toggleLike(externalId, source, userId, title, url) {
        try {
            // Encode the external ID to ensure it's safe for Firestore document IDs
            const encodedExternalId = encodeURIComponent(externalId);
            const socialId = `${source}-${encodedExternalId}`;
            const socialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'external_articles', socialId);
            // Ensure social data exists
            await this.getOrCreateSocialData(externalId, source, title, url);
            const socialDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(socialRef);
            const socialData = socialDoc.data();
            const currentLikes = socialData.likes || [];
            const isCurrentlyLiked = currentLikes.includes(userId);
            if (isCurrentlyLiked) {
                // Unlike
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(socialRef, {
                    likes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRemove"])(userId),
                    lastActivity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
                return {
                    isLiked: false,
                    totalLikes: currentLikes.length - 1
                };
            } else {
                // Like
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(socialRef, {
                    likes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(userId),
                    lastActivity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
                return {
                    isLiked: true,
                    totalLikes: currentLikes.length + 1
                };
            }
        } catch (error) {
            console.error('Error toggling like:', error);
            throw error;
        }
    }
    // Get social data for an external article
    static async getSocialData(externalId, source) {
        try {
            // Encode the external ID to ensure it's safe for Firestore document IDs
            const encodedExternalId = encodeURIComponent(externalId);
            const socialId = `${source}-${encodedExternalId}`;
            const socialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'external_articles', socialId);
            const socialDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(socialRef);
            if (socialDoc.exists()) {
                return {
                    id: socialId,
                    ...socialDoc.data()
                };
            }
            return null;
        } catch (error) {
            console.error('Error getting social data:', error);
            return null;
        }
    }
}
}}),
"[project]/src/services/highlightService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
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
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            comments: [],
            reactions: {},
            userReactions: {}
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights'), highlightData);
        return docRef.id;
    } catch (error) {
        console.error('Error saving highlight:', error);
        throw error;
    }
};
const getArticleHighlights = async (articleId, userId)=>{
    try {
        let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId));
        // If userId is provided, filter by user to make highlights private
        if (userId) {
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', userId));
        }
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', userId));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId));
    } catch (error) {
        console.error('Error deleting highlight:', error);
        throw error;
    }
};
const addCommentToHighlight = async (highlightId, userId, content)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        const comment = {
            userId,
            content,
            createdAt: new Date().toISOString()
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            comments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(comment)
        });
    } catch (error) {
        console.error('Error adding comment to highlight:', error);
        throw error;
    }
};
const removeCommentFromHighlight = async (highlightId, comment)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            comments: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRemove"])(comment)
        });
    } catch (error) {
        console.error('Error removing comment from highlight:', error);
        throw error;
    }
};
const addReactionToHighlight = async (highlightId, userId, emoji)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        // Note: This is a simplified approach. In production, you'd want to use a transaction
        // to ensure consistency when multiple users react simultaneously
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            [`reactions.${emoji}`]: (await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i)).increment(1),
            [`userReactions.${userId}`]: emoji
        });
    } catch (error) {
        console.error('Error adding reaction to highlight:', error);
        throw error;
    }
};
const removeReactionFromHighlight = async (highlightId, userId, emoji)=>{
    try {
        const highlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'highlights', highlightId);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(highlightRef, {
            [`reactions.${emoji}`]: (await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i)).increment(-1),
            [`userReactions.${userId}`]: null
        });
    } catch (error) {
        console.error('Error removing reaction from highlight:', error);
        throw error;
    }
};
const generateHighlightShareUrl = (articleSlug, highlightId, baseUrl = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '')=>{
    return `${baseUrl}/articles?slug=${articleSlug}#highlight=${highlightId}`;
};
}}),
"[project]/src/context/HighlightContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HighlightProvider": (()=>HighlightProvider),
    "useHighlights": (()=>useHighlights)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/highlightService.ts [app-ssr] (ecmascript)");
;
;
;
;
const HighlightContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const HighlightProvider = ({ children, articleId })=>{
    const [highlights, setHighlights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setCurrentUser(user);
        });
        return ()=>unsubscribe();
    }, []);
    // Load highlights for the current article (user-specific)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadHighlights = async ()=>{
            if (articleId && currentUser) {
                setLoading(true);
                try {
                    // Pass user ID to get only current user's highlights
                    const userHighlights = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArticleHighlights"])(articleId, currentUser.uid);
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
        };
        loadHighlights();
    }, [
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
            const highlightId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveHighlight"])(articleId, currentUser.uid, text, prefix, suffix, tag);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteHighlight"])(highlightId);
            setHighlights((prev)=>prev.filter((h)=>h.id !== highlightId));
        } catch (error) {
            console.error('Error removing highlight:', error);
        }
    };
    // Apply highlight styling to a DOM element with improved range handling
    const highlightElement = (range, tag)=>{
        try {
            // Get the exact selected text without trimming to preserve formatting
            const selectedText = range.toString();
            if (!selectedText) return;
            // Use the original range without modification to preserve exact selection
            const highlightMark = document.createElement('mark');
            highlightMark.className = `article-highlight highlight-${tag}`;
            // Use a safer approach that preserves text structure
            try {
                // Try surrounding contents first
                range.surroundContents(highlightMark);
            } catch (error) {
                // If that fails, try extracting and inserting
                try {
                    const contents = range.extractContents();
                    highlightMark.appendChild(contents);
                    range.insertNode(highlightMark);
                } catch (innerError) {
                    // Last resort: clone contents to avoid moving elements
                    const contents = range.cloneContents();
                    highlightMark.appendChild(contents);
                    range.deleteContents();
                    range.insertNode(highlightMark);
                }
            }
            // Clear the selection to prevent UI confusion
            window.getSelection()?.removeAllRanges();
        } catch (error) {
            console.error('Error highlighting range:', error);
            // Restore selection if highlight fails
            window.getSelection()?.removeAllRanges();
            window.getSelection()?.addRange(range);
        }
    };
    const contextValue = {
        highlights,
        loading,
        saveHighlight: handleSaveHighlight,
        removeHighlight: handleRemoveHighlight,
        highlightElement
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/HighlightContext.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
};
const useHighlights = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(HighlightContext);
    if (context === undefined) {
        throw new Error('useHighlights must be used within a HighlightProvider');
    }
    return context;
};
}}),
"[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AtmosphereIcon": (()=>AtmosphereIcon),
    "AutoIcon": (()=>AutoIcon),
    "BulbIcon": (()=>BulbIcon),
    "CloseIcon": (()=>CloseIcon),
    "CommentIcon": (()=>CommentIcon),
    "ComputerIcon": (()=>ComputerIcon),
    "DiceIcon": (()=>DiceIcon),
    "DotsVerticalIcon": (()=>DotsVerticalIcon),
    "EditIcon": (()=>EditIcon),
    "EnhancedIcon": (()=>EnhancedIcon),
    "HeartIcon": (()=>HeartIcon),
    "InspirationIcon": (()=>InspirationIcon),
    "LoadingIcon": (()=>LoadingIcon),
    "LockClosedIcon": (()=>LockClosedIcon),
    "LockIcon": (()=>LockIcon),
    "NotificationIcon": (()=>NotificationIcon),
    "PaletteIcon": (()=>PaletteIcon),
    "ReflectionIcon": (()=>ReflectionIcon),
    "ReplyIcon": (()=>ReplyIcon),
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
    "TrashIcon": (()=>TrashIcon),
    "UserIcon": (()=>UserIcon),
    "WarningIcon": (()=>WarningIcon),
    "WriteIcon": (()=>WriteIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
;
;
const NotificationIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ThoughtIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const SparkleIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const CommentIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ThumbsUpIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const HeartIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ThinkingIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 139,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const BulbIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const StarIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
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
const WarningIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const SendIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
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
const ShareIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
const LockIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const InspirationIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22l1.18-7.86-5-4.87 6.91-1.01L12 2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 256,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const PaletteIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "13.5",
                cy: "6.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 275,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "10.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 276,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "7.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 277,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6.5",
                cy: "12.5",
                r: ".5",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 278,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const LoadingIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6ec09a169201e4bb",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 289,
        columnNumber: 3
    }, this);
const ReflectionIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 327,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 12h10m-5-4v8",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 333,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const AutoIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const DiceIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 373,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 374,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const LockClosedIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11V7a5 5 0 0 1 10 0v4",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 389,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const UserIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 403,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const SettingsIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const ComputerIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
const TheaterIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12c3-5 7-8 10-8s7 3 10 8c-3 5-7 8-10 8s-7-3-10-8z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 446,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const RocketIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 461,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 462,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 463,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const EnhancedIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22l1.18-7.86-5-4.87 6.91-1.01L12 2z",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 477,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const AtmosphereIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 492,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 16c0-1.1.9-2 2-2s2 .9 2 2",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 493,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
const WriteIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                stroke: color,
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 507,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const CloseIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
const ReplyIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 17l-4-4 4-4M5 13h11a4 4 0 0 1 0 8h-1",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/CustomIcons.tsx",
            lineNumber: 535,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 527,
        columnNumber: 3
    }, this);
const DotsVerticalIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 554,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "5",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 555,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "19",
                r: "1",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 556,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 546,
        columnNumber: 3
    }, this);
const TrashIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 569,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "11",
                x2: "10",
                y2: "17",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 576,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "14",
                y1: "11",
                x2: "14",
                y2: "17",
                stroke: color,
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 577,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 561,
        columnNumber: 3
    }, this);
const EditIcon = ({ size = 20, color = 'currentColor', className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 590,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
                stroke: color,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CustomIcons.tsx",
                lineNumber: 597,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CustomIcons.tsx",
        lineNumber: 582,
        columnNumber: 3
    }, this);
}}),
"[project]/src/components/HighlightToolbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)");
;
;
;
;
const highlightTags = [
    {
        tag: 'insight',
        label: 'Insight',
        color: '#3B82F6',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BulbIcon"]
    },
    {
        tag: 'question',
        label: 'Question',
        color: '#F59E0B',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThinkingIcon"]
    },
    {
        tag: 'quote',
        label: 'Quote',
        color: '#10B981',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommentIcon"]
    },
    {
        tag: 'important',
        label: 'Important',
        color: '#EF4444',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarIcon"]
    }
];
const HighlightToolbar = ({ selection, onHighlight, onResponse, onShare, onAiAssist })=>{
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showColorOptions, setShowColorOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toolbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
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
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    "TURBOPACK unreachable";
};
const __TURBOPACK__default__export__ = HighlightToolbar;
}}),
"[project]/src/components/ShareModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)");
// import styles from './ShareModal.module.css'; // Unused
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const ShareModal = ({ isOpen, onClose, highlightText, articleTitle, shareUrl })=>{
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (copied) {
            const timer = setTimeout(()=>setCopied(false), 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        copied
    ]);
    // Handle escape key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (e)=>{
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return ()=>{
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [
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
    // const shareText = `"${highlightText}" - from "${articleTitle}"`; // Unused
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1.5rem'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: '0 0 0.5rem 0',
                                    fontSize: '1.25rem',
                                    fontWeight: '600',
                                    color: '#1F2937'
                                },
                                className: "jsx-8795408d21c696e",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkleIcon"], {
                                        size: 20,
                                        color: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ShareModal.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    "Share Highlight"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#F9FAFB',
                            border: '2px solid #E5E7EB',
                            borderRadius: '0.75rem',
                            padding: '1.25rem',
                            marginBottom: '1.5rem'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '1.5rem'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '0.5rem'
                                },
                                className: "jsx-8795408d21c696e",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ShareModal.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '0.75rem',
                            justifyContent: 'flex-end'
                        },
                        className: "jsx-8795408d21c696e",
                        children: [
                            "undefined" !== 'undefined' && typeof navigator !== 'undefined' && 'share' in navigator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ShareModal.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ShareModal.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "8795408d21c696e",
                children: "@keyframes modalSlideIn{0%{opacity:0;transform:translateY(-20px)scale(.95)}to{opacity:1;transform:translateY(0)scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ShareModal.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this), document.body);
};
const __TURBOPACK__default__export__ = ShareModal;
}}),
"[project]/src/components/ArticleHighlights.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HighlightToolbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/HighlightContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/highlightService.ts [app-ssr] (ecmascript)");
// import { Highlight } from '@/services/highlightService'; // Unused type import
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShareModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ShareModal.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Get context for a selection with improved handling that preserves formatting
const getSelectionContext = (selection)=>{
    const result = {
        prefix: '',
        suffix: ''
    };
    if (!selection || selection.rangeCount === 0) return result;
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    // Get the full text content of the container
    const container = range.commonAncestorContainer;
    const containerElement = container.nodeType === Node.TEXT_NODE ? container.parentElement : container;
    if (!containerElement) return result;
    // Get all text content from the container preserving original formatting
    const fullText = containerElement.textContent || '';
    // Find the position of our selected text in the full text (exact match first)
    let startIndex = fullText.indexOf(selectedText);
    // If exact match fails, try with normalized spaces as fallback
    if (startIndex === -1) {
        const normalizedSelectedText = selectedText.replace(/\s+/g, ' ').trim();
        const normalizedFullText = fullText.replace(/\s+/g, ' ');
        const normalizedStartIndex = normalizedFullText.indexOf(normalizedSelectedText);
        if (normalizedStartIndex !== -1) {
            // Map back to original text position - this is approximate
            startIndex = normalizedStartIndex;
        }
    }
    if (startIndex !== -1) {
        // Get context with word boundaries to avoid partial word issues
        const contextLength = 50;
        const prefixStart = Math.max(0, startIndex - contextLength);
        const suffixEnd = Math.min(fullText.length, startIndex + selectedText.length + contextLength);
        // Extract prefix and suffix preserving original formatting
        let prefix = fullText.substring(prefixStart, startIndex);
        let suffix = fullText.substring(startIndex + selectedText.length, suffixEnd);
        // Only trim word boundaries, not all whitespace
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
    // Track highlights that couldn't be applied for cleanup
    const failedHighlights = [];
    // Then apply all highlights from the database
    highlights.forEach((highlight)=>{
        // Enhanced function to find text in the DOM with better formatting preservation
        const findTextInDOM = (text, prefix, suffix)=>{
            // Strategy 1: Try exact text match first (preserves all formatting)
            const walker = document.createTreeWalker(articleContent, NodeFilter.SHOW_TEXT, null);
            let node;
            while(node = walker.nextNode()){
                const content = node.textContent || '';
                const index = content.indexOf(text);
                if (index !== -1) {
                    const range = document.createRange();
                    range.setStart(node, index);
                    range.setEnd(node, index + text.length);
                    return range;
                }
            }
            // Strategy 2: Try with relaxed whitespace matching for poetry/formatted text
            const walker2 = document.createTreeWalker(articleContent, NodeFilter.SHOW_TEXT, null);
            // Create a more flexible pattern that accounts for different whitespace
            const createFlexiblePattern = (str)=>{
                // Escape special regex characters but keep spaces flexible
                const escaped = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Replace any sequence of whitespace with flexible whitespace matcher
                const flexible = escaped.replace(/\s+/g, '\\s+');
                return new RegExp(flexible, 'i');
            };
            let node2;
            while(node2 = walker2.nextNode()){
                const content = node2.textContent || '';
                const flexiblePattern = createFlexiblePattern(text);
                const match = content.match(flexiblePattern);
                if (match && match.index !== undefined) {
                    const range = document.createRange();
                    range.setStart(node2, match.index);
                    range.setEnd(node2, match.index + match[0].length);
                    return range;
                }
            }
            // Strategy 3: Try with context if above strategies fail
            if (prefix || suffix) {
                const walker3 = document.createTreeWalker(articleContent, NodeFilter.SHOW_TEXT, null);
                // Create context pattern with flexible whitespace
                const contextText = prefix + text + suffix;
                const contextPattern = createFlexiblePattern(contextText);
                let node3;
                while(node3 = walker3.nextNode()){
                    const content = node3.textContent || '';
                    const match = content.match(contextPattern);
                    if (match && match.index !== undefined) {
                        // Find the actual text within the context match
                        const fullMatch = match[0];
                        const prefixPattern = createFlexiblePattern(prefix);
                        const prefixMatch = fullMatch.match(prefixPattern);
                        const prefixLength = prefixMatch ? prefixMatch[0].length : 0;
                        const range = document.createRange();
                        const textStart = match.index + prefixLength;
                        const textPattern = createFlexiblePattern(text);
                        const textInContext = fullMatch.substring(prefixLength);
                        const textMatch = textInContext.match(textPattern);
                        if (textMatch) {
                            range.setStart(node3, textStart);
                            range.setEnd(node3, textStart + textMatch[0].length);
                            return range;
                        }
                    }
                }
            }
            // Strategy 4: Last resort - normalized search (original behavior as fallback)
            const walker4 = document.createTreeWalker(articleContent, NodeFilter.SHOW_TEXT, null);
            const contextPattern = (prefix + text + suffix).replace(/\s+/g, ' ').trim();
            let node4;
            while(node4 = walker4.nextNode()){
                const content = node4.textContent || '';
                const normalizedContent = content.replace(/\s+/g, ' ');
                const index = normalizedContent.indexOf(contextPattern);
                if (index !== -1) {
                    const range = document.createRange();
                    const prefixLength = prefix.replace(/\s+/g, ' ').trim().length;
                    const startIndex = index + (prefixLength > 0 ? prefixLength + 1 : 0);
                    range.setStart(node4, startIndex);
                    range.setEnd(node4, startIndex + text.replace(/\s+/g, ' ').trim().length);
                    return range;
                }
            }
            return null;
        };
        // Try to find and highlight the text
        const range = findTextInDOM(highlight.text, highlight.prefix || '', highlight.suffix || '');
        if (range) {
            try {
                // Create highlight mark
                const mark = document.createElement('mark');
                mark.className = `article-highlight highlight-${highlight.tag || 'insight'}`;
                mark.dataset.highlightId = highlight.id;
                // Apply highlight with better error handling
                try {
                    range.surroundContents(mark);
                } catch (surroundError) {
                    // Fallback approach
                    const contents = range.extractContents();
                    mark.appendChild(contents);
                    range.insertNode(mark);
                }
                console.log(`✅ Applied highlight "${highlight.text.substring(0, 30)}..." with ID: ${highlight.id}`);
            } catch (error) {
                console.error('Error applying highlight:', error, {
                    text: highlight.text,
                    id: highlight.id,
                    tag: highlight.tag
                });
                failedHighlights.push(highlight.id);
            }
        } else {
            console.warn(`❌ Could not find text for highlight: "${highlight.text.substring(0, 30)}..." with ID: ${highlight.id}`);
            failedHighlights.push(highlight.id);
        }
    });
    // Clean up failed highlights after a few attempts
    if (failedHighlights.length > 0) {
        console.log(`🧹 Found ${failedHighlights.length} highlights that couldn't be applied. These might be from old text formatting.`);
        // Store failed highlights in sessionStorage to track across re-renders
        const storageKey = `failed-highlights-${location.pathname}`;
        const existingFailed = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
        failedHighlights.forEach((id)=>{
            existingFailed[id] = (existingFailed[id] || 0) + 1;
        });
        sessionStorage.setItem(storageKey, JSON.stringify(existingFailed));
        // If a highlight has failed 3+ times, suggest cleanup
        const persistentlyFailed = Object.entries(existingFailed).filter(([_, count])=>count >= 3).map(([id])=>id);
        if (persistentlyFailed.length > 0) {
            console.log(`🗑️  Suggesting cleanup of ${persistentlyFailed.length} persistently failed highlights`);
            // Show a one-time cleanup notification
            const notificationShown = sessionStorage.getItem(`cleanup-notification-${location.pathname}`);
            if (!notificationShown) {
                // Automatically clean up broken highlights from text format change
                console.log('🔄 Auto-cleaning broken highlights from text format change...');
                setTimeout(()=>{
                    persistentlyFailed.forEach(async (id)=>{
                        try {
                            // We need access to removeHighlight function, so let's emit a custom event
                            const cleanupEvent = new CustomEvent('cleanup-broken-highlight', {
                                detail: {
                                    highlightId: id
                                }
                            });
                            window.dispatchEvent(cleanupEvent);
                        } catch (error) {
                            console.error('Failed to cleanup highlight:', id, error);
                        }
                    });
                }, 1000);
                sessionStorage.setItem(`cleanup-notification-${location.pathname}`, 'shown');
            }
        }
    }
};
const ArticleHighlights = ({ articleId, children, articleTitle = 'Article', articleSlug = '' })=>{
    const [selection, setSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { highlights, saveHighlight, removeHighlight, highlightElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHighlights"])();
    const [contentRef, setContentRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showResponseModal, setShowResponseModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTextForResponse, setSelectedTextForResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showAiModal, setShowAiModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTextForAi, setSelectedTextForAi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeHighlight, setActiveHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUnhighlightToolbar, setShowUnhighlightToolbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHidingToolbar, setIsHidingToolbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unhighlightPosition, setUnhighlightPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareHighlightText, setShareHighlightText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Function to hide toolbar with animation
    const hideToolbarWithAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsHidingToolbar(true);
        // After animation completes, actually hide the toolbar
        setTimeout(()=>{
            setShowUnhighlightToolbar(false);
            setIsHidingToolbar(false);
        }, 150); // Match this with CSS transition duration
    }, []);
    // Handle text selection with simple debouncing
    const handleSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // If unhighlight toolbar is active, don't process regular selections
        if (showUnhighlightToolbar) return;
        const currentSelection = window.getSelection();
        if (currentSelection && !currentSelection.isCollapsed) {
            const selectedText = currentSelection.toString();
            const trimmedText = selectedText.trim();
            // Filter out selections that are too long (likely accidental)
            if (trimmedText && trimmedText.length > 0 && selectedText.length < 1000) {
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
    }, [
        showUnhighlightToolbar
    ]);
    // Handle highlight button click
    const handleHighlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectedText, range, tag)=>{
        if (selectedText && range) {
            // Get context for the selection
            const context = getSelectionContext(window.getSelection());
            // Save highlight to database with tag (preserve original formatting)
            saveHighlight(selectedText, context.prefix, context.suffix, articleId, tag);
            // Apply highlight visually with tag-based styling
            highlightElement(range, tag);
        }
    }, [
        articleId,
        saveHighlight,
        highlightElement
    ]);
    // Handle highlight click to show unhighlight option
    const handleHighlightClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
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
    }, [
        showUnhighlightToolbar,
        hideToolbarWithAnimation
    ]);
    // Handle unhighlight action
    const handleUnhighlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    }, [
        activeHighlight,
        removeHighlight,
        contentRef,
        hideToolbarWithAnimation
    ]);
    // Handle response button click
    const handleResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectedText)=>{
        setSelectedTextForResponse(selectedText);
        setShowResponseModal(true);
    }, []);
    // Handle share button click
    const handleShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectedText)=>{
        setShareHighlightText(selectedText);
        setShowShareModal(true);
    }, []);
    // Handle AI assist button click
    const handleAiAssist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectedText)=>{
        setSelectedTextForAi(selectedText);
        setShowAiModal(true);
    }, []);
    // Set up selection event listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener('selectionchange', handleSelection);
        // Additional mobile touch handling
        const handleTouchEnd = ()=>{
            // Small delay to ensure selection is finalized
            setTimeout(handleSelection, 150);
        };
        // Only add touch handlers on mobile devices
        if ('ontouchstart' in window) {
            document.addEventListener('touchend', handleTouchEnd);
        }
        return ()=>{
            document.removeEventListener('selectionchange', handleSelection);
            if ('ontouchstart' in window) {
                document.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [
        handleSelection
    ]);
    // Set up click listener for highlights
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (contentRef) {
            contentRef.addEventListener('click', handleHighlightClick);
            return ()=>{
                contentRef.removeEventListener('click', handleHighlightClick);
            };
        }
    }, [
        contentRef,
        handleHighlightClick
    ]);
    // Add click listener to document to hide unhighlight toolbar when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleDocumentClick = (e)=>{
            if (showUnhighlightToolbar) {
                const target = e.target;
                if (!target.closest('.highlight-toolbar') && !target.classList.contains('article-highlight')) {
                    hideToolbarWithAnimation();
                    setActiveHighlight(null);
                }
            }
        };
        document.addEventListener('click', handleDocumentClick);
        return ()=>{
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [
        showUnhighlightToolbar,
        hideToolbarWithAnimation
    ]);
    // Apply highlights from database when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (contentRef) {
            // Always try to apply highlights, even if array is empty (for cleanup)
            const timeoutId = setTimeout(()=>{
                console.log(`🎨 Applying ${highlights.length} highlights to content`);
                applyHighlightsToContent(highlights, contentRef);
            }, 100); // Increased delay for better stability
            return ()=>clearTimeout(timeoutId);
        }
    }, [
        highlights,
        contentRef
    ]);
    // Listen for cleanup events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleCleanupEvent = (event)=>{
            const highlightId = event.detail?.highlightId;
            if (highlightId) {
                console.log(`🗑️ Cleaning up broken highlight: ${highlightId}`);
                removeHighlight(highlightId);
            }
        };
        window.addEventListener('cleanup-broken-highlight', handleCleanupEvent);
        return ()=>{
            window.removeEventListener('cleanup-broken-highlight', handleCleanupEvent);
        };
    }, [
        removeHighlight
    ]);
    // Get ref to content element
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        if (node && node !== contentRef) {
            setContentRef(node);
        }
    }, [
        contentRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightToolbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                selection: selection,
                onHighlight: handleHighlight,
                onResponse: handleResponse,
                onShare: handleShare,
                onAiAssist: handleAiAssist
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 560,
                columnNumber: 7
            }, this),
            showUnhighlightToolbar && activeHighlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `highlight-toolbar unhighlight-toolbar ${isHidingToolbar ? 'hiding' : ''}`,
                style: {
                    position: 'absolute',
                    top: `${unhighlightPosition.top}px`,
                    left: `${unhighlightPosition.left}px`,
                    transform: isHidingToolbar ? 'translateY(-10px) translateX(-50%)' : 'translateX(-50%)',
                    zIndex: 1000
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUnhighlight,
                        className: "highlight-btn highlight-btn-danger",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 582,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "9",
                                        x2: "12",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "9",
                                        x2: "18",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 584,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Unhighlight"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 580,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            handleShare(activeHighlight.text);
                            hideToolbarWithAnimation();
                        },
                        className: "highlight-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "18",
                                        cy: "5",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 597,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "6",
                                        cy: "12",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "18",
                                        cy: "19",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 599,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "8.59",
                                        y1: "13.51",
                                        x2: "15.42",
                                        y2: "17.49"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 600,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "15.41",
                                        y1: "6.51",
                                        x2: "8.59",
                                        y2: "10.49"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 601,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Share"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 603,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 589,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            handleResponse(activeHighlight.text);
                            hideToolbarWithAnimation();
                        },
                        className: "highlight-btn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 613,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Response"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 616,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 606,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 570,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: setRef,
                className: "article-highlight-container",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this),
            showResponseModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-response-modal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "highlight-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "highlight-modal-close",
                            onClick: ()=>setShowResponseModal(false),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 630,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Respond to highlighted text"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 636,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-selected-text",
                            children: [
                                '"',
                                selectedTextForResponse,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 637,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "highlight-response-input",
                            placeholder: "Write your response..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 638,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "highlight-response-submit",
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 642,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                    lineNumber: 629,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 628,
                columnNumber: 9
            }, this),
            showAiModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-ai-modal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "highlight-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "highlight-modal-close",
                            onClick: ()=>setShowAiModal(false),
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 651,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Journa AI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-selected-text",
                            children: [
                                '"',
                                selectedTextForAi,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 658,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-ai-options",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Explain this"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Fact check"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Provide context"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 662,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Summarize"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 659,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-ai-response",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "highlight-ai-loading",
                                children: "Journa AI is thinking..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 667,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                    lineNumber: 650,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 649,
                columnNumber: 9
            }, this),
            showShareModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ShareModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showShareModal,
                onClose: ()=>setShowShareModal(false),
                highlightText: shareHighlightText,
                articleTitle: articleTitle,
                shareUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateHighlightShareUrl"])(articleSlug, articleId)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 675,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ArticleHighlights;
}}),
"[project]/src/components/GradientPanel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const GradientPanel = ({ currentMood, isVisible, moodFeatureEnabled })=>{
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [themeConfig, setThemeConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        colorStops: [
            {
                id: '1',
                color: '#007AFF',
                x: 30,
                y: 40,
                isSelected: true
            }
        ],
        opacity: 80,
        grain: 30,
        mode: 'auto'
    });
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const opacitySliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const grainSliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const saveTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // Generate Journa Color-style gradient from color stops with grain effect
    const generateJournaColorGradient = (config)=>{
        const { colorStops, opacity, grain } = config;
        const alpha = opacity / 100;
        // Generate smooth film grain overlay based on grain value
        const grainIntensity = grain / 100;
        let grainPattern = '';
        if (grainIntensity > 0.1) {
            const grainOpacity = grainIntensity * 0.08;
            const grainBlur = Math.max(15, 25 - grainIntensity * 8);
            grainPattern = `
        radial-gradient(ellipse at 12% 18%, rgba(255,255,255,${grainOpacity}) 3px, transparent ${grainBlur}px),
        radial-gradient(ellipse at 87% 23%, rgba(0,0,0,${grainOpacity * 0.7}) 2px, transparent ${grainBlur * 1.2}px),
        radial-gradient(ellipse at 43% 82%, rgba(255,255,255,${grainOpacity * 0.5}) 4px, transparent ${grainBlur * 0.9}px),
      `;
        }
        let baseGradient = '';
        if (colorStops.length === 1) {
            const stop = colorStops[0];
            baseGradient = `radial-gradient(circle at ${stop.x}% ${stop.y}%, ${stop.color}${Math.round(alpha * 255).toString(16)}, transparent 70%)`;
        } else if (colorStops.length === 2) {
            const [stop1, stop2] = colorStops;
            baseGradient = `
        radial-gradient(circle at ${stop1.x}% ${stop1.y}%, ${stop1.color}${Math.round(alpha * 0.7 * 255).toString(16)}, transparent 50%),
        radial-gradient(circle at ${stop2.x}% ${stop2.y}%, ${stop2.color}${Math.round(alpha * 0.7 * 255).toString(16)}, transparent 50%)
      `;
        } else if (colorStops.length === 3) {
            const [stop1, stop2, stop3] = colorStops;
            baseGradient = `
        radial-gradient(circle at ${stop1.x}% ${stop1.y}%, ${stop1.color}${Math.round(alpha * 0.5 * 255).toString(16)}, transparent 40%),
        radial-gradient(circle at ${stop2.x}% ${stop2.y}%, ${stop2.color}${Math.round(alpha * 0.5 * 255).toString(16)}, transparent 40%),
        radial-gradient(circle at ${stop3.x}% ${stop3.y}%, ${stop3.color}${Math.round(alpha * 0.5 * 255).toString(16)}, transparent 40%)
      `;
        }
        return grainPattern ? `${grainPattern}${baseGradient}` : baseGradient || 'transparent';
    };
    // Throttled real-time update function
    const updateThemeRealTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let lastUpdate = 0;
        return (config)=>{
            const now = Date.now();
            if (now - lastUpdate < 100) return;
            lastUpdate = now;
            if (!moodFeatureEnabled) return;
            const gradientCSS = generateJournaColorGradient(config);
            requestAnimationFrame(()=>{
                const moodElements = document.querySelectorAll('[data-mood-element]');
                moodElements.forEach((element)=>{
                    if (element) {
                        element.style.backgroundImage = gradientCSS;
                        element.style.transition = 'background-image 0.2s ease';
                    }
                });
                clearTimeout(saveTimeout.current);
                saveTimeout.current = setTimeout(()=>{
                    localStorage.setItem('journaColorThemeConfig', JSON.stringify(config));
                }, 500);
            });
        };
    }, [
        moodFeatureEnabled,
        generateJournaColorGradient
    ]);
    // Handle color stop dragging
    const handleColorStopStart = (e, stopId)=>{
        e.preventDefault();
        setIsDragging(stopId);
        const newConfig = {
            ...themeConfig,
            colorStops: themeConfig.colorStops.map((stop)=>({
                    ...stop,
                    isSelected: stop.id === stopId
                }))
        };
        setThemeConfig(newConfig);
    };
    const handlePointerMove = (e)=>{
        if (!isDragging || !canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        let clientX, clientY;
        if (e instanceof MouseEvent) {
            clientX = e.clientX;
            clientY = e.clientY;
        } else {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }
        const x = Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100));
        const y = Math.max(0, Math.min(100, (clientY - rect.top) / rect.height * 100));
        const newConfig = {
            ...themeConfig,
            colorStops: themeConfig.colorStops.map((stop)=>stop.id === isDragging ? {
                    ...stop,
                    x,
                    y
                } : stop)
        };
        setThemeConfig(newConfig);
        updateThemeRealTime(newConfig);
    };
    const handlePointerEnd = ()=>{
        setIsDragging(null);
    };
    // Add color stop
    const addColorStop = ()=>{
        if (themeConfig.colorStops.length >= 3) return;
        const newStop = {
            id: Date.now().toString(),
            color: '#FF6B6B',
            x: 50 + themeConfig.colorStops.length * 15,
            y: 50 + themeConfig.colorStops.length * 10,
            isSelected: false
        };
        const newConfig = {
            ...themeConfig,
            colorStops: [
                ...themeConfig.colorStops,
                newStop
            ]
        };
        setThemeConfig(newConfig);
        updateThemeRealTime(newConfig);
    };
    // Remove color stop
    const removeColorStop = ()=>{
        if (themeConfig.colorStops.length <= 1) return;
        const newConfig = {
            ...themeConfig,
            colorStops: themeConfig.colorStops.slice(0, -1)
        };
        setThemeConfig(newConfig);
        updateThemeRealTime(newConfig);
    };
    // Change selected color
    const changeSelectedColor = (color)=>{
        const selectedStop = themeConfig.colorStops.find((stop)=>stop.isSelected);
        if (!selectedStop) return;
        const newConfig = {
            ...themeConfig,
            colorStops: themeConfig.colorStops.map((stop)=>stop.isSelected ? {
                    ...stop,
                    color
                } : stop)
        };
        setThemeConfig(newConfig);
        updateThemeRealTime(newConfig);
    };
    // Event listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDragging) {
            document.addEventListener('mousemove', handlePointerMove);
            document.addEventListener('mouseup', handlePointerEnd);
            document.addEventListener('touchmove', handlePointerMove, {
                passive: false
            });
            document.addEventListener('touchend', handlePointerEnd);
            return ()=>{
                document.removeEventListener('mousemove', handlePointerMove);
                document.removeEventListener('mouseup', handlePointerEnd);
                document.removeEventListener('touchmove', handlePointerMove);
                document.removeEventListener('touchend', handlePointerEnd);
            };
        }
    }, [
        isDragging,
        themeConfig
    ]);
    // Load saved configuration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('journaColorThemeConfig');
        if (saved) {
            try {
                const config = JSON.parse(saved);
                setThemeConfig(config);
                updateThemeRealTime(config);
            } catch (e) {
                console.error('Failed to load theme config:', e);
            }
        }
    }, []);
    // Cleanup timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (saveTimeout.current) {
                clearTimeout(saveTimeout.current);
            }
        };
    }, []);
    if (!isVisible || !moodFeatureEnabled) return null;
    const currentGradient = generateJournaColorGradient(themeConfig);
    const selectedStop = themeConfig.colorStops.find((stop)=>stop.isSelected) || themeConfig.colorStops[0];
    const presetColors = [
        '#FFFFFF',
        '#FFB3D9',
        '#B19CD9',
        '#FF6B6B',
        '#FF8E53',
        '#FFD93D',
        '#6BCF7F',
        '#4ECDC4',
        '#45B7D1'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            bottom: '40px',
            left: '40px',
            zIndex: 1001,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsExpanded(!isExpanded),
                style: {
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentGradient || '#007AFF',
                    color: 'white',
                    fontSize: '20px',
                    cursor: 'pointer',
                    boxShadow: isExpanded ? '0 8px 25px rgba(0, 122, 255, 0.4), 0 0 0 2px rgba(0, 122, 255, 0.2)' : '0 6px 20px rgba(0, 122, 255, 0.3)',
                    transform: isExpanded ? 'scale(1.05) rotate(45deg)' : 'scale(1) rotate(0deg)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)'
                },
                title: "Journa Color Editor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "8",
                            cy: "8",
                            r: "3",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GradientPanel.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "16",
                            cy: "12",
                            r: "2.5",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GradientPanel.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "18",
                            r: "2",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GradientPanel.tsx",
                            lineNumber: 310,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GradientPanel.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GradientPanel.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    bottom: '110px',
                    left: '40px',
                    width: '380px',
                    maxHeight: '500px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    padding: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                    zIndex: 999,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginBottom: '1.5rem'
                        },
                        children: [
                            {
                                mode: 'auto',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoIcon"],
                                title: 'Auto'
                            },
                            {
                                mode: 'light',
                                icon: '☀️',
                                title: 'Light'
                            },
                            {
                                mode: 'dark',
                                icon: '🌙',
                                title: 'Dark'
                            }
                        ].map(({ mode, icon, title })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const newConfig = {
                                        ...themeConfig,
                                        mode
                                    };
                                    setThemeConfig(newConfig);
                                    updateThemeRealTime(newConfig);
                                },
                                style: {
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    border: themeConfig.mode === mode ? '2px solid #007AFF' : '2px solid rgba(0,0,0,0.1)',
                                    background: themeConfig.mode === mode ? 'rgba(0, 122, 255, 0.1)' : 'rgba(0,0,0,0.05)',
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                title: title,
                                children: mode === 'auto' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoIcon"], {
                                    size: 20,
                                    color: themeConfig.mode === mode ? '#007AFF' : '#666'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GradientPanel.tsx",
                                    lineNumber: 365,
                                    columnNumber: 36
                                }, this) : icon
                            }, mode, false, {
                                fileName: "[project]/src/components/GradientPanel.tsx",
                                lineNumber: 343,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GradientPanel.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: canvasRef,
                        style: {
                            width: '100%',
                            height: '180px',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #f0f0f0, #e8e8e8)',
                            position: 'relative',
                            cursor: 'grab',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(0,0,0,0.1)',
                            overflow: 'hidden'
                        },
                        children: themeConfig.colorStops.map((stop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onMouseDown: (e)=>handleColorStopStart(e, stop.id),
                                onTouchStart: (e)=>handleColorStopStart(e, stop.id),
                                style: {
                                    position: 'absolute',
                                    top: `${stop.y}%`,
                                    left: `${stop.x}%`,
                                    transform: 'translate(-50%, -50%)',
                                    width: stop.isSelected ? '24px' : '20px',
                                    height: stop.isSelected ? '24px' : '20px',
                                    borderRadius: '50%',
                                    background: stop.color,
                                    border: stop.isSelected ? '3px solid white' : '2px solid white',
                                    boxShadow: stop.isSelected ? '0 4px 12px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.3)',
                                    cursor: isDragging === stop.id ? 'grabbing' : 'grab',
                                    transition: isDragging === stop.id ? 'none' : 'all 0.2s ease',
                                    zIndex: stop.isSelected ? 10 : 5
                                }
                            }, stop.id, false, {
                                fileName: "[project]/src/components/GradientPanel.tsx",
                                lineNumber: 387,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GradientPanel.tsx",
                        lineNumber: 371,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: removeColorStop,
                                disabled: themeConfig.colorStops.length <= 1,
                                style: {
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(0,0,0,0.2)',
                                    background: themeConfig.colorStops.length <= 1 ? 'rgba(0,0,0,0.05)' : 'white',
                                    fontSize: '18px',
                                    cursor: themeConfig.colorStops.length <= 1 ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: themeConfig.colorStops.length <= 1 ? 0.5 : 1
                                },
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GradientPanel.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '14px',
                                    color: '#666',
                                    minWidth: '80px',
                                    textAlign: 'center'
                                },
                                children: [
                                    themeConfig.colorStops.length,
                                    "/3 colors"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GradientPanel.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addColorStop,
                                disabled: themeConfig.colorStops.length >= 3,
                                style: {
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(0,0,0,0.2)',
                                    background: themeConfig.colorStops.length >= 3 ? 'rgba(0,0,0,0.05)' : 'white',
                                    fontSize: '18px',
                                    cursor: themeConfig.colorStops.length >= 3 ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: themeConfig.colorStops.length >= 3 ? 0.5 : 1
                                },
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GradientPanel.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GradientPanel.tsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem',
                            flexWrap: 'wrap'
                        },
                        children: presetColors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>changeSelectedColor(color),
                                style: {
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    border: selectedStop.color === color ? '3px solid #007AFF' : '2px solid rgba(0,0,0,0.1)',
                                    background: color,
                                    cursor: 'pointer',
                                    transform: selectedStop.color === color ? 'scale(1.15)' : 'scale(1)',
                                    transition: 'all 0.2s ease'
                                }
                            }, index, false, {
                                fileName: "[project]/src/components/GradientPanel.tsx",
                                lineNumber: 477,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GradientPanel.tsx",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GradientPanel.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GradientPanel.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = GradientPanel;
}}),
"[project]/src/components/MoodToggle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GradientPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GradientPanel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const MoodToggle = ({ initialEnabled = true, className = '', style = {}, currentMood = 'joyful' })=>{
    const [moodFeatureEnabled, setMoodFeatureEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialEnabled);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setCurrentUser(user);
            if (user) {
                // Load user's mood preference from localStorage
                const savedPreference = localStorage.getItem('moodFeatureEnabled');
                if (savedPreference !== null) {
                    const enabled = JSON.parse(savedPreference);
                    setMoodFeatureEnabled(enabled);
                    // Apply initial state to DOM with multiple attempts to ensure it works
                    const applyInitialState = (attempt = 1)=>{
                        console.log(`🎨 Applying initial mood state (attempt ${attempt}):`, enabled);
                        const moodElements = document.querySelectorAll('[data-mood-element]');
                        console.log('🎨 Found mood elements on init:', moodElements.length);
                        if (moodElements.length === 0 && attempt < 5) {
                            // Elements not ready yet, try again
                            setTimeout(()=>applyInitialState(attempt + 1), 200);
                            return;
                        }
                        moodElements.forEach((element)=>{
                            // Ensure elements have proper transitions
                            element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            if (enabled) {
                                // Show elements with data attributes
                                element.setAttribute('data-mood-active', 'true');
                                element.style.display = 'block';
                                element.style.visibility = 'visible';
                                element.style.opacity = '1';
                                element.style.transform = 'scale(1)';
                                console.log('🎨 Initial show:', element.getAttribute('data-mood-element'));
                            } else {
                                // Hide elements with data attributes
                                element.setAttribute('data-mood-active', 'false');
                                element.style.display = 'none';
                                element.style.visibility = 'hidden';
                                element.style.opacity = '0';
                                element.style.transform = 'scale(0.95)';
                                console.log('🎨 Initial hide:', element.getAttribute('data-mood-element'));
                            }
                        });
                        // Also apply to headers
                        const moodHeaders = document.querySelectorAll('[data-mood-header]');
                        moodHeaders.forEach((element)=>{
                            element.style.transition = 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease';
                            if (!enabled) {
                                element.style.background = 'rgba(255, 255, 255, 0.95)';
                                element.style.border = '1px solid rgba(0, 0, 0, 0.1)';
                                element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                            }
                        });
                    };
                    // Start applying initial state
                    setTimeout(()=>applyInitialState(), 100);
                } else {
                    setMoodFeatureEnabled(true);
                }
            } else {
                setMoodFeatureEnabled(false);
            }
        });
        return ()=>unsubscribe();
    }, []);
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
        // 🚫 REMOVED: No more React state updates that cause re-renders and lose highlights!
        // Force IMMEDIATE visual updates for mood backgrounds - no waiting for events
        console.log('🎨 Toggle clicked - searching for mood elements...');
        const findAndUpdateElements = (attempt = 1)=>{
            const moodElements = document.querySelectorAll('[data-mood-element]');
            console.log(`🎨 Found mood elements (attempt ${attempt}):`, moodElements.length);
            if (moodElements.length === 0 && attempt < 3) {
                // Try again if elements not found
                setTimeout(()=>findAndUpdateElements(attempt + 1), 100);
                return;
            }
            moodElements.forEach((element)=>{
                // Add smooth transitions
                element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                if (newEnabled) {
                    // Show elements - use data attributes and CSS properties
                    element.setAttribute('data-mood-active', 'true');
                    element.style.display = 'block';
                    element.style.visibility = 'visible';
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1)';
                    console.log('🎨 Showing mood element:', element.getAttribute('data-mood-element'));
                } else {
                    // Hide elements
                    element.setAttribute('data-mood-active', 'false');
                    element.style.opacity = '0';
                    element.style.transform = 'scale(0.95)';
                    console.log('🎨 Hiding mood element:', element.getAttribute('data-mood-element'));
                    // Hide after animation completes
                    setTimeout(()=>{
                        if (element.getAttribute('data-mood-active') === 'false') {
                            element.style.display = 'none';
                            element.style.visibility = 'hidden';
                        }
                    }, 300);
                }
            });
        };
        // Start the search and update process
        findAndUpdateElements();
        // Also update any mood-controlled headers/panels with smooth transitions
        const moodHeaders = document.querySelectorAll('[data-mood-header]');
        moodHeaders.forEach((element)=>{
            // Add smooth transition for header changes
            element.style.transition = 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease';
            if (newEnabled) {
                // When enabling, clear any overrides to restore original mood styling
                element.style.background = '';
                element.style.border = '';
                element.style.boxShadow = '';
                // Force a complete refresh by temporarily hiding and showing
                const originalDisplay = element.style.display;
                element.style.display = 'none';
                element.offsetHeight; // Force reflow
                element.style.display = originalDisplay;
                console.log('🎨 Header mood styling restored - cleared overrides');
            } else {
                // Save current mood styling and apply neutral background
                element.setAttribute('data-mood-style', element.style.background);
                element.style.background = 'rgba(255, 255, 255, 0.95)';
                element.style.border = '1px solid rgba(0, 0, 0, 0.1)';
                element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                console.log('🎨 Header mood styling removed');
            }
        });
        console.log('🎨 Mood backgrounds updated immediately. Enabled:', newEnabled);
    };
    if (!currentUser) {
        return null; // Don't show toggle for unauthenticated users
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GradientPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentMood: currentMood,
                isVisible: !!currentUser,
                moodFeatureEnabled: moodFeatureEnabled
            }, void 0, false, {
                fileName: "[project]/src/components/MoodToggle.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(MoodToggle);
}}),
"[project]/src/components/ReflectionToggle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ReflectionToggle = ({ articleId, className, style })=>{
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showReflectionPanel, setShowReflectionPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPrompt, setCurrentPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentReflection, setCurrentReflection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isEditingPrompt, setIsEditingPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowDimensions, setWindowDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    // Device detection with proper responsive breakpoints
    const deviceInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const width = windowDimensions.width;
        const height = windowDimensions.height;
        return {
            isMobile: width <= 768,
            isTablet: width > 768 && width <= 1024,
            isDesktop: width > 1024,
            isSmallPhone: width <= 480,
            isLandscape: width > height,
            isIPad11: width >= 820 && width <= 1024,
            // Safe area calculations
            bottomSafeArea: Math.max(100, width <= 768 ? 120 : 80),
            sideMargin: width <= 480 ? 16 : width <= 768 ? 20 : 40
        };
    }, [
        windowDimensions
    ]);
    // Optimized window resize handler with debouncing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateDimensions = ()=>{
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        // Initial set
        updateDimensions();
        let timeoutId;
        const debouncedResize = ()=>{
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateDimensions, 100);
        };
        window.addEventListener('resize', debouncedResize);
        return ()=>{
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeoutId);
        };
    }, []);
    // Authentication state management
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setUser(user);
        });
        return ()=>unsubscribe();
    }, []);
    // Default prompts with better variety
    const defaultPrompts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            "How does this make you feel?",
            "What questions does this raise for you?",
            "How does this relate to your own experience?",
            "What would you do differently?",
            "What surprised you most about this?",
            "What's your main takeaway from this?",
            "How might this change your perspective?"
        ], []);
    const getDefaultPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const randomIndex = Math.floor(Math.random() * defaultPrompts.length);
        return defaultPrompts[randomIndex];
    }, [
        defaultPrompts
    ]);
    // Initialize prompt
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!currentPrompt) {
            setCurrentPrompt(getDefaultPrompt());
        }
    }, [
        currentPrompt,
        getDefaultPrompt
    ]);
    // Optimized toggle handler
    const toggleReflectionPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsAnimating(true);
        setShowReflectionPanel((prev)=>!prev);
        setTimeout(()=>setIsAnimating(false), 300);
        // Close editing mode when panel closes
        if (showReflectionPanel) {
            setIsEditingPrompt(false);
            setCurrentReflection('');
        }
    }, [
        showReflectionPanel
    ]);
    // Prompt editing handlers
    const handlePromptSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsEditingPrompt(false);
        if (!currentPrompt.trim()) {
            setCurrentPrompt(getDefaultPrompt());
        }
    }, [
        currentPrompt,
        getDefaultPrompt
    ]);
    // Reflection submission with proper error handling
    const handleReflectionSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentReflection.trim() || isSubmitting || !user) return;
        setIsSubmitting(true);
        try {
            // Import dynamically to reduce bundle size
            const { saveReflectionResponse } = await __turbopack_context__.r("[project]/src/services/reflectionService.ts [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
            await saveReflectionResponse(articleId, `custom_${Date.now()}`, currentPrompt, currentReflection.trim(), 0, true // Private
            );
            // Success feedback
            setCurrentReflection('');
            setShowReflectionPanel(false);
            // Optional: Show success toast
            console.log('Reflection saved successfully');
        } catch (error) {
            console.error('Error saving reflection:', error);
        // Optional: Show error toast
        } finally{
            setIsSubmitting(false);
        }
    }, [
        currentReflection,
        isSubmitting,
        user,
        articleId,
        currentPrompt
    ]);
    // Memoized styles for performance
    const buttonStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            position: 'fixed',
            bottom: deviceInfo.isMobile ? `max(${deviceInfo.bottomSafeArea + 20}px, calc(${deviceInfo.bottomSafeArea}px + env(safe-area-inset-bottom)))` : '40px',
            right: `${deviceInfo.sideMargin}px`,
            width: deviceInfo.isSmallPhone ? '48px' : deviceInfo.isMobile ? '52px' : '56px',
            height: deviceInfo.isSmallPhone ? '48px' : deviceInfo.isMobile ? '52px' : '56px',
            borderRadius: '50%',
            background: showReflectionPanel ? 'linear-gradient(135deg, #1d4ed8, #7c3aed)' : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            border: 'none',
            boxShadow: showReflectionPanel ? '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.2)' : '0 6px 20px rgba(59, 130, 246, 0.3)',
            cursor: 'pointer',
            zIndex: 1002,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isAnimating ? 'scale(1.1)' : showReflectionPanel ? 'scale(1.05)' : 'scale(1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            contain: 'layout style paint',
            willChange: isAnimating ? 'transform' : 'auto',
            ...style
        }), [
        deviceInfo,
        showReflectionPanel,
        isAnimating,
        style
    ]);
    const panelStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            position: 'fixed',
            bottom: deviceInfo.isMobile ? `max(${deviceInfo.bottomSafeArea + 80}px, calc(${deviceInfo.bottomSafeArea + 60}px + env(safe-area-inset-bottom)))` : '110px',
            right: deviceInfo.isMobile ? `${deviceInfo.sideMargin}px` : '40px',
            left: deviceInfo.isMobile ? `${deviceInfo.sideMargin}px` : 'auto',
            width: deviceInfo.isMobile ? 'auto' : '380px',
            maxWidth: deviceInfo.isMobile ? 'none' : '380px',
            maxHeight: deviceInfo.isLandscape && deviceInfo.isMobile ? '60vh' : deviceInfo.isMobile ? '50vh' : '500px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: deviceInfo.isSmallPhone ? '16px' : deviceInfo.isMobile ? '18px' : '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            zIndex: 1001,
            padding: deviceInfo.isSmallPhone ? '16px' : deviceInfo.isMobile ? '18px' : '24px',
            overflow: 'hidden auto',
            contain: 'layout style paint',
            transform: 'translateZ(0)'
        }), [
        deviceInfo
    ]);
    // Don't render if no user
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "data-reflection-element": "floating-button",
                onClick: toggleReflectionPanel,
                className: `reflection-component hw-accelerated ${className || ''}`,
                style: buttonStyles,
                title: showReflectionPanel ? "Close reflection" : "Open reflection",
                "aria-label": showReflectionPanel ? "Close reflection panel" : "Open reflection panel",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                    },
                    children: showReflectionPanel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"], {
                        size: deviceInfo.isSmallPhone ? 12 : 14,
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 234,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WriteIcon"], {
                        size: deviceInfo.isSmallPhone ? 12 : 14,
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ReflectionToggle.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ReflectionToggle.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            showReflectionPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "reflection-component floating-panel hw-accelerated",
                style: panelStyles,
                role: "dialog",
                "aria-labelledby": "reflection-title",
                "aria-modal": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
              
              .reflection-panel-enter {
                animation: gentleSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              }
            `
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '20px',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "reflection-title",
                                style: {
                                    margin: '0 0 12px 0',
                                    fontSize: deviceInfo.isSmallPhone ? '14px' : '16px',
                                    fontWeight: '600',
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkleIcon"], {
                                        size: deviceInfo.isSmallPhone ? 14 : 16,
                                        color: "#3b82f6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    "Time to Reflect"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'relative'
                                },
                                children: isEditingPrompt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    className: "mobile-optimized-input",
                                    style: {
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '2px solid #3b82f6',
                                        borderRadius: '12px',
                                        background: 'white',
                                        fontSize: deviceInfo.isSmallPhone ? '13px' : '14px',
                                        textAlign: 'center',
                                        outline: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionToggle.tsx",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsEditingPrompt(true),
                                    style: {
                                        background: 'transparent',
                                        border: '2px solid transparent',
                                        borderRadius: '12px',
                                        padding: '8px 12px',
                                        fontSize: deviceInfo.isSmallPhone ? '13px' : '14px',
                                        color: '#3b82f6',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        fontWeight: '500',
                                        textAlign: 'center',
                                        width: '100%'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                        e.currentTarget.style.background = '#f8fafc';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.background = 'transparent';
                                    },
                                    title: "Click to edit prompt",
                                    children: currentPrompt
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionToggle.tsx",
                                    lineNumber: 319,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: currentReflection,
                        onChange: (e)=>setCurrentReflection(e.target.value),
                        placeholder: "Share your thoughts...",
                        className: "mobile-optimized-input reflection-input",
                        "data-mobile": "true",
                        style: {
                            width: '100%',
                            height: deviceInfo.isSmallPhone ? '100px' : '120px',
                            padding: '12px',
                            border: '2px solid #e2e8f0',
                            borderRadius: '12px',
                            background: 'white',
                            fontSize: deviceInfo.isSmallPhone ? '15px' : '16px',
                            fontFamily: 'inherit',
                            resize: 'vertical',
                            outline: 'none',
                            transition: 'border-color 0.2s ease',
                            marginBottom: '16px'
                        },
                        onFocus: (e)=>{
                            e.target.style.borderColor = '#3b82f6';
                            // Ensure the input is visible on mobile
                            if (deviceInfo.isMobile) {
                                setTimeout(()=>{
                                    e.target.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'center'
                                    });
                                }, 100);
                            }
                        },
                        onBlur: (e)=>{
                            e.target.style.borderColor = '#e2e8f0';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            flexDirection: deviceInfo.isSmallPhone ? 'column' : 'row'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowReflectionPanel(false),
                                style: {
                                    background: 'transparent',
                                    border: '2px solid #e2e8f0',
                                    borderRadius: '12px',
                                    padding: deviceInfo.isSmallPhone ? '12px 20px' : '8px 16px',
                                    fontSize: deviceInfo.isSmallPhone ? '15px' : '14px',
                                    color: '#64748b',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.2s ease',
                                    width: deviceInfo.isSmallPhone ? '100%' : 'auto',
                                    minHeight: '44px' // Touch-friendly
                                },
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReflectionSubmit,
                                disabled: !currentReflection.trim() || isSubmitting,
                                style: {
                                    background: currentReflection.trim() ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : '#e2e8f0',
                                    border: 'none',
                                    borderRadius: '12px',
                                    padding: deviceInfo.isSmallPhone ? '12px 20px' : '8px 20px',
                                    fontSize: deviceInfo.isSmallPhone ? '15px' : '14px',
                                    color: currentReflection.trim() ? 'white' : '#94a3b8',
                                    cursor: currentReflection.trim() ? 'pointer' : 'not-allowed',
                                    fontWeight: '600',
                                    transition: 'all 0.2s ease',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    width: deviceInfo.isSmallPhone ? '100%' : 'auto',
                                    minHeight: '44px' // Touch-friendly
                                },
                                children: isSubmitting ? 'Saving...' : 'Save Reflection'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionToggle.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionToggle.tsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReflectionToggle.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(ReflectionToggle);
}}),
"[project]/src/utils/moodThemes.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateGradientStyle": (()=>generateGradientStyle),
    "gradientTypes": (()=>gradientTypes),
    "moodThemes": (()=>moodThemes),
    "updateAllGradients": (()=>updateAllGradients)
});
const moodThemes = {
    joyful: {
        gradientStart: '#fde047',
        gradientEnd: '#fb923c',
        accent: '#f59e0b'
    },
    angry: {
        gradientStart: '#f87171',
        gradientEnd: '#dc2626',
        accent: '#ef4444'
    },
    energetic: {
        gradientStart: '#34d399',
        gradientEnd: '#059669',
        accent: '#10b981'
    },
    peaceful: {
        gradientStart: '#60a5fa',
        gradientEnd: '#2563eb',
        accent: '#3b82f6'
    },
    reflective: {
        gradientStart: '#a78bfa',
        gradientEnd: '#7c3aed',
        accent: '#8b5cf6'
    },
    sad: {
        gradientStart: '#94a3b8',
        gradientEnd: '#475569',
        accent: '#64748b'
    },
    calm: {
        gradientStart: '#67e8f9',
        gradientEnd: '#0891b2',
        accent: '#06b6d4'
    }
};
const gradientTypes = {
    linear: 'linear',
    radial: 'radial',
    conic: 'conic',
    waves: 'waves',
    dots: 'dots',
    mesh: 'mesh'
};
const generateGradientStyle = (mood, gradientType, opacity = 0.4)=>{
    const theme = moodThemes[mood];
    const opacityHex = Math.round(opacity * 255).toString(16).padStart(2, '0');
    switch(gradientType){
        case 'linear':
            return `linear-gradient(45deg, ${theme.gradientStart}${opacityHex}, ${theme.gradientEnd}${opacityHex})`;
        case 'radial':
            return `radial-gradient(circle at 50% 50%, ${theme.gradientStart}${opacityHex} 0%, ${theme.gradientEnd}${opacityHex} 100%)`;
        case 'conic':
            return `conic-gradient(from 0deg at 50% 50%, ${theme.gradientStart}${opacityHex}, ${theme.gradientEnd}${opacityHex}, ${theme.accent}${opacityHex}, ${theme.gradientStart}${opacityHex})`;
        case 'waves':
            return `
        radial-gradient(ellipse 200% 100% at 50% 0%, ${theme.gradientStart}${opacityHex}, transparent 50%), 
        radial-gradient(ellipse 200% 100% at 50% 100%, ${theme.gradientEnd}${opacityHex}, transparent 50%)
      `;
        case 'dots':
            return `
        radial-gradient(circle at 20% 20%, ${theme.gradientStart}${opacityHex} 8px, transparent 8px),
        radial-gradient(circle at 80% 80%, ${theme.gradientEnd}${opacityHex} 8px, transparent 8px),
        radial-gradient(circle at 40% 60%, ${theme.accent}${Math.round(opacity * 0.6 * 255).toString(16).padStart(2, '0')} 4px, transparent 4px)
      `;
        case 'mesh':
            return `
        radial-gradient(circle at 20% 20%, ${theme.gradientStart}${opacityHex}, transparent 50%), 
        radial-gradient(circle at 80% 60%, ${theme.gradientEnd}${opacityHex}, transparent 50%),
        radial-gradient(circle at 40% 90%, ${theme.accent}${Math.round(opacity * 0.8 * 255).toString(16).padStart(2, '0')}, transparent 50%),
        radial-gradient(circle at 70% 30%, ${theme.gradientStart}${Math.round(opacity * 0.6 * 255).toString(16).padStart(2, '0')}, transparent 50%)
      `;
        default:
            return `linear-gradient(45deg, ${theme.gradientStart}${opacityHex}, ${theme.gradientEnd}${opacityHex})`;
    }
};
const updateAllGradients = (mood, gradientType)=>{
    const elements = document.querySelectorAll('[data-mood-element]');
    elements.forEach((element)=>{
        const elementType = element.getAttribute('data-mood-element');
        element.style.backgroundImage = generateGradientStyle(mood, gradientType, 0.4);
        element.style.transition = 'background-image 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
};
}}),
"[project]/src/components/ReflectionModeToggle.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/moodThemes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ReflectionModeToggle = ({ className = '', style = {} })=>{
    const [reflectionsEnabled, setReflectionsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('reflective');
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setCurrentUser(user);
            if (user) {
                // Load user's reflection preference from localStorage
                const savedPreference = localStorage.getItem('reflectionsEnabled');
                if (savedPreference !== null) {
                    const enabled = JSON.parse(savedPreference);
                    setReflectionsEnabled(enabled);
                    // Apply initial state to DOM
                    setTimeout(()=>{
                        const reflectionElements = document.querySelectorAll('[data-reflection-element]');
                        reflectionElements.forEach((element)=>{
                            element.style.display = enabled ? '' : 'none';
                        });
                    }, 100);
                } else {
                    setReflectionsEnabled(true);
                }
            } else {
                setReflectionsEnabled(false);
            }
        });
        return ()=>unsubscribe();
    }, []);
    const handleToggle = ()=>{
        console.log('ReflectionModeToggle clicked - should NOT trigger parent re-render');
        if (!currentUser) return;
        // Optimistic update with animation
        setIsAnimating(true);
        setTimeout(()=>setIsAnimating(false), 300);
        const newEnabled = !reflectionsEnabled;
        setReflectionsEnabled(newEnabled);
        localStorage.setItem('reflectionsEnabled', JSON.stringify(newEnabled));
        console.log('Reflection mode toggled to:', newEnabled);
        // Force immediate DOM updates for reflection components
        const reflectionElements = document.querySelectorAll('[data-reflection-element]');
        reflectionElements.forEach((element)=>{
            if (newEnabled) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
        // Dispatch custom event to notify other components without causing re-renders
        window.dispatchEvent(new CustomEvent('reflectionModeToggle', {
            detail: {
                enabled: newEnabled
            }
        }));
    };
    if (!currentUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            style: {
                ...style,
                opacity: 0.6,
                cursor: 'not-allowed'
            },
            disabled: true,
            title: "Sign in to use reflections",
            children: "OFF"
        }, void 0, false, {
            fileName: "[project]/src/components/ReflectionModeToggle.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleToggle,
        className: className,
        style: {
            ...style,
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
            background: reflectionsEnabled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)',
            color: reflectionsEnabled ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moodThemes"][mood].accent : '#F7FAFC'
        },
        title: reflectionsEnabled ? "Turn off reflections" : "Turn on reflections",
        children: reflectionsEnabled ? 'ON' : 'OFF'
    }, void 0, false, {
        fileName: "[project]/src/components/ReflectionModeToggle.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(ReflectionModeToggle);
}}),
"[project]/src/styles/ArticleWithHighlights.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

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
"[project]/src/services/articleService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/utils/syntaxHighlighter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "autoHighlightCodeBlocks": (()=>autoHighlightCodeBlocks),
    "highlightCodeBlocks": (()=>highlightCodeBlocks),
    "highlightDynamicContent": (()=>highlightDynamicContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$prism$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/prism.js [app-ssr] (ecmascript)");
// Import language support
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$javascript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-javascript.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$typescript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-typescript.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$jsx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-jsx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$tsx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-tsx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-css.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$scss$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-scss.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$python$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-python.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$java$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-java.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-c.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$cpp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-cpp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$csharp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-csharp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$php$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-php.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$ruby$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-ruby.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$go$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-go.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$rust$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-rust.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$sql$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-sql.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$bash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-bash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$yaml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-yaml.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prismjs$2f$components$2f$prism$2d$markdown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prismjs/components/prism-markdown.js [app-ssr] (ecmascript)");
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
    if ("TURBOPACK compile-time truthy", 1) return; // SSR guard
    "TURBOPACK unreachable";
    const codeBlocks = undefined;
}
function autoHighlightCodeBlocks() {
    if ("TURBOPACK compile-time truthy", 1) return; // SSR guard
    "TURBOPACK unreachable";
    const highlightOnLoad = undefined;
}
function highlightDynamicContent() {
    if ("TURBOPACK compile-time truthy", 1) return; // SSR guard
    "TURBOPACK unreachable";
}
}}),
"[project]/src/components/ClientSideHighlighter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientSideHighlighter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Create and inject the script
        const script = document.createElement('script');
        script.textContent = CLIENT_SIDE_HIGHLIGHTER_SCRIPT;
        document.head.appendChild(script);
        return ()=>{
            // Cleanup if needed
            try {
                document.head.removeChild(script);
            } catch (_e) {
            // Script might already be removed
            }
        };
    }, []);
    return null; // This component doesn't render anything
}
}}),
"[project]/src/utils/getMoodFromText.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMoodFromText": (()=>getMoodFromText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sentiment$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sentiment/lib/index.js [app-ssr] (ecmascript)");
;
function getMoodFromText(text) {
    const sentiment = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sentiment$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
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
}}),
"[project]/src/components/ReflectionRoom/ReflectionRoom.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "authPrompt": "ReflectionRoom-module__auS-8q__authPrompt",
  "authorBadge": "ReflectionRoom-module__auS-8q__authorBadge",
  "authorMessage": "ReflectionRoom-module__auS-8q__authorMessage",
  "authorName": "ReflectionRoom-module__auS-8q__authorName",
  "backdrop": "ReflectionRoom-module__auS-8q__backdrop",
  "characterCount": "ReflectionRoom-module__auS-8q__characterCount",
  "closeButton": "ReflectionRoom-module__auS-8q__closeButton",
  "deleteButton": "ReflectionRoom-module__auS-8q__deleteButton",
  "deleteSpinner": "ReflectionRoom-module__auS-8q__deleteSpinner",
  "emptyIcon": "ReflectionRoom-module__auS-8q__emptyIcon",
  "emptyState": "ReflectionRoom-module__auS-8q__emptyState",
  "errorState": "ReflectionRoom-module__auS-8q__errorState",
  "focused": "ReflectionRoom-module__auS-8q__focused",
  "header": "ReflectionRoom-module__auS-8q__header",
  "headerTitle": "ReflectionRoom-module__auS-8q__headerTitle",
  "holographic-shine": "ReflectionRoom-module__auS-8q__holographic-shine",
  "inputContainer": "ReflectionRoom-module__auS-8q__inputContainer",
  "loadingSpinner": "ReflectionRoom-module__auS-8q__loadingSpinner",
  "loadingState": "ReflectionRoom-module__auS-8q__loadingState",
  "message": "ReflectionRoom-module__auS-8q__message",
  "messageContent": "ReflectionRoom-module__auS-8q__messageContent",
  "messageDeleting": "ReflectionRoom-module__auS-8q__messageDeleting",
  "messageForm": "ReflectionRoom-module__auS-8q__messageForm",
  "messageHeader": "ReflectionRoom-module__auS-8q__messageHeader",
  "messageHeaderRight": "ReflectionRoom-module__auS-8q__messageHeaderRight",
  "messageInput": "ReflectionRoom-module__auS-8q__messageInput",
  "messageTime": "ReflectionRoom-module__auS-8q__messageTime",
  "messagesContainer": "ReflectionRoom-module__auS-8q__messagesContainer",
  "messagesList": "ReflectionRoom-module__auS-8q__messagesList",
  "mobileModal": "ReflectionRoom-module__auS-8q__mobileModal",
  "otherMessage": "ReflectionRoom-module__auS-8q__otherMessage",
  "ownMessage": "ReflectionRoom-module__auS-8q__ownMessage",
  "reflectionArrow": "ReflectionRoom-module__auS-8q__reflectionArrow",
  "reflectionIcon": "ReflectionRoom-module__auS-8q__reflectionIcon",
  "reflectionJoin": "ReflectionRoom-module__auS-8q__reflectionJoin",
  "reflectionJoinText": "ReflectionRoom-module__auS-8q__reflectionJoinText",
  "reflectionLabel": "ReflectionRoom-module__auS-8q__reflectionLabel",
  "reflectionRoomContainer": "ReflectionRoom-module__auS-8q__reflectionRoomContainer",
  "reflectionSearchBar": "ReflectionRoom-module__auS-8q__reflectionSearchBar",
  "reflectionSearchWrapper": "ReflectionRoom-module__auS-8q__reflectionSearchWrapper",
  "reflectionText": "ReflectionRoom-module__auS-8q__reflectionText",
  "reflectionTopic": "ReflectionRoom-module__auS-8q__reflectionTopic",
  "reflectionUnread": "ReflectionRoom-module__auS-8q__reflectionUnread",
  "sendButton": "ReflectionRoom-module__auS-8q__sendButton",
  "sendingSpinner": "ReflectionRoom-module__auS-8q__sendingSpinner",
  "sidebar": "ReflectionRoom-module__auS-8q__sidebar",
  "spin": "ReflectionRoom-module__auS-8q__spin",
  "topicLabel": "ReflectionRoom-module__auS-8q__topicLabel",
  "topicSection": "ReflectionRoom-module__auS-8q__topicSection",
  "topicText": "ReflectionRoom-module__auS-8q__topicText",
  "userName": "ReflectionRoom-module__auS-8q__userName",
});
}}),
"[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoom.module.css [app-ssr] (css module)");
'use client';
;
;
;
const ReflectionRoomButton = ({ topic, unreadCount, isOpen, onClick })=>{
    const truncatedTopic = topic.length > 60 ? `${topic.substring(0, 60)}...` : topic;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionSearchBar,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4
        },
        whileHover: {
            scale: 1.02
        },
        whileTap: {
            scale: 0.98
        },
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionSearchWrapper} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].focused : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionIcon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 10h8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 14h6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionText,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionLabel,
                            children: "Reflect on:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionTopic,
                            children: [
                                '"',
                                truncatedTopic,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionJoin,
                    children: [
                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionUnread,
                            children: unreadCount
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionJoinText,
                            children: "Join discussion"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionArrow,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 18l6-6-6-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ReflectionRoomButton;
}}),
"[project]/src/firebase/notifications.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
;
;
async function createCommentNotification(ownerId, articleId, articleSlug, articleTitle, commentId, commentText) {
    try {
        // Skip if the owner is the commenter (don't notify yourself)
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
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
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
            articleSlug,
            articleTitle
        };
        // Add to Firestore
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'notifications'), notification);
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
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
        };
        // Add to Firestore
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'notifications'), notification);
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
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        // Create base query
        const notificationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'notifications');
        let q;
        if (unreadOnly) {
            // Only fetch unread notifications
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('read', '==', false), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(100));
        } else {
            // Fetch all notifications
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(100));
        }
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        const notificationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'notifications', notificationId);
        const notificationSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(notificationRef);
        if (!notificationSnap.exists()) {
            throw new Error('Notification not found');
        }
        const notificationData = notificationSnap.data();
        // Check if the notification belongs to the current user
        if (notificationData.userId !== currentUser.uid) {
            throw new Error('Unauthorized access to notification');
        }
        // Update the read status
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(notificationRef, {
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
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        const notificationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'notifications');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('read', '==', false));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        // Create an array of promises to update each notification
        const updatePromises = querySnapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(doc.ref, {
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
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            throw new Error('User not authenticated');
        }
        const notificationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'notifications', notificationId);
        const notificationSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(notificationRef);
        if (!notificationSnap.exists()) {
            throw new Error('Notification not found');
        }
        const notificationData = notificationSnap.data();
        // Check if the notification belongs to the current user
        if (notificationData.userId !== currentUser.uid) {
            throw new Error('Unauthorized access to notification');
        }
        // Delete the notification
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(notificationRef);
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
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!currentUser) {
            return 0;
        }
        const notificationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'notifications');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(notificationsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', currentUser.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('read', '==', false));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
        return querySnapshot.size;
    } catch (error) {
        console.error('Error counting unread notifications:', error);
        return 0;
    }
}
}}),
"[project]/src/services/userService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createUserProfile": (()=>createUserProfile),
    "deleteUserAccount": (()=>deleteUserAccount),
    "followUser": (()=>followUser),
    "getFollowers": (()=>getFollowers),
    "getFollowing": (()=>getFollowing),
    "getUserProfile": (()=>getUserProfile),
    "getUserProfileByEmail": (()=>getUserProfileByEmail),
    "isFollowing": (()=>isFollowing),
    "isUsernameTaken": (()=>isUsernameTaken),
    "searchUsers": (()=>searchUsers),
    "unfollowUser": (()=>unfollowUser),
    "updateUserBio": (()=>updateUserBio),
    "updateUserInterests": (()=>updateUserInterests)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-7829abf2.js [app-ssr] (ecmascript) <export al as updateProfile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__G__as__deleteUser$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-7829abf2.js [app-ssr] (ecmascript) <export G as deleteUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/notifications.ts [app-ssr] (ecmascript)");
;
;
;
;
async function isUsernameTaken(username) {
    try {
        const usernameQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('username', '==', username.toLowerCase()));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(usernameQuery);
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
            console.log('User profile already exists, updating instead of creating');
            // Update existing profile
            const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
                firstName: profile.firstName,
                lastName: profile.lastName,
                username: profile.username.toLowerCase(),
                email: profile.email.toLowerCase(),
                bio: profile.bio || existingUserProfile.bio || ''
            });
            // Update the user's display name in Firebase Auth
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser, {
                    displayName: profile.username
                });
            }
            return;
        }
        // Check if email already exists in another profile
        const emailQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('email', '==', profile.email.toLowerCase()));
        const emailQuerySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(emailQuery);
        if (!emailQuerySnapshot.empty) {
            throw new Error('Email is already associated with another account');
        }
        // Check if the username is already taken
        const usernameTaken = await isUsernameTaken(profile.username);
        if (usernameTaken) {
            throw new Error('Username is already taken');
        }
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        // Create the user profile
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(userRef, {
            uid,
            firstName: profile.firstName,
            lastName: profile.lastName,
            username: profile.username.toLowerCase(),
            email: profile.email.toLowerCase(),
            bio: profile.bio || '',
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
        });
        // Update the user's display name in Firebase Auth
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser, {
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
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (userDoc.exists()) {
            return userDoc.data();
        }
        return null;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
}
async function getUserProfileByEmail(email) {
    if (!email) return null;
    try {
        const emailQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('email', '==', email.toLowerCase()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(1));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(emailQuery);
        if (!querySnapshot.empty) {
            // Should only be one user with a unique email
            return querySnapshot.docs[0].data();
        }
        return null;
    } catch (error) {
        console.error('Error fetching user profile by email:', error);
        throw error; // Re-throw to be handled by the caller
    }
}
async function updateUserBio(uid, bio) {
    try {
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
            bio
        });
    } catch (error) {
        console.error('Error updating user bio:', error);
        throw error;
    }
}
async function updateUserInterests(uid, interests) {
    try {
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
            interests
        });
        console.log(`Interests updated for user ${uid}:`, interests);
    } catch (error) {
        console.error('Error updating user interests:', error);
        throw error;
    }
}
async function searchUsers(searchTerm) {
    try {
        if (!searchTerm || searchTerm.trim().length < 2) {
            return [];
        }
        const searchTermLower = searchTerm.toLowerCase().trim();
        // Create a query to find users whose username contains the search term
        const usersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users');
        const usersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(usersRef);
        // Filter users locally since Firestore doesn't support contains or regexp queries directly
        const matchingUsers = usersSnapshot.docs.map((doc)=>{
            // Get all data from the document and ensure it has the correct UserProfile shape
            const userData = doc.data();
            return userData;
        }).filter((user)=>{
            const usernameLower = user.username.toLowerCase();
            const firstNameLower = user.firstName.toLowerCase();
            const lastNameLower = user.lastName.toLowerCase();
            const fullNameLower = `${firstNameLower} ${lastNameLower}`;
            return usernameLower.includes(searchTermLower) || firstNameLower.includes(searchTermLower) || lastNameLower.includes(searchTermLower) || fullNameLower.includes(searchTermLower);
        });
        return matchingUsers;
    } catch (error) {
        console.error('Error searching users:', error);
        return [];
    }
}
async function followUser(followerUid, followingUid) {
    try {
        // Don't allow users to follow themselves
        if (followerUid === followingUid) {
            throw new Error('You cannot follow yourself');
        }
        // Update the follower's following list
        const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', followerUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(followerRef, {
            following: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(followingUid),
            followingCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        // Update the following's followers list
        const followingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', followingUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(followingRef, {
            followers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayUnion"])(followerUid),
            followersCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        // Get the follower's profile to use their name for the notification
        const followerDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(followerRef);
        if (followerDoc.exists()) {
            const followerData = followerDoc.data();
            // Create a notification for the user being followed
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFollowNotification"])(followingUid, `${followerData.firstName} ${followerData.lastName}`, followerUid, followerData.username);
        }
    } catch (error) {
        console.error('Error following user:', error);
        throw error;
    }
}
async function unfollowUser(followerUid, followingUid) {
    try {
        // Update the follower's following list
        const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', followerUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(followerRef, {
            following: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRemove"])(followingUid),
            followingCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(-1)
        });
        // Update the following's followers list
        const followingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', followingUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(followingRef, {
            followers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRemove"])(followerUid),
            followersCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["increment"])(-1)
        });
    } catch (error) {
        console.error('Error unfollowing user:', error);
        throw error;
    }
}
async function isFollowing(followerUid, followingUid) {
    try {
        const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', followerUid);
        const followerDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(followerRef);
        if (!followerDoc.exists()) {
            return false;
        }
        const userData = followerDoc.data();
        return userData.following?.includes(followingUid) || false;
    } catch (error) {
        console.error('Error checking follow status:', error);
        throw error;
    }
}
async function getFollowing(uid, maxLimit = 50) {
    try {
        // First get the user to access their following list
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (!userDoc.exists()) {
            return [];
        }
        const userData = userDoc.data();
        const followingList = userData.following || [];
        if (followingList.length === 0) {
            return [];
        }
        // Fetch each following user's profile
        const followingUsers = [];
        const batchLimit = Math.min(followingList.length, maxLimit);
        for(let i = 0; i < batchLimit; i++){
            const followingId = followingList[i];
            const followingUserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', followingId);
            const followingUserDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(followingUserRef);
            if (followingUserDoc.exists()) {
                followingUsers.push(followingUserDoc.data());
            }
        }
        return followingUsers;
    } catch (error) {
        console.error('Error getting following list:', error);
        throw error;
    }
}
async function getFollowers(uid, maxLimit = 50) {
    try {
        // First get the user to access their followers list
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
        if (!userDoc.exists()) {
            return [];
        }
        const userData = userDoc.data();
        const followersList = userData.followers || [];
        if (followersList.length === 0) {
            return [];
        }
        // Fetch each follower's profile
        const followers = [];
        const batchLimit = Math.min(followersList.length, maxLimit);
        for(let i = 0; i < batchLimit; i++){
            const followerId = followersList[i];
            const followerUserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', followerId);
            const followerUserDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(followerUserRef);
            if (followerUserDoc.exists()) {
                followers.push(followerUserDoc.data());
            }
        }
        return followers;
    } catch (error) {
        console.error('Error getting followers list:', error);
        throw error;
    }
}
async function deleteUserAccount(uid) {
    try {
        // 1. Delete user profile from Firestore
        const userProfileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(userProfileRef);
        console.log(`User profile for UID ${uid} deleted from Firestore.`);
        // 2. Delete user from Firebase Authentication
        // This requires the current user to be the one being deleted.
        // And the user must have signed in recently.
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (currentUser && currentUser.uid === uid) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__G__as__deleteUser$3e$__["deleteUser"])(currentUser);
            console.log(`User account for UID ${uid} deleted from Firebase Authentication.`);
        } else if (!currentUser) {
            console.error('No current user authenticated. Cannot delete Firebase Auth user.');
            throw new Error('Authentication required to delete account.');
        } else {
            // This case (currentUser.uid !== uid) should ideally not happen if the function
            // is called correctly from the client for the logged-in user.
            console.error('Current authenticated user does not match UID to be deleted.');
            throw new Error('Mismatch between authenticated user and account to be deleted.');
        }
    } catch (error) {
        console.error('Error deleting user account:', error);
        // Specific check for re-authentication requirement
        if (error.code === 'auth/requires-recent-login') {
            throw new Error('This operation is sensitive and requires recent authentication. Please sign out and sign back in, then try again.');
        }
        throw new Error('Failed to delete user account. ' + error.message);
    }
}
}}),
"[project]/src/components/ReflectionRoom/useReflectionRoom.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useReflectionRoom": (()=>useReflectionRoom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/userService.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const useReflectionRoom = (articleId)=>{
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [topic, setTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
    // Load metadata (topic)
    const loadMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const metadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'metadata', 'main');
            const metadataSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(metadataRef);
            if (metadataSnap.exists()) {
                const data = metadataSnap.data();
                setTopic(data.topic);
            }
        } catch (error) {
            console.error('Error loading reflection metadata:', error);
            setError('Failed to load discussion topic');
        }
    }, [
        articleId
    ]);
    // Set up real-time listener for messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!articleId) return;
        setLoading(true);
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'messages');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'asc'));
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snapshot)=>{
            const messagesData = [];
            let unreadCounter = 0;
            snapshot.forEach((doc)=>{
                const data = doc.data();
                const message = {
                    id: doc.id,
                    userId: data.userId,
                    userName: data.userName,
                    content: data.content,
                    createdAt: data.createdAt,
                    read: data.read || false
                };
                messagesData.push(message);
                // Count unread messages not from current user
                if (!message.read && message.userId !== currentUser?.uid) {
                    unreadCounter++;
                }
            });
            setMessages(messagesData);
            setUnreadCount(unreadCounter);
            setLoading(false);
            setError(null);
        }, (error)=>{
            console.error('Error listening to messages:', error);
            setError('Failed to load messages');
            setLoading(false);
        });
        // Load metadata
        loadMetadata();
        return ()=>unsubscribe();
    }, [
        articleId,
        currentUser?.uid,
        loadMetadata
    ]);
    // Send a new message
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (content)=>{
        if (!currentUser || !content.trim()) return;
        try {
            // Get user profile for display name
            const userProfile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfile"])(currentUser.uid);
            const userName = userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : currentUser.displayName || currentUser.email?.split('@')[0] || 'Anonymous';
            const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'messages');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(messagesRef, {
                userId: currentUser.uid,
                userName: userName,
                content: content.trim(),
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                read: false
            });
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }, [
        currentUser,
        articleId
    ]);
    // Mark all messages as read
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentUser) return;
        try {
            const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'messages');
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(messagesRef);
            const updatePromises = snapshot.docs.filter((doc)=>{
                const data = doc.data();
                return !data.read && data.userId !== currentUser.uid;
            }).map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(doc.ref, {
                    read: true
                }, {
                    merge: true
                }));
            await Promise.all(updatePromises);
        } catch (error) {
            console.error('Error marking messages as read:', error);
        }
    }, [
        currentUser,
        articleId
    ]);
    // Create initial metadata for new reflection room
    const createReflectionRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (discussionTopic)=>{
        if (!currentUser) return;
        try {
            const metadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'metadata', 'main');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(metadataRef, {
                topic: discussionTopic,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                authorId: currentUser.uid
            });
            setTopic(discussionTopic);
        } catch (error) {
            console.error('Error creating reflection room:', error);
            throw error;
        }
    }, [
        currentUser,
        articleId
    ]);
    // Delete a message (only the message author can delete)
    const deleteMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (messageId)=>{
        if (!currentUser) return;
        try {
            const messageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'messages', messageId);
            // First verify the message belongs to the current user
            const messageSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(messageRef);
            if (!messageSnap.exists()) {
                throw new Error('Message not found');
            }
            const messageData = messageSnap.data();
            if (messageData.userId !== currentUser.uid) {
                throw new Error('You can only delete your own messages');
            }
            // Delete the message
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(messageRef);
        } catch (error) {
            console.error('Error deleting message:', error);
            throw error;
        }
    }, [
        currentUser,
        articleId
    ]);
    // Clear all messages in the reflection room (for topic changes)
    const clearAllMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentUser) return;
        try {
            const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'messages');
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(messagesRef);
            // Delete all messages
            const deletePromises = snapshot.docs.map((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(doc.ref));
            await Promise.all(deletePromises);
        } catch (error) {
            console.error('Error clearing messages:', error);
            throw error;
        }
    }, [
        currentUser,
        articleId
    ]);
    // Update reflection room topic and clear chat
    const updateReflectionTopic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (newTopic)=>{
        if (!currentUser) return;
        try {
            // First verify the user is the author of the reflection room
            const metadataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reflections', articleId, 'metadata', 'main');
            const metadataSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(metadataRef);
            if (!metadataSnap.exists()) {
                throw new Error('Reflection room not found');
            }
            const metadata = metadataSnap.data();
            if (metadata.authorId !== currentUser.uid) {
                throw new Error('Only the author can update the topic');
            }
            // Clear all messages first
            await clearAllMessages();
            // Update the topic
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(metadataRef, {
                ...metadata,
                topic: newTopic,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            setTopic(newTopic);
        } catch (error) {
            console.error('Error updating reflection topic:', error);
            throw error;
        }
    }, [
        currentUser,
        articleId,
        clearAllMessages
    ]);
    return {
        messages,
        topic,
        loading,
        error,
        unreadCount,
        sendMessage,
        deleteMessage,
        clearAllMessages,
        updateReflectionTopic,
        markAllAsRead,
        createReflectionRoom
    };
};
}}),
"[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$useReflectionRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/useReflectionRoom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoom.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
const ReflectionRoomSidebar = ({ articleId, isOpen, onClose, isMobile, authorId })=>{
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingMessageId, setDeletingMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { messages, topic, loading, error, sendMessage, deleteMessage, unreadCount, markAllAsRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$useReflectionRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReflectionRoom"])(articleId);
    const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
    // Memoize animation variants to prevent recreation
    const sidebarVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            closed: {
                x: '100%',
                opacity: 0
            },
            open: {
                x: 0,
                opacity: 1
            }
        }), []);
    const mobileVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            closed: {
                y: '100%',
                opacity: 0
            },
            open: {
                y: 0,
                opacity: 1
            }
        }), []);
    // Optimize transition settings
    const transitionSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            type: "tween",
            duration: 0.3,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        }), []);
    // Auto-scroll to bottom when new messages arrive (debounced)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeoutId = setTimeout(()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        }, 100);
        return ()=>clearTimeout(timeoutId);
    }, [
        messages.length
    ]); // Only depend on message count, not full messages array
    // Mark messages as read when sidebar is opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && unreadCount > 0) {
            const timeoutId = setTimeout(()=>{
                markAllAsRead();
            }, 500); // Delay to avoid marking as read too quickly
            return ()=>clearTimeout(timeoutId);
        }
    }, [
        isOpen,
        unreadCount,
        markAllAsRead
    ]);
    // Auto-resize textarea (optimized)
    const handleTextareaResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleTextareaResize();
    }, [
        newMessage,
        handleTextareaResize
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        if (!newMessage.trim() || isSubmitting || !currentUser) return;
        setIsSubmitting(true);
        try {
            await sendMessage(newMessage.trim());
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        } finally{
            setIsSubmitting(false);
        }
    }, [
        newMessage,
        isSubmitting,
        currentUser,
        sendMessage
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    }, [
        handleSubmit
    ]);
    const formatMessageTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((timestamp)=>{
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();
        const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
        if (diffInHours < 24) {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        } else {
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        }
    }, []);
    const handleDeleteMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (messageId)=>{
        if (!currentUser || deletingMessageId) return;
        setDeletingMessageId(messageId);
        try {
            await deleteMessage(messageId);
        } catch (error) {
            console.error('Error deleting message:', error);
        // You could add a toast notification here for better UX
        } finally{
            setDeletingMessageId(null);
        }
    }, [
        currentUser,
        deleteMessage,
        deletingMessageId
    ]);
    // Memoize message rendering to prevent unnecessary re-renders
    const renderedMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return messages.map((message)=>{
            const isOwnMessage = message.userId === currentUser?.uid;
            const isAuthorMessage = message.userId === authorId;
            const isDeleting = deletingMessageId === message.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message} ${isOwnMessage ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ownMessage : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].otherMessage} ${isAuthorMessage ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorMessage : ''} ${isDeleting ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageDeleting : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName} ${isAuthorMessage ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorName : ''}`,
                                children: [
                                    message.userName,
                                    isAuthorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorBadge,
                                        children: "Author"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageHeaderRight,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageTime,
                                        children: formatMessageTime(message.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteButton,
                                        onClick: ()=>handleDeleteMessage(message.id),
                                        disabled: isDeleting,
                                        "aria-label": "Delete message",
                                        title: "Delete message",
                                        children: isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteSpinner
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 206,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 208,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageContent,
                        children: message.content
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this)
                ]
            }, message.id, true, {
                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this);
        });
    }, [
        messages,
        currentUser?.uid,
        authorId,
        formatMessageTime,
        deletingMessageId,
        handleDeleteMessage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backdrop,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                    lineNumber: 227,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar} ${isMobile ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileModal : ''}`,
                    variants: isMobile ? mobileVariants : sidebarVariants,
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    transition: transitionSettings,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerTitle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Reflection Room"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
                                            onClick: onClose,
                                            "aria-label": "Close reflection room",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M18 6L6 18M6 6L18 18",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                topic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topicSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topicLabel,
                                            children: "Discussion Topic"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topicText,
                                            children: topic
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messagesContainer,
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingState,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingSpinner
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 273,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Loading messages..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                lineNumber: 272,
                                columnNumber: 17
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorState,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Error loading messages: ",
                                        error
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                    lineNumber: 278,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                lineNumber: 277,
                                columnNumber: 17
                            }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyIcon,
                                        children: "💭"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 282,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No messages yet. Be the first to share your thoughts!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 283,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                lineNumber: 281,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messagesList,
                                children: [
                                    renderedMessages,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: messagesEndRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                        lineNumber: 288,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                lineNumber: 286,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this),
                        currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageForm,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            ref: textareaRef,
                                            value: newMessage,
                                            onChange: (e)=>setNewMessage(e.target.value),
                                            onKeyDown: handleKeyDown,
                                            placeholder: "Share your thoughts...",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageInput,
                                            rows: 1,
                                            maxLength: 1000,
                                            disabled: isSubmitting
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sendButton,
                                            disabled: !newMessage.trim() || isSubmitting,
                                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sendingSpinner
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                                lineNumber: 314,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                                lineNumber: 316,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].characterCount,
                                    children: [
                                        newMessage.length,
                                        "/1000"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                    lineNumber: 322,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                            lineNumber: 295,
                            columnNumber: 15
                        }, this),
                        !currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authPrompt,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Please sign in to join the conversation"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                                lineNumber: 330,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                            lineNumber: 329,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ReflectionRoomSidebar;
}}),
"[project]/src/components/ReflectionRoom/ReflectionRoom.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-7829abf2.js [app-ssr] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$useReflectionRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/useReflectionRoom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoom.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
;
const ReflectionRoom = ({ articleId, hasReflectionRoom, authorId })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { topic, unreadCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$useReflectionRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReflectionRoom"])(articleId);
    // Memoize callbacks to prevent unnecessary re-renders
    const toggleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsOpen((prev)=>!prev);
    }, []);
    const closeRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsOpen(false);
    }, []);
    // Authentication state management
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], (user)=>{
            setIsAuthenticated(!!user);
        });
        return ()=>unsubscribe();
    }, []);
    // Mobile detection with debouncing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        let timeoutId;
        const handleResize = ()=>{
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 100); // Debounce resize events
        };
        window.addEventListener('resize', handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);
    // Memoize the topic fallback to prevent unnecessary renders
    const displayTopic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return topic || 'Join the discussion';
    }, [
        topic
    ]);
    // Early return if feature is not enabled or user is not authenticated
    if (!hasReflectionRoom || !isAuthenticated) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reflectionRoomContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                topic: displayTopic,
                unreadCount: unreadCount,
                isOpen: isOpen,
                onClick: toggleOpen
            }, void 0, false, {
                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoom.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                articleId: articleId,
                isOpen: isOpen,
                onClose: closeRoom,
                isMobile: isMobile,
                authorId: authorId
            }, void 0, false, {
                fileName: "[project]/src/components/ReflectionRoom/ReflectionRoom.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReflectionRoom/ReflectionRoom.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(ReflectionRoom, (prevProps, nextProps)=>{
    return prevProps.articleId === nextProps.articleId && prevProps.hasReflectionRoom === nextProps.hasReflectionRoom && prevProps.authorId === nextProps.authorId;
});
}}),
"[project]/src/components/ReflectionRoom/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoom.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$useReflectionRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/useReflectionRoom.ts [app-ssr] (ecmascript)");
;
;
;
;
}}),
"[project]/src/components/ReflectionRoom/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoom.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoomButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoomSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoomSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$useReflectionRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/useReflectionRoom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/components/ReflectionRoom/ReflectionRoom.tsx [app-ssr] (ecmascript) <export default as ReflectionRoom>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReflectionRoom": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoom.tsx [app-ssr] (ecmascript)");
}}),
"[project]/src/components/ArticleWithHighlights.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/HighlightContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleHighlights$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleHighlights.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MoodToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MoodToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionModeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionModeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticleWithHighlights.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$articleService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/articleService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$syntaxHighlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/syntaxHighlighter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientSideHighlighter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientSideHighlighter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getMoodFromText.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/moodThemes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReflectionRoom$3e$__ = __turbopack_context__.i("[project]/src/components/ReflectionRoom/ReflectionRoom.tsx [app-ssr] (ecmascript) <export default as ReflectionRoom>");
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
const ArticleWithHighlights = ({ articleId, initialHtml, isAuthenticated = false, articleTitle = 'Article', articleSlug = '', hasReflectionRoom = false, authorId, moodFeatureEnabled, onToggleMoodFeature, mood: externalMood })=>{
    // const [moodFeatureEnabled, setMoodFeatureEnabled] = useState(true); // Unused
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!initialHtml);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [internalMood, setInternalMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('reflective');
    // Use external mood if provided, otherwise use internal mood
    const mood = externalMood || internalMood;
    const articleContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Apply syntax highlighting when content loads
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (articleContainerRef.current && (initialHtml || article)) {
            // Small delay to ensure DOM is updated
            setTimeout(()=>{
                if (articleContainerRef.current) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$syntaxHighlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["highlightCodeBlocks"])(articleContainerRef.current);
                }
            }, 100);
        }
    }, [
        initialHtml,
        article
    ]);
    // Analyze mood when content is available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const content = getContentToDisplay();
        if (content) {
            // Extract text from HTML for sentiment analysis
            const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            if (textContent && !externalMood) {
                // Only set internal mood if no external mood is provided
                const detectedMood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoodFromText"])(textContent);
                setInternalMood(detectedMood);
            }
        }
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialHtml || article) return;
        const fetchArticle = async ()=>{
            try {
                setIsLoading(true);
                const articleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$articleService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArticle"])(articleId);
                if (!articleData) {
                    setError('Article not found');
                    return;
                }
                let content = '';
                if (typeof articleData.content === 'string') {
                    content = articleData.content;
                } else {
                    content = articleData.content.map((p)=>`<p>${p.text}</p>`).join('\n');
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
        };
        fetchArticle();
    }, [
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingIndicator
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading article..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HighlightProvider"], {
        articleId: articleId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientSideHighlighter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleContainer,
                children: [
                    hasReflectionRoom && isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionRoom$2f$ReflectionRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ReflectionRoom$3e$__["ReflectionRoom"], {
                        articleId: articleId,
                        hasReflectionRoom: hasReflectionRoom,
                        authorId: authorId
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-toggle-bar": "true",
                        style: {
                            display: 'flex',
                            justifyContent: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : 'space-between',
                            alignItems: 'center',
                            gap: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : '1rem',
                            margin: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : '1rem 0',
                            padding: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : '1rem',
                            backgroundImage: isAuthenticated ? `linear-gradient(270deg, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd})` : 'linear-gradient(270deg, #9CA3AF, #6B7280)',
                            backgroundSize: '200% 200%',
                            animation: 'slideGradient 8s ease infinite alternate',
                            borderRadius: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : '20px',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            fontSize: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : '0.875rem',
                            flexWrap: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : 'nowrap'
                        },
                        children: "undefined" !== 'undefined' && window.innerWidth <= 768 ? ("TURBOPACK unreachable", undefined) : "undefined" !== 'undefined' && window.innerWidth <= 1024 ? ("TURBOPACK unreachable", undefined) : // Desktop Layout - Full
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#F7FAFC',
                                                fontWeight: '500',
                                                fontSize: '0.875rem',
                                                opacity: 0.9
                                            },
                                            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AtmosphereIcon"], {
                                                        size: 16,
                                                        color: "#F7FAFC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Atmosphere adapted"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockClosedIcon"], {
                                                        size: 16,
                                                        color: "#F7FAFC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Sign in for enhanced features"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this),
                                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#F7FAFC',
                                                fontWeight: '600',
                                                fontSize: '0.875rem'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EnhancedIcon"], {
                                                    size: 16,
                                                    color: "#F7FAFC"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 21
                                                }, this),
                                                "Enhanced features active"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                            lineNumber: 338,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#F7FAFC',
                                                fontWeight: '500',
                                                fontSize: '0.75rem'
                                            },
                                            children: "Mood Background"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MoodToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#F7FAFC',
                                                fontWeight: '500',
                                                fontSize: '0.75rem'
                                            },
                                            children: "Interactive Reflections"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionModeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                padding: '0.4rem 0.8rem',
                                                border: 'none',
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
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleHighlights$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        articleId: articleId,
                        articleTitle: articleTitle,
                        articleSlug: articleSlug,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: articleContainerRef,
                                    dangerouslySetInnerHTML: {
                                        __html: getContentToDisplay()
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                articleId: articleId
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ArticleWithHighlights;
}}),
"[project]/src/components/ArticleContent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleWithHighlights$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleWithHighlights.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ArticleContent = ({ articleId, articleHtml, isAuthenticated, articleTitle, articleSlug, hasReflectionRoom = false, moodFeatureEnabled, onToggleMoodFeature, mood })=>{
    // Debug re-renders
    console.log('📝 ArticleContent re-rendered at:', new Date().toLocaleTimeString());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleWithHighlights$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        articleId: articleId,
        initialHtml: articleHtml || undefined,
        isAuthenticated: isAuthenticated,
        articleTitle: articleTitle,
        articleSlug: articleSlug,
        hasReflectionRoom: hasReflectionRoom,
        ...isAuthenticated && {
            moodFeatureEnabled: moodFeatureEnabled,
            onToggleMoodFeature: onToggleMoodFeature,
            mood: mood
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ArticleContent.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(ArticleContent, (prevProps, nextProps)=>{
    const shouldNotRerender = prevProps.articleId === nextProps.articleId && prevProps.articleHtml === nextProps.articleHtml && prevProps.isAuthenticated === nextProps.isAuthenticated && prevProps.articleTitle === nextProps.articleTitle && prevProps.articleSlug === nextProps.articleSlug && prevProps.hasReflectionRoom === nextProps.hasReflectionRoom && prevProps.moodFeatureEnabled === nextProps.moodFeatureEnabled && prevProps.onToggleMoodFeature === nextProps.onToggleMoodFeature && prevProps.mood === nextProps.mood;
    if (!shouldNotRerender) {
        console.log('📝 ArticleContent memo comparison - will re-render because:', {
            articleId: prevProps.articleId !== nextProps.articleId,
            articleHtml: prevProps.articleHtml !== nextProps.articleHtml,
            isAuthenticated: prevProps.isAuthenticated !== nextProps.isAuthenticated,
            articleTitle: prevProps.articleTitle !== nextProps.articleTitle,
            articleSlug: prevProps.articleSlug !== nextProps.articleSlug,
            hasReflectionRoom: prevProps.hasReflectionRoom !== nextProps.hasReflectionRoom,
            moodFeatureEnabled: prevProps.moodFeatureEnabled !== nextProps.moodFeatureEnabled,
            onToggleMoodFeature: prevProps.onToggleMoodFeature !== nextProps.onToggleMoodFeature,
            mood: prevProps.mood !== nextProps.mood
        });
    }
    return shouldNotRerender;
});
}}),
"[project]/src/components/LikeButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const LikeButton = ({ articleId, initialLikes = [], className = '', styles = {} })=>{
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLikes);
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setCurrentUser(user);
            if (user) {
                setIsLiked(likes.includes(user.uid));
            } else {
                setIsLiked(false);
            }
        });
        return ()=>unsubscribe();
    }, [
        likes
    ]);
    // Update like status when initialLikes change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLikes(initialLikes);
        if (currentUser) {
            setIsLiked(initialLikes.includes(currentUser.uid));
        }
    }, [
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
                const { doc, updateDoc, arrayRemove } = await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                const { db } = await __turbopack_context__.r("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
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
                const { doc, updateDoc, arrayUnion } = await __turbopack_context__.r("[project]/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
                const { db } = await __turbopack_context__.r("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${className} ${isLiked ? styles.liked : ''}`,
        onClick: handleLikeClick,
        "aria-label": isLiked ? 'Unlike article' : 'Like article',
        style: {
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.2)' : 'scale(1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(LikeButton);
}}),
"[project]/src/components/ExternalLikeButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$externalArticleService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/externalArticleService.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ExternalLikeButton = ({ externalId, source, title, url, initialLikes = [], className = '', styles = {} })=>{
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLikes);
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listen for auth state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setCurrentUser(user);
            if (user) {
                setIsLiked(likes.includes(user.uid));
            } else {
                setIsLiked(false);
            }
        });
        return ()=>unsubscribe();
    }, [
        likes
    ]);
    // Update like status when initialLikes change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLikes(initialLikes);
        if (currentUser) {
            setIsLiked(initialLikes.includes(currentUser.uid));
        }
    }, [
        initialLikes,
        currentUser
    ]);
    // Load current social data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadSocialData = async ()=>{
            try {
                const socialData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$externalArticleService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExternalArticleService"].getSocialData(externalId, source);
                if (socialData) {
                    setLikes(socialData.likes || []);
                    if (currentUser) {
                        setIsLiked((socialData.likes || []).includes(currentUser.uid));
                    }
                }
            } catch (error) {
                console.error('Error loading social data:', error);
            }
        };
        loadSocialData();
    }, [
        externalId,
        source,
        currentUser
    ]);
    const handleLikeClick = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (!currentUser) {
            alert('Please login to like articles');
            return;
        }
        if (isLoading) return;
        // Optimistic update with animation
        setIsAnimating(true);
        setIsLoading(true);
        setTimeout(()=>setIsAnimating(false), 300);
        try {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$externalArticleService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExternalArticleService"].toggleLike(externalId, source, currentUser.uid, title, url);
            // Update local state with server response
            setIsLiked(result.isLiked);
            if (result.isLiked) {
                setLikes((prev)=>[
                        ...prev.filter((uid)=>uid !== currentUser.uid),
                        currentUser.uid
                    ]);
            } else {
                setLikes((prev)=>prev.filter((uid)=>uid !== currentUser.uid));
            }
            console.log(`${source} article ${result.isLiked ? 'liked' : 'unliked'} - total: ${result.totalLikes}`);
        } catch (error) {
            console.error('Error updating like status:', error);
            // Revert optimistic update on error
            setIsLiked((prev)=>!prev);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${className} ${isLiked ? styles.liked : ''}`,
        onClick: handleLikeClick,
        disabled: isLoading,
        "aria-label": isLiked ? 'Unlike article' : 'Like article',
        style: {
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
            opacity: isLoading ? 0.6 : 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                }, void 0, false, {
                    fileName: "[project]/src/components/ExternalLikeButton.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExternalLikeButton.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: likes.length > 0 ? likes.length : ''
            }, void 0, false, {
                fileName: "[project]/src/components/ExternalLikeButton.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExternalLikeButton.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(ExternalLikeButton);
}}),
"[project]/src/services/presenceService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "presenceService": (()=>presenceService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/userService.ts [app-ssr] (ecmascript)");
;
;
;
class PresenceService {
    presenceRefs = new Map();
    heartbeatIntervals = new Map();
    cleanupInterval = null;
    isDestroyed = false;
    constructor(){
        // Run cleanup every 60 seconds instead of 30 (reduce memory pressure)
        this.cleanupInterval = setInterval(()=>{
            if (!this.isDestroyed) {
                this.cleanupStalePresence();
            }
        }, 60000); // Increased from 30s to 60s
    }
    /**
     * Start tracking user presence for an article
     */ async startPresence(articleId) {
        if (this.isDestroyed) return;
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) {
            // User not authenticated - silently return
            return;
        }
        try {
            // Get user profile for display info
            const userProfile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfile"])(user.uid);
            if (!userProfile) return;
            const presenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articlePresence', `${articleId}_${user.uid}`);
            // Set initial presence
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(presenceRef, {
                uid: user.uid,
                username: userProfile.username,
                firstName: userProfile.firstName,
                lastName: userProfile.lastName,
                lastSeen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                articleId: articleId
            });
            // Set up heartbeat to update presence every 30 seconds instead of 15 (reduce database calls)
            const heartbeatInterval = setInterval(async ()=>{
                // Only update if user is still authenticated and page is visible
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser && !document.hidden && !this.isDestroyed) {
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])(presenceRef, {
                            uid: user.uid,
                            username: userProfile.username,
                            firstName: userProfile.firstName,
                            lastName: userProfile.lastName,
                            lastSeen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                            articleId: articleId
                        });
                    } catch (error) {
                        // If there's an error, stop the heartbeat
                        clearInterval(heartbeatInterval);
                        this.heartbeatIntervals.delete(articleId);
                    }
                }
            }, 30000); // Increased from 15s to 30s
            this.heartbeatIntervals.set(articleId, heartbeatInterval);
            // Set up comprehensive cleanup handlers
            const cleanup = ()=>{
                this.stopPresence(articleId);
            };
            // Clean up on various events
            const beforeUnloadHandler = cleanup;
            const pageHideHandler = cleanup;
            const visibilityChangeHandler = ()=>{
                // If page becomes hidden for more than 60 seconds, clean up
                if (document.hidden) {
                    setTimeout(()=>{
                        if (document.hidden && !this.isDestroyed) {
                            this.stopPresence(articleId);
                        }
                    }, 60000); // Increased from 30s to 60s
                }
            };
            window.addEventListener('beforeunload', beforeUnloadHandler);
            window.addEventListener('pagehide', pageHideHandler);
            document.addEventListener('visibilitychange', visibilityChangeHandler);
            // Clean up when user logs out
            const authCleanup = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
                if (!user && !this.isDestroyed) {
                    this.stopPresence(articleId);
                }
            });
            this.presenceRefs.set(articleId, ()=>{
                window.removeEventListener('beforeunload', beforeUnloadHandler);
                window.removeEventListener('pagehide', pageHideHandler);
                document.removeEventListener('visibilitychange', visibilityChangeHandler);
                authCleanup();
            });
        } catch (error) {
        // Error starting presence - fail silently in production
        }
    }
    /**
     * Stop tracking user presence for an article
     */ async stopPresence(articleId) {
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (!user) return; // Silent return for unauthenticated users
        try {
            // Clear heartbeat interval
            const interval = this.heartbeatIntervals.get(articleId);
            if (interval) {
                clearInterval(interval);
                this.heartbeatIntervals.delete(articleId);
            }
            // Remove presence document
            const presenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articlePresence', `${articleId}_${user.uid}`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(presenceRef);
            // Clean up event listeners
            const cleanup = this.presenceRefs.get(articleId);
            if (cleanup) {
                window.removeEventListener('beforeunload', cleanup);
                this.presenceRefs.delete(articleId);
            }
        } catch (error) {
        // Error stopping presence - fail silently in production
        }
    }
    /**
     * Subscribe to active users for an article
     */ subscribeToActiveUsers(articleId, callback) {
        // Query for users active in the last 45 seconds (more strict)
        const cutoffTime = new Date(Date.now() - 45 * 1000); // 45 seconds ago
        const presenceQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articlePresence'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('lastSeen', '>', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(cutoffTime)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('lastSeen', 'desc'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["limit"])(10) // Get up to 10 users, we'll show max 5
        );
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(presenceQuery, async (snapshot)=>{
            try {
                const users = [];
                for (const docSnapshot of snapshot.docs){
                    const data = docSnapshot.data();
                    // Skip current user
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser && data.uid === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser.uid) {
                        continue;
                    }
                    // Get full user profile for avatar/display
                    try {
                        const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfile"])(data.uid);
                        users.push({
                            ...data,
                            profile: profile || undefined
                        });
                    } catch (error) {
                        // Error fetching user profile - add user without full profile as fallback
                        users.push({
                            ...data,
                            profile: undefined
                        });
                    }
                }
                callback(users);
            } catch (error) {
                // Error processing presence updates - return empty array
                callback([]);
            }
        }, (error)=>{
            // Error in presence subscription - return empty array
            callback([]);
        });
        return unsubscribe;
    }
    /**
     * Clean up stale presence data that hasn't been updated recently
     */ async cleanupStalePresence() {
        try {
            // Clean up presence data older than 1 minute
            const staleTime = new Date(Date.now() - 60 * 1000);
            const staleQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articlePresence'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('lastSeen', '<', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(staleTime)));
            const staleSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(staleQuery);
            // Delete stale presence documents
            const deletePromises = staleSnapshot.docs.map((docSnapshot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(docSnapshot.ref));
            if (deletePromises.length > 0) {
                await Promise.all(deletePromises);
            // Cleanup completed silently - consider using a proper logging service for monitoring
            }
        } catch (error) {
        // Error cleaning up stale presence - fail silently
        }
    }
    /**
     * Clean up all presence tracking
     */ cleanup() {
        // Clear cleanup interval
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
            this.cleanupInterval = null;
        }
        // Clear all heartbeat intervals
        this.heartbeatIntervals.forEach((interval)=>{
            clearInterval(interval);
        });
        this.heartbeatIntervals.clear();
        // Remove all event listeners
        this.presenceRefs.forEach((cleanup)=>{
            cleanup();
        });
        this.presenceRefs.clear();
        this.isDestroyed = true;
    }
}
const presenceService = new PresenceService();
// Clean up service when the module is unloaded
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
}}),
"[project]/src/components/ActiveReaders.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "activeReadersContainer": "ActiveReaders-module__b0ZgyG__activeReadersContainer",
  "avatar": "ActiveReaders-module__b0ZgyG__avatar",
  "avatarAppear": "ActiveReaders-module__b0ZgyG__avatarAppear",
  "avatarStack": "ActiveReaders-module__b0ZgyG__avatarStack",
  "pulse": "ActiveReaders-module__b0ZgyG__pulse",
  "readingIndicator": "ActiveReaders-module__b0ZgyG__readingIndicator",
  "slideIn": "ActiveReaders-module__b0ZgyG__slideIn",
  "tooltip": "ActiveReaders-module__b0ZgyG__tooltip",
});
}}),
"[project]/src/components/ActiveReaders.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$presenceService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/presenceService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ActiveReaders.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
const ActiveReaders = ({ articleId })=>{
    const [activeUsers, setActiveUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check authentication status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setIsAuthenticated(!!user);
        });
        return ()=>unsubscribe();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!articleId || !isAuthenticated) return;
        // Start presence tracking for current user
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$presenceService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presenceService"].startPresence(articleId);
        // Subscribe to active users
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$presenceService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presenceService"].subscribeToActiveUsers(articleId, (users)=>{
            // Limit to first 5 users
            const limitedUsers = users.slice(0, 5);
            setActiveUsers(limitedUsers);
            setIsVisible(limitedUsers.length > 0);
        });
        // Cleanup on unmount
        return ()=>{
            unsubscribe();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$presenceService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presenceService"].stopPresence(articleId);
        };
    }, [
        articleId,
        isAuthenticated
    ]);
    // Don't show anything if user is not authenticated
    if (!isAuthenticated) {
        return null;
    }
    // Only show if there are active users
    if (!isVisible || activeUsers.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeReadersContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatarStack,
                children: [
                    activeUsers.map((user, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                            style: {
                                backgroundColor: getColorForUser(index),
                                zIndex: 5 - index,
                                left: `${index * 20}px`
                            },
                            title: getDisplayName(user),
                            children: getInitials(user)
                        }, user.uid, false, {
                            fileName: "[project]/src/components/ActiveReaders.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this)),
                    activeUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readingIndicator,
                        style: {
                            left: `${(activeUsers.length - 1) * 20 + 24}px`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pulse
                        }, void 0, false, {
                            fileName: "[project]/src/components/ActiveReaders.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ActiveReaders.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ActiveReaders.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tooltip,
                children: activeUsers.length === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        getDisplayName(activeUsers[0]),
                        " is reading this"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ActiveReaders.tsx",
                    lineNumber: 89,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        activeUsers.length,
                        " people are reading this"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ActiveReaders.tsx",
                    lineNumber: 91,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ActiveReaders.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ActiveReaders.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
};
// Helper functions moved outside component to avoid re-creating them
const getInitials = (user)=>{
    if (user.profile?.firstName && user.profile?.lastName) {
        return `${user.profile.firstName[0]}${user.profile.lastName[0]}`.toUpperCase();
    }
    if (user.firstName && user.lastName) {
        return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user.username) {
        return user.username.slice(0, 2).toUpperCase();
    }
    return '?';
};
const getDisplayName = (user)=>{
    if (user.profile?.firstName && user.profile?.lastName) {
        return `${user.profile.firstName} ${user.profile.lastName}`;
    }
    if (user.firstName && user.lastName) {
        return `${user.firstName} ${user.lastName}`;
    }
    return user.username || 'Anonymous';
};
const getColorForUser = (index)=>{
    const colors = [
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#96CEB4',
        '#FECA57',
        '#FF9FF3',
        '#A8E6CF',
        '#FFD93D'
    ];
    return colors[index % colors.length];
};
const __TURBOPACK__default__export__ = ActiveReaders;
}}),
"[project]/src/styles/ArticlePage.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "articleActions": "ArticlePage-module__RPh7Qa__articleActions",
  "articleContent": "ArticlePage-module__RPh7Qa__articleContent",
  "articleDetails": "ArticlePage-module__RPh7Qa__articleDetails",
  "articleHeader": "ArticlePage-module__RPh7Qa__articleHeader",
  "articleHeaderWithReaders": "ArticlePage-module__RPh7Qa__articleHeaderWithReaders",
  "articleMeta": "ArticlePage-module__RPh7Qa__articleMeta",
  "articlePageContainer": "ArticlePage-module__RPh7Qa__articlePageContainer",
  "articleTitle": "ArticlePage-module__RPh7Qa__articleTitle",
  "authButtons": "ArticlePage-module__RPh7Qa__authButtons",
  "authorAvatar": "ArticlePage-module__RPh7Qa__authorAvatar",
  "authorDetails": "ArticlePage-module__RPh7Qa__authorDetails",
  "authorInfo": "ArticlePage-module__RPh7Qa__authorInfo",
  "authorName": "ArticlePage-module__RPh7Qa__authorName",
  "authorNameLink": "ArticlePage-module__RPh7Qa__authorNameLink",
  "backLink": "ArticlePage-module__RPh7Qa__backLink",
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
  "moodControls": "ArticlePage-module__RPh7Qa__moodControls",
  "moodToggleButton": "ArticlePage-module__RPh7Qa__moodToggleButton",
  "pageContainer": "ArticlePage-module__RPh7Qa__pageContainer",
  "pageHeader": "ArticlePage-module__RPh7Qa__pageHeader",
  "profileCircle": "ArticlePage-module__RPh7Qa__profileCircle",
  "profileDropdown": "ArticlePage-module__RPh7Qa__profileDropdown",
  "profileMenu": "ArticlePage-module__RPh7Qa__profileMenu",
  "readersSection": "ArticlePage-module__RPh7Qa__readersSection",
  "relatedTag": "ArticlePage-module__RPh7Qa__relatedTag",
  "relatedTagsHeading": "ArticlePage-module__RPh7Qa__relatedTagsHeading",
  "relatedTagsList": "ArticlePage-module__RPh7Qa__relatedTagsList",
  "relatedTagsSection": "ArticlePage-module__RPh7Qa__relatedTagsSection",
  "shareButton": "ArticlePage-module__RPh7Qa__shareButton",
  "signupButton": "ArticlePage-module__RPh7Qa__signupButton",
  "spin": "ArticlePage-module__RPh7Qa__spin",
  "tag": "ArticlePage-module__RPh7Qa__tag",
  "tagContainer": "ArticlePage-module__RPh7Qa__tagContainer",
  "titleSection": "ArticlePage-module__RPh7Qa__titleSection",
  "writeButton": "ArticlePage-module__RPh7Qa__writeButton",
});
}}),
"[project]/src/components/ArticleLayout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LikeButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LikeButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExternalLikeButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExternalLikeButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ActiveReaders.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticlePage.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
const ArticleLayout = ({ articleId, articleHtml, article, initialLikes, currentUser, isAuthenticated, onEditClick, articleTitle, articleSlug, moodFeatureEnabled, onToggleMoodFeature, mood, isExternal = false, externalSource, externalId, externalUrl })=>{
    console.log('🏗️ ArticleLayout re-rendered at:', new Date().toLocaleTimeString());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageContainer,
        children: [
            article && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleHeaderWithReaders,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleTitle,
                                    style: {
                                        margin: 0
                                    },
                                    children: article.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleLayout.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleLayout.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readersSection,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActiveReaders$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    articleId: articleId
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleLayout.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleLayout.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleLayout.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleMeta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorAvatar,
                                        children: article.authorName.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleLayout.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorName,
                                                children: article.authorName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ArticleLayout.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleDetails,
                                                children: [
                                                    article.createdAt,
                                                    " · ",
                                                    article.readTime,
                                                    " min read"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ArticleLayout.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ArticleLayout.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleLayout.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].articleActions,
                                children: [
                                    isExternal && externalSource && externalId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExternalLikeButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        externalId: externalId,
                                        source: externalSource,
                                        title: article.title,
                                        url: externalUrl || '',
                                        initialLikes: initialLikes,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].likeButton,
                                        styles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleLayout.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LikeButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        articleId: articleId,
                                        initialLikes: initialLikes,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].likeButton,
                                        styles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleLayout.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this),
                                    currentUser && article.authorId === currentUser.uid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editButton,
                                        onClick: onEditClick,
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleLayout.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleLayout.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleLayout.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    article.tags && article.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagContainer,
                        children: article.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                children: tag
                            }, index, false, {
                                fileName: "[project]/src/components/ArticleLayout.tsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArticleLayout.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleLayout.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                articleId: articleId,
                articleHtml: articleHtml,
                isAuthenticated: isAuthenticated,
                articleTitle: articleTitle,
                articleSlug: articleSlug,
                hasReflectionRoom: article?.hasReflectionRoom || false,
                moodFeatureEnabled: moodFeatureEnabled,
                onToggleMoodFeature: onToggleMoodFeature,
                mood: mood
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleLayout.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArticleLayout.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(ArticleLayout, (prevProps, nextProps)=>{
    const shouldNotRerender = // Core article data (including articleId for ActiveReaders)
    prevProps.articleId === nextProps.articleId && prevProps.articleHtml === nextProps.articleHtml && prevProps.article?.title === nextProps.article?.title && prevProps.article?.authorName === nextProps.article?.authorName && prevProps.article?.createdAt === nextProps.article?.createdAt && prevProps.article?.readTime === nextProps.article?.readTime && prevProps.article?.authorId === nextProps.article?.authorId && prevProps.article?.hasReflectionRoom === nextProps.article?.hasReflectionRoom && // User state
    prevProps.isAuthenticated === nextProps.isAuthenticated && prevProps.currentUser?.uid === nextProps.currentUser?.uid && // Stable props
    prevProps.articleTitle === nextProps.articleTitle && prevProps.articleSlug === nextProps.articleSlug && // Mood feature props
    prevProps.moodFeatureEnabled === nextProps.moodFeatureEnabled && prevProps.mood === nextProps.mood && // External article props
    prevProps.isExternal === nextProps.isExternal && prevProps.externalSource === nextProps.externalSource && prevProps.externalId === nextProps.externalId && prevProps.externalUrl === nextProps.externalUrl && // Callbacks (should be stable)
    prevProps.onEditClick === nextProps.onEditClick && prevProps.onToggleMoodFeature === nextProps.onToggleMoodFeature;
    if (!shouldNotRerender) {
        console.log('🏗️ ArticleLayout memo - will re-render because something changed');
    }
    return shouldNotRerender;
});
}}),
"[project]/src/styles/comment.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "cancelButton": "comment-module__H_rXLG__cancelButton",
  "comment": "comment-module__H_rXLG__comment",
  "commentActions": "comment-module__H_rXLG__commentActions",
  "commentAuthor": "comment-module__H_rXLG__commentAuthor",
  "commentAvatar": "comment-module__H_rXLG__commentAvatar",
  "commentFooter": "comment-module__H_rXLG__commentFooter",
  "commentForm": "comment-module__H_rXLG__commentForm",
  "commentHeader": "comment-module__H_rXLG__commentHeader",
  "commentInput": "comment-module__H_rXLG__commentInput",
  "commentInputContainer": "comment-module__H_rXLG__commentInputContainer",
  "commentLoading": "comment-module__H_rXLG__commentLoading",
  "commentMeta": "comment-module__H_rXLG__commentMeta",
  "commentText": "comment-module__H_rXLG__commentText",
  "commentTime": "comment-module__H_rXLG__commentTime",
  "commentsList": "comment-module__H_rXLG__commentsList",
  "commentsSection": "comment-module__H_rXLG__commentsSection",
  "commentsTitle": "comment-module__H_rXLG__commentsTitle",
  "dropdownMenu": "comment-module__H_rXLG__dropdownMenu",
  "editActions": "comment-module__H_rXLG__editActions",
  "editForm": "comment-module__H_rXLG__editForm",
  "editInput": "comment-module__H_rXLG__editInput",
  "likeButton": "comment-module__H_rXLG__likeButton",
  "liked": "comment-module__H_rXLG__liked",
  "loadingDot": "comment-module__H_rXLG__loadingDot",
  "loadingDots": "comment-module__H_rXLG__loadingDots",
  "loginButton": "comment-module__H_rXLG__loginButton",
  "loginPromptContainer": "comment-module__H_rXLG__loginPromptContainer",
  "menuButton": "comment-module__H_rXLG__menuButton",
  "menuItem": "comment-module__H_rXLG__menuItem",
  "noComments": "comment-module__H_rXLG__noComments",
  "pulse": "comment-module__H_rXLG__pulse",
  "repliesContainer": "comment-module__H_rXLG__repliesContainer",
  "reply": "comment-module__H_rXLG__reply",
  "replyActions": "comment-module__H_rXLG__replyActions",
  "replyButton": "comment-module__H_rXLG__replyButton",
  "replyForm": "comment-module__H_rXLG__replyForm",
  "replyInput": "comment-module__H_rXLG__replyInput",
  "replyInputContainer": "comment-module__H_rXLG__replyInputContainer",
  "saveButton": "comment-module__H_rXLG__saveButton",
  "shimmer": "comment-module__H_rXLG__shimmer",
  "slideDown": "comment-module__H_rXLG__slideDown",
  "submitButton": "comment-module__H_rXLG__submitButton",
});
}}),
"[project]/src/utils/avatarUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getInitials": (()=>getInitials),
    "getUserAvatar": (()=>getUserAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const getUserAvatar = (name, userId, isSmall = false)=>{
    const initial = name?.charAt(0)?.toUpperCase() || 'A';
    const colors = [
        '#4f46e5',
        '#0ea5e9',
        '#10b981',
        '#f59e0b',
        '#ef4444',
        '#8b5cf6',
        '#06b6d4',
        '#84cc16'
    ];
    const colorIndex = userId ? Math.abs(userId.charCodeAt(0) % colors.length) : 0;
    const bgColor = colors[colorIndex];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
        style: {
            backgroundColor: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: isSmall ? '0.8rem' : '1rem',
            width: isSmall ? '32px' : '40px',
            height: isSmall ? '32px' : '40px',
            borderRadius: '50%',
            flexShrink: 0
        }
    }, initial);
};
const getInitials = (firstName, lastName)=>{
    const firstInitial = firstName?.charAt(0)?.toUpperCase() || '';
    const lastInitial = lastName?.charAt(0)?.toUpperCase() || '';
    return firstInitial + lastInitial || 'U';
};
}}),
"[project]/src/components/CommentSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-7829abf2.js [app-ssr] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/comment.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/CustomIcons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$avatarUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/avatarUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getMoodFromText.ts [app-ssr] (ecmascript)");
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
const CommentSection = ({ articleId, className = '' })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // State management
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editingComment, setEditingComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editText, setEditText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [expandedMenus, setExpandedMenus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [focusState, setFocusState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mood feature toggle
    const moodFeatureEnabled = ("TURBOPACK compile-time value", "development") === 'development';
    // Device detection and responsive state
    const deviceInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            isMobile: windowWidth <= 768,
            isTablet: windowWidth > 768 && windowWidth <= 1024,
            isSmallPhone: windowWidth <= 480,
            bottomSafeArea: windowWidth <= 768 ? 120 : 40
        };
    }, [
        windowWidth
    ]);
    // Optimized window resize handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateWidth = ()=>setWindowWidth(window.innerWidth);
        updateWidth();
        let timeoutId;
        const debouncedResize = ()=>{
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateWidth, 100);
        };
        window.addEventListener('resize', debouncedResize);
        return ()=>{
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeoutId);
        };
    }, []);
    // Authentication state management
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$7829abf2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], (user)=>{
            setCurrentUser(user);
            setIsAuthenticated(!!user);
        });
        return ()=>unsubscribe();
    }, []);
    // Real-time comments subscription
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!articleId) return;
        const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments');
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])(commentsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSnapshot"])(q, (snapshot)=>{
            const fetchedComments = [];
            snapshot.forEach((doc)=>{
                const data = doc.data();
                fetchedComments.push({
                    id: doc.id,
                    ...data
                });
            });
            // Organize comments with replies
            const organizedComments = organizeCommentsWithReplies(fetchedComments);
            setComments(organizedComments);
        });
        return ()=>unsubscribe();
    }, [
        articleId
    ]);
    // Organize comments into threads
    const organizeCommentsWithReplies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((allComments)=>{
        const topLevelComments = allComments.filter((comment)=>!comment.parentId);
        const replies = allComments.filter((comment)=>comment.parentId);
        return topLevelComments.map((comment)=>({
                ...comment,
                replies: replies.filter((reply)=>reply.parentId === comment.id).sort((a, b)=>a.createdAt?.toDate() - b.createdAt?.toDate())
            }));
    }, []);
    // Get mood for styling
    const mood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoodFromText"])(newComment || replyText || editText);
    }, [
        moodFeatureEnabled,
        newComment,
        replyText,
        editText
    ]);
    // Optimized comment submission
    const handleCommentSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        if (!newComment.trim() || !currentUser || isSubmitting) return;
        setIsSubmitting(true);
        try {
            const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(commentsRef, {
                text: newComment.trim(),
                authorId: currentUser.uid,
                authorName: currentUser.displayName || 'Anonymous',
                authorEmail: currentUser.email || '',
                createdAt: new Date(),
                likes: [],
                mood: ("TURBOPACK compile-time truthy", 1) ? mood : ("TURBOPACK unreachable", undefined)
            });
            setNewComment('');
            setFocusState(false);
        } catch (error) {
            console.error('Error adding comment:', error);
        } finally{
            setIsSubmitting(false);
        }
    }, [
        newComment,
        currentUser,
        isSubmitting,
        articleId,
        mood,
        moodFeatureEnabled
    ]);
    // Reply submission
    const handleReplySubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (parentId)=>{
        if (!replyText.trim() || !currentUser || isSubmitting) return;
        setIsSubmitting(true);
        try {
            const commentsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])(commentsRef, {
                text: replyText.trim(),
                authorId: currentUser.uid,
                authorName: currentUser.displayName || 'Anonymous',
                authorEmail: currentUser.email || '',
                createdAt: new Date(),
                likes: [],
                parentId,
                mood: ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoodFromText"])(replyText) : ("TURBOPACK unreachable", undefined)
            });
            setReplyText('');
            setReplyingTo(null);
        } catch (error) {
            console.error('Error adding reply:', error);
        } finally{
            setIsSubmitting(false);
        }
    }, [
        replyText,
        currentUser,
        isSubmitting,
        articleId,
        moodFeatureEnabled
    ]);
    // Like/unlike functionality
    const handleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (commentId, currentLikes)=>{
        if (!currentUser) return;
        try {
            const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
            const userLiked = currentLikes.includes(currentUser.uid);
            const updatedLikes = userLiked ? currentLikes.filter((uid)=>uid !== currentUser.uid) : [
                ...currentLikes,
                currentUser.uid
            ];
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
                likes: updatedLikes
            });
        } catch (error) {
            console.error('Error updating like:', error);
        }
    }, [
        currentUser,
        articleId
    ]);
    // Comment editing
    const handleEditSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (commentId)=>{
        if (!editText.trim() || !currentUser || isSubmitting) return;
        setIsSubmitting(true);
        try {
            const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(commentRef, {
                text: editText.trim(),
                mood: ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoodFromText"])(editText) : ("TURBOPACK unreachable", undefined),
                editedAt: new Date()
            });
            setEditingComment(null);
            setEditText('');
        } catch (error) {
            console.error('Error editing comment:', error);
        } finally{
            setIsSubmitting(false);
        }
    }, [
        editText,
        currentUser,
        isSubmitting,
        articleId,
        moodFeatureEnabled
    ]);
    // Comment deletion
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (commentId)=>{
        if (!currentUser || isSubmitting) return;
        if (!confirm('Are you sure you want to delete this comment?')) return;
        setIsSubmitting(true);
        try {
            // Delete the comment
            const commentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', commentId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])(commentRef);
            // Delete all replies to this comment
            const repliesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('parentId', '==', commentId));
            const repliesSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(repliesQuery);
            const deletePromises = repliesSnapshot.docs.map((replyDoc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'articles', articleId, 'comments', replyDoc.id)));
            await Promise.all(deletePromises);
            setExpandedMenus((prev)=>{
                const newSet = new Set(prev);
                newSet.delete(commentId);
                return newSet;
            });
        } catch (error) {
            console.error('Error deleting comment:', error);
        } finally{
            setIsSubmitting(false);
        }
    }, [
        currentUser,
        isSubmitting,
        articleId
    ]);
    // Format timestamp
    const formatTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((timestamp)=>{
        if (!timestamp) return 'Just now';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        const now = new Date();
        const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
        return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }, []);
    // Memoized container styles
    const containerStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            marginBottom: deviceInfo.isMobile ? `max(${deviceInfo.bottomSafeArea + 40}px, calc(${deviceInfo.bottomSafeArea}px + env(safe-area-inset-bottom)))` : '2rem',
            paddingBottom: deviceInfo.isMobile ? '20px' : '0'
        }), [
        deviceInfo
    ]);
    // Render individual comment
    const renderComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((comment, isReply = false)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comment} ${isReply ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reply : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentAvatar,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$avatarUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserAvatar"])(comment.authorName, comment.authorId)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 290,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentMeta,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentAuthor,
                                    children: comment.authorName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 294,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentTime,
                                    children: formatTimestamp(comment.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 295,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 293,
                            columnNumber: 9
                        }, this),
                        currentUser?.uid === comment.authorId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const newExpanded = new Set(expandedMenus);
                                        if (expandedMenus.has(comment.id)) {
                                            newExpanded.delete(comment.id);
                                        } else {
                                            newExpanded.add(comment.id);
                                        }
                                        setExpandedMenus(newExpanded);
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuButton,
                                    "aria-label": "Comment options",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotsVerticalIcon"], {
                                        size: 16,
                                        color: "#64748b"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                expandedMenus.has(comment.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownMenu,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setEditingComment(comment.id);
                                                setEditText(comment.text);
                                                setExpandedMenus(new Set());
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditIcon"], {
                                                    size: 14,
                                                    color: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CommentSection.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 19
                                                }, this),
                                                "Edit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CommentSection.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDelete(comment.id),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuItem,
                                            disabled: isSubmitting,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TrashIcon"], {
                                                    size: 14,
                                                    color: "#ef4444"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CommentSection.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this),
                                                "Delete"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CommentSection.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 289,
                    columnNumber: 7
                }, this),
                editingComment === comment.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editForm,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: editText,
                            onChange: (e)=>setEditText(e.target.value),
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editInput} mobile-optimized-input`,
                            "data-mobile": "true",
                            rows: 3,
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setEditingComment(null);
                                        setEditText('');
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton,
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditSubmit(comment.id),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveButton,
                                    disabled: !editText.trim() || isSubmitting,
                                    children: isSubmitting ? 'Saving...' : 'Save'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentText,
                            children: comment.text
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentFooter,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleLike(comment.id, comment.likes || []),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].likeButton} ${comment.likes?.includes(currentUser?.uid) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].liked : ''}`,
                                    disabled: !isAuthenticated,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartIcon"], {
                                            size: 14,
                                            color: comment.likes?.includes(currentUser?.uid) ? '#ef4444' : '#64748b'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommentSection.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this),
                                        comment.likes?.length ? comment.likes.length : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this),
                                !isReply && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setReplyingTo(comment.id),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].replyButton,
                                    disabled: !isAuthenticated,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$CustomIcons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReplyIcon"], {
                                            size: 14,
                                            color: "#64748b"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommentSection.tsx",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, this),
                                        "Reply"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true),
                replyingTo === comment.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].replyForm,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].replyInputContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentAvatar,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$avatarUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserAvatar"])(currentUser?.displayName || 'User', currentUser?.uid)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: replyText,
                                    onChange: (e)=>setReplyText(e.target.value),
                                    placeholder: "Write a reply...",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].replyInput} mobile-optimized-input`,
                                    "data-mobile": "true",
                                    rows: 2,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 409,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].replyActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setReplyingTo(null);
                                        setReplyText('');
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton,
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 420,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleReplySubmit(comment.id),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                    disabled: !replyText.trim() || isSubmitting,
                                    children: isSubmitting ? 'Replying...' : 'Reply'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this),
                comment.replies && comment.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].repliesContainer,
                    children: comment.replies.map((reply)=>renderComment(reply, true))
                }, void 0, false, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, this)
            ]
        }, comment.id, true, {
            fileName: "[project]/src/components/CommentSection.tsx",
            lineNumber: 288,
            columnNumber: 5
        }, this), [
        currentUser,
        expandedMenus,
        editingComment,
        editText,
        replyingTo,
        replyText,
        isSubmitting,
        isAuthenticated,
        formatTimestamp,
        handleLike,
        handleDelete,
        handleEditSubmit,
        handleReplySubmit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentsSection} ${className} comment-section`,
        style: containerStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentsTitle,
                children: [
                    "Comments (",
                    comments.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentForm,
                onSubmit: handleCommentSubmit,
                children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentInputContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentAvatar,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$avatarUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserAvatar"])(currentUser.displayName || currentUser.name, currentUser.uid || currentUser.id)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 467,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentInput,
                            placeholder: "Share your thoughts...",
                            value: newComment,
                            onChange: (e)=>setNewComment(e.target.value),
                            onFocus: ()=>setFocusState(true),
                            onBlur: ()=>setFocusState(false),
                            rows: 4
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 470,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentActions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setNewComment(''),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton,
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                    disabled: !newComment.trim() || isSubmitting,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isSubmitting ? 'Posting...' : 'Post Comment'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 479,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 466,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loginPromptContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: "Join the conversation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Please log in to share your thoughts and engage with the community."
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>router.push('/login'),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loginButton,
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 498,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].commentsList,
                children: comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noComments,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: "No comments yet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 516,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Be the first to share your thoughts!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 515,
                    columnNumber: 11
                }, this) : comments.map((comment)=>renderComment(comment))
            }, void 0, false, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CommentSection.tsx",
        lineNumber: 455,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(CommentSection);
}}),
"[project]/src/services/guardianService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "guardianService": (()=>guardianService)
});
class GuardianService {
    apiKey;
    baseUrl = 'https://content.guardianapis.com';
    cache = new Map();
    cacheExpiry = 5 * 60 * 1000;
    constructor(){
        this.apiKey = ("TURBOPACK compile-time value", "c928b68e-9227-4e28-a734-63f37cbd301b") || '';
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            console.warn('Guardian API key not configured. Please set NEXT_PUBLIC_GUARDIAN_API_KEY in your environment variables.');
        }
    }
    getCacheKey(endpoint, params) {
        return `${endpoint}?${params.toString()}`;
    }
    getFromCache(cacheKey) {
        const cached = this.cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
            console.log('📋 Using cached Guardian data');
            return cached.data;
        }
        return null;
    }
    setCache(cacheKey, data) {
        this.cache.set(cacheKey, {
            data,
            timestamp: Date.now()
        });
        // Clean old cache entries (keep max 100 entries)
        if (this.cache.size > 100) {
            const oldestKey = this.cache.keys().next().value;
            if (oldestKey) {
                this.cache.delete(oldestKey);
            }
        }
    }
    async searchArticles(query = '', section, page = 1, pageSize = 50) {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('Guardian API key not configured');
        }
        const params = new URLSearchParams({
            'api-key': this.apiKey,
            'show-fields': 'headline,standfirst,body,main,thumbnail,byline,trailText,bodyText',
            'show-tags': 'contributor,keyword',
            'show-elements': 'image,video',
            'page-size': pageSize.toString(),
            'page': page.toString(),
            'order-by': 'newest'
        });
        if (query) {
            params.append('q', query);
        }
        if (section) {
            params.append('section', section);
        }
        // Check cache first
        const cacheKey = this.getCacheKey('/search', params);
        const cachedData = this.getFromCache(cacheKey);
        if (cachedData) {
            return cachedData;
        }
        const url = `${this.baseUrl}/search?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const result = data.response;
        // Cache the result
        this.setCache(cacheKey, result);
        console.log('🌐 Guardian API request made (cached for 5min)');
        return result;
    }
    async getArticleById(articleId) {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('Guardian API key not configured');
        }
        const params = new URLSearchParams({
            'api-key': this.apiKey,
            'show-fields': 'headline,standfirst,body,main,thumbnail,byline,trailText,bodyText',
            'show-tags': 'contributor,keyword',
            'show-elements': 'image,video'
        });
        const url = `${this.baseUrl}/${articleId}?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.response.content;
    }
    async getSections() {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('Guardian API key not configured');
        }
        const url = `${this.baseUrl}/sections?api-key=${this.apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.response.results;
    }
    // Convert Guardian article to your app's format
    convertToArticleFormat(article) {
        let articleHtml = '';
        // Add standfirst (subtitle/summary) if available
        if (article.fields?.standfirst) {
            articleHtml += `<div class="article-standfirst" style="font-size: 1.2em; color: #666; font-weight: 400; line-height: 1.4; margin: 0 0 2em 0;">
        <strong>${article.fields.standfirst}</strong>
      </div>`;
        }
        // Try different body fields in order of preference
        let bodyContent = article.fields?.body || article.fields?.bodyText || '';
        if (bodyContent) {
            // Use Guardian's body content directly - it's already well-formatted with images in the right places
            // Enhance existing images in the content with better styling
            bodyContent = bodyContent.replace(/<img([^>]*?)>/g, (match, attrs)=>{
                // Keep all existing attributes and enhance the styling
                return `<img ${attrs} style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />`;
            });
            // Enhance existing figure elements with better styling
            bodyContent = bodyContent.replace(/<figure([^>]*?)>/g, (match, attrs)=>{
                return `<figure ${attrs} style="margin: 2em auto; text-align: center;">`;
            });
            // Enhance figcaptions with better styling
            bodyContent = bodyContent.replace(/<figcaption([^>]*?)>/g, (match, attrs)=>{
                return `<figcaption ${attrs} style="margin-top: 0.5em; font-size: 0.9em; color: #666; font-style: italic; text-align: center;">`;
            });
            // Enhance video elements if they exist
            bodyContent = bodyContent.replace(/<video([^>]*?)>/g, (match, attrs)=>{
                return `<video ${attrs} style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px;" controls />`;
            });
            // Clean up only truly empty paragraphs
            bodyContent = bodyContent.replace(/<p>\s*<\/p>/g, '');
            articleHtml += bodyContent;
        }
        // Only add images from elements if the body content doesn't have any images
        // This prevents duplicate images and preserves the original layout
        const hasImagesInBody = articleHtml.includes('<img') || articleHtml.includes('<figure');
        if (!hasImagesInBody && article.elements && article.elements.length > 0) {
            // Add a main image at the top if available
            const mainImageElement = article.elements.find((element)=>element.type === 'image' && element.assets && element.assets.length > 0);
            if (mainImageElement) {
                const imageAsset = mainImageElement.assets.find((asset)=>asset.type === 'image');
                if (imageAsset) {
                    const imageUrl = imageAsset.typeData.secureFile || imageAsset.file;
                    const alt = imageAsset.typeData.alt || imageAsset.typeData.caption || article.webTitle;
                    const caption = imageAsset.typeData.caption || '';
                    // Add main image at the beginning of the article
                    const mainImageHtml = `<figure style="margin: 0 0 2em 0; text-align: center;">
              <img src="${imageUrl}" alt="${alt}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
              ${caption ? `<figcaption style="margin-top: 0.5em; font-size: 0.9em; color: #666; font-style: italic;">${caption}</figcaption>` : ''}
            </figure>`;
                    articleHtml = mainImageHtml + articleHtml;
                }
            }
        }
        // Fallback: add main field image only if no other images were added
        if (article.fields?.main && !articleHtml.includes('<img') && !articleHtml.includes('<figure')) {
            const mainImageHtml = `<figure style="margin: 0 0 2em 0; text-align: center;">
              <img src="${article.fields.main}" alt="${article.webTitle.replace(/"/g, '&quot;')}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
            </figure>`;
            articleHtml = mainImageHtml + articleHtml;
        }
        // Add link to original article with better styling
        articleHtml += `<div class="original-article-link" style="margin-top: 3em; padding: 1.5em; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; border-left: 4px solid #0066cc; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <p style="margin: 0; color: #495057;"><em>📰 <strong>Read the complete article at:</strong> <a href="${article.webUrl}" target="_blank" rel="noopener noreferrer" style="color: #0066cc; font-weight: 600; text-decoration: none; border-bottom: 1px solid transparent; transition: border-bottom 0.2s ease;" onmouseover="this.style.borderBottom='1px solid #0066cc'" onmouseout="this.style.borderBottom='1px solid transparent'">The Guardian</a></em></p>
    </div>`;
        // Extract author from byline or contributor tags
        const author = article.fields?.byline || article.tags.find((tag)=>tag.type === 'contributor')?.webTitle || 'The Guardian';
        // Format publication date
        const formatDate = (dateString)=>{
            try {
                const date = new Date(dateString);
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                };
                return date.toLocaleDateString('en-US', options);
            } catch (error) {
                console.error('Error formatting date:', error);
                return dateString;
            }
        };
        // Calculate read time (rough estimate: 200 words per minute)
        const wordCount = article.fields?.body ? article.fields.body.replace(/<[^>]*>/g, '').split(/\s+/).length : 300;
        const readTime = Math.ceil(wordCount / 200);
        // Extract tags for categories
        const tags = [
            article.sectionName,
            article.pillarName,
            ...article.tags.filter((tag)=>tag.type === 'keyword').slice(0, 3).map((tag)=>tag.webTitle)
        ].filter(Boolean);
        return {
            title: article.fields?.headline || article.webTitle,
            authorName: author,
            createdAt: formatDate(article.webPublicationDate),
            readTime: readTime,
            tags: tags,
            authorId: 'guardian-api',
            hasReflectionRoom: false,
            html: articleHtml
        };
    }
    isConfigured() {
        return !!(this.apiKey && this.apiKey !== 'YOUR_API_KEY_HERE');
    }
}
const guardianService = new GuardianService();
}}),
"[project]/src/services/newsService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Standard news article interface (compatible with Guardian API)
__turbopack_context__.s({
    "newsService": (()=>newsService)
});
// Import Guardian service for news functionality
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/guardianService.ts [app-ssr] (ecmascript)");
;
class NewsService {
    constructor(){
        // Using Guardian API exclusively for news
        console.log('📰 News service initialized with Guardian API');
    }
    // Convert Guardian article to NewsArticle format for compatibility
    convertGuardianToNewsArticle(guardianArticle) {
        return {
            title: guardianArticle.webTitle,
            description: guardianArticle.fields?.standfirst || guardianArticle.fields?.trailText || '',
            content: guardianArticle.fields?.bodyText || guardianArticle.fields?.standfirst || '',
            url: guardianArticle.webUrl,
            urlToImage: guardianArticle.fields?.thumbnail || '',
            publishedAt: guardianArticle.webPublicationDate,
            source: {
                name: 'The Guardian'
            },
            author: guardianArticle.fields?.byline || 'The Guardian'
        };
    }
    async getTopHeadlines(category = 'general', country = 'us') {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guardianService"].isConfigured()) {
            throw new Error('Guardian API not configured. Please set NEXT_PUBLIC_GUARDIAN_API_KEY in your environment variables.');
        }
        try {
            // Map categories to Guardian sections
            const categoryToSectionMap = {
                'general': '',
                'business': 'business',
                'technology': 'technology',
                'science': 'science',
                'health': 'society',
                'sports': 'sport',
                'entertainment': 'culture'
            };
            const section = categoryToSectionMap[category] || '';
            console.log(`📰 Fetching Guardian headlines for section: ${section || 'all'}`);
            const guardianResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guardianService"].searchArticles('', section, 1, 10);
            const articles = guardianResponse.results.map((article)=>this.convertGuardianToNewsArticle(article));
            return {
                status: 'ok',
                totalResults: guardianResponse.total || articles.length,
                articles: articles
            };
        } catch (error) {
            console.error('Error fetching Guardian headlines:', error);
            throw new Error('Failed to fetch news headlines from The Guardian');
        }
    }
    async searchArticles(query, sortBy = 'newest') {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guardianService"].isConfigured()) {
            throw new Error('Guardian API not configured. Please set NEXT_PUBLIC_GUARDIAN_API_KEY in your environment variables.');
        }
        try {
            console.log(`🔍 Searching Guardian for: "${query}"`);
            const guardianResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guardianService"].searchArticles(query, undefined, 1, 10);
            const articles = guardianResponse.results.map((article)=>this.convertGuardianToNewsArticle(article));
            return {
                status: 'ok',
                totalResults: guardianResponse.total || articles.length,
                articles: articles
            };
        } catch (error) {
            console.error('Error searching Guardian articles:', error);
            throw new Error('Failed to search Guardian articles');
        }
    }
    isConfigured() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guardianService"].isConfigured();
    }
    getCurrentProvider() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guardianService"].isConfigured() ? 'The Guardian' : 'Not configured';
    }
    getConfiguredServices() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$guardianService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["guardianService"].isConfigured() ? [
            'The Guardian'
        ] : [];
    }
}
const newsService = new NewsService();
}}),
"[project]/src/app/news/[articleId]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NewsArticlePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$externalArticleService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/externalArticleService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommentSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CommentSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$newsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/newsService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getMoodFromText.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/moodThemes.ts [app-ssr] (ecmascript)");
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
function NewsArticlePage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initialLikes, setInitialLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Mood feature state
    const [moodFeatureEnabled, setMoodFeatureEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('reflective');
    const articleUrl = decodeURIComponent(params?.articleId);
    // Set up authentication listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged((user)=>{
            setCurrentUser(user);
            setIsAuthenticated(!!user);
        });
        return ()=>unsubscribe();
    }, []);
    // Load mood feature preference from localStorage (only for authenticated users)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthenticated) {
            const savedPreference = localStorage.getItem('moodFeatureEnabled');
            if (savedPreference !== null) {
                setMoodFeatureEnabled(JSON.parse(savedPreference));
            } else {
                setMoodFeatureEnabled(true);
            }
        } else {
            setMoodFeatureEnabled(false);
        }
    }, [
        isAuthenticated
    ]);
    // Fetch the specific article
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchArticle = async ()=>{
            try {
                setIsLoading(true);
                setError('');
                console.log('News Article Page - articleUrl:', articleUrl);
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$newsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsService"].isConfigured()) {
                    setError('News API not configured. Please add your NewsAPI.org API key to environment variables.');
                    return;
                }
                // Extract search terms from the URL for a more targeted search
                const urlPath = articleUrl.split('/').pop() || '';
                const searchTerms = urlPath.replace(/-/g, ' ').replace(/_/g, ' ').split(/[^a-zA-Z\s]/).filter((term)=>term.length > 3).slice(0, 3) // Take first 3 meaningful terms
                .join(' ');
                console.log('News Article Page - searchTerms:', searchTerms);
                // Try multiple search strategies to find the article
                let foundArticle = null;
                // Strategy 1: Search with extracted terms
                if (searchTerms) {
                    try {
                        const searchData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$newsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsService"].searchArticles(searchTerms);
                        if (searchData.status === 'ok') {
                            foundArticle = searchData.articles.find((a)=>a.url === articleUrl);
                            console.log('News Article Page - search results count:', searchData.articles.length);
                        }
                    } catch (err) {
                        console.log('Search strategy 1 failed:', err);
                    }
                }
                // Strategy 2: Try different categories if not found
                if (!foundArticle) {
                    const categories = [
                        'general',
                        'business',
                        'technology',
                        'sports',
                        'entertainment',
                        'health',
                        'science'
                    ];
                    for (const category of categories){
                        try {
                            const headlinesData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$newsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["newsService"].getTopHeadlines(category);
                            if (headlinesData.status === 'ok') {
                                foundArticle = headlinesData.articles.find((a)=>a.url === articleUrl);
                                if (foundArticle) {
                                    console.log('News Article Page - found in category:', category);
                                    break;
                                }
                            }
                        } catch (err) {
                            console.log(`Category ${category} failed:`, err);
                            continue;
                        }
                    }
                }
                if (foundArticle) {
                    setArticle(foundArticle);
                } else {
                    // If we still can't find it, create a fallback article object
                    // This happens because NewsAPI doesn't have a direct "get by URL" method
                    console.log('Creating fallback article for:', articleUrl);
                    // Extract article title from URL
                    const urlPath = articleUrl.split('/').pop() || '';
                    const titleFromUrl = urlPath.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\d+/g, '').split(/[^a-zA-Z\s]/).filter((word)=>word.length > 2).map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    // Extract source from URL
                    let sourceName = 'News Source';
                    try {
                        const urlDomain = new URL(articleUrl).hostname.replace('www.', '');
                        sourceName = urlDomain.split('.')[0].charAt(0).toUpperCase() + urlDomain.split('.')[0].slice(1);
                    } catch (e) {
                        console.log('Error parsing URL domain:', e);
                    }
                    const fallbackArticle = {
                        title: titleFromUrl || 'News Article',
                        description: 'This article is no longer available through NewsAPI. Click the link below to read the full article on the original site.',
                        content: 'This article is no longer available through our news feed. Please visit the original source to read the full content.',
                        url: articleUrl,
                        urlToImage: '',
                        publishedAt: new Date().toISOString(),
                        source: {
                            name: sourceName
                        },
                        author: sourceName
                    };
                    setArticle(fallbackArticle);
                }
                // Fetch likes for this News article from our social system
                await fetchLikesData(articleUrl);
            } catch (error) {
                console.error('Error fetching news article:', error);
                setError('Failed to load article. Please try again later.');
            } finally{
                setIsLoading(false);
            }
        };
        if (articleUrl) {
            fetchArticle();
        }
    }, [
        articleUrl
    ]);
    // Analyze mood when article is loaded (only for authenticated users)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (article && isAuthenticated) {
            // Extract text from article content for sentiment analysis
            const textContent = article.description + ' ' + (article.content || '');
            if (textContent.trim()) {
                const cleanText = textContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
                const detectedMood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getMoodFromText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMoodFromText"])(cleanText);
                setMood(detectedMood);
            }
        }
    }, [
        article,
        isAuthenticated
    ]);
    const handleToggleMoodFeature = (enabled)=>{
        setMoodFeatureEnabled(enabled);
        localStorage.setItem('moodFeatureEnabled', JSON.stringify(enabled));
    };
    const handleBackToList = ()=>{
        router.push('/news');
    };
    // Fetch likes data for the News article from our social system
    const fetchLikesData = async (newsArticleUrl)=>{
        try {
            const socialData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$externalArticleService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExternalArticleService"].getSocialData(newsArticleUrl, 'newsapi');
            if (socialData) {
                setInitialLikes(socialData.likes || []);
            } else {
                setInitialLikes([]);
            }
        } catch (error) {
            console.error('Error fetching likes data:', error);
            setInitialLikes([]);
        }
    };
    const formatDate = (dateString)=>{
        try {
            const date = new Date(dateString);
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC'
            };
            return date.toLocaleDateString('en-US', options);
        } catch (error) {
            console.error('Error formatting date:', error);
            return dateString;
        }
    };
    // Convert news article to display format
    const convertToArticleFormat = (article)=>{
        let articleHtml = '';
        // Helper function to clean and unescape HTML content
        const cleanHtmlContent = (text)=>{
            if (!text) return '';
            // First, decode HTML entities
            let cleanText = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
            // Then remove HTML tags but preserve line breaks
            cleanText = cleanText.replace(/<[^>]*>/g, ' ');
            // Clean up multiple spaces
            cleanText = cleanText.replace(/\s+/g, ' ').trim();
            return cleanText;
        };
        // Helper function to safely escape HTML for attributes only
        const escapeForAttribute = (text)=>{
            if (!text) return '';
            return text.replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
        };
        // Check if this is a fallback article (no content available)
        const isFallback = article.content?.includes('no longer available through our news feed') || false;
        if (article.urlToImage) {
            const safeImageUrl = escapeForAttribute(article.urlToImage);
            const safeImageAlt = escapeForAttribute(article.title || 'News article image');
            articleHtml += `<img src="${safeImageUrl}" alt="${safeImageAlt}" style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px;" />`;
        }
        if (article.description) {
            const cleanDescription = cleanHtmlContent(article.description);
            articleHtml += `<p><strong>${cleanDescription}</strong></p>`;
        }
        if (article.content) {
            // Clean up the content (NewsAPI sometimes truncates with [+chars])
            const rawContent = article.content.replace(/\[\+\d+\s+chars\]$/, '...');
            const cleanContent = cleanHtmlContent(rawContent);
            articleHtml += `<p>${cleanContent}</p>`;
        }
        const safeUrl = escapeForAttribute(article.url || '');
        const safeSourceName = cleanHtmlContent(article.source?.name || 'News Source');
        if (isFallback) {
            // Make the external link more prominent for fallback articles - using simple background color instead of gradient
            articleHtml += `
        <div style="background-color: #667eea; color: white; padding: 2em; border-radius: 12px; text-align: center; margin: 2em 0; border: 1px solid #5a67d8;">
          <h3 style="margin: 0 0 1em 0; color: white;">Read Full Article</h3>
          <p style="margin: 0 0 1.5em 0; color: white; opacity: 0.9;">
            This article is available on the original news site
          </p>
          <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" style="background: white; color: #667eea; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; border: 2px solid white;">
            Visit ${safeSourceName}
          </a>
        </div>`;
        } else {
            articleHtml += `<p><em>Read the full article at: <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeSourceName}</a></em></p>`;
        }
        return {
            title: article.title || 'News Article',
            authorName: article.author || article.source?.name || 'Unknown',
            createdAt: formatDate(article.publishedAt),
            readTime: Math.ceil((article.content?.split(' ').length || 200) / 200),
            tags: [
                article.source?.name || 'News'
            ],
            authorId: 'news-api',
            hasReflectionRoom: false,
            html: articleHtml
        };
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[articleId]/page.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading article..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[articleId]/page.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/[articleId]/page.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/[articleId]/page.tsx",
            lineNumber: 315,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-lg mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[articleId]/page.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBackToList,
                        className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                        children: "Back to News"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[articleId]/page.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/[articleId]/page.tsx",
                lineNumber: 327,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/[articleId]/page.tsx",
            lineNumber: 326,
            columnNumber: 7
        }, this);
    }
    if (!article) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md mx-auto p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600 text-lg mb-4",
                        children: "Article not found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[articleId]/page.tsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBackToList,
                        className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
                        children: "Back to News"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news/[articleId]/page.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news/[articleId]/page.tsx",
                lineNumber: 343,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/news/[articleId]/page.tsx",
            lineNumber: 342,
            columnNumber: 7
        }, this);
    }
    const articleData = convertToArticleFormat(article);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "guardian-article news-article",
        style: {
            position: 'relative',
            backgroundColor: '#ffffff'
        },
        children: [
            isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-mood-element": "primary-gradient",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `linear-gradient(160deg, 
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientStart}, 
              ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$moodThemes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moodThemes"][mood].gradientEnd})`,
                    backgroundSize: '150% 150%',
                    animation: 'gradientFlow 25s ease-in-out infinite',
                    zIndex: -10,
                    transition: 'background-image 2s ease-in-out',
                    pointerEvents: 'none',
                    display: "undefined" !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? ("TURBOPACK unreachable", undefined) : ''
                }
            }, void 0, false, {
                fileName: "[project]/src/app/news/[articleId]/page.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                articleId: `news-${encodeURIComponent(article.url)}`,
                articleHtml: articleData.html,
                article: articleData,
                initialLikes: initialLikes,
                currentUser: currentUser,
                isAuthenticated: isAuthenticated,
                onEditClick: handleBackToList,
                articleTitle: articleData.title,
                articleSlug: `news-${encodeURIComponent(article.url)}`,
                moodFeatureEnabled: moodFeatureEnabled,
                onToggleMoodFeature: handleToggleMoodFeature,
                mood: mood,
                isExternal: true,
                externalSource: "newsapi",
                externalId: article.url,
                externalUrl: article.url
            }, void 0, false, {
                fileName: "[project]/src/app/news/[articleId]/page.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '2rem 1rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommentSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    articleId: `news-${encodeURIComponent(article.url)}`
                }, void 0, false, {
                    fileName: "[project]/src/app/news/[articleId]/page.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/news/[articleId]/page.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news/[articleId]/page.tsx",
        lineNumber: 359,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6c8a5080._.js.map