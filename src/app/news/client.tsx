'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth } from '@/firebase/clientApp';
import MobileBottomNav from '@/components/MobileBottomNav';
import MinimalNotificationBell from '@/components/MinimalNotificationBell';
import MessageNotificationBell from '@/components/MessageNotificationBell';
import { newsService, NewsArticle } from '@/services/newsService';

const NewsPageClient: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  // Helper function to clean HTML from text
  const cleanHtmlText = (htmlText: string): string => {
    if (!htmlText) return '';
    
    // Remove HTML tags
    let cleanText = htmlText.replace(/<[^>]*>/g, ' ');
    
    // Replace multiple spaces with single space
    cleanText = cleanText.replace(/\s+/g, ' ');
    
    // Decode HTML entities
    cleanText = cleanText
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&nbsp;/g, ' ');
    
    // Trim and limit length for preview
    cleanText = cleanText.trim();
    if (cleanText.length > 200) {
      cleanText = cleanText.substring(0, 200) + '...';
    }
    
    return cleanText;
  };

  // Set up authentication listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  // Fetch news articles
  const fetchNews = async (query: string = '', selectedCategory: string = 'general') => {
    try {
      setIsLoading(true);
      setError('');
      
      if (!newsService.isConfigured()) {
        setError('News API not configured. Please add your NewsAPI.org API key to environment variables.');
        return;
      }
      
      const data = query 
        ? await newsService.searchArticles(query)
        : await newsService.getTopHeadlines(selectedCategory);
      
      if (data.status === 'ok') {
        setNewsArticles(data.articles);
      } else {
        setError('Failed to fetch news articles');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(error instanceof Error ? error.message : 'Failed to load news. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews('', category);
  }, [category]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchNews(searchQuery);
    }
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setSearchQuery('');
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'UTC'
      };
      return date.toLocaleDateString('en-US', options);
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              📰 News
            </Link>
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <MessageNotificationBell />
                  <MinimalNotificationBell />
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Category Controls */}
        <div className="mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news articles..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </form>

          <div className="flex flex-wrap gap-2">
            {['general', 'business', 'technology', 'science', 'health', 'sports', 'entertainment'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading news articles...</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article, index) => (
              <Link
                key={index}
                href={`/news/${encodeURIComponent(article.url)}`}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl block"
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden'
                }}
              >
                {article.urlToImage && (
                  <div className="relative overflow-hidden">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ borderRadius: '20px 20px 0 0' }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(transparent 60%, rgba(0,0,0,0.2) 100%)'
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {cleanHtmlText(article.description)}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span 
                      className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 rounded-full"
                      style={{
                        background: 'rgba(59, 130, 246, 0.15)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {article.source.name}
                    </span>
                    <span>
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default NewsPageClient; 