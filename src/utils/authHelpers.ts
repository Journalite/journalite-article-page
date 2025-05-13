import { Auth, onAuthStateChanged, User, Unsubscribe } from 'firebase/auth';

/**
 * Helper function to safely handle Firebase auth state changes
 * with proper type checking to avoid "possibly undefined" errors
 * 
 * @param auth The Firebase Auth instance which might be undefined during build
 * @param callback Callback to handle the auth state change
 * @returns An unsubscribe function or empty function if auth is undefined
 */
export function safeAuthStateChange(
    auth: Auth | undefined,
    callback: (user: User | null) => void
): Unsubscribe | (() => void) {
    if (!auth) {
        return () => { }; // Return an empty function if auth is undefined
    }

    return onAuthStateChanged(auth, callback);
} 