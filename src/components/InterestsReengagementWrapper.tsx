"use client";

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';
import { useInterestsReengagement } from '../hooks/useInterestsReengagement';
import InterestsUpdateModal from './InterestsUpdateModal';

interface InterestsReengagementWrapperProps {
  children: React.ReactNode;
}

export default function InterestsReengagementWrapper({ children }: InterestsReengagementWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const { shouldShowModal, userProfile, closeModal } = useInterestsReengagement(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Don't show modal while auth is still loading
  const showModal = shouldShowModal && !isAuthLoading && user && userProfile;

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