import React, { Suspense } from 'react';
import NewsPageClient from './client';

export default function NewsPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading news...</div>}>
        <NewsPageClient />
      </Suspense>
    </div>
  );
} 