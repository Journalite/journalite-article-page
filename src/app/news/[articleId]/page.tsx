import React from 'react';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/buildMeta';
import { newsService } from '@/services/newsService';
import NewsArticleClient from './client';

interface PageProps {
  params: { articleId: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    // Await params as required by Next.js 15
    const resolvedParams = await params;
    const articleUrl = decodeURIComponent(resolvedParams.articleId);
    
    // Check if this is a Guardian URL
    const isGuardianUrl = articleUrl.includes('theguardian.com');
    
    if (isGuardianUrl) {
      // Import Guardian service dynamically
      const { guardianService } = await import('@/services/guardianService');
      
      if (guardianService.isConfigured()) {
        try {
          // Extract Guardian article ID from URL
          const urlParts = articleUrl.split('/');
          const pathParts = urlParts.slice(3); // Remove https://, empty, theguardian.com
          const articleId = pathParts.join('/');
          
          // Fetch the Guardian article
          const guardianArticle = await guardianService.getArticleById(articleId);
          
          const title = guardianArticle.webTitle;
          const description = guardianArticle.fields?.standfirst || 
                            guardianArticle.fields?.trailText || 
                            guardianArticle.fields?.bodyText?.substring(0, 160) + '...' || 
                            'Read this article from The Guardian';
          const image = guardianArticle.fields?.thumbnail || 
                       guardianArticle.fields?.main || 
                       '/images/journalite-social-banner.png';
          
          return buildMetadata({
            title: `${title} | Journalite`,
            description,
            image,
            pathname: `/news/${encodeURIComponent(articleUrl)}`,
            type: 'article',
            publishedTime: guardianArticle.webPublicationDate,
            authors: [guardianArticle.fields?.byline || 'The Guardian'],
            tags: guardianArticle.tags?.map(tag => tag.webTitle) || []
          });
        } catch (error) {
          console.error('Error fetching Guardian article for metadata:', error);
        }
      }
    } else {
      // For non-Guardian articles, try to fetch from NewsAPI
      if (newsService.isConfigured()) {
        try {
          // Extract search terms from URL
          const urlPath = articleUrl.split('/').pop() || '';
          const searchTerms = urlPath
            .replace(/-/g, ' ')
            .replace(/_/g, ' ')
            .split(/[^a-zA-Z\s]/)
            .filter(term => term.length > 3)
            .slice(0, 3)
            .join(' ');
          
          if (searchTerms) {
            const searchData = await newsService.searchArticles(searchTerms);
            if (searchData.status === 'ok') {
              const foundArticle = searchData.articles.find(a => a.url === articleUrl);
              
              if (foundArticle) {
                const title = foundArticle.title;
                const description = foundArticle.description || 
                                  foundArticle.content?.substring(0, 160) + '...' || 
                                  'Read this news article';
                const image = foundArticle.urlToImage || '/images/journalite-social-banner.png';
                
                return buildMetadata({
                  title: `${title} | Journalite`,
                  description,
                  image,
                  pathname: `/news/${encodeURIComponent(articleUrl)}`,
                  type: 'article',
                  publishedTime: foundArticle.publishedAt,
                  authors: [foundArticle.author || foundArticle.source.name],
                  tags: [foundArticle.source.name]
                });
              }
            }
          }
        } catch (error) {
          console.error('Error fetching NewsAPI article for metadata:', error);
        }
      }
    }
    
    // Fallback metadata
    return buildMetadata({
      title: 'News Article | Journalite',
      description: 'Read the latest news and articles on Journalite',
      image: '/images/journalite-social-banner.png',
      pathname: `/news/${encodeURIComponent(articleUrl)}`,
      type: 'article'
    });
    
  } catch (error) {
    console.error('Error generating metadata:', error);
    
    // Fallback metadata
    return buildMetadata({
      title: 'News Article | Journalite',
      description: 'Read the latest news and articles on Journalite',
      image: '/images/journalite-social-banner.png',
      type: 'article'
    });
  }
}

// Server Component wrapper
export default async function NewsArticlePage({ params }: PageProps) {
  // Await params as required by Next.js 15
  const resolvedParams = await params;
  return <NewsArticleClient params={resolvedParams} />;
} 