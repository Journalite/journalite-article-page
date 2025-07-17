'use client'

import React from 'react';
import { getInitials, getUserGradient } from '@/utils/avatarUtils';

interface UserMentionDropdownProps {
  users: Array<{
    uid: string;
    username: string;
    firstName: string;
    lastName: string;
    bio?: string;
  }>;
  onUserSelect: (user: {
    uid: string;
    username: string;
    firstName: string;
    lastName: string;
    bio?: string;
  }) => void;
  isLoading?: boolean;
  searchTerm: string;
}

export default function UserMentionDropdown({ 
  users, 
  onUserSelect, 
  isLoading = false, 
  searchTerm 
}: UserMentionDropdownProps) {
  if (isLoading) {
    return (
      <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-gray-600">Searching users...</span>
        </div>
      </div>
    );
  }

  if (users.length === 0 && searchTerm.length > 0) {
    return (
      <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
        <div className="text-sm text-gray-500 text-center">
          No users found matching "@{searchTerm}"
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-64 overflow-y-auto">
      <div className="p-2">
        <div className="text-xs text-gray-500 font-medium mb-2 px-2">
          People you can mention:
        </div>
        {users.map((user) => (
          <button
            key={user.uid}
            onClick={() => onUserSelect(user)}
            className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors text-left"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm" style={{
              background: `linear-gradient(135deg, ${getUserGradient(user.uid, user.username)})`,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}>
              {getInitials(user.firstName, user.lastName)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 text-sm truncate">
                {user.firstName} {user.lastName}
              </div>
              <div className="text-xs text-gray-500 truncate">
                @{user.username}
              </div>
            </div>
            <div className="text-xs text-blue-600 font-medium">
              Send Profile
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 