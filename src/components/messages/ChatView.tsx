'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ConversationWithUser, Message, subscribeToMessages, sendMessage, sendProfileMessage, markMessagesAsRead } from '@/services/messagesService';
import { searchUsers } from '@/services/userService';
import { getInitials } from '@/utils/avatarUtils';
import ProfileCard from './ProfileCard';
import UserMentionDropdown from './UserMentionDropdown';

interface ChatViewProps {
  conversation: ConversationWithUser;
  currentUserId: string;
  isMobile?: boolean;
}

export default function ChatView({ conversation, currentUserId, isMobile = false }: ChatViewProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // @mention functionality state
  const [mentionSearchResults, setMentionSearchResults] = useState<any[]>([]);
  const [showMentionDropdown, setShowMentionDropdown] = useState(false);
  const [isMentionSearching, setIsMentionSearching] = useState(false);
  const [mentionSearchTerm, setMentionSearchTerm] = useState('');

  // Subscribe to messages
  useEffect(() => {
    if (!conversation?.conversation?.id) return;

    const unsubscribe = subscribeToMessages(
      conversation.conversation.id,
      (newMessages) => {
        setMessages(newMessages);
        setLoading(false);
        
        // Mark messages as read
        markMessagesAsRead(conversation.conversation.id, currentUserId);
      }
    );

    return unsubscribe;
  }, [conversation?.conversation?.id, currentUserId]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // @mention search effect
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (mentionSearchTerm.length >= 2) {
        setIsMentionSearching(true);
        try {
          const results = await searchUsers(mentionSearchTerm);
          // Filter out current user and the user they're chatting with
          const filteredResults = results.filter(user => 
            user.uid !== currentUserId && user.uid !== conversation.otherUser.uid
          );
          setMentionSearchResults(filteredResults);
        } catch (error) {
          console.error('Error searching users for mention:', error);
          setMentionSearchResults([]);
        } finally {
          setIsMentionSearching(false);
        }
      } else {
        setMentionSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [mentionSearchTerm, currentUserId, conversation.otherUser.uid]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewMessage(value);
    
    // Check for @mention
    const atIndex = value.lastIndexOf('@');
    if (atIndex !== -1 && atIndex === value.length - 1) {
      // Just typed @, show empty dropdown
      setShowMentionDropdown(true);
      setMentionSearchTerm('');
    } else if (atIndex !== -1) {
      const afterAt = value.substring(atIndex + 1);
      if (afterAt.length > 0 && !afterAt.includes(' ')) {
        // There's text after @ and no spaces, search for users
        setShowMentionDropdown(true);
        setMentionSearchTerm(afterAt);
      } else if (afterAt.includes(' ')) {
        // Space after @mention, hide dropdown
        setShowMentionDropdown(false);
        setMentionSearchTerm('');
      }
    } else {
      // No @ in message, hide dropdown
      setShowMentionDropdown(false);
      setMentionSearchTerm('');
    }
  };

  const handleUserMentionSelect = async (user: any) => {
    setSending(true);
    try {
      await sendProfileMessage(
        conversation.conversation.id,
        conversation.otherUser.uid,
        {
          uid: user.uid,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          bio: user.bio
        }
      );
      
      setNewMessage('');
      setShowMentionDropdown(false);
      setMentionSearchTerm('');
      
      // Focus input after sending
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (error) {
      console.error('Error sending profile message:', error);
      alert('Failed to send profile. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      await sendMessage(
        conversation.conversation.id,
        conversation.otherUser.uid,
        newMessage.trim()
      );
      setNewMessage('');
      setShowMentionDropdown(false);
      setMentionSearchTerm('');
      
      // Focus input after sending (especially important on mobile)
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const formatMessageTime = (timestamp: any) => {
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
      } else {
        return date.toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
      }
    } catch (error) {
      console.warn('Error formatting timestamp:', error);
      return 'Just now';
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm">Loading conversation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat Header - Desktop only, mobile header is handled in MessagesClient */}
      {!isMobile && (
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              {getInitials(conversation.otherUser.firstName, conversation.otherUser.lastName)}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {conversation.otherUser.firstName} {conversation.otherUser.lastName}
              </h2>
              <p className="text-sm text-gray-500">@{conversation.otherUser.username}</p>
            </div>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className={`flex-1 overflow-y-auto p-4 space-y-3 ${isMobile ? 'pb-20' : 'pb-4'}`}>
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {getInitials(conversation.otherUser.firstName, conversation.otherUser.lastName)}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {conversation.otherUser.firstName} {conversation.otherUser.lastName}
              </h3>
              <p className="text-gray-500 mb-4">@{conversation.otherUser.username}</p>
              <p className="text-sm text-gray-400">Start the conversation with a message.</p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => {
            const isOwnMessage = message.senderId === currentUserId;
            const prevMessage = messages[index - 1];
            const nextMessage = messages[index + 1];
            
            const showTime = index === 0 || 
              (prevMessage && message.timestamp && prevMessage.timestamp &&
                Math.abs(message.timestamp.toMillis() - prevMessage.timestamp.toMillis()) > 300000); // 5 minutes
            
            // Show avatar only for the OTHER person's messages and only on the LAST message in a group
            // This means: it's not our message AND (it's the last message OR the next message is from us OR there's a time gap coming up)
            const showAvatar = !isOwnMessage && (
              !nextMessage || 
              nextMessage.senderId !== message.senderId ||
              (nextMessage && nextMessage.timestamp && message.timestamp &&
                Math.abs(nextMessage.timestamp.toMillis() - message.timestamp.toMillis()) > 300000)
            );

            return (
              <div key={message.id}>
                {showTime && message.timestamp && (
                  <div className="text-center text-xs text-gray-400 my-4">
                    {formatMessageTime(message.timestamp)}
                  </div>
                )}
                
                <div className={`flex items-end ${isOwnMessage ? 'justify-end' : 'justify-start space-x-2'} mb-1`}>
                  {/* Show avatar only for other person's messages and only on the last message in a group */}
                  {showAvatar && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-xs flex-shrink-0 mb-1">
                      {getInitials(conversation.otherUser.firstName, conversation.otherUser.lastName)}
                    </div>
                  )}
                  
                  {/* Invisible spacer for grouped messages from other person */}
                  {!isOwnMessage && !showAvatar && (
                    <div className="w-8 h-8 flex-shrink-0"></div>
                  )}
                  
                  {message.type === 'profile' && message.profileAttachment ? (
                    <ProfileCard 
                      profile={message.profileAttachment} 
                      isOwn={isOwnMessage}
                    />
                  ) : (
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      isOwnMessage 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                      {!message.read && !isOwnMessage && (
                        <div className="text-xs text-blue-400 mt-1">New</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className={`p-4 border-t border-gray-200 bg-white ${isMobile ? 'pb-8' : ''}`}>
        <div className="relative">
          {/* @mention dropdown */}
          {showMentionDropdown && (
            <UserMentionDropdown
              users={mentionSearchResults}
              onUserSelect={handleUserMentionSelect}
              isLoading={isMentionSearching}
              searchTerm={mentionSearchTerm}
            />
          )}
          
          <form onSubmit={handleSendMessage} className="flex space-x-3">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={handleMessageChange}
              placeholder={`Message ${conversation.otherUser.firstName}... (Type @ to mention someone)`}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={sending}
            />
            <button
              type="submit"
              disabled={!newMessage.trim() || sending}
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              {sending ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Send'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 