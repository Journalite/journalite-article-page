// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration from environment variables
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate Firebase configuration
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('❌ Firebase configuration is missing required fields');
    throw new Error('Firebase configuration incomplete');
}

// Initialize Firebase with duplicate app check
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    console.log('🔥 Firebase app initialized with project:', firebaseConfig.projectId);
} else {
    app = getApps()[0];
    console.log('🔥 Using existing Firebase app');
}

// Initialize Analytics only in browser environment
let analytics;
if (typeof window !== 'undefined') {
    try {
        analytics = getAnalytics(app);
    } catch (error) {
        console.log('Analytics initialization skipped:', (error as Error).message);
    }
}

// Initialize Firebase Authentication
const auth = getAuth(app);

// Set persistence to session-only to prevent issues with idle timeouts
if (typeof window !== 'undefined') {
    setPersistence(auth, browserSessionPersistence).catch((error) => {
        console.error('Failed to set auth persistence:', error);
    });
}

// Initialize Firestore
const db = getFirestore(app);

// Configure custom auth actions URL
if (typeof window !== 'undefined') {
    const actionCodeSettings = {
        url: `${window.location.origin}/reset-password`,
        handleCodeInApp: true,
    };

    // We need to update this in the forgot-password component when sending the reset email
}

// PRODUCTION FIREBASE ONLY - NO EMULATORS
console.log('🔥 Using production Firebase services');
console.log('📍 Auth Domain:', firebaseConfig.authDomain);
console.log('📍 Project ID:', firebaseConfig.projectId);

/////

export { app, analytics, auth, db };