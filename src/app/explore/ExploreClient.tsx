'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/home.module.css'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getArticles, getArticlesByTag, Article as FirestoreArticle } from '@/firebase/articles'
import NotificationBell from '@/components/NotificationBell'
import LeftSidebar from '@/components/LeftSidebar'
import TopLeftLogo from '@/components/TopLeftLogo'
import ShareModal from '@/components/ShareModal'

// Types for article data
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

// Categories for organizing articles
interface Category {
  id: string;
  name: string;
  articles: Article[];
}

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
    likes: firestoreArticle.likes || [],
    reposts: firestoreArticle.reposts || [],
    comments: firestoreArticle.comments || [],
    viewCount: firestoreArticle.viewCount || 0,
    createdAt: firestoreArticle.createdAt.toDate().toISOString(),
    updatedAt: firestoreArticle.updatedAt ? firestoreArticle.updatedAt.toDate().toISOString() : firestoreArticle.createdAt.toDate().toISOString()
  };
};

export default function ExploreClient() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Default to collapsed on mobile
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Popular tags for Featured By Tag section
  const popularTags = ['Technology', 'Writing', 'Design', 'Politics', 'Health', 'Science'];
  const [selectedTag, setSelectedTag] = useState(popularTags[0]);

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
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        
        // Fetch a larger set of articles (up to 30) for the explore page
        const firestoreArticles = await getArticles({ limit: 30 });
        
        console.log('Articles fetched from Firestore:', firestoreArticles.length);
        
        if (firestoreArticles && firestoreArticles.length > 0) {
          const adaptedArticles = firestoreArticles.map(adaptFirestoreArticle);
          
          // Organize articles into different categories
          const categoriesData: Category[] = [
            {
              id: 'featured',
              name: 'Featured Stories',
              articles: adaptedArticles.slice(0, 4) // First 4 articles as featured
            },
            {
              id: 'trending',
              name: 'Trending Now',
              // Sort by view count or like count to determine trending
              articles: [...adaptedArticles].sort((a, b) => 
                ((b.viewCount || 0) + (b.likes?.length || 0)) - 
                ((a.viewCount || 0) + (a.likes?.length || 0))
              ).slice(0, 6)
            },
            {
              id: 'recent',
              name: 'Recently Published',
              articles: [...adaptedArticles].sort((a, b) => 
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              ).slice(0, 8)
            }
          ];
          
          setCategories(categoriesData);
          
          // Fetch articles by the initially selected tag
          await fetchArticlesByTag(selectedTag);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticles();
  }, [selectedTag]);
  
  const fetchArticlesByTag = async (tag: string) => {
    try {
      const tagArticles = await getArticlesByTag(tag, { limit: 6 });
      if (tagArticles && tagArticles.length > 0) {
        const adaptedTagArticles = tagArticles.map(adaptFirestoreArticle);
        
        // Update categories with the tag-specific articles
        setCategories(prev => {
          const tagCategoryIndex = prev.findIndex(cat => cat.id === 'byTag');
          
          if (tagCategoryIndex >= 0) {
            // Update existing tag category
            const updatedCategories = [...prev];
            updatedCategories[tagCategoryIndex] = {
              ...updatedCategories[tagCategoryIndex],
              name: `${tag} Articles`,
              articles: adaptedTagArticles
            };
            return updatedCategories;
          } else {
            // Add new tag category
            return [...prev, {
              id: 'byTag',
              name: `${tag} Articles`,
              articles: adaptedTagArticles
            }];
          }
        });
      }
    } catch (error) {
      console.error(`Error fetching articles for tag ${tag}:`, error);
    }
  };

  // Get author name, preferring the API-provided authorName if available
  const getAuthorName = (article: Article): string => {
    return article.authorName || '';
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

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    fetchArticlesByTag(tag);
  };

  return (
    <div className={styles['three-column-layout']}>
      {/* Background overlay for mobile */}
      {windowWidth < 768 && !isSidebarCollapsed && (
        <div className={`${styles['menu-overlay']} ${styles['active']}`} onClick={toggleSidebar}></div>
      )}
    
      {/* TOP LEFT LOGO */}
      <TopLeftLogo />
    
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
        <div className={styles['explore-header']}>
          <h1 className={styles['explore-title']}>Explore</h1>
          <p className={styles['explore-subtitle']}>Discover stories, ideas, and insights from Journalite writers</p>
        </div>

        {isLoading ? (
          <div className={styles['loading']}>Loading articles...</div>
        ) : (
          <div className={styles['explore-container']}>
            {/* Display each category section */}
            {categories.map(category => (
              <section key={category.id} className={styles['explore-section']}>
                <h2 className={styles['section-title']}>{category.name}</h2>
                
                {/* Grid layout for most categories */}
                <div className={
                  category.id === 'featured' 
                    ? styles['featured-articles-grid'] 
                    : styles['article-grid']
                }>
                  {category.articles.map((article, index) => (
                    <article 
                      key={`${category.id}-${article._id || article.slug || index}`} 
                      className={
                        category.id === 'featured' && index === 0
                          ? styles['feature-large']
                          : styles['article-card']
                      }
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
                          <Link href={`/articles?slug=${encodeURIComponent(article.slug)}`} className={styles['read-link']}>
                            Read →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
            
            {/* Topics section */}
            <section className={styles['explore-section']}>
              <h2 className={styles['section-title']}>Explore by Topic</h2>
              <div className={styles['tags-selector']}>
                {popularTags.map(tag => (
                  <button
                    key={tag}
                    className={`${styles['tag-button']} ${selectedTag === tag ? styles['tag-button-active'] : ''}`}
                    onClick={() => handleTagChange(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              
              {/* The articles for the selected tag will be shown in the byTag category */}
            </section>
          </div>
        )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>Popular Tags</h2>
        {isAuthenticated && <NotificationBell />}
        <div className={styles['tag-list']}>
          {popularTags.map(tag => (
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
          highlightText={sharingArticleDetails.excerpt || 'Check out this article'}
          articleTitle={sharingArticleDetails.title}
          shareUrl={`https://mvp.journalite.app/articles?slug=${encodeURIComponent(sharingArticleDetails.slug)}`}
        />
      )}
    </div>
  );
} 