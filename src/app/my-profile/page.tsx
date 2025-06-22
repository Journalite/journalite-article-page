'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/firebase/clientApp';
import { doc, getDoc, collection, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import Link from 'next/link';
import Image from 'next/image'; // For profile picture
import styles from '@/styles/home.module.css';

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
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className="py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Back Link - Liquid Glass */}
        <div className="self-start mb-8">
          <Link 
            href="/" 
            className={`${styles['glass-button']} inline-flex items-center gap-2 px-6 py-3 font-medium`}
          >
            ← Go Back to Homepage
          </Link>
        </div>

        {/* Profile Card - Liquid Glass */}
        <div className={`${styles['glass-profile-container']} w-full max-w-4xl mb-10`}>
          <div className={styles['glass-highlight']} />

          {/* Header Section */}
          <div className="relative z-10 p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              {/* Avatar */}
              <div className="relative">
                <div 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-white text-5xl sm:text-6xl font-semibold shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    border: '4px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  {initials || displayName.charAt(0)}
                </div>
                {/* Online indicator */}
                <div 
                  className="absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-white"
                  style={{
                    background: '#10b981',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                  }}
                />
              </div>
              
              {/* Profile Info */}
              <div className="mt-6 sm:mt-0 sm:ml-8 text-center sm:text-left flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-2 font-serif">
                  {displayName}
                </h1>
                {userProfile.username && (
                  <p className="text-blue-600 text-xl mb-2 font-medium">@{userProfile.username}</p>
                )}
                <p className="text-stone-600 text-lg">{userProfile.email}</p>
                
                {/* Join Date */}
                <div className={`${styles['glass-tag']} mt-4 inline-flex items-center gap-2`}>
                  <span className="text-sm font-medium">
                    Joined {firebaseUser.metadata.creationTime ? new Date(firebaseUser.metadata.creationTime).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    }) : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            {userProfile.bio && (
              <div className={`${styles['glass-profile-header']} mt-8 p-6`}>
                <h2 className="text-xl font-bold text-stone-800 mb-3 font-serif">About</h2>
                <p className="text-stone-700 leading-relaxed whitespace-pre-wrap text-lg">
                  {userProfile.bio}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/my-profile/edit" 
                className={`${styles['glass-button']} ${styles['glass-button-primary']} px-8 py-4 text-center font-semibold`}
              >
                Edit Profile
              </Link>
              <Link 
                href={`/user/${userProfile.username}`} 
                className={`${styles['glass-button']} ${styles['glass-button-success']} px-8 py-4 text-center font-semibold`}
              >
                View Public Profile
              </Link>
            </div>
          </div>
        </div>
            
        {/* My Content Section */}
        <div className="w-full max-w-4xl">
          {/* Section Header - Liquid Glass */}
          <div className={`${styles['glass-container']} mb-8 p-6 text-center`}>
            <div className={styles['glass-highlight']} />
            
            <div className={styles['glass-content']}>
              <h2 className="text-3xl font-bold text-stone-800 mb-2 font-serif">My Content</h2>
              <p className="text-stone-600 text-lg">Your published articles and drafts</p>
            </div>
          </div>

          {/* Articles List */}
          {isLoadingArticles ? (
            <div className={styles['glass-loading']}>
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-stone-600 text-lg">Loading your articles...</p>
            </div>
          ) : userArticles.length > 0 ? (
            <div className="space-y-6">
              {userArticles.map(article => (
                <Link 
                  href={article.slug ? `/articles/${article.slug}` : `/articles/${article.id}`} 
                  key={article.id} 
                  className={`${styles['glass-card']} block`}
                >
                  <div className={styles['glass-card-highlight']} />
                  
                  <div className="relative z-10 md:flex">
                    {/* Cover Image */}
                    <div className="md:w-1/3 h-48 md:h-64 relative overflow-hidden">
                      {article.coverImage ? (
                        <Image 
                          src={article.coverImage} 
                          alt={article.title} 
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                      ) : (
                        <div 
                          className="w-full h-full flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.2), rgba(209, 213, 219, 0.2))'
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-stone-800 mb-3 leading-tight font-serif hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <p className="text-stone-500 text-sm">
                            {new Date(article.createdAt.seconds * 1000).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </p>
                          {(article.status === 'draft' || article.status === 'drafts') && (
                            <span className={styles['glass-tag-warning']}>
                              Draft
                            </span>
                          )}
                        </div>
                        
                        <p className="text-stone-600 mb-4 leading-relaxed line-clamp-3">
                          {stripHtmlTags(article.body)}
                        </p>
                      </div>
                      
                      {/* Tags */}
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map(tag => (
                            <span key={tag} className={styles['glass-tag']}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles['glass-empty-state']}>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{
                background: 'rgba(156, 163, 175, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">No Articles Yet</h3>
              <p className="text-stone-600 mb-8 text-lg">You haven't published any articles. Why not share your thoughts?</p>
              <Link 
                href="/create-article" 
                className={`${styles['glass-button']} ${styles['glass-button-success']} inline-flex items-center gap-2 px-8 py-4 font-semibold`}
              >
                Create Your First Article
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 