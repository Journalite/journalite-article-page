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
    
    let newUrl = '';
    let enhancedText = shareText;
    
    // Add article title and description for better sharing
    if (title && !enhancedText.includes(title)) {
      enhancedText = `${title}\n\n${enhancedText}`;
    }
    
    if (articleData.externalUrl) {
      // External article sharing logic
      if (articleData.externalUrl.includes('theguardian.com')) {
        // Guardian article - extract the article ID from the URL
        const guardianUrl = articleData.externalUrl;
        const urlParts = guardianUrl.split('/');
        const pathParts = urlParts.slice(3); // Remove https://, empty, theguardian.com
        const articleId = pathParts.join('/');
        newUrl = `${baseUrl}/guardian-news/${articleId}/`; // Add trailing slash
      } else if (articleData.externalUrl.startsWith('/guardian-news/')) {
        // Already a guardian-news path - ensure trailing slash
        const trimmedUrl = articleData.externalUrl.replace(/\/$/, '');
        newUrl = `${baseUrl}${trimmedUrl}/`;
      } else if (articleData.externalUrl.includes('newsapi.org') || !articleData.externalUrl.includes('theguardian.com')) {
        // NewsAPI or other external article
        newUrl = `${baseUrl}/news/${encodeURIComponent(articleData.externalUrl)}`;
      } else {
        // Fallback for other external URLs
        newUrl = `${baseUrl}/news/${encodeURIComponent(articleData.externalUrl)}`;
      }
    } else {
              // Internal Oriteria article
      newUrl = `${baseUrl}/articles/${articleData.slug || articleData.id}`;
    }
    
          if (!enhancedText.includes('Read more on Oriteria')) {
        enhancedText += '\n\nRead more on Oriteria 📖';
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
          className={`flex items-center gap-1 px-3 py-2 border-radius-24 bg-transparent border border-gray-300 text-gray-700 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 ${className}`}
          disabled={copied}
          title={copied ? "Copied!" : "Copy Link"}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            borderRadius: '24px',
            backgroundColor: 'transparent',
            border: '1px solid #ccc',
            color: '#292929',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {copied ? (
            <CheckIcon className="w-4 h-4 text-green-600" />
          ) : (
            <LinkIcon className="w-4 h-4 text-gray-600" />
          )}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      );
    }

    return (
      <button
        onClick={handleShare}
        className={`flex items-center gap-1 px-3 py-2 border-radius-24 bg-transparent border border-gray-300 text-gray-700 font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 ${className}`}
        title="Share article"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          borderRadius: '24px',
          backgroundColor: 'transparent',
          border: '1px solid #ccc',
          color: '#292929',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <ShareIcon className="w-4 h-4" />
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