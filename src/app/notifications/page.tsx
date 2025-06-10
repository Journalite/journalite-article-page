'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'
import { getUserNotifications, markNotificationAsRead, markAllNotificationsAsRead, deleteNotification, Notification } from '@/firebase/notifications'
import { NotificationIcon } from '@/components/icons/CustomIcons'
import styles from '@/styles/home.module.css'
import notificationStyles from './notifications.module.css'
import LeftSidebar from '@/components/LeftSidebar'
import TopLeftLogo from '@/components/TopLeftLogo'

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

  const handleLogout = async () => {
    try {
      await import('firebase/auth').then(({ signOut }) => signOut(auth))
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
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

  // Get the appropriate link for different notification types
  const getNotificationLink = (notification: Notification) => {
    if (notification.type === 'follow') {
      // For follow notifications, link to the user profile using their username
      if (notification.fromUser?.username) {
        return `/user/${notification.fromUser.username}`;
      }
      // Fallback to extracting username from message if not available in fromUser
      const usernameMatch = notification.message.match(/@([a-zA-Z0-9_]+)/);
      if (usernameMatch) {
        return `/user/${usernameMatch[1]}`;
      }
      // Default fallback
      return '/notifications';
    } else if (notification.articleSlug) {
      // For article-related notifications (comments, likes, etc.)
      return `/articles?slug=${notification.articleSlug}`;
    } else {
      // Default to notifications page
      return '#';
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
                            <div className={notificationStyles.emptyIcon}>
                  <NotificationIcon size={48} color="#9ca3af" />
                </div>
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
                    href={getNotificationLink(notification)}
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