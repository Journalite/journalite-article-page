import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Articles | Oriteria',
  description: 'Explore the latest articles from Oriteria',
};

export const viewport: Viewport = {
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