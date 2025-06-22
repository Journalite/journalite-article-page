'use client'

import React, { useEffect, useState, useRef } from 'react';
import { HighlightProvider } from '@/context/HighlightContext';
import { AtmosphereIcon, LockClosedIcon, EnhancedIcon } from './icons/CustomIcons';
import ArticleHighlights from './ArticleHighlights';
import MoodToggle from './MoodToggle';
import ReflectionToggle from './ReflectionToggle';
import ReflectionModeToggle from './ReflectionModeToggle';
import styles from '@/styles/ArticleWithHighlights.module.css';
import { getArticle } from '@/services/articleService';
import { highlightCodeBlocks } from '@/utils/syntaxHighlighter';
import ClientSideHighlighter from './ClientSideHighlighter';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';
import { ReflectionRoom } from './ReflectionRoom';

interface ArticleWithHighlightsProps {
  articleId: string;
  initialHtml?: string;
  isAuthenticated?: boolean;
  articleTitle?: string;
  articleSlug?: string;
  hasReflectionRoom?: boolean;
  authorId?: string;
  moodFeatureEnabled?: boolean;
  onToggleMoodFeature?: (enabled: boolean) => void;
  mood?: 'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic';
}

const ArticleWithHighlights: React.FC<ArticleWithHighlightsProps> = ({
  articleId,
  initialHtml,
  isAuthenticated = false,
  articleTitle = 'Article',
  articleSlug = '',
  hasReflectionRoom = false,
  authorId,
  moodFeatureEnabled,
  onToggleMoodFeature,
  mood: externalMood
}) => {
  // const [moodFeatureEnabled, setMoodFeatureEnabled] = useState(true); // Unused
  const [article, setArticle] = useState<{ title: string; body: string } | null>(null);
  const [isLoading, setIsLoading] = useState(!initialHtml);
  const [error, setError] = useState('');
  const [internalMood, setInternalMood] = useState<'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic'>('reflective');
  
  // Use external mood if provided, otherwise use internal mood
  const mood = externalMood || internalMood;
  const articleContainerRef = useRef<HTMLDivElement>(null);



  // Apply syntax highlighting when content loads
  useEffect(() => {
    if (articleContainerRef.current && (initialHtml || article)) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        if (articleContainerRef.current) {
          highlightCodeBlocks(articleContainerRef.current);
        }
      }, 100);
    }
  }, [initialHtml, article]);

  // Analyze mood when content is available
  useEffect(() => {
    const content = getContentToDisplay();
    if (content) {
      // Extract text from HTML for sentiment analysis
      const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (textContent && !externalMood) {
        // Only set internal mood if no external mood is provided
        const detectedMood = getMoodFromText(textContent);
        setInternalMood(detectedMood);
      }
    }
  }, [initialHtml, article]);

  const handleShare = (text: string) => {
    if (navigator.share) {
      navigator.share({
        title: article?.title || 'Shared highlight',
        text: `"${text}" - from article ${articleId}`,
        url: window.location.href
      }).catch(error => console.error('Error sharing:', error));
    } else {
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
        const articleData = await getArticle(articleId);

        if (!articleData) {
          setError('Article not found');
          return;
        }

        let content = '';
        if (typeof articleData.content === 'string') {
          content = articleData.content;
        } else {
          content = articleData.content.map(p => `<p>${p.text}</p>`).join('\n');
        }

        const cleanHtml = content
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
      const content = initialHtml
        .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
        .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
      

      
      return content;
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
      <ClientSideHighlighter />
      <article className={styles.articleContainer}>
        {/* Reflection Room - Above the toggle bar */}
        {hasReflectionRoom && isAuthenticated && (
          <ReflectionRoom
            articleId={articleId}
            hasReflectionRoom={hasReflectionRoom}
            authorId={authorId}
          />
        )}

        {/* Reflection Settings - Responsive Design */}
        <div 
          data-toggle-bar="true"
          style={{ 
            display: 'flex', 
            justifyContent: typeof window !== 'undefined' && window.innerWidth <= 768 
              ? 'center' : 'space-between', 
            alignItems: 'center', 
            gap: typeof window !== 'undefined' && window.innerWidth <= 768 ? '0.5rem' : '1rem', 
            margin: typeof window !== 'undefined' && window.innerWidth <= 768 ? '0.5rem 0' : '1rem 0',
            padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? '0.5rem 0.75rem' : '1rem',
            backgroundImage: isAuthenticated 
              ? `linear-gradient(270deg, ${moodThemes[mood].gradientStart}, ${moodThemes[mood].gradientEnd})`
              : 'linear-gradient(270deg, #9CA3AF, #6B7280)',
            backgroundSize: '200% 200%',
            animation: 'slideGradient 8s ease infinite alternate',
            borderRadius: typeof window !== 'undefined' && window.innerWidth <= 768 ? '12px' : '20px',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '0.75rem' : '0.875rem',
            flexWrap: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'wrap' : 'nowrap'
          }}>
          {/* Check screen size for different layouts */}
          {typeof window !== 'undefined' && window.innerWidth <= 768 ? (
            // Mobile Layout - Minimal and compact
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ color: '#F7FAFC', fontWeight: '500', fontSize: '0.65rem' }}>
                  🎨 Mood
                </span>
                <MoodToggle
                  style={{
                    padding: '0.25rem 0.5rem',
                    border: 'none',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: '#F7FAFC',
                    borderRadius: '12px',
                    fontSize: '0.6rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    minHeight: '24px',
                    minWidth: '32px'
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ color: '#F7FAFC', fontWeight: '500', fontSize: '0.65rem' }}>
                  ✨ Reflect
                </span>
                <ReflectionModeToggle
                  style={{
                    padding: '0.25rem 0.5rem',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '0.6rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    minHeight: '24px',
                    minWidth: '32px'
                  }}
                />
              </div>
              
              {isAuthenticated && (
                <span style={{ 
                  color: '#F7FAFC', 
                  fontWeight: '500', 
                  fontSize: '0.6rem',
                  opacity: 0.7,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '0.25rem'
                }}>
                  Enhanced active
                </span>
              )}
            </>
          ) : typeof window !== 'undefined' && window.innerWidth <= 1024 ? (
            // Tablet Layout - Medium
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ 
                  color: '#F7FAFC',
                  fontWeight: '500',
                  fontSize: '0.8rem',
                  opacity: 0.9
                }}>
                  {isAuthenticated ? '🎨 Enhanced mode' : '🔒 Sign in for features'}
                </span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#F7FAFC', fontWeight: '500', fontSize: '0.7rem' }}>
                  Mood
                </span>
                <MoodToggle
                  style={{
                    padding: '0.35rem 0.7rem',
                    border: 'none',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: '#F7FAFC',
                    borderRadius: '16px',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                
                <span style={{ color: '#F7FAFC', fontWeight: '500', fontSize: '0.7rem' }}>
                  Reflect
                </span>
                <ReflectionModeToggle
                  style={{
                    padding: '0.35rem 0.7rem',
                    border: 'none',
                    borderRadius: '16px',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
              </div>
            </>
          ) : (
            // Desktop Layout - Full
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ 
                  color: '#F7FAFC',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  opacity: 0.9
                }}>
                  {isAuthenticated ? (
                    <>
                      <AtmosphereIcon size={16} color="#F7FAFC" />
                      Atmosphere adapted
                    </>
                  ) : (
                    <>
                      <LockClosedIcon size={16} color="#F7FAFC" />
                      Sign in for enhanced features
                    </>
                  )}
                </span>
                {isAuthenticated && (
                  <span style={{ 
                    color: '#F7FAFC',
                    fontWeight: '600',
                    fontSize: '0.875rem'
                  }}>
                    <EnhancedIcon size={16} color="#F7FAFC" />
                    Enhanced features active
                  </span>
                )}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#F7FAFC', fontWeight: '500', fontSize: '0.75rem' }}>
                  Mood Background
                </span>
                <MoodToggle
                  style={{
                    padding: '0.4rem 0.8rem',
                    border: 'none',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: '#F7FAFC',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                
                <span style={{ color: '#F7FAFC', fontWeight: '500', fontSize: '0.75rem' }}>
                  Interactive Reflections
                </span>
                <ReflectionModeToggle
                  style={{
                    padding: '0.4rem 0.8rem',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
              </div>
            </>
          )}
        </div>

        <ArticleHighlights 
          articleId={articleId} 
          articleTitle={articleTitle}
          articleSlug={articleSlug}
        >
          <div className={styles.articleContent}>
            {/* Original article content with preserved formatting */}
            <div 
              ref={articleContainerRef}
              dangerouslySetInnerHTML={{ __html: getContentToDisplay() }}
            />
          </div>
          
          {/* Isolated Reflection Component */}
          <ReflectionToggle articleId={articleId} />


        </ArticleHighlights>
      </article>
    </HighlightProvider>
  );
};

export default ArticleWithHighlights; 