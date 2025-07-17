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
import { PlusIcon, ArrowLeftIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
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
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)'
      }}>
        <div className="text-center text-slate-700">
          <ChatBubbleLeftRightIcon className="h-16 w-16 mx-auto mb-4 opacity-60" />
          <p className="text-lg font-medium">Please log in to view messages</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)'
    }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 h-screen flex">
      {/* Mobile Header */}
      {isMobile && (
                     <div className="absolute top-0 left-0 right-0 z-20 px-4 py-3" style={{
             background: 'rgba(255, 255, 255, 0.8)',
             backdropFilter: 'blur(20px)',
             WebkitBackdropFilter: 'blur(20px)',
             borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
           }}>
          <div className="flex items-center justify-between">
            {selectedConversation ? (
              <>
                <button
                  onClick={handleBackToList}
                     className="p-2 hover:bg-slate-200/50 rounded-full transition-all duration-200"
                >
                     <ArrowLeftIcon className="h-6 w-6 text-slate-700" />
                </button>
                <div className="flex-1 text-center">
                     <h1 className="text-lg font-semibold text-slate-800">
                    {selectedConversation.otherUser.firstName} {selectedConversation.otherUser.lastName}
                  </h1>
                     <p className="text-sm text-slate-600">@{selectedConversation.otherUser.username}</p>
                </div>
                <div className="w-10"></div>
              </>
            ) : (
              <>
                   <h1 className="text-xl font-bold text-slate-800">Messages</h1>
                <button
                  onClick={() => setShowNewMessage(true)}
                     className="p-2 hover:bg-slate-200/50 rounded-full transition-all duration-200"
                >
                     <PlusIcon className="h-6 w-6 text-slate-700" />
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
                         <div className="w-80 flex flex-col">
               <div className="m-4 rounded-3xl overflow-hidden" style={{
                 background: 'rgba(255, 255, 255, 0.7)',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
                 border: '1px solid rgba(0, 0, 0, 0.1)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
               }}>
            {/* Header */}
                 <div className="p-6 border-b border-slate-200/50">
                   <div className="flex items-center justify-between mb-3">
                     <h1 className="text-2xl font-bold text-slate-800">Messages</h1>
                <button
                  onClick={() => setShowNewMessage(true)}
                       className="p-2 hover:bg-slate-200/50 rounded-full transition-all duration-200 group"
                  title="New message"
                >
                       <PlusIcon className="h-6 w-6 text-slate-700 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              {totalUnreadCount > 0 && (
                     <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" style={{
                       background: 'rgba(59, 130, 246, 0.15)',
                       color: '#2563eb',
                       border: '1px solid rgba(59, 130, 246, 0.3)'
                     }}>
                  {totalUnreadCount} unread message{totalUnreadCount !== 1 ? 's' : ''}
                     </div>
              )}
            </div>

            {/* Conversations List */}
                <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)]">
              <ConversationsList
                conversations={conversations}
                selectedConversation={selectedConversation}
                onConversationSelect={handleConversationSelect}
                loading={loading}
              />
                </div>
            </div>
          </div>

          {/* Chat Area */}
                         <div className="flex-1 flex flex-col p-4 pl-0">
               <div className="flex-1 rounded-3xl overflow-hidden" style={{
                 background: 'rgba(255, 255, 255, 0.7)',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
                 border: '1px solid rgba(0, 0, 0, 0.1)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
               }}>
            {selectedConversation ? (
              <ChatView 
                conversation={selectedConversation}
                currentUserId={user.uid}
              />
            ) : (
                   <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                       <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                         background: 'rgba(59, 130, 246, 0.1)',
                         backdropFilter: 'blur(10px)'
                       }}>
                         <ChatBubbleLeftRightIcon className="w-10 h-10 text-slate-500" />
                  </div>
                       <h3 className="text-xl font-semibold text-slate-800 mb-3">Select a conversation</h3>
                       <p className="text-slate-600 max-w-md">Choose from your existing conversations or start a new one to begin messaging.</p>
                </div>
              </div>
            )}
               </div>
          </div>
        </>
      ) : (
        /* Mobile Layout */
        <div className="flex-1 flex flex-col pt-16">
          {selectedConversation ? (
               <div className="flex-1 m-4 mt-2 rounded-3xl overflow-hidden" style={{
                 background: 'rgba(255, 255, 255, 0.7)',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
                 border: '1px solid rgba(0, 0, 0, 0.1)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
               }}>
            <ChatView 
              conversation={selectedConversation}
              currentUserId={user.uid}
              isMobile={true}
            />
               </div>
          ) : (
               <div className="flex-1 m-4 mt-2 rounded-3xl overflow-hidden" style={{
                 background: 'rgba(255, 255, 255, 0.7)',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
                 border: '1px solid rgba(0, 0, 0, 0.1)',
                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
               }}>
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
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="max-w-md w-full mx-4">
            <EncryptionSetup
              onComplete={handleEncryptionSetupComplete}
              onSkip={handleEncryptionSetupSkip}
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
} 