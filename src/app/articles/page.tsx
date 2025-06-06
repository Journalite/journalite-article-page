'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import styles from '@/styles/home.module.css'
import articleStyles from '@/styles/ArticlePage.module.css'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import MinimalNotificationBell from '@/components/MinimalNotificationBell'
import LeftSidebar from '@/components/LeftSidebar'
import ArticleWithHighlights from '@/components/ArticleWithHighlights'
import CommentSection from '@/components/CommentSection'
import ArticleComposer from '@/components/ArticleComposer'

// Import Firestore article service
import { getArticleBySlug } from '@/firebase/articles'

// Author mapping from homepage for consistency
const authorMapping: { [key: string]: string } = {
  '84b2f82c-1e93-498a-983e-3b30a8379e63': 'Samuel Green',
  user_002: 'Alex Martinez',
  'kristen-lee-id': 'Kristen Lee',
  'alex-wen-id': 'Alex Wen',
  'hannah-cole-id': 'Hannah Cole'
}

// Convert Firestore article to UI format for RenderArticle
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

function Article() {
  const params = useSearchParams()
  const router = useRouter()
  const slug = params?.get('slug')
  
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [articleHtml, setArticleHtml] = useState<string | null>(null)
  const [likes, setLikes] = useState<string[]>([])
  const [isLiked, setIsLiked] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  
  // Initialize window width on client side
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Check if user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user)
      setCurrentUser(user)
      
      // Check if article is liked by current user
      if (user && article?.likes) {
        setIsLiked(article.likes.includes(user.uid))
      }
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
  
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      setIsProfileMenuOpen(false)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }
  
  const handleLikeArticle = async () => {
    console.log('🔥 LIKE BUTTON CLICKED!')
    console.log('Current user:', currentUser)
    console.log('Article ID:', article?.id)
    console.log('Is liked:', isLiked)
    
    if (!currentUser) {
      alert('Please login to like articles')
      return
    }
    
    if (!article?.id) {
      console.error('❌ No article ID found')
      return
    }
    
    try {
      // Import Firestore functions at the top of the function for debugging
      const { doc, updateDoc, arrayUnion, arrayRemove } = await import('firebase/firestore')
      const { db } = await import('@/firebase/clientApp')
      
      console.log('📝 Updating Firestore...')
      
      const articleRef = doc(db, 'articles', article.id)
      
      if (isLiked) {
        console.log('👍 Removing like...')
        await updateDoc(articleRef, {
          likes: arrayRemove(currentUser.uid)
        })
        setLikes(likes.filter(uid => uid !== currentUser.uid))
        setIsLiked(false)
        console.log('✅ Like removed successfully')
      } else {
        console.log('❤️ Adding like...')
        await updateDoc(articleRef, {
          likes: arrayUnion(currentUser.uid)
        })
        setLikes([...likes, currentUser.uid])
        setIsLiked(true)
        console.log('✅ Like added successfully')
      }
      
    } catch (error) {
      console.error('❌ Error updating like status:', error)
      // Revert UI changes on error
      if (isLiked) {
        setLikes([...likes, currentUser.uid])
        setIsLiked(true)
      } else {
        setLikes(likes.filter(uid => uid !== currentUser.uid))
        setIsLiked(false)
      }
    }
  }
  
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
    console.log('Article update complete');
    // Set loading state
    setIsLoading(true);
    setIsEditing(false);
    
    // Use ID-based routing instead of slug to prevent issues when title changes
    if (article?.id) {
      window.location.href = `/articles/${article.id}/view?updated=true&t=${Date.now()}`;
    } else {
      // Fallback to current page refresh if no ID available
      window.location.reload();
    }
    
    // Fallback: Refetch the article to show updated content
    const refetchArticle = async () => {
      try {
        const articleData = await getArticleBySlug(slug || '');
        
        if (!articleData) {
          setError('Article not found');
          return;
        }
        
        // Clean HTML content
        const cleanHtml = articleData.body
          .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
          .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '')
          
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
      } catch (error) {
        console.error('Error refetching article:', error);
      }
    };
    
    refetchArticle();
  };

  if (isEditing && article) {
    return (
      <div>
        <div className={articleStyles.editingHeader}>
          <button onClick={() => setIsEditing(false)} className={articleStyles.cancelButton}>
            ← Back to Article
          </button>
          <h2>Editing: {article.title}</h2>
        </div>
        <ArticleComposer articleId={article.id} onUpdateComplete={handleUpdateComplete} />
      </div>
    );
  }
  
  return (
    <div className={articleStyles.articlePageContainer}>
      {article && (
        <>
          <header className={articleStyles.pageHeader}>
            <div className={articleStyles.headerContainer}>
              <Link href="/" className={articleStyles.logoLink}>
                <div className={articleStyles.headerLogo}>Journalite</div>
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
          
          <div className={articleStyles.pageContainer}>
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
                  <button 
                    className={`${articleStyles.likeButton} ${isLiked ? articleStyles.liked : ''}`}
                    onClick={handleLikeArticle}
                    aria-label={isLiked ? 'Unlike article' : 'Like article'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className={articleStyles.likeIcon}>
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{likes.length > 0 ? likes.length : ''}</span>
                  </button>
                  
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
            />
            
            {/* Comments section */}
            <div className={articleStyles.commentsContainer}>
              <CommentSection articleId={article.id} />
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
