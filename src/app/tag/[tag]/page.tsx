// This is now a Server Component
import { Suspense } from 'react'
import TagPageClient from './TagPageClient'

// For dynamic routing, return empty array to allow on-demand generation
export async function generateStaticParams() {
  return []
}

// Server component that renders the client component
export default function TagPage({ params }: { params: { tag: string } }) {
  return (
    <Suspense fallback={<div>Loading tag page...</div>}>
      <TagPageClient tag={params.tag} />
    </Suspense>
  );
} 