"use client"

import { useState, useEffect, useCallback, useMemo } from 'react'
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
import ShareButton from '@/components/ShareButton'
import CenterSearchBar from '@/components/CenterSearchBar'
import Head from 'next/head'
import TopLeftLogo from '@/components/TopLeftLogo'
import MobileBottomNav from '@/components/MobileBottomNav'
import MobileHeaderLogo from '@/components/MobileHeaderLogo'
import EventsBar from '@/components/EventsBar'
import InterestsReengagementWrapper from '@/components/InterestsReengagementWrapper'
import { getUserProfile } from '@/services/userService'
import { getArticleImage } from '@/lib/buildMeta'

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
  const getEnhancedCoverImage = (article: FirestoreArticle): string | null => {
    // Use the helper function from buildMeta.ts for consistent image handling
    return getArticleImage(article.coverImage, article.body) === '/images/journalite-social-banner.png' 
      ? null // Return null if only default image is available
      : getArticleImage(article.coverImage, article.body);
  };

  // Helper function to clean HTML and create excerpt
  const createCleanExcerpt = (html: string, maxLength = 200): string => {
    if (!html) return '';
    
    // Create a temporary DOM element to strip HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const cleanText = tempDiv.textContent || tempDiv.innerText || '';
    
    // Return truncated clean text
    return cleanText.length > maxLength 
      ? cleanText.substring(0, maxLength).trim() + '...'
      : cleanText.trim();
  };

  return {
    _id: firestoreArticle.id || '',
    title: firestoreArticle.title,
    slug: firestoreArticle.slug || firestoreArticle.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
    authorId: firestoreArticle.authorId,
    authorName: firestoreArticle.authorName,
    excerpt: firestoreArticle.excerpt ? createCleanExcerpt(firestoreArticle.excerpt) : createCleanExcerpt(firestoreArticle.body),
    coverImageUrl: getEnhancedCoverImage(firestoreArticle),
    tags: firestoreArticle.tags,
    content: [],
    createdAt: firestoreArticle.createdAt.toDate().toISOString(),
    updatedAt: firestoreArticle.updatedAt?.toDate().toISOString() || firestoreArticle.createdAt.toDate().toISOString(),
    viewCount: firestoreArticle.viewCount || 0,
    likes: firestoreArticle.likes || [],
    reposts: firestoreArticle.reposts || [],
    comments: firestoreArticle.comments || [],
    isExternal: false,
    externalUrl: undefined
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
            
            // Extract image from Guardian article content if no thumbnail/main image
            const getGuardianImage = () => {
              // First try the official Guardian image fields
              if (guardianArticle.fields?.thumbnail) return guardianArticle.fields.thumbnail;
              if (guardianArticle.fields?.main) return guardianArticle.fields.main;
              
              // Fallback: Extract from bodyText content
              const bodyText = guardianArticle.fields?.bodyText || '';
              if (bodyText) {
                // Look for img tags in the content
                const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;
                const match = bodyText.match(imgRegex);
                
                if (match && match[1]) {
                  return match[1];
                }
                
                // Look for Guardian's specific image patterns
                const guardianImgRegex = /(https:\/\/media\.guim\.co\.uk\/[^\s"'<>]+)/i;
                const guardianMatch = bodyText.match(guardianImgRegex);
                
                if (guardianMatch && guardianMatch[1]) {
                  return guardianMatch[1];
                }
              }
              
              // Return null if no images found - let card reshape
              return null;
            };
            
            articles.push({
              _id: `guardian-${guardianArticle.id}`,
              title: guardianArticle.fields?.headline || guardianArticle.webTitle,
              slug: `guardian-${guardianArticle.id}`,
              authorId: 'guardian',
              authorName: guardianArticle.fields?.byline || 'The Guardian',
              coverImageUrl: getGuardianImage(),
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
              externalUrl: `/guardian-news/${guardianArticle.id}/`
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
    // Helper function to strip HTML tags
    const stripHtml = (html: string) => {
      if (!html) return '';
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    };

    // First try to use the excerpt if available
    if (article.excerpt) {
      const cleanExcerpt = stripHtml(article.excerpt);
      return cleanExcerpt.length > maxLength 
        ? cleanExcerpt.substring(0, maxLength) + '...'
        : cleanExcerpt;
    }
    
    // Otherwise, extract from content
    if (article.content && article.content.length > 0) {
      const firstParagraph = article.content[0].text;
      const cleanText = stripHtml(firstParagraph);
      return cleanText.length > maxLength 
        ? cleanText.substring(0, maxLength) + '...'
        : cleanText;
    }
    
    return 'Read this thought-provoking article...';
  };

  // Helper function to check if a Guardian article is fallback content
  const isGuardianFallbackArticle = (article: Article) => {
    return article.authorId === 'guardian' && article._id && article._id.includes('fallback/');
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
    <InterestsReengagementWrapper>
      <Head>
        {sharingArticleDetails && (
          <>
            <meta property="og:title" content={sharingArticleDetails.title} />
            <meta property="og:description" content={sharingArticleDetails.excerpt || 'Read this article on Journalite.'} />
            <meta property="og:image" content={sharingArticleDetails.coverImageUrl || '/default-image.jpg'} />
            <meta property="og:url" content={`https://mvp.journalite.app/articles/${encodeURIComponent(sharingArticleDetails.slug)}`} />
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
          {isSidebarCollapsed ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          )}
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
                  <span className={styles['action-icon']}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  </span>
                  Explore Articles
                </Link>
                <Link href="/compose" className={styles['action-button']}>
                  <span className={styles['action-icon']}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                    </svg>
                  </span>
                  Write Article
                </Link>
                <Link href="/my-thoughts" className={styles['action-button']}>
                  <span className={styles['action-icon']}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </span>
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
              {featuredArticles.map((article, index) => {
                const isFallbackArticle = isGuardianFallbackArticle(article);
                
                return (
                  <article 
                    key={article._id || article.slug || `article-${index}`} 
                    className={`${styles['featured-article-card']} ${isFallbackArticle ? styles['fallback-article'] : ''}`}
                    style={isFallbackArticle ? {
                      background: 'rgba(255, 193, 7, 0.15)',
                      border: '1px solid rgba(255, 193, 7, 0.3)',
                      position: 'relative',
                      opacity: '0.85'
                    } : {}}
                  >
                    {/* Rate Limit Notice for Fallback Articles */}
                    {isFallbackArticle && (
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        background: 'rgba(255, 193, 7, 0.9)',
                        color: '#b45309',
                        padding: '6px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        zIndex: 2,
                        border: '1px solid rgba(255, 193, 7, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        API Rate Limited • Resets 7:00 PM CDT
                      </div>
                    )}

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
                          <span className={styles['source-badge']} style={{
                            backgroundColor: isFallbackArticle ? '#f59e0b' : '#052962', 
                            color: 'white'
                          }}>
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
                      by {getAuthorName(article)} • 
                      {(() => {
                        const readingTime = getReadingTime(article.content);
                        const isGuardianLongRead = article.authorId === 'guardian' && readingTime > 22;
                        
                        return isGuardianLongRead ? (
                          <span style={{ 
                            color: '#e65100', 
                            fontWeight: '600',
                            background: 'rgba(255, 152, 0, 0.15)',
                            padding: '2px 6px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 152, 0, 0.3)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                            </svg>
                            {readingTime} min read
                          </span>
                        ) : (
                          <span>{readingTime} min read</span>
                        );
                      })()}
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
                        href={article.isExternal ? (article.externalUrl || '#') : `/articles/${encodeURIComponent(article.slug)}`} 
                        className={styles['read-button']}
                      >
                        Read Article
                      </Link>
                      <ShareButton
                        title={article.title}
                        url={article.isExternal ? (article.externalUrl || '#') : `${baseUrl}/articles/${encodeURIComponent(article.slug)}`}
                        description={getExcerpt(article)}
                        articleData={{
                          slug: article.slug,
                          excerpt: getExcerpt(article),
                          coverImageUrl: article.coverImageUrl || undefined,
                          authorName: article.authorName,
                          createdAt: article.createdAt,
                          isExternal: article.isExternal,
                          externalUrl: article.externalUrl
                        }}
                        iconOnly={true}
                      />
                    </div>
                  </div>
                </article>
                );
              })}
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
              General News
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
            shareUrl={`${'https://mvp.journalite.app'}/articles/${encodeURIComponent(sharingArticleDetails.slug)}`}
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
            // Glass effect only on mobile/phone sizes
            ...(windowWidth <= 768 ? {
              background: 'rgba(5, 41, 98, 0.12)',
              backdropFilter: 'blur(24px) saturate(200%)',
              WebkitBackdropFilter: 'blur(24px) saturate(200%)',
              border: '1px solid rgba(5, 41, 98, 0.18)',
              boxShadow: '0 8px 32px rgba(5, 41, 98, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              opacity: 0.9
            } : {
              // Solid style for desktop
              backgroundColor: '#052962',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              opacity: 1
            }),
            borderRadius: '50%',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1000,
            padding: '0'
          }}
          title="The Guardian News"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            if (windowWidth <= 768) {
              // Glass effect hover for mobile
              e.currentTarget.style.background = 'rgba(5, 41, 98, 0.16)';
              e.currentTarget.style.borderColor = 'rgba(5, 41, 98, 0.28)';
              e.currentTarget.style.backdropFilter = 'blur(28px) saturate(220%)';
              (e.currentTarget.style as any).webkitBackdropFilter = 'blur(28px) saturate(220%)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(5, 41, 98, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.opacity = '1';
            } else {
              // Solid effect hover for desktop
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            if (windowWidth <= 768) {
              // Glass effect reset for mobile
              e.currentTarget.style.background = 'rgba(5, 41, 98, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(5, 41, 98, 0.18)';
              e.currentTarget.style.backdropFilter = 'blur(24px) saturate(200%)';
              (e.currentTarget.style as any).webkitBackdropFilter = 'blur(24px) saturate(200%)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(5, 41, 98, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.opacity = '0.9';
            } else {
              // Solid effect reset for desktop
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }
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
            <circle cx="50" cy="50" r="46" stroke="#fff" strokeWidth="3" fill="none"/>
            <text x="50" y="52" textAnchor="middle" fill="#fff" fontSize="42" fontFamily="Georgia, serif" dominantBaseline="middle">G</text>
          </svg>
        </Link>

        {/* Mobile Bottom Navigation - only shown on mobile */}
        {windowWidth < 768 && (
          <MobileBottomNav isAuthenticated={isAuthenticated} />
        )}
    </div>
    </InterestsReengagementWrapper>
  )
}