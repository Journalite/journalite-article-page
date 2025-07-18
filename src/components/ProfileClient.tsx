'use client';

import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@/firebase/clientApp';
import Image from 'next/image';
import Link from 'next/link';
import LeftSidebar from './LeftSidebar';
import FollowButton from './FollowButton';
import FollowersList from './FollowersList';
import FollowingList from './FollowingList';
import TopLeftLogo from './TopLeftLogo';
import styles from '@/styles/home.module.css';
import { getUserGradient, getInitials } from '@/utils/avatarUtils';

// Create an interface to represent articles from Firestore
interface ArticleData {
  id: string;
  title: string;
  body: string;
  slug: string;
  authorId: string;
  authorName: string;
  coverImage?: string;
  tags: string[];
  status: 'published' | 'drafts';
  createdAt: Timestamp;
}

interface UserProfile {
  uid: string;
  firstName: string;
  lastName: string;
  username: string;
  bio?: string;
  followersCount?: number;
  followingCount?: number;
  createdAt?: Timestamp;
}

// Format date in a consistent way that doesn't depend on user's locale
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

// Format longer date for the "Member since" display
const formatMemberSince = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long'
  }).format(date);
};

// Helper function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

interface ProfileClientProps {
  username: string;
}

// The user profile page client component
export default function ProfileClient({ username }: ProfileClientProps) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [memberSinceDate, setMemberSinceDate] = useState<string>('Unknown');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Check authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsAuthenticated(!!currentUser);
    });
    
    return () => unsubscribe();
  }, []);

  // Set window width for responsive design
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    const fetchUserAndArticles = async () => {
      setIsLoading(true);
      try {
        // Find user by username
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('username', '==', username));
        const querySnapshot = await getDocs(q);
        
        // Handle user not found
        if (querySnapshot.empty) {
          setError(`User @${username} not found`);
          setIsLoading(false);
          return;
        }
        
        // Get the user data
        const userData = querySnapshot.docs[0].data() as UserProfile;
        setUser(userData);
        
        // Format member since date
        if (userData.createdAt) {
          setMemberSinceDate(formatMemberSince(userData.createdAt.toDate()));
        }
        
        // Fetch user's published articles
        const articlesRef = collection(db, 'articles');
        const articlesQuery = query(
          articlesRef, 
          where('authorId', '==', userData.uid),
          where('status', '==', 'published'),
          orderBy('createdAt', 'desc')
        );
        
        const articlesSnapshot = await getDocs(articlesQuery);
        const articlesData = articlesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ArticleData[];
        
        setArticles(articlesData);
      } catch (err) {
        console.error('Error loading user profile:', err);
        setError('Failed to load user profile. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchUserAndArticles();
    }
  }, [username]);

  if (isLoading) {
    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <div className={styles['glass-loading']}>
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-stone-600 text-lg">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen" style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <div className="py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
          <div className={styles['glass-empty-state']}>
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-4 font-serif">User Not Found</h2>
            <p className="text-stone-600 mb-8 text-lg">{error || 'The user you\'re looking for doesn\'t exist.'}</p>
            <Link 
              href="/" 
              className={`${styles['glass-button']} ${styles['glass-button-primary']} inline-flex items-center gap-2 px-8 py-4 font-semibold`}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <div className={styles['three-column-layout']}>
        {/* Background overlay for mobile */}
        {windowWidth < 768 && !isSidebarCollapsed && (
          <div className={`${styles['menu-overlay']} ${styles['active']}`} onClick={toggleSidebar}></div>
        )}

        {/* TOP LEFT LOGO */}
        <TopLeftLogo />

        {/* LEFT SIDEBAR - Fixed authentication */}
        <LeftSidebar 
          isAuthenticated={isAuthenticated}
          handleLogout={handleSignOut}
          toggleSidebar={toggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        {/* Mobile sidebar toggle button */}
        {windowWidth < 768 && (
          <button 
            className={styles['toggle-button']} 
            onClick={toggleSidebar}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? "☰" : "✕"}
          </button>
        )}
        
        {/* CENTER COLUMN - User profile and articles */}
        <main className={styles['center-column']}>
          {/* Back Link - Liquid Glass */}
          <div className="mb-8">
            <Link 
              href="/" 
              className={`${styles['glass-button']} inline-flex items-center gap-2 px-6 py-3 font-medium`}
            >
              ← Back to Home
            </Link>
          </div>

          {/* Profile Card - Liquid Glass */}
          <div className={`${styles['glass-profile-container']} w-full mb-10`}>
            <div className={styles['glass-highlight']} />

            {/* Header Section */}
            <div className="relative z-10 p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                {/* Avatar */}
                <div className="relative">
                  <div 
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-white text-5xl sm:text-6xl font-semibold shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${getUserGradient(user.uid, user.username)})`,
                      border: '4px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {getInitials(user.firstName, user.lastName)}
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="mt-6 sm:mt-0 sm:ml-8 text-center sm:text-left flex-1">
                  <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-2 font-serif">
                    {user.firstName} {user.lastName}
                  </h1>
                  <p className="text-blue-600 text-xl mb-2 font-medium">@{user.username}</p>
                  
                  {/* Follower and following counts */}
                  <div className="flex justify-center sm:justify-start space-x-6 mt-3 mb-4">
                    <Link 
                      href={`/user/${username}/followers`}
                      className={`${styles['glass-tag']} text-sm hover:underline focus:outline-none`}
                    >
                      <span className="font-semibold">{user.followersCount || 0}</span> Followers
                    </Link>
                    <Link 
                      href={`/user/${username}/following`}
                      className={`${styles['glass-tag']} text-sm hover:underline focus:outline-none`}
                    >
                      <span className="font-semibold">{user.followingCount || 0}</span> Following
                    </Link>
                  </div>

                  {/* Member Since */}
                  <div className={`${styles['glass-tag']} mt-4 inline-flex items-center gap-2`}>
                    <span className="text-sm font-medium">
                      Member since {memberSinceDate}
                    </span>
                  </div>
                </div>

                {/* Follow Button */}
                <div className="mt-6 sm:mt-0">
                  <FollowButton targetUserId={user.uid} targetUsername={user.username} />
                </div>
              </div>

              {/* Bio Section */}
              {user.bio && (
                <div className={`${styles['glass-profile-header']} mt-8 p-6`}>
                  <h2 className="text-xl font-bold text-stone-800 mb-3 font-serif">About</h2>
                  <p className="text-stone-700 leading-relaxed whitespace-pre-wrap text-lg">
                    {user.bio}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Articles Section */}
          <div className={`${styles['glass-container']} mb-8 p-6 text-center`}>
            <div className={styles['glass-highlight']} />
            
            <div className={styles['glass-content']}>
              <h2 className="text-3xl font-bold text-stone-800 mb-2 font-serif">Articles by {user.firstName}</h2>
              <p className="text-stone-600 text-lg">{articles.length} published {articles.length === 1 ? 'article' : 'articles'}</p>
            </div>
          </div>
          
          {articles.length > 0 ? (
            <div className="space-y-6">
              {articles.map((article) => (
                <Link 
                  href={`/articles/${article.slug}`} 
                  key={article.id}
                  className={`${styles['glass-card']} block`}
                >
                  <div className={styles['glass-card-highlight']} />
                  
                  <div className="relative z-10 md:flex">
                    {/* Cover Image */}
                    <div className="md:w-1/3 h-48 md:h-64 relative overflow-hidden">
                      <Image 
                        src={article.coverImage || '/images/oriteria-article-cover.svg'} 
                        alt={article.title} 
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-stone-800 mb-3 leading-tight font-serif hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-stone-500 text-sm mb-4">
                          {formatDate(article.createdAt.toDate())}
                        </p>
                        
                        <p className="text-stone-600 mb-4 leading-relaxed line-clamp-3">
                          {stripHtmlTags(article.body).substring(0, 200)}...
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
              <p className="text-stone-600 text-lg">{user.firstName} hasn't published any articles yet.</p>
            </div>
          )}
        </main>
        
        {/* RIGHT SIDEBAR */}
        <aside className={styles['right-sidebar']}>
          {/* About Section - Liquid Glass */}
          <div className={`${styles['glass-container']} mb-6 p-6`}>
            <div className={styles['glass-highlight']} />
            
            <div className={styles['glass-content']}>
              <h2 className="text-xl font-bold text-stone-800 mb-4 font-serif">About</h2>
              <p className="text-stone-600">Member since {memberSinceDate}</p>
            </div>
          </div>
          
          {/* Followers section - Liquid Glass */}
          <div className={`${styles['glass-container']} mb-6 p-6`}>
            <div className={styles['glass-highlight']} />
            
            <div className={styles['glass-content']}>
              <h3 className="text-lg font-bold text-stone-800 mb-4 font-serif">Followers</h3>
              <FollowersList userId={user.uid} maxDisplay={5} username={username} />
            </div>
          </div>
          
          {/* Following section - Liquid Glass */}
          <div className={`${styles['glass-container']} mb-6 p-6`}>
            <div className={styles['glass-highlight']} />
            
            <div className={styles['glass-content']}>
              <h3 className="text-lg font-bold text-stone-800 mb-4 font-serif">Following</h3>
              <FollowingList userId={user.uid} maxDisplay={5} username={username} />
            </div>
          </div>
          
          <Link 
            href="/" 
            className={`${styles['glass-button']} ${styles['glass-button-primary']} block w-full px-6 py-4 text-center font-semibold`}
          >
            Home
          </Link>
        </aside>
      </div>
    </div>
  );
} 