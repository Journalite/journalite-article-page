'use client'

import React from 'react';
import ArticleComposer from '@/components/ArticleComposer';

interface EditArticlePageProps {
  params: {
    id: string;
  };
}

// We need to export this function outside the client component
export const dynamic = 'force-dynamic';

/**
 * Edit Article Page
 * 
 * A page for editing existing articles with our Medium-like editor
 */
const EditArticlePage: React.FC<EditArticlePageProps> = ({ params }) => {
  // Access id directly from params
  const id = params?.id;
  
  return (
    <div>
      <ArticleComposer articleId={id} />
    </div>
  );
};

export default EditArticlePage; 