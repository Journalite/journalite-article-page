import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password | Journalite',
  description: 'Create a new password for your Journalite account',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 