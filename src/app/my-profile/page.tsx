'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/firebase/clientApp';
import { doc, getDoc, collection, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import Link from 'next/link';
import Image from 'next/image'; // For profile picture

interface UserProfile {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  bio?: string;
  photoURL?: string; // Assuming you might store a photoURL
  createdAt?: any; // Or a more specific date type
}

// Updated Article interface based on src/firebase/articles.ts
interface Article {
  id: string;
  title: string;
  body: string; 
  coverImage?: string | null;
  createdAt: Timestamp;
  slug?: string; // For linking
  tags?: string[];
  status: 'published' | 'draft' | 'drafts'; // Allow 'drafts' as seen in firebase/articles.ts
}

// Function to strip HTML tags for preview text
const stripHtmlTags = (html: string): string => {
  if (!html) return '';
  return html.replace(/<\/?[^>]+(>|$)/g, '');
};

export default function MyProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [userArticles, setUserArticles] = useState<Article[]>([]); // State for user articles
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true); // State for loading articles
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setFirebaseUser(user);
        try {
          // Fetch user profile
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data() as UserProfile;
            setUserProfile({
              ...userData,
              email: user.email || userData.email, // Prioritize auth email
              photoURL: user.photoURL || userData.photoURL, // Prioritize auth photoURL
            });
          } else {
            // Fallback if Firestore doc doesn't exist but user is authenticated
            setUserProfile({
              firstName: user.displayName?.split(' ')[0] || '',
              lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
              username: user.displayName || user.email?.split('@')[0] || 'User',
              email: user.email || '',
              photoURL: user.photoURL || '',
            });
          }

          // Fetch user articles
          setIsLoadingArticles(true);
          const articlesRef = collection(db, 'articles');
          const q = query(
            articlesRef,
            where('authorId', '==', user.uid),
            orderBy('createdAt', 'desc')
          );
          const querySnapshot = await getDocs(q);
          const articlesData = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              title: data.title || 'Untitled Article',
              body: data.body || '',
              coverImage: data.coverImage || null,
              createdAt: data.createdAt, // Assuming createdAt is always a Timestamp
              slug: data.slug, 
              tags: data.tags || [],
              status: data.status || 'published',
            } as Article;
          });
          setUserArticles(articlesData);

        } catch (error) {
          console.error("Error fetching user data or articles:", error);
        } finally {
          setIsLoading(false);
          setIsLoadingArticles(false);
        }
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-100 to-amber-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-600"></div>
        <p className="ml-4 text-stone-700 text-lg">Loading Profile...</p>
      </div>
    );
  }

  if (!userProfile || !firebaseUser) {
    // This case should ideally be handled by the redirect in onAuthStateChanged
    // or by a global auth guard.
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 p-6">
        <p className="text-stone-700 text-lg mb-4">Could not load profile information.</p>
        <Link href="/login" className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
          Go to Login
        </Link>
      </div>
    );
  }

  const displayName = userProfile.firstName && userProfile.lastName 
    ? `${userProfile.firstName} ${userProfile.lastName}` 
    : userProfile.firstName || userProfile.lastName || firebaseUser.displayName || 'User';

  const initials = (userProfile.firstName?.charAt(0) || '') + (userProfile.lastName?.charAt(0) || '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-amber-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Link href="/" className="self-start mb-4 text-amber-600 hover:text-amber-800 transition-colors">
        &larr; Go Back to Homepage
      </Link>
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl overflow-hidden mt-10 relative">
        <div className="bg-stone-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            {/* Always show initials avatar for now */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-semibold border-4 border-amber-300 shadow-md">
              {initials || displayName.charAt(0)}
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{displayName}</h1>
              {userProfile.username && (
                <p className="text-amber-300 text-lg mt-1">@{userProfile.username}</p>
              )}
              <p className="text-stone-300 text-sm mt-1">{userProfile.email}</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {userProfile.bio && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-stone-700 mb-2">Bio</h2>
              <p className="text-stone-600 whitespace-pre-wrap">{userProfile.bio}</p>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-stone-700 mb-2">Account Details</h2>
            <ul className="space-y-2 text-stone-600">
              <li>
                <strong>Joined:</strong> {firebaseUser.metadata.creationTime ? new Date(firebaseUser.metadata.creationTime).toLocaleDateString() : 'N/A'}
              </li>
              {/* Add more details as needed, e.g., number of articles, followers, etc. */}
            </ul>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-end items-center gap-4">
            <Link href="/my-profile/edit" className="w-full sm:w-auto px-6 py-3 bg-amber-600 text-white text-center font-medium rounded-lg hover:bg-amber-700 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg">
              Edit Profile
            </Link>
             <Link href={`/user/${userProfile.username}`} className="w-full sm:w-auto px-6 py-3 bg-stone-600 text-white text-center font-medium rounded-lg hover:bg-stone-700 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg">
              View Public Profile
            </Link>
          </div>
        </div>
      </div>
      
      {/* Placeholder for user's articles or other content */}
      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold text-stone-800 mb-6 text-center">My Content</h2>
        {isLoadingArticles ? (
          <div className="bg-white shadow-lg rounded-lg p-6 text-center text-stone-500">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-600 mx-auto mb-4"></div>
            <p>Loading your articles...</p>
          </div>
        ) : userArticles.length > 0 ? (
          <div className="space-y-8">
            {userArticles.map(article => (
              <Link 
                href={article.slug ? `/articles?slug=${article.slug}` : `/articles?slug=${article.id}`} 
                key={article.id} 
                className="block bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out group"
              >
                <div className="md:flex">
                  {/* Cover Image */}
                  <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                    {article.coverImage ? (
                      <Image 
                        src={article.coverImage} 
                        alt={article.title} 
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors duration-200 mb-2 leading-tight">{article.title}</h3>
                      <p className="text-sm text-stone-500 mb-3">
                        {new Date(article.createdAt.seconds * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        {(article.status === 'draft' || article.status === 'drafts') && 
                          <span className="ml-3 px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">Draft</span>}
                      </p>
                      <p className="text-stone-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {stripHtmlTags(article.body)}
                      </p>
                    </div>
                    <div>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-1">
                          {article.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-medium rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center text-stone-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-stone-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-stone-700 mb-2">No Articles Yet</h3>
            <p className="mb-6">You haven\'t published any articles. Why not share your thoughts?</p>
            <Link href="/create-article" className="mt-4 inline-block px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
              Create New Article
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 