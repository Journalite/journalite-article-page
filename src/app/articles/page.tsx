'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import styles from '@/styles/home.module.css'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import NotificationBell from '@/components/NotificationBell'
import LeftSidebar from '@/components/LeftSidebar'

// Import Firestore article service
import { getArticleBySlug, Article as FirestoreArticle } from '@/firebase/articles'
import RenderArticle from '@/components/RenderArticle'

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
const adaptFirestoreArticle = (firestoreArticle: FirestoreArticle): any => { // Using 'any' for return type temporarily due to unknown FirestoreArticle structure
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
    likes: (firestoreArticle as any).likes || [], // Cast to any if 'likes' is not on FirestoreArticle type
    createdAt: firestoreArticle.createdAt ? firestoreArticle.createdAt.toDate().toISOString() : now,
    updatedAt: (firestoreArticle as any).updatedAt ? (firestoreArticle as any).updatedAt.toDate().toISOString() : (firestoreArticle.createdAt ? firestoreArticle.createdAt.toDate().toISOString() : now),
    excerpt: (firestoreArticle as any).excerpt || '',

    // Fields for SimpleArticle vs ComplexArticle differentiation by RenderArticle
    // RenderArticle will use its type guards (isSimple, isComplex)
    // We pass both `body` and a potential `content` array if Firestore structure supports it.
    body: firestoreArticle.body || '', // For SimpleArticle path in RenderArticle
    content: (firestoreArticle as any).content || undefined, // For ComplexArticle path if 'content' is an array in Firestore
                                                       // If firestoreArticle.content is not an array, RenderArticle's isComplex will be false.
    
    // Other optional fields RenderArticle might use from ComplexArticle type
    reposts: (firestoreArticle as any).reposts || [],
    viewCount: (firestoreArticle as any).viewCount || 0,
  };

  // If firestoreArticle.content is indeed an array of paragraphs, map it.
  // This specific mapping logic might be too complex for the adapter if FirestoreArticle's content isn't already structured as Paragraph[].
  // For now, we pass it as is, and RenderArticle's isComplex will determine how to use it or 'body'.
  // If `(firestoreArticle as any).content` is an array and matches Paragraph structure, it will be used.
  // Otherwise, RenderArticle's `isSimple` path will likely take over using `adapted.body`.

  return adapted;
};

function Article () {
  const params = useSearchParams()
  const slug = params?.get('slug')
  
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  
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
    })
    
    return () => unsubscribe()
  }, [])
  
  // Fetch article data
  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('No article slug provided')
        setIsLoading(false)
        return
      }
      
      try {
        const firestoreArticle = await getArticleBySlug(slug)
        
        if (!firestoreArticle) {
          setError('Article not found')
          setIsLoading(false)
          return
        }
        
        // Transform the data format for the RenderArticle component
        const transformedArticle = adaptFirestoreArticle(firestoreArticle)
        
        setArticle(transformedArticle)
        setTags(firestoreArticle.tags || [])
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
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }
  
  return (
    <div className={styles['three-column-layout']}>
      {/* Background overlay for mobile */}
      {windowWidth < 768 && !isSidebarCollapsed && (
        <div className={`${styles['menu-overlay']} ${styles['active']}`} onClick={toggleSidebar}></div>
      )}
      
      {/* LEFT SIDEBAR */}
      <LeftSidebar 
        isAuthenticated={isAuthenticated} 
        handleLogout={handleSignOut} 
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

      {/* CENTER COLUMN - Use the original RenderArticle component */}
      <main className={styles['center-column']}>
        {isLoading ? (
          <div className={styles['loading']}>Loading article...</div>
        ) : error ? (
          <div className={styles['loading']}>Error: {error}</div>
        ) : article ? (
          <RenderArticle article={article} />
        ) : (
          <div className={styles['loading']}>Article not found</div>
        )}
      </main>

      {/* RIGHT SIDEBAR - Same structure as homepage */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>Related Tags</h2>
        {isAuthenticated && <NotificationBell />}
        <div className={styles['tag-list']}>
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/tag/${tag.toLowerCase()}`}
              className={styles['trending-tag']}
            >
              # {tag}
            </Link>
          ))}
        </div>
        
        {/* Show Edit button only if user is the author */}
        {isAuthenticated && article && auth.currentUser?.uid === article.authorId && (
          <Link 
            href={`/edit-article?id=${article._id}`} 
            className={styles['edit-button']}
          >
            Edit Article
          </Link>
        )}
        
        <Link href='/write' className={styles['write-button']}>
          Write
        </Link>
      </aside>
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
