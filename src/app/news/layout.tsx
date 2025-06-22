import React from 'react';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/buildMeta';

export const metadata: Metadata = buildMetadata({
  title: 'News Articles | Journalite',
  description: 'Read the latest news articles and stay informed with Journalite',
  pathname: '/news',
  type: 'website'
});

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 