// Server part (no 'use client')
import React from 'react';
import EditArticlePageClient from './client';

// For static generation, we need to define this to generate the static paths
export async function generateStaticParams() {
  // Prerender a few key article IDs, others will be handled as fallbacks
  return [
    { id: 'placeholder' }
  ];
}

// Server component that renders the client component
export default function EditArticlePage({ params }: { params: { id: string } }) {
  return <EditArticlePageClient id={params.id} />;
} 