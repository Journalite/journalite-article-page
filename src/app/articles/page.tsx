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
    authorName: firestoreArticle.authorName || 'Unknown Author',
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
  const slug = params?.get('slug')
  
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
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
  
  return (
    <div className={styles['three-column-layout']}>
      {/* LEFT SIDEBAR - Similar to homepage but with different nav items */}
      <aside className={styles['left-sidebar']}>
        <div className={styles['sidebar-header']}>
          <div className={styles.logo}>Journalite</div>
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
                <span className={styles['nav-text']}>My Articles</span>
              </Link>
              <Link
                href='/my-profile'
                className={`${styles['nav-link']} ${styles['nav-profile']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Profile</span>
              </Link>
              <Link
                href='/bookmarks'
                className={`${styles['nav-link']} ${styles['nav-bookmarks']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Bookmarks</span>
              </Link>
              <button
                onClick={handleSignOut}
                className={`${styles['nav-link']} ${styles['nav-logout']}`}
              >
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Sign Out</span>
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
