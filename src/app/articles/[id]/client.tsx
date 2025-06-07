'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/firebase/clientApp';
import ArticleWithHighlights from '@/components/ArticleWithHighlights';
import CommentSection from '@/components/CommentSection';
import ArticleComposer from '@/components/ArticleComposer';
import { getArticleById, Article } from '@/firebase/articles';
import styles from '@/styles/ArticlePage.module.css';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';

interface ArticlePageClientProps {
  id: string;
}

const ArticlePageClient: React.FC<ArticlePageClientProps> = ({ id }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [articleHtml, setArticleHtml] = useState<string | null>(null);
  const [article, setArticle] = useState<{
    title: string;
    authorName: string;
    createdAt: string;
    readTime: number;
    likes?: string[];
    tags?: string[];
    authorId?: string;
  } | null>(null);
  const [likes, setLikes] = useState<string[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Mood detection state
  const [mood, setMood] = useState<'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic'>('reflective');
  const [moodFeatureEnabled, setMoodFeatureEnabled] = useState(true);
  
  // Set up authentication listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);
  
  // Load mood feature preference from localStorage (only for authenticated users)
  useEffect(() => {
    if (isAuthenticated) {
      const savedPreference = localStorage.getItem('moodFeatureEnabled');
      if (savedPreference !== null) {
        setMoodFeatureEnabled(JSON.parse(savedPreference));
      } else {
        setMoodFeatureEnabled(true);
      }
    } else {
      setMoodFeatureEnabled(false);
    }
  }, [isAuthenticated]);
  
  // Create a function to fetch article data that can be called multiple times
  const fetchArticle = async () => {
    try {
      console.log(`Fetching article with ID: ${id}, timestamp: ${Date.now()}`);
      setIsLoading(true);
      
      // Add slight delay to ensure Firebase has updated completely
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const articleData = await getArticleById(id);
      console.log('Article data received:', articleData?.title, 'Content length:', articleData?.body?.length || 0);
      
      if (!articleData) {
        setError('Article not found');
        return;
      }
      
      // Get the HTML content directly
      const cleanHtml = articleData.body
        ? articleData.body
            .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
            .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '')
        : '';
      
      setArticleHtml(cleanHtml);
      
      // Set likes data
      setLikes(articleData.likes || []);
      
      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = articleData.body ? articleData.body.split(/\s+/).length : 0;
      const readTimeMinutes = Math.ceil(wordCount / 200);
      
      // Format date
      const date = articleData.createdAt 
        ? new Date(articleData.createdAt.seconds * 1000).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : 'Unknown date';
      
      setArticle({
        title: articleData.title || 'Untitled Article',
        authorName: articleData.authorName || 'Anonymous',
        createdAt: date,
        readTime: readTimeMinutes,
        likes: articleData.likes || [],
        tags: articleData.tags || [],
        authorId: articleData.authorId
      });
      
    } catch (error) {
      console.error('Error loading article:', error);
      setError('Failed to load article');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Load article data when component mounts or id changes
  useEffect(() => {
    fetchArticle();
  }, [id]);
  
  // Update like status based on current user
  useEffect(() => {
    if (article?.likes && currentUser) {
      setIsLiked(article.likes.includes(currentUser.uid));
    }
  }, [article, currentUser]);
  
  // Analyze mood when article content is loaded (only for authenticated users)
  useEffect(() => {
    if (articleHtml && isAuthenticated) {
      // Extract text from HTML for sentiment analysis
      const textContent = articleHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (textContent) {
        const detectedMood = getMoodFromText(textContent);
        setMood(detectedMood);
      }
    }
  }, [articleHtml, isAuthenticated]);
  

  
  const handleLikeArticle = async () => {
    if (!currentUser) {
      // Prompt to login
      alert('Please login to like articles');
      return;
    }
    
    try {
      // This is a simplified placeholder - you would call your API here
      // to update the likes in your database
      if (isLiked) {
        setLikes(likes.filter(uid => uid !== currentUser.uid));
        setIsLiked(false);
      } else {
        setLikes([...likes, currentUser.uid]);
        setIsLiked(true);
      }
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // Handle article updates
  const handleUpdateComplete = (updatedArticle?: Article | null) => {
    console.log('Article update complete with data:', updatedArticle);
    // Force a more thorough reload by setting loading state
    setIsLoading(true);
    
    // Clear any cached article content first
    setArticleHtml(null);
    setArticle(null);
    
    // Do a complete hard reload of the page to ensure we get fresh data
    if (updatedArticle) {
      console.log('Forcing hard reload to see updated content');
      // Using a more aggressive approach with window.location.href and cache-busting
      window.location.href = `/articles/${id}?reload=${Date.now()}`;
    } else {
      // Fallback if no updated article is provided - fetch fresh data
      setTimeout(() => {
        // Reload the article data when update is complete
        fetchArticle();
      }, 800);
    }
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

  if (isEditing) {
    return (
      <div>
        <div className={styles.editingHeader}>
          <button onClick={handleCancelEdit} className={styles.cancelButton}>
            ← Back to Article
          </button>
          <h2>Editing: {article?.title}</h2>
        </div>
        <ArticleComposer articleId={id} onUpdateComplete={handleUpdateComplete} />
      </div>
    );
  }
  
  return (
    <div 
      className={styles.articlePageContainer}
      style={{ position: 'relative', backgroundColor: '#ffffff' }}
    >
      {/* Dynamic animated mood gradient overlay (only for authenticated users) */}
      {moodFeatureEnabled && isAuthenticated && (
        <>
          {/* Primary flowing gradient */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(45deg, 
                ${moodThemes[mood].gradientStart}40, 
                ${moodThemes[mood].gradientEnd}60, 
                ${moodThemes[mood].gradientStart}30, 
                ${moodThemes[mood].gradientEnd}50)`,
              backgroundSize: '400% 400%',
              animation: 'gradientFlow 8s ease-in-out infinite',
              filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
              zIndex: 0,
              transition: 'background-image 1s ease-in-out',
              pointerEvents: 'none'
            }}
          />
          
          {/* Secondary wave layer */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 20% 80%, ${moodThemes[mood].gradientEnd}25 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${moodThemes[mood].gradientStart}25 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, ${moodThemes[mood].gradientEnd}15 0%, transparent 50%)`,
              backgroundSize: '600px 600px, 800px 800px, 400px 400px',
              animation: 'moodFloat 12s ease-in-out infinite alternate',
              zIndex: 1,
              opacity: 0.6,
              pointerEvents: 'none'
            }}
          />
          
          {/* Floating orbs */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `radial-gradient(circle at 25% 25%, ${moodThemes[mood].gradientStart}20 0%, transparent 25%),
                radial-gradient(circle at 75% 75%, ${moodThemes[mood].gradientEnd}20 0%, transparent 25%),
                radial-gradient(circle at 50% 10%, ${moodThemes[mood].gradientStart}15 0%, transparent 30%),
                radial-gradient(circle at 10% 90%, ${moodThemes[mood].gradientEnd}15 0%, transparent 30%)`,
              backgroundSize: '300px 300px, 500px 500px, 200px 200px, 400px 400px',
              animation: 'orbitalFloat 20s linear infinite',
              zIndex: 2,
              opacity: 0.4,
              pointerEvents: 'none'
            }}
          />
          
          {/* Grain texture overlay */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                ${moodThemes[mood].gradientStart}02 2px,
                ${moodThemes[mood].gradientStart}02 4px
              )`,
              zIndex: 3,
              opacity: 0.15,
              mixBlendMode: 'overlay',
              pointerEvents: 'none'
            }}
          />
        </>
      )}
      
      <header 
        className={styles.pageHeader}
        style={moodFeatureEnabled && isAuthenticated ? {
          position: 'relative', 
          zIndex: 10000,
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%, 
            ${moodThemes[mood].gradientStart}12 40%, 
            ${moodThemes[mood].gradientEnd}08 100%)`,
          backdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: `1px solid ${moodThemes[mood].gradientStart}25`,
          boxShadow: `
            0 2px 8px -2px ${moodThemes[mood].gradientStart}15,
            0 8px 32px -8px ${moodThemes[mood].gradientStart}20,
            inset 0 1px 0 rgba(255, 255, 255, 0.25),
            inset 0 -1px 0 ${moodThemes[mood].gradientStart}10
          `,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: `1px solid ${moodThemes[mood].gradientStart}15`,
          borderTop: 'none'
        } : { 
          position: 'relative', 
          zIndex: 10000 
        }}
      >
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.backLink}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Home
          </Link>
          <div 
            className={styles.headerLogo}
            style={moodFeatureEnabled && isAuthenticated ? {
              color: moodThemes[mood].accent,
              fontWeight: '700',
              textShadow: `0 0 20px ${moodThemes[mood].gradientStart}30, 0 0 40px ${moodThemes[mood].gradientStart}15`,
              transition: 'all 0.3s ease'
            } : {
              fontWeight: '700'
            }}
          >
            Journalite
          </div>
        </div>
      </header>
      
      <div className={styles.pageContainer}>
        {/* Article header */}
        {article && (
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            
            <div className={styles.articleMeta}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>{article.authorName.charAt(0)}</div>
                <div className={styles.authorDetails}>
                  <div className={styles.authorName}>{article.authorName}</div>
                  <div className={styles.articleDetails}>
                    {article.createdAt} · {article.readTime} min read
                  </div>
                </div>
              </div>
              
              <div className={styles.articleActions}>
                <button 
                  className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
                  onClick={handleLikeArticle}
                  aria-label={isLiked ? 'Unlike article' : 'Like article'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className={styles.likeIcon}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{likes.length > 0 ? likes.length : ''}</span>
                </button>
              
                {currentUser && article.authorId === currentUser.uid && (
                  <button 
                    className={styles.editButton}
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
            
            {article.tags && article.tags.length > 0 && (
              <div className={styles.tagContainer}>
                {article.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
          </header>
        )}
        
        {/* Article content with highlights */}
        <ArticleWithHighlights 
          articleId={id} 
          initialHtml={articleHtml || undefined}
          isAuthenticated={isAuthenticated}
          articleTitle={article?.title || 'Article'}
          articleSlug={article?.title ? article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : id}
          {...(isAuthenticated && {
            moodFeatureEnabled: moodFeatureEnabled,
            onToggleMoodFeature: (enabled) => {
              setMoodFeatureEnabled(enabled);
              localStorage.setItem('moodFeatureEnabled', JSON.stringify(enabled));
            }
          })}
        />
        
        {/* Comments section */}
        <div className={styles.commentsContainer}>
          <CommentSection 
            articleId={id} 
            {...(isAuthenticated && {
              mood: mood,
              moodFeatureEnabled: moodFeatureEnabled
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePageClient; 