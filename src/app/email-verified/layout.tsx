import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Verified | Journalite',
  description: 'Your email has been successfully verified',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function EmailVerifiedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 