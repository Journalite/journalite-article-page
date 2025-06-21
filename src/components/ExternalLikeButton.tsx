'use client'

import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';
import { ExternalArticleService } from '@/services/externalArticleService';

interface ExternalLikeButtonProps {
  externalId: string;
  source: 'guardian' | 'newsapi';
  title: string;
  url: string;
  initialLikes?: string[];
  className?: string;
  styles?: any;
}

const ExternalLikeButton: React.FC<ExternalLikeButtonProps> = ({ 
  externalId,
  source,
  title,
  url,
  initialLikes = [], 
  className = '',
  styles = {}
}) => {
  const [likes, setLikes] = useState<string[]>(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      if (user) {
        setIsLiked(likes.includes(user.uid));
      } else {
        setIsLiked(false);
      }
    });
    return () => unsubscribe();
  }, [likes]);

  // Update like status when initialLikes change
  useEffect(() => {
    setLikes(initialLikes);
    if (currentUser) {
      setIsLiked(initialLikes.includes(currentUser.uid));
    }
  }, [initialLikes, currentUser]);

  // Load current social data
  useEffect(() => {
    const loadSocialData = async () => {
      try {
        const socialData = await ExternalArticleService.getSocialData(externalId, source);
        if (socialData) {
          setLikes(socialData.likes || []);
          if (currentUser) {
            setIsLiked((socialData.likes || []).includes(currentUser.uid));
          }
        }
      } catch (error) {
        console.error('Error loading social data:', error);
      }
    };

    loadSocialData();
  }, [externalId, source, currentUser]);

  const handleLikeClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!currentUser) {
      alert('Please login to like articles');
      return;
    }

    if (isLoading) return;

    // Optimistic update with animation
    setIsAnimating(true);
    setIsLoading(true);
    setTimeout(() => setIsAnimating(false), 300);

    try {
      const result = await ExternalArticleService.toggleLike(
        externalId, 
        source, 
        currentUser.uid, 
        title, 
        url
      );
      
      // Update local state with server response
      setIsLiked(result.isLiked);
      if (result.isLiked) {
        setLikes(prev => [...prev.filter(uid => uid !== currentUser.uid), currentUser.uid]);
      } else {
        setLikes(prev => prev.filter(uid => uid !== currentUser.uid));
      }
      
      console.log(`${source} article ${result.isLiked ? 'liked' : 'unliked'} - total: ${result.totalLikes}`);
    } catch (error) {
      console.error('Error updating like status:', error);
      // Revert optimistic update on error
      setIsLiked(prev => !prev);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      className={`${className} ${isLiked ? styles.liked : ''}`}
      onClick={handleLikeClick}
      disabled={isLoading}
      aria-label={isLiked ? 'Unlike article' : 'Like article'}
      style={{
        transition: 'all 0.3s ease',
        transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
        opacity: isLoading ? 0.6 : 1
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={isLiked ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2" 
        className={styles.likeIcon}
        style={{
          transition: 'all 0.3s ease',
          filter: isAnimating ? 'drop-shadow(0 0 8px currentColor)' : 'none',
        }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span>{likes.length > 0 ? likes.length : ''}</span>
    </button>
  );
};

export default React.memo(ExternalLikeButton); 