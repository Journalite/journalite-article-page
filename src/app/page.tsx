"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
// import Image from 'next/image' // Unused
import styles from '@/styles/home.module.css'
import { auth } from '../firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getArticles, Article as FirestoreArticle } from '../firebase/articles'
import NotificationBell from '@/components/NotificationBell'
import LeftSidebar from '@/components/LeftSidebar'
import ShareModal from '@/components/ShareModal'
import Head from 'next/head'

// Types for our article data based on actual API structure
interface Article {
  _id: string;
  title: string;
  slug: string;
  authorId: string;
  authorName?: string;
  excerpt?: string;
  coverImageUrl?: string | null;
  tags?: string[];
  content: {
    paragraphId: string;
    text: string;
    likes?: string[];
    comments?: any[];
  }[];
  likes?: string[];
  reposts?: string[];
  comments?: any[];
  viewCount?: number;
  createdAt: string;
  updatedAt: string;
}

// Interface for article details to be passed to the modal
interface SharingArticleDetails {
  title: string;
  slug: string;
  coverImageUrl?: string | null;
  excerpt?: string;
}

// Author mapping for using authorId to display author name - legacy system
const authorMapping: {[key: string]: string} = {
  "84b2f82c-1e93-498a-983e-3b30a8379e63": "Samuel Green",
  "user_002": "Alex Martinez",
  "kristen-lee-id": "Kristen Lee",
  "alex-wen-id": "Alex Wen",
  "hannah-cole-id": "Hannah Cole"
};

// Adapter function to convert Firestore articles to match our UI format
const adaptFirestoreArticle = (firestoreArticle: FirestoreArticle): Article => {
  return {
    _id: firestoreArticle.id || '',
    title: firestoreArticle.title,
    slug: firestoreArticle.slug || firestoreArticle.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
    authorId: firestoreArticle.authorId,
    authorName: firestoreArticle.authorName,
    coverImageUrl: firestoreArticle.coverImage || null,
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

// Fallback mock data only used when API is unavailable
const mockArticles: Article[] = [
  {
    _id: "60e6cbb8f19a4b3d8c3a7f21",
    authorId: "84b2f82c-1e93-498a-983e-3b30a8379e63",
    title: "The Future of Artificial Intelligence: Transforming Our World",
    slug: "updated-first-article",
    coverImageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tags: ["AI", "Machine Learning"],
    content: [
      { 
        paragraphId: "p1",
        text: "Artificial Intelligence (AI) stands at the forefront of technological innovation, promising to revolutionize every aspect of our lives. From healthcare to transportation, education to entertainment, AI's influence continues to grow exponentially."
      }
    ],
    createdAt: "2025-04-09T12:00:00.000Z",
    updatedAt: "2025-04-09T14:00:00.000Z"
  },
  {
    _id: "60e6cbb8f19a4b3d8c3a7f99",
    authorId: "user_002",
    title: "The Rise of Gen Z Creators",
    slug: "gen-z-rise",
    coverImageUrl: "https://images.unsplash.com/photo-1601908804492-7f3d9d42e1b3",
    tags: ["Culture", "Youth"],
    content: [
      {
        paragraphId: "p1",
        text: "Gen Z is redefining creativity in the age of social media, turning platforms like TikTok and YouTube into launching pads for innovative voices around the globe."
      }
    ],
    createdAt: "2025-04-10T12:00:00.000Z",
    updatedAt: "2025-04-10T13:00:00.000Z"
  },
  {
    _id: "70f7d1e2a8b24d1fa2c1b8f3",
    authorId: "kristen-lee-id",
    title: "Unravelling the Ethics of AI",
    slug: "unravelling-ethics-of-ai",
    coverImageUrl: "https://images.unsplash.com/photo-1581091012184-7c07f32c2f32",
    tags: ["Ethics", "AI"],
    content: [
      {
        paragraphId: "p1",
        text: "As artificial intelligence rapidly advances, we must confront moral questions around bias, privacy, and accountability. Who is responsible when an AI-powered system errs, and how do we ensure fair outcomes for all?"
      }
    ],
    createdAt: "2025-04-12T09:00:00.000Z",
    updatedAt: "2025-04-12T09:00:00.000Z"
  },
  {
    _id: "81a8d2f3b9c35e2ab3d2c4e5",
    authorId: "alex-wen-id",
    title: "The Hidden Costs of Urbanization",
    slug: "hidden-costs-of-urbanization",
    coverImageUrl: "https://images.unsplash.com/photo-1541051646-784cfc8a2c21",
    tags: ["Urbanization", "Society"],
    content: [
      {
        paragraphId: "p1",
        text: "Cities grow at breakneck speed, but beneath the skylines lie rising living costs, environmental strain, and widening inequality. How do we balance prosperity with sustainability in our ever‑expanding metropolises?"
      }
    ],
    createdAt: "2025-04-12T09:15:00.000Z",
    updatedAt: "2025-04-12T09:15:00.000Z"
  },
  {
    _id: "92h9ffg3c41d7e6g1f6h0g54",
    authorId: "hannah-cole-id",
    title: "Justice and Equality in Modern Society",
    slug: "justice-and-equality-in-modern-society",
    coverImageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    tags: ["Justice", "Equality"],
    content: [
      {
        paragraphId: "p1",
        text: "In an age of rapid change, ensuring that every voice is heard and that rights are upheld remains the cornerstone of a just society. What steps can we take to close the gap between ideals and reality?"
      }
    ],
    createdAt: "2025-04-12T09:30:00.000Z",
    updatedAt: "2025-04-12T09:30:00.000Z"
  }
];

export default function HomePage() {
  // Initialize with empty arrays/null instead of stub objects
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Default to collapsed on mobile
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Trending tags (static list, no need for state)
  const tags = ['Journalism', 'Technology', 'Politics', 'Science', 'Culture'];

  // State for ShareModal
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharingArticleDetails, setSharingArticleDetails] = useState<SharingArticleDetails | null>(null);

  // Check authentication status on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  // Set up window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use different default sidebar state based on screen size
  useEffect(() => {
    setIsSidebarCollapsed(windowWidth < 768);
  }, [windowWidth]);

  useEffect(() => {
    // Fetch articles data
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        
        // Pass a higher limit parameter to ensure we get enough articles
        const firestoreArticles = await getArticles({ limit: 50 }); 
        
        console.log('Articles fetched from Firestore:', firestoreArticles.length);
        
        if (firestoreArticles && firestoreArticles.length > 0) {
          const adaptedArticles = firestoreArticles.map(adaptFirestoreArticle);
          
          console.log('Adapted articles:', adaptedArticles.length);
          
          if (adaptedArticles.length > 0) {
            setFeaturedArticle(adaptedArticles[0]);
            setArticles(adaptedArticles.length > 1 ? adaptedArticles.slice(1) : []);
            console.log('Articles in grid:', adaptedArticles.length > 1 ? adaptedArticles.length - 1 : 0);
          } else {
            setFeaturedArticle(null);
            setArticles([]);
          }
        } else {
          setFeaturedArticle(null);
          setArticles([]);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        setFeaturedArticle(null);
        setArticles([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  // Get author name from authorId, preferring the API-provided authorName if available
  const getAuthorName = (article: Article): string => {
    if (article.authorName) return article.authorName;
    if (!article.authorId) return '';
    return authorMapping[article.authorId] || '';
  };

  // Calculate estimated reading time based on content length
  const getReadingTime = (content: Article['content']) => {
    if (!content || !Array.isArray(content)) {
      return 1; // Default to 1 minute if content is missing or not an array
    }
    
    const wordCount = content.reduce((count: number, para: { text: string }) => {
      return count + ((para && para.text) ? para.text.split(' ').length : 0);
    }, 0);
    
    // Average reading speed: 200 words per minute
    const minutes = Math.ceil(wordCount / 200) || 1; // Ensure at least 1 minute
    return minutes;
  };

  // Use the API-provided excerpt if available, otherwise calculate from content
  const getExcerpt = (article: Article, maxLength = 150) => {
    // If the API provided an excerpt, use it
    if (article.excerpt) return article.excerpt;
    
    // Otherwise calculate from content as a fallback
    const content = article.content;
    if (!content || !Array.isArray(content) || content.length === 0) {
      return '';
    }
    
    const text = content[0]?.text || '';
    
    // Handle HTML content by stripping tags
    const stripHtml = (html: string) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || '';
    };
    
    // Strip HTML tags if the content appears to be HTML
    const cleanText = text.includes('<') && text.includes('>') ? stripHtml(text) : text;
    
    if (cleanText.length <= maxLength) return cleanText;
    
    return cleanText.substring(0, maxLength).trim() + '...';
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      // Error handling for logout failure
    }
  };

  const handleOpenShareModal = (article: Article) => {
    setSharingArticleDetails({
      title: article.title,
      slug: article.slug,
      coverImageUrl: article.coverImageUrl,
      excerpt: getExcerpt(article, 100) // Shorter excerpt for modal
    });
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
    setSharingArticleDetails(null);
  };

  // Determine base URL for sharing
  const [baseUrl, setBaseUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin);
    }
  }, []);

  return (
    <>
      <Head>
        {sharingArticleDetails && (
          <>
            <meta property="og:title" content={sharingArticleDetails.title} />
            <meta property="og:description" content={sharingArticleDetails.excerpt || 'Read this article on Journalite.'} />
            <meta property="og:image" content={sharingArticleDetails.coverImageUrl || '/default-image.jpg'} />
            <meta property="og:url" content={`https://mvp.journalite.app/articles?slug=${encodeURIComponent(sharingArticleDetails.slug)}`} />
            <meta property="og:type" content="article" />
          </>
        )}
      </Head>
    <div className={styles['three-column-layout']}>
      {/* Background overlay for mobile */}
      {windowWidth < 768 && !isSidebarCollapsed && (
        <div className={`${styles['menu-overlay']} ${styles['active']}`} onClick={toggleSidebar}></div>
      )}
    
      {/* LEFT SIDEBAR */}
      <LeftSidebar 
        isAuthenticated={isAuthenticated} 
        handleLogout={handleLogout} 
        toggleSidebar={toggleSidebar} 
        isSidebarCollapsed={isSidebarCollapsed}
      />

      {/* Mobile sidebar toggle button - only shown on mobile */}
      {windowWidth < 768 && (
        <button 
          className={styles['toggle-button']} 
          onClick={toggleSidebar}
          aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isSidebarCollapsed ? "☰" : "✕"}
        </button>
      )}

      {/* MAIN CONTENT */}
      <main className={`${styles['center-column']} ${isSidebarCollapsed && windowWidth >= 768 ? styles['expanded'] : ''}`}>
        {/* Daily Prompt Banner */}
        <div className={styles['prompt-banner']}>
          <div className={styles['prompt-icon']}>💡</div>
          <div className={styles['prompt-text']}>What's an idea that changed your life?</div>
          <Link href="/write" className={styles['prompt-button']}>
            Write now →
          </Link>
        </div>

        {isLoading ? (
          <div className={styles['loading']}>Loading articles...</div>
        ) : (
          <>
            {/* Featured Thought */}
            {featuredArticle && (
              <article className={styles['featured-card']}>
                <div className={styles['featured-content']}>
                  <div className={styles['featured-label']}>FEATURED THOUGHT</div>
                  <h2 className={styles['featured-title']}>{featuredArticle.title}</h2>
                  <div className={styles['featured-meta']}>
                    by {getAuthorName(featuredArticle)} • {getReadingTime(featuredArticle.content)} min read
                  </div>
                  <p className={styles['featured-excerpt']}>
                    {getExcerpt(featuredArticle)}
                  </p>
                  <Link href={`/articles?slug=${encodeURIComponent(featuredArticle.slug)}`} className={styles['read-link']}>
                    Read →
                  </Link>
                </div>
                {featuredArticle.coverImageUrl && (
                  <div className={styles['featured-image']}>
                    <img 
                      src={featuredArticle.coverImageUrl} 
                      alt={featuredArticle.title}
                      className={styles['cover-image']}
                    />
                  </div>
                )}
              </article>
            )}

            {/* Article Grid */}
            <div className={styles['article-grid']}>
              {articles.map((article, index) => (
                <article 
                  key={article._id || article.slug || `article-${index}`} 
                  className={styles['article-card']}
                >
                  <h3 className={styles['article-title']}>{article.title}</h3>
                  <div className={styles['article-meta']}>
                    by {getAuthorName(article)} • {getReadingTime(article.content)} min read
                  </div>
                  {(article.excerpt || (article.content && article.content.length > 0)) && (
                    <p className={styles['article-excerpt']}>
                      {getExcerpt(article)}
                    </p>
                  )}
                  
                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className={styles['article-tags']}>
                      {article.tags.map((tag, tagIndex) => (
                        <Link
                          key={`${article.slug}-tag-${tagIndex}`}
                          href={`/tag/${tag.toLowerCase()}`}
                          className={styles['tag']}
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* Reaction Bar */}
                  <div className={styles['reaction-bar']}>
                      <button className={styles['reaction-button']} aria-label="Like article">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </button>
                      <button 
                        className={styles['reaction-button']} 
                        aria-label="Share article"
                        onClick={() => handleOpenShareModal(article)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                        </svg>
                      </button>
                      <button className={styles['reaction-button']} aria-label="Comment on article">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                      </button>
                    <Link href={`/articles?slug=${encodeURIComponent(article.slug)}`} className={styles['read-link']}>
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>Trending</h2>
        {isAuthenticated && <NotificationBell />}
        <div className={styles['tag-list']}>
          {tags.map(tag => (
            <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className={styles['trending-tag']}>
              # {tag}
            </Link>
          ))}
        </div>
        <Link href="/write" className={styles['write-button']}>
          Write
        </Link>
      </aside>

        {/* Share Modal */} 
        {sharingArticleDetails && (
          <ShareModal 
            isOpen={isShareModalOpen}
            onClose={handleCloseShareModal}
            articleTitle={sharingArticleDetails.title}
            articleUrl={`${'https://mvp.journalite.app'}/articles?slug=${encodeURIComponent(sharingArticleDetails.slug)}`}
            coverImageUrl={sharingArticleDetails.coverImageUrl}
            excerpt={sharingArticleDetails.excerpt}
          />
        )}
    </div>
    </>
  )
}