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
        console.error('Error fetching articles:', error)
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
      console.error('Error signing out:', error)
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
      console.error('Error deleting article:', error)
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
      {/* LEFT SIDEBAR */}
      <LeftSidebar 
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        toggleSidebar={toggleSidebar}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      {/* MAIN CONTENT */}
      <main className={styles['center-column']}>
        <div className={thoughtStyles.header}>
          <h1 className={thoughtStyles.title}>My Thoughts</h1>
          <div className={thoughtStyles.actions}>
            <Link href="/create-article" className={thoughtStyles.createButton}>
              New Article
            </Link>
          </div>
        </div>

        <div className={thoughtStyles.tabs}>
          <button
            className={`${thoughtStyles.tabButton} ${
              view === 'published' ? thoughtStyles.active : ''
            }`}
            onClick={() => setView('published')}
          >
            Published
          </button>
          <button
            className={`${thoughtStyles.tabButton} ${
              view === 'drafts' ? thoughtStyles.active : ''
            }`}
            onClick={() => setView('drafts')}
          >
            Drafts
          </button>
        </div>

        {articles.length === 0 ? (
          <div className={thoughtStyles.emptyState}>
            <p>You don't have any {view} articles yet.</p>
            {view === 'published' ? (
              <p>When you publish your articles, they will appear here.</p>
            ) : (
              <p>Save your work as drafts to continue later.</p>
            )}
            <Link href="/create-article" className={thoughtStyles.emptyStateButton}>
              Create Your First Article
            </Link>
          </div>
        ) : (
          <div className={thoughtStyles.articlesList}>
            {articles.map((article) => (
              <div key={article.id} className={thoughtStyles.articleCard}>
                <div className={thoughtStyles.articleContent}>
                  <h2 className={thoughtStyles.articleTitle}>
                    <Link href={`/articles?slug=${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className={thoughtStyles.articleDate}>
                    {formatDate(article.createdAt)}
                  </p>
                  <p className={thoughtStyles.articleExcerpt}>
                    {getExcerpt(article.body)}
                  </p>
                  <div className={thoughtStyles.articleTags}>
                    {article.tags?.map((tag, index) => (
                      <span key={index} className={thoughtStyles.articleTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={thoughtStyles.articleActions}>
                  <Link href={`/articles?slug=${article.slug}`} className={thoughtStyles.viewButton}>
                    View
                  </Link>
                  <Link 
                    href={`/edit-article?id=${article.id}`} 
                    className={thoughtStyles.editButton}
                  >
                    Edit
                  </Link>
                  <button
                    className={thoughtStyles.deleteButton}
                    onClick={() => confirmDelete(article.id || '')}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>Your Stats</h2>
        <NotificationBell />
        <div className={thoughtStyles.statsContainer}>
          <div className={thoughtStyles.statCard}>
            <span className={thoughtStyles.statValue}>
              {articles.filter(a => a.status === 'published').length}
            </span>
            <span className={thoughtStyles.statLabel}>Published</span>
          </div>
          <div className={thoughtStyles.statCard}>
            <span className={thoughtStyles.statValue}>
              {articles.filter(a => a.status === 'drafts').length}
            </span>
            <span className={thoughtStyles.statLabel}>Drafts</span>
          </div>
        </div>
        <Link href="/create-article" className={styles['write-button']}>
          Write
        </Link>
      </aside>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className={thoughtStyles.modalOverlay}>
          <div className={thoughtStyles.modal}>
            <h3 className={thoughtStyles.modalTitle}>Confirm Delete</h3>
            <p className={thoughtStyles.modalText}>
              Are you sure you want to delete this article? This action cannot be undone.
            </p>
            <div className={thoughtStyles.modalButtons}>
              <button
                className={thoughtStyles.cancelButton}
                onClick={() => {
                  setShowDeleteModal(false)
                  setArticleToDelete(null)
                }}
              >
                Cancel
              </button>
              <button className={thoughtStyles.confirmButton} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}