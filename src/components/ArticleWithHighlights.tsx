'use client'

import React, { useEffect, useState, useRef } from 'react';
import { DocumentModel } from '@/types/DocumentModel';
import { HighlightProvider } from '@/context/HighlightContext';
import ArticleHighlights from './ArticleHighlights';
import styles from '@/styles/ArticleWithHighlights.module.css';
import { getArticleById } from '@/firebase/articles';
import domPatcher from '@/services/DOMPatcher';

interface ArticleWithHighlightsProps {
  articleId: string;
  initialHtml?: string;
  documentModel?: DocumentModel;
}

/**
 * ArticleWithHighlights
 * 
 * Displays an article with highlighting functionality.
 * This component bridges our document model with the highlighting feature.
 */
const ArticleWithHighlights: React.FC<ArticleWithHighlightsProps> = ({
  articleId,
  initialHtml,
  documentModel
}) => {
  const [article, setArticle] = useState<{ title: string; body: string } | null>(null);
  const [model, setModel] = useState<DocumentModel | null>(documentModel || null);
  const [isLoading, setIsLoading] = useState(!documentModel && !initialHtml);
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
    if (documentModel || initialHtml || article) return;
    
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
  }, [articleId, documentModel, article, initialHtml]);
  
  // Render the document model when it's available
  useEffect(() => {
    if (!articleContainerRef.current || !model) return;
    
    // Use DOM patcher to render the document model
    domPatcher.initialize(articleContainerRef.current, model);
    domPatcher.fullRender(model);
  }, [model]);
  
  // If we have initialHtml but no document model, render using innerHTML
  useEffect(() => {
    if (!articleContainerRef.current || model || !initialHtml) return;
    
    // Clean HTML content
    const cleanHtml = initialHtml
      .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
      .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
    
    articleContainerRef.current.innerHTML = cleanHtml;
  }, [initialHtml, model]);
  
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
          >
            {/* Content will be rendered by DOM patcher or from HTML */}
            {!model && !initialHtml && article && (
              <div dangerouslySetInnerHTML={{ __html: article.body }} />
            )}
          </div>
        </ArticleHighlights>
      </article>
    </HighlightProvider>
  );
};

export default ArticleWithHighlights; 