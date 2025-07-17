'use client'

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { searchUsers, UserProfile } from '@/services/userService';
import { getOrCreateConversation, ConversationWithUser } from '@/services/messagesService';
import { getInitials, getUserGradient } from '@/utils/avatarUtils';

interface NewMessageModalProps {
  onClose: () => void;
  onConversationCreated: (conversation: ConversationWithUser) => void;
}

export default function NewMessageModal({ onClose, onConversationCreated }: NewMessageModalProps) {
  const [user] = useAuthState(auth);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  // Search for users
  useEffect(() => {
    const searchForUsers = async () => {
      if (!searchTerm.trim() || searchTerm.length < 2) {
        setSearchResults([]);
        return;
      }

      setLoading(true);
      try {
        const results = await searchUsers(searchTerm);
        // Filter out current user
        const filteredResults = results.filter(result => result.uid !== user?.uid);
        setSearchResults(filteredResults);
      } catch (error) {
        console.error('Error searching users:', error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchForUsers, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, user?.uid]);

  const handleCreateConversation = async (otherUser: UserProfile) => {
    if (!user || creating) return;

    setCreating(true);
    try {
      const conversationId = await getOrCreateConversation(user.uid, otherUser.uid);
      
      // Create conversation object for the callback
      const conversation: ConversationWithUser = {
        conversation: {
          id: conversationId,
          participants: [user.uid, otherUser.uid],
          lastMessage: {
            content: '',
            senderId: '',
            timestamp: new Date() as any,
            read: false
          },
          createdAt: new Date() as any,
          updatedAt: new Date() as any
        },
        otherUser: {
          uid: otherUser.uid,
          username: otherUser.username,
          firstName: otherUser.firstName,
          lastName: otherUser.lastName
        },
        unreadCount: 0
      };

      onConversationCreated(conversation);
    } catch (error) {
      console.error('Error creating conversation:', error);
      alert('Failed to start conversation. Please try again.');
    } finally {
      setCreating(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">New Message</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for users..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto max-h-96">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
              <p className="text-gray-600 text-sm">Searching...</p>
            </div>
          ) : searchTerm.trim() && searchTerm.length >= 2 ? (
            searchResults.length > 0 ? (
              <div className="p-2">
                {searchResults.map((result) => (
                  <button
                    key={result.uid}
                    onClick={() => handleCreateConversation(result)}
                    disabled={creating}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm" style={{
                        background: `linear-gradient(135deg, ${getUserGradient(result.uid, result.username)})`,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}>
                        {getInitials(result.firstName, result.lastName)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {result.firstName} {result.lastName}
                        </p>
                        <p className="text-sm text-gray-500">@{result.username}</p>
                        {result.bio && (
                          <p className="text-xs text-gray-400 truncate mt-1">{result.bio}</p>
                        )}
                      </div>
                      {creating && (
                        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">No users found</h3>
                <p className="text-xs text-gray-500">Try searching with a different term.</p>
              </div>
            )
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">Search for users</h3>
              <p className="text-xs text-gray-500">Type at least 2 characters to search for users to message.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 