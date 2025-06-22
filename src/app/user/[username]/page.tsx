import ProfileClient from '@/components/ProfileClient';
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/clientApp'

// Fetch all usernames from Firestore for static generation
export async function generateStaticParams() {
  try {
    // Fetch all users to get their usernames
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    
    // Convert to array of param objects
    const params = querySnapshot.docs.map((doc) => {
      const userData = doc.data();
      return {
        username: userData.username || doc.id // fallback to document ID if no username
      };
    }).filter(param => param.username); // filter out any undefined usernames
    
    console.log('Generated static params for user profiles:', params.length);
    return params;
  } catch (error) {
    console.error('Error generating static params for user profiles:', error);
    // Return empty array as fallback - this will prevent build errors
    // but may result in 404s for users that exist but weren't generated
    return [];
  }
}

// Server component
export default async function UserProfilePage({ params }: { params: { username: string } }) {
  // Await params as required by Next.js 15
  const resolvedParams = await params;
  return <ProfileClient username={resolvedParams.username} />;
} 