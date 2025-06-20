'use client'

import React from 'react';
import Link from 'next/link';
import { getInitials } from '@/utils/avatarUtils';

interface ProfileCardProps {
  profile: {
    uid: string;
    username: string;
    firstName: string;
    lastName: string;
    bio?: string;
  };
  isOwn?: boolean;
}

export default function ProfileCard({ profile, isOwn = false }: ProfileCardProps) {
  return (
    <div className={`max-w-sm mx-2 my-1 ${isOwn ? 'ml-auto' : 'mr-auto'}`}>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        {/* Profile Header */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {getInitials(profile.firstName, profile.lastName)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                {profile.firstName} {profile.lastName}
              </h3>
              <p className="text-sm text-gray-600 truncate">@{profile.username}</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-4">
          {profile.bio && (
            <p className="text-sm text-gray-700 mb-3 line-clamp-3">
              {profile.bio}
            </p>
          )}
          
          <Link
            href={`/user/${encodeURIComponent(profile.username.toLowerCase())}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            View Profile
          </Link>
        </div>
      </div>

      {/* Small indicator showing this is a shared profile */}
      <div className="text-xs text-gray-500 text-center mt-1">
        📋 Shared Profile
      </div>
    </div>
  );
} 