"use client";

import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { getUserProfile, shouldPromptForInterestsUpdate, UserProfile } from '../services/userService';

interface UseInterestsReengagementReturn {
    shouldShowModal: boolean;
    userProfile: UserProfile | null;
    isLoading: boolean;
    closeModal: () => void;
}

export function useInterestsReengagement(user: User | null): UseInterestsReengagementReturn {
    const [shouldShowModal, setShouldShowModal] = useState(false);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        if (!user || hasChecked) {
            setIsLoading(false);
            return;
        }

        const checkForReengagement = async () => {
            try {
                const profile = await getUserProfile(user.uid);
                setUserProfile(profile);

                if (profile && shouldPromptForInterestsUpdate(profile)) {
                    // Small delay to let the app load before showing modal
                    setTimeout(() => {
                        setShouldShowModal(true);
                    }, 1000);
                }
            } catch (error) {
                console.error('Error checking for interests reengagement:', error);
            } finally {
                setIsLoading(false);
                setHasChecked(true);
            }
        };

        checkForReengagement();
    }, [user, hasChecked]);

    const closeModal = () => {
        setShouldShowModal(false);
    };

    return {
        shouldShowModal,
        userProfile,
        isLoading,
        closeModal
    };
} 