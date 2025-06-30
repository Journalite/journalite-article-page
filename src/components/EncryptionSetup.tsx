'use client'

import React, { useState } from 'react';
import { getEncryptionService } from '@/services/encryptionService';

interface EncryptionSetupProps {
  onComplete?: () => void;
  onSkip?: () => void;
}

export default function EncryptionSetup({ onComplete, onSkip }: EncryptionSetupProps) {
  const [isSetupLoading, setIsSetupLoading] = useState(false);
  const [setupError, setSetupError] = useState<string | null>(null);

  const handleSetupEncryption = async () => {
    setIsSetupLoading(true);
    setSetupError(null);

    try {
      const encryptionService = getEncryptionService();
      const success = await encryptionService.initializeEncryption();
      
      if (success) {
        onComplete?.();
      } else {
        setSetupError('Failed to setup encryption. Please try again.');
      }
    } catch (error) {
      console.error('Error setting up encryption:', error);
      setSetupError('An error occurred while setting up encryption.');
    } finally {
      setIsSetupLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 border">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Enable End-to-End Encryption</h2>
        <p className="text-gray-600 text-sm">Secure your conversations with encrypted messaging</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Your messages are private</h3>
            <p className="text-xs text-gray-600">Only you and the recipient can read encrypted messages</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Keys stored locally</h3>
            <p className="text-xs text-gray-600">Your private key never leaves your device</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Automatic encryption</h3>
            <p className="text-xs text-gray-600">Messages are encrypted when both users have it enabled</p>
          </div>
        </div>
      </div>

      {setupError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{setupError}</p>
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={handleSetupEncryption}
          disabled={isSetupLoading}
          className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSetupLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Setting up encryption...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Enable Encryption</span>
            </>
          )}
        </button>

        {onSkip && (
          <button
            onClick={onSkip}
            disabled={isSetupLoading}
            className="w-full px-4 py-2 text-gray-600 font-medium hover:text-gray-800 transition-colors disabled:opacity-50"
          >
            Skip for now
          </button>
        )}
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 18.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <p className="text-xs text-yellow-800">
              <strong>Important:</strong> If you clear your browser data or switch devices, you'll need to set up encryption again. 
              Your encrypted message history will not be accessible without your private key.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 