import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

/**
 * Shared implementation for generating static params for user routes
 * @param prefix Optional logging prefix for console output
 * @returns Array of username params for static generation
 */
export async function generateUserStaticParams(prefix = 'user') {
    try {
        // Query all users from Firestore to generate static paths
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(usersRef);

        // Map all usernames to params for static generation
        const usernames = querySnapshot.docs.map(doc => ({
            username: doc.data().username
        }));

        console.log(`Generating static paths for ${usernames.length} ${prefix} pages`);

        // Return all usernames to be statically generated
        // Add a fallback to ensure we always have at least one static path
        return usernames.length > 0
            ? usernames
            : [{ username: 'default' }];
    } catch (error) {
        console.error(`Error generating static params for ${prefix}:`, error);
        return [{ username: 'default' }];
    }
} 