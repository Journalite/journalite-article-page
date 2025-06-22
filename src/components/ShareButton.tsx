'use client'

import React, { useState, useEffect } from 'react';
import { ShareIcon, LinkIcon, CheckIcon } from '@heroicons/react/24/outline';

interface ShareButtonProps {
  title: string;
  url: string;
  text?: string;
  className?: string;
  iconOnly?: boolean; // New prop for icon-only display
  // Enhanced props for rich social sharing
  description?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  // If provided, will create better sharing experience
  articleData?: {
    slug?: string;
    id?: string;
    excerpt?: string;
    coverImageUrl?: string;
    authorName?: string;
    createdAt?: string;
    isExternal?: boolean;
    externalUrl?: string;
  };
}

export default function ShareButton({ 
  title, 
  url, 
  text, 
  className = '',
  iconOnly = false,
  description,
  image,
  author,
  publishedAt,
  articleData
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [shareUrl, setShareUrl] = useState(url);
  const [shareText, setShareText] = useState(text || title);

  // Generate enhanced sharing content
  useEffect(() => {
    if (!articleData) return;
    
    // Enhanced sharing logic with better URL handling
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    let newUrl = articleData.externalUrl || '';
    let enhancedText = shareText;
    
    // Add article title and description for better sharing
    if (title && !enhancedText.includes(title)) {
      enhancedText = `${title}\n\n${enhancedText}`;
    }
    
    if (articleData.externalUrl) {
      // External article sharing logic
      if (articleData.externalUrl.includes('theguardian.com')) {
        // Guardian article
        newUrl = `${baseUrl}/guardian-news/${encodeURIComponent(articleData.externalUrl)}/`;
      } else if (articleData.externalUrl.includes('newsapi.org') || !articleData.externalUrl.includes('theguardian.com')) {
        // NewsAPI or other external article
        newUrl = `${baseUrl}/news/${encodeURIComponent(articleData.externalUrl)}/`;
      }
    } else {
      // Internal Journalite article
      newUrl = `${baseUrl}/articles/${articleData.slug || articleData.id}/`;
    }
    
    if (!enhancedText.includes('Read more on Journalite')) {
      enhancedText += '\n\nRead more on Journalite 📖';
    }
    
    setShareUrl(newUrl);
    setShareText(enhancedText);
  }, [articleData, shareText, title]);

  const handleShare = async () => {
    const shareData = {
      title,
      text: shareText,
      url: shareUrl
    };

    try {
      // Try native Web Share API first (works on mobile)
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        return;
      } else {
      }
    } catch (error) {
    }

    // Fallback: show copy link option
    setShowFallback(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowFallback(false);
      }, 2000);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowFallback(false);
      }, 2000);
    }
  };

  // Icon-only version for article cards
  if (iconOnly) {
    if (showFallback) {
      return (
        <button
          onClick={handleCopyLink}
          className={`w-9 h-9 bg-white/90 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg ${className}`}
          disabled={copied}
          title={copied ? "Copied!" : "Copy Link"}
        >
          {copied ? (
            <CheckIcon className="w-4 h-4 text-green-600" />
          ) : (
            <LinkIcon className="w-4 h-4 text-gray-600" />
          )}
        </button>
      );
    }

    return (
      <button
        onClick={handleShare}
        className={`w-9 h-9 bg-white/90 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg ${className}`}
        title="Share article"
      >
        <ShareIcon className="w-4 h-4 text-gray-600" />
      </button>
    );
  }

  // Full button version
  if (showFallback) {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={copied}
        >
          {copied ? (
            <>
              <CheckIcon className="w-5 h-5" />
              Copied!
            </>
          ) : (
            <>
              <LinkIcon className="w-5 h-5" />
              Copy Link
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      <ShareIcon className="w-5 h-5" />
      Share
    </button>
  );
} 