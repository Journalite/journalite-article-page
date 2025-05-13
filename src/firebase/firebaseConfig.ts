// Firebase configuration with fallback values for static build
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'dummy-key-for-static-build',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'example.firebaseapp.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'example',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'example.appspot.com',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '000000000000',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:000000000000:web:0000000000000000000000',
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-0000000000'
}; 