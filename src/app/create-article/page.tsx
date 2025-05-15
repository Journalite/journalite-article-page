'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'
import ArticleForm from '@/components/ArticleForm'
import styles from '@/styles/home.module.css'

export default function CreateArticlePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Set window width on client side
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use different default sidebar state based on screen size
  useEffect(() => {
    setIsSidebarCollapsed(windowWidth < 768);
  }, [windowWidth]);

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

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
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
        <p>You must be logged in to create an article.</p>
        <Link href="/login?redirect=/create-article" className={styles.loginLink}>
          Login Now
        </Link>
      </div>
    )
  }

  return (
    <div className={styles['three-column-layout']}>
      {/* LEFT SIDEBAR */}
      <aside className={`${styles['left-sidebar']} ${isSidebarCollapsed ? styles['collapsed'] : ''}`}>
        <div className={styles['sidebar-header']}>
          <div className={styles.logo}>Journalite</div>
          <button 
            className={styles['toggle-button']} 
            onClick={toggleSidebar} 
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isSidebarCollapsed ? '→' : '←'}
          </button>
        </div>
        
        <nav className={styles['vertical-nav']}>
          <Link href="/" className={`${styles['nav-link']} ${styles['nav-home']}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Home</span>
          </Link>
          <Link href="/my-thoughts" className={`${styles['nav-link']} ${styles['nav-thoughts']}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>My Thoughts</span>
          </Link>
          <Link href="/create-article" className={`${styles['nav-link']} ${styles['nav-create']} ${styles.active}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Create Article</span>
          </Link>
          <Link href="/explore" className={`${styles['nav-link']} ${styles['nav-explore']}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Explore</span>
          </Link>
          <Link href="/my-profile" className={`${styles['nav-link']} ${styles['nav-profile']}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>My Profile</span>
          </Link>
          <button onClick={handleLogout} className={`${styles['nav-link']} ${styles['nav-logout']}`}>
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Log out</span>
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className={`${styles['center-column']} ${isSidebarCollapsed ? styles['expanded'] : ''}`}>
        <ArticleForm />
      </main>
      
      {/* RIGHT SIDEBAR */}
      <aside className={styles['right-sidebar']}>
        <h2 className={styles['sidebar-heading']}>Tips for Writing</h2>
        <div className={styles['writing-tips']}>
          <div className={styles['writing-tip']}>
            <h3>📝 Keep it clear</h3>
            <p>Use simple language and short paragraphs for better readability.</p>
          </div>
          <div className={styles['writing-tip']}>
            <h3>🔍 Check your facts</h3>
            <p>Ensure your information is accurate and from reliable sources.</p>
          </div>
          <div className={styles['writing-tip']}>
            <h3>📊 Add context</h3>
            <p>Help readers understand the bigger picture around your topic.</p>
          </div>
          <div className={styles['writing-tip']}>
            <h3>📸 Visual appeal</h3>
            <p>Adding a cover image can make your article more engaging.</p>
          </div>
        </div>
      </aside>
    </div>
  )
} 