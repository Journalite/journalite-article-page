// Forcing dynamic rendering for this route
export const dynamic = 'force-dynamic';

// This is now a Server Component
import { Suspense } from 'react'
import TagPageClient from './TagPageClient'
import { db } from '@/firebase/clientApp'
import { collection, getDocs } from 'firebase/firestore'

// generateStaticParams for static site generation
export async function generateStaticParams() {
  try {
    // Fetch all articles to extract tags
    const articlesRef = collection(db, 'articles');
    const articlesSnapshot = await getDocs(articlesRef);
    
    // Extract unique tags from all articles
    const allTags = new Set<string>();
    
    articlesSnapshot.forEach((doc) => {
      const articleData = doc.data();
      if (articleData.tags && Array.isArray(articleData.tags)) {
        articleData.tags.forEach((tag: string) => {
          allTags.add(tag.toLowerCase());
        });
      }
    });
    
    // Convert to the required format for generateStaticParams
    const tagParams = Array.from(allTags).map(tag => ({ tag }));
    
    // Fallback to common tags if no tags were found
    if (tagParams.length === 0) {
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
    
    return tagParams;
  } catch (error) {
    console.error('Error fetching tags for static generation:', error);
    // Fallback to common tags if there was an error
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
}

// Server component that renders the client component
export default function TagPage({ params }: { params: { tag: string } }) {
  return (
    <Suspense fallback={<div>Loading tag page...</div>}>
      <TagPageClient tag={params.tag} />
    </Suspense>
  );
} 