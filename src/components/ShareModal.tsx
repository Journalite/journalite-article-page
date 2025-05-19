'use client';

import React, { useEffect, useState } from 'react';
import styles from './ShareModal.module.css'; // We will create this CSS module next

interface ShareModalProps {
  articleTitle: string;
  articleUrl: string;
  isOpen: boolean;
  onClose: () => void;
  coverImageUrl?: string | null; // Optional: for a richer preview
  excerpt?: string; // Optional: for a richer preview
}

const ShareModal: React.FC<ShareModalProps> = ({
  articleTitle,
  articleUrl,
  isOpen,
  onClose,
  coverImageUrl,
  excerpt
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCopied(false); // Reset copied state when modal closes
      return;
    }

    // Optional: Add/remove class to body to prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
      // Optionally: show an error message to the user
    });
  };

  // Placeholder social share URLs - replace with actual sharing intents
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(articleTitle)}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close share dialog">
          {/* Placeholder for Close Icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className={styles.title}>Share this article</h2>

        {/* Optional: Article Preview */}
        <div className={styles.articlePreview}>
          {coverImageUrl && (
            <img src={coverImageUrl} alt={articleTitle} className={styles.articleImage} />
          )}
          <h3 className={styles.articleTitlePreview}>{articleTitle}</h3>
          {excerpt && <p className={styles.articleExcerptPreview}>{excerpt}</p>}
        </div>

        <div className={styles.shareActions}>
          <div className={styles.copyLinkContainer}>
            <input type="text" value={articleUrl} readOnly className={styles.urlInput} />
            <button onClick={handleCopyLink} className={styles.copyButton}>
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>

          <p className={styles.shareViaText}>Or share via:</p>
          <div className={styles.socialIcons}>
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
              {/* Placeholder for Twitter Icon SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.952 4.256c-3.873 0-7.307-2.05-9.602-4.868a4.662 4.662 0 001.443 6.225 4.656 4.656 0 01-2.11-.583v.06a4.657 4.657 0 003.734 4.562 4.634 4.634 0 01-2.105.08 4.646 4.646 0 004.34 3.225A9.342 9.342 0 010 19.539a13.186 13.186 0 007.141 2.093c8.567 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602a9.49 9.49 0 002.323-2.394z"></path></svg>
            </a>
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
              {/* Placeholder for Facebook Icon SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.89v-2.98h2.89v-2.28c0-2.874 1.704-4.48 4.356-4.48 1.247 0 2.31.093 2.622.134v2.596h-1.54c-1.394 0-1.666.664-1.666 1.632v2.14h2.886l-.39 2.98h-2.496v7.008C18.343 21.128 22 16.991 22 12z"></path></svg>
            </a>
            <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
              {/* Placeholder for LinkedIn Icon SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal; 