'use client'

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { auth } from '@/firebase/clientApp';
import { ExternalArticleService } from '@/services/externalArticleService';
import ArticleLayout from '@/components/ArticleLayout';
import CommentSection from '@/components/CommentSection';
import { newsService, NewsArticle } from '@/services/newsService';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';
import '@/styles/guardian-articles.css';

export default function NewsArticlePage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialLikes, setInitialLikes] = useState<string[]>([]);
  
  // Mood feature state
  const [moodFeatureEnabled, setMoodFeatureEnabled] = useState(true);
  const [mood, setMood] = useState<'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic'>('reflective');

  const articleUrl = decodeURIComponent(params?.articleId as string);

  // Set up authentication listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  // Load mood feature preference from localStorage (only for authenticated users)
  useEffect(() => {
    if (isAuthenticated) {
      const savedPreference = localStorage.getItem('moodFeatureEnabled');
      if (savedPreference !== null) {
        setMoodFeatureEnabled(JSON.parse(savedPreference));
      } else {
        setMoodFeatureEnabled(true);
      }
    } else {
      setMoodFeatureEnabled(false);
    }
  }, [isAuthenticated]);

    // Fetch the specific article
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        console.log('News Article Page - articleUrl:', articleUrl);
        
        if (!newsService.isConfigured()) {
          setError('News API not configured. Please add your NewsAPI.org API key to environment variables.');
          return;
        }
        
        // Extract search terms from the URL for a more targeted search
        const urlPath = articleUrl.split('/').pop() || '';
        const searchTerms = urlPath
          .replace(/-/g, ' ')
          .replace(/_/g, ' ')
          .split(/[^a-zA-Z\s]/)
          .filter(term => term.length > 3)
          .slice(0, 3) // Take first 3 meaningful terms
          .join(' ');
        
        console.log('News Article Page - searchTerms:', searchTerms);
        
        // Try multiple search strategies to find the article
        let foundArticle = null;
        
        // Strategy 1: Search with extracted terms
        if (searchTerms) {
          try {
            const searchData = await newsService.searchArticles(searchTerms);
            if (searchData.status === 'ok') {
              foundArticle = searchData.articles.find(a => a.url === articleUrl);
              console.log('News Article Page - search results count:', searchData.articles.length);
            }
          } catch (err) {
            console.log('Search strategy 1 failed:', err);
          }
        }
        
        // Strategy 2: Try different categories if not found
        if (!foundArticle) {
          const categories = ['general', 'business', 'technology', 'sports', 'entertainment', 'health', 'science'];
          for (const category of categories) {
            try {
              const headlinesData = await newsService.getTopHeadlines(category);
              if (headlinesData.status === 'ok') {
                foundArticle = headlinesData.articles.find(a => a.url === articleUrl);
                if (foundArticle) {
                  console.log('News Article Page - found in category:', category);
                  break;
                }
              }
            } catch (err) {
              console.log(`Category ${category} failed:`, err);
              continue;
            }
          }
        }
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          // If we still can't find it, create a fallback article object
          // This happens because NewsAPI doesn't have a direct "get by URL" method
          console.log('Creating fallback article for:', articleUrl);
          
          // Extract article title from URL
          const urlPath = articleUrl.split('/').pop() || '';
          const titleFromUrl = urlPath
            .replace(/-/g, ' ')
            .replace(/_/g, ' ')
            .replace(/\d+/g, '')
            .split(/[^a-zA-Z\s]/)
            .filter(word => word.length > 2)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          // Extract source from URL
          let sourceName = 'News Source';
          try {
            const urlDomain = new URL(articleUrl).hostname.replace('www.', '');
            sourceName = urlDomain.split('.')[0].charAt(0).toUpperCase() + urlDomain.split('.')[0].slice(1);
          } catch (e) {
            console.log('Error parsing URL domain:', e);
          }
          
          const fallbackArticle: NewsArticle = {
            title: titleFromUrl || 'News Article',
            description: 'This article is no longer available through NewsAPI. Click the link below to read the full article on the original site.',
            content: 'This article is no longer available through our news feed. Please visit the original source to read the full content.',
            url: articleUrl,
            urlToImage: '',
            publishedAt: new Date().toISOString(),
            source: { name: sourceName },
            author: sourceName
          };
          
          setArticle(fallbackArticle);
        }

        // Fetch likes for this News article from our social system
        await fetchLikesData(articleUrl);
        
      } catch (error) {
        console.error('Error fetching news article:', error);
        setError('Failed to load article. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (articleUrl) {
      fetchArticle();
    }
  }, [articleUrl]);

  // Analyze mood when article is loaded (only for authenticated users)
  useEffect(() => {
    if (article && isAuthenticated) {
      // Extract text from article content for sentiment analysis
      const textContent = article.description + ' ' + (article.content || '');
      if (textContent.trim()) {
        const cleanText = textContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const detectedMood = getMoodFromText(cleanText);
        setMood(detectedMood);
      }
    }
  }, [article, isAuthenticated]);

  const handleToggleMoodFeature = (enabled: boolean) => {
    setMoodFeatureEnabled(enabled);
    localStorage.setItem('moodFeatureEnabled', JSON.stringify(enabled));
  };

  const handleBackToList = () => {
    router.push('/news');
  };

  // Fetch likes data for the News article from our social system
  const fetchLikesData = async (newsArticleUrl: string) => {
    try {
      const socialData = await ExternalArticleService.getSocialData(newsArticleUrl, 'newsapi');
      if (socialData) {
        setInitialLikes(socialData.likes || []);
      } else {
        setInitialLikes([]);
      }
    } catch (error) {
      console.error('Error fetching likes data:', error);
      setInitialLikes([]);
    }
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

  // Convert news article to display format
  const convertToArticleFormat = (article: NewsArticle) => {
    let articleHtml = '';
    
    // Helper function to escape HTML attributes and content
    const escapeHtml = (text: string): string => {
      if (!text) return '';
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    };
    
    // Check if this is a fallback article (no content available)
    const isFallback = article.content?.includes('no longer available through our news feed') || false;
    
    if (article.urlToImage) {
      const safeImageUrl = escapeHtml(article.urlToImage);
      const safeImageAlt = escapeHtml(article.title || 'News article image');
      articleHtml += `<img src="${safeImageUrl}" alt="${safeImageAlt}" style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px;" />`;
    }
    
    if (article.description) {
      const safeDescription = escapeHtml(article.description);
      articleHtml += `<p><strong>${safeDescription}</strong></p>`;
    }
    
    if (article.content) {
      // Clean up the content (NewsAPI sometimes truncates with [+chars])
      const cleanContent = article.content.replace(/\[\+\d+\s+chars\]$/, '...');
      const safeContent = escapeHtml(cleanContent);
      articleHtml += `<p>${safeContent}</p>`;
    }
    
        const safeUrl = escapeHtml(article.url || '');
    const safeSourceName = escapeHtml(article.source?.name || 'News Source');

    if (isFallback) {
      // Make the external link more prominent for fallback articles - using simple background color instead of gradient
      articleHtml += `
        <div style="background-color: #667eea; color: white; padding: 2em; border-radius: 12px; text-align: center; margin: 2em 0; border: 1px solid #5a67d8;">
          <h3 style="margin: 0 0 1em 0; color: white;">Read Full Article</h3>
          <p style="margin: 0 0 1.5em 0; color: white; opacity: 0.9;">
            This article is available on the original news site
          </p>
          <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" style="background: white; color: #667eea; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; border: 2px solid white;">
            Visit ${safeSourceName}
          </a>
        </div>`;
    } else {
      articleHtml += `<p><em>Read the full article at: <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeSourceName}</a></em></p>`;
    }
    
    return {
      title: article.title || 'News Article',
      authorName: article.author || article.source?.name || 'Unknown',
      createdAt: formatDate(article.publishedAt),
      readTime: Math.ceil((article.content?.split(' ').length || 200) / 200),
      tags: [article.source?.name || 'News'],
      authorId: 'news-api',
      hasReflectionRoom: false,
      html: articleHtml
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-600 text-lg mb-4">{error}</div>
          <button
            onClick={handleBackToList}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-gray-600 text-lg mb-4">Article not found</div>
          <button
            onClick={handleBackToList}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to News
          </button>
        </div>
      </div>
    );
  }

  const articleData = convertToArticleFormat(article);

  return (
    <div 
      className="guardian-article news-article"
      style={{ position: 'relative', backgroundColor: '#ffffff' }}
    >
      {/* Atmospheric gradient - controlled by user's gradient widget */}
      {isAuthenticated && (
        <div
          data-mood-element="primary-gradient"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(160deg, 
              ${moodThemes[mood].gradientStart}, 
              ${moodThemes[mood].gradientEnd})`,
            backgroundSize: '150% 150%',
            animation: 'gradientFlow 25s ease-in-out infinite',
            zIndex: -10,
            transition: 'background-image 2s ease-in-out',
            pointerEvents: 'none',
            display: typeof window !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? 'none' : ''
          }}
        />
      )}

      <ArticleLayout
        articleId={`news-${encodeURIComponent(article.url)}`}
        articleHtml={articleData.html}
        article={articleData}
        initialLikes={initialLikes}
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        onEditClick={handleBackToList}
        articleTitle={articleData.title}
        articleSlug={`news-${encodeURIComponent(article.url)}`}
        moodFeatureEnabled={moodFeatureEnabled}
        onToggleMoodFeature={handleToggleMoodFeature}
        mood={mood}
        isExternal={true}
        externalSource="newsapi"
        externalId={article.url}
        externalUrl={article.url}
      />
      
      {/* Comments Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <CommentSection 
          articleId={`news-${encodeURIComponent(article.url)}`}
        />
      </div>
    </div>
  );
} 