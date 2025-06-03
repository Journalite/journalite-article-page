import ArticleViewClient from './client'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase/clientApp'

// Fetch all published article IDs for static generation
export async function generateStaticParams() {
  try {
    // Fetch all published articles to get their IDs
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, where('status', '==', 'published'));
    const querySnapshot = await getDocs(q);
    
    // Convert to array of param objects
    const params = querySnapshot.docs.map((doc) => ({
      id: doc.id
    }));
    
    console.log('Generated static params for article views:', params.length);
    return params;
  } catch (error) {
    console.error('Error generating static params for article views:', error);
    // Return empty array as fallback - this will prevent build errors
    // but may result in 404s for articles that exist but weren't generated
    return [];
  }
}

// Server component that renders the client component
export default function ArticleViewPage({ params }: { params: { id: string } }) {
  return <ArticleViewClient id={params.id} />
} 