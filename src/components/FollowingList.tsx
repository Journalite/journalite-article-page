'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getFollowing, UserProfile } from '@/services/userService';
import FollowButton from './FollowButton';

interface FollowingListProps {
  userId: string;
  maxDisplay?: number;
  username?: string;
}

const FollowingList: React.FC<FollowingListProps> = ({ userId, maxDisplay = 5, username }) => {
  const [following, setFollowing] = useState<UserProfile[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFollowing = async () => {
      setIsLoading(true);
      try {
        const followingList = await getFollowing(userId, maxDisplay);
        setFollowing(followingList);
        
        if (followingList.length > 0 && 'followingCount' in followingList[0]) {
          setTotalCount(followingList[0].followingCount || 0);
        } else {
          setTotalCount(Math.max(maxDisplay, followingList.length));
        }
      } catch (err) {
        console.error('Error fetching following:', err);
        setError('Failed to load following');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFollowing();
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

  if (following.length === 0) {
    return <div className="text-gray-500 text-sm mt-2">Not following anyone yet</div>;
  }

  const displayUsername = username || (following.length > 0 && following[0].username);

  return (
    <div className="space-y-4 mt-2">
      {following.map((followedUser) => (
        <div key={followedUser.uid} className="flex items-center justify-between">
          <Link href={`/user/${followedUser.username}`} className="flex items-center group flex-1 min-w-0 mr-2 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium flex-shrink-0">
              {followedUser.firstName.charAt(0)}{followedUser.lastName.charAt(0)}
            </div>
            <div className="ml-3 overflow-hidden max-w-[calc(100%-45px)]">
              <div className="font-medium text-gray-900 group-hover:underline truncate">
                {followedUser.firstName} {followedUser.lastName}
              </div>
              <div className="text-sm text-gray-500 truncate">@{followedUser.username}</div>
            </div>
          </Link>
          <FollowButton 
            targetUserId={followedUser.uid} 
            targetUsername={followedUser.username}
            className="flex-shrink-0 min-w-[70px] text-xs px-2 py-1"
          />
        </div>
      ))}
      
      {displayUsername && totalCount > maxDisplay && (
        <Link 
          href={`/user/${displayUsername}/following`}
          className="block text-blue-600 hover:text-blue-800 text-sm font-medium pt-2 text-center"
        >
          See all {totalCount} following &rarr;
        </Link>
      )}
    </div>
  );
};

export default FollowingList; 