import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | Journalite',
  description: 'Reset your password to regain access to your Journalite account',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 