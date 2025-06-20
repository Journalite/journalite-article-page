'use client'

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '@/firebase/clientApp';
import { useReflectionRoom, ReflectionMessage } from './useReflectionRoom';
import { TrashIcon } from '@/components/icons/CustomIcons';
import styles from './ReflectionRoom.module.css';

interface ReflectionRoomSidebarProps {
  articleId: string;
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
  authorId?: string;
}

const ReflectionRoomSidebar: React.FC<ReflectionRoomSidebarProps> = ({
  articleId,
  isOpen,
  onClose,
  isMobile,
  authorId
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingMessageId, setDeletingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const {
    messages,
    topic,
    loading,
    error,
    sendMessage,
    deleteMessage,
    unreadCount,
    markAllAsRead
  } = useReflectionRoom(articleId);

  const currentUser = auth.currentUser;

  // Memoize animation variants to prevent recreation
  const sidebarVariants = useMemo(() => ({
    closed: {
      x: '100%',
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    }
  }), []);

  const mobileVariants = useMemo(() => ({
    closed: {
      y: '100%',
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
    }
  }), []);

  // Optimize transition settings
  const transitionSettings = useMemo(() => ({
    type: "tween" as const,
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
  }), []);

  // Auto-scroll to bottom when new messages arrive (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [messages.length]); // Only depend on message count, not full messages array

  // Mark messages as read when sidebar is opened
  useEffect(() => {
    if (isOpen && unreadCount > 0) {
      const timeoutId = setTimeout(() => {
        markAllAsRead();
      }, 500); // Delay to avoid marking as read too quickly

      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, unreadCount, markAllAsRead]);

  // Auto-resize textarea (optimized)
  const handleTextareaResize = useCallback(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    handleTextareaResize();
  }, [newMessage, handleTextareaResize]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isSubmitting || !currentUser) return;

    setIsSubmitting(true);
    try {
      await sendMessage(newMessage.trim());
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [newMessage, isSubmitting, currentUser, sendMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  }, [handleSubmit]);

  const formatMessageTime = useCallback((timestamp: any) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    }
  }, []);

  const handleDeleteMessage = useCallback(async (messageId: string) => {
    if (!currentUser || deletingMessageId) return;

    setDeletingMessageId(messageId);
    try {
      await deleteMessage(messageId);
    } catch (error) {
      console.error('Error deleting message:', error);
      // You could add a toast notification here for better UX
    } finally {
      setDeletingMessageId(null);
    }
  }, [currentUser, deleteMessage, deletingMessageId]);

  // Memoize message rendering to prevent unnecessary re-renders
  const renderedMessages = useMemo(() => {
    return messages.map((message: ReflectionMessage) => {
      const isOwnMessage = message.userId === currentUser?.uid;
      const isAuthorMessage = message.userId === authorId;
      const isDeleting = deletingMessageId === message.id;
      
      return (
        <div
          key={message.id}
          className={`${styles.message} ${
            isOwnMessage ? styles.ownMessage : styles.otherMessage
          } ${isAuthorMessage ? styles.authorMessage : ''} ${
            isDeleting ? styles.messageDeleting : ''
          }`}
        >
          <div className={styles.messageHeader}>
            <span className={`${styles.userName} ${isAuthorMessage ? styles.authorName : ''}`}>
              {message.userName}
              {isAuthorMessage && (
                <span className={styles.authorBadge}>Author</span>
              )}
            </span>
            <div className={styles.messageHeaderRight}>
              <span className={styles.messageTime}>
                {formatMessageTime(message.createdAt)}
              </span>
              {isOwnMessage && (
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteMessage(message.id)}
                  disabled={isDeleting}
                  aria-label="Delete message"
                  title="Delete message"
                >
                  {isDeleting ? (
                    <div className={styles.deleteSpinner}></div>
                  ) : (
                    <TrashIcon size={14} />
                  )}
                </button>
              )}
            </div>
          </div>
          <div className={styles.messageContent}>
            {message.content}
          </div>
        </div>
      );
    });
  }, [messages, currentUser?.uid, authorId, formatMessageTime, deletingMessageId, handleDeleteMessage]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            className={`${styles.sidebar} ${isMobile ? styles.mobileModal : ''}`}
            variants={isMobile ? mobileVariants : sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={transitionSettings}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerTitle}>
                <h3>Reflection Room</h3>
                <button 
                  className={styles.closeButton}
                  onClick={onClose}
                  aria-label="Close reflection room"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Discussion Topic */}
              {topic && (
                <div className={styles.topicSection}>
                  <div className={styles.topicLabel}>Discussion Topic</div>
                  <div className={styles.topicText}>{topic}</div>
                </div>
              )}
            </div>

            {/* Messages */}
            <div className={styles.messagesContainer}>
              {loading ? (
                <div className={styles.loadingState}>
                  <div className={styles.loadingSpinner}></div>
                  <p>Loading messages...</p>
                </div>
              ) : error ? (
                <div className={styles.errorState}>
                  <p>Error loading messages: {error}</p>
                </div>
              ) : messages.length === 0 ? (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>💭</div>
                  <p>No messages yet. Be the first to share your thoughts!</p>
                </div>
              ) : (
                <div className={styles.messagesList}>
                  {renderedMessages}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Message Input */}
            {currentUser && (
              <form onSubmit={handleSubmit} className={styles.messageForm}>
                <div className={styles.inputContainer}>
                  <textarea
                    ref={textareaRef}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Share your thoughts..."
                    className={styles.messageInput}
                    rows={1}
                    maxLength={1000}
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className={styles.sendButton}
                    disabled={!newMessage.trim() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className={styles.sendingSpinner}></div>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
                <div className={styles.characterCount}>
                  {newMessage.length}/1000
                </div>
              </form>
            )}
            
            {!currentUser && (
              <div className={styles.authPrompt}>
                <p>Please sign in to join the conversation</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReflectionRoomSidebar; 