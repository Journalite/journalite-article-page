'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/explore.module.css'
import { auth } from '@/firebase/clientApp'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getArticles, getArticlesByTag, Article as FirestoreArticle } from '@/firebase/articles'
import { getUserProfile } from '@/services/userService'
import { guardianService, GuardianArticle } from '@/services/guardianService'
import { newsService, NewsArticle } from '@/services/newsService'
import NotificationBell from '@/components/NotificationBell'
import LeftSidebar from '@/components/LeftSidebar'
import TopLeftLogo from '@/components/TopLeftLogo'
import ShareModal from '@/components/ShareModal'

// Types for mixed article data
interface BaseArticle {
  id: string;
  title: string;
  slug: string;
  authorName: string;
  excerpt: string;
  coverImageUrl?: string | null;
  tags?: string[];
  createdAt: string;
  readTime: number;
  source: 'journalite' | 'guardian' | 'newsapi';
  url?: string; // For external articles
  likes?: string[];
  viewCount?: number;
}

// Interface for article details to be passed to the modal
interface SharingArticleDetails {
  title: string;
  slug: string;
  coverImageUrl?: string | null;
  excerpt?: string;
}

// Categories for organizing articles
interface Category {
  id: string;
  name: string;
  articles: BaseArticle[];
  priority: number; // Higher priority = shown first
}

// Mapping user interests to news categories and Guardian sections
const INTEREST_MAPPING: { [key: string]: { newsCategory: string; guardianSections: string[]; keywords: string[] } } = {
  'Technology': { 
    newsCategory: 'technology', 
    guardianSections: ['technology', 'games'], 
    keywords: ['tech', 'AI', 'software', 'startup', 'digital'] 
  },
  'Science': { 
    newsCategory: 'science', 
    guardianSections: ['science', 'environment'], 
    keywords: ['research', 'study', 'discovery', 'climate', 'space'] 
  },
  'Art & Design': { 
    newsCategory: 'entertainment', 
    guardianSections: ['artanddesign', 'culture'], 
    keywords: ['art', 'design', 'creative', 'gallery', 'artist'] 
  },
  'Books & Literature': { 
    newsCategory: 'entertainment', 
    guardianSections: ['books', 'culture'], 
    keywords: ['book', 'author', 'literature', 'novel', 'poetry'] 
  },
  'Travel': { 
    newsCategory: 'general', 
    guardianSections: ['travel'], 
    keywords: ['travel', 'destination', 'vacation', 'tourism', 'adventure'] 
  },
  'Food & Cooking': { 
    newsCategory: 'general', 
    guardianSections: ['food'], 
    keywords: ['food', 'recipe', 'cooking', 'restaurant', 'chef'] 
  },
  'Health & Wellness': { 
    newsCategory: 'health', 
    guardianSections: ['society', 'lifeandstyle'], 
    keywords: ['health', 'wellness', 'fitness', 'medical', 'mental health'] 
  },
  'Sports': { 
    newsCategory: 'sports', 
    guardianSections: ['sport', 'football'], 
    keywords: ['sports', 'game', 'team', 'player', 'match'] 
  },
  'Music': { 
    newsCategory: 'entertainment', 
    guardianSections: ['music', 'culture'], 
    keywords: ['music', 'artist', 'album', 'concert', 'song'] 
  },
  'Movies & TV': { 
    newsCategory: 'entertainment', 
    guardianSections: ['film', 'tv-and-radio'], 
    keywords: ['movie', 'film', 'TV', 'series', 'actor'] 
  },
  'Gaming': { 
    newsCategory: 'technology', 
    guardianSections: ['games', 'technology'], 
    keywords: ['gaming', 'game', 'video game', 'esports', 'console'] 
  },
  'Fashion': { 
    newsCategory: 'general', 
    guardianSections: ['fashion', 'lifeandstyle'], 
    keywords: ['fashion', 'style', 'clothing', 'designer', 'trend'] 
  },
  'Business & Finance': { 
    newsCategory: 'business', 
    guardianSections: ['business', 'money'], 
    keywords: ['business', 'finance', 'economy', 'market', 'investment'] 
  },
  'History': { 
    newsCategory: 'general', 
    guardianSections: ['world', 'culture'], 
    keywords: ['history', 'historical', 'ancient', 'heritage', 'archaeology'] 
  },
  'Politics': { 
    newsCategory: 'general', 
    guardianSections: ['politics', 'world'], 
    keywords: ['politics', 'government', 'election', 'policy', 'democracy'] 
  },
  'Photography': { 
    newsCategory: 'entertainment', 
    guardianSections: ['artanddesign', 'culture'], 
    keywords: ['photography', 'photo', 'camera', 'photographer', 'visual'] 
  }
};

// Adapter function to convert Firestore articles to BaseArticle format
const adaptFirestoreArticle = (firestoreArticle: FirestoreArticle, cleanHtmlText: (text: string) => string): BaseArticle => {
  // Extract clean text for excerpt
  const rawExcerpt = firestoreArticle.body.substring(0, 200) + '...';
  
  return {
    id: firestoreArticle.id || '',
    title: firestoreArticle.title,
    slug: firestoreArticle.slug || firestoreArticle.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-'),
    authorName: firestoreArticle.authorName,
    excerpt: cleanHtmlText(rawExcerpt),
    coverImageUrl: firestoreArticle.coverImage || null,
    tags: firestoreArticle.tags,
    createdAt: firestoreArticle.createdAt.toDate().toISOString(),
    readTime: Math.ceil(firestoreArticle.body.split(' ').length / 200),
    source: 'journalite',
    likes: firestoreArticle.likes || [],
    viewCount: firestoreArticle.viewCount || 0
  };
};

// Adapter function to convert Guardian articles to BaseArticle format
const adaptGuardianArticle = (guardianArticle: GuardianArticle, cleanHtmlText: (text: string) => string): BaseArticle => {
  const rawExcerpt = guardianArticle.fields?.trailText || 
                    guardianArticle.fields?.standfirst || 
                    guardianArticle.fields?.bodyText?.substring(0, 200) + '...' || 
                    'Read this article from The Guardian';

  return {
    id: `guardian-${guardianArticle.id}`,
    title: guardianArticle.webTitle,
    slug: `guardian-${encodeURIComponent(guardianArticle.id)}`,
    authorName: guardianArticle.fields?.byline || 'The Guardian',
    excerpt: cleanHtmlText(rawExcerpt),
    coverImageUrl: guardianArticle.fields?.thumbnail || null,
    tags: [guardianArticle.sectionName, guardianArticle.pillarName].filter(Boolean),
    createdAt: guardianArticle.webPublicationDate,
    readTime: Math.ceil((guardianArticle.fields?.bodyText?.split(' ').length || 500) / 200),
    source: 'guardian',
    url: `/guardian-news/${guardianArticle.id}`
  };
};

// Adapter function to convert NewsAPI articles to BaseArticle format
const adaptNewsApiArticle = (newsArticle: NewsArticle, cleanHtmlText: (text: string) => string): BaseArticle => {
  const rawExcerpt = newsArticle.description || 
                    newsArticle.content?.substring(0, 200) + '...' || 
                    'Read this article from the news source';

  return {
    id: `news-${encodeURIComponent(newsArticle.url)}`,
    title: newsArticle.title,
    slug: `news-${encodeURIComponent(newsArticle.url)}`,
    authorName: newsArticle.author || newsArticle.source.name,
    excerpt: cleanHtmlText(rawExcerpt),
    coverImageUrl: newsArticle.urlToImage || null,
    tags: [newsArticle.source.name],
    createdAt: newsArticle.publishedAt,
    readTime: Math.ceil((newsArticle.content?.split(' ').length || 300) / 200),
    source: 'newsapi',
    url: `/news/${encodeURIComponent(newsArticle.url)}`
  };
};

export default function ExploreClient() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharingArticleDetails, setSharingArticleDetails] = useState<SharingArticleDetails | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

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

  // Check authentication status and load user profile
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
      
      if (user) {
        try {
          const userProfile = await getUserProfile(user.uid);
          if (userProfile?.interests) {
            setUserInterests(userProfile.interests);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        setUserInterests([]);
      }
    });
    
    return () => unsubscribe();
  }, []);

  // Set up window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use different default sidebar state based on screen size
  useEffect(() => {
    setIsSidebarCollapsed(windowWidth < 768);
  }, [windowWidth]);
  
  // Fetch mixed articles when component mounts or user interests change
  useEffect(() => {
    const fetchMixedArticles = async () => {
      try {
        setIsLoading(true);
        
        // Fetch content with better balance
        console.log('🔍 Starting to fetch mixed articles...');
        
        // Reduce Journalite articles to make room for external content
        const journaliteArticles = await getArticles({ limit: 8 }); // Reduced from 12
        const adaptedJournaliteArticles = journaliteArticles.map(article => adaptFirestoreArticle(article, cleanHtmlText));
        console.log(`📝 Fetched ${adaptedJournaliteArticles.length} Journalite articles`);
        
        // Fetch external articles based on user interests
        const externalArticles = await fetchExternalArticles(userInterests);
        console.log(`🌐 Fetched ${externalArticles.length} external articles`);
        console.log('External articles breakdown:', {
          guardian: externalArticles.filter(a => a.source === 'guardian').length,
          newsapi: externalArticles.filter(a => a.source === 'newsapi').length
        });
        
        // Combine with priority to external content
        let allArticles = [];
        
        // Add external articles first (higher priority)
        allArticles.push(...externalArticles);
        
        // Then add Journalite articles
        allArticles.push(...adaptedJournaliteArticles);
        
        console.log(`🔗 Total articles before deduplication: ${allArticles.length}`);
        
        // Deduplicate articles
        const deduplicatedArticles = deduplicateArticles(allArticles);
        console.log(`✨ Articles after deduplication: ${deduplicatedArticles.length}`);
        console.log('Final breakdown:', {
          journalite: deduplicatedArticles.filter(a => a.source === 'journalite').length,
          guardian: deduplicatedArticles.filter(a => a.source === 'guardian').length,
          newsapi: deduplicatedArticles.filter(a => a.source === 'newsapi').length
        });
        
        // Track used articles to prevent duplicates across categories
        const usedArticleIds = new Set<string>();
        
        // Create categories with better external content distribution
        const categoriesData: Category[] = [];
        
        // 1. Mixed/Discover section (prioritize external content)
        const mixedArticles = getMixedArticlesWithBalance(deduplicatedArticles, usedArticleIds);
        if (mixedArticles.length > 0) {
          categoriesData.push({
            id: 'mixed',
            name: 'Discover Stories',
            articles: mixedArticles,
            priority: 100 // Highest priority
          });
          mixedArticles.forEach(article => usedArticleIds.add(article.id));
        }
        
        // 2. Personalized/Featured articles
        const personalizedArticles = await getPersonalizedArticles(deduplicatedArticles, userInterests, usedArticleIds);
        if (personalizedArticles.length > 0) {
          categoriesData.push({
            id: 'personalized',
            name: isAuthenticated && userInterests.length > 0 ? 'For You' : 'Featured Stories',
            articles: personalizedArticles,
            priority: 95
          });
          personalizedArticles.forEach(article => usedArticleIds.add(article.id));
        }
        
        // 3. External News section (if we have external articles)
        const externalOnlyArticles = deduplicatedArticles.filter((a: BaseArticle) => 
          (a.source === 'guardian' || a.source === 'newsapi') && !usedArticleIds.has(a.id)
        ).slice(0, 8);
        
        if (externalOnlyArticles.length > 0) {
          categoriesData.push({
            id: 'external-news',
            name: 'Latest News',
            articles: externalOnlyArticles,
            priority: 90
          });
          externalOnlyArticles.forEach(article => usedArticleIds.add(article.id));
        }
        
        // 4. Interest-specific categories for authenticated users (mix of all sources)
        if (isAuthenticated && userInterests.length > 0) {
          for (const interest of userInterests.slice(0, 2)) { // Reduced to 2 interests
            const interestArticles = getArticlesByInterest(deduplicatedArticles, interest, usedArticleIds);
            if (interestArticles.length > 0) {
              categoriesData.push({
                id: `interest-${interest.toLowerCase()}`,
                name: interest,
                articles: interestArticles,
                priority: 85
              });
              interestArticles.forEach(article => usedArticleIds.add(article.id));
            }
          }
        }
        
        // 5. Trending articles (Journalite only)
        const trendingArticles = getTrendingArticles(deduplicatedArticles, usedArticleIds);
        if (trendingArticles.length > 0) {
          categoriesData.push({
            id: 'trending',
            name: 'Trending on Journalite',
            articles: trendingArticles,
            priority: 80
          });
          trendingArticles.forEach(article => usedArticleIds.add(article.id));
        }
        
        // 6. Recent articles (all sources)
        const recentArticles = getRecentArticles(deduplicatedArticles, usedArticleIds);
        if (recentArticles.length > 0) {
          categoriesData.push({
            id: 'recent',
            name: 'Latest Updates',
            articles: recentArticles,
            priority: 75
          });
        }
        
        // Sort categories by priority
        categoriesData.sort((a, b) => b.priority - a.priority);
        
        console.log('📊 Final categories:', categoriesData.map(cat => ({
          name: cat.name,
          count: cat.articles.length,
          sources: {
            journalite: cat.articles.filter(a => a.source === 'journalite').length,
            guardian: cat.articles.filter(a => a.source === 'guardian').length,
            newsapi: cat.articles.filter(a => a.source === 'newsapi').length
          }
        })));
        
        setCategories(categoriesData);
        
      } catch (error) {
        console.error('Error fetching mixed articles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMixedArticles();
  }, [userInterests, isAuthenticated]);

  // Fetch external articles based on user interests
  const fetchExternalArticles = async (interests: string[]): Promise<BaseArticle[]> => {
    const externalArticles: BaseArticle[] = [];
    
    try {
      // If user has no interests, fetch general articles
      const interestsToFetch = interests.length > 0 ? interests : ['Technology', 'Science', 'Business & Finance'];
      
      console.log('🔍 Fetching external articles for interests:', interestsToFetch);
      
      // Fetch Guardian articles
      console.log('📰 Checking Guardian API configuration...');
      if (guardianService.isConfigured()) {
        console.log('✅ Guardian API is configured');
        for (const interest of interestsToFetch.slice(0, 3)) {
          const mapping = INTEREST_MAPPING[interest];
          if (mapping) {
            try {
              console.log(`🔍 Fetching Guardian articles for: ${interest}`);
              // Search by keywords first
              const guardianResponse = await guardianService.searchArticles(
                mapping.keywords[0], // Use primary keyword
                mapping.guardianSections[0], // Use primary section
                1, // page
                6 // Increased from 4 to 6 per interest
              );
              
              const guardianArticles = guardianResponse.results.map(article => adaptGuardianArticle(article, cleanHtmlText));
              console.log(`📰 Found ${guardianArticles.length} Guardian articles for ${interest}`);
              externalArticles.push(...guardianArticles);
            } catch (error) {
              console.error(`❌ Error fetching Guardian articles for ${interest}:`, error);
            }
          }
        }
      } else {
        console.log('❌ Guardian API not configured');
      }
      
      // Fetch NewsAPI articles
      console.log('📺 Checking NewsAPI configuration...');
      if (newsService.isConfigured()) {
        console.log('✅ NewsAPI is configured');
        for (const interest of interestsToFetch.slice(0, 3)) {
          const mapping = INTEREST_MAPPING[interest];
          if (mapping) {
            try {
              console.log(`🔍 Fetching NewsAPI articles for: ${interest}`);
              const newsResponse = await newsService.getTopHeadlines(mapping.newsCategory);
              const newsArticles = newsResponse.articles.slice(0, 6).map(article => adaptNewsApiArticle(article, cleanHtmlText)); // Increased from 4 to 6
              console.log(`📺 Found ${newsArticles.length} NewsAPI articles for ${interest}`);
              externalArticles.push(...newsArticles);
            } catch (error) {
              console.error(`❌ Error fetching NewsAPI articles for ${interest}:`, error);
            }
          }
        }
      } else {
        console.log('❌ NewsAPI not configured');
      }
      
      // If no external articles were fetched, try general categories
      if (externalArticles.length === 0) {
        console.log('🔄 No external articles found, trying general categories...');
        
        // Try Guardian general search
        if (guardianService.isConfigured()) {
          try {
            const generalGuardianResponse = await guardianService.searchArticles('', 'technology', 1, 10);
            const generalGuardianArticles = generalGuardianResponse.results.map(article => adaptGuardianArticle(article, cleanHtmlText));
            console.log(`📰 Found ${generalGuardianArticles.length} general Guardian articles`);
            externalArticles.push(...generalGuardianArticles);
          } catch (error) {
            console.error('❌ Error fetching general Guardian articles:', error);
          }
        }
        
        // Try NewsAPI general headlines
        if (newsService.isConfigured()) {
          try {
            const generalNewsResponse = await newsService.getTopHeadlines('technology');
            const generalNewsArticles = generalNewsResponse.articles.slice(0, 10).map(article => adaptNewsApiArticle(article, cleanHtmlText));
            console.log(`📺 Found ${generalNewsArticles.length} general NewsAPI articles`);
            externalArticles.push(...generalNewsArticles);
          } catch (error) {
            console.error('❌ Error fetching general NewsAPI articles:', error);
          }
        }
      }
      
    } catch (error) {
      console.error('❌ Error in fetchExternalArticles:', error);
    }
    
    console.log(`🌐 Total external articles fetched: ${externalArticles.length}`);
    return externalArticles;
  };

  // Deduplicate articles based on title and URL similarity
  const deduplicateArticles = (articles: BaseArticle[]): BaseArticle[] => {
    const seen = new Set<string>();
    const deduplicated: BaseArticle[] = [];
    
    for (const article of articles) {
      // Create a key based on title and URL for deduplication
      const titleKey = article.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
      const urlKey = article.url ? article.url.toLowerCase() : '';
      const key = `${titleKey}|${urlKey}`;
      
      // Also check for very similar titles (first 50 characters)
      const shortTitleKey = titleKey.substring(0, 50);
      const isDuplicate = Array.from(seen).some(existingKey => {
        const existingShortTitle = existingKey.split('|')[0].substring(0, 50);
        return existingShortTitle === shortTitleKey;
      });
      
      if (!seen.has(key) && !isDuplicate) {
        seen.add(key);
        deduplicated.push(article);
      }
    }
    
    return deduplicated;
  };

  // Get personalized articles based on user interests
  const getPersonalizedArticles = async (articles: BaseArticle[], interests: string[], usedArticleIds?: Set<string>): Promise<BaseArticle[]> => {
    if (!interests.length) {
      return articles.slice(0, 8); // Return top articles if no interests
    }
    
    // Score articles based on interest matching
    const scoredArticles = articles.map(article => {
      let score = 0;
      
      // Check title and excerpt for interest keywords
      const content = `${article.title} ${article.excerpt}`.toLowerCase();
      
      for (const interest of interests) {
        const mapping = INTEREST_MAPPING[interest];
        if (mapping) {
          for (const keyword of mapping.keywords) {
            if (content.includes(keyword.toLowerCase())) {
              score += 10;
            }
          }
        }
        
        // Check tags
        if (article.tags) {
          for (const tag of article.tags) {
            if (tag.toLowerCase().includes(interest.toLowerCase())) {
              score += 15;
            }
          }
        }
      }
      
      // Boost recent articles
      const daysSinceCreated = (Date.now() - new Date(article.createdAt).getTime()) / (1000 * 60 * 60 * 24);
      if (daysSinceCreated < 1) score += 5;
      else if (daysSinceCreated < 7) score += 3;
      
      // Boost articles with engagement
      if (article.likes && article.likes.length > 0) score += article.likes.length;
      if (article.viewCount && article.viewCount > 0) score += Math.log(article.viewCount);
      
      return { ...article, score };
    });
    
    // Filter out already used articles and sort by score
    const availableArticles = usedArticleIds ? 
      scoredArticles.filter(article => !usedArticleIds.has(article.id)) : 
      scoredArticles;
      
    return availableArticles
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  };

  // Get trending articles (high engagement)
  const getTrendingArticles = (articles: BaseArticle[], usedArticleIds?: Set<string>): BaseArticle[] => {
    const availableArticles = usedArticleIds ? 
      articles.filter(article => !usedArticleIds.has(article.id)) : 
      articles;
      
    return availableArticles
      .filter(article => article.source === 'journalite') // Only Journalite articles have engagement data
      .sort((a, b) => {
        const aEngagement = (a.likes?.length || 0) + (a.viewCount || 0);
        const bEngagement = (b.likes?.length || 0) + (b.viewCount || 0);
        return bEngagement - aEngagement;
      })
      .slice(0, 6);
  };

  // Get recent articles
  const getRecentArticles = (articles: BaseArticle[], usedArticleIds?: Set<string>): BaseArticle[] => {
    const availableArticles = usedArticleIds ? 
      articles.filter(article => !usedArticleIds.has(article.id)) : 
      articles;
      
    return availableArticles
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 8);
  };

  // Get mixed articles from all sources
  const getMixedArticles = (articles: BaseArticle[], usedArticleIds?: Set<string>): BaseArticle[] => {
    const availableArticles = usedArticleIds ? 
      articles.filter(article => !usedArticleIds.has(article.id)) : 
      articles;
      
    const shuffled = [...availableArticles].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12);
  };

  // Get mixed articles with better balance between external and internal content
  const getMixedArticlesWithBalance = (articles: BaseArticle[], usedArticleIds?: Set<string>): BaseArticle[] => {
    const availableArticles = usedArticleIds ? 
      articles.filter(article => !usedArticleIds.has(article.id)) : 
      articles;
    
    // Separate by source
    const externalArticles = availableArticles.filter(a => a.source === 'guardian' || a.source === 'newsapi');
    const journaliteArticles = availableArticles.filter(a => a.source === 'journalite');
    
    // Create balanced mix: prioritize external content
    const balancedMix: BaseArticle[] = [];
    
    // Add external articles first (up to 8)
    const shuffledExternal = [...externalArticles].sort(() => Math.random() - 0.5);
    balancedMix.push(...shuffledExternal.slice(0, 8));
    
    // Fill remaining slots with Journalite articles (up to 4 more)
    const remainingSlots = 12 - balancedMix.length;
    if (remainingSlots > 0) {
      const shuffledJournalite = [...journaliteArticles].sort(() => Math.random() - 0.5);
      balancedMix.push(...shuffledJournalite.slice(0, remainingSlots));
    }
    
    // Final shuffle to mix the order
    return balancedMix.sort(() => Math.random() - 0.5);
  };

  // Get articles by specific interest
  const getArticlesByInterest = (articles: BaseArticle[], interest: string, usedArticleIds?: Set<string>): BaseArticle[] => {
    const mapping = INTEREST_MAPPING[interest];
    if (!mapping) return [];
    
    const availableArticles = usedArticleIds ? 
      articles.filter(article => !usedArticleIds.has(article.id)) : 
      articles;
    
    return availableArticles.filter(article => {
      const content = `${article.title} ${article.excerpt}`.toLowerCase();
      
      // Check for keywords
      for (const keyword of mapping.keywords) {
        if (content.includes(keyword.toLowerCase())) {
          return true;
        }
      }
      
      // Check tags
      if (article.tags) {
        for (const tag of article.tags) {
          if (tag.toLowerCase().includes(interest.toLowerCase())) {
            return true;
          }
        }
      }
      
      return false;
    }).slice(0, 6);
  };

  const getReadingTime = (readTime: number) => {
    return `${readTime} min read`;
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleOpenShareModal = (article: BaseArticle) => {
    setSharingArticleDetails({
      title: article.title,
      slug: article.slug,
      coverImageUrl: article.coverImageUrl,
      excerpt: article.excerpt
    });
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
    setSharingArticleDetails(null);
  };

  const getSourceBadge = (source: string) => {
    switch (source) {
      case 'guardian':
        return <span className={`${styles.sourceBadge} ${styles.guardian}`}>Guardian</span>;
      case 'newsapi':
        return <span className={`${styles.sourceBadge} ${styles.newsapi}`}>News</span>;
      case 'journalite':
        return <span className={`${styles.sourceBadge} ${styles.journalite}`}>Journalite</span>;
      default:
        return null;
    }
  };

  const getArticleLink = (article: BaseArticle) => {
    if (article.source === 'journalite') {
      return `/articles?slug=${encodeURIComponent(article.slug)}`;
    }
    return article.url || '#';
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading your personalized feed...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <TopLeftLogo />
      
             <LeftSidebar 
         isSidebarCollapsed={isSidebarCollapsed} 
         toggleSidebar={toggleSidebar}
         isAuthenticated={isAuthenticated}
         handleLogout={handleLogout}
       />
      
      <main className={`${styles.main} ${isSidebarCollapsed ? styles.mainExpanded : styles.mainWithSidebar}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Explore</h1>
          <div className={styles.headerActions}>
            {isAuthenticated && <NotificationBell />}
          </div>
        </div>

        {isAuthenticated && userInterests.length > 0 && (
          <div className={styles.interestsCard}>
            <h3 className={styles.interestsTitle}>Your Interests</h3>
            <div className={styles.interestsTags}>
              {userInterests.map((interest, index) => (
                <span key={index} className={styles.interestTag}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        {categories.map((category) => (
          <section key={category.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{category.name}</h2>
              <span className={styles.articleCount}>
                {category.articles.length} article{category.articles.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            <div className={styles.articlesGrid}>
              {category.articles.map((article) => (
                <article key={article.id} className={styles.articleCard}>
                  <Link href={getArticleLink(article)} className={styles.articleLink}>
                    {article.coverImageUrl && (
                      <div className={styles.articleImage}>
                        <img 
                          src={article.coverImageUrl} 
                          alt={article.title}
                          className={styles.image}
                        />
                      </div>
                    )}
                    
                    <div className={styles.articleContent}>
                      <div className={styles.sourceBadgeContainer}>
                        {getSourceBadge(article.source)}
                        <span className={styles.readTime}>
                          {getReadingTime(article.readTime)}
                        </span>
                      </div>
                      
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                      <p className={styles.articleExcerpt}>{article.excerpt}</p>
                      
                      <div className={styles.articleMeta}>
                        <span className={styles.author}>by {article.authorName}</span>
                        <span className={styles.date}>
                          {new Date(article.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      
                      {article.tags && article.tags.length > 0 && (
                        <div className={styles.tags}>
                          {article.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                  
                  <div className={styles.articleActions}>
                    <button 
                      onClick={() => handleOpenShareModal(article)}
                      className={styles.shareButton}
                      title="Share article"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                        <polyline points="16,6 12,2 8,6"/>
                        <line x1="12" y1="2" x2="12" y2="15"/>
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

             {/* Share Modal */}
       {isShareModalOpen && sharingArticleDetails && (
         <ShareModal
           isOpen={isShareModalOpen}
           onClose={handleCloseShareModal}
           highlightText={sharingArticleDetails.excerpt || 'Check out this article'}
           articleTitle={sharingArticleDetails.title}
           shareUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/articles?slug=${encodeURIComponent(sharingArticleDetails.slug)}`}
         />
       )}
    </div>
  );
} 