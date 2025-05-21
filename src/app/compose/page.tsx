'use client'

import React from 'react';
import ArticleComposer from '@/components/ArticleComposer';

/**
 * Compose Page
 * 
 * A clean, focused page for creating new articles with the Medium-like editor
 */
const ComposePage: React.FC = () => {
  return (
    <div>
      <ArticleComposer />
    </div>
  );
};

export default ComposePage; 