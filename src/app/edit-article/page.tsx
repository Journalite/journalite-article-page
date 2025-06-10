'use client'

import React, { useState, useEffect, Suspense, cache } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'
import ArticleComposer from '@/components/ArticleComposer'
import styles from '@/styles/home.module.css'

// Create a cached version of useSearchParams
const getSearchParams = cache(() => {
  const searchParams = useSearchParams();
  return searchParams;
});

// Component to safely use search params inside Suspense
function EditArticleContent() {
  // Get search params using the cached function
  const params = getSearchParams();
  const articleId = params?.get('id') || '';
  
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

  return (
    <ArticleComposer articleId={articleId} />
  )
}

export default function EditArticlePage() {
  // Wrap the component that uses useSearchParams in Suspense
  return (
    <Suspense fallback={<div className={styles.container}><div className={styles.loading}>Loading...</div></div>}>
      <EditArticleContent />
    </Suspense>
  )
} 