'use client'

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { 
  subscribeToConversations, 
  ConversationWithUser,
  getTotalUnreadCount 
} from '@/services/messagesService';
import ConversationsList from './messages/ConversationsList';
import ChatView from './messages/ChatView';
import NewMessageModal from './messages/NewMessageModal';
import EncryptionSetup from './EncryptionSetup';
import { PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getEncryptionService } from '@/services/encryptionService';
import { ENABLE_E2EE } from '@/config';

export default function MessagesClient() {
  const [user] = useAuthState(auth);
  const [conversations, setConversations] = useState<ConversationWithUser[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<ConversationWithUser | null>(null);
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalUnreadCount, setTotalUnreadCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showEncryptionSetup, setShowEncryptionSetup] = useState(false);
  const [encryptionSetupChecked, setEncryptionSetupChecked] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check encryption setup
  useEffect(() => {
    const checkEncryptionSetup = async () => {
      // Skip any encryption checks entirely if the feature flag is turned off
      if (!ENABLE_E2EE) {
        setEncryptionSetupChecked(true);
        return;
      }

      if (!user || encryptionSetupChecked) return;
      
      try {
        const encryptionService = getEncryptionService();
        const isAvailable = encryptionService.isEncryptionAvailable();
        
        if (isAvailable) {
          setEncryptionSetupChecked(true);
          return;
        }
        
        const initialized = await encryptionService.initializeEncryption();
        
        if (!initialized && typeof window !== 'undefined' && 'crypto' in window && 'subtle' in window.crypto) {
          // Check if user has already skipped setup in this session
          const hasSkipped = sessionStorage.getItem('encryptionSetupSkipped');
          if (!hasSkipped) {
            // Encryption is supported but not set up, show setup modal
            setShowEncryptionSetup(true);
          }
        }
        
        setEncryptionSetupChecked(true);
      } catch (error) {
        console.error('Error checking encryption setup:', error);
        setEncryptionSetupChecked(true);
      }
    };

    checkEncryptionSetup();
  }, [user, encryptionSetupChecked]);

  // Subscribe to conversations
  useEffect(() => {
    if (!user) return;

    const unsubscribe = subscribeToConversations(user.uid, (newConversations) => {
      setConversations(newConversations);
      setLoading(false);
    });

    return unsubscribe;
  }, [user]);

  // Update total unread count
  useEffect(() => {
    if (!user) return;

    const updateUnreadCount = async () => {
      try {
        const count = await getTotalUnreadCount(user.uid);
        setTotalUnreadCount(count);
      } catch (error) {
        console.error('Error getting total unread count:', error);
      }
    };

    updateUnreadCount();
    
    // Update every 30 seconds
    const interval = setInterval(updateUnreadCount, 30000);
    return () => clearInterval(interval);
  }, [user, conversations]);

  const handleConversationSelect = (conversation: ConversationWithUser) => {
    setSelectedConversation(conversation);
  };

  const handleBackToList = () => {
    setSelectedConversation(null);
  };

  const handleNewConversation = (conversation: ConversationWithUser) => {
    setSelectedConversation(conversation);
    setShowNewMessage(false);
  };

  const handleEncryptionSetupComplete = () => {
    setShowEncryptionSetup(false);
    setEncryptionSetupChecked(true);
  };

  const handleEncryptionSetupSkip = () => {
    setShowEncryptionSetup(false);
    setEncryptionSetupChecked(true);
    // Store that user skipped encryption setup for this session
    sessionStorage.setItem('encryptionSetupSkipped', 'true');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Please log in to view messages.</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex bg-white">
      {/* Mobile Header */}
      {isMobile && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            {selectedConversation ? (
              <>
                <button
                  onClick={handleBackToList}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
                </button>
                <div className="flex-1 text-center">
                  <h1 className="text-lg font-semibold text-gray-900">
                    {selectedConversation.otherUser.firstName} {selectedConversation.otherUser.lastName}
                  </h1>
                  <p className="text-sm text-gray-500">@{selectedConversation.otherUser.username}</p>
                </div>
                <div className="w-10"></div>
              </>
            ) : (
              <>
                <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
                <button
                  onClick={() => setShowNewMessage(true)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <PlusIcon className="h-6 w-6 text-blue-600" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Desktop/Tablet Layout */}
      {!isMobile ? (
        <>
          {/* Conversations Sidebar */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
                <button
                  onClick={() => setShowNewMessage(true)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="New message"
                >
                  <PlusIcon className="h-5 w-5 text-blue-600" />
                </button>
              </div>
              {totalUnreadCount > 0 && (
                <p className="text-sm text-blue-600 font-medium">
                  {totalUnreadCount} unread message{totalUnreadCount !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              <ConversationsList
                conversations={conversations}
                selectedConversation={selectedConversation}
                onConversationSelect={handleConversationSelect}
                loading={loading}
              />
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <ChatView 
                conversation={selectedConversation}
                currentUserId={user.uid}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-500">Choose from your existing conversations or start a new one.</p>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        /* Mobile Layout */
        <div className="flex-1 flex flex-col pt-16">
          {selectedConversation ? (
            <ChatView 
              conversation={selectedConversation}
              currentUserId={user.uid}
              isMobile={true}
            />
          ) : (
            <div className="flex-1 overflow-y-auto">
              <ConversationsList
                conversations={conversations}
                selectedConversation={selectedConversation}
                onConversationSelect={handleConversationSelect}
                loading={loading}
                isMobile={true}
              />
            </div>
          )}
        </div>
      )}

      {/* New Message Modal */}
      {showNewMessage && (
        <NewMessageModal
          onClose={() => setShowNewMessage(false)}
          onConversationCreated={handleNewConversation}
        />
      )}

      {/* Encryption Setup Modal */}
      {showEncryptionSetup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="max-w-md w-full mx-4">
            <EncryptionSetup
              onComplete={handleEncryptionSetupComplete}
              onSkip={handleEncryptionSetupSkip}
            />
          </div>
        </div>
      )}
    </div>
  );
} 