'use client'

import React from 'react';
import { ConversationWithUser } from '@/services/messagesService';
import { getInitials } from '@/utils/avatarUtils';

interface ConversationsListProps {
  conversations: ConversationWithUser[];
  selectedConversation: ConversationWithUser | null;
  onConversationSelect: (conversation: ConversationWithUser) => void;
  loading: boolean;
  isMobile?: boolean;
}

export default function ConversationsList({
  conversations,
  selectedConversation,
  onConversationSelect,
  loading,
  isMobile = false
}: ConversationsListProps) {
  const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      const now = new Date();
      const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
      
      if (diffInHours < 24) {
        return date.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        });
      } else if (diffInHours < 168) { // Less than a week
        return date.toLocaleDateString('en-US', { weekday: 'short' });
      } else {
        return date.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        });
      }
    } catch (error) {
      console.warn('Error formatting timestamp:', error);
      return '';
    }
  };

  const truncateMessage = (message: string, limit: number = 60) => {
    if (message.length <= limit) return message;
    return message.substring(0, limit) + '...';
  };

  if (loading) {
    return (
      <div className="p-4">
        {/* Loading skeleton */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-3 p-3 mb-2">
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-gray-900 mb-1">No conversations yet</h3>
          <p className="text-xs text-gray-500">Start a new conversation to get messaging.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isMobile ? 'px-0' : 'p-0'}`}>
      {conversations.map((item) => {
        const isSelected = selectedConversation?.conversation.id === item.conversation.id;
        const lastMessage = item.conversation.lastMessage;
        
        return (
          <button
            key={item.conversation.id}
            onClick={() => onConversationSelect(item)}
            className={`w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
              isSelected ? 'bg-blue-50 border-blue-200' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {getInitials(item.otherUser.firstName, item.otherUser.lastName)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className={`text-sm font-medium truncate ${
                    item.unreadCount > 0 ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {item.otherUser.firstName} {item.otherUser.lastName}
                  </p>
                  <div className="flex items-center space-x-2">
                    {item.unreadCount > 0 && (
                      <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {item.unreadCount > 99 ? '99+' : item.unreadCount}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">
                      {formatTime(lastMessage.timestamp)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <p className={`text-sm truncate ${
                    item.unreadCount > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'
                  }`}>
                    {lastMessage.content ? truncateMessage(lastMessage.content) : 'No messages yet'}
                  </p>
                </div>
                
                <p className="text-xs text-gray-400 mt-1">
                  @{item.otherUser.username}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
} 