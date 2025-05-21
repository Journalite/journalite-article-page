'use client'

import React from 'react';
import ArticleComposer from '@/components/ArticleComposer';

interface EditArticlePageClientProps {
  id: string;
}

/**
 * Edit Article Page Client Component
 * 
 * A page for editing existing articles with our Medium-like editor
 */
const EditArticlePageClient: React.FC<EditArticlePageClientProps> = ({ id }) => {
  return (
    <div>
      <ArticleComposer articleId={id} />
    </div>
  );
};

export default EditArticlePageClient; 