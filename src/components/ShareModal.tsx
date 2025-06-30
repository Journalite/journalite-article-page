'use client';

import React, { useEffect, useState } from 'react';
import { SparkleIcon } from './icons/CustomIcons';
// import styles from './ShareModal.module.css'; // Unused
import { createPortal } from 'react-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { searchUsers } from '@/services/userService';
import { getOrCreateConversation, sendArticleMessage } from '@/services/messagesService';
import { getInitials } from '@/utils/avatarUtils';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  highlightText: string;
  articleTitle: string;
  shareUrl: string;
  // Optional article data for sharing to messages
  articleData?: {
    slug: string;
    title: string;
    excerpt?: string;
    coverImageUrl?: string;
    authorName?: string;
    readTime?: number;
    publishedDate?: string;
    isExternal?: boolean;
    externalUrl?: string;
  };
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  highlightText,
  articleTitle,
  shareUrl,
  articleData
}) => {
  const [user] = useAuthState(auth);
  const [copied, setCopied] = useState(false);
  const [showMessageShare, setShowMessageShare] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [sendingToUser, setSendingToUser] = useState<string | null>(null);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Search users for message sharing
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.length >= 2) {
        setIsSearching(true);
        try {
          const results = await searchUsers(searchTerm);
          // Filter out current user
          const filteredResults = results.filter(result => result.uid !== user?.uid);
          setSearchResults(filteredResults);
        } catch (error) {
          console.error('Error searching users:', error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, user?.uid]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Highlight from "${articleTitle}"`,
          text: `"${highlightText}" - from "${articleTitle}"`,
          url: shareUrl,
        });
        onClose();
             } catch (error: any) {
         if (error.name !== 'AbortError') {
           console.error('Error sharing:', error);
         }
       }
    }
  };

  const handleShareToUser = async (selectedUser: any) => {
    if (!user || !articleData) return;
    
    setSendingToUser(selectedUser.uid);
    
    try {
      // Get or create conversation
      const conversationId = await getOrCreateConversation(user.uid, selectedUser.uid);
      
      // Send article message
      await sendArticleMessage(conversationId, selectedUser.uid, articleData);
      
      // Close modal and show success
      onClose();
      // You could add a toast notification here
    } catch (error) {
      console.error('Error sharing article to user:', error);
      alert('Failed to share article. Please try again.');
    } finally {
      setSendingToUser(null);
    }
  };

  // const shareText = `"${highlightText}" - from "${articleTitle}"`; // Unused

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          animation: 'modalSlideIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#6B7280',
            padding: '0.25rem',
            borderRadius: '0.375rem',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#374151'}
          onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          ×
        </button>

        {!showMessageShare ? (
          // Regular sharing options
          <>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1F2937'
              }}>
                <SparkleIcon size={20} color="#3b82f6" />
                Share Highlight
              </h3>
              <p style={{
                margin: 0,
                color: '#6B7280',
                fontSize: '0.875rem'
              }}>
                Share this highlight from "{articleTitle}"
              </p>
            </div>

            {/* Preview */}
            <div style={{
              backgroundColor: '#F9FAFB',
              border: '2px solid #E5E7EB',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#374151',
                fontStyle: 'italic',
                marginBottom: '0.75rem'
              }}>
                "{highlightText}"
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6B7280',
                fontWeight: '500'
              }}>
                — from "{articleTitle}"
              </div>
            </div>

            {/* Share URL */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Share Link
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: '1px solid #D1D5DB',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    backgroundColor: '#F9FAFB',
                    color: '#4B5563'
                  }}
                />
                <button
                  onClick={handleCopyLink}
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: copied ? '#10B981' : '#3B82F6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Share Options */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'flex-end',
              flexWrap: 'wrap'
            }}>
              {/* Share to Messages button (only show if we have article data and user is logged in) */}
              {user && articleData && (
                <button
                  onClick={() => setShowMessageShare(true)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#8B5CF6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7C3AED'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8B5CF6'}
                >
                  💬 Share to Messages
                </button>
              )}

              {typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                  onClick={handleNativeShare}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#6366F1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5B21B6'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
                >
                  📤 Share
                </button>
              )}
              
              <button
                onClick={onClose}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#F3F4F6',
                  color: '#374151',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          // Message sharing interface
          <>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <button
                  onClick={() => {
                    setShowMessageShare(false);
                    setSearchTerm('');
                    setSearchResults([]);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6B7280',
                    padding: '0.25rem'
                  }}
                >
                  ← Back
                </button>
                <h3 style={{
                  margin: 0,
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1F2937'
                }}>
                  Share to Messages
                </h3>
              </div>
              <p style={{
                margin: 0,
                color: '#6B7280',
                fontSize: '0.875rem'
              }}>
                Select a user to share "{articleTitle}" with
              </p>
            </div>

            {/* User search */}
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #D1D5DB',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            {/* Search results */}
            <div style={{ 
              maxHeight: '300px', 
              overflowY: 'auto',
              border: '1px solid #E5E7EB',
              borderRadius: '0.5rem',
              marginBottom: '1rem'
            }}>
              {isSearching ? (
                <div style={{ padding: '1rem', textAlign: 'center', color: '#6B7280' }}>
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <div
                    key={result.uid}
                    onClick={() => handleShareToUser(result)}
                    style={{
                      padding: '0.75rem',
                      borderBottom: '1px solid #F3F4F6',
                      cursor: sendingToUser === result.uid ? 'wait' : 'pointer',
                      backgroundColor: sendingToUser === result.uid ? '#F3F4F6' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      if (sendingToUser !== result.uid) {
                        e.currentTarget.style.backgroundColor = '#F9FAFB';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (sendingToUser !== result.uid) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#3B82F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {getInitials(result.firstName, result.lastName)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '500', color: '#1F2937' }}>
                        {result.firstName} {result.lastName}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                        @{result.username}
                      </div>
                    </div>
                    {sendingToUser === result.uid && (
                      <div style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid #D1D5DB',
                        borderTop: '2px solid #3B82F6',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                    )}
                  </div>
                ))
              ) : searchTerm.length >= 2 ? (
                <div style={{ padding: '1rem', textAlign: 'center', color: '#6B7280' }}>
                  No users found
                </div>
              ) : (
                <div style={{ padding: '1rem', textAlign: 'center', color: '#6B7280' }}>
                  Type at least 2 characters to search
                </div>
              )}
            </div>
          </>
        )}
      </div>
      
      <style>
        {`
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>,
    document.body
  );
};

export default ShareModal; 