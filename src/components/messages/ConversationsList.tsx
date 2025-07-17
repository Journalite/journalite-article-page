'use client'

import React from 'react';
import { ConversationWithUser } from '@/services/messagesService';
import { getInitials, getUserGradient } from '@/utils/avatarUtils';

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
      <div className="p-4 space-y-3">
        {/* Loading skeleton */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl" style={{
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)'
          }}>
            <div className="w-12 h-12 rounded-full animate-pulse" style={{
              background: 'rgba(148, 163, 184, 0.3)'
            }}></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 rounded w-3/4 animate-pulse" style={{
                background: 'rgba(148, 163, 184, 0.3)'
              }}></div>
              <div className="h-3 rounded w-1/2 animate-pulse" style={{
                background: 'rgba(148, 163, 184, 0.2)'
              }}></div>
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
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
            background: 'rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">No conversations</h3>
          <p className="text-slate-600 text-sm">Start a new conversation to begin messaging.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-2">
      {conversations.map((item) => {
        const isSelected = selectedConversation?.conversation.id === item.conversation.id;
        const hasUnreadMessages = item.unreadCount > 0;
        const lastMessage = item.conversation.lastMessage;
        
        return (
          <button
            key={item.conversation.id}
            onClick={() => onConversationSelect(item)}
            className={`w-full text-left p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] ${
              isSelected ? 'shadow-lg transform scale-[1.02]' : ''
            }`}
            style={{
              background: isSelected 
                ? 'rgba(59, 130, 246, 0.15)' 
                : 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: `1px solid ${isSelected ? 'rgba(59, 130, 246, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
              boxShadow: isSelected ? '0 8px 32px rgba(59, 130, 246, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-white" style={{
                  background: `linear-gradient(135deg, ${getUserGradient(item.otherUser.uid, item.otherUser.username)})`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}>
                  {getInitials(item.otherUser.firstName, item.otherUser.lastName)}
                </div>
                

              </div>

              {/* Conversation info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-semibold ${hasUnreadMessages ? 'text-slate-800' : 'text-slate-700'}`}>
                    {item.otherUser.firstName} {item.otherUser.lastName}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {hasUnreadMessages && (
                      <div className="w-2 h-2 rounded-full" style={{
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                      }}></div>
                    )}
                    <span className="text-xs text-slate-500">
                      {formatTime(lastMessage?.timestamp)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className={`text-sm truncate ${hasUnreadMessages ? 'text-slate-700 font-medium' : 'text-slate-600'}`}>
                    {lastMessage?.content ? truncateMessage(lastMessage.content) : 'No messages yet'}
                  </p>
                  {hasUnreadMessages && (
                    <div className="ml-2 px-2 py-1 rounded-full text-xs font-bold text-white min-w-[20px] text-center" style={{
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      boxShadow: '0 2px 8px rgba(59, 130, 246, 0.4)'
                    }}>
                      {item.unreadCount > 99 ? '99+' : item.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
} 

 