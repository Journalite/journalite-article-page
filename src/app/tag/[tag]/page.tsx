// This is now a Server Component
import { Suspense } from 'react'
import TagPageClient from './TagPageClient'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase/clientApp'

// Fetch all unique tags from published articles for static generation
export async function generateStaticParams() {
  try {
    // Fetch all published articles to get their tags
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, where('status', '==', 'published'));
    const querySnapshot = await getDocs(q);
    
    // Collect all unique tags
    const tagsSet = new Set<string>();
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach((tag: string) => {
          if (tag && typeof tag === 'string') {
            tagsSet.add(tag.toLowerCase()); // Normalize to lowercase
          }
        });
      }
    });
    
    // Convert to array of param objects
    const params = Array.from(tagsSet).map((tag) => ({
      tag: tag
    }));
    
    console.log('Generated static params for tags:', params.length);
    return params;
  } catch (error) {
    console.error('Error generating static params for tags:', error);
    // Return empty array as fallback - this will prevent build errors
    // but may result in 404s for tags that exist but weren't generated
    return [];
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