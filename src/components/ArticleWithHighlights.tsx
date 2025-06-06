'use client'

import React, { useEffect, useState, useRef } from 'react';
import { HighlightProvider } from '@/context/HighlightContext';
import ArticleHighlights from './ArticleHighlights';
import styles from '@/styles/ArticleWithHighlights.module.css';
import { getArticle } from '@/services/articleService';
import { highlightCodeBlocks } from '@/utils/syntaxHighlighter';
import ClientSideHighlighter from './ClientSideHighlighter';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';

interface ArticleWithHighlightsProps {
  articleId: string;
  initialHtml?: string;
  isAuthenticated?: boolean;
  moodFeatureEnabled?: boolean;
  onToggleMoodFeature?: (enabled: boolean) => void;
}

const ArticleWithHighlights: React.FC<ArticleWithHighlightsProps> = ({
  articleId,
  initialHtml,
  isAuthenticated = false,
  moodFeatureEnabled = true,
  onToggleMoodFeature
}) => {
  const [article, setArticle] = useState<{ title: string; body: string } | null>(null);
  const [isLoading, setIsLoading] = useState(!initialHtml);
  const [error, setError] = useState('');
  const [reflectionsEnabled, setReflectionsEnabled] = useState(false);
  const [showReflectionPanel, setShowReflectionPanel] = useState(false);
  const [reflectionCount, setReflectionCount] = useState(0);
  const [currentReflection, setCurrentReflection] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mood, setMood] = useState<'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic'>('reflective');
  const articleContainerRef = useRef<HTMLDivElement>(null);

  // Base reflection prompts
  const basePrompts = [
    "How does this make you feel?",
    "What questions does this raise for you?",
    "How does this connect to your own experiences?",
    "What would you have done differently?",
    "What surprises you most about this?",
    "How might this change your perspective?",
    "What emotions are you experiencing right now?",
    "What does this remind you of?",
    "If you could ask the author one question, what would it be?",
    "How does this challenge your existing beliefs?"
  ];

  // Topic-based prompts (without AI)
  const getTopicBasedPrompts = (content: string) => {
    const text = content.toLowerCase();
    const topicPrompts: string[] = [];

    // Technology/Business
    if (text.includes('technology') || text.includes('innovation') || text.includes('digital') || text.includes('business')) {
      topicPrompts.push("How might this technology impact your daily life?");
      topicPrompts.push("What are the potential risks and benefits you see?");
    }

    // Politics/Government
    if (text.includes('government') || text.includes('policy') || text.includes('president') || text.includes('election')) {
      topicPrompts.push("How do you think this policy might affect different communities?");
      topicPrompts.push("What would you propose as an alternative approach?");
    }

    // Health/Science
    if (text.includes('health') || text.includes('medical') || text.includes('research') || text.includes('study')) {
      topicPrompts.push("How reliable do you think this research is?");
      topicPrompts.push("How might this affect healthcare decisions?");
    }

    // Environment/Climate
    if (text.includes('environment') || text.includes('climate') || text.includes('energy') || text.includes('sustainability')) {
      topicPrompts.push("What actions could you personally take based on this information?");
      topicPrompts.push("How do you balance environmental concerns with other priorities?");
    }

    // Education
    if (text.includes('education') || text.includes('school') || text.includes('learning') || text.includes('student')) {
      topicPrompts.push("How does this compare to your own educational experience?");
      topicPrompts.push("What changes would you make to improve this system?");
    }

    // Social Issues
    if (text.includes('social') || text.includes('community') || text.includes('justice') || text.includes('equality')) {
      topicPrompts.push("What role do you think individuals should play in addressing this issue?");
      topicPrompts.push("How might different communities view this differently?");
    }

    return topicPrompts;
  };

  const getAllAvailablePrompts = () => {
    const content = getContentToDisplay();
    const topicPrompts = getTopicBasedPrompts(content);
    return [...basePrompts, ...topicPrompts];
  };

  const getDefaultPrompt = () => {
    const allPrompts = getAllAvailablePrompts();
    return allPrompts[reflectionCount % allPrompts.length];
  };

  // Enable reflections only for authenticated users
  useEffect(() => {
    setReflectionsEnabled(isAuthenticated);
  }, [isAuthenticated]);

  // Initialize prompt when panel opens
  useEffect(() => {
    if (showReflectionPanel && !currentPrompt) {
      setCurrentPrompt(getDefaultPrompt());
    }
  }, [showReflectionPanel, reflectionCount]);

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
      if (textContent) {
        const detectedMood = getMoodFromText(textContent);
        setMood(detectedMood);
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

  const handleReflectionSubmit = async () => {
    if (!currentReflection.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      console.log('Starting reflection submission:', {
        articleId,
        currentPrompt,
        currentReflection,
        reflectionCount
      });
      
      // Import the reflection service
      const { saveReflectionResponse } = await import('@/services/reflectionService');
      
      // Save the reflection with proper metadata
      await saveReflectionResponse(
        articleId, // This is the article slug
        `prompt_${Date.now()}`, // Generate a unique prompt ID
        currentPrompt,
        currentReflection,
        reflectionCount, // Use reflection count as position
        true // isPrivate
      );
      
      console.log('Reflection saved successfully:', { 
        articleId, 
        prompt: currentPrompt, 
        response: currentReflection, 
        count: reflectionCount + 1 
      });
      
      // Update count and close panel
      setReflectionCount(prev => prev + 1);
      setCurrentReflection('');
      setCurrentPrompt('');
      setIsEditingPrompt(false);
      setShowReflectionPanel(false);
    } catch (error) {
      console.error('Error saving reflection:', error);
      alert('Error saving reflection. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleReflectionPanel = () => {
    if (reflectionsEnabled) {
      setShowReflectionPanel(!showReflectionPanel);
      if (!showReflectionPanel) {
        setCurrentReflection('');
        setCurrentPrompt(getDefaultPrompt());
        setIsEditingPrompt(false);
      }
    }
  };

  const handlePromptEdit = () => {
    setIsEditingPrompt(true);
  };

  const handlePromptSave = () => {
    setIsEditingPrompt(false);
  };

  const getRandomPrompt = () => {
    const allPrompts = getAllAvailablePrompts();
    const randomIndex = Math.floor(Math.random() * allPrompts.length);
    setCurrentPrompt(allPrompts[randomIndex]);
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
      <ClientSideHighlighter />
      <article className={styles.articleContainer}>
        {/* Reflection Settings */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '1rem', 
          margin: '1rem 0',
          padding: '1rem',
          backgroundImage: isAuthenticated 
            ? `linear-gradient(270deg, ${moodThemes[mood].gradientStart}, ${moodThemes[mood].gradientEnd})`
            : 'linear-gradient(270deg, #9CA3AF, #6B7280)',
          backgroundSize: '200% 200%',
          animation: 'slideGradient 8s ease infinite alternate',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          fontSize: '0.875rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ 
              color: '#F7FAFC',
              fontWeight: '500',
              fontSize: '0.875rem',
              opacity: 0.9
            }}>
              {isAuthenticated ? '🎨 Atmosphere adapted' : '🔒 Sign in for enhanced features'}
            </span>
            {isAuthenticated && (
              <span style={{ 
                color: '#F7FAFC',
                fontWeight: '600',
                fontSize: '0.875rem'
              }}>
                ✨ Reflections saved: {reflectionCount}
              </span>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Mood Background Toggle */}
            <span style={{ color: '#F7FAFC', fontWeight: '500', fontSize: '0.75rem' }}>
              Mood Background
            </span>
            <button
              onClick={isAuthenticated && onToggleMoodFeature ? () => onToggleMoodFeature(!moodFeatureEnabled) : undefined}
              style={{
                padding: '0.4rem 0.8rem',
                border: 'none',
                background: (isAuthenticated && moodFeatureEnabled) 
                  ? 'rgba(255, 255, 255, 0.9)' 
                  : 'rgba(255, 255, 255, 0.2)',
                color: (isAuthenticated && moodFeatureEnabled) ? moodThemes[mood].accent : '#F7FAFC',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '600',
                cursor: isAuthenticated ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                boxShadow: (isAuthenticated && moodFeatureEnabled) 
                  ? '0 2px 8px rgba(255, 255, 255, 0.3)' 
                  : '0 1px 4px rgba(0, 0, 0, 0.1)',
                transform: 'scale(1)',
                backdropFilter: 'blur(10px)',
                opacity: isAuthenticated ? 1 : 0.6
              }}
              onMouseEnter={(e) => {
                if (isAuthenticated) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (isAuthenticated) {
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {(isAuthenticated && moodFeatureEnabled) ? 'ON' : 'OFF'}
            </button>
            
            <span style={{ color: '#F7FAFC', fontWeight: '500' }}>
              Interactive Reflections
            </span>
            <button
              onClick={isAuthenticated ? () => setReflectionsEnabled(!reflectionsEnabled) : undefined}
              style={{
                padding: '0.6rem 1.2rem',
                border: 'none',
                background: (isAuthenticated && reflectionsEnabled) 
                  ? 'rgba(255, 255, 255, 0.9)' 
                  : 'rgba(255, 255, 255, 0.2)',
                color: (isAuthenticated && reflectionsEnabled) ? moodThemes[mood].accent : '#F7FAFC',
                borderRadius: '25px',
                fontSize: '0.75rem',
                fontWeight: '600',
                cursor: isAuthenticated ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                boxShadow: (isAuthenticated && reflectionsEnabled) 
                  ? '0 4px 15px rgba(255, 255, 255, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
                transform: 'scale(1)',
                backdropFilter: 'blur(10px)',
                opacity: isAuthenticated ? 1 : 0.6
              }}
              onMouseEnter={(e) => {
                if (isAuthenticated) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.background = reflectionsEnabled 
                    ? 'rgba(255, 255, 255, 1)' 
                    : 'rgba(255, 255, 255, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (isAuthenticated) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.background = reflectionsEnabled 
                    ? 'rgba(255, 255, 255, 0.9)' 
                    : 'rgba(255, 255, 255, 0.2)';
                }
              }}
            >
              {(isAuthenticated && reflectionsEnabled) ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        <ArticleHighlights articleId={articleId} onShare={handleShare}>
          <div className={styles.articleContent}>
            {/* Original article content with preserved formatting */}
            <div 
              ref={articleContainerRef}
              dangerouslySetInnerHTML={{ __html: getContentToDisplay() }}
            />
          </div>
          
          {/* Elegant Floating Reflection Button */}
          {reflectionsEnabled && (
            <button
              onClick={toggleReflectionPanel}
              style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: showReflectionPanel 
                  ? 'linear-gradient(135deg, #1d4ed8, #7c3aed)' 
                  : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                border: 'none',
                boxShadow: showReflectionPanel
                  ? '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.2)'
                  : '0 6px 20px rgba(59, 130, 246, 0.3)',
                cursor: 'pointer',
                zIndex: 1000,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                transform: showReflectionPanel ? 'scale(1.05)' : 'scale(1)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.5), 0 0 0 3px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = showReflectionPanel ? 'scale(1.05)' : 'scale(1)';
                e.currentTarget.style.boxShadow = showReflectionPanel
                  ? '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.2)'
                  : '0 6px 20px rgba(59, 130, 246, 0.3)';
              }}
              title={showReflectionPanel ? "Close reflection" : "Open reflection"}
            >
              {showReflectionPanel ? '✕' : '✍️'}
            </button>
          )}

          {/* Custom Floating Reflection Panel */}
          {showReflectionPanel && reflectionsEnabled && (
            <div style={{
              position: 'fixed',
              bottom: '110px',
              right: '40px',
              width: '380px',
              maxHeight: '500px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              zIndex: 999,
              animation: 'gentleSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              padding: '24px',
              overflow: 'hidden'
            }}>
              <style>
                {`
                  @keyframes gentleSlideUp {
                    from {
                      opacity: 0;
                      transform: translateY(20px) scale(0.98);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0) scale(1);
                    }
                  }
                `}
              </style>
              
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08))',
                borderRadius: '24px 24px 0 0',
                zIndex: -1
              }} />
              
              {/* Header */}
              <div style={{
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <h3 style={{
                  margin: '0 0 12px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Time to Reflect ✨
                </h3>
                
                {/* Editable Prompt */}
                <div style={{ position: 'relative' }}>
                  {isEditingPrompt ? (
                    <input
                      type="text"
                      value={currentPrompt}
                      onChange={(e) => setCurrentPrompt(e.target.value)}
                      onBlur={handlePromptSave}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handlePromptSave();
                        if (e.key === 'Escape') {
                          setCurrentPrompt(getDefaultPrompt());
                          setIsEditingPrompt(false);
                        }
                      }}
                      autoFocus
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '2px solid #3b82f6',
                        borderRadius: '12px',
                        background: 'white',
                        fontSize: '14px',
                        textAlign: 'center',
                        outline: 'none'
                      }}
                    />
                  ) : (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}>
                      <p 
                        onClick={handlePromptEdit}
                        style={{
                          margin: 0,
                          fontSize: '14px',
                          color: '#64748b',
                          fontWeight: '500',
                          cursor: 'pointer',
                          padding: '4px 8px',
                          borderRadius: '8px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                          e.currentTarget.style.color = '#3b82f6';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#64748b';
                        }}
                        title="Click to edit question"
                      >
                        {currentPrompt}
                      </p>
                      <button
                        onClick={getRandomPrompt}
                        style={{
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '4px 8px',
                          fontSize: '12px',
                          color: '#3b82f6',
                          cursor: 'pointer',
                          fontWeight: '500'
                        }}
                        title="Get different question"
                      >
                        🎲
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Reflection Input */}
              <textarea
                value={currentReflection}
                onChange={(e) => setCurrentReflection(e.target.value)}
                placeholder="Share your thoughts..."
                style={{
                  width: '100%',
                  height: '120px',
                  padding: '16px',
                  border: '2px solid transparent',
                  borderRadius: '16px',
                  background: 'rgba(248, 250, 252, 0.8)',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'none',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.05)',
                  marginBottom: '20px'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.boxShadow = 'inset 0 2px 8px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'transparent';
                  e.target.style.background = 'rgba(248, 250, 252, 0.8)';
                  e.target.style.boxShadow = 'inset 0 2px 8px rgba(0, 0, 0, 0.05)';
                }}
              />

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end'
              }}>
                <button
                  onClick={() => setShowReflectionPanel(false)}
                  style={{
                    padding: '10px 18px',
                    border: 'none',
                    borderRadius: '16px',
                    background: 'rgba(148, 163, 184, 0.2)',
                    color: '#64748b',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(148, 163, 184, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(148, 163, 184, 0.2)';
                  }}
                >
                  Skip
                </button>
                <button
                  onClick={handleReflectionSubmit}
                  disabled={!currentReflection.trim() || isSubmitting}
                  style={{
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '16px',
                    background: currentReflection.trim() 
                      ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                      : 'rgba(148, 163, 184, 0.3)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: currentReflection.trim() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.3s ease',
                    boxShadow: currentReflection.trim() 
                      ? '0 4px 15px rgba(59, 130, 246, 0.4)' 
                      : 'none',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (currentReflection.trim() && !isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = currentReflection.trim() 
                      ? '0 4px 15px rgba(59, 130, 246, 0.4)' 
                      : 'none';
                  }}
                >
                  {isSubmitting ? 'Saving...' : 'Save Reflection'}
                </button>
              </div>
            </div>
          )}
        </ArticleHighlights>
      </article>
    </HighlightProvider>
  );
};

export default ArticleWithHighlights; 