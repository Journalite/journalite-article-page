'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
// import styles from '@/styles/home.module.css' // Unused
import articleStyles from '@/styles/ArticlePage.module.css'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import MinimalNotificationBell from '@/components/MinimalNotificationBell'
// import LeftSidebar from '@/components/LeftSidebar' // Unused
import ArticleWithHighlights from '@/components/ArticleWithHighlights'
import MobileBottomNav from '@/components/MobileBottomNav'
import CommentSection from '@/components/CommentSection'
import ArticleComposer from '@/components/ArticleComposer'
import LikeButton from '@/components/LikeButton'

// Import Firestore article service
import { getArticleBySlug } from '@/firebase/articles'
import { getMoodFromText } from '@/utils/getMoodFromText'
import { moodThemes } from '@/utils/moodThemes'

// Author mapping from homepage for consistency - currently unused
// const authorMapping: { [key: string]: string } = {
//   '84b2f82c-1e93-498a-983e-3b30a8379e63': 'Samuel Green',
//   user_002: 'Alex Martinez',
//   'kristen-lee-id': 'Kristen Lee',
//   'alex-wen-id': 'Alex Wen',
//   'hannah-cole-id': 'Hannah Cole'
// }

/* Convert Firestore article to UI format for RenderArticle - currently unused
// This adapter should ensure the object passed to RenderArticle has the fields RenderArticle expects.
const adaptFirestoreArticle = (firestoreArticle: any): any => { // Using 'any' for return type temporarily due to unknown FirestoreArticle structure
  const slug = firestoreArticle.slug || (firestoreArticle.title || 'untitled').toLowerCase().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
  const now = new Date().toISOString();

  // Base fields required by RenderArticle's BaseArticleInfo
  const adapted = {
    id: firestoreArticle.id || '', // CRITICAL: Ensure 'id' is present
    _id: firestoreArticle.id || '', // Keep for compatibility if RenderArticle or other parts use it
    title: firestoreArticle.title || 'Untitled Article',
    slug: slug,
    authorId: firestoreArticle.authorId, // Assuming authorId is on FirestoreArticle
    authorName: firestoreArticle.authorName || 'Unknown Author',
    coverImageUrl: firestoreArticle.coverImage || null,
    tags: firestoreArticle.tags || [],
    likes: firestoreArticle.likes || [],
    createdAt: firestoreArticle.createdAt ? firestoreArticle.createdAt.toDate().toISOString() : now,
    updatedAt: firestoreArticle.updatedAt ? firestoreArticle.updatedAt.toDate().toISOString() : now,
    excerpt: firestoreArticle.excerpt || '',

    // Fields for SimpleArticle vs ComplexArticle differentiation by RenderArticle
    // RenderArticle will use its type guards (isSimple, isComplex)
    // We pass both `body` and a potential `content` array if Firestore structure supports it.
    body: firestoreArticle.body || '', // For SimpleArticle path in RenderArticle
    content: firestoreArticle.content || undefined, // For ComplexArticle path if 'content' is an array in Firestore
                                                       // If firestoreArticle.content is not an array, RenderArticle's isComplex will be false.
    
    // Other optional fields RenderArticle might use from ComplexArticle type
    reposts: firestoreArticle.reposts || [],
    viewCount: firestoreArticle.viewCount || 0,
  };

  // If firestoreArticle.content is indeed an array of paragraphs, map it.
  // This specific mapping logic might be too complex for the adapter if FirestoreArticle's content isn't already structured as Paragraph[].
  // For now, we pass it as is, and RenderArticle's isComplex will determine how to use it or 'body'.
  // If `firestoreArticle.content` is an array and matches Paragraph structure, it will be used.
  // Otherwise, RenderArticle's `isSimple` path will likely take over using `adapted.body`.

  return adapted;
};
*/

function Article() {
  const params = useSearchParams()
  // const router = useRouter() // Unused
  const slug = params?.get('slug')
  
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const [articleHtml, setArticleHtml] = useState<string | null>(null)
  const [likes, setLikes] = useState<string[]>([])
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  
  // Mood detection state
  const [mood, setMood] = useState<'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic'>('reflective')
  const [moodFeatureEnabled, setMoodFeatureEnabled] = useState(true)
  
  // Initialize window width on client side for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Load mood feature preference from localStorage (only for authenticated users)
  useEffect(() => {
    if (isAuthenticated) {
      const savedPreference = localStorage.getItem('moodFeatureEnabled')
      console.log('Loading mood feature preference from localStorage for authenticated user:', savedPreference);
      if (savedPreference !== null) {
        const enabled = JSON.parse(savedPreference);
        console.log('Setting mood feature enabled to:', enabled);
        setMoodFeatureEnabled(enabled)
      } else {
        console.log('No saved preference found for authenticated user, using default: true');
        setMoodFeatureEnabled(true);
      }
    } else {
      console.log('User not authenticated, disabling mood feature');
      setMoodFeatureEnabled(false);
    }
  }, [isAuthenticated])

  // 🚫 REMOVED: No more mood toggle events that cause React re-renders and lose highlights!
  // Mood elements are now controlled by direct DOM manipulation in MoodToggle component


  
  // Check if user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user)
      setCurrentUser(user)
      
      // Note: Like status is now handled by LikeButton component
    })
    
    return () => unsubscribe()
  }, [article])
  
  // Handle clicks outside the profile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const profileMenu = document.getElementById('profile-menu');
      const profileButton = document.getElementById('profile-button');
      
      if (profileMenu && !profileMenu.contains(target) && 
          profileButton && !profileButton.contains(target)) {
        setIsProfileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Fetch article data
  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('No article slug provided')
        setIsLoading(false)
        return
      }
      
      try {
        const articleData = await getArticleBySlug(slug)
        
        if (!articleData) {
          setError('Article not found')
          setIsLoading(false)
          return
        }
        
        // Clean HTML content
        const cleanHtml = articleData.body
          .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
          .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '')
          
        setArticleHtml(cleanHtml)
        setLikes(articleData.likes || [])
        
        // Calculate read time (approx 200 words per minute)
        const wordCount = articleData.body.split(/\s+/).length
        const readTimeMinutes = Math.ceil(wordCount / 200)
        
        // Format date
        const date = articleData.createdAt 
          ? new Date(articleData.createdAt.seconds * 1000).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          : 'Unknown date'
        
        setArticle({
          id: articleData.id,
          title: articleData.title,
          authorName: articleData.authorName || 'Anonymous',
          authorId: articleData.authorId,
          createdAt: date,
          readTime: readTimeMinutes,
          likes: articleData.likes || [],
          tags: articleData.tags || [],
          slug: slug
        })
        
        setTags(articleData.tags || [])
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching article:', error)
        setError('Failed to load article')
        setIsLoading(false)
      }
    }
    
    fetchArticle()
  }, [slug])
  
  // Analyze mood when article content is loaded (only for authenticated users)
  useEffect(() => {
    if (articleHtml && isAuthenticated) {
      // Extract text from HTML for sentiment analysis
      const textContent = articleHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
      if (textContent) {
        const detectedMood = getMoodFromText(textContent)
        setMood(detectedMood)
      }
    }
  }, [articleHtml, isAuthenticated])
  
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      setIsProfileMenuOpen(false)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }
  
  // const toggleSidebar = () => {
  //   setIsSidebarCollapsed(!isSidebarCollapsed)
  // }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }
  
  // Debug console for re-renders
  console.log('🔄 Articles page Article component re-rendered at:', new Date().toLocaleTimeString());
  
  if (isLoading) {
    return (
      <div className={articleStyles.loadingContainer}>
        <div className={articleStyles.loadingIndicator}></div>
        <p>Loading article...</p>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className={articleStyles.errorContainer}>
        <p className={articleStyles.errorMessage}>{error}</p>
      </div>
    )
  }
  
  // Handle when editing is complete
  const handleUpdateComplete = () => {
    console.log('Article update complete - refreshing content');
    
    // Set editing state to false
    setIsEditing(false);
    
    // Refetch the article to show updated content without changing routes
    const refetchArticle = async () => {
      try {
        setIsLoading(true);
        
        // Add a small delay to ensure Firebase has processed the update
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const articleData = await getArticleBySlug(slug || '');
        
        if (!articleData) {
          setError('Article not found');
          setIsLoading(false);
          return;
        }
        
        // Clean HTML content
        const cleanHtml = articleData.body
          .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
          .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
          
        setArticleHtml(cleanHtml);
        setLikes(articleData.likes || []);
        
        // Calculate read time (approx 200 words per minute)
        const wordCount = articleData.body.split(/\s+/).length;
        const readTimeMinutes = Math.ceil(wordCount / 200);
        
        // Format date
        const date = articleData.createdAt 
          ? new Date(articleData.createdAt.seconds * 1000).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          : 'Unknown date';
        
        setArticle({
          id: articleData.id,
          title: articleData.title,
          authorName: articleData.authorName || 'Anonymous',
          authorId: articleData.authorId,
          createdAt: date,
          readTime: readTimeMinutes,
          likes: articleData.likes || [],
          tags: articleData.tags || [],
          slug: slug || ''
        });
        
        setTags(articleData.tags || []);
        
        console.log('Article refreshed successfully - mood feature state preserved');
      } catch (error) {
        console.error('Error refetching article:', error);
        setError('Failed to refresh article content');
      } finally {
        setIsLoading(false);
      }
    };
    
    refetchArticle();
  };

  if (isEditing && article) {
    return (
      <ArticleComposer 
        articleId={article.id} 
        onUpdateComplete={handleUpdateComplete}
        backToArticleAction={() => setIsEditing(false)}
        editingTitle={article.title}
      />
    );
  }
  
  return (
    <div 
      className={articleStyles.articlePageContainer}
      style={{ position: 'relative', backgroundColor: '#ffffff' }}
    >
      {/* Dynamic animated mood gradient overlay (always rendered but controlled by MoodToggle) */}
      {isAuthenticated && (
        <>
          {/* Primary flowing gradient */}
          <div
            data-mood-element="primary-gradient"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(45deg, 
                ${moodThemes[mood].gradientStart}40, 
                ${moodThemes[mood].gradientEnd}60, 
                ${moodThemes[mood].gradientStart}30, 
                ${moodThemes[mood].gradientEnd}50)`,
              backgroundSize: '400% 400%',
              animation: 'gradientFlow 8s ease-in-out infinite',
              filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
              zIndex: 0,
              transition: 'background-image 1s ease-in-out',
              pointerEvents: 'none',
              // Initial display controlled by localStorage preference
              display: typeof window !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? 'none' : ''
            }}
          />
          
          {/* Grain texture overlay */}
          <div
            data-mood-element="grain-texture"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 1px, transparent 1px),
                radial-gradient(circle at 45% 15%, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle at 15% 85%, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '4px 4px, 6px 6px, 3px 3px, 5px 5px',
              animation: 'grainMove 20s linear infinite',
              opacity: 0.6,
              mixBlendMode: 'soft-light',
              zIndex: 0,
              pointerEvents: 'none',
              display: typeof window !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? 'none' : ''
            }}
          />
          
          {/* Secondary wave layer */}
          <div
            data-mood-element="secondary-wave"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(ellipse at 30% 50%, 
                ${moodThemes[mood].gradientEnd}25, 
                transparent 70%), 
                radial-gradient(ellipse at 70% 80%, 
                ${moodThemes[mood].gradientStart}30, 
                transparent 70%)`,
              backgroundSize: '800% 800%',
              animation: 'waveFlow 12s linear infinite reverse',
              filter: 'contrast(1.15) blur(0.5px)',
              zIndex: 0,
              transition: 'background-image 1s ease-in-out',
              pointerEvents: 'none',
              display: typeof window !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? 'none' : ''
            }}
          />
          
          {/* Floating orbs */}
          <div
            data-mood-element="floating-orbs"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 20% 20%, 
                ${moodThemes[mood].gradientStart}20, 
                transparent 40%), 
                radial-gradient(circle at 80% 60%, 
                ${moodThemes[mood].gradientEnd}25, 
                transparent 50%),
                radial-gradient(circle at 40% 90%, 
                ${moodThemes[mood].gradientStart}15, 
                transparent 35%)`,
              animation: 'orbFloat 15s ease-in-out infinite',
              filter: 'contrast(1.2) saturate(0.9)',
              zIndex: 0,
              pointerEvents: 'none',
              display: typeof window !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? 'none' : ''
            }}
          />
          
          {/* Fine grain texture */}
          <div
            data-mood-element="fine-grain"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.02) 1deg, transparent 2deg),
                repeating-linear-gradient(90deg, transparent, rgba(0,0,0,0.01) 1px, transparent 2px),
                repeating-linear-gradient(0deg, transparent, rgba(255,255,255,0.015) 1px, transparent 3px)
              `,
              backgroundSize: '2px 2px, 1px 1px, 3px 3px',
              animation: 'fineGrain 25s linear infinite reverse',
              opacity: 0.4,
              mixBlendMode: 'overlay',
              zIndex: 0,
              pointerEvents: 'none',
              display: typeof window !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? 'none' : ''
            }}
          />
        </>
      )}
              {article && (
          <>
            <header 
              className={articleStyles.pageHeader}
              data-mood-header="page-header"
              style={moodFeatureEnabled && isAuthenticated ? {
                position: 'relative', 
                zIndex: 10000,
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.15) 0%, 
                  ${moodThemes[mood].gradientStart}12 40%, 
                  ${moodThemes[mood].gradientEnd}08 100%)`,
                backdropFilter: 'blur(24px) saturate(180%)',
                borderBottom: `1px solid ${moodThemes[mood].gradientStart}25`,
                boxShadow: `
                  0 2px 8px -2px ${moodThemes[mood].gradientStart}15,
                  0 8px 32px -8px ${moodThemes[mood].gradientStart}20,
                  inset 0 1px 0 rgba(255, 255, 255, 0.25),
                  inset 0 -1px 0 ${moodThemes[mood].gradientStart}10
                `,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `1px solid ${moodThemes[mood].gradientStart}15`,
                borderTop: 'none'
              } : { 
                position: 'relative', 
                zIndex: 10000 
              }}
            >
            <div className={articleStyles.headerContainer}>
              <Link href="/" className={articleStyles.logoLink}>
                <div 
                  className={articleStyles.headerLogo}
                  style={moodFeatureEnabled && isAuthenticated ? {
                    color: moodThemes[mood].accent,
                    fontWeight: '700',
                    textShadow: `0 0 20px ${moodThemes[mood].gradientStart}30, 0 0 40px ${moodThemes[mood].gradientStart}15`,
                    transition: 'all 0.3s ease'
                  } : {
                    fontWeight: '700'
                  }}
                >
                  Journalite
                </div>
              </Link>
              
              <div className={articleStyles.headerActions}>
                {isAuthenticated && <MinimalNotificationBell />}
                
                <div className={articleStyles.profileMenu} id="profile-menu">
                  {isAuthenticated ? (
                    <>
                      <div 
                        className={articleStyles.profileCircle} 
                        onClick={toggleProfileMenu}
                        id="profile-button"
                      >
                        {currentUser?.displayName?.charAt(0) || currentUser?.email?.charAt(0) || 'U'}
                      </div>
                      
                      {isProfileMenuOpen && (
                        <div className={articleStyles.profileDropdown}>
                          <Link href="/" className={articleStyles.dropdownItem}>Home</Link>
                          <Link href="/my-thoughts" className={articleStyles.dropdownItem}>My Thoughts</Link>
                          <Link href="/dashboard" className={articleStyles.dropdownItem}>Dashboard</Link>
                          <Link href="/write" className={articleStyles.dropdownItem}>Write a story</Link>
                          <Link href="/create-article" className={articleStyles.dropdownItem}>Create Article</Link>
                          <Link href="/explore" className={articleStyles.dropdownItem}>Explore</Link>
                          <Link href="/profile" className={articleStyles.dropdownItem}>Profile</Link>
                          <Link href="/settings" className={articleStyles.dropdownItem}>Settings</Link>
                          <button onClick={handleSignOut} className={articleStyles.dropdownItem}>Sign out</button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className={articleStyles.authButtons}>
                      <Link href="/login" className={articleStyles.loginButton}>
                        Sign in
                      </Link>
                      <Link href="/signup" className={articleStyles.signupButton}>
                        Get started
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
          
                      <div className={articleStyles.pageContainer} style={{ position: 'relative', zIndex: 1 }}>
            {/* Article header */}
            <header className={articleStyles.articleHeader}>
              <h1 className={articleStyles.articleTitle}>{article.title}</h1>
              
              <div className={articleStyles.articleMeta}>
                <div className={articleStyles.authorInfo}>
                  <div className={articleStyles.authorAvatar}>{article.authorName.charAt(0)}</div>
                  <div className={articleStyles.authorDetails}>
                    <Link 
                      href={`/user/${article.authorName.toLowerCase().replace(/\s+/g, '')}`} 
                      className={articleStyles.authorNameLink}
                    >
                      <div className={articleStyles.authorName}>{article.authorName}</div>
                    </Link>
                    <div className={articleStyles.articleDetails}>
                      {article.createdAt} · {article.readTime} min read
                    </div>
                  </div>
                </div>
                
                <div className={articleStyles.articleActions}>
                  <LikeButton 
                    articleId={article.id}
                    initialLikes={likes}
                    className={`${articleStyles.likeButton}`}
                    styles={articleStyles}
                  />
                  
                  {isAuthenticated && article.authorId === currentUser?.uid && (
                    <button 
                      className={articleStyles.editButton}
                      onClick={() => setIsEditing(true)}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
              
              {article.tags && article.tags.length > 0 && (
                <div className={articleStyles.tagContainer}>
                  {article.tags.map((tag: string, index: number) => (
                    <span key={index} className={articleStyles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </header>
            
            {/* Article content with highlights */}
            <ArticleWithHighlights 
              articleId={article.id} 
              initialHtml={articleHtml || undefined}
              isAuthenticated={isAuthenticated}
              articleTitle={article.title}
              articleSlug={article.slug}
            />
            
            {/* Comments section */}
            <div className={articleStyles.commentsContainer}>
              <CommentSection 
                articleId={article.id} 
                {...(isAuthenticated && {
                  mood: mood,
                  moodFeatureEnabled: moodFeatureEnabled
                })}
              />
            </div>
            
            {/* Related tags section */}
            <aside className={articleStyles.relatedTagsSection}>
              <h2 className={articleStyles.relatedTagsHeading}>Related Tags</h2>
              <div className={articleStyles.relatedTagsList}>
                {tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase()}`}
                    className={articleStyles.relatedTag}
                  >
                    # {tag}
                  </Link>
                ))}
              </div>
              
              <Link href='/write' className={articleStyles.writeButton}>
                Write
              </Link>
            </aside>
          </div>
        </>
      )}

      {/* Bottom Navigation - shown on all screen sizes */}
      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  )
}

export default function ArticlePage () {
  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <Article />
    </Suspense>
  )
}
