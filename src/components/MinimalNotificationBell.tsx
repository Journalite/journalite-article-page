'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { getUnreadNotificationsCount, getUserNotifications, markNotificationAsRead, Notification } from '@/firebase/notifications'
import styles from './MinimalNotificationBell.module.css'

/**
 * A minimalistic notification bell component designed for the article page header
 */
const MinimalNotificationBell = () => {
  const [unreadCount, setUnreadCount] = useState<number>(0)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const notificationRef = useRef<HTMLDivElement>(null)

  // Fetch unread count on mount
  useEffect(() => {
    const fetchUnreadCount = async () => {
      const count = await getUnreadNotificationsCount()
      setUnreadCount(count)
    }

    fetchUnreadCount()
    
    // Refresh every minute
    const interval = setInterval(fetchUnreadCount, 60000)
    return () => clearInterval(interval)
  }, [])

  // Handle clicks outside the dropdown
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

  const getNotificationLink = (notification: Notification) => {
    if (notification.type === 'follow') {
      if (notification.fromUser?.username) {
        return `/user/${notification.fromUser.username}`;
      }
      return '/notifications';
    } else if (notification.articleSlug) {
      return `/articles/${notification.articleSlug}`;
    } else {
      return '/notifications';
    }
  }

  return (
    <div className={styles.container} ref={notificationRef}>
      <button 
        className={styles.button} 
        onClick={handleToggle}
        aria-label="Notifications"
      >
        <svg 
          className={styles.icon} 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        
        {unreadCount > 0 && (
          <span className={styles.badge}>{unreadCount}</span>
        )}
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <h3>Notifications</h3>
            {notifications.length > 0 && (
              <Link href="/notifications" className={styles.viewAll}>
                View All
              </Link>
            )}
          </div>
          
          <div className={styles.list}>
            {notifications.length === 0 ? (
              <div className={styles.empty}>
                No notifications yet
              </div>
            ) : (
              notifications.slice(0, 5).map((notification) => (
                <Link 
                  href={getNotificationLink(notification)} 
                  key={notification.id}
                  className={`${styles.item} ${!notification.read ? styles.unread : ''}`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className={styles.content}>
                    <p className={styles.message}>
                      {notification.message}
                    </p>
                    <span className={styles.time}>
                      {formatTime(notification.createdAt)}
                    </span>
                  </div>
                  {!notification.read && (
                    <div className={styles.dot}></div>
                  )}
                </Link>
              ))
            )}
          </div>
          
          {notifications.length > 5 && (
            <div className={styles.footer}>
              <Link href="/notifications" className={styles.seeMore}>
                See more notifications
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default MinimalNotificationBell 