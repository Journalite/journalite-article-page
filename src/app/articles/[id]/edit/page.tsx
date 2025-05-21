// Server part (no 'use client')
import React from 'react';
import EditArticlePageClient from './client';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

// This is needed to satisfy Next.js requirements for dynamic routes
export async function generateStaticParams() {
  return [];
}

// Server component that renders the client component
export default function EditArticlePage({ params }: { params: { id: string } }) {
  return <EditArticlePageClient id={params.id} />;
} 