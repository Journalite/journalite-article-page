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
  mood?: 'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic';
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  articleId,
  articleHtml,
  isAuthenticated,
  articleTitle,
  articleSlug,
  hasReflectionRoom = false,
  moodFeatureEnabled,
  onToggleMoodFeature,
  mood
}) => {
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
        onToggleMoodFeature: onToggleMoodFeature,
        mood: mood
      })}
    />
  );
};

// Use React.memo with optimized comparison for props
export default React.memo(ArticleContent, (prevProps, nextProps) => {
  // Only check essential props that would actually cause different rendering
  return (
    prevProps.articleId === nextProps.articleId &&
    prevProps.articleHtml === nextProps.articleHtml &&
    prevProps.isAuthenticated === nextProps.isAuthenticated &&
    prevProps.articleTitle === nextProps.articleTitle &&
    prevProps.articleSlug === nextProps.articleSlug &&
    prevProps.hasReflectionRoom === nextProps.hasReflectionRoom &&
    prevProps.moodFeatureEnabled === nextProps.moodFeatureEnabled &&
    prevProps.mood === nextProps.mood
    // Note: onToggleMoodFeature is a callback that might change on every render
    // but doesn't affect the component's visual output directly
  );
}); 