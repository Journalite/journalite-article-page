import ArticleViewClient from './client'

// Generate static params for all known article IDs
export async function generateStaticParams() {
  return [
    { id: 'placeholder' },
    // Include your most common article IDs here
    { id: 'Z0nGCw8msDhUHlWSZpTO' },
    { id: 'L8qCNRXWaPJqXEjWRz6q' }
  ]
}

// Server component that renders the client component
export default function ArticleViewPage({ params }: { params: { id: string } }) {
  return <ArticleViewClient id={params.id} />
} 