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
"[project]/src/styles/home.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "home-module__i0QXTG__active",
  "activeTab": "home-module__i0QXTG__activeTab",
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
  "backLink": "home-module__i0QXTG__backLink",
  "cancelButton": "home-module__i0QXTG__cancelButton",
  "cancelReplyButton": "home-module__i0QXTG__cancelReplyButton",
  "center-column": "home-module__i0QXTG__center-column",
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
  "searchBarContainer": "home-module__i0QXTG__searchBarContainer",
  "searchContainer": "home-module__i0QXTG__searchContainer",
  "searchInput": "home-module__i0QXTG__searchInput",
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
  "userManagementContainer": "home-module__i0QXTG__userManagementContainer",
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
"[project]/src/app/dev/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DevPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/home.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Document sections with comprehensive information about the project
const projectStructureDoc = {
    id: 'project-structure',
    title: 'Project Structure',
    content: `
## Directory Structure

\`\`\`tsx
/src
  /app                  # Next.js App Router pages
    /articles           # Article-related routes
    /dev                # Developer documentation (this page)
    /login              # Authentication pages
    /my-profile         # User profile pages
    /user               # User public profile pages
  /components           # Reusable React components
    ArticleForm.tsx     # Form for creating/editing articles
    CommentSection.tsx  # Comment functionality for articles
    LeftSidebar.tsx     # Navigation sidebar
    UserSearch.tsx      # Search functionality for users
  /firebase             # Firebase configuration and utilities
    articles.ts         # Article-related Firebase functions
    clientApp.ts        # Firebase initialization
    notifications.ts    # Notification system
  /services             # Business logic services
    articleService.ts   # Article-related business logic
    userService.ts      # User-related business logic
    audioService.ts     # Audio feature functionality
  /styles               # Global and component styles
  /types                # TypeScript type definitions
\`\`\`

## Key Files Explained

- \`app/layout.tsx\`: Main application layout with authentication context
  - Wraps the entire app with auth providers
  - Contains global navigation components
  - Handles theme and responsiveness

- \`app/page.tsx\`: Homepage with article feed
  - Fetches and displays latest articles
  - Shows featured content
  - Handles different user states (authenticated vs guest)

- \`firebase/clientApp.ts\`: Firebase configuration and initialization
  - Sets up Firebase SDK with environment variables
  - Initializes Firestore, Auth, and Storage
  - Provides exported instances to the rest of the app

- \`components/LeftSidebar.tsx\`: Main navigation with user search
  - Collapsible sidebar with responsive behavior
  - Integrates user search functionality
  - Shows different options based on auth state

- \`components/ArticleForm.tsx\`: Form for creating/editing articles
  - Rich text editor integration
  - Image upload capabilities
  - Draft saving and publishing options
  `
};
const firebaseLogicDoc = {
    id: 'firebase-logic',
    title: 'Firebase Logic',
    content: `
## Authentication

The app uses Firebase Authentication with email/password and supports:
- User registration with email verification
- Password reset flows
- Session persistence across browser sessions
- Protected routes with role-based access

### Authentication Flow

\`\`\`tsx
// Example from login page
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

// Sign in
const signIn = async (email, password) => {
  try {
    // Attempt to authenticate with Firebase
    await signInWithEmailAndPassword(auth, email, password);
    
    // Redirect to home page after successful login
    router.push('/');
  } catch (error) {
    // Handle specific error codes
    const errorCode = error.code;
    switch(errorCode) {
      case 'auth/user-not-found':
        setError('No user found with this email');
        break;
      case 'auth/wrong-password':
        setError('Incorrect password');
        break;
      default:
        setError('Failed to sign in: ' + error.message);
    }
  }
};
\`\`\`

## Firestore Database

Data is organized in the following collections:

1. \`users/{uid}\`
   - User profile data
   - Role-based access control
   - References to created articles

2. \`articles/{articleId}\`
   - Article content, metadata
   - Author reference
   - Publication status (draft/published)
   - Read count and likes

3. \`comments/{commentId}\`
   - Comment content
   - References to articles and authors
   - Timestamp and like count

4. \`notifications/{notificationId}\`
   - User notifications
   - References to triggering events
   - Read status tracking

### Example Firestore Query

\`\`\`tsx
// Fetch user articles
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

const fetchUserArticles = async (userId) => {
  try {
    // Reference to articles collection
    const articlesRef = collection(db, 'articles');
    
    // Create query for the user's articles, ordered by date
    const q = query(
      articlesRef, 
      where('authorId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Map the results to a more usable format
    return querySnapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    }));
  } catch (error) {
    console.error('Error fetching user articles:', error);
    throw error;
  }
};
\`\`\`
  `
};
const articleSystemDoc = {
    id: 'article-system',
    title: 'Article System',
    content: `
## Article Lifecycle

Articles in Journalite follow this lifecycle:
1. **Creation**: Author creates content using the ArticleForm component
2. **Draft**: Article is saved but not visible to other users
3. **Published**: Article is made available to all users
4. **Updated**: Author can edit and update the article after publishing
5. **Deleted**: Article is removed from the system

## Article Creation Flow

The \`ArticleForm\` component handles article creation with these features:
- Rich text editor with formatting options
- Draft saving with auto-save capability
- Image upload and embedding
- Form validation
- Tag selection and categorization

\`\`\`tsx
// ArticleForm.tsx - Core submission logic
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createArticle } from '@/services/articleService';
import { useAuth } from '@/hooks/useAuth';

const ArticleForm = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !content) {
      setError('Title and content are required');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Create article in Firestore
      const newArticleRef = await createArticle({
        title,
        content,
        authorId: user.uid,
        status: 'published',
        tags,
        coverImage: coverImage ? await uploadImage(coverImage) : null,
        createdAt: new Date(),
        updatedAt: new Date(),
        readCount: 0,
        likes: 0,
      });
      
      // Redirect to the new article
      router.push(\`/articles/\${newArticleRef.id}\`);
    } catch (error) {
      console.error('Error creating article:', error);
      setError('Failed to create article. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Save as draft functionality
  const saveDraft = async () => {
    // Similar to handleSubmit but with status: 'draft'
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for title, content, tags, image upload */}
      {/* Submit and Save Draft buttons */}
    </form>
  );
};
\`\`\`

## Article Feed Population

The home feed is populated with articles using these key techniques:
- Querying published articles sorted by date
- Pagination using Firebase query cursors
- Optional filtering by tags or categories
- Featured articles with special prominence

\`\`\`tsx
// Home page article fetching
import { collection, query, where, orderBy, limit, getDocs, startAfter } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

// Initial article fetch
const fetchArticles = async (pageSize = 10) => {
  try {
    const articlesRef = collection(db, 'articles');
    
    // Get published articles, ordered by date
    const q = query(
      articlesRef,
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      limit(pageSize)
    );
    
    const querySnapshot = await getDocs(q);
    const articles = querySnapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    }));
    
    // Store the last document for pagination
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    
    return { articles, lastVisible };
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

// Load more articles (pagination)
const loadMoreArticles = async (lastVisible, pageSize = 10) => {
  try {
    const articlesRef = collection(db, 'articles');
    
    const q = query(
      articlesRef,
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      startAfter(lastVisible), // Start after the last article we fetched
      limit(pageSize)
    );
    
    const querySnapshot = await getDocs(q);
    const newArticles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    
    return { articles: newArticles, lastVisible: newLastVisible };
  } catch (error) {
    console.error('Error loading more articles:', error);
    throw error;
  }
};
\`\`\`

## Article Rendering

Articles are rendered using the \`RenderArticle\` component that handles:
- Markdown or rich text formatting
- Embedded images and media
- Code highlighting for technical content
- Comment section integration
- Social sharing options

## Comment System

Each article has a comment section allowing:
- Nested comments (replies)
- User avatars and profile links
- Markdown formatting in comments
- Likes and other reactions
  `
};
const userProfilesDoc = {
    id: 'user-profiles',
    title: 'User Profiles',
    content: `
## User Creation & Authentication

When a user signs up in Journalite:
1. Firebase Auth creates an authentication record
2. A corresponding Firestore document is created in \`users/{uid}\`
3. Email verification is sent automatically
4. The user is directed to complete their profile with additional information

\`\`\`tsx
// Registration flow from AuthForm.tsx
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/firebase/clientApp';
import { generateUsername } from '@/utils/userHelpers';

const registerUser = async (email: string, password: string, name: string) => {
  try {
    // Step 1: Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
    );
    
    const user = userCredential.user;
    
    // Step 2: Generate a unique username from their name
    const username = await generateUsername(name);
    
    // Step 3: Create Firestore profile document
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      username,
      role: 'user',
      bio: '',
      createdAt: new Date(),
      articleCount: 0,
      followersCount: 0,
      followingCount: 0,
      photoURL: null
    });
    
    // Step 4: Send email verification
    await sendEmailVerification(user, {
      url: window.location.origin + '/email-verified'
    });
    
    return {
      user,
      username
    };
  } catch (error) {
    console.error('Error registering user:', error);
    const errorCode = error.code;
    switch(errorCode) {
      case 'auth/email-already-in-use':
        throw new Error('Email is already registered');
      case 'auth/weak-password':
        throw new Error('Password is too weak');
      default:
        throw new Error('Failed to register: ' + error.message);
    }
  }
};
\`\`\`

## User Data Structure

User profiles store comprehensive data:

\`\`\`tsx
interface UserProfile {
  // Basic info
  name: string;        // Display name
  username: string;    // Unique handle
  email: string;       // Email address
  bio?: string;        // Optional bio
  photoURL?: string;   // Profile photo URL
  
  // Role & permissions
  role: 'user' | 'developer' | 'admin';
  
  // Statistics
  articleCount: number;
  followersCount: number;
  followingCount: number;
  
  // Metadata
  createdAt: Timestamp;
  lastActive?: Timestamp;
}
\`\`\`

## Username Generation

Usernames are automatically generated with these rules:
- Derived from the user's display name
- Converted to lowercase
- Spaces replaced with underscores
- Special characters removed
- If already taken, suffixed with random digits

\`\`\`tsx
// Username generation utility
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

export async function generateUsername(name: string): Promise<string> {
  // Convert name to lowercase, replace spaces with underscores
  let baseUsername = name.toLowerCase().replace(/\\s+/g, '_');
  
  // Remove special characters
  baseUsername = baseUsername.replace(/[^a-z0-9_]/g, '');
  
  // Check if username exists
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('username', '==', baseUsername));
  const snapshot = await getDocs(q);
  
  // If username is available, use it
  if (snapshot.empty) {
    return baseUsername;
  }
  
  // Otherwise, add random digits until we find an available username
  let isAvailable = false;
  let candidateUsername = '';
  
  while (!isAvailable) {
    // Add 3 random digits
    const randomSuffix = Math.floor(Math.random() * 900) + 100;
    candidateUsername = \`\${baseUsername}_\${randomSuffix}\`;
    
    // Check if this version is available
    const q2 = query(usersRef, where('username', '==', candidateUsername));
    const snapshot2 = await getDocs(q2);
    
    if (snapshot2.empty) {
      isAvailable = true;
    }
  }
  
  return candidateUsername;
}
\`\`\`

## User Search Implementation

The user search functionality is implemented with these features:
- Real-time search as you type
- Debounced input to minimize database queries
- Case-insensitive matching on name and username
- Clean UI with profile pictures and usernames
- Caching of recent results for performance

\`\`\`tsx
// UserSearch.tsx component
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import useDebounce from '@/hooks/useDebounce';

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Debounce search term to avoid too many queries
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    // Don't search until we have at least 2 characters
    if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) {
      setUsers([]);
      return;
    }
    
    const searchUsers = async () => {
      setLoading(true);
      
      try {
        const usersRef = collection(db, 'users');
        
        // Query for users by name (case insensitive)
        const nameQuery = query(
          usersRef,
          where('name', '>=', debouncedSearchTerm),
          where('name', '<=', debouncedSearchTerm + '\\uf8ff'),
          limit(5)
        );
        
        // Query for users by username
        const usernameQuery = query(
          usersRef,
          where('username', '>=', debouncedSearchTerm),
          where('username', '<=', debouncedSearchTerm + '\\uf8ff'),
          limit(5)
        );
        
        // Execute both queries
        const [nameSnapshot, usernameSnapshot] = await Promise.all([
          getDocs(nameQuery),
          getDocs(usernameQuery)
        ]);
        
        // Combine results, remove duplicates
        const usersMap = new Map();
        
        // Add users from name query
        nameSnapshot.docs.forEach(doc => {
          usersMap.set(doc.id, {
            id: doc.id,
            ...doc.data()
          });
        });
        
        // Add users from username query
        usernameSnapshot.docs.forEach(doc => {
          usersMap.set(doc.id, {
            id: doc.id,
            ...doc.data()
          });
        });
        
        // Convert map to array
        setUsers(Array.from(usersMap.values()));
      } catch (error) {
        console.error('Error searching users:', error);
      } finally {
        setLoading(false);
      }
    };
    
    searchUsers();
  }, [debouncedSearchTerm]);
  
  // Render search input and results
  return (
    <div className="searchContainer">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      
      {loading && <div>Searching...</div>}
      
      {!loading && users.length > 0 && (
        <div className="searchResults">
          {users.map(user => (
            <a href={\`/user/\${user.username}\`} key={user.id} className="searchResultItem">
              {/* User search result display */}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
\`\`\`
  `
};
const routingDoc = {
    id: 'routing',
    title: 'Routing',
    content: `
## Next.js App Router Architecture

Journalite uses Next.js App Router for all routing with a clean, logical structure:

\`\`\`
/app
  /page.tsx              # Home page
  /layout.tsx            # Root layout with providers
  /articles
    /[articleId]         # Dynamic article page
    /page.tsx            # Articles index
  /create-article
    /page.tsx            # Article creation form
  /edit-article
    /[articleId]         # Dynamic article editing
  /user
    /[username]          # Public user profile
  /my-profile            # Current user's profile
  /login                 # Authentication pages
  /register
  /dev                   # Developer documentation (this page)
\`\`\`

## Key Routes Explained

### Home Page (\`/\`)

- Displays trending articles
- Shows personalized feed for logged-in users
- Contains featured content section

### Article Page (\`/articles/[articleId]\`)

- Displays full article content
- Shows author information
- Includes comment section
- Provides related articles

\`\`\`tsx
// app/articles/[articleId]/page.tsx
import { getArticleById } from '@/services/articleService';
import { notFound } from 'next/navigation';

// This function generates static paths for articles at build time
export async function generateStaticParams() {
  // Get popular article IDs to pre-render
  const popularArticleIds = await getPopularArticleIds();
  
  return popularArticleIds.map(id => ({
    articleId: id
  }));
}

// Main article page component
export default async function ArticlePage({ params }) {
  const { articleId } = params;
  
  try {
    // Get article data
    const article = await getArticleById(articleId);
    
    // If article doesn't exist or isn't published
    if (!article || article.status !== 'published') {
      notFound();
    }
    
    return (
      <div className="article-container">
        <article>
          <h1>{article.title}</h1>
          <ArticleContent content={article.content} />
          <CommentSection articleId={articleId} />
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error loading article:', error);
    notFound();
  }
}
\`\`\`

### User Profile (\`/user/[username]\`)

- Public user profile accessible by username
- Shows user's articles and bio
- Different from private profile dashboard

\`\`\`tsx
// app/user/[username]/page.tsx
import { getUserByUsername } from '@/services/userService';
import { getUserArticles } from '@/services/articleService';
import { notFound } from 'next/navigation';

export default async function UserProfilePage({ params }) {
  const { username } = params;
  
  try {
    // Get user data by username
    const user = await getUserByUsername(username);
    
    if (!user) {
      notFound();
    }
    
    // Get user's published articles
    const articles = await getUserArticles(user.id, {
      status: 'published',
      limit: 10
    });
    
    return (
      <div className="profile-container">
        <UserProfileHeader user={user} />
        <UserArticlesGrid articles={articles} />
      </div>
    );
  } catch (error) {
    console.error('Error loading profile:', error);
    notFound();
  }
}
\`\`\`

## Route Protection & Authentication

Routes are protected using:
- Client-side authentication checks
- Server-side authentication status verification
- Role-based access control for admin areas

\`\`\`tsx
// Example of protected route wrapper
'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading && !user) {
      // User is not authenticated, redirect to login
      router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
    }
  }, [user, loading, router]);
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!user) {
    return null; // Don't render anything while redirecting
  }
  
  return children;
}
\`\`\`

## Dynamic Routes & Server Components

Journalite uses both static and dynamic rendering:
- Static rendering for content that doesn't change often
- Dynamic rendering for personalized content
- Streaming for improved user experience with large pages

## Error Handling

Error boundaries are used to gracefully handle route errors:
- Custom 404 page for content not found
- Error pages for server errors
- Fallback UI components for partial failures
  `
};
const deploymentDoc = {
    id: 'deployment',
    title: 'Deployment & Build Modes',
    content: `
## Deployment Overview

Journalite is configured for seamless deployment to Vercel with:
- Optimized production builds
- Environment variable configuration
- Image optimization
- Edge caching for improved performance

### Deployment Process

\`\`\`bash
# Build the application for production
npm run build

# Test the production build locally
npm run start

# Deploy to Vercel (if CLI is installed)
vercel --prod
\`\`\`

## Environment Configuration

The application requires these environment variables:

\`\`\`
# Firebase configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Optional analytics
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id

# Optional for custom domains
NEXT_PUBLIC_BASE_URL=https://your-domain.com
\`\`\`

## Next.js Configuration

The Next.js configuration in \`next.config.js\` is optimized for production:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for containerized deployments (Docker)
  output: 'standalone', 
  
  // Configure allowed image domains for optimization
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com' // For Google profile photos
    ],
    // Image optimization settings
    formats: ['image/webp'],
  },
  
  // Handle TypeScript and ESLint errors gracefully in production
  typescript: {
    // Prevents TypeScript errors from breaking production builds
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  
  eslint: {
    // Prevents ESLint errors from breaking production builds
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  
  // Configure redirects and rewrites
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/my-profile',
        permanent: true,
      },
    ];
  },
  
  // Enable experimental features as needed
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
\`\`\`

## Build Optimization

The build process is optimized for performance:
- Code splitting for reduced bundle sizes
- Image optimization with Next.js Image component
- Font optimization with next/font
- Server component usage for reduced client JS

## Caching Strategy

Journalite implements a hybrid caching strategy:
- Static generation for non-personalized content
- Incremental Static Regeneration (ISR) for semi-dynamic content
- Client-side fetching for user-specific data

\`\`\`tsx
// Example of ISR implementation for article pages
export const revalidate = 3600; // Revalidate this page every hour

export async function generateStaticParams() {
  // Get most popular articles for static generation
  const topArticles = await getTopArticles(50);
  
  return topArticles.map(article => ({
    articleId: article.id,
  }));
}
\`\`\`

## Production Monitoring

Once deployed, monitor your application with:
- Vercel Analytics for performance metrics
- Firebase Performance Monitoring
- Error tracking via Sentry integration
- Custom logging for critical operations

## Scaling Considerations

As your application grows:
- Implement database indexing for common queries
- Consider Firebase collection sharding for large datasets
- Use Firebase Functions for background processing
- Enable Edge caching for frequently accessed content
  `
};
const bestPracticesDoc = {
    id: 'best-practices',
    title: 'Best Practices',
    content: `
## Coding Standards

### Component Structure

Components should follow this consistent pattern:

\`\`\`tsx
// Example component structure
import { useState, useEffect } from 'react';
import { SomeType } from '@/types';

// Types at the top
interface Props {
  title: string;
  onAction: () => void;
}

// Component with named export
export default function ExampleComponent({ title, onAction }: Props) {
  // 1. State declarations
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SomeType | null>(null);
  
  // 2. Effects
  useEffect(() => {
    fetchData();
  }, []);
  
  // 3. Event handlers and helper functions
  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch data
      const result = await someApiCall();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClick = () => {
    onAction();
  };
  
  // 4. Conditional rendering
  if (loading) return <LoadingSpinner />;
  if (!data) return <EmptyState />;
  
  // 5. Main render
  return (
    <div className="example-component">
      <h2>{title}</h2>
      <div className="content">
        {data.items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <button onClick={handleClick}>Action</button>
    </div>
  );
}
\`\`\`

### Naming Conventions

- **Components**: PascalCase (e.g., \`ArticleCard.tsx\`)
- **Hooks**: camelCase with 'use' prefix (e.g., \`useArticle.ts\`)
- **Utilities**: camelCase (e.g., \`formatDate.ts\`)
- **Types**: PascalCase with descriptive names (e.g., \`ArticleData\`)
- **CSS Modules**: ComponentName.module.css (e.g., \`ArticleCard.module.css\`)

### File Organization

Follow these patterns for organizing files:

\`\`\`
/components
  /Article                    # Component folder
    ArticleCard.tsx           # Main component
    ArticleCard.module.css    # Component styles
    useArticleActions.ts      # Component-specific hook
    index.ts                  # Re-export for clean imports
  /ui                         # Reusable UI components
    Button.tsx
    Input.tsx
/hooks                        # Global hooks
  useAuth.ts
  useFirestore.ts
/types                        # Type definitions
  article.types.ts
  user.types.ts
\`\`\`

### State Management

For state management, follow this hierarchy:
1. **Local component state**: For UI-specific state
2. **Context API**: For shared state across components
3. **Custom hooks**: For reusable state logic
4. **URL state**: For shareable/bookmarkable state

### Firebase Best Practices

1. **Security Rules**
   - Always implement restrictive security rules
   - Test rules thoroughly before deployment
   - Use role-based permissions

2. **Query Optimization**
   - Use compound queries with appropriate indexes
   - Limit query results to avoid excessive reads
   - Add pagination for large data sets

3. **Data Modeling**
   - Keep documents small and focused
   - Use subcollections for one-to-many relationships
   - Denormalize data when needed for read performance

\`\`\`tsx
// Example of optimized Firestore query
const getArticlesForHome = async (limit = 10) => {
  try {
    const articlesRef = collection(db, "articles");
    const q = query(
      articlesRef,
      where("status", "==", "published"),
      orderBy("publishedAt", "desc"),
      limit(limit)
    );
    
    // Execute query with proper error handling
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error("Failed to fetch articles");
  }
};
\`\`\`

### Performance Optimization

1. **Code Splitting**
   - Use dynamic imports for large components
   - Implement route-based code splitting
   - Lazy load below-the-fold content

2. **Image Optimization**
   - Always use Next.js Image component
   - Choose appropriate sizes and formats
   - Implement responsive images with srcset

3. **Rendering Strategies**
   - Use Server Components for static content
   - Implement Client Components only when needed
   - Consider Streaming for large pages

\`\`\`tsx
// Example of optimized image usage
import Image from 'next/image';

function OptimizedImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={500}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSU..."
      priority={true}
      sizes="(max-width: 768px) 100vw, 800px"
    />
  );
}
\`\`\`

### Error Handling

Implement comprehensive error handling:
- Use try/catch for async operations
- Provide user-friendly error messages
- Log errors for debugging
- Implement error boundaries for UI resilience

### Accessibility

Always follow accessibility best practices:
- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation
- Maintain sufficient color contrast
- Test with screen readers
  `
};
// Collection of all documentation sections
const docSections = [
    projectStructureDoc,
    firebaseLogicDoc,
    articleSystemDoc,
    userProfilesDoc,
    routingDoc,
    deploymentDoc,
    bestPracticesDoc
];
// User Management Component
function UserManagement() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredUsers, setFilteredUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        admins: 0,
        developers: 0,
        regular: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserManagement.useEffect": ()=>{
            async function fetchUsers() {
                try {
                    setLoading(true);
                    const usersQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(50));
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(usersQuery);
                    const usersData = querySnapshot.docs.map({
                        "UserManagement.useEffect.fetchUsers.usersData": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["UserManagement.useEffect.fetchUsers.usersData"]);
                    // Calculate stats
                    const adminCount = usersData.filter({
                        "UserManagement.useEffect.fetchUsers": (user)=>user.role === 'admin'
                    }["UserManagement.useEffect.fetchUsers"]).length;
                    const devCount = usersData.filter({
                        "UserManagement.useEffect.fetchUsers": (user)=>user.role === 'developer'
                    }["UserManagement.useEffect.fetchUsers"]).length;
                    const regularCount = usersData.filter({
                        "UserManagement.useEffect.fetchUsers": (user)=>!user.role || user.role === 'user'
                    }["UserManagement.useEffect.fetchUsers"]).length;
                    setStats({
                        total: usersData.length,
                        admins: adminCount,
                        developers: devCount,
                        regular: regularCount
                    });
                    setUsers(usersData);
                    setFilteredUsers(usersData);
                } catch (err) {
                    console.error("Error fetching users:", err);
                    setError("Failed to load users");
                } finally{
                    setLoading(false);
                }
            }
            fetchUsers();
        }
    }["UserManagement.useEffect"], []);
    // Filter users when search query changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserManagement.useEffect": ()=>{
            if (!searchQuery.trim()) {
                setFilteredUsers(users);
            } else {
                const lowerQuery = searchQuery.toLowerCase();
                const filtered = users.filter({
                    "UserManagement.useEffect.filtered": (user)=>user.name?.toLowerCase().includes(lowerQuery) || false || user.email?.toLowerCase().includes(lowerQuery) || false || user.username?.toLowerCase().includes(lowerQuery) || false
                }["UserManagement.useEffect.filtered"]);
                setFilteredUsers(filtered);
            }
        }
    }["UserManagement.useEffect"], [
        searchQuery,
        users
    ]);
    const updateUserRole = async (userId, newRole)=>{
        try {
            const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", userId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
                role: newRole
            });
            // Update local state to reflect change
            const updatedUsers = users.map((user)=>user.id === userId ? {
                    ...user,
                    role: newRole
                } : user);
            setUsers(updatedUsers);
            // Update filtered users
            if (!searchQuery.trim()) {
                setFilteredUsers(updatedUsers);
            } else {
                const lowerQuery = searchQuery.toLowerCase();
                setFilteredUsers(updatedUsers.filter((user)=>user.name?.toLowerCase().includes(lowerQuery) || false || user.email?.toLowerCase().includes(lowerQuery) || false || user.username?.toLowerCase().includes(lowerQuery) || false));
            }
            // Update stats
            const adminCount = updatedUsers.filter((user)=>user.role === 'admin').length;
            const devCount = updatedUsers.filter((user)=>user.role === 'developer').length;
            const regularCount = updatedUsers.filter((user)=>!user.role || user.role === 'user').length;
            setStats({
                total: updatedUsers.length,
                admins: adminCount,
                developers: devCount,
                regular: regularCount
            });
        } catch (err) {
            console.error("Error updating user role:", err);
            alert("Failed to update user role");
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading users..."
    }, void 0, false, {
        fileName: "[project]/src/app/dev/page.tsx",
        lineNumber: 1301,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/dev/page.tsx",
        lineNumber: 1302,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userManagementContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                children: "User Management"
            }, void 0, false, {
                fileName: "[project]/src/app/dev/page.tsx",
                lineNumber: 1306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                children: stats.total
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1310,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Total Users"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1309,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                children: stats.admins
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Admins"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                children: stats.developers
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Developers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                children: stats.regular
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                children: "Regular Users"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dev/page.tsx",
                lineNumber: 1308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search users by name, email, or username...",
                    value: searchQuery,
                    onChange: (e)=>setSearchQuery(e.target.value),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                }, void 0, false, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dev/page.tsx",
                lineNumber: 1327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].usersTableContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].usersTable,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dev/page.tsx",
                                        lineNumber: 1341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dev/page.tsx",
                                        lineNumber: 1342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dev/page.tsx",
                                        lineNumber: 1343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Role"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dev/page.tsx",
                                        lineNumber: 1344,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dev/page.tsx",
                                        lineNumber: 1345,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1340,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dev/page.tsx",
                            lineNumber: 1339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filteredUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noResults,
                                    children: "No users found"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dev/page.tsx",
                                    lineNumber: 1351,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1350,
                                columnNumber: 15
                            }, this) : filteredUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: user.name || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dev/page.tsx",
                                            lineNumber: 1356,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: user.email || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dev/page.tsx",
                                            lineNumber: 1357,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: user.username || 'N/A'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dev/page.tsx",
                                            lineNumber: 1358,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: user.role || 'user'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dev/page.tsx",
                                            lineNumber: 1359,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: user.role || 'user',
                                                onChange: (e)=>updateUserRole(user.id, e.target.value),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roleSelect,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "user",
                                                        children: "User"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dev/page.tsx",
                                                        lineNumber: 1366,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "developer",
                                                        children: "Developer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dev/page.tsx",
                                                        lineNumber: 1367,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "admin",
                                                        children: "Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dev/page.tsx",
                                                        lineNumber: 1368,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dev/page.tsx",
                                                lineNumber: 1361,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dev/page.tsx",
                                            lineNumber: 1360,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/src/app/dev/page.tsx",
                                    lineNumber: 1355,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dev/page.tsx",
                            lineNumber: 1348,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1338,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dev/page.tsx",
                lineNumber: 1337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dev/page.tsx",
        lineNumber: 1305,
        columnNumber: 5
    }, this);
}
_s(UserManagement, "w0SfY3H8/NKUvnNtHur6VJr1y48=");
_c = UserManagement;
// Documentation component with search functionality
function Documentation() {
    _s1();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(docSections[0].id);
    const [filteredSections, setFilteredSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(docSections);
    // Handle search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Documentation.useEffect": ()=>{
            if (!searchQuery.trim()) {
                setFilteredSections(docSections);
                return;
            }
            const lowerQuery = searchQuery.toLowerCase();
            const filtered = docSections.filter({
                "Documentation.useEffect.filtered": (section)=>section.title.toLowerCase().includes(lowerQuery) || section.content.toLowerCase().includes(lowerQuery)
            }["Documentation.useEffect.filtered"]);
            setFilteredSections(filtered);
            // If we have filtered results and the active section isn't in them,
            // set the active section to the first result
            if (filtered.length > 0 && !filtered.some({
                "Documentation.useEffect": (s)=>s.id === activeSection
            }["Documentation.useEffect"])) {
                setActiveSection(filtered[0].id);
            }
        }
    }["Documentation.useEffect"], [
        searchQuery,
        activeSection
    ]);
    // Handle section change
    const handleSectionChange = (sectionId)=>{
        setActiveSection(sectionId);
        // Scroll to top when changing sections
        window.scrollTo(0, 0);
    };
    // Add copy button functionality after the content is rendered
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Documentation.useEffect": ()=>{
            // Find all copy buttons
            const copyButtons = document.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyButton}`);
            // Add click handler to each button
            copyButtons.forEach({
                "Documentation.useEffect": (button)=>{
                    button.addEventListener('click', {
                        "Documentation.useEffect": (e)=>{
                            e.preventDefault();
                            // Find the code content element
                            const codeBlock = button.closest(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeBlock}`);
                            if (!codeBlock) return;
                            const codeContent = codeBlock.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeContent}`);
                            if (!codeContent) return;
                            // Get the text content without the HTML
                            const textToCopy = codeContent.textContent || '';
                            // Copy to clipboard
                            navigator.clipboard.writeText(textToCopy).then({
                                "Documentation.useEffect": ()=>{
                                    // Change button text temporarily
                                    const originalText = button.innerText;
                                    button.innerText = 'Copied!';
                                    // Reset button text after a delay
                                    setTimeout({
                                        "Documentation.useEffect": ()=>{
                                            button.innerText = originalText;
                                        }
                                    }["Documentation.useEffect"], 2000);
                                }
                            }["Documentation.useEffect"]);
                        }
                    }["Documentation.useEffect"]);
                }
            }["Documentation.useEffect"]);
        }
    }["Documentation.useEffect"], [
        activeSection,
        filteredSections
    ]); // Re-run when the active section changes
    // Find the currently active section
    const currentSection = filteredSections.find((s)=>s.id === activeSection) || filteredSections[0];
    // Create a safe html rendering key that changes when the content changes
    const contentKey = `doc-content-${currentSection?.id || 'empty'}-${Date.now()}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].documentationContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docSidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docSearchContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search documentation...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docSearchInput
                        }, void 0, false, {
                            fileName: "[project]/src/app/dev/page.tsx",
                            lineNumber: 1462,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docNav,
                        children: filteredSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSectionChange(section.id),
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docNavItem} ${activeSection === section.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docNavItemActive : ''}`,
                                children: section.title
                            }, section.id, false, {
                                fileName: "[project]/src/app/dev/page.tsx",
                                lineNumber: 1473,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1471,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dev/page.tsx",
                lineNumber: 1460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docContent,
                children: filteredSections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noResults,
                    children: "No documentation sections match your search."
                }, void 0, false, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1486,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docTitle,
                            children: currentSection.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/dev/page.tsx",
                            lineNumber: 1491,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docText,
                            dangerouslySetInnerHTML: {
                                __html: markdownToHtml(currentSection.content)
                            }
                        }, contentKey, false, {
                            fileName: "[project]/src/app/dev/page.tsx",
                            lineNumber: 1492,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/dev/page.tsx",
                lineNumber: 1484,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dev/page.tsx",
        lineNumber: 1459,
        columnNumber: 5
    }, this);
}
_s1(Documentation, "3+gOGISA38CV6RWUS2oQeA7NRV8=");
_c1 = Documentation;
// Simple markdown to HTML converter with enhanced styling
function markdownToHtml(markdown) {
    // Process code blocks with syntax highlighting and filename
    const processCodeBlocks = (content)=>{
        return content.replace(/```(tsx|js|jsx|ts|html|css|json)?\s*(?:\[([^\]]+)\])?(?:\n)([\s\S]+?)```/g, (match, lang, filename, code)=>{
            // Get filename for the code block (default based on language if not provided)
            const displayFilename = filename || getDefaultFilename(lang || '');
            // Replace template literals in code with a temporarily safe representation
            const safeCode = code.replace(/\${/g, '___TEMPLATE_START___').replace(/}/g, '___TEMPLATE_END___').replace(/`/g, '___BACKTICK___');
            // Add line numbers
            const lines = safeCode.trim().split('\n');
            const lineNumbers = lines.map((_, i)=>`<span class="${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lineNumber}">${i + 1}</span>`).join('');
            // Apply syntax highlighting based on language
            const highlightedCode = highlightSyntax(safeCode, lang || '');
            // Restore the template literals in the highlighted code
            const restoredCode = highlightedCode.replace(/___TEMPLATE_START___/g, '${').replace(/___TEMPLATE_END___/g, '}').replace(/___BACKTICK___/g, '`');
            return `
        <div class="${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeBlockContainer}">
          <pre class="${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeBlock}" data-filename="${displayFilename}">
            <div class="${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeLineNumbers}">${lineNumbers}</div>
            <div class="${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeContent}">${restoredCode}</div>
            <button class="${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyButton}" title="Copy to clipboard">Copy</button>
          </pre>
        </div>
      `;
        });
    };
    // Get default filename based on language
    const getDefaultFilename = (lang)=>{
        switch(lang){
            case 'tsx':
                return 'Component.tsx';
            case 'ts':
                return 'index.ts';
            case 'js':
                return 'script.js';
            case 'jsx':
                return 'Component.jsx';
            case 'html':
                return 'index.html';
            case 'css':
                return 'styles.css';
            case 'json':
                return 'config.json';
            default:
                return 'example.code';
        }
    };
    // Apply syntax highlighting to code
    const highlightSyntax = (code, language)=>{
        // Basic syntax highlighting for TypeScript/JavaScript
        if ([
            'ts',
            'tsx',
            'js',
            'jsx'
        ].includes(language)) {
            return code// Keywords
            .replace(/\b(const|let|var|function|class|interface|type|enum|import|export|from|as|return|if|else|for|while|switch|case|break|default|try|catch|finally|async|await|new|this|extends|implements|private|public|protected|static|get|set|super|void|yield)\b/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keyword + '">$1</span>')// Strings with better handling of escapes and multiline
            .replace(/(["'`])((?:\\\1|(?!\1).)*?)\1/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].string + '">$1$2$1</span>')// Template literals special handling
            .replace(/(`)((?:[^`]|\\.)*?)(`)/g, function(match, open, content, close) {
                // Process the content to highlight interpolation
                const processed = content.replace(/(\${)(.*?)(})/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$1</span>' + '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable + '">$2</span>' + '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$3</span>');
                return '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].string + '">' + open + processed + close + '</span>';
            })// Comments with full line support
            .replace(/(\/\/.*?)($|\n)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comment + '">$1</span>$2').replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comment + '">$1</span>')// JSX tags (for TSX/JSX)
            .replace(/(&lt;|\<)([A-Z][A-Za-z0-9]*|[a-z][A-Za-z0-9]*|\/?&gt;|\/?>\s*$)/g, function(match, bracket, content) {
                return '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">' + bracket + '</span>' + '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].type + '">' + content + '</span>';
            })// Functions - improved to avoid capturing keywords
            .replace(/(\s)([A-Za-z_$][A-Za-z0-9_$]*)(\s*\()/g, '$1<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].function + '">$2</span>$3')// Types with expanded list
            .replace(/\b(string|number|boolean|any|void|null|undefined|never|object|Symbol|Array|Promise|Record|Partial|Readonly|Required|Pick|Omit|Exclude|Extract|NonNullable|ReturnType)\b/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].type + '">$1</span>')// Variables, properties, and other identifiers
            .replace(/(\.)([A-Za-z_$][A-Za-z0-9_$]*)/g, '$1<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable + '">$2</span>').replace(/([A-Za-z_$][A-Za-z0-9_$]*)(\s*:\s*)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable + '">$1</span>$2')// Numbers with hex, binary, octal support
            .replace(/\b(0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].number + '">$1</span>')// Operators
            .replace(/([=!<>+\-*/%&|^~?:;,.]|=&gt;|=&lt;|&amp;&amp;|\|\|)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$1</span>')// Wrap each line in a span for line highlighting
            .split('\n').map((line, i)=>'<span class="code-line" data-line="' + (i + 1) + '">' + (line || '&nbsp;') + '</span>' // Replace empty lines with non-breaking space
            ).join('\n');
        } else if (language === 'html') {
            return code// Tags
            .replace(/(&lt;|<)(\/?)([\w\-]+)([^>]*?)(\/?)(>|&gt;)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$1$2</span>' + '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].type + '">$3</span>' + '$4' + '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$5$6</span>')// Attributes
            .replace(/(\s+)([a-zA-Z\-:_]+)(=)/g, '$1<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable + '">$2</span>' + '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$3</span>')// Strings in attributes
            .replace(/(=)(["'])((?:\\\2|(?!\2).)*?)(\2)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$1</span>' + '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].string + '">$2$3$4</span>')// Comments
            .replace(/(&lt;!--|<!--)([\s\S]*?)(--&gt;|-->)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comment + '">$1$2$3</span>')// Wrap each line in a span for line highlighting
            .split('\n').map((line, i)=>'<span class="code-line" data-line="' + (i + 1) + '">' + (line || '&nbsp;') + '</span>').join('\n');
        } else if (language === 'css') {
            return code// Selectors
            .replace(/([.#]?[\w\-_]+)(?=\s*\{)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].type + '">$1</span>')// Properties
            .replace(/([\w\-]+)(\s*:\s*)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable + '">$1</span>$2')// Values
            .replace(/(:)([^;{}]*)([;}])/g, function(match, colon, value, end) {
                return colon + value.replace(/([#](?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b|((?:\d*\.)?\d+(?:px|em|rem|vh|vw|%|s|ms|deg|pt)?)\b)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].number + '">$1$2</span>') + end;
            })// Comments
            .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comment + '">$1</span>')// Braces
            .replace(/({|})/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$1</span>')// Wrap each line in a span for line highlighting
            .split('\n').map((line, i)=>'<span class="code-line" data-line="' + (i + 1) + '">' + (line || '&nbsp;') + '</span>').join('\n');
        } else if (language === 'json') {
            return code// Keys
            .replace(/"([^"]+)"\s*:/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable + '">"$1"</span>:')// Strings
            .replace(/:\s*"([^"]+)"/g, ': <span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].string + '">"$1"</span>')// Numbers
            .replace(/:\s*(-?\d+(?:\.\d+)?)/g, ': <span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].number + '">$1</span>')// Boolean & null values
            .replace(/:\s*(true|false|null)\b/g, ': <span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].keyword + '">$1</span>')// Braces and brackets
            .replace(/([{}\[\]])/g, '<span class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].operator + '">$1</span>')// Wrap each line in a span for line highlighting
            .split('\n').map((line, i)=>'<span class="code-line" data-line="' + (i + 1) + '">' + (line || '&nbsp;') + '</span>').join('\n');
        }
        // For other languages, just wrap lines for consistent hover effect
        return code.split('\n').map((line, i)=>'<span class="code-line" data-line="' + (i + 1) + '">' + (line || '&nbsp;') + '</span>').join('\n');
    };
    let html = markdown;
    // Process alert boxes
    html = html.replace(/:::info\s+([^:]+):::/g, '<div class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alertInfo + '">$1</div>');
    html = html.replace(/:::warning\s+([^:]+):::/g, '<div class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alertWarning + '">$1</div>');
    html = html.replace(/:::success\s+([^:]+):::/g, '<div class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alertSuccess + '">$1</div>');
    // Process inline backtick content before code blocks
    html = html.replace(/`([^`]+)`/g, (match, content)=>{
        // Replace any potential JavaScript template expressions to avoid errors
        return '<code>' + content.replace(/\${/g, '\\${') + '</code>';
    });
    // Process code blocks
    html = processCodeBlocks(html);
    // Then process other markdown elements
    html = html// Headers
    .replace(/## ([^\n]+)/g, '<h2 class="' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].docSubheading + '">$1</h2>')// Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')// Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')// Lists
    .replace(/- ([^\n]+)/g, '<li>$1</li>')// Wrap lists in ul
    .replace(/(<li>[^<]+<\/li>(\s*)?)+/g, '<ul>$&</ul>');
    // Replace newlines with br tags except in code blocks
    const parts = html.split(/<pre class=/);
    for(let i = 0; i < parts.length; i++){
        if (i === 0 || !parts[i].includes('codeBlock')) {
            parts[i] = parts[i].replace(/\n\n/g, '<br><br>');
        }
    }
    html = parts.join('<pre class=');
    return html;
}
function DevPage() {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('docs');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DevPage.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "DevPage.useEffect.unsubscribe": async (user)=>{
                    if (!user) {
                        // User is not authenticated, redirect to login
                        router.push('/login');
                        return;
                    }
                    try {
                        // Check user role in Firestore
                        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid);
                        const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
                        if (userSnap.exists()) {
                            const userData = userSnap.data();
                            const userRole = userData.role;
                            // Check if user has developer or admin role
                            if (userRole === 'developer' || userRole === 'admin') {
                                setAuthorized(true);
                                setUserName(userData.name || user.displayName || user.email || 'Developer');
                            } else {
                                // User doesn't have required role, redirect to home
                                router.push('/');
                            }
                        } else {
                            // User document doesn't exist, redirect to home
                            router.push('/');
                        }
                    } catch (error) {
                        console.error('Error checking user role:', error);
                        router.push('/');
                    } finally{
                        setLoading(false);
                    }
                }
            }["DevPage.useEffect.unsubscribe"]);
            return ({
                "DevPage.useEffect": ()=>unsubscribe()
            })["DevPage.useEffect"];
        }
    }["DevPage.useEffect"], [
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                    }, void 0, false, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1815,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Verifying access..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dev/page.tsx",
                        lineNumber: 1816,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dev/page.tsx",
                lineNumber: 1814,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dev/page.tsx",
            lineNumber: 1813,
            columnNumber: 7
        }, this);
    }
    if (!authorized) {
        return null; // This will not be shown as we redirect unauthorized users
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].devDocsContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].devDocsTitle,
                    children: "Developer Portal"
                }, void 0, false, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1829,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].devDocsWelcome,
                    children: [
                        "Welcome, ",
                        userName,
                        "! This page contains developer tools and documentation."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1830,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton} ${activeTab === 'docs' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                            onClick: ()=>setActiveTab('docs'),
                            children: "Documentation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dev/page.tsx",
                            lineNumber: 1833,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabButton} ${activeTab === 'users' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeTab : ''}`,
                            onClick: ()=>setActiveTab('users'),
                            children: "User Management"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dev/page.tsx",
                            lineNumber: 1839,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1832,
                    columnNumber: 9
                }, this),
                activeTab === 'docs' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Documentation, {}, void 0, false, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1848,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserManagement, {}, void 0, false, {
                    fileName: "[project]/src/app/dev/page.tsx",
                    lineNumber: 1850,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dev/page.tsx",
            lineNumber: 1828,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dev/page.tsx",
        lineNumber: 1827,
        columnNumber: 5
    }, this);
}
_s2(DevPage, "65dsMytCMyx8n0cL9EU4Yk7KC18=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = DevPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "UserManagement");
__turbopack_context__.k.register(_c1, "Documentation");
__turbopack_context__.k.register(_c2, "DevPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_925af1bd._.js.map