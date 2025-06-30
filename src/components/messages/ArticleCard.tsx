'use client'

import React from 'react';
import Link from 'next/link';
import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';

interface ArticleCardProps {
  article: {
    slug: string;
    title: string;
    excerpt?: string;
    coverImageUrl?: string;
    authorName?: string;
    readTime?: number;
    publishedDate?: string;
    isExternal?: boolean;
    externalUrl?: string;
  };
  isOwn: boolean;
}

export default function ArticleCard({ article, isOwn }: ArticleCardProps) {
  // Determine the article URL
  const getArticleUrl = () => {
    if (article.isExternal && article.externalUrl) {
      if (article.externalUrl.includes('theguardian.com')) {
        // Guardian article
        const urlParts = article.externalUrl.split('/');
        const pathParts = urlParts.slice(3); // Remove https://, empty, theguardian.com
        const articleId = pathParts.join('/');
        return `/guardian-news/${articleId}`;
      } else {
        // Other external articles
        return `/news/${encodeURIComponent(article.externalUrl)}`;
      }
    } else {
      // Internal Journalite article
      return `/articles/${article.slug}`;
    }
  };

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return '';
    }
  };

  const articleUrl = getArticleUrl();

  return (
    <Link href={articleUrl} className="block w-full">
      <div 
        className={`border overflow-hidden transition-all duration-200 hover:shadow-md rounded-[20px] ${
          isOwn 
            ? 'bg-blue-600 border-blue-700 hover:bg-blue-700' 
            : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
        }`}
      >
        {/* Article Image */}
        {article.coverImageUrl && (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={article.coverImageUrl} 
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Hide image if it fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        
        {/* Article Content */}
        <div className="p-3">
          {/* Article Title */}
          <h3 className={`font-semibold text-sm line-clamp-2 mb-2 ${
            isOwn ? 'text-white' : 'text-gray-900'
          }`}>
            {article.title}
          </h3>
          
          {/* Article Excerpt */}
          {article.excerpt && (
            <p className={`text-xs line-clamp-2 mb-3 ${
              isOwn ? 'text-blue-100' : 'text-gray-600'
            }`}>
              {article.excerpt}
            </p>
          )}
          
          {/* Article Metadata */}
          <div className={`flex items-center justify-between text-xs ${
            isOwn ? 'text-blue-200' : 'text-gray-500'
          }`}>
            <div className="flex items-center space-x-3">
              {/* Author */}
              {article.authorName && (
                <div className="flex items-center space-x-1">
                  <UserIcon className="w-3 h-3" />
                  <span className="truncate">{article.authorName}</span>
                </div>
              )}
              
              {/* Read Time */}
              {article.readTime && (
                <div className="flex items-center space-x-1">
                  <ClockIcon className="w-3 h-3" />
                  <span>{article.readTime} min read</span>
                </div>
              )}
            </div>
            
            {/* Date */}
            {article.publishedDate && (
              <span className="text-xs">
                {formatDate(article.publishedDate)}
              </span>
            )}
          </div>
          
          {/* External Source Indicator */}
          {article.isExternal && (
            <div className={`mt-2 text-xs flex items-center ${
              isOwn ? 'text-blue-200' : 'text-gray-400'
            }`}>
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {article.externalUrl?.includes('theguardian.com') ? 'The Guardian' : 'External Article'}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 