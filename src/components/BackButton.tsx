'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface BackButtonProps {
  fallbackUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BackButton({ 
  fallbackUrl = '/guardian-news', 
  className = '',
  children 
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's browser history to go back to
    if (typeof window !== 'undefined' && window.history.length > 1) {
      // Try to go back in browser history
      const referrer = document.referrer;
      
      // If the referrer is from the same domain, go back
      if (referrer && referrer.includes(window.location.origin)) {
        router.back();
        return;
      }
    }
    
    // Fallback to the specified URL
    router.push(fallbackUrl);
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors ${className}`}
    >
      <ArrowLeftIcon className="w-5 h-5" />
      {children || 'Back'}
    </button>
  );
} 