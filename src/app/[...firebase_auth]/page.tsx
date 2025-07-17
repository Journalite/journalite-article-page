'use client';

import { Suspense } from 'react';
import Link from 'next/link';

function AuthHandler() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 to-amber-100">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-stone-800 mb-4">Authentication in progress...</h1>
        <p className="text-stone-600 mb-4">Please wait while we complete the authentication process.</p>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-600 mx-auto"></div>
        </div>
        <div className="mt-6">
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-800 underline">Return to homepage</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FirebaseAuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-600"></div>
      </div>
    }>
      <AuthHandler />
    </Suspense>
  );
} 