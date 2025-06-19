'use client'

import React from 'react';
import ArticleContent from './ArticleContent';
import LikeButton from './LikeButton';
import ActiveReaders from './ActiveReaders';
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
  articleSlug
}) => {
  console.log('🏗️ ArticleLayout re-rendered at:', new Date().toLocaleTimeString());

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
              <div className={styles.authorAvatar}>{article.authorName.charAt(0)}</div>
              <div className={styles.authorDetails}>
                <div className={styles.authorName}>{article.authorName}</div>
                <div className={styles.articleDetails}>
                  {article.createdAt} · {article.readTime} min read
                </div>
              </div>
            </div>
            
            <div className={styles.articleActions}>
              <LikeButton
                articleId={articleId}
                initialLikes={initialLikes}
                className={styles.likeButton}
                styles={styles}
              />
            
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
    
    // User state
    prevProps.isAuthenticated === nextProps.isAuthenticated &&
    prevProps.currentUser?.uid === nextProps.currentUser?.uid &&
    
    // Stable props
    prevProps.articleTitle === nextProps.articleTitle &&
    prevProps.articleSlug === nextProps.articleSlug &&
    
    // Callbacks (should be stable)
    prevProps.onEditClick === nextProps.onEditClick
  );
  
  if (!shouldNotRerender) {
    console.log('🏗️ ArticleLayout memo - will re-render because something changed');
  }
  
  return shouldNotRerender;
}); 