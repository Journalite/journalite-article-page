'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import { isFollowing, followUser, unfollowUser } from '@/services/userService';

interface FollowButtonProps {
  targetUserId: string;
  targetUsername: string;
  className?: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ targetUserId, targetUsername, className = '' }) => {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isCurrentUserFollowing, setIsCurrentUserFollowing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [actionInProgress, setActionInProgress] = useState<boolean>(false);
  const [showNotificationFeedback, setShowNotificationFeedback] = useState<boolean>(false);
  const router = useRouter();

  // Check if current user is signed in and get their ID
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUserId(user.uid);
        // Check if current user is following the target user
        try {
          const following = await isFollowing(user.uid, targetUserId);
          setIsCurrentUserFollowing(following);
        } catch (error) {
          console.error('Error checking follow status:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setCurrentUserId(null);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [targetUserId]);

  // Hide notification feedback after 3 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showNotificationFeedback) {
      timer = setTimeout(() => {
        setShowNotificationFeedback(false);
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showNotificationFeedback]);

  // Don't show button if viewing own profile
  if (currentUserId === targetUserId) {
    return null;
  }

  const handleFollowAction = async () => {
    if (!currentUserId) {
      // Redirect to login if not signed in
      router.push('/login');
      return;
    }

    setActionInProgress(true);

    try {
      if (isCurrentUserFollowing) {
        // Unfollow action
        await unfollowUser(currentUserId, targetUserId);
        setIsCurrentUserFollowing(false);
      } else {
        // Follow action
        await followUser(currentUserId, targetUserId);
        setIsCurrentUserFollowing(true);
        // Show notification feedback
        setShowNotificationFeedback(true);
      }
    } catch (error) {
      console.error('Error with follow/unfollow action:', error);
    } finally {
      setActionInProgress(false);
    }
  };

  // Default button style with optional custom class
  const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-colors";
  const followClasses = `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`;
  const unfollowClasses = `${baseClasses} bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`;
  
  const buttonClasses = `${isCurrentUserFollowing ? unfollowClasses : followClasses} ${className}`;

  if (isLoading) {
    return (
      <button
        className={`${baseClasses} bg-gray-200 text-gray-400 cursor-not-allowed ${className}`}
        disabled
      >
        Loading...
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleFollowAction}
        disabled={actionInProgress}
        className={buttonClasses}
        aria-label={isCurrentUserFollowing ? `Unfollow ${targetUsername}` : `Follow ${targetUsername}`}
      >
        {actionInProgress ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {isCurrentUserFollowing ? 'Unfollowing...' : 'Following...'}
          </span>
        ) : (
          <span>{isCurrentUserFollowing ? 'Following' : 'Follow'}</span>
        )}
      </button>
      
      {/* Notification feedback tooltip */}
      {showNotificationFeedback && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none opacity-90 whitespace-nowrap z-10">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-800"></div>
          Notification sent to {targetUsername}
        </div>
      )}
    </div>
  );
};

export default FollowButton; 