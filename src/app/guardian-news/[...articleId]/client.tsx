'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  // Navigation bar visibility state
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Guardian article IDs can have slashes, so we need to handle the full path
  const articleId = Array.isArray(params?.articleId) 
    ? params.articleId.join('/')
    : (params?.articleId as string);

  // Create a safe Firestore-compatible ID by encoding slashes and other special characters
  const firestoreArticleId = `guardian-${encodeURIComponent(articleId)}`;

  // Dynamic meta tags for client-side updates
  useEffect(() => {
    if (article) {
      // Update document title
      document.title = `${article.webTitle} | Oriteria`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.fields?.standfirst || article.fields?.trailText || 'Read this article from The Guardian on Oriteria');
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
      updateMetaTag('og:description', article.fields?.standfirst || article.fields?.trailText || 'Read this article from The Guardian on Oriteria');
      updateMetaTag('og:image', article.fields?.thumbnail || article.fields?.main || '/images/oriteria-social-banner.svg');
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
      updateTwitterTag('twitter:description', article.fields?.standfirst || article.fields?.trailText || 'Read this article from The Guardian on Oriteria');
      updateTwitterTag('twitter:image', article.fields?.thumbnail || article.fields?.main || '/images/oriteria-social-banner.svg');
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

  // Handle scroll to show/hide navigation bar with debouncing
  const handleScroll = useCallback(() => {
    // Clear previous timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Debounce scroll events
    scrollTimeoutRef.current = setTimeout(() => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        // Scrolling up or at top - show nav
        setIsNavVisible(true);
      } else {
        // Scrolling down - hide nav
        setIsNavVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    }, 10); // 10ms debounce
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

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

  // Fetch likes data for the Guardian article from our social system
  const fetchLikesData = useCallback(async (guardianArticleId: string) => {
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
  }, []);

  // Fetch the specific article
  const fetchArticle = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      
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
      setArticle(foundArticle);
      
      // Fetch likes for this Guardian article from our social system
      await fetchLikesData(firestoreArticleId);
      
    } catch (error) {
      console.error('Error fetching Guardian article:', error);
      setError('Failed to load article. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [articleId, firestoreArticleId, fetchLikesData]);

  useEffect(() => {
    if (articleId) {
      fetchArticle();
    }
  }, [articleId, fetchArticle]);

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

  const handleToggleMoodFeature = useCallback((enabled: boolean) => {
    setMoodFeatureEnabled(enabled);
    localStorage.setItem('moodFeatureEnabled', JSON.stringify(enabled));
  }, []);

  const handleBackToList = useCallback(() => {
    router.push('/guardian-news');
  }, [router]);

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
          : `https://oriteria.abdisalam.blog/guardian-news/${articleId}`;

  return (
    <div 
      className="guardian-article"
      style={{ position: 'relative', backgroundColor: '#ffffff' }}
    >
      {/* Navigation Header */}
      <div 
        className="fixed top-2 left-4 right-4 z-20 rounded-2xl border border-white/40 shadow-lg transition-transform duration-300 ease-in-out" 
        style={{ 
          height: '70px',
          transform: isNavVisible ? 'translateY(0)' : 'translateY(-100px)',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-3 h-full flex items-center justify-between">
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

      <div style={{ marginTop: '90px' }}>
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
      </div>
      
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