import React from 'react';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/buildMeta';
import { guardianService } from '@/services/guardianService';
import GuardianArticleClient from './client';

interface PageProps {
  params: { articleId: string[] };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    // Await params as required by Next.js 15
    const resolvedParams = await params;
    const articleId = Array.isArray(resolvedParams.articleId) 
      ? resolvedParams.articleId.join('/')
      : resolvedParams.articleId;
    
    if (!guardianService.isConfigured()) {
      console.warn('Guardian API not configured for metadata generation');
      return buildMetadata({
        title: 'Guardian Article | Oriteria',
        description: 'Read articles from The Guardian on Oriteria',
        pathname: `/guardian-news/${articleId}`,
        type: 'article'
      });
    }
    
    try {
      // Fetch the Guardian article for metadata
      const guardianArticle = await guardianService.getArticleById(articleId);
      
      const title = guardianArticle.webTitle;
      const description = guardianArticle.fields?.standfirst || 
                        guardianArticle.fields?.trailText || 
                        guardianArticle.fields?.bodyText?.substring(0, 160) + '...' || 
                        'Read this article from The Guardian';
      const image = guardianArticle.fields?.thumbnail || 
                   guardianArticle.fields?.main || 
                   '/images/oriteria-social-banner.svg';
      
      return buildMetadata({
        title: `${title} | Oriteria`,
        description,
        image,
        pathname: `/guardian-news/${articleId}`,
        type: 'article',
        publishedTime: guardianArticle.webPublicationDate,
        authors: [guardianArticle.fields?.byline || 'The Guardian'],
        tags: guardianArticle.tags?.map(tag => tag.webTitle) || []
      });
    } catch (error) {
      console.error('❌ Error fetching Guardian article for metadata:', error);
      
      // Fallback metadata
      return buildMetadata({
        title: 'Guardian Article | Oriteria',
        description: 'Read articles from The Guardian on Oriteria',
        image: '/images/oriteria-social-banner.svg',
        pathname: `/guardian-news/${articleId}`,
        type: 'article'
      });
    }
    
  } catch (error) {
    console.error('❌ Error generating metadata:', error);
    
    // Fallback metadata
    return buildMetadata({
          title: 'Guardian Article | Oriteria',
    description: 'Read articles from The Guardian on Oriteria',
    image: '/images/oriteria-social-banner.svg',
      type: 'article'
    });
  }
}

// Server Component wrapper
export default async function GuardianArticlePage({ params }: PageProps) {
  // Await params as required by Next.js 15
  const resolvedParams = await params;
  return <GuardianArticleClient params={resolvedParams} />;
} 