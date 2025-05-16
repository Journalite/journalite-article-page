"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/home.module.css'
import { auth } from '../firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getArticles, Article as FirestoreArticle } from '../firebase/articles'
import NotificationBell from '@/components/NotificationBell'
import LeftSidebar from '@/components/LeftSidebar'

// Types for our article data based on actual API structure
interface Article {
  _id: string;
  title: string;
  slug: string;
  authorId: string;
  authorName?: string;
  excerpt?: string;
  coverImageUrl?: string;
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
        
        // Fetch from Firestore - don't include drafts for the homepage
        const firestoreArticles = await getArticles();
        
        if (firestoreArticles && firestoreArticles.length > 0) {
          const adaptedArticles = firestoreArticles.map(adaptFirestoreArticle);
          
          // Set the first article as featured
          if (adaptedArticles.length > 0) {
            setFeaturedArticle(adaptedArticles[0]);
            // Set the rest as regular articles
            setArticles(adaptedArticles.slice(1));
          } else {
            setArticles([]);
          }
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
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
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength).trim() + '...';
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

  return (
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
                    <button className={styles['reaction-button']}>❤️ Echo</button>
                    <button className={styles['reaction-button']}>🔁 Resonate</button>
                    <button className={styles['reaction-button']}>💬 Comment</button>
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
    </div>
  )
}