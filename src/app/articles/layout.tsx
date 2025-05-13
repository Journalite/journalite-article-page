import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | Journalite',
  description: 'Explore the latest articles from Journalite',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 