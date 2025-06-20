'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { getTotalUnreadCount, subscribeToConversations } from '@/services/messagesService';
import styles from './MessageNotificationBell.module.css';

const MessageNotificationBell: React.FC = () => {
  const [user] = useAuthState(auth);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Update unread count with real-time subscription
  useEffect(() => {
    if (!user) return;

    const updateUnreadCount = async () => {
      try {
        const count = await getTotalUnreadCount(user.uid);
        setUnreadCount(count);
      } catch (error) {
        console.error('Error getting message unread count:', error);
      }
    };

    // Initial load
    updateUnreadCount();

    // Use real-time subscription instead of polling to reduce memory usage
    const unsubscribe = subscribeToConversations(user.uid, (conversations) => {
      const total = conversations.reduce((total, conv) => total + conv.unreadCount, 0);
      setUnreadCount(total);
    });

    // Fallback polling with longer interval (reduced from 30s to 120s)
    const interval = setInterval(updateUnreadCount, 120000); // Increased from 30s to 2 minutes

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [user]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (!user) return null;

  return (
    <div className={styles.container} ref={notificationRef}>
      <Link href="/messages">
        <button 
          className={styles.button} 
          onClick={handleToggle}
          aria-label="Messages"
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          
          {unreadCount > 0 && (
            <span className={styles.badge}>{unreadCount}</span>
          )}
        </button>
      </Link>
      
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <h3>Messages</h3>
            <Link href="/messages" className={styles.viewAll}>
              View All
            </Link>
          </div>
          
          <div className={styles.content}>
            {unreadCount === 0 ? (
              <div className={styles.empty}>
                No new messages
              </div>
            ) : (
              <div className={styles.messageInfo}>
                <p className={styles.message}>
                  You have {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
                </p>
                <Link href="/messages" className={styles.viewLink}>
                  Go to Messages
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageNotificationBell; 