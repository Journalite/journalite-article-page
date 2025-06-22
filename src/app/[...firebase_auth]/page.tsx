import { Metadata, Viewport } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Firebase Auth | Journalite',
  description: 'Firebase authentication redirect handler',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// This generates static paths for pre-rendering
export async function generateStaticParams() {
  // Only handle specific Firebase auth-related paths
  return [
    { firebase_auth: ['auth'] },
    { firebase_auth: ['verify'] },
    { firebase_auth: ['action'] },
    { firebase_auth: ['signin'] },
    { firebase_auth: ['signout'] },
    { firebase_auth: ['reset'] },
  ]
}

function AuthHandler({ params }: { params: { firebase_auth: string[] } }) {
  const authPath = params.firebase_auth?.join('/') || '';
  
  // Log the path for debugging
  console.log('Firebase auth handler triggered for path:', authPath);
  
  // Handle specific auth actions
  if (authPath.includes('verify') || authPath.includes('action')) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 to-amber-100">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Email Verification</h1>
          <p className="text-stone-600">Please wait while we verify your email...</p>
          <div className="mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }
  
  // For other auth-related paths
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 to-amber-100">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-stone-800 mb-4">Authentication in progress...</h1>
        <p className="text-stone-600 mb-4">Please wait while we complete the authentication process.</p>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-600 mx-auto"></div>
        </div>
        <div className="mt-6">
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Return to homepage
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FirebaseAuthPage({ params }: { params: { firebase_auth: string[] } }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-600"></div>
      </div>
    }>
      <AuthHandler params={params} />
    </Suspense>
  );
} 