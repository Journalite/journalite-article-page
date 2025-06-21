'use client'

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { auth } from '@/firebase/clientApp';
import { ExternalArticleService } from '@/services/externalArticleService';
import ArticleLayout from '@/components/ArticleLayout';
import CommentSection from '@/components/CommentSection';
import { guardianService, GuardianArticle } from '@/services/guardianService';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';
import '@/styles/guardian-articles.css';

export default function GuardianArticlePage() {
  const params = useParams();
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
        
        // Use the specific getArticleById method
        const foundArticle = await guardianService.getArticleById(articleId);
        console.log('Guardian Article Page - foundArticle:', foundArticle);
        setArticle(foundArticle);
        
        // Fetch likes for this Guardian article from our social system
        await fetchLikesData(articleId);
        
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

  return (
    <div 
      className="guardian-article"
      style={{ position: 'relative', backgroundColor: '#ffffff' }}
    >
      {/* Optimized subtle mood gradient overlay */}
      {isAuthenticated && (
        <>
          {/* Clean atmospheric gradient */}
          <div
            data-mood-element="primary-gradient"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(135deg, 
                ${moodThemes[mood].gradientStart}08, 
                ${moodThemes[mood].gradientEnd}12, 
                ${moodThemes[mood].gradientStart}06)`,
              backgroundSize: '100% 100%',
              zIndex: -10,
              transition: 'background-image 0.8s ease-in-out',
              pointerEvents: 'none',
              display: typeof window !== 'undefined' && localStorage.getItem('moodFeatureEnabled') === 'false' ? 'none' : ''
            }}
          />
        </>
      )}

      <ArticleLayout
        articleId={`guardian-${encodeURIComponent(article.id)}`}
        articleHtml={articleData.html}
        article={articleData}
        initialLikes={initialLikes}
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        onEditClick={handleBackToList}
        articleTitle={articleData.title}
        articleSlug={`guardian-${encodeURIComponent(article.id)}`}
        moodFeatureEnabled={moodFeatureEnabled}
        onToggleMoodFeature={handleToggleMoodFeature}
        mood={mood}
        isExternal={true}
        externalSource="guardian"
        externalId={article.id}
        externalUrl={article.webUrl}
      />
      
      {/* Comments Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        <CommentSection 
          articleId={`guardian-${encodeURIComponent(article.id)}`}
        />
      </div>
    </div>
  );
} 