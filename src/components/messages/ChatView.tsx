'use client'

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { ConversationWithUser, Message, subscribeToMessages, sendMessage, sendProfileMessage, sendArticleMessage, markMessagesAsRead } from '@/services/messagesService';
import { searchUsers } from '@/services/userService';
import { getInitials, getUserGradient } from '@/utils/avatarUtils';
import UserMentionDropdown from './UserMentionDropdown';
import { getArticleBySlug } from '@/firebase/articles';
import { getEncryptionService } from '@/services/encryptionService';
import { fetchArticleMetadata, ArticleMetadata } from '@/services/linkPreviewService';
import clsx from 'clsx';
import { getUserProfile } from '@/services/userService';
import { ENABLE_E2EE } from '@/config';
import { PaperAirplaneIcon, PhotoIcon, FaceSmileIcon, PlusIcon } from '@heroicons/react/24/outline';

interface ChatViewProps {
  conversation: ConversationWithUser;
  currentUserId: string;
  isMobile?: boolean;
}

// Add a new type to hold decrypted content alongside the message
interface DisplayMessage extends Message {
  decryptedContent?: string;
}

export default function ChatView({ conversation, currentUserId, isMobile = false }: ChatViewProps) {
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
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

  // Article sharing state
  const [detectedArticleUrl, setDetectedArticleUrl] = useState<string | null>(null);
  const [showArticlePreview, setShowArticlePreview] = useState(false);
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);
  const [articleMetadata, setArticleMetadata] = useState<ArticleMetadata | null>(null);

  // Smart scrolling state
  const [userInteracting, setUserInteracting] = useState(false);
  const [lastMessageCount, setLastMessageCount] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Footer (input bar) height for dynamic padding
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  // Fetch user encryption preference
  const [globalEncryptionEnabled, setGlobalEncryptionEnabled] = useState<boolean>(true);

  // Encryption state
  const [encryptionInitialized, setEncryptionInitialized] = useState(false);
  const [encryptionAvailable, setEncryptionAvailable] = useState(false);
  const [otherUserHasEncryption, setOtherUserHasEncryption] = useState(false);
  const [decryptedMessages, setDecryptedMessages] = useState<Map<string, string>>(new Map());

  const MOBILE_INPUT_HEIGHT = 72; // px, approx after padding



  // Initialize encryption
  useEffect(() => {
    if (ENABLE_E2EE) {
      const initEncryption = async () => {
        try {
          const encryptionService = getEncryptionService();
          const initialized = await encryptionService.initializeEncryption();
          setEncryptionInitialized(initialized);
          setEncryptionAvailable(encryptionService.isEncryptionAvailable());
          
          if (initialized && conversation?.otherUser?.uid) {
            const hasEncryption = await encryptionService.hasEncryptionEnabled(conversation.otherUser.uid);
            setOtherUserHasEncryption(hasEncryption);
          }
        } catch (error) {
          console.error('Error initializing encryption:', error);
        }
      };

      if (currentUserId) {
        initEncryption();
      }
    } else {
      // Encryption disabled – mark as ready but unavailable
      setEncryptionInitialized(true);
      setEncryptionAvailable(false);
      setOtherUserHasEncryption(false);
    }
  }, [currentUserId, conversation?.otherUser?.uid]);

  // Fetch user encryption preference
  useEffect(() => {
    const fetchPref = async () => {
      try {
        const profile = await getUserProfile(currentUserId);
        setGlobalEncryptionEnabled(profile?.encryptionEnabled ?? true);
      } catch (error) {
        console.error('Error fetching user encryption preference:', error);
      }
    };

    if (currentUserId) {
    fetchPref();
    }
  }, [currentUserId]);

  // Subscribe to messages
  useEffect(() => {
    if (!conversation?.conversation?.id) return;

    // Reset state when conversation changes
    setIsInitialLoad(true);
    setLastMessageCount(0);

    const unsubscribe = subscribeToMessages(conversation.conversation.id, (newMessages) => {
      setMessages(newMessages);
      setLoading(false);
      
      // Set message count for comparison
      setLastMessageCount(newMessages.length);
    });

    return unsubscribe;
  }, [conversation?.conversation?.id]);

  // Mark messages as read when conversation is selected
  useEffect(() => {
    if (!conversation?.conversation?.id || !currentUserId) return;
    
    const markAsRead = async () => {
      try {
        await markMessagesAsRead(conversation.conversation.id, currentUserId);
      } catch (error) {
        console.error('Error marking messages as read:', error);
      }
    };

    markAsRead();
  }, [conversation?.conversation?.id, currentUserId]);

  // Handle input change for @ mentions and article detection
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewMessage(value);

    // Check for @ mentions
    const atIndex = value.lastIndexOf('@');
    if (atIndex !== -1) {
      const afterAt = value.substring(atIndex + 1);
      const spaceIndex = afterAt.indexOf(' ');
      const searchTerm = spaceIndex === -1 ? afterAt : afterAt.substring(0, spaceIndex);
      
      if (searchTerm.length > 0) {
        setMentionSearchTerm(searchTerm);
        setShowMentionDropdown(true);
        handleMentionSearch(searchTerm);
      } else {
        setShowMentionDropdown(false);
      }
    } else {
      setShowMentionDropdown(false);
    }

    // Check for article URLs (including localhost)
    const articleRegex = /https?:\/\/[^\s]+/g;
    const matches = value.match(articleRegex);
    if (matches && matches.length > 0) {
      const url = matches[0];
      // Check if it's a supported article URL
      if (url.includes('/articles/') || url.includes('/guardian-news/') || url.includes('/news/')) {
        setDetectedArticleUrl(url);
        setShowArticlePreview(true);
        handleArticleUrlDetection(url);
      } else {
        setDetectedArticleUrl(null);
        setShowArticlePreview(false);
        setArticleMetadata(null);
      }
    } else {
      setDetectedArticleUrl(null);
      setShowArticlePreview(false);
      setArticleMetadata(null);
    }
  };

  // Handle @ mention search
  const handleMentionSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setMentionSearchResults([]);
      return;
    }

    setIsMentionSearching(true);
    try {
      const results = await searchUsers(searchTerm);
      // Filter out current user
      const filteredResults = results.filter(user => user.uid !== currentUserId);
      setMentionSearchResults(filteredResults);
    } catch (error) {
      console.error('Error searching users:', error);
      setMentionSearchResults([]);
    } finally {
      setIsMentionSearching(false);
      }
  };

  // Handle user selection from mention dropdown
  const handleUserSelect = async (user: any) => {
    setSending(true);
    try {
      await sendProfileMessage(
        conversation.conversation.id,
        conversation.otherUser.uid,
        user
      );
      setNewMessage('');
      setShowMentionDropdown(false);
    } catch (error) {
      console.error('Error sending profile message:', error);
    } finally {
      setSending(false);
    }
  };

  // Handle article URL detection and metadata fetching
  const handleArticleUrlDetection = async (url: string) => {
    if (!url.trim()) return;

    setIsLoadingArticle(true);
    try {
      const metadata = await fetchArticleMetadata(url);
      setArticleMetadata(metadata);
    } catch (error) {
      console.error('Error fetching article metadata:', error);
      setArticleMetadata(null);
    } finally {
      setIsLoadingArticle(false);
    }
  };

  // Send article message
  const handleSendArticle = async () => {
    if (!articleMetadata || sending) return;

    setSending(true);
    try {
      await sendArticleMessage(
        conversation.conversation.id,
        conversation.otherUser.uid,
        articleMetadata
      );
      setNewMessage('');
      setDetectedArticleUrl(null);
      setShowArticlePreview(false);
      setArticleMetadata(null);
    } catch (error) {
      console.error('Error sending article message:', error);
    } finally {
      setSending(false);
    }
  };

  // Handle message sending
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    // If there's an article preview, send the article instead
    if (showArticlePreview && articleMetadata) {
      await handleSendArticle();
      return;
    }
    
    if (!newMessage.trim()) return;

    setSending(true);
    try {
      await sendMessage(
        conversation.conversation.id,
        conversation.otherUser.uid,
        newMessage.trim(),
        'text',
        ENABLE_E2EE && globalEncryptionEnabled
      );
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  // Smart auto-scroll to bottom
  useEffect(() => {
    if (!messagesEndRef.current) return;

    if (isInitialLoad) {
      // For initial load, scroll immediately to bottom without animation
      messagesEndRef.current.scrollIntoView({ behavior: 'instant' });
      setIsInitialLoad(false);
    } else if (messages.length > lastMessageCount) {
      // Only scroll smoothly for new messages after initial load
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isInitialLoad, lastMessageCount]);

  const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        });
    } catch (error) {
      return '';
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (date.toDateString() === today.toDateString()) {
        return 'Today';
      } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
      } else {
        return date.toLocaleDateString('en-US', { 
          weekday: 'long',
          month: 'short', 
          day: 'numeric' 
        });
      }
    } catch (error) {
      return '';
    }
  };

  // Group messages by date
  const groupedMessages = messages.reduce((groups: { [key: string]: DisplayMessage[] }, message) => {
    const date = formatDate(message.timestamp);
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-400 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-200/50">
          <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white text-sm" style={{
            background: `linear-gradient(135deg, ${getUserGradient(conversation.otherUser.uid, conversation.otherUser.username)})`,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
          }}>
              {getInitials(conversation.otherUser.firstName, conversation.otherUser.lastName)}
            </div>
            <div>
            <h2 className="text-lg font-semibold text-slate-800">
              {conversation.otherUser.firstName} {conversation.otherUser.lastName}
              </h2>
            <p className="text-sm text-slate-600">@{conversation.otherUser.username}</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {Object.entries(groupedMessages).map(([date, dateMessages]) => (
          <div key={date}>
            {/* Date separator */}
            <div className="flex items-center justify-center mb-4">
              <div className="px-3 py-1 rounded-full text-xs font-medium text-slate-600" style={{
                background: 'rgba(148, 163, 184, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                {date}
              </div>
            </div>

            {/* Messages for this date */}
            <div className="space-y-3">
              {dateMessages.map((message) => {
            const isOwnMessage = message.senderId === currentUserId;
                
                return (
                  <div
                    key={message.id}
                    className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} items-end space-x-2`}
                  >
                    {/* Avatar for received messages */}
                    {!isOwnMessage && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-white text-xs" style={{
                        background: `linear-gradient(135deg, ${getUserGradient(conversation.otherUser.uid, conversation.otherUser.username)})`,
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                      }}>
                      {getInitials(conversation.otherUser.firstName, conversation.otherUser.lastName)}
                    </div>
                  )}
                  
                    {/* Message bubble */}
                    <div
                      className={`max-w-xs lg:max-w-md rounded-2xl ${
                        isOwnMessage ? 'rounded-br-md' : 'rounded-bl-md'
                      } ${message.type === 'profile' || message.type === 'article' ? 'p-0' : 'px-4 py-2'}`}
                      style={{
                        background: isOwnMessage 
                          ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                          : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: !isOwnMessage ? 'blur(10px)' : 'none',
                        WebkitBackdropFilter: !isOwnMessage ? 'blur(10px)' : 'none',
                        border: !isOwnMessage ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        hyphens: 'auto'
                      }}
                    >
                      {/* Profile Message */}
                      {message.type === 'profile' && message.profileAttachment && (
                        <div className="p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white text-sm" style={{
                              background: isOwnMessage 
                                ? 'linear-gradient(135deg, #1e40af, #1e3a8a)'
                                : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                            }}>
                              {getInitials(message.profileAttachment.firstName, message.profileAttachment.lastName)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className={`font-semibold ${isOwnMessage ? 'text-white' : 'text-slate-800'}`}>
                                {message.profileAttachment.firstName} {message.profileAttachment.lastName}
                              </h3>
                              <p className={`text-sm ${isOwnMessage ? 'text-white/80' : 'text-slate-600'}`}>
                                @{message.profileAttachment.username}
                              </p>
                            </div>
                          </div>
                          
                          {message.profileAttachment.bio && (
                            <p className={`text-sm mb-3 ${isOwnMessage ? 'text-white/90' : 'text-slate-700'}`}>
                              {message.profileAttachment.bio}
                            </p>
                          )}
                          
                          <Link
                            href={`/user/${encodeURIComponent(message.profileAttachment.username.toLowerCase())}`}
                            className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              isOwnMessage 
                                ? 'bg-white/20 text-white hover:bg-white/30' 
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            View Profile
                          </Link>
                        </div>
                      )}
                      
                      {/* Article Message */}
                      {message.type === 'article' && message.articleAttachment && (
                        <div className="overflow-hidden">
                          {/* Article Image */}
                          {message.articleAttachment.coverImageUrl && (
                            <div className="aspect-video w-full overflow-hidden">
                              <img 
                                src={message.articleAttachment.coverImageUrl} 
                                alt={message.articleAttachment.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          
                          <div className="p-4">
                            <div className="flex items-start space-x-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                isOwnMessage ? 'bg-white/20' : 'bg-blue-100'
                              }`}>
                                <svg className={`w-5 h-5 ${isOwnMessage ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className={`font-semibold text-sm leading-tight mb-1 ${isOwnMessage ? 'text-white' : 'text-slate-800'}`}>
                                  {message.articleAttachment.title}
                                </h3>
                                
                                {message.articleAttachment.excerpt && (
                                  <p className={`text-xs mb-2 line-clamp-2 ${isOwnMessage ? 'text-white/80' : 'text-slate-600'}`}>
                                    {message.articleAttachment.excerpt}
                                  </p>
                                )}
                                
                                <div className={`flex items-center space-x-3 text-xs ${isOwnMessage ? 'text-white/70' : 'text-slate-500'}`}>
                                  {message.articleAttachment.authorName && (
                                    <div className="flex items-center">
                                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                      </svg>
                                      {message.articleAttachment.authorName}
                                    </div>
                      )}
                                  
                                  {message.articleAttachment.readTime && (
                                    <div className="flex items-center">
                                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      {message.articleAttachment.readTime} min read
                    </div>
                  )}
                </div>
                              </div>
                            </div>
                            
                            <Link
                              href={message.articleAttachment.isExternal && message.articleAttachment.externalUrl 
                                ? message.articleAttachment.externalUrl.includes('theguardian.com')
                                  ? `/guardian-news/${message.articleAttachment.externalUrl.split('/').slice(3).join('/')}`
                                  : `/news/${encodeURIComponent(message.articleAttachment.externalUrl)}`
                                : `/articles/${message.articleAttachment.slug}`
                              }
                              className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                isOwnMessage 
                                  ? 'bg-white/20 text-white hover:bg-white/30' 
                                  : 'bg-blue-600 text-white hover:bg-blue-700'
                              }`}
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Read Article
                            </Link>
                          </div>
                        </div>
                      )}
                      
                      {/* Regular Text Message */}
                      {message.type === 'text' && (
                        <>
                          <p 
                            className={`text-sm ${isOwnMessage ? 'text-white' : 'text-slate-800'}`}
                            style={{
                              wordWrap: 'break-word',
                              overflowWrap: 'break-word',
                              wordBreak: 'break-word',
                              whiteSpace: 'pre-wrap',
                              hyphens: 'auto'
                            }}
                          >
                            {message.content}
                          </p>
                          <p className={`text-xs mt-1 ${isOwnMessage ? 'text-white/70' : 'text-slate-600'}`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </>
                      )}
                      
                      {/* Timestamp for special message types */}
                      {(message.type === 'profile' || message.type === 'article') && (
                        <div className="px-3 pb-2">
                          <p className={`text-xs ${isOwnMessage ? 'text-white/70' : 'text-slate-600'}`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Spacer for sent messages */}
                    {isOwnMessage && <div className="w-8"></div>}
              </div>
            );
              })}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-slate-200/50">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={handleInputChange}
              placeholder="Type a message... (@ to mention users)"
              className="w-full px-4 py-3 rounded-2xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.1)'
              }}
              disabled={sending}
            />
            
            {/* User Mention Dropdown */}
          {showMentionDropdown && (
            <UserMentionDropdown
              users={mentionSearchResults}
                onUserSelect={handleUserSelect}
              isLoading={isMentionSearching}
              searchTerm={mentionSearchTerm}
            />
          )}
          
            {/* Article Preview */}
            {showArticlePreview && (
              <div className="absolute bottom-full left-0 right-0 mb-2 rounded-2xl" style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
              }}>
              {isLoadingArticle ? (
                  <div className="p-4 text-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mx-auto mb-2"></div>
                    <p className="text-sm text-slate-600">Loading article preview...</p>
                </div>
              ) : articleMetadata ? (
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-800 text-sm leading-tight mb-1">
                        {articleMetadata.title}
                        </h3>
                        
                      {articleMetadata.excerpt && (
                          <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                          {articleMetadata.excerpt}
                        </p>
                      )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-xs text-slate-500">
                        {articleMetadata.authorName && (
                          <span>{articleMetadata.authorName}</span>
                        )}
                        {articleMetadata.readTime && (
                          <span>{articleMetadata.readTime} min read</span>
                        )}
                          </div>
                          
                          <button
                            onClick={handleSendArticle}
                            disabled={sending}
                            className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-sm text-slate-500">Unable to load article preview</p>
                  </div>
                )}
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={!newMessage.trim() || sending}
            className={`p-3 rounded-full transition-all duration-200 ${
              newMessage.trim() && !sending
                ? 'hover:scale-110 shadow-lg'
                : 'opacity-50 cursor-not-allowed'
            }`}
            style={{
              background: newMessage.trim() && !sending
                ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                : 'rgba(148, 163, 184, 0.3)',
              boxShadow: newMessage.trim() && !sending
                ? '0 4px 16px rgba(59, 130, 246, 0.4)'
                : 'none'
            }}
          >
            <PaperAirplaneIcon className={`h-5 w-5 ${newMessage.trim() && !sending ? 'text-white' : 'text-slate-500'}`} />
            </button>
          </form>
      </div>
    </div>
  );
} 