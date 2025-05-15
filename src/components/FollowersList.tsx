'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getFollowers, UserProfile } from '@/services/userService';
import FollowButton from './FollowButton';

interface FollowersListProps {
  userId: string;
  maxDisplay?: number;
  username?: string;
}

const FollowersList: React.FC<FollowersListProps> = ({ userId, maxDisplay = 5, username }) => {
  const [followers, setFollowers] = useState<UserProfile[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      setIsLoading(true);
      try {
        const followersList = await getFollowers(userId, maxDisplay);
        setFollowers(followersList);
        
        if (followersList.length > 0 && 'followersCount' in followersList[0]) {
          setTotalCount(followersList[0].followersCount || 0);
        } else {
          setTotalCount(Math.max(maxDisplay, followersList.length));
        }
      } catch (err) {
        console.error('Error fetching followers:', err);
        setError('Failed to load followers');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFollowers();
  }, [userId, maxDisplay]);

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-3 mt-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="rounded-full bg-gray-200 h-10 w-10"></div>
            <div className="flex-1 space-y-1">
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-sm mt-2">{error}</div>;
  }

  if (followers.length === 0) {
    return <div className="text-gray-500 text-sm mt-2">No followers yet</div>;
  }

  const displayUsername = username || (followers.length > 0 && followers[0].username);

  return (
    <div className="space-y-4 mt-2">
      {followers.map((follower) => (
        <div key={follower.uid} className="flex items-center justify-between">
          <Link href={`/user/${follower.username}`} className="flex items-center group flex-1 min-w-0 mr-2 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium flex-shrink-0">
              {follower.firstName.charAt(0)}{follower.lastName.charAt(0)}
            </div>
            <div className="ml-3 overflow-hidden max-w-[calc(100%-45px)]">
              <div className="font-medium text-gray-900 group-hover:underline truncate">
                {follower.firstName} {follower.lastName}
              </div>
              <div className="text-sm text-gray-500 truncate">@{follower.username}</div>
            </div>
          </Link>
          <FollowButton 
            targetUserId={follower.uid} 
            targetUsername={follower.username} 
            className="flex-shrink-0 min-w-[70px] text-xs px-2 py-1"
          />
        </div>
      ))}
      
      {displayUsername && totalCount > maxDisplay && (
        <Link 
          href={`/user/${displayUsername}/followers`}
          className="block text-blue-600 hover:text-blue-800 text-sm font-medium pt-2 text-center"
        >
          See all {totalCount} followers &rarr;
        </Link>
      )}
    </div>
  );
};

export default FollowersList; 