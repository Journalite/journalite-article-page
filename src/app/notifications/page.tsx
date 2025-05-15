'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'
import { getUserNotifications, markNotificationAsRead, markAllNotificationsAsRead, deleteNotification, Notification } from '@/firebase/notifications'
import styles from '@/styles/home.module.css'
import notificationStyles from './notifications.module.css'

export default function NotificationsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const router = useRouter()

  // Check authentication status on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isAuth = !!user
      setIsAuthenticated(isAuth)
      
      if (!isAuth) {
        router.push('/login?redirect=/notifications')
      } else {
        // Load notifications
        fetchNotifications()
      }
    })
    
    return () => unsubscribe()
  }, [router])

  // Fetch all notifications
  const fetchNotifications = async () => {
    try {
      setIsLoading(true)
      const fetchedNotifications = await getUserNotifications(false)
      setNotifications(fetchedNotifications)
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Mark notification as read
  const handleMarkAsRead = async (notification: Notification) => {
    if (!notification.id || notification.read) return
    
    try {
      await markNotificationAsRead(notification.id)
      
      // Update local state
      setNotifications(prevNotifications => 
        prevNotifications.map(n => 
          n.id === notification.id ? { ...n, read: true } : n
        )
      )
    } catch (error) {
      console.error('Error marking notification as read:', error)
    }
  }

  // Mark all notifications as read
  const handleMarkAllAsRead = async () => {
    try {
      await markAllNotificationsAsRead()
      
      // Update local state
      setNotifications(prevNotifications => 
        prevNotifications.map(n => ({ ...n, read: true }))
      )
    } catch (error) {
      console.error('Error marking all notifications as read:', error)
    }
  }

  // Delete a notification
  const handleDelete = async (notificationId: string) => {
    if (!notificationId) return
    
    try {
      await deleteNotification(notificationId)
      
      // Update local state
      setNotifications(prevNotifications => 
        prevNotifications.filter(n => n.id !== notificationId)
      )
    } catch (error) {
      console.error('Error deleting notification:', error)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const formatTime = (timestamp: any) => {
    if (!timestamp) return ''
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch (error) {
      return 'Invalid date'
    }
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading notifications...</div>
      </div>
    )
  }

  return (
    <div className={styles['three-column-layout']}>
      {/* LEFT SIDEBAR - Same as homepage */}
      <aside className={`${styles['left-sidebar']} ${isSidebarCollapsed ? styles['collapsed'] : ''}`}>
        <div className={styles['sidebar-header']}>
          <div className={styles.logo}>Journalite</div>
          <button
            className={styles['toggle-button']}
            onClick={toggleSidebar}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? "→" : "←"}
          </button>
        </div>

        <nav className={styles['vertical-nav']}>
          {isAuthenticated ? (
            // Navigation for authenticated users
            <>
              <Link href="/" className={`${styles['nav-link']} ${styles['nav-home']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Home</span>
              </Link>
              <Link href="/my-thoughts" className={`${styles['nav-link']} ${styles['nav-thoughts']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>My Thoughts</span>
              </Link>
              <Link href="/create-article" className={`${styles['nav-link']} ${styles['nav-create']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Create Article</span>
              </Link>
              <Link href="/explore" className={`${styles['nav-link']} ${styles['nav-explore']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Explore</span>
              </Link>
              <Link href="/notifications" className={`${styles['nav-link']} ${styles.active}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Notifications</span>
              </Link>
              <Link href="/my-profile" className={`${styles['nav-link']} ${styles['nav-profile']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>My Profile</span>
              </Link>
              <Link href="/settings" className={`${styles['nav-link']} ${styles['nav-settings']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Settings</span>
              </Link>
            </>
          ) : (
            // Navigation for non-authenticated users
            <>
              <Link href="/" className={`${styles['nav-link']} ${styles['nav-home']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Home</span>
              </Link>
              <Link href="/login" className={`${styles['nav-link']} ${styles['nav-login']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Login</span>
              </Link>
              <Link href="/learn" className={`${styles['nav-link']} ${styles['nav-learn']}`}>
                <span className={styles['nav-icon']}>•</span>
                <span className={styles['nav-text']}>Learn More</span>
              </Link>
            </>
          )}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles['center-column']}>
        <div className={notificationStyles.header}>
          <h1 className={notificationStyles.title}>Notifications</h1>
          {notifications.length > 0 && (
            <button 
              className={notificationStyles.markAllButton}
              onClick={handleMarkAllAsRead}
            >
              Mark all as read
            </button>
          )}
        </div>

        {notifications.length === 0 ? (
          <div className={notificationStyles.emptyState}>
            <div className={notificationStyles.emptyIcon}>🔔</div>
            <h2>No notifications yet</h2>
            <p>When you receive notifications, they will appear here.</p>
          </div>
        ) : (
          <div className={notificationStyles.notificationsList}>
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`${notificationStyles.notificationCard} ${!notification.read ? notificationStyles.unread : ''}`}
              >
                <div className={notificationStyles.notificationContent}>
                  <p className={notificationStyles.message}>{notification.message}</p>
                  <p className={notificationStyles.time}>{formatTime(notification.createdAt)}</p>
                </div>
                <div className={notificationStyles.notificationActions}>
                  <Link
                    href={`/articles?slug=${notification.articleSlug}`}
                    className={notificationStyles.viewButton}
                    onClick={() => handleMarkAsRead(notification)}
                  >
                    View
                  </Link>
                  {!notification.read && (
                    <button
                      className={notificationStyles.readButton}
                      onClick={() => handleMarkAsRead(notification)}
                    >
                      Mark as read
                    </button>
                  )}
                  <button
                    className={notificationStyles.deleteButton}
                    onClick={() => notification.id && handleDelete(notification.id)}
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
        <h2 className={styles['sidebar-heading']}>Notifications Summary</h2>
        {notifications.length > 0 && (
          <div className={notificationStyles.summary}>
            <div className={notificationStyles.statCard}>
              <span className={notificationStyles.statValue}>
                {notifications.filter(n => !n.read).length}
              </span>
              <span className={notificationStyles.statLabel}>Unread</span>
            </div>
            <div className={notificationStyles.statCard}>
              <span className={notificationStyles.statValue}>
                {notifications.length}
              </span>
              <span className={notificationStyles.statLabel}>Total</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
} 