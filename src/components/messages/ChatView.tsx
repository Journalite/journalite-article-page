'use client'

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ConversationWithUser, Message, subscribeToMessages, sendMessage, sendProfileMessage, sendArticleMessage, markMessagesAsRead } from '@/services/messagesService';
import { searchUsers } from '@/services/userService';
import { getInitials } from '@/utils/avatarUtils';
import ProfileCard from './ProfileCard';
import ArticleCard from './ArticleCard';
import UserMentionDropdown from './UserMentionDropdown';
import { getArticleBySlug } from '@/firebase/articles';
import { getEncryptionService } from '@/services/encryptionService';
import { fetchArticleMetadata, ArticleMetadata } from '@/services/linkPreviewService';
import clsx from 'clsx';
import { getUserProfile } from '@/services/userService';
import { ENABLE_E2EE } from '@/config';

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
        if (profile && profile.encryptionEnabled === false) {
          setGlobalEncryptionEnabled(false);
        } else {
          setGlobalEncryptionEnabled(true);
        }
      } catch (e) {
        console.error('Failed to load encryption preference', e);
        setGlobalEncryptionEnabled(true);
      }
    };
    fetchPref();
  }, [currentUserId]);

  // Subscribe to messages
  useEffect(() => {
    if (!conversation?.conversation?.id) return;
    if (!encryptionInitialized) return; // wait until (fake) ready

    const unsubscribe = subscribeToMessages(
      conversation.conversation.id,
      async (newMessages) => {
        const encryptionService = getEncryptionService();
        const processedMessages: DisplayMessage[] = await Promise.all(
          newMessages.map(async (message) => {
            if (ENABLE_E2EE && message.isEncrypted) {
              if (message.senderId === currentUserId && 'senderEncrypted' in message && (message as any).senderEncrypted) {
                try {
                  const decryptedContent = await encryptionService.decryptMessage((message as any).senderEncrypted as string, currentUserId);
                  return { ...message, decryptedContent: decryptedContent || '🔒 Failed to decrypt' };
                } catch {
                  return { ...message, decryptedContent: '🔒 Failed to decrypt' };
                }
              }
              if (message.senderId !== currentUserId) {
                try {
                  const decryptedContent = await encryptionService.decryptMessage(message.content, message.senderId);
                  return { ...message, decryptedContent: decryptedContent || '🔒 Failed to decrypt' };
                } catch {
                  return { ...message, decryptedContent: '🔒 Failed to decrypt' };
                }
              }
            }
            return message;
          })
        );

        setMessages(processedMessages);
        setLoading(false);
        markMessagesAsRead(conversation.conversation.id, currentUserId);
      }
    );

    return unsubscribe;
  }, [conversation?.conversation?.id, currentUserId, encryptionInitialized]);

  // Smart auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const shouldAutoScroll = () => {
      // Always scroll on initial load
      if (lastMessageCount === 0) {
        return true;
      }
      
      // Don't auto-scroll if user is actively interacting (typing, sending)
      if (userInteracting) {
        return false;
      }
      
      // Auto-scroll if it's a new message (message count increased)
      if (messages.length > lastMessageCount) {
        const latestMessage = messages[messages.length - 1];
        // Only auto-scroll for new messages from others or if it's our own message
        return latestMessage?.senderId !== currentUserId || (latestMessage?.senderId === currentUserId);
      }
      
      return false;
    };

    if (shouldAutoScroll()) {
      // Use a small delay to ensure DOM is updated
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
    
    setLastMessageCount(messages.length);
  }, [messages, currentUserId, userInteracting, lastMessageCount]);

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

  // Article URL detection and metadata fetching effect
  useEffect(() => {
    const detectAndFetchArticleUrl = async () => {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      
      // Regex patterns for Journalite article URLs
      const journaliteArticlePattern = new RegExp(`${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/articles/([^\\s]+)`);
      const guardianArticlePattern = new RegExp(`${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/guardian-news/([^\\s]+)`);
      const newsArticlePattern = new RegExp(`${baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/news/([^\\s]+)`);
      
      const journaliteMatch = newMessage.match(journaliteArticlePattern);
      const guardianMatch = newMessage.match(guardianArticlePattern);
      const newsMatch = newMessage.match(newsArticlePattern);
      
      if (journaliteMatch || guardianMatch || newsMatch) {
        const detectedUrl = newMessage.trim();
        setDetectedArticleUrl(detectedUrl);
        setShowArticlePreview(true);
        setIsLoadingArticle(true);
        
        // Fetch article metadata
        try {
          const metadata = await fetchArticleMetadata(detectedUrl);
          setArticleMetadata(metadata);
        } catch (error) {
          console.error('Error fetching article metadata:', error);
          setArticleMetadata(null);
        } finally {
          setIsLoadingArticle(false);
        }
      } else {
        setDetectedArticleUrl(null);
        setShowArticlePreview(false);
        setArticleMetadata(null);
        setIsLoadingArticle(false);
      }
    };

    if (newMessage.trim()) {
      detectAndFetchArticleUrl();
    } else {
      setDetectedArticleUrl(null);
      setShowArticlePreview(false);
      setArticleMetadata(null);
      setIsLoadingArticle(false);
    }
  }, [newMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewMessage(value);
    
    // Set user interaction when typing
    setUserInteracting(true);
    
    // Reset user interaction after typing stops
    setTimeout(() => setUserInteracting(false), 2000);
    
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

  const handleShareArticle = async () => {
    if (!detectedArticleUrl || !articleMetadata) return;
    
    setUserInteracting(true);
    setSending(true);
    
    try {
      // Use the pre-fetched metadata
      const articleData = {
        slug: articleMetadata.slug,
        title: articleMetadata.title,
        excerpt: articleMetadata.excerpt,
        coverImageUrl: articleMetadata.coverImageUrl,
        authorName: articleMetadata.authorName,
        readTime: articleMetadata.readTime,
        publishedDate: articleMetadata.publishedDate,
        isExternal: articleMetadata.isExternal,
        externalUrl: articleMetadata.externalUrl
      };
      
      await sendArticleMessage(
        conversation.conversation.id,
        conversation.otherUser.uid,
        articleData
      );
      
      setNewMessage('');
      setDetectedArticleUrl(null);
      setShowArticlePreview(false);
      setArticleMetadata(null);
      
      // Focus input after sending
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (error) {
      console.error('Error sharing article:', error);
      alert('Failed to share article. Please try again.');
    } finally {
      setSending(false);
      // Reset user interaction after a delay to allow auto-scroll for the new message
      setTimeout(() => setUserInteracting(false), 500);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || sending) return;

    setUserInteracting(true);
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
      // Reset user interaction after a delay to allow auto-scroll for the new message
      setTimeout(() => setUserInteracting(false), 500);
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

  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-chat-view');
    }
    return () => {
      if (isMobile) {
        document.body.classList.remove('mobile-chat-view');
      }
    };
  }, [isMobile]);

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
    <div 
      className={clsx(
        "flex-1 flex flex-col h-full",
        isMobile && "h-[100svh]" // Use dynamic viewport height for mobile
      )}
    >
      {/* Chat Header - Desktop only, mobile header is handled in MessagesClient */}
      {!isMobile && (
        <div className={clsx(
          "flex items-center justify-between",
          "p-4 border-b border-gray-200 bg-white/80 backdrop-blur-lg",
          isMobile && "sticky top-0 z-10"
        )}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              {getInitials(conversation.otherUser.firstName, conversation.otherUser.lastName)}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <span>{conversation.otherUser.firstName} {conversation.otherUser.lastName}</span>
                {encryptionAvailable && otherUserHasEncryption && (
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs text-green-600 font-medium">Encrypted</span>
                  </div>
                )}
              </h2>
              <p className="text-sm text-gray-500">@{conversation.otherUser.username}</p>
            </div>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div 
        className="flex-1 overflow-y-auto overflow-x-hidden space-y-3 p-4"
      >
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
                
                <div className={clsx(
                  `flex items-end mb-1`,
                  isOwnMessage ? 'justify-end' : 'justify-start space-x-2'
                )}>
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
                  ) : message.type === 'article' && message.articleAttachment ? (
                    <div className="max-w-[85vw] sm:max-w-[75%] lg:max-w-md">
                      <ArticleCard 
                        article={message.articleAttachment} 
                        isOwn={isOwnMessage}
                      />
                    </div>
                  ) : (
                    <div className={clsx(
                      "max-w-[85%] sm:max-w-[75%] lg:max-w-md px-4 py-2 rounded-[20px]",
                      isOwnMessage 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    )}>
                      <div className="flex items-start space-x-2">
                        <div className="flex-1">
                          {message.isEncrypted ? (
                            <p className="text-sm whitespace-pre-wrap break-words">
                              {message.decryptedContent || (
                                <span className="text-gray-500 italic">🔒 Decrypting...</span>
                              )}
                            </p>
                          ) : (
                            <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                          )}
                        </div>
                      </div>
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
      <div 
        ref={footerRef}
        className="p-4 border-t border-gray-200 bg-white"
      >
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
          
          {/* Article preview */}
          {showArticlePreview && detectedArticleUrl && (
            <div className="mb-3 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">Article Preview</span>
                </div>
                <button
                  onClick={() => {
                    setShowArticlePreview(false);
                    setDetectedArticleUrl(null);
                    setArticleMetadata(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {isLoadingArticle ? (
                <div className="p-4 flex items-center space-x-3">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm text-gray-600">Loading article preview...</span>
                </div>
              ) : articleMetadata ? (
                <div className="p-3">
                  {/* Article Preview Card */}
                  <div className="flex space-x-3">
                    {/* Article Image */}
                    {articleMetadata.coverImageUrl && (
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={articleMetadata.coverImageUrl} 
                          alt={articleMetadata.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Article Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
                        {articleMetadata.title}
                      </h4>
                      {articleMetadata.excerpt && (
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          {articleMetadata.excerpt}
                        </p>
                      )}
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        {articleMetadata.authorName && (
                          <span>{articleMetadata.authorName}</span>
                        )}
                        {articleMetadata.readTime && (
                          <span>{articleMetadata.readTime} min read</span>
                        )}
                        {articleMetadata.isExternal && (
                          <span className="text-blue-600">External</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-3 pt-3 border-t border-gray-100">
                    <button
                      onClick={handleShareArticle}
                      disabled={sending || !articleMetadata}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center space-x-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span>Share Rich Preview</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowArticlePreview(false);
                        setDetectedArticleUrl(null);
                        setArticleMetadata(null);
                      }}
                      className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-500">Unable to load article preview</p>
                  <button
                    onClick={() => {
                      setShowArticlePreview(false);
                      setDetectedArticleUrl(null);
                      setArticleMetadata(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Send as text instead
                  </button>
                </div>
              )}
            </div>
          )}
          
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={newMessage}
              onChange={handleMessageChange}
              placeholder={
                ENABLE_E2EE && globalEncryptionEnabled
                  ? `🔒 Send encrypted message to ${conversation.otherUser.firstName}... (Type @ to mention someone or paste an article link)`
                  : `Message ${conversation.otherUser.firstName}... (Type @ to mention someone or paste an article link)`
              }
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={sending}
            />
            <button
              type="submit"
              disabled={!newMessage.trim() || sending}
              className="px-5 py-3 bg-blue-600 text-white rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors text-sm"
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