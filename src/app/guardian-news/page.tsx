import React, { Suspense } from 'react';
import GuardianNewsClient from './client';

export default function GuardianNewsPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading Guardian news...</div>}>
        <GuardianNewsClient />
      </Suspense>
    </div>
  );
} 