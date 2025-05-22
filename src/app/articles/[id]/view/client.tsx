'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged } from 'firebase/auth'
import ArticleWithHighlights from '@/components/ArticleWithHighlights'
import CommentSection from '@/components/CommentSection'
import ArticleComposer from '@/components/ArticleComposer'
import { getArticleById, Article } from '@/firebase/articles'
import styles from '@/styles/ArticlePage.module.css'

interface ArticleViewClientProps {
  id: string
}

// Separate component that uses useSearchParams
function ArticleViewContent({ id }: ArticleViewClientProps) {
  const searchParams = useSearchParams()
  const isUpdated = searchParams?.get('updated') === 'true'
  const articleId = id
  
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [articleHtml, setArticleHtml] = useState<string | null>(null)
  const [likes, setLikes] = useState<string[]>([])
  const [isLiked, setIsLiked] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  
  // Set up authentication listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      
      // Check if article is liked by current user
      if (user && article?.likes) {
        setIsLiked(article.likes.includes(user.uid))
      }
    })
    
    return () => unsubscribe()
  }, [article])
  
  // SIMPLE DIRECT ARTICLE LOADING BY ID - no more complexity
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        console.log(`Directly loading article by ID: ${articleId}, timestamp: ${Date.now()}`)
        setIsLoading(true)
        
        // Force fetch fresh data with no caching
        const articleData = await getArticleById(articleId)
        
        if (!articleData) {
          setError('Article not found')
          setIsLoading(false)
          return
        }
        
        console.log('Successfully loaded article:', articleData.title)
        
        // Get the HTML content
        const cleanHtml = articleData.body || ''
        setArticleHtml(cleanHtml)
        setLikes(articleData.likes || [])
        
        // Calculate read time
        const wordCount = articleData.body ? articleData.body.split(/\s+/).length : 0
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
          tags: articleData.tags || []
        })
        
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading article:', error)
        setError('Failed to load article')
        setIsLoading(false)
      }
    }
    
    fetchArticle()
  }, [articleId, isUpdated])
  
  const handleLikeArticle = async () => {
    if (!currentUser) {
      alert('Please login to like articles')
      return
    }
    
    try {
      if (isLiked) {
        setLikes(likes.filter(uid => uid !== currentUser.uid))
        setIsLiked(false)
      } else {
        setLikes([...likes, currentUser.uid])
        setIsLiked(true)
      }
    } catch (error) {
      console.error('Error updating like status:', error)
    }
  }
  
  const handleEditClick = () => {
    setIsEditing(true)
  }
  
  const handleCancelEdit = () => {
    setIsEditing(false)
  }
  
  // Very simple update handler
  const handleUpdateComplete = () => {
    window.location.reload()
  }
  
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingIndicator}></div>
        <p>Loading article...</p>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    )
  }
  
  if (isEditing) {
    return (
      <div>
        <div className={styles.editingHeader}>
          <button onClick={handleCancelEdit} className={styles.cancelButton}>
            ← Back to Article
          </button>
          <h2>Editing: {article?.title}</h2>
        </div>
        <ArticleComposer articleId={articleId} onUpdateComplete={handleUpdateComplete} />
      </div>
    )
  }
  
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.backLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Home
          </Link>
          <div className={styles.headerLogo}>Journalite</div>
        </div>
      </header>
      
      <div className={styles.pageContainer}>
        {article && (
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            
            <div className={styles.articleMeta}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>{article.authorName.charAt(0)}</div>
                <div className={styles.authorDetails}>
                  <div className={styles.authorName}>{article.authorName}</div>
                  <div className={styles.articleDetails}>
                    {article.createdAt} · {article.readTime} min read
                  </div>
                </div>
              </div>
              
              <div className={styles.articleActions}>
                <button 
                  className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
                  onClick={handleLikeArticle}
                  aria-label={isLiked ? 'Unlike article' : 'Like article'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className={styles.likeIcon}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{likes.length > 0 ? likes.length : ''}</span>
                </button>
              
                {currentUser && article.authorId === currentUser.uid && (
                  <button 
                    className={styles.editButton}
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
            
            {article.tags && article.tags.length > 0 && (
              <div className={styles.tagContainer}>
                {article.tags.map((tag: string, index: number) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </header>
        )}
        
        <ArticleWithHighlights 
          articleId={articleId} 
          initialHtml={articleHtml || undefined}
        />
        
        <div className={styles.commentsContainer}>
          <CommentSection articleId={articleId} />
        </div>
      </div>
    </>
  )
}

// Main client component with Suspense boundary
export default function ArticleViewClient({ id }: ArticleViewClientProps) {
  return (
    <Suspense fallback={<div className={styles.loadingContainer}>Loading article...</div>}>
      <ArticleViewContent id={id} />
    </Suspense>
  )
} 