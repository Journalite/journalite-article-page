'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/clientApp';
import { ExternalArticleService } from '@/services/externalArticleService';
import ArticleLayout from '@/components/ArticleLayout';
import CommentSection from '@/components/CommentSection';
import ShareButton from '@/components/ShareButton';
import BackButton from '@/components/BackButton';
import MobileBottomNav from '@/components/MobileBottomNav';
import { guardianService, GuardianArticle } from '@/services/guardianService';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';
import '@/styles/guardian-articles.css';

interface GuardianArticleClientProps {
  params: { articleId: string[] };
}

export default function GuardianArticleClient({ params }: GuardianArticleClientProps) {
  const router = useRouter();
  const [article, setArticle] = useState<GuardianArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialLikes, setInitialLikes] = useState<string[]>([]);
  
  // Mood feature state
  const [moodFeatureEnabled, setMoodFeatureEnabled] = useState(true);
  const [mood, setMood] = useState<'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic'>('reflective');

  // Guardian article IDs can have slashes, so we need to handle the full path
  const articleId = Array.isArray(params?.articleId) 
    ? params.articleId.join('/')
    : (params?.articleId as string);

  // Create a safe Firestore-compatible ID by encoding slashes and other special characters
  const firestoreArticleId = `guardian-${encodeURIComponent(articleId)}`;

  console.log('🔍 GuardianArticleClient - Raw params:', params);
  console.log('🔍 GuardianArticleClient - articleId:', articleId);
  console.log('🔍 GuardianArticleClient - firestoreArticleId:', firestoreArticleId);

  // Dynamic meta tags for client-side updates
  useEffect(() => {
    if (article) {
      // Update document title
      document.title = `${article.webTitle} | Journalite`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.fields?.standfirst || article.fields?.trailText || 'Read this article from The Guardian on Journalite');
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
      
      updateMetaTag('og:title', article.webTitle);
      updateMetaTag('og:description', article.fields?.standfirst || article.fields?.trailText || 'Read this article from The Guardian on Journalite');
      updateMetaTag('og:image', article.fields?.thumbnail || article.fields?.main || '/images/journalite-social-banner.png');
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
      updateTwitterTag('twitter:title', article.webTitle);
      updateTwitterTag('twitter:description', article.fields?.standfirst || article.fields?.trailText || 'Read this article from The Guardian on Journalite');
      updateTwitterTag('twitter:image', article.fields?.thumbnail || article.fields?.main || '/images/journalite-social-banner.png');
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
        
        console.log('Guardian Article Page - articleId:', articleId);
        
        if (!guardianService.isConfigured()) {
          setError('Guardian API not configured. Please add your Guardian API key to environment variables.');
          return;
        }
        
        if (!articleId || articleId === '') {
          setError('Invalid article ID. Please check the link and try again.');
          return;
        }
        
        // Use the specific getArticleById method
        const foundArticle = await guardianService.getArticleById(articleId);
        console.log('Guardian Article Page - foundArticle:', foundArticle);
        setArticle(foundArticle);
        
        // Fetch likes for this Guardian article from our social system
        await fetchLikesData(firestoreArticleId);
        
      } catch (error) {
        console.error('Error fetching Guardian article:', error);
        setError('Failed to load article. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  // Analyze mood when article is loaded (only for authenticated users)
  useEffect(() => {
    if (article && isAuthenticated) {
      // Extract text from article content for sentiment analysis
      const textContent = article.fields?.bodyText || article.fields?.trailText || '';
      if (textContent) {
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
    router.push('/guardian-news');
  };

  // Fetch likes data for the Guardian article from our social system
  const fetchLikesData = async (guardianArticleId: string) => {
    try {
      const socialData = await ExternalArticleService.getSocialData(guardianArticleId, 'guardian');
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
            Back to Guardian News
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
            Back to Guardian News
          </button>
        </div>
      </div>
    );
  }

  const articleData = guardianService.convertToArticleFormat(article);

  // Generate the current page URL for sharing
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://journalite.abdisalam.blog/guardian-news/${articleId}`;

  return (
    <div 
      className="guardian-article"
      style={{ position: 'relative', backgroundColor: '#ffffff' }}
    >
      {/* Navigation Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <BackButton fallbackUrl="/guardian-news">
            Back to Guardian News
          </BackButton>
          
          <ShareButton 
            title={article.webTitle}
            url={currentUrl}
            text={`Check out this article from The Guardian: ${article.webTitle}`}
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
        articleId={firestoreArticleId}
        articleHtml={articleData.html}
        article={articleData}
        initialLikes={initialLikes}
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        onEditClick={handleBackToList}
        articleTitle={articleData.title}
        articleSlug={firestoreArticleId}
        moodFeatureEnabled={moodFeatureEnabled}
        onToggleMoodFeature={handleToggleMoodFeature}
        mood={mood}
        isExternal={true}
        externalSource="guardian"
        externalId={articleId}
        externalUrl={article.webUrl}
      />
      
      {/* Comments Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <CommentSection 
          articleId={firestoreArticleId}
        />
      </div>

      {/* Bottom Navigation - shown on all screen sizes */}
      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  );
} 