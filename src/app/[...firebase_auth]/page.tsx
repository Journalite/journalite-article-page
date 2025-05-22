import { Metadata, Viewport } from 'next'

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
  // For a catch-all route, we need to provide at least one placeholder
  // Also handle favicon.ico which is causing build errors
  return [
    { firebase_auth: ['auth'] },
    { firebase_auth: ['favicon.ico'] }
  ]
}

export default function FirebaseAuthPage({ params }: { params: { firebase_auth: string[] } }) {
  // This page handles Firebase authentication redirects
  return (
    <div>
      <h1>Authentication in progress...</h1>
      <p>Please wait while we complete the authentication process.</p>
    </div>
  )
} 