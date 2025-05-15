'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import styles from '@/styles/home.module.css'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import NotificationBell from '@/components/NotificationBell'

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

// Convert Firestore article to UI format
const adaptFirestoreArticle = (firestoreArticle: FirestoreArticle): any => {
  return {
    _id: firestoreArticle.id || '',
    title: firestoreArticle.title,
    slug: firestoreArticle.slug || '',
    authorId: firestoreArticle.authorId,
    authorName: firestoreArticle.authorName,
    coverImageUrl: firestoreArticle.coverImage,
    tags: firestoreArticle.tags,
    status: firestoreArticle.status || 'published',
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

function Article () {
  const params = useSearchParams()
  const slug = params?.get('slug') || ''
  const [article, setArticle] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    // Check Firebase authentication status
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user)
    })

    // Fetch article data
    const fetchArticle = async () => {
      try {
        setIsLoading(true)
        if (!slug) return

        // Get article from Firestore
        const firestoreArticle = await getArticleBySlug(slug)
        
        // Check if article is a draft and if current user is not the author
        if (firestoreArticle.status === 'drafts') {
          const currentUser = auth.currentUser
          if (!currentUser || currentUser.uid !== firestoreArticle.authorId) {
            setError('This article is not available')
            setIsLoading(false)
            return
          }
        }
        
        const adaptedArticle = adaptFirestoreArticle(firestoreArticle)
        
        setArticle(adaptedArticle)

        // Set tags for the right sidebar
        if (adaptedArticle && adaptedArticle.tags) {
          setTags(adaptedArticle.tags)
        }
      } catch (error) {
        console.error('Error loading article:', error)
        setError('Failed to load article')
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticle()

    // Clean up the auth listener on unmount
    return () => unsubscribe()
  }, [slug])

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      // Error handling for logout
    }
  }

  return (
    <div className={styles['three-column-layout']}>
      {/* LEFT SIDEBAR - Same as homepage */}
      <aside
        className={`${styles['left-sidebar']} ${
          isSidebarCollapsed ? styles['collapsed'] : ''
        }`}
      >
        <div className={styles['sidebar-header']}>
          <div className={styles.logo}>Journalite</div>
          <button
            className={styles['toggle-button']}
            onClick={toggleSidebar}
            aria-label={
              isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'
            }
          >
            {isSidebarCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav className={styles['vertical-nav']}>
          {isAuthenticated ? (
            // Navigation for authenticated users
            <>
              <Link
                href='/'
                className={`${styles['nav-link']} ${styles['nav-home']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Home</span>
              </Link>
              <Link
                href='/my-thoughts'
                className={`${styles['nav-link']} ${styles['nav-thoughts']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>My Thoughts</span>
              </Link>
              <Link
                href='/explore'
                className={`${styles['nav-link']} ${styles['nav-explore']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Explore</span>
              </Link>
              <Link
                href='/my-profile'
                className={`${styles['nav-link']} ${styles['nav-profile']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>My Profile</span>
              </Link>
              <Link
                href='/settings'
                className={`${styles['nav-link']} ${styles['nav-settings']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className={`${styles['nav-link']} ${styles['nav-logout']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Log out</span>
              </button>
            </>
          ) : (
            // Navigation for non-authenticated users
            <>
              <Link
                href='/'
                className={`${styles['nav-link']} ${styles['nav-home']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Home</span>
              </Link>
              <Link
                href='/login'
                className={`${styles['nav-link']} ${styles['nav-login']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Login</span>
              </Link>
              <Link
                href='/learn'
                className={`${styles['nav-link']} ${styles['nav-learn']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Learn More</span>
              </Link>
              <Link
                href='/plans'
                className={`${styles['nav-link']} ${styles['nav-plans']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Plans</span>
              </Link>
            </>
          )}
        </nav>
      </aside>

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
