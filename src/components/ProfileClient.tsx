'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import { UserProfile } from '@/services/userService';
import styles from '@/styles/home.module.css';
import Image from 'next/image';
import FollowButton from '@/components/FollowButton';
import FollowersList from '@/components/FollowersList';
import FollowingList from '@/components/FollowingList';

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

// Format date in a consistent way that doesn't depend on user's locale
const formatDate = (date: Date): string => {
  try {
    // Use fixed options for consistent formatting
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      timeZone: 'UTC' // Use UTC to avoid timezone differences
    };
    
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date'; // Fallback
  }
};

// Format longer date for the "Member since" display
const formatMemberSince = (date: Date): string => {
  try {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long',
      timeZone: 'UTC'
    };
    
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    console.error('Error formatting member date:', error);
    return 'Unknown date'; // Fallback
  }
};

// Helper function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  if (typeof document !== 'undefined') {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  }
  // Fallback for server-side or environments without document
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
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className={styles.container}>
        <div className={styles.errorAlert}>
          <p>{error || 'User not found'}</p>
          <Link href="/" className={styles.backLink}>
            Back to home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles['three-column-layout']}>
      {/* LEFT SIDEBAR - Same as other pages */}
      <aside className={styles['left-sidebar']}>
        <div className={styles['sidebar-header']}>
          <div className={styles.logo}>Journalite</div>
        </div>
        <nav className={styles['vertical-nav']}>
          <Link href="/" className={`${styles['nav-link']} ${styles['nav-home']}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Home</span>
          </Link>
          <Link href="/explore" className={`${styles['nav-link']} ${styles['nav-explore']}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Explore</span>
          </Link>
        </nav>
      </aside>
      
      {/* CENTER COLUMN - User profile and articles */}
      <main className={styles['center-column']}>
        <div className={styles.profileHeader}>
          <div className={styles.profileAvatar}>
            {/* Placeholder avatar - first letter of first and last name */}
            <div className={styles.avatarPlaceholder}>
              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
            </div>
          </div>
          
          <div className={styles.profileInfo}>
            <div className="flex justify-between items-start w-full">
              <div>
                <h1 className={styles.profileName}>{user.firstName} {user.lastName}</h1>
                <p className={styles.profileUsername}>@{user.username}</p>
              </div>
              <FollowButton targetUserId={user.uid} targetUsername={user.username} />
            </div>
            
            {/* Follower and following counts */}
            <div className="flex space-x-6 mt-3">
              <Link 
                href={`/user/${username}/followers`}
                className="text-sm hover:underline focus:outline-none"
              >
                <span className="font-semibold">{user.followersCount || 0}</span> Followers
              </Link>
              <Link 
                href={`/user/${username}/following`}
                className="text-sm hover:underline focus:outline-none"
              >
                <span className="font-semibold">{user.followingCount || 0}</span> Following
              </Link>
            </div>
            
            {user.bio && (
              <div className={styles.profileBio}>
                <p>{user.bio}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className={styles.profileContent}>
          <h2 className={styles.sectionHeading}>Articles by {user.firstName}</h2>
          
          {articles.length > 0 ? (
            <div className={styles['article-grid']}>
              {articles.map((article) => (
                <Link 
                  href={`/articles?slug=${article.slug}`} 
                  key={article.id}
                  className={styles['article-card']}
                >
                  {article.coverImage && (
                    <div className={styles['article-image']}>
                      {/* Replace img with Next.js Image component */}
                      <Image 
                        src={article.coverImage} 
                        alt={article.title}
                        width={300}
                        height={180}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                  )}
                  <div className={styles['article-content']}>
                    <h3 className={styles['article-title']}>{article.title}</h3>
                    <div className={styles['article-meta']}>
                      <span>
                        {formatDate(article.createdAt.toDate())}
                      </span>
                    </div>
                    <p className={styles['article-excerpt']}>
                      {stripHtmlTags(article.body).substring(0, 150)}...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>No articles published yet.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>About</h2>
        <div className={styles.sidebarSection}>
          <p>Member since {memberSinceDate}</p>
        </div>
        
        {/* Followers section */}
        <div className={styles.sidebarSection}>
          <h3 className={styles['sidebar-subheading']}>Followers</h3>
          <FollowersList userId={user.uid} maxDisplay={5} username={username} />
        </div>
        
        {/* Following section */}
        <div className={styles.sidebarSection}>
          <h3 className={styles['sidebar-subheading']}>Following</h3>
          <FollowingList userId={user.uid} maxDisplay={5} username={username} />
        </div>
        
        <Link href="/" className={styles['write-button']}>
          Home
        </Link>
      </aside>
    </div>
  );
} 