'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/home.module.css'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import NotificationBell from '@/components/NotificationBell'
import LeftSidebar from '@/components/LeftSidebar'

// Import Firebase service
import { getArticlesByTag, Article as FirestoreArticle } from '@/firebase/articles'

// Types for props
interface TagPageClientProps {
  tag: string;
}

// Adapter function to convert Firestore article to UI format
const adaptFirestoreArticle = (firestoreArticle: FirestoreArticle): any => {
  return {
    _id: firestoreArticle.id || '',
    title: firestoreArticle.title,
    slug: firestoreArticle.slug || '',
    authorId: firestoreArticle.authorId,
    authorName: firestoreArticle.authorName || 'Unknown Author',
    coverImageUrl: firestoreArticle.coverImage,
    tags: firestoreArticle.tags,
    content: [
      {
        paragraphId: 'p1',
        text: firestoreArticle.body,
        likes: [],
        comments: []
      }
    ],
    likes: [],
    reposts: [],
    comments: [],
    createdAt: firestoreArticle.createdAt.toDate().toISOString(),
    updatedAt: firestoreArticle.createdAt.toDate().toISOString()
  };
};

// Helper functions for displaying article metadata
const getAuthorName = (article: any) => {
  return article.authorName || 'Unknown Author';
};

const getReadingTime = (text: string) => {
  // Calculate reading time (words per minute)
  const wordsPerMinute = 200;
  const words = text ? text.split(/\s+/).length : 0;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes < 1 ? 1 : minutes;
};

const getExcerpt = (article: any) => {
  // Get content from first paragraph
  const content = article.content && article.content.length > 0 
    ? article.content[0].text 
    : article.excerpt || '';
  
  // Strip HTML tags if present
  const stripHtml = (html: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };
  
  // Check if the content appears to be HTML
  const cleanText = content.includes('<') && content.includes('>') ? stripHtml(content) : content;
  
  // Limit to 150 characters and add ellipsis if needed
  return cleanText.length > 150 
    ? cleanText.substring(0, 150) + '...' 
    : cleanText;
};

export default function TagPageClient({ tag }: TagPageClientProps) {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // Check if user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);
  
  // Set window width for responsive design
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setIsClient(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Auto-collapse on small screens
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Fetch articles by tag
  useEffect(() => {
    const fetchArticlesByTag = async () => {
      if (!tag) {
        setError('No tag specified');
        setIsLoading(false);
        return;
      }
      
      try {
        const firestoreArticles = await getArticlesByTag(tag);
        
        if (firestoreArticles.length === 0) {
          setArticles([]);
          setIsLoading(false);
          return;
        }
        
        // Transform the articles for display
        const transformedArticles = firestoreArticles.map(adaptFirestoreArticle);
        setArticles(transformedArticles);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching articles by tag:', error);
        setError('Failed to load articles');
        setIsLoading(false);
      }
    };
    
    fetchArticlesByTag();
  }, [tag]);
  
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
  
  // Format tag for display
  const displayTag = tag 
    ? tag.charAt(0).toUpperCase() + tag.slice(1) 
    : '';
  
  return (
    <div className={styles['three-column-layout']}>
      {/* Background overlay for mobile */}
      {isClient && windowWidth < 768 && !isSidebarCollapsed && (
        <div 
          className={`${styles['menu-overlay']} ${styles['active']}`} 
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* LEFT SIDEBAR */}
      <LeftSidebar 
        isAuthenticated={isAuthenticated} 
        handleLogout={handleSignOut} 
        toggleSidebar={toggleSidebar} 
        isSidebarCollapsed={isSidebarCollapsed}
      />
      
      {/* Mobile sidebar toggle button - only shown on mobile */}
      {isClient && windowWidth < 768 && (
        <button
          className={styles['toggle-button']} 
          onClick={toggleSidebar}
          aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isSidebarCollapsed ? "☰" : "✕"}
        </button>
      )}
      
      {/* MAIN CONTENT */}
      <main className={styles['center-column']}>
        <div className={styles['tag-header']}>
          <h1>Articles tagged with <span className={styles['highlight']}>#{displayTag}</span></h1>
        </div>
        
        {isLoading ? (
          <div className={styles['loading']}>Loading articles...</div>
        ) : error ? (
          <div className={styles['loading']}>Error: {error}</div>
        ) : articles.length === 0 ? (
          <div className={styles['no-results']}>
            <p>No articles found with this tag.</p>
            <Link href="/" className={styles['back-link']}>
              Back to home
            </Link>
          </div>
        ) : (
          <div className={styles['article-grid']}>
            {articles.map((article, index) => (
              <article 
                key={article._id || article.slug || `article-${index}`} 
                className={styles['article-card']}
              >
                <h3 className={styles['article-title']}>{article.title}</h3>
                <div className={styles['article-meta']}>
                  by {getAuthorName(article)} • {getReadingTime(article.content[0].text)} min read
                </div>
                <p className={styles['article-excerpt']}>
                  {getExcerpt(article)}
                </p>
                
                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className={styles['article-tags']}>
                    {article.tags.map((tagItem: string, tagIndex: number) => (
                      <Link 
                        key={`${article.slug}-tag-${tagIndex}`} 
                        href={`/tag/${tagItem.toLowerCase()}`}
                        className={styles['tag']}
                      >
                        #{tagItem}
                      </Link>
                    ))}
                  </div>
                )}
                
                {/* Reaction Bar */}
                <div className={styles['reaction-bar']}>
                  <button className={styles['reaction-button']}>❤️ Echo</button>
                  <button className={styles['reaction-button']}>🔁 Resonate</button>
                  <button className={styles['reaction-button']}>💬 Comment</button>
                  <Link 
                    href={`/articles/${encodeURIComponent(article.slug)}`} 
                    className={styles['read-link']}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      
      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>About this tag</h2>
        {isAuthenticated && <NotificationBell />}
        <div className={styles['tag-description']}>
          <p>
            Browsing articles tagged with <strong>#{displayTag}</strong>. 
            Discover content related to this topic.
          </p>
        </div>
        
        <Link href='/write' className={styles['write-button']}>
          Write about #{displayTag}
        </Link>
        
        <Link href='/' className={styles['back-link']}>
          Back to Home
        </Link>
      </aside>
    </div>
  );
} 