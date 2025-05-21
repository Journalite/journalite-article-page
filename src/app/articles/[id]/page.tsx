// Server part (no 'use client')
import React, { Suspense } from 'react';
import ArticlePageClient from './client';

// For static generation, we need to define this to generate the static paths
export async function generateStaticParams() {
  // Prerender a few key article IDs, others will be handled as fallbacks
  return [
    { id: 'placeholder' }
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