import Link from 'next/link'
import { collection, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '@/firebase/clientApp'
import { UserProfile } from '@/services/userService'
import styles from '@/styles/home.module.css'
import { Metadata, Viewport } from 'next'
import Image from 'next/image'
import { DynamicPageProps } from '@/types/next'

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

// Export metadata for better SEO
export const metadata: Metadata = {
  title: 'User Profile | Journalite',
  description: 'View user profile and articles',
}

// Export viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// This generates the static paths for pre-rendering
// We provide at least some placeholder values for static generation
export async function generateStaticParams() {
  try {
    // For actual implementation, we could query the database for usernames
    // const usersRef = collection(db, 'users');
    // const querySnapshot = await getDocs(usersRef);
    // const usernames = querySnapshot.docs.map(doc => ({
    //   username: doc.data().username
    // }));
    // return usernames;
    
    // For simplicity and to avoid too many builds, return placeholder usernames
    // You can replace these with actual common usernames or leave empty for ISR
    return [
      { username: 'default' },
      { username: 'admin' }
    ];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [{ username: 'default' }];
  }
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

// The user profile page component
export default async function Page({ params }: DynamicPageProps<'username'>) {
  // Await params to fix the Next.js warning
  const paramsData = await Promise.resolve(params);
  const username = paramsData.username;
  
  try {
    // Find user by username
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    
    // Handle user not found
    if (querySnapshot.empty) {
      return (
        <div className={styles.container}>
          <div className={styles.errorAlert}>
            <p>User @{username} not found</p>
            <Link href="/" className={styles.backLink}>
              Back to home
            </Link>
          </div>
        </div>
      );
    }
    
    // Get the user data
    const user = querySnapshot.docs[0].data() as UserProfile;
    
    // Fetch user's published articles
    const articlesRef = collection(db, 'articles');
    const articlesQuery = query(
      articlesRef, 
      where('authorId', '==', user.uid),
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc')
    );
    
    const articlesSnapshot = await getDocs(articlesQuery);
    const articles = articlesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ArticleData[];
    
    // Pre-format dates to ensure consistency between server and client
    const memberSinceDate = user.createdAt ? formatMemberSince(user.createdAt.toDate()) : 'Unknown';
    
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
              <h1 className={styles.profileName}>{user.firstName} {user.lastName}</h1>
              <p className={styles.profileUsername}>@{user.username}</p>
              
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
                        {article.body.substring(0, 150)}...
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
          
          <Link href="/" className={styles['write-button']}>
            Home
          </Link>
        </aside>
      </div>
    );
  } catch (error) {
    console.error('Error loading user profile:', error);
    return (
      <div className={styles.container}>
        <div className={styles.errorAlert}>
          <p>Failed to load user profile. Please try again later.</p>
          <Link href="/" className={styles.backLink}>
            Back to home
          </Link>
        </div>
      </div>
    );
  }
} 