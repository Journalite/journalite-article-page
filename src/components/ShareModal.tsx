'use client';

import React, { useEffect, useState } from 'react';
import { SparkleIcon } from './icons/CustomIcons';
// import styles from './ShareModal.module.css'; // Unused
import { createPortal } from 'react-dom';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  highlightText: string;
  articleTitle: string;
  shareUrl: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  highlightText,
  articleTitle,
  shareUrl
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Highlight from "${articleTitle}"`,
          text: `"${highlightText}" - from "${articleTitle}"`,
          url: shareUrl,
        });
        onClose();
             } catch (error: any) {
         if (error.name !== 'AbortError') {
           console.error('Error sharing:', error);
         }
       }
    }
  };

  // const shareText = `"${highlightText}" - from "${articleTitle}"`; // Unused

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          animation: 'modalSlideIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#6B7280',
            padding: '0.25rem',
            borderRadius: '0.375rem',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#374151'}
          onMouseOut={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1F2937'
          }}>
            <SparkleIcon size={20} color="#3b82f6" />
            Share Highlight
          </h3>
          <p style={{
            margin: 0,
            color: '#6B7280',
            fontSize: '0.875rem'
          }}>
            Share this highlight from "{articleTitle}"
          </p>
        </div>

        {/* Preview */}
        <div style={{
          backgroundColor: '#F9FAFB',
          border: '2px solid #E5E7EB',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#374151',
            fontStyle: 'italic',
            marginBottom: '0.75rem'
          }}>
            "{highlightText}"
          </div>
          <div style={{
            fontSize: '0.875rem',
            color: '#6B7280',
            fontWeight: '500'
          }}>
            — from "{articleTitle}"
          </div>
        </div>

        {/* Share URL */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.5rem'
          }}>
            Share Link
          </label>
          <div style={{
            display: 'flex',
            gap: '0.5rem'
          }}>
            <input
              type="text"
              value={shareUrl}
              readOnly
              style={{
                flex: 1,
                padding: '0.75rem',
                border: '1px solid #D1D5DB',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                backgroundColor: '#F9FAFB',
                fontFamily: 'monospace'
              }}
            />
            <button
              onClick={handleCopyLink}
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: copied ? '#10B981' : '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'flex-end'
        }}>
                     {typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6366F1',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5B21B6'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6366F1'}
            >
              📤 Share
            </button>
          )}
          
          <button
            onClick={onClose}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#F3F4F6',
              color: '#374151',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ShareModal; 