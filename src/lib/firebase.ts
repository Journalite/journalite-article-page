import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

// Firebase configuration from environment variables
// This is a placeholder config for the emulator only - not real credentials
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'fake-api-key-for-emulator-only',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'localhost',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'journalite-demo',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'journalite-demo.appspot.com',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '123456789012',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:123456789012:web:abcdef1234567890'
};

// Initialize Firebase
import { getApps } from 'firebase/app';

let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

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

export { auth, db }; 