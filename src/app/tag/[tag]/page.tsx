// This is now a Server Component
import { Suspense } from 'react'
import TagPageClient from './TagPageClient'

// generateStaticParams for static site generation
export async function generateStaticParams() {
  // Return an array of params to generate static pages for
  // For MVP with limited users, we'll generate pages for common tags
  return [
    { tag: 'technology' },
    { tag: 'programming' },
    { tag: 'science' },
    { tag: 'journalism' },
    { tag: 'politics' },
    { tag: 'culture' },
    { tag: 'health' },
    { tag: 'business' },
    { tag: 'education' },
    { tag: 'ai' }
  ];
}

// Server component that renders the client component
export default function TagPage({ params }: { params: { tag: string } }) {
  return (
    <Suspense fallback={<div>Loading tag page...</div>}>
      <TagPageClient tag={params.tag} />
    </Suspense>
  );
} 