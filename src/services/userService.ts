import {
    doc,
    setDoc,
    getDoc,
    query,
    collection,
    where,
    getDocs,
    serverTimestamp,
    updateDoc
} from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase/clientApp';

export interface UserProfile {
    uid: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    bio?: string;
    createdAt: any;
}

/**
 * Checks if a username is already taken
 * @param username The username to check
 * @returns A promise that resolves to a boolean indicating if the username is taken
 */
export async function isUsernameTaken(username: string): Promise<boolean> {
    try {
        const usernameQuery = query(
            collection(db, 'users'),
            where('username', '==', username.toLowerCase())
        );

        const querySnapshot = await getDocs(usernameQuery);
        return !querySnapshot.empty;
    } catch (error) {
        console.error('Error checking username:', error);
        throw error;
    }
}

/**
 * Creates a user profile in Firestore
 * @param uid User's Firebase Auth UID
 * @param profile User profile data
 */
export async function createUserProfile(uid: string, profile: Omit<UserProfile, 'uid' | 'createdAt'>): Promise<void> {
    try {
        // First check if this user ID already has a profile
        const existingUserProfile = await getUserProfile(uid);
        if (existingUserProfile) {
            console.log('User profile already exists, updating instead of creating');

            // Update existing profile
            const userRef = doc(db, 'users', uid);
            await updateDoc(userRef, {
                firstName: profile.firstName,
                lastName: profile.lastName,
                username: profile.username.toLowerCase(),
                email: profile.email.toLowerCase(),
                bio: profile.bio || existingUserProfile.bio || ''
            });

            // Update the user's display name in Firebase Auth
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, {
                    displayName: profile.username
                });
            }

            return;
        }

        // Check if email already exists in another profile
        const emailQuery = query(
            collection(db, 'users'),
            where('email', '==', profile.email.toLowerCase())
        );

        const emailQuerySnapshot = await getDocs(emailQuery);
        if (!emailQuerySnapshot.empty) {
            throw new Error('Email is already associated with another account');
        }

        // Check if the username is already taken
        const usernameTaken = await isUsernameTaken(profile.username);
        if (usernameTaken) {
            throw new Error('Username is already taken');
        }

        const userRef = doc(db, 'users', uid);

        // Create the user profile
        await setDoc(userRef, {
            uid,
            firstName: profile.firstName,
            lastName: profile.lastName,
            username: profile.username.toLowerCase(),
            email: profile.email.toLowerCase(),
            bio: profile.bio || '',
            createdAt: serverTimestamp()
        });

        // Update the user's display name in Firebase Auth
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, {
                displayName: profile.username
            });
        }
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
}

/**
 * Gets a user's profile from Firestore
 * @param uid User's Firebase Auth UID
 * @returns A promise that resolves to the user's profile or null if not found
 */
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
    try {
        const userRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
            return userDoc.data() as UserProfile;
        }

        return null;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
}

/**
 * Updates a user's bio
 * @param uid User's Firebase Auth UID
 * @param bio User's new bio
 * @returns A promise that resolves when the bio is updated
 */
export async function updateUserBio(uid: string, bio: string): Promise<void> {
    try {
        const userRef = doc(db, 'users', uid);
        await updateDoc(userRef, {
            bio
        });
    } catch (error) {
        console.error('Error updating user bio:', error);
        throw error;
    }
}

/**
 * Search for users by username or name
 * @param searchTerm The search term to find users
 * @returns Array of matching users
 */
export async function searchUsers(searchTerm: string): Promise<UserProfile[]> {
    try {
        if (!searchTerm || searchTerm.trim().length < 2) {
            return [];
        }

        const searchTermLower = searchTerm.toLowerCase().trim();

        // Create a query to find users whose username contains the search term
        const usersRef = collection(db, 'users');
        const usersSnapshot = await getDocs(usersRef);

        // Filter users locally since Firestore doesn't support contains or regexp queries directly
        const matchingUsers = usersSnapshot.docs
            .map(doc => {
                // Get all data from the document and ensure it has the correct UserProfile shape
                const userData = doc.data() as UserProfile;
                return userData;
            })
            .filter(user => {
                const usernameLower = user.username.toLowerCase();
                const firstNameLower = user.firstName.toLowerCase();
                const lastNameLower = user.lastName.toLowerCase();
                const fullNameLower = `${firstNameLower} ${lastNameLower}`;

                return usernameLower.includes(searchTermLower) ||
                    firstNameLower.includes(searchTermLower) ||
                    lastNameLower.includes(searchTermLower) ||
                    fullNameLower.includes(searchTermLower);
            });

        return matchingUsers;
    } catch (error) {
        console.error('Error searching users:', error);
        return [];
    }
} 