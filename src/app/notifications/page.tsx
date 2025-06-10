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
        {/* Header Section - Liquid Glass */}
        <div className={`${styles['glass-container']} mb-8 p-8`}>
          <div className={styles['glass-highlight']} />
          
          <div className={styles['glass-content']}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-stone-800 mb-2 font-serif">Notifications</h1>
                <p className="text-stone-600 text-lg">Stay updated with your latest activities</p>
              </div>
              {notifications.length > 0 && (
                <button 
                  className={`${styles['glass-button']} ${styles['glass-button-success']} flex items-center gap-2 px-6 py-3 font-semibold`}
                  onClick={handleMarkAllAsRead}
                >
                  Mark all as read
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Notifications Content */}
        {notifications.length === 0 ? (
          <div className={styles['glass-empty-state']}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{
              background: 'rgba(156, 163, 175, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <NotificationIcon size={32} color="#9ca3af" />
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-4 font-serif">No notifications yet</h2>
            <p className="text-stone-600 text-lg">When you receive notifications, they'll appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`${styles['glass-card']} ${!notification.read ? styles['glass-notification-unread'] : styles['glass-notification-read']} p-6`}
              >
                <div className={styles['glass-card-highlight']} />
                
                {/* Unread indicator */}
                {!notification.read && (
                  <div 
                    className="absolute top-4 left-4 w-3 h-3 rounded-full"
                    style={{
                      background: 'rgba(59, 130, 246, 0.8)',
                      boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)'
                    }}
                  />
                )}
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex-1" style={{ marginLeft: !notification.read ? '1rem' : '0' }}>
                    <p className="text-stone-800 mb-2 text-base leading-relaxed font-medium">
                      {notification.message}
                    </p>
                    <p className="text-stone-500 text-sm">
                      {formatTime(notification.createdAt)}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2 ml-6">
                    <Link
                      href={getNotificationLink(notification)}
                      className={`${styles['glass-button']} ${styles['glass-button-primary']} px-4 py-2 text-sm font-medium`}
                      onClick={() => handleMarkAsRead(notification)}
                    >
                      View
                    </Link>
                    {!notification.read && (
                      <button
                        className={`${styles['glass-button']} ${styles['glass-button-success']} px-4 py-2 text-sm font-medium`}
                        onClick={() => handleMarkAsRead(notification)}
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      className={`${styles['glass-button']} ${styles['glass-button-danger']} px-4 py-2 text-sm font-medium`}
                      onClick={() => notification.id && handleDelete(notification.id)}
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
        {/* Summary Container - Liquid Glass */}
        <div className={`${styles['glass-container']} mb-6 p-6`}>
          <div className={styles['glass-highlight']} />
          
          <div className={styles['glass-content']}>
            <h2 className="text-xl font-bold text-stone-800 mb-4 font-serif">Notifications Summary</h2>
            {notifications.length > 0 ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Unread</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {notifications.filter(n => !n.read).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">Total</span>
                  <span className="text-2xl font-bold text-stone-600">
                    {notifications.length}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-stone-500 text-center">No notifications yet</p>
            )}
          </div>
        </div>
      </aside>
    </div>
  )
} 