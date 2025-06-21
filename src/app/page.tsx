"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
// import Image from 'next/image' // Unused
import styles from '@/styles/home.module.css'
import { auth } from '../firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getArticles, Article as FirestoreArticle } from '../firebase/articles'
import NotificationBell from '@/components/NotificationBell'
import MessageNotificationBell from '@/components/MessageNotificationBell'
import LeftSidebar from '@/components/LeftSidebar'
import ShareModal from '@/components/ShareModal'
import CenterSearchBar from '@/components/CenterSearchBar'
import Head from 'next/head'
import TopLeftLogo from '@/components/TopLeftLogo'
import MobileBottomNav from '@/components/MobileBottomNav'
import MobileHeaderLogo from '@/components/MobileHeaderLogo'
import EventsBar from '@/components/EventsBar'
import { getUserProfile } from '@/services/userService'

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
  isExternal?: boolean;
  externalUrl?: string;
}

// Interface for article details to be passed to the modal
interface SharingArticleDetails {
  title: string;
  slug: string;
  coverImageUrl?: string | null;
  excerpt?: string;
}

// Adapter function to convert Firestore articles to match our UI format
const adaptFirestoreArticle = (firestoreArticle: FirestoreArticle): Article => {
  // Enhanced image selection for better homepage appeal
  const getEnhancedCoverImage = (article: FirestoreArticle): string => {
    // If article has a good cover image, use it
    if (article.coverImage && !article.coverImage.includes('unsplash.com/photo-1581091012184') && 
        !article.coverImage.includes('unsplash.com/photo-1541051646')) {
      return article.coverImage;
    }
    
    // Modern, engaging images based on article content/tags
    const modernImages = [
      // Tech & Innovation
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', // Space/tech
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80', // Creative workspace
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', // Colorful abstract
      
      // Culture & Society  
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Mountain landscape
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', // Nature/adventure
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Inspiring vista
      
      // Creative & Artistic
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80', // Colorful paint
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // Abstract art
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', // Creative inspiration
      
      // Modern & Clean
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80', // Modern office
      'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=800&q=80', // Clean workspace
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', // Team collaboration
    ];
    
    // Select image based on article characteristics
    let imageIndex = 0;
    
    // Check tags for better image matching
    if (article.tags) {
      const tags = article.tags.map(tag => tag.toLowerCase());
      if (tags.some(tag => ['tech', 'ai', 'technology', 'innovation'].includes(tag))) {
        imageIndex = Math.floor(Math.random() * 3); // Tech images (0-2)
      } else if (tags.some(tag => ['culture', 'society', 'politics', 'social'].includes(tag))) {
        imageIndex = 3 + Math.floor(Math.random() * 3); // Culture images (3-5)
      } else if (tags.some(tag => ['art', 'design', 'creative', 'culture'].includes(tag))) {
        imageIndex = 6 + Math.floor(Math.random() * 3); // Creative images (6-8)
      } else {
        imageIndex = 9 + Math.floor(Math.random() * 3); // Modern/clean images (9-11)
      }
    } else {
      // Use title-based selection if no tags
      const title = article.title.toLowerCase();
      if (title.includes('tech') || title.includes('ai') || title.includes('future')) {
        imageIndex = Math.floor(Math.random() * 3);
      } else if (title.includes('culture') || title.includes('society')) {
        imageIndex = 3 + Math.floor(Math.random() * 3);
      } else if (title.includes('art') || title.includes('creative')) {
        imageIndex = 6 + Math.floor(Math.random() * 3);
      } else {
        imageIndex = 9 + Math.floor(Math.random() * 3);
      }
    }
    
    return modernImages[imageIndex];
  };

  return {
    _id: firestoreArticle.id || '',
    title: firestoreArticle.title,
    slug: firestoreArticle.slug || firestoreArticle.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
    authorId: firestoreArticle.authorId,
    authorName: firestoreArticle.authorName,
    coverImageUrl: getEnhancedCoverImage(firestoreArticle),
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

export default function HomePage() {
  // Initialize with empty arrays/null instead of stub objects
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Default to collapsed on mobile
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Trending tags (static list, no need for state)
  const tags = ['Journalism', 'Technology', 'Politics', 'Science', 'Culture'];

  // State for ShareModal
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharingArticleDetails, setSharingArticleDetails] = useState<SharingArticleDetails | null>(null);

  // Check authentication status on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
      
      if (user) {
        try {
          const profile = await getUserProfile(user.uid);
          setUserProfile(profile);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        setUserProfile(null);
      }
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

  // Fetch featured articles (mix of Journalite, Guardian, and NewsAPI)
  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      try {
        setIsLoading(true);
        
        // Fetch content from different sources in parallel
        const [journaliteArticles, guardianArticles] = await Promise.all([
          // Get 2 Journalite articles
          getArticles({ limit: 2 }),
          // Get 2 Guardian articles from different sections
          fetchMultipleGuardianArticles()
        ]);

        const mixedArticles = [];

        // Add Journalite articles
        if (journaliteArticles && journaliteArticles.length > 0) {
          const adaptedJournalite = journaliteArticles.map(adaptFirestoreArticle);
          mixedArticles.push(...adaptedJournalite);
        }

        // Add Guardian articles
        if (guardianArticles && guardianArticles.length > 0) {
          mixedArticles.push(...guardianArticles);
        }

        // Shuffle the articles for variety and limit to 4
        const shuffledArticles = mixedArticles.sort(() => Math.random() - 0.5).slice(0, 4);
        setFeaturedArticles(shuffledArticles);
        
      } catch (error) {
        console.error('Error fetching featured articles:', error);
        // Fallback to just Journalite articles
        try {
          const fallbackArticles = await getArticles({ limit: 4 });
          const adaptedFallback = fallbackArticles.map(adaptFirestoreArticle);
          setFeaturedArticles(adaptedFallback);
        } catch (fallbackError) {
          console.error('Fallback fetch failed:', fallbackError);
          setFeaturedArticles([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedArticles();
  }, []);

  // Helper function to clean HTML from text
  const cleanHtmlText = (htmlText: string): string => {
    if (!htmlText) return '';
    
    // Remove HTML tags
    let cleanText = htmlText.replace(/<[^>]*>/g, ' ');
    
    // Replace multiple spaces with single space
    cleanText = cleanText.replace(/\s+/g, ' ');
    
    // Decode HTML entities
    cleanText = cleanText
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&nbsp;/g, ' ');
    
    // Trim and limit length for preview
    cleanText = cleanText.trim();
    if (cleanText.length > 150) {
      cleanText = cleanText.substring(0, 150) + '...';
    }
    
    return cleanText;
  };

  // Helper function to fetch multiple Guardian articles from different sections
  const fetchMultipleGuardianArticles = async () => {
    try {
      const { guardianService } = await import('@/services/guardianService');
      
      if (!guardianService.isConfigured()) {
        console.log('Guardian API not configured');
        return [];
      }

      // Get articles from different sections for variety
      const sections = ['technology', 'science', 'business', 'world'];
      const articles = [];

      for (const section of sections.slice(0, 2)) { // Get 2 different sections
        try {
          const response = await guardianService.searchArticles('', section, 1, 1);
          if (response.results && response.results.length > 0) {
            const guardianArticle = response.results[0];
            
            // Clean the preview text
            const previewText = guardianArticle.fields?.standfirst || 
                               guardianArticle.fields?.trailText || 
                               guardianArticle.fields?.bodyText ||
                               'Read this article from The Guardian';
            
            articles.push({
              _id: `guardian-${guardianArticle.id}`,
              title: guardianArticle.fields?.headline || guardianArticle.webTitle,
              slug: `guardian-${guardianArticle.id}`,
              authorId: 'guardian',
              authorName: guardianArticle.fields?.byline || 'The Guardian',
              coverImageUrl: guardianArticle.fields?.thumbnail || guardianArticle.fields?.main || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
              tags: [guardianArticle.sectionName, guardianArticle.pillarName].filter(Boolean),
              content: [{
                paragraphId: 'p1',
                text: cleanHtmlText(previewText),
                likes: [],
                comments: []
              }],
              likes: [],
              reposts: [],
              comments: [],
              createdAt: guardianArticle.webPublicationDate,
              updatedAt: guardianArticle.webPublicationDate,
              isExternal: true,
              externalUrl: `/guardian-news/${guardianArticle.id}`
            });
          }
        } catch (sectionError) {
          console.error(`Error fetching Guardian article from ${section}:`, sectionError);
        }
      }

      return articles;
    } catch (error) {
      console.error('Error fetching Guardian articles:', error);
      return [];
    }
  };



  const getAuthorName = (article: Article): string => {
    return article.authorName || 'Anonymous';
  };

  const getReadingTime = (content: Article['content']) => {
    if (!content || content.length === 0) return 5;
    
    const totalWords = content.reduce((total, paragraph) => {
      const words = paragraph.text.split(' ').length;
      return total + words;
    }, 0);
    
    return Math.max(1, Math.ceil(totalWords / 200));
  };

  const getExcerpt = (article: Article, maxLength = 150) => {
    // First try to use the excerpt if available
    if (article.excerpt) {
      return article.excerpt.length > maxLength 
        ? article.excerpt.substring(0, maxLength) + '...'
        : article.excerpt;
    }
    
    // Otherwise, extract from content
    if (article.content && article.content.length > 0) {
      const firstParagraph = article.content[0].text;
      
      // Strip HTML tags if present
      const stripHtml = (html: string) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
      };
      
      const cleanText = stripHtml(firstParagraph);
      return cleanText.length > maxLength 
        ? cleanText.substring(0, maxLength) + '...'
        : cleanText;
    }
    
    return 'Read this thought-provoking article...';
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleOpenShareModal = (article: Article) => {
    setSharingArticleDetails({
      title: article.title,
      slug: article.slug,
      coverImageUrl: article.coverImageUrl,
      excerpt: getExcerpt(article)
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
    
      {/* TOP LEFT LOGO - Desktop only */}
      <TopLeftLogo />
      
      {/* MOBILE HEADER LOGO - Mobile only */}
      {windowWidth < 768 && (
        <MobileHeaderLogo />
      )}
    
      {/* LEFT SIDEBAR */}
      <LeftSidebar 
        isAuthenticated={isAuthenticated} 
        handleLogout={handleLogout} 
        toggleSidebar={toggleSidebar} 
        isSidebarCollapsed={isSidebarCollapsed}
      />

      {/* EVENTS BAR - Right side floating */}
      <EventsBar />

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
        {/* Center Search Bar */}
        <CenterSearchBar />

        {/* Hero Section for Unauthenticated Users */}
        {!isAuthenticated && (
          <div className={styles['hero-section']}>
            <div className={styles['hero-content']}>
              <h1 className={styles['hero-title']}>Welcome to Journalite</h1>
              <p className={styles['hero-subtitle']}>
                Discover thoughtful articles, engage with diverse perspectives, and connect with a community of curious minds.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/register" className={styles['cta-primary']}>
                  Get Started
                </Link>
                <Link href="/login" className={styles['cta-secondary']}>
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Welcome Back Section for Authenticated Users */}
        {isAuthenticated && (
          <div className={styles['welcome-section']}>
            <div className={styles['welcome-content']}>
              <h1 className={styles['welcome-title']}>
                Welcome back{userProfile?.displayName ? `, ${userProfile.displayName}` : ''}!
              </h1>
              <p className={styles['welcome-subtitle']}>
                Ready to explore new ideas and share your thoughts?
              </p>
              <div className={styles['quick-actions']}>
                <Link href="/explore" className={styles['action-button']}>
                  <span className={styles['action-icon']}>✨</span>
                  Explore Articles
                </Link>
                <Link href="/compose" className={styles['action-button']}>
                  <span className={styles['action-icon']}>✍️</span>
                  Write Article
                </Link>
                <Link href="/my-thoughts" className={styles['action-button']}>
                  <span className={styles['action-icon']}>💭</span>
                  My Thoughts
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Featured Articles Section */}
        <div className={styles['featured-section']}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>
              {isAuthenticated ? 'Recommended for You' : 'Featured Articles'}
            </h2>
            <Link href="/explore" className={styles['view-all-link']}>
              View All →
            </Link>
          </div>

          {isLoading ? (
            <div className={styles['loading']}>Loading articles...</div>
          ) : (
            <div className={styles['featured-grid']}>
              {featuredArticles.map((article, index) => (
                <article 
                  key={article._id || article.slug || `article-${index}`} 
                  className={styles['featured-article-card']}
                >
                  {article.coverImageUrl && (
                    <div className={styles['article-image']}>
                      <img 
                        src={article.coverImageUrl} 
                        alt={article.title}
                        className={styles['cover-image']}
                      />
                    </div>
                  )}
                  
                  <div className={styles['article-content']}>
                    <div className={styles['source-badge-container']}>
                      {article.authorId === 'guardian' && (
                        <span className={styles['source-badge']} style={{backgroundColor: '#052962', color: 'white'}}>
                          Guardian
                        </span>
                      )}
                      {article.authorId === 'newsapi' && (
                        <span className={styles['source-badge']} style={{backgroundColor: '#10B981', color: 'white'}}>
                          News
                        </span>
                      )}
                      {!article.isExternal && (
                        <span className={styles['source-badge']} style={{backgroundColor: '#7C3AED', color: 'white'}}>
                          Journalite
                        </span>
                      )}
                    </div>
                    <h3 className={styles['article-title']}>{article.title}</h3>
                    <div className={styles['article-meta']}>
                      by {getAuthorName(article)} • {getReadingTime(article.content)} min read
                    </div>
                    <p className={styles['article-excerpt']}>
                      {getExcerpt(article)}
                    </p>
                    
                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                      <div className={styles['article-tags']}>
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
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
                    
                    <div className={styles['article-actions']}>
                      <Link 
                        href={article.isExternal ? (article.externalUrl || '#') : `/articles?slug=${encodeURIComponent(article.slug)}`} 
                        className={styles['read-button']}
                      >
                        Read Article
                      </Link>
                      <button 
                        className={styles['share-button']} 
                        aria-label="Share article"
                        onClick={() => handleOpenShareModal(article)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Platform Features Section for Unauthenticated Users */}
        {!isAuthenticated && (
          <div className={styles['features-section']}>
            <h2 className={styles['features-title']}>Why Choose Journalite?</h2>
            <div className={styles['features-grid']}>
              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                    <path d="M2 12h20"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h3 className={styles['feature-title']}>Diverse Sources</h3>
                <p className={styles['feature-description']}>
                  Access articles from multiple trusted sources including The Guardian and breaking news from around the world.
                </p>
              </div>
              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 className={styles['feature-title']}>Personalized Feed</h3>
                <p className={styles['feature-description']}>
                  Get content tailored to your interests with our intelligent recommendation system.
                </p>
              </div>
              <div className={styles['feature-card']}>
                <div className={styles['feature-icon']}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/>
                    <path d="M15 3v6h6"/>
                    <path d="M10 13l2 2 4-4"/>
                    <path d="M8 17h8"/>
                  </svg>
                </div>
                <h3 className={styles['feature-title']}>Reflection Tools</h3>
                <p className={styles['feature-description']}>
                  Highlight, comment, and reflect on articles with our unique annotation system.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>Trending</h2>
        {isAuthenticated && (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' }}>
            <NotificationBell />
            <MessageNotificationBell />
          </div>
        )}
        <div className={styles['tag-list']}>
          {tags.map(tag => (
            <Link key={tag} href={`/tag/${tag.toLowerCase()}`} className={styles['trending-tag']}>
              # {tag}
            </Link>
          ))}
        </div>
        {/* News Sources */}
        <div style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
          <h3 className={styles['sidebar-heading']} style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>News</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link 
              href="/news" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.75rem',
                border: '1px solid #e1e5e9',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#0066cc',
                backgroundColor: '#f8f9fa',
                transition: 'all 0.2s ease',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              📰 General News
            </Link>
          </div>
        </div>

        <Link href="/compose" className={styles['write-button']}>
          Write
        </Link>
      </aside>

        {/* Share Modal */} 
        {sharingArticleDetails && (
          <ShareModal 
            isOpen={isShareModalOpen}
            onClose={handleCloseShareModal}
            highlightText={sharingArticleDetails.excerpt || 'Check out this article'}
            articleTitle={sharingArticleDetails.title}
            shareUrl={`${'https://mvp.journalite.app'}/articles?slug=${encodeURIComponent(sharingArticleDetails.slug)}`}
          />
        )}

        {/* Guardian News Widget - Bottom Right */}
        <Link 
          href="/guardian-news" 
          style={{ 
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            backgroundColor: '#052962',
            border: 'none',
            borderRadius: '50%',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            padding: '0'
          }}
          title="The Guardian News"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
          }}
        >
          <svg 
            width="48" 
            height="48" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block'
            }}
          >
            <circle cx="50" cy="50" r="46" stroke="#fff" stroke-width="3" fill="none"/>
            <text x="50" y="52" text-anchor="middle" fill="#fff" font-size="42" font-family="Georgia, serif" dominant-baseline="middle">G</text>
          </svg>
        </Link>

        {/* Mobile Bottom Navigation - only shown on mobile */}
        {windowWidth < 768 && (
          <MobileBottomNav isAuthenticated={isAuthenticated} />
        )}
    </div>
    </>
  )
}