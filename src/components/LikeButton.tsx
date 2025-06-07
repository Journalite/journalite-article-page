'use client'

import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';

interface LikeButtonProps {
  articleId: string;
  initialLikes?: string[];
  className?: string;
  styles?: any;
}

const LikeButton: React.FC<LikeButtonProps> = ({ 
  articleId, 
  initialLikes = [], 
  className = '',
  styles = {}
}) => {
  const [likes, setLikes] = useState<string[]>(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleLikeClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('👍 LikeButton clicked - should NOT trigger parent re-render');
    
    if (!currentUser) {
      alert('Please login to like articles');
      return;
    }

    // Optimistic update with animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    try {
      if (isLiked) {
        // Unlike
        const newLikes = likes.filter(uid => uid !== currentUser.uid);
        setLikes(newLikes);
        setIsLiked(false);
        console.log('👍 Unlike completed - likes:', newLikes.length);
        
        // Update Firestore
        const { doc, updateDoc, arrayRemove } = await import('firebase/firestore');
        const { db } = await import('@/firebase/clientApp');
        const articleRef = doc(db, 'articles', articleId);
        await updateDoc(articleRef, {
          likes: arrayRemove(currentUser.uid)
        });
      } else {
        // Like
        const newLikes = [...likes, currentUser.uid];
        setLikes(newLikes);
        setIsLiked(true);
        console.log('👍 Like completed - likes:', newLikes.length);
        
        // Update Firestore
        const { doc, updateDoc, arrayUnion } = await import('firebase/firestore');
        const { db } = await import('@/firebase/clientApp');
        const articleRef = doc(db, 'articles', articleId);
        await updateDoc(articleRef, {
          likes: arrayUnion(currentUser.uid)
        });
      }
    } catch (error) {
      console.error('Error updating like status:', error);
      // Revert on error
      if (isLiked) {
        setLikes([...likes, currentUser.uid]);
        setIsLiked(true);
      } else {
        setLikes(likes.filter(uid => uid !== currentUser.uid));
        setIsLiked(false);
      }
    }
  };

  return (
    <button 
      className={`${className} ${isLiked ? styles.liked : ''}`}
      onClick={handleLikeClick}
      aria-label={isLiked ? 'Unlike article' : 'Like article'}
      style={{
        transition: 'all 0.3s ease',
        transform: isAnimating ? 'scale(1.2)' : 'scale(1)',
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

export default React.memo(LikeButton); 