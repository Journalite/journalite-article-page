'use client'

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { auth } from '@/firebase/clientApp';
import { ExternalArticleService } from '@/services/externalArticleService';
import ArticleLayout from '@/components/ArticleLayout';
import CommentSection from '@/components/CommentSection';
import ShareButton from '@/components/ShareButton';
import BackButton from '@/components/BackButton';
import MobileBottomNav from '@/components/MobileBottomNav';
import { newsService, NewsArticle } from '@/services/newsService';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';
import '@/styles/guardian-articles.css';

interface NewsArticleClientProps {
  params: { articleId: string };
}

export default function NewsArticleClient({ params }: NewsArticleClientProps) {
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
  const [articleData, setArticleData] = useState<any>(null);

  // Debug logging for params
  console.log('🔍 NewsArticleClient - Raw params:', params);
  console.log('🔍 NewsArticleClient - params.articleId:', params.articleId);
  console.log('🔍 NewsArticleClient - typeof params.articleId:', typeof params.articleId);

  const articleUrl = params.articleId ? decodeURIComponent(params.articleId) : '';
  
  console.log('🔍 NewsArticleClient - Decoded articleUrl:', articleUrl);

  // Dynamic meta tags for client-side updates
  useEffect(() => {
    if (article) {
      // Update document title
      document.title = `${article.title} | Journalite`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.description || 'Read this article on Journalite');
      }
      
      // Update Open Graph meta tags
      const updateMetaTag = (property: string, content: string) => {
        let metaTag = document.querySelector(`meta[property="${property}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('property', property);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', content);
      };
      
      updateMetaTag('og:title', article.title);
      updateMetaTag('og:description', article.description || 'Read this article on Journalite');
      updateMetaTag('og:image', article.urlToImage || '/images/journalite-social-banner.png');
      updateMetaTag('og:url', window.location.href);
      updateMetaTag('og:type', 'article');
      
      // Update Twitter Card meta tags
      const updateTwitterTag = (name: string, content: string) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`);
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', content);
      };
      
      updateTwitterTag('twitter:card', 'summary_large_image');
      updateTwitterTag('twitter:title', article.title);
      updateTwitterTag('twitter:description', article.description || 'Read this article on Journalite');
      updateTwitterTag('twitter:image', article.urlToImage || '/images/journalite-social-banner.png');
    }
  }, [article]);

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
        
        // Check if this is a Guardian URL
        const isGuardianUrl = articleUrl.includes('theguardian.com');
        
        if (isGuardianUrl) {
          console.log('🔍 Detected Guardian URL, using Guardian service...');
          
          // Import Guardian service
          const { guardianService } = await import('@/services/guardianService');
          
          if (!guardianService.isConfigured()) {
            setError('Guardian API not configured. Please add your Guardian API key to environment variables.');
            return;
          }
          
          // Extract Guardian article ID from URL
          // Guardian URLs are like: https://www.theguardian.com/world/live/2025/jun/22/israel-iran-war-live...
          const urlParts = articleUrl.split('/');
          const pathParts = urlParts.slice(3); // Remove https://, empty, theguardian.com
          const articleId = pathParts.join('/');
          
          console.log('🔍 Extracted Guardian article ID:', articleId);
          
          try {
            // Fetch the Guardian article directly
            const guardianArticle = await guardianService.getArticleById(articleId);
            console.log('✅ Found Guardian article:', guardianArticle.webTitle);
            console.log('🔍 Full Guardian article data:', guardianArticle);
            console.log('🔍 Guardian article fields:', guardianArticle.fields);
            
            // Convert Guardian article to NewsArticle format for compatibility
            const convertedArticle: NewsArticle = {
              title: guardianArticle.webTitle || guardianArticle.fields?.headline || 'Guardian Article',
              description: guardianArticle.fields?.standfirst || guardianArticle.fields?.trailText || '',
              content: guardianArticle.fields?.bodyText || guardianArticle.fields?.body || '',
              url: guardianArticle.webUrl || articleUrl,
              urlToImage: guardianArticle.fields?.thumbnail || '',
              publishedAt: guardianArticle.webPublicationDate || new Date().toISOString(),
              source: { name: 'The Guardian' },
              author: guardianArticle.fields?.byline || 'The Guardian'
            };
            
            console.log('🔍 Converted article:', convertedArticle);
            setArticle(convertedArticle);
            
          } catch (guardianError) {
            console.error('❌ Error fetching Guardian article:', guardianError);
            
            // Create fallback for Guardian article
            const fallbackArticle: NewsArticle = {
              title: 'Guardian Article',
              description: 'This Guardian article is not available through our API. Click the link below to read it on The Guardian website.',
              content: 'This article is not available through our news feed. Please visit The Guardian to read the full content.',
              url: articleUrl,
              urlToImage: '',
              publishedAt: new Date().toISOString(),
              source: { name: 'The Guardian' },
              author: 'The Guardian'
            };
            
            setArticle(fallbackArticle);
          }
          
        } else {
          // Non-Guardian URL - use original NewsAPI logic
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
            console.log('Creating fallback article for:', articleUrl);
            
            // Extract article title from URL
            const urlPath = articleUrl.split('/').pop() || '';
            let titleFromUrl = '';
            
            if (urlPath && urlPath !== 'undefined' && urlPath !== '') {
              titleFromUrl = urlPath
                .replace(/-/g, ' ')
                .replace(/_/g, ' ')
                .replace(/\d+/g, '')
                .split(/[^a-zA-Z\s]/)
                .filter(word => word.length > 2)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            }
            
            // Extract source from URL
            let sourceName = 'News Source';
            try {
              if (articleUrl && articleUrl !== 'undefined' && articleUrl !== '') {
                const urlDomain = new URL(articleUrl).hostname.replace('www.', '');
                sourceName = urlDomain.split('.')[0].charAt(0).toUpperCase() + urlDomain.split('.')[0].slice(1);
              }
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
            
            console.log('🔍 Created fallback article:', {
              title: fallbackArticle.title,
              sourceName,
              articleUrl,
              titleFromUrl
            });
            
            setArticle(fallbackArticle);
          }
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

    if (articleUrl && articleUrl !== '' && articleUrl !== 'undefined') {
      fetchArticle();
    } else {
      console.error('❌ Invalid articleUrl:', articleUrl);
      setError('Invalid article URL. Please check the link and try again.');
      setIsLoading(false);
    }
  }, [articleUrl]);

  // Process article data when article changes
  useEffect(() => {
    if (article) {
      const processArticle = async () => {
        try {
          console.log('🔍 Processing article for display:', article);
          const processed = await convertToArticleFormat(article);
          console.log('🔍 Processed article data:', processed);
          setArticleData(processed);
        } catch (error) {
          console.error('❌ Error processing article:', error);
          // Set a fallback article data if processing fails
          setArticleData({
            title: article.title || 'News Article',
            authorName: article.author || article.source?.name || 'Unknown',
            createdAt: formatDate(article.publishedAt),
            readTime: 2,
            tags: [article.source?.name || 'News'],
            authorId: 'news-api',
            hasReflectionRoom: false,
            html: `<p>Error processing article. <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read original article</a></p>`
          });
        }
      };
      processArticle();
    }
  }, [article]);

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

  // Helper function to remove promotional content from news articles
  const removeNewsPromoContent = (content: string): string => {
    const promoPatterns = [
      // Newsletter and subscription promotions
      /Get our breaking news email[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      /Subscribe to[^.]*?(?:newsletter|updates|alerts)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      /Sign up for[^.]*?(?:newsletter|updates|alerts)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      
      // App promotions
      /Download our[^.]*?app[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      /Get the[^.]*?app[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      
      // Social media promotions
      /Follow us on[^.]*?(?:Twitter|Facebook|Instagram|LinkedIn)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      /Join us on[^.]*?(?:social media|Twitter|Facebook)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      
      // Generic promotional content
      /Read more[^.]*?(?:on our website|at)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      /Visit our website[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      
      // Specific patterns like Guardian's
      /free app or daily news podcast[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
      /breaking news email,\s*free app[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
    ];

    let cleanContent = content;
    promoPatterns.forEach(pattern => {
      cleanContent = cleanContent.replace(pattern, '');
    });

    return cleanContent.trim();
  };

  // Helper function to detect live blog/live coverage articles
  const isLiveBlogArticle = (article: NewsArticle): boolean => {
    const title = article.title?.toLowerCase() || '';
    const description = article.description?.toLowerCase() || '';
    const content = article.content?.toLowerCase() || '';
    
    // Check for live blog indicators
    const liveIndicators = [
      'live blog', 'liveblog', '– live', '- live',
      'live updates', 'live coverage', 'live feed',
      'breaking live', 'live breaking', 'live news',
      'follow live', 'live thread', 'live report'
    ];
    
    return liveIndicators.some(indicator => 
      title.includes(indicator) || 
      description.includes(indicator) || 
      content.includes(indicator)
    );
  };

  // Helper function to create live blog preview for news articles
  const createNewsLiveBlogPreview = (article: NewsArticle): string => {
    const preview = article.description || article.content?.substring(0, 200) + '...' || 'Live updates are being posted continuously...';
    
    return `
      <div class="live-blog-notice" style="margin: 2em 0; padding: 2em; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); border-radius: 16px; color: white; text-align: center; box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1em;">
          <div style="width: 12px; height: 12px; background: white; border-radius: 50%; margin-right: 12px; animation: pulse 2s infinite;"></div>
          <h2 style="margin: 0; font-size: 1.5em; font-weight: 700;">🔴 LIVE COVERAGE</h2>
        </div>
        <p style="margin: 0 0 1.5em 0; font-size: 1.1em; opacity: 0.95; line-height: 1.5;">
          This is a live, continuously updating news story. For the most current information and real-time updates, please visit the original news source.
        </p>
        <div style="background: rgba(255,255,255,0.15); border-radius: 12px; padding: 1.5em; margin: 1.5em 0; backdrop-filter: blur(10px);">
          <h3 style="margin: 0 0 1em 0; color: white; font-size: 1.2em;">Latest Updates Preview:</h3>
          <p style="margin: 0; color: rgba(255,255,255,0.9); line-height: 1.6; font-style: italic;">
            ${preview}
          </p>
        </div>
        <a href="${article.url}" 
           target="_blank" 
           rel="noopener noreferrer"
           style="display: inline-flex; align-items: center; gap: 12px; background: white; color: #ee5a24; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.1em; transition: all 0.3s ease; box-shadow: 0 4px 16px rgba(0,0,0,0.2);"
           onmouseover="this.style.transform=&quot;translateY(-2px)&quot;; this.style.boxShadow=&quot;0 6px 20px rgba(0,0,0,0.3)&quot;;"
           onmouseout="this.style.transform=&quot;translateY(0)&quot;; this.style.boxShadow=&quot;0 4px 16px rgba(0,0,0,0.2)&quot;;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
          </svg>
          Follow Live Updates at ${article.source?.name || 'News Source'}
        </a>
      </div>

      <style>
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      </style>
    `;
  };

  // Convert news article to display format
  const convertToArticleFormat = async (article: NewsArticle) => {
    // Check if this is a Guardian article and use Guardian processing
    if (article.source?.name === 'The Guardian' && articleUrl.includes('theguardian.com')) {
      console.log('🔍 Processing Guardian article with Guardian service...');
      
      try {
        // Import Guardian service
        const { guardianService } = await import('@/services/guardianService');
        
        // Extract Guardian article ID from URL
        const urlParts = articleUrl.split('/');
        const pathParts = urlParts.slice(3); // Remove https://, empty, theguardian.com
        const articleId = pathParts.join('/');
        
        console.log('🔍 URL parts:', urlParts);
        console.log('🔍 Path parts:', pathParts);
        console.log('🔍 Final article ID:', articleId);
        
        // Fetch the full Guardian article data
        const guardianArticle = await guardianService.getArticleById(articleId);
        
        // Use Guardian service's proper processing (includes live blog detection and promo removal)
        const guardianProcessed = guardianService.convertToArticleFormat(guardianArticle);
        
        console.log('🔍 Guardian processed result:', {
          title: guardianProcessed.title,
          htmlLength: guardianProcessed.html?.length,
          htmlPreview: guardianProcessed.html?.substring(0, 200) + '...',
          isLiveBlog: guardianProcessed.html?.includes('live-blog-notice')
        });
        
        return guardianProcessed;
        
      } catch (error) {
        console.error('❌ Error processing Guardian article:', error);
        // Fall back to regular processing if Guardian service fails
      }
    }
    
    // Check if this is a live blog article
    if (isLiveBlogArticle(article)) {
      console.log('🔴 Live blog detected for news article:', article.title);
      return {
        title: article.title || 'Live Coverage',
        authorName: article.author || article.source?.name || 'News Source',
        createdAt: formatDate(article.publishedAt),
        readTime: 2, // Live blogs are quick reads since they redirect
        tags: [article.source?.name || 'News', 'Live Coverage'],
        authorId: 'news-api',
        hasReflectionRoom: false,
        html: createNewsLiveBlogPreview(article)
      };
    }

    let articleHtml = '';
    
    // Helper function to clean and unescape HTML content
    const cleanHtmlContent = (text: string): string => {
      if (!text) return '';
      
      // First, decode HTML entities
      let cleanText = text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ');
      
      // Then remove HTML tags but preserve line breaks
      cleanText = cleanText.replace(/<[^>]*>/g, ' ');
      
      // Clean up multiple spaces
      cleanText = cleanText.replace(/\s+/g, ' ').trim();
      
      return cleanText;
    };

    // Helper function to safely escape HTML for attributes only
    const escapeForAttribute = (text: string): string => {
      if (!text) return '';
      return text
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    };
    
    // Check if this is a fallback article (no content available)
    const isFallback = article.content?.includes('no longer available through our news feed') || false;
    
    if (article.urlToImage) {
      const safeImageUrl = escapeForAttribute(article.urlToImage);
      articleHtml += `<img src="${safeImageUrl}" alt="" style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px;" />`;
    }
    
    if (article.description) {
      let cleanDescription = cleanHtmlContent(article.description);
      // Remove promotional content from description
      cleanDescription = removeNewsPromoContent(cleanDescription);
      if (cleanDescription.trim()) {
        articleHtml += `<p><strong>${cleanDescription}</strong></p>`;
      }
    }
    
    if (article.content) {
      // Clean up the content (NewsAPI sometimes truncates with [+chars])
      let rawContent = article.content.replace(/\[\+\d+\s+chars\]$/, '...');
      let cleanContent = cleanHtmlContent(rawContent);
      // Remove promotional content from main content
      cleanContent = removeNewsPromoContent(cleanContent);
      if (cleanContent.trim()) {
        articleHtml += `<p>${cleanContent}</p>`;
      }
    }
    
        const safeUrl = escapeForAttribute(article.url || '');
    const safeSourceName = cleanHtmlContent(article.source?.name || 'News Source');

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

  // Generate the current page URL for sharing
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://journalite.abdisalam.blog/news/${encodeURIComponent(articleUrl)}`;

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

  if (!article || !articleData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          {!article ? (
            <>
              <div className="text-gray-600 text-lg mb-4">Article not found</div>
              <button
                onClick={handleBackToList}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Back to News
              </button>
            </>
          ) : (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Processing article...</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="guardian-article news-article"
      style={{ position: 'relative', backgroundColor: '#ffffff' }}
    >
      {/* Navigation Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <BackButton fallbackUrl="/news">
            Back to News
          </BackButton>
          
          <ShareButton 
            title={article?.title || 'News Article'}
            url={currentUrl}
            text={`Check out this article: ${article?.title || 'News Article'}`}
          />
        </div>
      </div>

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

      {/* Bottom Navigation - shown on all screen sizes */}
      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  );
} 