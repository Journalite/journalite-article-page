// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
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

// Initialize Firebase with duplicate app check
let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Analytics only in browser environment
let analytics;
if (typeof window !== 'undefined') {
    try {
        analytics = getAnalytics(app);
    } catch (error) {
        // Analytics initialization skipped in development
    }
}

// Initialize Firebase Authentication
const auth = getAuth(app);

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

// Connect to Auth Emulator in development
if (process.env.NODE_ENV === 'development') {
    try {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    } catch (error) {
        // Auth emulator already connected, ignore error
        console.log('Auth emulator already connected or error connecting:', (error as Error).message);
    }

    try {
        connectFirestoreEmulator(db, 'localhost', 8080);
    } catch (error) {
        // Firestore emulator already connected, ignore error
        console.log('Firestore emulator already connected or error connecting:', (error as Error).message);
    }
}

/////

export { app, analytics, auth, db };