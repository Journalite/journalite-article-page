import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Firebase Auth | Journalite',
  description: 'Firebase authentication redirect handler',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateStaticParams() {
  return [
    { firebase_auth: ['auth'] },
    { firebase_auth: ['verify'] },
    { firebase_auth: ['action'] },
    { firebase_auth: ['signin'] },
    { firebase_auth: ['signout'] },
    { firebase_auth: ['reset'] },
  ];
}

export default function FirebaseAuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
