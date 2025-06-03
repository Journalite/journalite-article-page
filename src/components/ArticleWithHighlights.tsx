'use client'

import React, { useEffect, useState, useRef } from 'react';
import { HighlightProvider } from '@/context/HighlightContext';
import ArticleHighlights from './ArticleHighlights';
import styles from '@/styles/ArticleWithHighlights.module.css';
import { getArticleById } from '@/firebase/articles';

interface ArticleWithHighlightsProps {
  articleId: string;
  initialHtml?: string;
}

/**
 * ArticleWithHighlights
 * 
 * Displays an article with highlighting functionality.
 * This component renders HTML content with the highlighting feature.
 */
const ArticleWithHighlights: React.FC<ArticleWithHighlightsProps> = ({
  articleId,
  initialHtml
}) => {
  const [article, setArticle] = useState<{ title: string; body: string } | null>(null);
  const [isLoading, setIsLoading] = useState(!initialHtml);
  const [error, setError] = useState('');
  const articleContainerRef = useRef<HTMLDivElement>(null);
  
  // Share handler for highlight sharing
  const handleShare = (text: string) => {
    if (navigator.share) {
      navigator.share({
        title: article?.title || 'Shared highlight',
        text: `"${text}" - from article ${articleId}`,
        url: window.location.href
      }).catch(error => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      const shareText = `"${text}" - from article ${articleId} ${window.location.href}`;
      navigator.clipboard.writeText(shareText)
        .then(() => alert('Highlight copied to clipboard!'))
        .catch(error => console.error('Error copying to clipboard:', error));
    }
  };
  
  // Load the article if needed
  useEffect(() => {
    if (initialHtml || article) return;
    
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const articleData = await getArticleById(articleId);
        
        if (!articleData) {
          setError('Article not found');
          return;
        }
        
        // Clean HTML content
        const cleanHtml = articleData.body
          .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
          .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
        
        setArticle({
          title: articleData.title,
          body: cleanHtml
        });
        
      } catch (error) {
        console.error('Error loading article:', error);
        setError('Failed to load article');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchArticle();
  }, [articleId, article, initialHtml]);

  // Get the content to display
  const getContentToDisplay = () => {
    if (initialHtml) {
      // Clean HTML content
      return initialHtml
        .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
        .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
    }
    return article?.body || '';
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingIndicator}></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );
  }

  return (
    <HighlightProvider articleId={articleId}>
      <article className={styles.articleContainer}>
        <ArticleHighlights articleId={articleId} onShare={handleShare}>
          <div 
            className={styles.articleContent} 
            ref={articleContainerRef}
            dangerouslySetInnerHTML={{ __html: getContentToDisplay() }}
          />
        </ArticleHighlights>
      </article>
    </HighlightProvider>
  );
};

export default ArticleWithHighlights; 