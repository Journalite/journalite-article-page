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
"[project]/src/services/userService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export al as updateProfile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__deleteUser$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export G as deleteUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/notifications.ts [app-client] (ecmascript)");
;
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
            console.log('User profile already exists, updating instead of creating');
            // Update existing profile
            const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
                firstName: profile.firstName,
                lastName: profile.lastName,
                username: profile.username.toLowerCase(),
                email: profile.email.toLowerCase(),
                bio: profile.bio || existingUserProfile.bio || ''
            });
            // Update the user's display name in Firebase Auth
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__al__as__updateProfile$3e$__["updateProfile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser, {
                    displayName: profile.username
                });
            }
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
            bio: profile.bio || '',
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
async function getUserProfileByEmail(email) {
    if (!email) return null;
    try {
        const emailQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('email', '==', email.toLowerCase()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(1));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(emailQuery);
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
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
            bio
        });
    } catch (error) {
        console.error('Error updating user bio:', error);
        throw error;
    }
}
async function updateUserInterests(uid, interests) {
    try {
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(userRef, {
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
        const usersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users');
        const usersSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(usersRef);
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
        const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', followerUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(followerRef, {
            following: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(followingUid),
            followingCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        // Update the following's followers list
        const followingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', followingUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(followingRef, {
            followers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayUnion"])(followerUid),
            followersCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(1)
        });
        // Get the follower's profile to use their name for the notification
        const followerDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(followerRef);
        if (followerDoc.exists()) {
            const followerData = followerDoc.data();
            // Create a notification for the user being followed
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$notifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFollowNotification"])(followingUid, `${followerData.firstName} ${followerData.lastName}`, followerUid, followerData.username);
        }
    } catch (error) {
        console.error('Error following user:', error);
        throw error;
    }
}
async function unfollowUser(followerUid, followingUid) {
    try {
        // Update the follower's following list
        const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', followerUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(followerRef, {
            following: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayRemove"])(followingUid),
            followingCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(-1)
        });
        // Update the following's followers list
        const followingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', followingUid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(followingRef, {
            followers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayRemove"])(followerUid),
            followersCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["increment"])(-1)
        });
    } catch (error) {
        console.error('Error unfollowing user:', error);
        throw error;
    }
}
async function isFollowing(followerUid, followingUid) {
    try {
        const followerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', followerUid);
        const followerDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(followerRef);
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
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
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
            const followingUserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', followingId);
            const followingUserDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(followingUserRef);
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
        const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        const userDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
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
            const followerUserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', followerId);
            const followerUserDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(followerUserRef);
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
        const userProfileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', uid);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(userProfileRef);
        console.log(`User profile for UID ${uid} deleted from Firestore.`);
        // 2. Delete user from Firebase Authentication
        // This requires the current user to be the one being deleted.
        // And the user must have signed in recently.
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
        if (currentUser && currentUser.uid === uid) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__deleteUser$3e$__["deleteUser"])(currentUser);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FollowButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-c92d61ad.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/userService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const FollowButton = ({ targetUserId, targetUsername, className = '' })=>{
    _s();
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCurrentUserFollowing, setIsCurrentUserFollowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [actionInProgress, setActionInProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNotificationFeedback, setShowNotificationFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Check if current user is signed in and get their ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowButton.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$c92d61ad$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "FollowButton.useEffect.unsubscribe": async (user)=>{
                    if (user) {
                        setCurrentUserId(user.uid);
                        // Check if current user is following the target user
                        try {
                            const following = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFollowing"])(user.uid, targetUserId);
                            setIsCurrentUserFollowing(following);
                        } catch (error) {
                            console.error('Error checking follow status:', error);
                        } finally{
                            setIsLoading(false);
                        }
                    } else {
                        setCurrentUserId(null);
                        setIsLoading(false);
                    }
                }
            }["FollowButton.useEffect.unsubscribe"]);
            return ({
                "FollowButton.useEffect": ()=>unsubscribe()
            })["FollowButton.useEffect"];
        }
    }["FollowButton.useEffect"], [
        targetUserId
    ]);
    // Hide notification feedback after 3 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowButton.useEffect": ()=>{
            let timer;
            if (showNotificationFeedback) {
                timer = setTimeout({
                    "FollowButton.useEffect": ()=>{
                        setShowNotificationFeedback(false);
                    }
                }["FollowButton.useEffect"], 3000);
            }
            return ({
                "FollowButton.useEffect": ()=>{
                    if (timer) clearTimeout(timer);
                }
            })["FollowButton.useEffect"];
        }
    }["FollowButton.useEffect"], [
        showNotificationFeedback
    ]);
    // Don't show button if viewing own profile
    if (currentUserId === targetUserId) {
        return null;
    }
    const handleFollowAction = async ()=>{
        if (!currentUserId) {
            // Redirect to login if not signed in
            router.push('/login');
            return;
        }
        setActionInProgress(true);
        try {
            if (isCurrentUserFollowing) {
                // Unfollow action
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unfollowUser"])(currentUserId, targetUserId);
                setIsCurrentUserFollowing(false);
            } else {
                // Follow action
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["followUser"])(currentUserId, targetUserId);
                setIsCurrentUserFollowing(true);
                // Show notification feedback
                setShowNotificationFeedback(true);
            }
        } catch (error) {
            console.error('Error with follow/unfollow action:', error);
        } finally{
            setActionInProgress(false);
        }
    };
    // Default button style with optional custom class
    const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-colors";
    const followClasses = `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`;
    const unfollowClasses = `${baseClasses} bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`;
    const buttonClasses = `${isCurrentUserFollowing ? unfollowClasses : followClasses} ${className}`;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: `${baseClasses} bg-gray-200 text-gray-400 cursor-not-allowed ${className}`,
            disabled: true,
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/FollowButton.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleFollowAction,
                disabled: actionInProgress,
                className: buttonClasses,
                "aria-label": isCurrentUserFollowing ? `Unfollow ${targetUsername}` : `Follow ${targetUsername}`,
                children: actionInProgress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FollowButton.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FollowButton.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FollowButton.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        isCurrentUserFollowing ? 'Unfollowing...' : 'Following...'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FollowButton.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: isCurrentUserFollowing ? 'Following' : 'Follow'
                }, void 0, false, {
                    fileName: "[project]/src/components/FollowButton.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FollowButton.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            showNotificationFeedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none opacity-90 whitespace-nowrap z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-800"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FollowButton.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    "Notification sent to ",
                    targetUsername
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FollowButton.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FollowButton.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
};
_s(FollowButton, "1tt1NRgfMF5cUGnF8LdvPT+kHLM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FollowButton;
const __TURBOPACK__default__export__ = FollowButton;
var _c;
__turbopack_context__.k.register(_c, "FollowButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FollowersList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/userService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FollowButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const FollowersList = ({ userId, maxDisplay = 5, username })=>{
    _s();
    const [followers, setFollowers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowersList.useEffect": ()=>{
            const fetchFollowers = {
                "FollowersList.useEffect.fetchFollowers": async ()=>{
                    setIsLoading(true);
                    try {
                        const followersList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFollowers"])(userId, maxDisplay);
                        setFollowers(followersList);
                        if (followersList.length > 0 && 'followersCount' in followersList[0]) {
                            setTotalCount(followersList[0].followersCount || 0);
                        } else {
                            setTotalCount(Math.max(maxDisplay, followersList.length));
                        }
                    } catch (err) {
                        console.error('Error fetching followers:', err);
                        setError('Failed to load followers');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["FollowersList.useEffect.fetchFollowers"];
            fetchFollowers();
        }
    }["FollowersList.useEffect"], [
        userId,
        maxDisplay
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse space-y-3 mt-2",
            children: [
                ...Array(3)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full bg-gray-200 h-10 w-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FollowersList.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FollowersList.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FollowersList.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FollowersList.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/FollowersList.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/FollowersList.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-sm mt-2",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/FollowersList.tsx",
            lineNumber: 60,
            columnNumber: 12
        }, this);
    }
    if (followers.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500 text-sm mt-2",
            children: "No followers yet"
        }, void 0, false, {
            fileName: "[project]/src/components/FollowersList.tsx",
            lineNumber: 64,
            columnNumber: 12
        }, this);
    }
    const displayUsername = username || followers.length > 0 && followers[0].username;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 mt-2",
        children: [
            followers.map((follower)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/user/${follower.username}`,
                            className: "flex items-center group flex-1 min-w-0 mr-2 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium flex-shrink-0",
                                    children: [
                                        follower.firstName.charAt(0),
                                        follower.lastName.charAt(0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FollowersList.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-3 overflow-hidden max-w-[calc(100%-45px)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-gray-900 group-hover:underline truncate",
                                            children: [
                                                follower.firstName,
                                                " ",
                                                follower.lastName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FollowersList.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500 truncate",
                                            children: [
                                                "@",
                                                follower.username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FollowersList.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FollowersList.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FollowersList.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            targetUserId: follower.uid,
                            targetUsername: follower.username,
                            className: "flex-shrink-0 min-w-[70px] text-xs px-2 py-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FollowersList.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, follower.uid, true, {
                    fileName: "[project]/src/components/FollowersList.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)),
            displayUsername && totalCount > maxDisplay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/user/${displayUsername}/followers`,
                className: "block text-blue-600 hover:text-blue-800 text-sm font-medium pt-2 text-center",
                children: [
                    "See all ",
                    totalCount,
                    " followers →"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FollowersList.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FollowersList.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_s(FollowersList, "PzOUwDNEGaqnvnh5U9P99KnJDjo=");
_c = FollowersList;
const __TURBOPACK__default__export__ = FollowersList;
var _c;
__turbopack_context__.k.register(_c, "FollowersList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FollowingList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/userService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FollowButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const FollowingList = ({ userId, maxDisplay = 5, username })=>{
    _s();
    const [following, setFollowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FollowingList.useEffect": ()=>{
            const fetchFollowing = {
                "FollowingList.useEffect.fetchFollowing": async ()=>{
                    setIsLoading(true);
                    try {
                        const followingList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFollowing"])(userId, maxDisplay);
                        setFollowing(followingList);
                        if (followingList.length > 0 && 'followingCount' in followingList[0]) {
                            setTotalCount(followingList[0].followingCount || 0);
                        } else {
                            setTotalCount(Math.max(maxDisplay, followingList.length));
                        }
                    } catch (err) {
                        console.error('Error fetching following:', err);
                        setError('Failed to load following');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["FollowingList.useEffect.fetchFollowing"];
            fetchFollowing();
        }
    }["FollowingList.useEffect"], [
        userId,
        maxDisplay
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse space-y-3 mt-2",
            children: [
                ...Array(3)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full bg-gray-200 h-10 w-10"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FollowingList.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FollowingList.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FollowingList.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FollowingList.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/FollowingList.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/FollowingList.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-sm mt-2",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/FollowingList.tsx",
            lineNumber: 60,
            columnNumber: 12
        }, this);
    }
    if (following.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-500 text-sm mt-2",
            children: "Not following anyone yet"
        }, void 0, false, {
            fileName: "[project]/src/components/FollowingList.tsx",
            lineNumber: 64,
            columnNumber: 12
        }, this);
    }
    const displayUsername = username || following.length > 0 && following[0].username;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 mt-2",
        children: [
            following.map((followedUser)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/user/${followedUser.username}`,
                            className: "flex items-center group flex-1 min-w-0 mr-2 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium flex-shrink-0",
                                    children: [
                                        followedUser.firstName.charAt(0),
                                        followedUser.lastName.charAt(0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FollowingList.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-3 overflow-hidden max-w-[calc(100%-45px)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-gray-900 group-hover:underline truncate",
                                            children: [
                                                followedUser.firstName,
                                                " ",
                                                followedUser.lastName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FollowingList.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500 truncate",
                                            children: [
                                                "@",
                                                followedUser.username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FollowingList.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FollowingList.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FollowingList.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            targetUserId: followedUser.uid,
                            targetUsername: followedUser.username,
                            className: "flex-shrink-0 min-w-[70px] text-xs px-2 py-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FollowingList.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, followedUser.uid, true, {
                    fileName: "[project]/src/components/FollowingList.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)),
            displayUsername && totalCount > maxDisplay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/user/${displayUsername}/following`,
                className: "block text-blue-600 hover:text-blue-800 text-sm font-medium pt-2 text-center",
                children: [
                    "See all ",
                    totalCount,
                    " following →"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FollowingList.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FollowingList.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_s(FollowingList, "cCvKfT2H7ePBWwKQjWyHAaJf1mQ=");
_c = FollowingList;
const __TURBOPACK__default__export__ = FollowingList;
var _c;
__turbopack_context__.k.register(_c, "FollowingList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ProfileClient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProfileClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/clientApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FollowButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowersList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FollowersList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowingList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FollowingList.tsx [app-client] (ecmascript)");
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
// Format date in a consistent way that doesn't depend on user's locale
const formatDate = (date)=>{
    try {
        // Use fixed options for consistent formatting
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'UTC' // Use UTC to avoid timezone differences
        };
        return date.toLocaleDateString('en-US', options);
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid date'; // Fallback
    }
};
// Format longer date for the "Member since" display
const formatMemberSince = (date)=>{
    try {
        const options = {
            year: 'numeric',
            month: 'long',
            timeZone: 'UTC'
        };
        return date.toLocaleDateString('en-US', options);
    } catch (error) {
        console.error('Error formatting member date:', error);
        return 'Unknown date'; // Fallback
    }
};
// Helper function to strip HTML tags
const stripHtmlTags = (html)=>{
    if (typeof document !== 'undefined') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    }
    // Fallback for server-side or environments without document
    return html.replace(/<[^>]*>/g, '');
};
function ProfileClient({ username }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [memberSinceDate, setMemberSinceDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Unknown');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileClient.useEffect": ()=>{
            const fetchUserAndArticles = {
                "ProfileClient.useEffect.fetchUserAndArticles": async ()=>{
                    setIsLoading(true);
                    try {
                        // Find user by username
                        const usersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users');
                        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('username', '==', username));
                        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                        // Handle user not found
                        if (querySnapshot.empty) {
                            setError(`User @${username} not found`);
                            setIsLoading(false);
                            return;
                        }
                        // Get the user data
                        const userData = querySnapshot.docs[0].data();
                        setUser(userData);
                        // Format member since date
                        if (userData.createdAt) {
                            setMemberSinceDate(formatMemberSince(userData.createdAt.toDate()));
                        }
                        // Fetch user's published articles
                        const articlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$clientApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'articles');
                        const articlesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(articlesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('authorId', '==', userData.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'published'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('createdAt', 'desc'));
                        const articlesSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(articlesQuery);
                        const articlesData = articlesSnapshot.docs.map({
                            "ProfileClient.useEffect.fetchUserAndArticles.articlesData": (doc)=>({
                                    id: doc.id,
                                    ...doc.data()
                                })
                        }["ProfileClient.useEffect.fetchUserAndArticles.articlesData"]);
                        setArticles(articlesData);
                    } catch (err) {
                        console.error('Error loading user profile:', err);
                        setError('Failed to load user profile. Please try again later.');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["ProfileClient.useEffect.fetchUserAndArticles"];
            if (username) {
                fetchUserAndArticles();
            }
        }
    }["ProfileClient.useEffect"], [
        username
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading profile..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileClient.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProfileClient.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this);
    }
    if (error || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorAlert,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: error || 'User not found'
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backLink,
                        children: "Back to home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileClient.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ProfileClient.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['three-column-layout'],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['left-sidebar'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['sidebar-header'],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                            children: "Journalite"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProfileClient.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 167,
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
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 171,
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
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['nav-text'],
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileClient.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['center-column'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileAvatar,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarPlaceholder,
                                    children: [
                                        user.firstName.charAt(0),
                                        user.lastName.charAt(0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProfileClient.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileName,
                                                        children: [
                                                            user.firstName,
                                                            " ",
                                                            user.lastName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileUsername,
                                                        children: [
                                                            "@",
                                                            user.username
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProfileClient.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                targetUserId: user.uid,
                                                targetUsername: user.username
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProfileClient.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-6 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/user/${username}/followers`,
                                                className: "text-sm hover:underline focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: user.followersCount || 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Followers"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProfileClient.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/user/${username}/following`,
                                                className: "text-sm hover:underline focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: user.followingCount || 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Following"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProfileClient.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    user.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileBio,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: user.bio
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProfileClient.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeading,
                                children: [
                                    "Articles by ",
                                    user.firstName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            articles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['article-grid'],
                                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/articles?slug=${article.slug}`,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['article-card'],
                                        children: [
                                            article.coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['article-image'],
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: article.coverImage,
                                                    alt: article.title,
                                                    width: 300,
                                                    height: 180,
                                                    style: {
                                                        objectFit: 'cover',
                                                        width: '100%',
                                                        height: '100%'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProfileClient.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProfileClient.tsx",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['article-content'],
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['article-title'],
                                                        children: article.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['article-meta'],
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: formatDate(article.createdAt.toDate())
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProfileClient.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['article-excerpt'],
                                                        children: [
                                                            stripHtmlTags(article.body).substring(0, 150),
                                                            "..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProfileClient.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, article.id, true, {
                                        fileName: "[project]/src/components/ProfileClient.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "No articles published yet."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProfileClient.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileClient.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['right-sidebar'],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['sidebar-heading'],
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarSection,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Member since ",
                                memberSinceDate
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProfileClient.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['sidebar-subheading'],
                                children: "Followers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowersList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                userId: user.uid,
                                maxDisplay: 5,
                                username: username
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['sidebar-subheading'],
                                children: "Following"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FollowingList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                userId: user.uid,
                                maxDisplay: 5,
                                username: username
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileClient.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['write-button'],
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileClient.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileClient.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProfileClient.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(ProfileClient, "bV2mFMOLLCh8gJ4V2HqEOpKeXQM=");
_c = ProfileClient;
var _c;
__turbopack_context__.k.register(_c, "ProfileClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9f4981df._.js.map