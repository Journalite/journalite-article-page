// Server part (no 'use client')
import React, { Suspense } from 'react';
import ArticlePageClient from './client';

// For dynamic routing, return empty array to allow on-demand generation
export async function generateStaticParams() {
  // Return empty array to indicate dynamic generation is preferred
  // This allows any article ID to be handled dynamically
  return []
}

// Server component that renders the client component
export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <ArticlePageClient id={params.id} />
    </Suspense>
  );
} 