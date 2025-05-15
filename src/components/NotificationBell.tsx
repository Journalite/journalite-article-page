'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { getUnreadNotificationsCount, getUserNotifications, markNotificationAsRead, Notification } from '@/firebase/notifications'
import styles from './NotificationBell.module.css'

const NotificationBell = () => {
  const [unreadCount, setUnreadCount] = useState<number>(0)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const notificationRef = useRef<HTMLDivElement>(null)

  // Fetch unread count on mount and set up interval
  useEffect(() => {
    const fetchUnreadCount = async () => {
      const count = await getUnreadNotificationsCount()
      setUnreadCount(count)
    }

    // Fetch immediately
    fetchUnreadCount()

    // Set up polling every 60 seconds
    const interval = setInterval(fetchUnreadCount, 60000)

    // Clear interval on unmount
    return () => clearInterval(interval)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Fetch notifications when dropdown is opened
  useEffect(() => {
    if (isOpen) {
      fetchNotifications()
    }
  }, [isOpen])

  const fetchNotifications = async () => {
    try {
      const fetchedNotifications = await getUserNotifications(false)
      setNotifications(fetchedNotifications)
    } catch (error) {
      console.error('Error fetching notifications:', error)
    }
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleNotificationClick = async (notification: Notification) => {
    try {
      if (!notification.read && notification.id) {
        await markNotificationAsRead(notification.id)
        
        // Update local state
        setUnreadCount(prev => Math.max(prev - 1, 0))
        setNotifications(prev => 
          prev.map(n => 
            n.id === notification.id 
              ? { ...n, read: true } 
              : n
          )
        )
      }
    } catch (error) {
      console.error('Error marking notification as read:', error)
    }
  }

  const formatTime = (timestamp: any) => {
    if (!timestamp) return ''
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    const now = new Date()
    const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffMinutes < 1) return 'Just now'
    if (diffMinutes < 60) return `${diffMinutes}m ago`
    
    const diffHours = Math.floor(diffMinutes / 60)
    if (diffHours < 24) return `${diffHours}h ago`
    
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 7) return `${diffDays}d ago`
    
    return date.toLocaleDateString()
  }

  // Get the appropriate link for different notification types
  const getNotificationLink = (notification: Notification) => {
    if (notification.type === 'follow') {
      // For follow notifications, link to the user's profile
      return `/user/${notification.fromUser.name.split(' ')[0]}`;
    } else if (notification.articleSlug) {
      // For article-related notifications (comments, likes, etc.)
      return `/articles?slug=${notification.articleSlug}`;
    } else {
      // Default to notifications page
      return '/notifications';
    }
  }

  return (
    <div className={styles.notificationContainer} ref={notificationRef}>
      <button className={styles.bellButton} onClick={handleToggle}>
        <span className={styles.bellIcon}>🔔</span>
        {unreadCount > 0 && (
          <span className={styles.unreadBadge}>{unreadCount}</span>
        )}
      </button>
      
      {isOpen && (
        <div className={styles.notificationDropdown}>
          <div className={styles.notificationHeader}>
            <h3>Notifications</h3>
            {notifications.length > 0 && (
              <Link href="/notifications" className={styles.viewAllLink}>
                View All
              </Link>
            )}
          </div>
          
          <div className={styles.notificationList}>
            {notifications.length === 0 ? (
              <div className={styles.emptyState}>
                No notifications yet
              </div>
            ) : (
              notifications.slice(0, 5).map((notification) => (
                <Link 
                  href={getNotificationLink(notification)} 
                  key={notification.id}
                  className={`${styles.notificationItem} ${!notification.read ? styles.unread : ''}`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className={styles.notificationContent}>
                    <p className={styles.notificationMessage}>
                      {notification.message}
                    </p>
                    <span className={styles.notificationTime}>
                      {formatTime(notification.createdAt)}
                    </span>
                  </div>
                  {!notification.read && (
                    <div className={styles.unreadDot}></div>
                  )}
                </Link>
              ))
            )}
          </div>
          
          {notifications.length > 5 && (
            <div className={styles.notificationFooter}>
              <Link href="/notifications" className={styles.seeMoreLink}>
                See more notifications
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default NotificationBell 