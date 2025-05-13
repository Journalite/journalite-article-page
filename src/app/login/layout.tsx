import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Journalite',
  description: 'Sign in to your Journalite account',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 