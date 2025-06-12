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
"[project]/src/components/ReflectionJournal.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "articleTitle": "ReflectionJournal-module__--vKPG__articleTitle",
  "container": "ReflectionJournal-module__--vKPG__container",
  "detailsHeader": "ReflectionJournal-module__--vKPG__detailsHeader",
  "emptyIcon": "ReflectionJournal-module__--vKPG__emptyIcon",
  "emptyState": "ReflectionJournal-module__--vKPG__emptyState",
  "header": "ReflectionJournal-module__--vKPG__header",
  "journalCard": "ReflectionJournal-module__--vKPG__journalCard",
  "journalGrid": "ReflectionJournal-module__--vKPG__journalGrid",
  "journalList": "ReflectionJournal-module__--vKPG__journalList",
  "journalMeta": "ReflectionJournal-module__--vKPG__journalMeta",
  "loading": "ReflectionJournal-module__--vKPG__loading",
  "loadingSpinner": "ReflectionJournal-module__--vKPG__loadingSpinner",
  "promptIcon": "ReflectionJournal-module__--vKPG__promptIcon",
  "readAgainLink": "ReflectionJournal-module__--vKPG__readAgainLink",
  "reflectionDetails": "ReflectionJournal-module__--vKPG__reflectionDetails",
  "reflectionItem": "ReflectionJournal-module__--vKPG__reflectionItem",
  "reflectionMeta": "ReflectionJournal-module__--vKPG__reflectionMeta",
  "reflectionPrompt": "ReflectionJournal-module__--vKPG__reflectionPrompt",
  "reflectionResponse": "ReflectionJournal-module__--vKPG__reflectionResponse",
  "reflectionsList": "ReflectionJournal-module__--vKPG__reflectionsList",
  "selectIcon": "ReflectionJournal-module__--vKPG__selectIcon",
  "selectPrompt": "ReflectionJournal-module__--vKPG__selectPrompt",
  "selected": "ReflectionJournal-module__--vKPG__selected",
  "spin": "ReflectionJournal-module__--vKPG__spin",
  "stats": "ReflectionJournal-module__--vKPG__stats",
});
}}),
"[project]/src/components/ReflectionJournal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reflectionService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reflectionService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionJournal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ReflectionJournal = ({ userId })=>{
    _s();
    const [journals, setJournals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedJournal, setSelectedJournal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [articleContent, setArticleContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingArticle, setLoadingArticle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingReflection, setDeletingReflection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReflectionJournal.useEffect": ()=>{
            loadJournals();
        }
    }["ReflectionJournal.useEffect"], [
        userId
    ]);
    const loadJournals = async ()=>{
        try {
            console.log('Loading reflection journals...');
            const userJournals = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reflectionService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserReflectionJournals"])(userId);
            console.log('Loaded journals:', userJournals);
            setJournals(userJournals);
        } catch (error) {
            console.error('Error loading reflection journals:', error);
        } finally{
            setLoading(false);
        }
    };
    const formatDate = (timestamp)=>{
        try {
            const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (error) {
            return 'Unknown date';
        }
    };
    const loadArticleContent = async (articleId)=>{
        setLoadingArticle(true);
        setArticleContent(null);
        try {
            const { getArticleById } = await __turbopack_context__.r("[project]/src/firebase/articles.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const article = await getArticleById(articleId);
            if (article) {
                setArticleContent({
                    title: article.title,
                    body: article.body
                });
            } else {
                setArticleContent({
                    title: 'Article not found',
                    body: 'This article may have been deleted or is no longer available.'
                });
            }
        } catch (error) {
            console.error('Error loading article content:', error);
            setArticleContent({
                title: 'Error loading article',
                body: 'There was an error loading this article content.'
            });
        } finally{
            setLoadingArticle(false);
        }
    };
    const handleDeleteReflection = async (articleId, reflectionId)=>{
        if (!confirm('Are you sure you want to delete this reflection? This action cannot be undone.')) {
            return;
        }
        setDeletingReflection(reflectionId);
        try {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reflectionService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteReflectionResponse"])(articleId, reflectionId);
            if (success) {
                // Reload the journals to reflect the changes
                await loadJournals();
                // If the current journal has no more reflections, clear the selection
                if (selectedJournal && selectedJournal.articleId === articleId) {
                    const updatedJournal = journals.find((j)=>j.articleId === articleId);
                    if (!updatedJournal || updatedJournal.responses.length === 0) {
                        setSelectedJournal(null);
                    } else {
                        setSelectedJournal(updatedJournal);
                    }
                }
            } else {
                alert('Failed to delete reflection. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting reflection:', error);
            alert('Error deleting reflection. Please try again.');
        } finally{
            setDeletingReflection(null);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                        lineNumber: 117,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading your reflection journal..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReflectionJournal.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ReflectionJournal.tsx",
            lineNumber: 115,
            columnNumber: 13
        }, this);
    }
    if (journals.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "📓 Your Reflection Journal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Your personal thoughts and reflections from your reading journey"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                    lineNumber: 129,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyIcon,
                            children: "📖"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 134,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "No reflections yet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Start reading articles and share your thoughts through interactive reflection prompts."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Your private reflections will appear here as you engage with content."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 137,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                    lineNumber: 133,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ReflectionJournal.tsx",
            lineNumber: 128,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "📓 Your Reflection Journal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Your personal thoughts and reflections from your reading journey"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                        lineNumber: 149,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    journals.length,
                                    " articles reflected on"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionJournal.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionJournal.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    journals.reduce((total, journal)=>total + journal.responses.length, 0),
                                    " reflections"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ReflectionJournal.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReflectionJournal.tsx",
                lineNumber: 147,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].journalGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].journalList,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Articles"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReflectionJournal.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            journals.map((journal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].journalCard} ${selectedJournal?.articleId === journal.articleId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ''}`,
                                    onClick: ()=>setSelectedJournal(journal),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleTitle,
                                            children: journal.articleTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 168,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].journalMeta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        journal.responses.length,
                                                        " reflections"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: formatDate(journal.updatedAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readAgainLink,
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                loadArticleContent(journal.articleId);
                                            },
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                padding: 0,
                                                font: 'inherit',
                                                cursor: 'pointer',
                                                color: 'inherit'
                                            },
                                            children: "Read again →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, journal.articleId, true, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflectionDetails,
                        children: articleContent ? // Show article content when "Read again" is clicked
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: articleContent.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setArticleContent(null),
                                            style: {
                                                background: '#f0f0f0',
                                                border: 'none',
                                                padding: '8px 16px',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            },
                                            children: "← Back to reflections"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 201,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 29
                                }, this),
                                loadingArticle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '20px',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 217,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Loading article..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 218,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 216,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].articleContent,
                                    dangerouslySetInnerHTML: {
                                        __html: articleContent.body
                                    },
                                    style: {
                                        padding: '20px',
                                        lineHeight: '1.6',
                                        fontSize: '16px',
                                        maxHeight: '70vh',
                                        overflowY: 'auto'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 221,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 198,
                            columnNumber: 25
                        }, this) : selectedJournal ? // Show reflections when a journal is selected
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: selectedJournal.articleTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Reflections from ",
                                                formatDate(selectedJournal.updatedAt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 239,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 237,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflectionsList,
                                    children: selectedJournal.responses.map((response, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflectionItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflectionPrompt,
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].promptIcon,
                                                            children: "💭"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: response.promptText
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteReflection(selectedJournal.articleId, response.id),
                                                            disabled: deletingReflection === response.id,
                                                            style: {
                                                                marginLeft: 'auto',
                                                                background: 'none',
                                                                border: 'none',
                                                                color: '#dc2626',
                                                                cursor: 'pointer',
                                                                padding: '4px 8px',
                                                                borderRadius: '4px',
                                                                fontSize: '12px',
                                                                opacity: deletingReflection === response.id ? 0.5 : 1
                                                            },
                                                            title: "Delete reflection",
                                                            children: deletingReflection === response.id ? '⏳' : '🗑️'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflectionResponse,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: response.response
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reflectionMeta,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            "Position: Paragraph ",
                                                            response.position + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, response.id, true, {
                                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                                            lineNumber: 244,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 242,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : // Default state when nothing is selected
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectPrompt,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectIcon,
                                    children: "👈"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 280,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Select an article"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 281,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: 'Choose an article from the left to view your reflections, or click "Read again" to view the full article'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ReflectionJournal.tsx",
                                    lineNumber: 282,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ReflectionJournal.tsx",
                            lineNumber: 279,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReflectionJournal.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReflectionJournal.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReflectionJournal.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, this);
};
_s(ReflectionJournal, "WYMiLJItE0LNhlXw6Le/+Q7W5pw=");
_c = ReflectionJournal;
const __TURBOPACK__default__export__ = ReflectionJournal;
var _c;
__turbopack_context__.k.register(_c, "ReflectionJournal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/my-thoughts/reflections/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReflectionsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReflectionJournal.tsx [app-client] (ecmascript)");
'use client';
;
;
function ReflectionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReflectionJournal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/my-thoughts/reflections/page.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
}
_c = ReflectionsPage;
var _c;
__turbopack_context__.k.register(_c, "ReflectionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3262cb4d._.js.map