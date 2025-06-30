import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import { getEncryptionService } from '@/services/encryptionService';

// Hook to handle encryption cleanup on logout
export function useEncryptionCleanup() {
    const [user] = useAuthState(auth);

    useEffect(() => {
        // If user logs out (user becomes null), clear encryption keys
        if (user === null) {
            try {
                const encryptionService = getEncryptionService();
                encryptionService.clearLocalKeys();

                // Also clear the session storage flag
                if (typeof window !== 'undefined') {
                    sessionStorage.removeItem('encryptionSetupSkipped');
                }
            } catch (error) {
                console.error('Error clearing encryption keys on logout:', error);
            }
        }
    }, [user]);
} 