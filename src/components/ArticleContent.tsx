"use client"

import React from 'react';
import ArticleWithHighlights from './ArticleWithHighlights';

interface ArticleContentProps {
  articleId: string;
  articleHtml: string | null;
  isAuthenticated: boolean;
  articleTitle: string;
  articleSlug: string;
  hasReflectionRoom?: boolean;
  moodFeatureEnabled?: boolean;
  onToggleMoodFeature?: (enabled: boolean) => void;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  articleId,
  articleHtml,
  isAuthenticated,
  articleTitle,
  articleSlug,
  hasReflectionRoom = false,
  moodFeatureEnabled,
  onToggleMoodFeature
}) => {
  // Debug re-renders
  console.log('📝 ArticleContent re-rendered at:', new Date().toLocaleTimeString());
  
  return (
    <ArticleWithHighlights 
      articleId={articleId} 
      initialHtml={articleHtml || undefined}
      isAuthenticated={isAuthenticated}
      articleTitle={articleTitle}
      articleSlug={articleSlug}
      hasReflectionRoom={hasReflectionRoom}
      {...(isAuthenticated && {
        moodFeatureEnabled: moodFeatureEnabled,
        onToggleMoodFeature: onToggleMoodFeature
      })}
    />
  );
};

// Use React.memo with deep comparison for props
export default React.memo(ArticleContent, (prevProps, nextProps) => {
  const shouldNotRerender = (
    prevProps.articleId === nextProps.articleId &&
    prevProps.articleHtml === nextProps.articleHtml &&
    prevProps.isAuthenticated === nextProps.isAuthenticated &&
    prevProps.articleTitle === nextProps.articleTitle &&
    prevProps.articleSlug === nextProps.articleSlug &&
    prevProps.hasReflectionRoom === nextProps.hasReflectionRoom &&
    prevProps.moodFeatureEnabled === nextProps.moodFeatureEnabled &&
    prevProps.onToggleMoodFeature === nextProps.onToggleMoodFeature
  );
  
  if (!shouldNotRerender) {
    console.log('📝 ArticleContent memo comparison - will re-render because:', {
      articleId: prevProps.articleId !== nextProps.articleId,
      articleHtml: prevProps.articleHtml !== nextProps.articleHtml,
      isAuthenticated: prevProps.isAuthenticated !== nextProps.isAuthenticated,
      articleTitle: prevProps.articleTitle !== nextProps.articleTitle,
      articleSlug: prevProps.articleSlug !== nextProps.articleSlug,
      hasReflectionRoom: prevProps.hasReflectionRoom !== nextProps.hasReflectionRoom,
      moodFeatureEnabled: prevProps.moodFeatureEnabled !== nextProps.moodFeatureEnabled,
      onToggleMoodFeature: prevProps.onToggleMoodFeature !== nextProps.onToggleMoodFeature
    });
  }
  
  return shouldNotRerender;
}); 