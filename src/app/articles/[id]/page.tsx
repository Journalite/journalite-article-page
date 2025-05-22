// Server part (no 'use client')
import React, { Suspense } from 'react';
import ArticlePageClient from './client';

// For static generation, we need to define this to generate the static paths
export async function generateStaticParams() {
  // Include all known article IDs and some placeholders for static generation
  return [
    { id: 'placeholder' },
    { id: 'Z0nGCw8msDhUHlWSZpTO' }, // Add your specific article ID here
    // Add any other known article IDs you want to prerender
    { id: 'article1' },
    { id: 'article2' },
    { id: 'article3' },
    { id: 'article4' },
    { id: 'article5' }
  ];
}

// Server component that renders the client component
export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <ArticlePageClient id={params.id} />
    </Suspense>
  );
} 