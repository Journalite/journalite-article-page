'use client'

import React from 'react';
import ArticleContent from './ArticleContent';
import LikeButton from './LikeButton';
import ExternalLikeButton from './ExternalLikeButton';
import ActiveReaders from './ActiveReaders';
import { getUserGradient } from '@/utils/avatarUtils';
import styles from '@/styles/ArticlePage.module.css';

interface ArticleLayoutProps {
  // Article data (stable)
  articleId: string;
  articleHtml: string | null;
  article: {
    title: string;
    authorName: string;
    createdAt: string;
    readTime: number;
    tags?: string[];
    authorId?: string;
    hasReflectionRoom?: boolean;
  } | null;
  initialLikes: string[];
  
  // User data (semi-stable)
  currentUser: any;
  isAuthenticated: boolean;
  
  // Callbacks (should be stable with useCallback)
  onEditClick: () => void;
  
  // Other props
  articleTitle: string;
  articleSlug: string;
  
  // Mood feature props
  moodFeatureEnabled?: boolean;
  onToggleMoodFeature?: (enabled: boolean) => void;
  mood?: 'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic';
  
  // External article props (for Guardian/NewsAPI)
  isExternal?: boolean;
  externalSource?: 'guardian' | 'newsapi';
  externalId?: string;
  externalUrl?: string;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  articleId,
  articleHtml,
  article,
  initialLikes,
  currentUser,
  isAuthenticated,
  onEditClick,
  articleTitle,
  articleSlug,
  moodFeatureEnabled,
  onToggleMoodFeature,
  mood,
  isExternal = false,
  externalSource,
  externalId,
  externalUrl
}) => {
  return (
    <div className={styles.pageContainer}>
      {/* Article header */}
      {article && (
        <header className={styles.articleHeader}>
          <div className={styles.articleHeaderWithReaders}>
            <div className={styles.titleSection}>
              <h1 className={styles.articleTitle} style={{ margin: 0 }}>{article.title}</h1>
            </div>
            <div className={styles.readersSection}>
              <ActiveReaders articleId={articleId} />
            </div>
          </div>
          
          <div className={styles.articleMeta}>
            <div className={styles.authorInfo}>
              <div 
                className={styles.authorAvatar}
                style={{
                  background: article.authorId 
                    ? `linear-gradient(135deg, ${getUserGradient(article.authorId, article.authorName)})` 
                    : '#1a8917', // fallback to original color if no authorId
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
              >
                {article.authorName.charAt(0)}
              </div>
              <div className={styles.authorDetails}>
                <div className={styles.authorName}>{article.authorName}</div>
                <div className={styles.articleDetails}>
                  {article.createdAt} · {article.readTime} min read
                </div>
              </div>
            </div>
            
            <div className={styles.articleActions}>
              {isExternal && externalSource && externalId ? (
                <ExternalLikeButton
                  externalId={externalId}
                  source={externalSource}
                  title={article.title}
                  url={externalUrl || ''}
                  initialLikes={initialLikes}
                  className={styles.likeButton}
                  styles={styles}
                />
              ) : (
                <LikeButton
                  articleId={articleId}
                  initialLikes={initialLikes}
                  className={styles.likeButton}
                  styles={styles}
                />
              )}
            
              {currentUser && article.authorId === currentUser.uid && (
                <button 
                  className={styles.editButton}
                  onClick={onEditClick}
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
      <ArticleContent 
        articleId={articleId} 
        articleHtml={articleHtml}
        isAuthenticated={isAuthenticated}
        articleTitle={articleTitle}
        articleSlug={articleSlug}
        hasReflectionRoom={article?.hasReflectionRoom || false}
        moodFeatureEnabled={moodFeatureEnabled}
        onToggleMoodFeature={onToggleMoodFeature}
        mood={mood}
      />
    </div>
  );
};

// Aggressive memoization - only re-render if core content changes
export default React.memo(ArticleLayout, (prevProps, nextProps) => {
  const shouldNotRerender = (
    // Core article data (including articleId for ActiveReaders)
    prevProps.articleId === nextProps.articleId &&
    prevProps.articleHtml === nextProps.articleHtml &&
    prevProps.article?.title === nextProps.article?.title &&
    prevProps.article?.authorName === nextProps.article?.authorName &&
    prevProps.article?.createdAt === nextProps.article?.createdAt &&
    prevProps.article?.readTime === nextProps.article?.readTime &&
    prevProps.article?.authorId === nextProps.article?.authorId &&
    prevProps.article?.hasReflectionRoom === nextProps.article?.hasReflectionRoom &&
    
    // User state
    prevProps.isAuthenticated === nextProps.isAuthenticated &&
    prevProps.currentUser?.uid === nextProps.currentUser?.uid &&
    
    // Stable props
    prevProps.articleTitle === nextProps.articleTitle &&
    prevProps.articleSlug === nextProps.articleSlug &&
    
    // Mood feature props
    prevProps.moodFeatureEnabled === nextProps.moodFeatureEnabled &&
    prevProps.mood === nextProps.mood &&
    
    // External article props
    prevProps.isExternal === nextProps.isExternal &&
    prevProps.externalSource === nextProps.externalSource &&
    prevProps.externalId === nextProps.externalId &&
    prevProps.externalUrl === nextProps.externalUrl &&
    
    // Callbacks (should be stable)
    prevProps.onEditClick === nextProps.onEditClick &&
    prevProps.onToggleMoodFeature === nextProps.onToggleMoodFeature
  );
  
  return shouldNotRerender;
}); 