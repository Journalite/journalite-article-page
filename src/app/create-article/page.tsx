'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'
import ArticleComposer from '@/components/ArticleComposer'
import MobileBottomNav from '@/components/MobileBottomNav'
import styles from '@/styles/home.module.css'

export default function CreateArticlePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user)
      setIsLoading(false)
      
      // If not authenticated after checking, redirect to login
      if (!user) {
        router.push('/login?redirect=/create-article')
      }
    })
    
    return () => unsubscribe()
  }, [router])

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
        <p>You must be logged in to create an article.</p>
        <Link href="/login?redirect=/create-article" className={styles.loginLink}>
          Login Now
        </Link>
      </div>
    )
  }

  return (
    <div>
      <ArticleComposer />
      {/* Bottom Navigation - shown on all screen sizes */}
      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  )
} 