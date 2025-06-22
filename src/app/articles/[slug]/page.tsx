// Server part (no 'use client')
import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase/clientApp'
import { getArticleBySlug } from '@/firebase/articles';
import { buildMetadata } from '@/lib/buildMeta';
import { generateArticleExcerpt, getArticleImage } from '@/lib/buildMeta';
import { getDefaultMetadata } from '@/lib/seoDefaults';
import { redirect } from 'next/navigation';

// Client component for the actual article page
import ArticleSlugClient from './client';

// Generate dynamic metadata for each article by slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    // Await params as required by Next.js 15
    const resolvedParams = await params;
    console.log('🔍 generateMetadata - Received slug:', resolvedParams.slug);
    
    // Decode the slug in case it's URL-encoded
    const decodedSlug = decodeURIComponent(resolvedParams.slug);
    console.log('🔍 generateMetadata - Decoded slug:', decodedSlug);
    
    const article = await getArticleBySlug(decodedSlug);
    
    if (!article) {
      console.log('❌ generateMetadata - Article not found for slug:', decodedSlug);
      // Return default metadata if article not found
      return buildMetadata(getDefaultMetadata());
    }

    console.log('✅ generateMetadata - Article found:', article.title);

    // Extract article data
    const title = article.title || 'Untitled Article';
    const description = generateArticleExcerpt(article.body || '', article.excerpt);
    const publishedTime = article.createdAt 
      ? new Date(article.createdAt.seconds * 1000).toISOString()
      : undefined;
    const modifiedTime = article.updatedAt 
      ? new Date(article.updatedAt.seconds * 1000).toISOString()
      : undefined;
    const authors = article.authorName ? [article.authorName] : undefined;
    const tags = article.tags || [];
    
    // Use the helper function to get the best available image (cover image or extracted from content)
    const image = getArticleImage(article.coverImage, article.body);
    
    return buildMetadata({
      title,
      description,
      image,
      pathname: `/articles/${resolvedParams.slug}`,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors,
      tags,
    });
  } catch (error) {
    console.error('Error generating metadata for article by slug:', error);
    // Return default metadata on error
    return buildMetadata(getDefaultMetadata());
  }
}

// Fetch all published article slugs for static generation
export async function generateStaticParams() {
  try {
    // Fetch all published articles to get their slugs
    const articlesRef = collection(db, 'articles');
    const q = query(articlesRef, where('status', '==', 'published'));
    const querySnapshot = await getDocs(q);
    
    // Convert to array of param objects with slugs
    const params = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        slug: data.slug || doc.id // Use slug if available, fallback to ID
      };
    }).filter(param => param.slug); // Only include articles with slugs
    
    console.log('Generated static params for article slugs:', params.length);
    console.log('Sample slugs:', params.slice(0, 3).map(p => p.slug));
    return params;
  } catch (error) {
    console.error('Error generating static params for article slugs:', error);
    // Return empty array as fallback
    return [];
  }
}

// Server component that renders the client component
export default async function ArticleSlugPage({ params }: { params: { slug: string } }) {
  // Await params as required by Next.js 15
  const resolvedParams = await params;
  console.log('🔍 ArticleSlugPage - Received slug:', resolvedParams.slug);
  
  try {
    // Decode the slug in case it's URL-encoded
    const decodedSlug = decodeURIComponent(resolvedParams.slug);
    console.log('🔍 ArticleSlugPage - Decoded slug:', decodedSlug);
    
    // Check if article exists
    const article = await getArticleBySlug(decodedSlug);
    
    if (!article) {
      console.log('❌ ArticleSlugPage - Article not found for slug:', decodedSlug);
      // Redirect to articles page if article not found
      redirect('/articles');
    }
    
    console.log('✅ ArticleSlugPage - Article found, rendering client component');
    
    return (
      <Suspense fallback={<div>Loading article...</div>}>
        <ArticleSlugClient slug={decodedSlug} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading article by slug:', error);
    redirect('/articles');
  }
} 