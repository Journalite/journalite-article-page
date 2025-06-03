import ArticleViewClient from './client'

// Generate static params for dynamic routing (optional optimization)
// Since we removed output: 'export', this is now optional and Next.js will 
// generate pages on-demand for any article ID
export async function generateStaticParams() {
  // Return empty array to indicate dynamic generation is preferred
  // This allows any article ID to be handled dynamically
  return []
}

// Server component that renders the client component
export default function ArticleViewPage({ params }: { params: { id: string } }) {
  return <ArticleViewClient id={params.id} />
} 