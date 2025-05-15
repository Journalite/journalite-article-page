'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'
import EditArticleForm from '@/components/EditArticleForm'
import styles from '@/styles/home.module.css'

export default function EditArticlePage() {
  const params = useSearchParams()
  const articleId = params?.get('id') || ''
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isAuth = !!user
      setIsAuthenticated(isAuth)
      setIsLoading(false)
      
      // Redirect to login if not authenticated
      if (!isAuth) {
        router.push(`/login?redirect=/edit-article?id=${articleId}`)
      }
    })
    
    return () => unsubscribe()
  }, [articleId, router])

  // Check if we have an article ID
  useEffect(() => {
    if (!isLoading && isAuthenticated && !articleId) {
      router.push('/my-thoughts')
    }
  }, [articleId, isAuthenticated, isLoading, router])

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
        <div className={styles.loading}>Please log in to edit articles.</div>
      </div>
    )
  }

  if (!articleId) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>No article ID provided.</div>
      </div>
    )
  }

  return <EditArticleForm articleId={articleId} />
} 