// Server part (no 'use client')
import React, { Suspense } from 'react';
import ArticlePageClient from './client';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// This is needed to satisfy Next.js requirements for dynamic routes
export async function generateStaticParams() {
  return [];
}

// Server component that renders the client component
export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <ArticlePageClient id={params.id} />
    </Suspense>
  );
} 