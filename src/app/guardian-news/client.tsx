'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth } from '@/firebase/clientApp';
import MobileBottomNav from '@/components/MobileBottomNav';
import MinimalNotificationBell from '@/components/MinimalNotificationBell';
import MessageNotificationBell from '@/components/MessageNotificationBell';
import { guardianService, GuardianArticle } from '@/services/guardianService';

const GuardianNewsClient: React.FC = () => {
  const [articles, setArticles] = useState<GuardianArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

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

  // Guardian sections
  const popularSections = [
    { id: '', webTitle: 'All' },
    { id: 'world', webTitle: 'World' },
    { id: 'politics', webTitle: 'Politics' },
    { id: 'business', webTitle: 'Business' },
    { id: 'technology', webTitle: 'Technology' },
    { id: 'science', webTitle: 'Science' },
    { id: 'environment', webTitle: 'Environment' },
    { id: 'sport', webTitle: 'Sport' },
    { id: 'culture', webTitle: 'Culture' },
  ];

  // Set up authentication listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  // Fetch Guardian articles
  const fetchArticles = async (query: string = '', section: string = '') => {
    try {
      setIsLoading(true);
      setError('');
      
      if (!guardianService.isConfigured()) {
        setError('Guardian API not configured. Please add your Guardian API key to environment variables.');
        return;
      }
      
      const data = await guardianService.searchArticles(query, section || undefined, 1, 20);
      setArticles(data.results);
      
    } catch (error) {
      console.error('Error fetching Guardian news:', error);
      setError(error instanceof Error ? error.message : 'Failed to load Guardian news. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles('', selectedSection);
  }, [selectedSection]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchArticles(searchQuery, selectedSection);
    }
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              🗞️ The Guardian
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
        {/* Search and Section Controls */}
        <div className="mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Guardian articles..."
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
            {popularSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {section.webTitle}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
            {error.includes('rate limit') || error.includes('429') ? (
              <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center gap-2 text-orange-800 font-medium mb-2">
                  🕐 API Rate Limit Reached
                </div>
                <div className="text-sm text-orange-700">
                  <p className="mb-1">
                    Guardian API resets daily at <strong>7:00 PM Houston time (CDT)</strong>
                  </p>
                  <p className="text-xs text-orange-600">
                    Free tier: 500 requests/day • Resets at midnight UTC
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-2 text-sm">
                To use The Guardian API:
                <ol className="list-decimal list-inside mt-1">
                  <li>Visit <a href="https://open-platform.theguardian.com/access/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Guardian Open Platform</a></li>
                  <li>Register for a free developer key</li>
                  <li>Add NEXT_PUBLIC_GUARDIAN_API_KEY to your .env.local file</li>
                </ol>
              </div>
            )}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading Guardian articles...</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const isFallbackArticle = article.id.includes('fallback/');
              
              return (
                <div
                  key={article.id}
                  className={`group transition-all duration-300 ${isFallbackArticle ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:scale-105 hover:shadow-2xl'}`}
                  style={{
                    background: isFallbackArticle 
                      ? 'rgba(255, 193, 7, 0.15)' 
                      : 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(20px)',
                    border: isFallbackArticle 
                      ? '1px solid rgba(255, 193, 7, 0.3)' 
                      : '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden'
                  }}
                >
                  {isFallbackArticle && (
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 border-b border-orange-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-orange-700 font-medium flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                          </svg>
                          API Rate Limited
                        </span>
                        <span className="text-orange-600">Resets 7:00 PM CDT</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Article Content - wrapped in Link only if not fallback */}
                  {!isFallbackArticle ? (
                    <Link href={`/guardian-news/${article.id}`} className="block">
                      {article.fields?.thumbnail && (
                        <div className="relative overflow-hidden">
                          <img
                            src={article.fields.thumbnail}
                            alt={article.webTitle}
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
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span 
                            className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 rounded-full"
                            style={{
                              background: 'rgba(59, 130, 246, 0.15)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            {article.sectionName}
                          </span>
                          {article.pillarName && (
                            <span 
                              className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 rounded-full"
                              style={{
                                background: 'rgba(107, 114, 128, 0.15)',
                                backdropFilter: 'blur(10px)'
                              }}
                            >
                              {article.pillarName}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                          {article.fields?.headline || article.webTitle}
                        </h3>
                        {article.fields?.standfirst && (
                          <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {cleanHtmlText(article.fields.standfirst)}
                          </p>
                        )}
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="font-medium">
                            {article.fields?.byline || 
                             article.tags?.find(tag => tag.type === 'contributor')?.webTitle || 
                             'The Guardian'}
                          </span>
                          <div className="flex items-center gap-2">
                            {(() => {
                              // Calculate read time for display
                              const wordCount = article.fields?.body 
                                ? article.fields.body.replace(/<[^>]*>/g, '').split(/\s+/).length 
                                : (article.fields?.bodyText 
                                  ? article.fields.bodyText.split(/\s+/).length 
                                  : 300);
                              const readTime = Math.ceil(wordCount / 200);
                              const isLongRead = readTime > 22;
                              
                              return (
                                <>
                                  {isLongRead && (
                                    <span 
                                      className="inline-block px-2 py-1 text-xs font-semibold text-orange-700 rounded-full"
                                      style={{
                                        background: 'rgba(255, 152, 0, 0.15)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 152, 0, 0.3)'
                                      }}
                                      title="Extended article - Summary will be shown"
                                    >
                                      📖 {readTime} min
                                    </span>
                                  )}
                                  <span>
                                    {new Date(article.webPublicationDate).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric'
                                    })}
                                  </span>
                                </>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    /* Fallback article - not clickable */
                    <div className="pointer-events-none">
                      {article.fields?.thumbnail && (
                        <div className="relative overflow-hidden">
                          <img
                            src={article.fields.thumbnail}
                            alt={article.webTitle}
                            className="w-full h-48 object-cover opacity-60"
                            style={{ borderRadius: '20px 20px 0 0' }}
                          />
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(transparent 60%, rgba(0,0,0,0.3) 100%)'
                            }}
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span 
                            className="inline-block px-3 py-1 text-xs font-semibold text-orange-700 rounded-full"
                            style={{
                              background: 'rgba(255, 193, 7, 0.2)',
                              backdropFilter: 'blur(10px)'
                            }}
                          >
                            {article.sectionName}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-3 line-clamp-2 leading-tight">
                          {article.fields?.headline || article.webTitle}
                        </h3>
                        {article.fields?.standfirst && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {cleanHtmlText(article.fields.standfirst)}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {articles.length === 0 && !isLoading && !error && (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found. Try a different search or section.</p>
          </div>
        )}
      </div>

      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default GuardianNewsClient; 