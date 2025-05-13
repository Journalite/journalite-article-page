// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { firebaseConfig } from './firebaseConfig';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase only when in the browser and not during static generation
let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;

// Only initialize Firebase on the client side
if (typeof window !== 'undefined') {
    // Check if Firebase apps have already been initialized
    if (!getApps().length) {
        app = initializeApp(firebaseConfig);
        try {
            analytics = getAnalytics(app);
        } catch (error) {
            // Analytics initialization skipped in development
            console.log('Analytics initialization error:', error);
        }
        auth = getAuth(app);
        db = getFirestore(app);
    } else {
        app = getApps()[0];
        auth = getAuth(app);
        db = getFirestore(app);
    }
}

// // Connect to Auth Emulator in development
// if (process.env.NODE_ENV === 'development') {
//     // connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
// }
////////

export { app, analytics, auth, db };