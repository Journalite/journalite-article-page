'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'
import { auth, db } from '@/firebase/clientApp'
import { Article as BaseArticle, deleteArticle } from '@/firebase/articles'
import styles from '@/styles/home.module.css'
import thoughtStyles from './my-thoughts.module.css'
import NotificationBell from '@/components/NotificationBell'
import LeftSidebar from '@/components/LeftSidebar'
import TopLeftLogo from '@/components/TopLeftLogo'

// Extended article interface with status property
interface Article extends BaseArticle {
  status: 'published' | 'drafts';
}

export default function MyThoughtsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [view, setView] = useState<'published' | 'drafts'>('published')
  const [articles, setArticles] = useState<Article[]>([])
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const router = useRouter()

  // Set up window resize listener
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Use different default sidebar state based on screen size
  useEffect(() => {
    setIsSidebarCollapsed(windowWidth < 768)
  }, [windowWidth])

  // Check authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const isAuth = !!currentUser
      setIsAuthenticated(isAuth)
      setUser(currentUser)
      
      if (!isAuth) {
        // Redirect to login if not authenticated
        router.push('/login?redirect=/my-thoughts')
      } else {
        setIsLoading(false)
      }
    })
    
    return () => unsubscribe()
  }, [router])

  // Fetch user's articles
  useEffect(() => {
    const fetchArticles = async () => {
      if (!user) return
      
      try {
        setIsLoading(true)
        const articlesRef = collection(db, 'articles')
        
        let q;
        if (view === 'published') {
          // For published view, get articles that either have status=published OR have no status (for backward compatibility)
          q = query(
            articlesRef,
            where('authorId', '==', user.uid),
            orderBy('createdAt', 'desc')
          )
        } else {
          // For drafts view, only get articles explicitly marked as drafts
          q = query(
            articlesRef,
            where('authorId', '==', user.uid),
            where('status', '==', 'drafts'),
            orderBy('createdAt', 'desc')
          )
        }
        
        const querySnapshot = await getDocs(q)
        const fetchedArticles: Article[] = []
        
        querySnapshot.forEach((doc) => {
          const articleData = doc.data() as Omit<Article, 'id'>
          // For published view, only include articles that have status='published' or no status
          if (view === 'published') {
            if (!articleData.status || articleData.status === 'published') {
              fetchedArticles.push({
                id: doc.id,
                ...articleData,
                status: articleData.status || 'published' // Set default status
              })
            }
          } else {
            // For drafts view, we've already filtered by status in the query
            fetchedArticles.push({
              id: doc.id,
              ...articleData
            })
          }
        })
        
        setArticles(fetchedArticles)
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching articles:', error)
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (user && isAuthenticated) {
      fetchArticles()
    }
  }, [user, isAuthenticated, view])

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error signing out:', error)
      }
    }
  }

  const confirmDelete = (articleId: string) => {
    setArticleToDelete(articleId)
    setShowDeleteModal(true)
  }

  const handleDelete = async () => {
    if (!articleToDelete) return
    
    try {
      // Use the deleteArticle function from the articles service
      await deleteArticle(articleToDelete)
      
      // Update local state to remove the deleted article
      setArticles(articles.filter(article => article.id !== articleToDelete))
      setShowDeleteModal(false)
      setArticleToDelete(null)
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error deleting article:', error)
      }
    }
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return ''
    
    let date
    if (timestamp && typeof timestamp.toDate === 'function') {
      date = timestamp.toDate()
    } else {
      date = new Date(timestamp)
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getExcerpt = (text: string, maxLength = 120) => {
    if (!text) return '';
    
    // Strip HTML tags if present
    const stripHtml = (html: string) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || '';
    };
    
    // Check if the text appears to be HTML
    const cleanText = text.includes('<') && text.includes('>') ? stripHtml(text) : text;
    
    if (cleanText.length <= maxLength) return cleanText;
    
    return cleanText.substring(0, maxLength).trim() + '...';
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.container}>
        <p>Please log in to view your articles.</p>
        <Link href="/login?redirect=/my-thoughts" className={styles.loginLink}>
          Login Now
        </Link>
      </div>
    )
  }

  return (
    <div className={styles['three-column-layout']}>
      {/* TOP LEFT LOGO */}
      <TopLeftLogo />
      
      {/* LEFT SIDEBAR */}
      <LeftSidebar 
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        toggleSidebar={toggleSidebar}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      {/* MAIN CONTENT */}
      <main className={styles['center-column']}>
        {/* Header Section - Liquid Glass */}
        <div className={`${styles['glass-container']} mb-8 p-8`}>
          <div className={styles['glass-highlight']} />
          
          <div className={styles['glass-content']}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-stone-800 mb-2 font-serif">My Thoughts</h1>
                <p className="text-stone-600 text-lg">Your personal collection of ideas and insights</p>
              </div>
              <Link 
                href="/create-article" 
                className={`${styles['glass-button']} ${styles['glass-button-primary']} flex items-center gap-2 px-6 py-3 font-semibold`}
              >
                + New Article
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs Section - Liquid Glass */}
        <div className={`${styles['glass-nav-container']} mb-8 p-2 flex gap-2`}>
          <button
            className={`${styles['glass-nav-button']} ${view === 'published' ? 'active' : ''} flex-1 px-6 py-3`}
            onClick={() => setView('published')}
          >
            Published
          </button>
          <button
            className={`${styles['glass-nav-button']} ${view === 'drafts' ? 'active' : ''} flex-1 px-6 py-3`}
            onClick={() => setView('drafts')}
          >
            Drafts
          </button>
        </div>

        {/* Articles Content */}
        {articles.length === 0 ? (
          <div className={`${styles['glass-empty-state']}`}>
            <div className="text-6xl mb-4">✍️</div>
            <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif">
              No {view} articles yet
            </h3>
            <p className="text-stone-600 mb-8 text-lg">
              {view === 'published' 
                ? "When you publish your articles, they'll appear here." 
                : "Save your work as drafts to continue later."
              }
            </p>
            <Link 
              href="/create-article" 
              className={`${styles['glass-button']} ${styles['glass-button-primary']} inline-flex items-center gap-2 px-8 py-4 font-semibold`}
            >
              Create Your First Article
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <div key={article.id} className={`${styles['glass-card']} p-6`}>
                <div className={styles['glass-card-highlight']} />
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-stone-800 mb-2 font-serif hover:text-blue-600 transition-colors">
                      <Link href={`/articles?slug=${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-stone-500 mb-3 text-sm">
                      {formatDate(article.createdAt)}
                    </p>
                    <p className="text-stone-600 mb-4 text-base leading-relaxed">
                      {getExcerpt(article.body)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags?.map((tag, index) => (
                        <span key={index} className={styles['glass-tag']}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-6">
                    <Link 
                      href={`/articles?slug=${article.slug}`} 
                      className={`${styles['glass-button']} ${styles['glass-button-success']} px-4 py-2 text-sm font-medium`}
                    >
                      View
                    </Link>
                    <Link 
                      href={`/edit-article?id=${article.id}`} 
                      className={`${styles['glass-button']} ${styles['glass-button-primary']} px-4 py-2 text-sm font-medium`}
                    >
                      Edit
                    </Link>
                    <button
                      className={`${styles['glass-button']} ${styles['glass-button-danger']} px-4 py-2 text-sm font-medium`}
                      onClick={() => confirmDelete(article.id || '')}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        {/* Stats Container - Liquid Glass */}
        <div className={`${styles['glass-container']} mb-6 p-6`}>
          <div className={styles['glass-highlight']} />
          
          <div className={styles['glass-content']}>
            <h2 className="text-xl font-bold text-stone-800 mb-4 font-serif">Your Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone-600">Published</span>
                <span className="text-2xl font-bold text-green-600">
                  {articles.filter(a => a.status === 'published').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-600">Drafts</span>
                <span className="text-2xl font-bold text-blue-600">
                  {articles.filter(a => a.status === 'drafts').length}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <NotificationBell />
        
        <Link 
          href="/create-article" 
          className={`${styles['glass-button']} ${styles['glass-button-primary']} block w-full px-6 py-4 text-center font-semibold mt-4`}
        >
          Write
        </Link>
      </aside>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className={styles['glass-modal-overlay']}>
          <div className={`${styles['glass-modal']} p-8`}>
            <h3 className="text-xl font-bold text-red-700 mb-4 font-serif">Confirm Delete</h3>
            <p className="text-stone-700 mb-6">
              Are you sure you want to delete this article? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                className={`${styles['glass-button']} flex-1 px-4 py-3 font-medium`}
                onClick={() => {
                  setShowDeleteModal(false)
                  setArticleToDelete(null)
                }}
              >
                Cancel
              </button>
              <button 
                className={`${styles['glass-button']} ${styles['glass-button-danger']} flex-1 px-4 py-3 font-medium`}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}