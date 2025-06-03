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
"[project]/src/services/highlightService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "addCommentToHighlight": (()=>addCommentToHighlight),
    "deleteHighlight": (()=>deleteHighlight),
    "getArticleHighlights": (()=>getArticleHighlights),
    "getUserHighlights": (()=>getUserHighlights),
    "removeCommentFromHighlight": (()=>removeCommentFromHighlight),
    "saveHighlight": (()=>saveHighlight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
const saveHighlight = async (articleId, userId, text, prefix, suffix)=>{
    try {
        const highlightData = {
            articleId,
            userId,
            text,
            prefix,
            suffix,
            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            comments: []
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights'), highlightData);
        return docRef.id;
    } catch (error) {
        console.error('Error saving highlight:', error);
        throw error;
    }
};
const getArticleHighlights = async (articleId)=>{
    try {
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'highlights'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('articleId', '==', articleId));
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
    // Load highlights for the current article
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HighlightProvider.useEffect": ()=>{
            const loadHighlights = {
                "HighlightProvider.useEffect.loadHighlights": async ()=>{
                    if (articleId) {
                        setLoading(true);
                        try {
                            const articleHighlights = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleHighlights"])(articleId);
                            setHighlights(articleHighlights);
                        } catch (error) {
                            console.error('Error loading highlights:', error);
                        } finally{
                            setLoading(false);
                        }
                    }
                }
            }["HighlightProvider.useEffect.loadHighlights"];
            loadHighlights();
        }
    }["HighlightProvider.useEffect"], [
        articleId
    ]);
    // Save a new highlight
    const handleSaveHighlight = async (text, prefix, suffix, articleId)=>{
        if (!currentUser) {
            alert('You must be logged in to highlight text');
            return null;
        }
        try {
            const highlightId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$highlightService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveHighlight"])(articleId, currentUser.uid, text, prefix, suffix);
            // Add the new highlight to state
            const newHighlight = {
                id: highlightId,
                articleId,
                userId: currentUser.uid,
                text,
                prefix,
                suffix,
                createdAt: new Date()
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
    // Apply highlight styling to a DOM element
    const highlightElement = (range)=>{
        const highlightMark = document.createElement('mark');
        highlightMark.className = 'article-highlight';
        try {
            range.surroundContents(highlightMark);
        } catch (error) {
            console.error('Error highlighting range:', error);
            // Handle complex selection that spans multiple elements
            const fragment = range.extractContents();
            highlightMark.appendChild(fragment);
            range.insertNode(highlightMark);
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
        lineNumber: 133,
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
const HighlightToolbar = ({ selection, onHighlight, onResponse, onShare, onAiAssist })=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toolbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HighlightToolbar.useEffect": ()=>{
            // Don't show toolbar if no selection or empty selection
            if (!selection || selection.isCollapsed) {
                setIsVisible(false);
                return;
            }
            // Get the selection's bounding rectangle
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            // Position the toolbar above the selection
            const windowHeight = window.innerHeight;
            const toolbarHeight = toolbarRef.current?.offsetHeight || 40;
            // Calculate position (centered above the selection)
            const top = rect.top - toolbarHeight - 10 + window.scrollY;
            const left = rect.left + rect.width / 2;
            setPosition({
                top: top < 0 ? rect.bottom + 10 + window.scrollY : top,
                left
            });
            // Show the toolbar
            setIsVisible(true);
        }
    }["HighlightToolbar.useEffect"], [
        selection
    ]);
    // Handle highlighting action
    const handleHighlight = ()=>{
        if (selection && !selection.isCollapsed) {
            const range = selection.getRangeAt(0);
            const selectedText = selection.toString();
            onHighlight(selectedText, range);
            // Clear selection after highlighting
            window.getSelection()?.removeAllRanges();
            setIsVisible(false);
        }
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
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleHighlight,
                className: "highlight-btn highlight-btn-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Highlight"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HighlightToolbar.tsx",
                lineNumber: 114,
                columnNumber: 7
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
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HighlightToolbar.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Response"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HighlightToolbar.tsx",
                lineNumber: 123,
                columnNumber: 9
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
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "18",
                                cy: "5",
                                r: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "6",
                                cy: "12",
                                r: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "18",
                                cy: "19",
                                r: "3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8.59",
                                y1: "13.51",
                                x2: "15.42",
                                y2: "17.49"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "15.41",
                                y1: "6.51",
                                x2: "8.59",
                                y2: "10.49"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Share"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HighlightToolbar.tsx",
                lineNumber: 132,
                columnNumber: 9
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
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
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
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "8",
                                y1: "12",
                                x2: "16",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "8",
                                x2: "12",
                                y2: "16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightToolbar.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Journa AI"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HighlightToolbar.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HighlightToolbar.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HighlightToolbar.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this), document.body);
};
_s(HighlightToolbar, "fJj39La9ouV1eCoUYhrZbWnXa3k=");
_c = HighlightToolbar;
const __TURBOPACK__default__export__ = HighlightToolbar;
var _c;
__turbopack_context__.k.register(_c, "HighlightToolbar");
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
;
var _s = __turbopack_context__.k.signature();
;
;
;
// Get context for a selection
const getSelectionContext = (selection)=>{
    // Default empty result
    const result = {
        prefix: '',
        suffix: ''
    };
    if (!selection || selection.rangeCount === 0) return result;
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    // Clone the range for getting surrounding content
    const contextRange = range.cloneRange();
    // Get parent node of selection
    const parentNode = range.commonAncestorContainer;
    const parentContent = parentNode.textContent || '';
    // Find selection position in parent content
    const selectionStart = parentContent.indexOf(selectedText);
    if (selectionStart !== -1) {
        // Get up to 30 chars of context before and after selection
        const prefixStart = Math.max(0, selectionStart - 30);
        const suffixEnd = Math.min(parentContent.length, selectionStart + selectedText.length + 30);
        result.prefix = parentContent.substring(prefixStart, selectionStart);
        result.suffix = parentContent.substring(selectionStart + selectedText.length, suffixEnd);
    }
    return result;
};
// Apply highlights to existing content in the DOM
const applyHighlightsToContent = (highlights, articleContent)=>{
    if (!highlights || !articleContent) return;
    // First clear existing highlights to prevent duplicates
    const existingHighlights = articleContent.querySelectorAll('.article-highlight');
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
                mark.className = 'article-highlight';
                mark.dataset.highlightId = highlight.id;
                // Apply highlight
                range.surroundContents(mark);
            } catch (error) {
                console.error('Error applying highlight:', error);
            }
        }
    });
};
const ArticleHighlights = ({ articleId, children, onShare })=>{
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
    // Handle text selection
    const handleSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleSelection]": ()=>{
            // If unhighlight toolbar is active, don't process regular selections
            if (showUnhighlightToolbar) return;
            const currentSelection = window.getSelection();
            if (currentSelection && !currentSelection.isCollapsed && currentSelection.toString().trim() !== '') {
                setSelection(currentSelection);
            } else {
                setSelection(null);
            }
        }
    }["ArticleHighlights.useCallback[handleSelection]"], [
        showUnhighlightToolbar
    ]);
    // Handle highlight button click
    const handleHighlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleHighlight]": (selectedText, range)=>{
            if (selectedText && range) {
                // Get context for the selection
                const context = getSelectionContext(window.getSelection());
                // Save highlight to database
                saveHighlight(selectedText.trim(), context.prefix, context.suffix, articleId);
                // Apply highlight visually
                highlightElement(range);
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
            if (onShare) {
                onShare(selectedText);
            } else {
                // Fallback if no share handler is provided
                const shareText = `"${selectedText}" — via Journalite`;
                // Try to use native share API if available
                if (navigator.share) {
                    navigator.share({
                        text: shareText
                    }).catch({
                        "ArticleHighlights.useCallback[handleShare]": (error)=>{
                            console.error('Error sharing:', error);
                            // Fallback to copying to clipboard
                            navigator.clipboard.writeText(shareText).then({
                                "ArticleHighlights.useCallback[handleShare]": ()=>alert('Quote copied to clipboard!')
                            }["ArticleHighlights.useCallback[handleShare]"]).catch({
                                "ArticleHighlights.useCallback[handleShare]": (err)=>console.error('Failed to copy:', err)
                            }["ArticleHighlights.useCallback[handleShare]"]);
                        }
                    }["ArticleHighlights.useCallback[handleShare]"]);
                } else {
                    // Fallback to copying to clipboard
                    navigator.clipboard.writeText(shareText).then({
                        "ArticleHighlights.useCallback[handleShare]": ()=>alert('Quote copied to clipboard!')
                    }["ArticleHighlights.useCallback[handleShare]"]).catch({
                        "ArticleHighlights.useCallback[handleShare]": (err)=>console.error('Failed to copy:', err)
                    }["ArticleHighlights.useCallback[handleShare]"]);
                }
            }
        }
    }["ArticleHighlights.useCallback[handleShare]"], [
        onShare
    ]);
    // Handle AI assist button click
    const handleAiAssist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[handleAiAssist]": (selectedText)=>{
            setSelectedTextForAi(selectedText);
            setShowAiModal(true);
        }
    }["ArticleHighlights.useCallback[handleAiAssist]"], []);
    // Set up selection event listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleHighlights.useEffect": ()=>{
            document.addEventListener('selectionchange', handleSelection);
            return ({
                "ArticleHighlights.useEffect": ()=>{
                    document.removeEventListener('selectionchange', handleSelection);
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
                applyHighlightsToContent(highlights, contentRef);
            }
        }
    }["ArticleHighlights.useEffect"], [
        highlights,
        contentRef
    ]);
    // Get ref to content element
    const setRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ArticleHighlights.useCallback[setRef]": (node)=>{
            if (node) {
                setContentRef(node);
            }
        }
    }["ArticleHighlights.useCallback[setRef]"], []);
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
                lineNumber: 330,
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
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "9",
                                        x2: "12",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "9",
                                        x2: "18",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Unhighlight"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 356,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 350,
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
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "6",
                                        cy: "12",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "18",
                                        cy: "19",
                                        r: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "8.59",
                                        y1: "13.51",
                                        x2: "15.42",
                                        y2: "17.49"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "15.41",
                                        y1: "6.51",
                                        x2: "8.59",
                                        y2: "10.49"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Share"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 359,
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
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Response"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ArticleHighlights.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 340,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: setRef,
                className: "article-highlight-container",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 392,
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
                            lineNumber: 400,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Respond to highlighted text"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 406,
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
                            lineNumber: 407,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "highlight-response-input",
                            placeholder: "Write your response..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "highlight-response-submit",
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 412,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                    lineNumber: 399,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 398,
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
                            lineNumber: 421,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Journa AI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 427,
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
                            lineNumber: 428,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-ai-options",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Explain this"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Fact check"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Provide context"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "Summarize"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "highlight-ai-response",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "highlight-ai-loading",
                                children: "Journa AI is thinking..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArticleHighlights.tsx",
                                lineNumber: 437,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ArticleHighlights.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ArticleHighlights.tsx",
                    lineNumber: 420,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleHighlights.tsx",
                lineNumber: 419,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(ArticleHighlights, "wiXF8j4W3gvVdiShYoMlm8hfvZg=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticleWithHighlights.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/articles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/**
 * ArticleWithHighlights
 * 
 * Displays an article with highlighting functionality.
 * This component renders HTML content with the highlighting feature.
 */ const ArticleWithHighlights = ({ articleId, initialHtml })=>{
    _s();
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!initialHtml);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const articleContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Share handler for highlight sharing
    const handleShare = (text)=>{
        if (navigator.share) {
            navigator.share({
                title: article?.title || 'Shared highlight',
                text: `"${text}" - from article ${articleId}`,
                url: window.location.href
            }).catch((error)=>console.error('Error sharing:', error));
        } else {
            // Fallback for browsers that don't support navigator.share
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
                        const articleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleById"])(articleId);
                        if (!articleData) {
                            setError('Article not found');
                            return;
                        }
                        // Clean HTML content
                        const cleanHtml = articleData.body.replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '').replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
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
            // Clean HTML content
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
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading article..."
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
            lineNumber: 94,
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
                lineNumber: 104,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$HighlightContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightProvider"], {
        articleId: articleId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleHighlights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                articleId: articleId,
                onShare: handleShare,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticleWithHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleContent,
                    ref: articleContainerRef,
                    dangerouslySetInnerHTML: {
                        __html: getContentToDisplay()
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ArticleWithHighlights.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ArticleWithHighlights.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ArticleWithHighlights.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
};
_s(ArticleWithHighlights, "t736V7WCxK/hAlO4X16iqvabBnw=");
_c = ArticleWithHighlights;
const __TURBOPACK__default__export__ = ArticleWithHighlights;
var _c;
__turbopack_context__.k.register(_c, "ArticleWithHighlights");
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
const CommentSection = ({ slug, articleId: propArticleId, isComplex })=>{
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
            lineNumber: 267,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSectionTitle,
                children: "Join the Discussion"
            }, void 0, false, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 286,
                columnNumber: 7
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
                                lineNumber: 293,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "8",
                                x2: "12",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "12",
                                y1: "16",
                                x2: "12.01",
                                y2: "16"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 291,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentForm,
                onSubmit: handleCommentSubmit,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentInputContainer,
                    style: {
                        opacity: focusState ? 1 : 0.85
                    },
                    children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentAvatar,
                                children: getUserAvatar(currentUser.name, currentUser.id)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 308,
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
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 311,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSubmit,
                                type: "submit",
                                disabled: !newComment.trim() || submitting,
                                children: submitting ? 'Posting...' : 'Post'
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 323,
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
                                lineNumber: 333,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentSubmit} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginButton}`,
                                type: "button",
                                onClick: ()=>setShowLoginPrompt(true),
                                children: "Login to comment"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 332,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 301,
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
                            lineNumber: 354,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalTitle,
                            children: "Join the conversation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalText,
                            children: "Sign in to Journalite to share your thoughts and join the discussion."
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 356,
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
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginModalButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondary}`,
                                    children: "Create Account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CommentSection.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CommentSection.tsx",
                            lineNumber: 359,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CommentSection.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentLoading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading comments..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDots,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDot
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDot
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingDot
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 374,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 372,
                columnNumber: 9
            }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noComments,
                children: "Be the first to share your thoughts on this article."
            }, void 0, false, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 381,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentsList,
                children: comments.map((comment)=>{
                    const commentId = comment.commentId || comment.id || '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentItem,
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
                                        lineNumber: 392,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentDate,
                                        children: formatDate(comment.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 393,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 390,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentContent,
                                children: comment.content
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 395,
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
                                                    lineNumber: 407,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 406,
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
                                                    lineNumber: 411,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 410,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: comment.likes.length > 0 ? comment.likes.length : ''
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 414,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 399,
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
                                                    lineNumber: 429,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 428,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Reply"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 431,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 417,
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
                                                    lineNumber: 442,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 441,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 444,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 436,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 398,
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
                                                lineNumber: 456,
                                                columnNumber: 23
                                            }, this),
                                            `${comment.replies.length} ${comment.replies.length === 1 ? 'reply' : 'replies'}`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 452,
                                        columnNumber: 21
                                    }, this),
                                    expandedReplies[commentId] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replySection,
                                        children: comment.replies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyItem,
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
                                                                lineNumber: 468,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyDate,
                                                                children: formatDate(reply.createdAt)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyContent,
                                                        children: reply.content
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CommentSection.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, reply.replyId, true, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 465,
                                                columnNumber: 27
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 463,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true),
                            replyingTo === commentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyForm} ${comment.replies && comment.replies.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inThread : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replyInput,
                                        placeholder: "Write a reply...",
                                        value: replyContent,
                                        onChange: (e)=>setReplyContent(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 484,
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
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 491,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$comment$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].replySubmit,
                                                disabled: !replyContent.trim() || submittingReply,
                                                onClick: ()=>handleReplySubmit(commentId),
                                                children: submittingReply ? 'Posting...' : 'Post Reply'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CommentSection.tsx",
                                                lineNumber: 500,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CommentSection.tsx",
                                        lineNumber: 490,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CommentSection.tsx",
                                lineNumber: 483,
                                columnNumber: 19
                            }, this)
                        ]
                    }, commentId, true, {
                        fileName: "[project]/src/components/CommentSection.tsx",
                        lineNumber: 389,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/CommentSection.tsx",
                lineNumber: 385,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CommentSection.tsx",
        lineNumber: 285,
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
"[project]/src/app/articles/[id]/view/client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ArticleViewClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleWithHighlights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleWithHighlights.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommentSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CommentSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArticleComposer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/articles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/ArticlePage.module.css [app-client] (css module)");
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
// Separate component that uses useSearchParams
function ArticleViewContent({ id }) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const isUpdated = searchParams?.get('updated') === 'true';
    const articleId = id;
    const [article, setArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [articleHtml, setArticleHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [likes, setLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Set up authentication listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleViewContent.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "ArticleViewContent.useEffect.unsubscribe": (user)=>{
                    setCurrentUser(user);
                    // Check if article is liked by current user
                    if (user && article?.likes) {
                        setIsLiked(article.likes.includes(user.uid));
                    }
                }
            }["ArticleViewContent.useEffect.unsubscribe"]);
            return ({
                "ArticleViewContent.useEffect": ()=>unsubscribe()
            })["ArticleViewContent.useEffect"];
        }
    }["ArticleViewContent.useEffect"], [
        article
    ]);
    // SIMPLE DIRECT ARTICLE LOADING BY ID - no more complexity
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleViewContent.useEffect": ()=>{
            const fetchArticle = {
                "ArticleViewContent.useEffect.fetchArticle": async ()=>{
                    try {
                        console.log(`Directly loading article by ID: ${articleId}, timestamp: ${Date.now()}`);
                        setIsLoading(true);
                        // Force fetch fresh data with no caching
                        const articleData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$articles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleById"])(articleId);
                        if (!articleData) {
                            setError('Article not found');
                            setIsLoading(false);
                            return;
                        }
                        console.log('Successfully loaded article:', articleData.title);
                        // Get the HTML content
                        const cleanHtml = articleData.body || '';
                        setArticleHtml(cleanHtml);
                        setLikes(articleData.likes || []);
                        // Calculate read time
                        const wordCount = articleData.body ? articleData.body.split(/\s+/).length : 0;
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
                            tags: articleData.tags || []
                        });
                        setIsLoading(false);
                    } catch (error) {
                        console.error('Error loading article:', error);
                        setError('Failed to load article');
                        setIsLoading(false);
                    }
                }
            }["ArticleViewContent.useEffect.fetchArticle"];
            fetchArticle();
        }
    }["ArticleViewContent.useEffect"], [
        articleId,
        isUpdated
    ]);
    const handleLikeArticle = async ()=>{
        if (!currentUser) {
            alert('Please login to like articles');
            return;
        }
        try {
            if (isLiked) {
                setLikes(likes.filter((uid)=>uid !== currentUser.uid));
                setIsLiked(false);
            } else {
                setLikes([
                    ...likes,
                    currentUser.uid
                ]);
                setIsLiked(true);
            }
        } catch (error) {
            console.error('Error updating like status:', error);
        }
    };
    const handleEditClick = ()=>{
        setIsEditing(true);
    };
    const handleCancelEdit = ()=>{
        setIsEditing(false);
    };
    // Very simple update handler
    const handleUpdateComplete = ()=>{
        window.location.reload();
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingIndicator
                }, void 0, false, {
                    fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading article..."
                }, void 0, false, {
                    fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
            lineNumber: 139,
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
                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this);
    }
    if (isEditing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editingHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCancelEdit,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                            children: "← Back to Article"
                        }, void 0, false, {
                            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Editing: ",
                                article?.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleComposer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    articleId: articleId,
                    onUpdateComplete: handleUpdateComplete
                }, void 0, false, {
                    fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backLink,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15 18L9 12L15 6",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                "Home"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLogo,
                            children: "Journalite"
                        }, void 0, false, {
                            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageContainer,
                children: [
                    article && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleTitle,
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                lineNumber: 185,
                                columnNumber: 13
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
                                                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorDetails,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorName,
                                                        children: article.authorName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
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
                                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].likeButton} ${isLiked ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liked : ''}`,
                                                onClick: handleLikeArticle,
                                                "aria-label": isLiked ? 'Unlike article' : 'Like article',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: isLiked ? "currentColor" : "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].likeIcon,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: likes.length > 0 ? likes.length : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            currentUser && article.authorId === currentUser.uid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                                onClick: handleEditClick,
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            article.tags && article.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagContainer,
                                children: article.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                        children: tag
                                    }, index, false, {
                                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArticleWithHighlights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        articleId: articleId,
                        initialHtml: articleHtml || undefined
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].commentsContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommentSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            articleId: articleId
                        }, void 0, false, {
                            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/articles/[id]/view/client.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ArticleViewContent, "nGj1owPgoOvZ5GxY7WGR/mGCZmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ArticleViewContent;
function ArticleViewClient({ id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ArticlePage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
            children: "Loading article..."
        }, void 0, false, {
            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
            lineNumber: 247,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleViewContent, {
            id: id
        }, void 0, false, {
            fileName: "[project]/src/app/articles/[id]/view/client.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/articles/[id]/view/client.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_c1 = ArticleViewClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArticleViewContent");
__turbopack_context__.k.register(_c1, "ArticleViewClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_08956e6d._.js.map