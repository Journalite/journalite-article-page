"use client";

import { useEffect, useState } from 'react';
import { User, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import { useInterestsReengagement } from '@/hooks/useInterestsReengagement';
import InterestsUpdateModal from './InterestsUpdateModal';

interface InterestsReengagementWrapperProps {
  children: React.ReactNode;
}

export default function InterestsReengagementWrapper({ children }: InterestsReengagementWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [sessionError, setSessionError] = useState<string | null>(null);
  const { shouldShowModal, userProfile, closeModal } = useInterestsReengagement(user);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);
      
      // Clear session errors when user successfully authenticates
      if (currentUser) {
        setSessionError(null);
      }
    });

    // Listen for token changes and handle token refresh errors
    const unsubscribeToken = onIdTokenChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Try to get a fresh token to verify the session is valid
          await currentUser.getIdToken(true);
          setSessionError(null);
        } catch (error: any) {
          console.error('Token refresh failed:', error);
          
          // Handle specific token errors
          if (error.code === 'auth/user-token-expired' || 
              error.code === 'auth/requires-recent-login') {
            setSessionError('Your session has expired. Please sign in again.');
          } else if (error.code === 'auth/network-request-failed') {
            setSessionError('Network error. Please check your connection.');
          } else {
            setSessionError('Authentication error. Please refresh the page.');
          }
        }
      }
    });

    return () => {
      unsubscribeAuth();
      unsubscribeToken();
    };
  }, []);

  // Don't show modal while auth is still loading
  const showModal = shouldShowModal && !isAuthLoading && user && userProfile;

  // Show session error if there is one - but all hooks have been called first
  if (sessionError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h1 className="text-xl font-bold text-red-800 mb-4">Session Error</h1>
          <p className="text-red-600 mb-4">{sessionError}</p>
          <div className="space-y-2">
            <button
              onClick={() => {
                setSessionError(null);
                window.location.reload();
              }}
              className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Refresh Page
            </button>
            <a
              href="/login"
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
            >
              Sign In Again
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      
      {showModal && (
        <InterestsUpdateModal
          isOpen={true}
          onClose={closeModal}
          currentInterests={userProfile.interests || []}
          userUid={user.uid}
          userName={userProfile.firstName}
        />
      )}
    </>
  );
} 