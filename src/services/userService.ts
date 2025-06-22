import {
    doc,
    setDoc,
    getDoc,
    query,
    collection,
    where,
    getDocs,
    serverTimestamp,
    updateDoc,
    arrayUnion,
    arrayRemove,
    increment,
    limit,
    deleteDoc
} from 'firebase/firestore';
import { updateProfile, deleteUser as deleteFirebaseAuthUser } from 'firebase/auth';
import { auth, db } from '../firebase/clientApp';
import { createFollowNotification } from '../firebase/notifications';

export interface UserProfile {
    uid: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    bio?: string;
    createdAt: any;
    following?: string[];
    followers?: string[];
    followersCount?: number;
    followingCount?: number;
    interests?: string[];
    lastInterestsUpdate?: any; // When user last updated their interests
    needsInterestsUpdate?: boolean; // Flag to prompt for interest updates
    interestsVersion?: number; // Version number to track when interests were last reviewed
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
 * Gets a user's profile from Firestore based on their email
 * @param email User's email address
 * @returns A promise that resolves to the user's profile or null if not found
 */
export async function getUserProfileByEmail(email: string): Promise<UserProfile | null> {
    if (!email) return null;
    try {
        const emailQuery = query(
            collection(db, 'users'),
            where('email', '==', email.toLowerCase()),
            limit(1)
        );
        const querySnapshot = await getDocs(emailQuery);
        if (!querySnapshot.empty) {
            // Should only be one user with a unique email
            return querySnapshot.docs[0].data() as UserProfile;
        }
        return null;
    } catch (error) {
        console.error('Error fetching user profile by email:', error);
        throw error; // Re-throw to be handled by the caller
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
 * Updates a user's selected interests
 * @param uid User's Firebase Auth UID
 * @param interests Array of selected interests
 * @returns A promise that resolves when the interests are updated
 */
export async function updateUserInterests(uid: string, interests: string[]): Promise<void> {
    try {
        const userRef = doc(db, 'users', uid);
        await updateDoc(userRef, {
            interests,
            lastInterestsUpdate: serverTimestamp(),
            needsInterestsUpdate: false,
            interestsVersion: getCurrentInterestsVersion()
        });
        console.log(`Interests updated for user ${uid}:`, interests);
    } catch (error) {
        console.error('Error updating user interests:', error);
        throw error;
    }
}

/**
 * Gets the current interests version - increment this when you want to prompt all users
 * @returns Current interests version number
 */
export function getCurrentInterestsVersion(): number {
    // Increment this number when you want to prompt existing users for interest updates
    // For example: when adding new interest categories, improving recommendation engine, etc.
    return 2; // Updated from 1 to prompt existing users
}

/**
 * Checks if a user needs to update their interests
 * @param userProfile User's profile data
 * @returns Boolean indicating if user should be prompted for interest updates
 */
export function shouldPromptForInterestsUpdate(userProfile: UserProfile): boolean {
    const currentVersion = getCurrentInterestsVersion();

    // Check if user has been flagged for interests update
    if (userProfile.needsInterestsUpdate === true) {
        return true;
    }

    // Check if user's interests version is outdated
    if (!userProfile.interestsVersion || userProfile.interestsVersion < currentVersion) {
        return true;
    }

    // Check if user has no interests set
    if (!userProfile.interests || userProfile.interests.length === 0) {
        return true;
    }

    return false;
}

/**
 * Marks users for interest updates (admin function)
 * @param uid User's Firebase Auth UID (optional - if not provided, marks all users)
 * @returns A promise that resolves when users are marked
 */
export async function markUsersForInterestsUpdate(uid?: string): Promise<void> {
    try {
        if (uid) {
            // Mark specific user
            const userRef = doc(db, 'users', uid);
            await updateDoc(userRef, {
                needsInterestsUpdate: true
            });
        } else {
            // This would mark all users - typically done via backend/admin script
            console.log('To mark all users, use the admin script or increment getCurrentInterestsVersion()');
        }
    } catch (error) {
        console.error('Error marking users for interests update:', error);
        throw error;
    }
}

/**
 * Dismisses the interests update prompt for a user (if they choose to skip)
 * @param uid User's Firebase Auth UID
 * @returns A promise that resolves when the prompt is dismissed
 */
export async function dismissInterestsUpdatePrompt(uid: string): Promise<void> {
    try {
        const userRef = doc(db, 'users', uid);
        await updateDoc(userRef, {
            needsInterestsUpdate: false,
            interestsVersion: getCurrentInterestsVersion()
        });
        console.log(`Interests update prompt dismissed for user ${uid}`);
    } catch (error) {
        console.error('Error dismissing interests update prompt:', error);
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

/**
 * Follows a user
 * @param followerUid UID of the user who wants to follow
 * @param followingUid UID of the user to be followed
 * @returns A promise that resolves when the follow relationship is created
 */
export async function followUser(followerUid: string, followingUid: string): Promise<void> {
    try {
        // Don't allow users to follow themselves
        if (followerUid === followingUid) {
            throw new Error('You cannot follow yourself');
        }

        // Update the follower's following list
        const followerRef = doc(db, 'users', followerUid);
        await updateDoc(followerRef, {
            following: arrayUnion(followingUid),
            followingCount: increment(1)
        });

        // Update the following's followers list
        const followingRef = doc(db, 'users', followingUid);
        await updateDoc(followingRef, {
            followers: arrayUnion(followerUid),
            followersCount: increment(1)
        });

        // Get the follower's profile to use their name for the notification
        const followerDoc = await getDoc(followerRef);
        if (followerDoc.exists()) {
            const followerData = followerDoc.data() as UserProfile;
            // Create a notification for the user being followed
            await createFollowNotification(
                followingUid,
                `${followerData.firstName} ${followerData.lastName}`,
                followerUid,
                followerData.username
            );
        }
    } catch (error) {
        console.error('Error following user:', error);
        throw error;
    }
}

/**
 * Unfollows a user
 * @param followerUid UID of the user who wants to unfollow
 * @param followingUid UID of the user to be unfollowed
 * @returns A promise that resolves when the follow relationship is removed
 */
export async function unfollowUser(followerUid: string, followingUid: string): Promise<void> {
    try {
        // Update the follower's following list
        const followerRef = doc(db, 'users', followerUid);
        await updateDoc(followerRef, {
            following: arrayRemove(followingUid),
            followingCount: increment(-1)
        });

        // Update the following's followers list
        const followingRef = doc(db, 'users', followingUid);
        await updateDoc(followingRef, {
            followers: arrayRemove(followerUid),
            followersCount: increment(-1)
        });
    } catch (error) {
        console.error('Error unfollowing user:', error);
        throw error;
    }
}

/**
 * Checks if a user is following another user
 * @param followerUid UID of the potential follower
 * @param followingUid UID of the user who might be followed
 * @returns Promise resolving to a boolean indicating if follower follows following
 */
export async function isFollowing(followerUid: string, followingUid: string): Promise<boolean> {
    try {
        const followerRef = doc(db, 'users', followerUid);
        const followerDoc = await getDoc(followerRef);

        if (!followerDoc.exists()) {
            return false;
        }

        const userData = followerDoc.data() as UserProfile;
        return userData.following?.includes(followingUid) || false;
    } catch (error) {
        console.error('Error checking follow status:', error);
        throw error;
    }
}

/**
 * Gets a list of users that a user is following
 * @param uid User's Firebase Auth UID
 * @param maxLimit Maximum number of results to return
 * @returns Promise resolving to an array of user profiles
 */
export async function getFollowing(uid: string, maxLimit = 50): Promise<UserProfile[]> {
    try {
        // First get the user to access their following list
        const userRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            return [];
        }

        const userData = userDoc.data() as UserProfile;
        const followingList = userData.following || [];

        if (followingList.length === 0) {
            return [];
        }

        // Fetch each following user's profile
        const followingUsers: UserProfile[] = [];
        const batchLimit = Math.min(followingList.length, maxLimit);

        for (let i = 0; i < batchLimit; i++) {
            const followingId = followingList[i];
            const followingUserRef = doc(db, 'users', followingId);
            const followingUserDoc = await getDoc(followingUserRef);

            if (followingUserDoc.exists()) {
                followingUsers.push(followingUserDoc.data() as UserProfile);
            }
        }

        return followingUsers;
    } catch (error) {
        console.error('Error getting following list:', error);
        throw error;
    }
}

/**
 * Gets a list of users following a user
 * @param uid User's Firebase Auth UID
 * @param maxLimit Maximum number of results to return
 * @returns Promise resolving to an array of user profiles
 */
export async function getFollowers(uid: string, maxLimit = 50): Promise<UserProfile[]> {
    try {
        // First get the user to access their followers list
        const userRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            return [];
        }

        const userData = userDoc.data() as UserProfile;
        const followersList = userData.followers || [];

        if (followersList.length === 0) {
            return [];
        }

        // Fetch each follower's profile
        const followers: UserProfile[] = [];
        const batchLimit = Math.min(followersList.length, maxLimit);

        for (let i = 0; i < batchLimit; i++) {
            const followerId = followersList[i];
            const followerUserRef = doc(db, 'users', followerId);
            const followerUserDoc = await getDoc(followerUserRef);

            if (followerUserDoc.exists()) {
                followers.push(followerUserDoc.data() as UserProfile);
            }
        }

        return followers;
    } catch (error) {
        console.error('Error getting followers list:', error);
        throw error;
    }
}

/**
 * Deletes a user's account from Firebase Authentication and their profile from Firestore.
 * IMPORTANT: Deleting a user from Firebase Auth requires recent sign-in. 
 * If this operation fails due to 'auth/requires-recent-login', 
 * the client-side must handle re-authentication before retrying.
 * @param uid User's Firebase Auth UID
 * @returns A promise that resolves when the account and profile are deleted.
 */
export async function deleteUserAccount(uid: string): Promise<void> {
    try {
        // 1. Delete user profile from Firestore
        const userProfileRef = doc(db, 'users', uid);
        await deleteDoc(userProfileRef);
        console.log(`User profile for UID ${uid} deleted from Firestore.`);

        // 2. Delete user from Firebase Authentication
        // This requires the current user to be the one being deleted.
        // And the user must have signed in recently.
        const currentUser = auth.currentUser;
        if (currentUser && currentUser.uid === uid) {
            await deleteFirebaseAuthUser(currentUser);
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

    } catch (error: any) {
        console.error('Error deleting user account:', error);
        // Specific check for re-authentication requirement
        if (error.code === 'auth/requires-recent-login') {
            throw new Error('This operation is sensitive and requires recent authentication. Please sign out and sign back in, then try again.');
        }
        throw new Error('Failed to delete user account. ' + error.message);
    }
} 