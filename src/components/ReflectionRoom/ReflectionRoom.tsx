'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { auth } from '@/firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';
import ReflectionRoomButton from './ReflectionRoomButton';
import ReflectionRoomSidebar from './ReflectionRoomSidebar';
import { useReflectionRoom } from './useReflectionRoom';
import styles from './ReflectionRoom.module.css';

interface ReflectionRoomProps {
  articleId: string;
  hasReflectionRoom: boolean;
  authorId?: string;
}

const ReflectionRoom: React.FC<ReflectionRoomProps> = ({ 
  articleId, 
  hasReflectionRoom,
  authorId
}) => {
  // Early return for feature flag before any hooks are called
  if (!hasReflectionRoom) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const { topic, unreadCount } = useReflectionRoom(articleId);

  // Memoize callbacks to prevent unnecessary re-renders
  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeRoom = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Authentication state management
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  // Mobile detection with debouncing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Memoize the topic fallback to prevent unnecessary renders
  const displayTopic = useMemo(() => {
    return topic || 'Join the discussion';
  }, [topic]);

  // Return null if user is not authenticated, but all hooks have been called
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.reflectionRoomContainer}>
      <ReflectionRoomButton 
        topic={displayTopic}
        unreadCount={unreadCount}
        isOpen={isOpen}
        onClick={toggleOpen}
      />

      <ReflectionRoomSidebar
        articleId={articleId}
        isOpen={isOpen}
        onClose={closeRoom}
        isMobile={isMobile}
        authorId={authorId}
      />
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(ReflectionRoom, (prevProps, nextProps) => {
  return (
    prevProps.articleId === nextProps.articleId &&
    prevProps.hasReflectionRoom === nextProps.hasReflectionRoom &&
    prevProps.authorId === nextProps.authorId
  );
}); 