import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password | Oriteria',
  description: 'Create a new password for your Oriteria account',
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