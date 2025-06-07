"use client"

import React from 'react';
import ArticleWithHighlights from './ArticleWithHighlights';

interface ArticleContentProps {
  articleId: string;
  articleHtml: string | null;
  isAuthenticated: boolean;
  articleTitle: string;
  articleSlug: string;
  moodFeatureEnabled?: boolean;
  onToggleMoodFeature?: (enabled: boolean) => void;
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  articleId,
  articleHtml,
  isAuthenticated,
  articleTitle,
  articleSlug,
  moodFeatureEnabled,
  onToggleMoodFeature
}) => {
  return (
    <ArticleWithHighlights 
      articleId={articleId} 
      initialHtml={articleHtml || undefined}
      isAuthenticated={isAuthenticated}
      articleTitle={articleTitle}
      articleSlug={articleSlug}
      {...(isAuthenticated && {
        moodFeatureEnabled: moodFeatureEnabled,
        onToggleMoodFeature: onToggleMoodFeature
      })}
    />
  );
};

// Use React.memo with deep comparison for props
export default React.memo(ArticleContent, (prevProps, nextProps) => {
  return (
    prevProps.articleId === nextProps.articleId &&
    prevProps.articleHtml === nextProps.articleHtml &&
    prevProps.isAuthenticated === nextProps.isAuthenticated &&
    prevProps.articleTitle === nextProps.articleTitle &&
    prevProps.articleSlug === nextProps.articleSlug &&
    prevProps.moodFeatureEnabled === nextProps.moodFeatureEnabled
  );
}); 