'use client'

// src/components/RenderArticle.tsx
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import { Article as ArticleServiceType } from '@/services/articleService';
import CommentSection from '@/components/CommentSection';
import ShareModal from '@/components/ShareModal';
import { auth, db } from '@/firebase/clientApp';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'; // Removed getDoc, DocumentData as not directly used here now
import { User } from 'firebase/auth';
import Head from 'next/head';
import '@/styles/article.css';  
import styles from '@/styles/home.module.css';

interface Comment {
  userId: string;
  content: string;
  createdAt: string;
}

interface Paragraph {
  paragraphId: string;
  text: string;
  likes: string[];
  comments: Comment[];
}

interface BaseArticleInfo {
  id: string; 
  authorId: string;
  authorName?: string;
  title: string;
  slug: string;
  coverImageUrl?: string;
  tags?: string[]; 
  likes?: string[]; 
  createdAt: string; 
  updatedAt?: string;
  excerpt?: string;
}

interface ComplexArticle extends BaseArticleInfo {
  content: Paragraph[]; // Array of paragraphs for complex structure
  reposts?: string[];
  viewCount?: number;
}

interface SimpleArticle extends BaseArticleInfo {
  body: string; // Single string body for simple content (can be HTML or Markdown)
}

interface RenderArticleProps {
  article: ComplexArticle | SimpleArticle;
}

// Helper function to strip HTML tags - COPIED HERE
const stripHtmlTags = (html: string | undefined): string => {
  if (!html) return '';
  if (typeof document !== 'undefined') {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  }
  return html.replace(/<[^>]*>/g, '');
};

// Format date in a consistent way that doesn't depend on user's locale
const formatDate = (dateString: string): string => {
  try {
    // Create a date object
    const date = new Date(dateString);
    
    // Use fixed options for consistent formatting
    // Important: We use 'en-US' locale explicitly to avoid locale-based hydration mismatches
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'UTC' // Use UTC to avoid timezone differences
    };
    
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Return the original string if there's an error
  }
};

// Determine if content is HTML
const isHtmlContent = (content: string): boolean => {
  if (!content || typeof content !== 'string') return false;
  
  // Check for common HTML tags with a more comprehensive regex
  const htmlTagPattern = /<\/?(?:p|div|span|h[1-6]|ul|ol|li|a|strong|em|hr|br|img|blockquote|code|pre|table|tr|td|th)[^>]*>/i;
  
  // Also detect entities like &nbsp; and &#39;
  const htmlEntityPattern = /&[a-z]+;|&#[0-9]+;/i;
  
  return htmlTagPattern.test(content) || htmlEntityPattern.test(content);
};

// Prepare username for URL to ensure consistent casing between client and server
const prepareUsernameForUrl = (name?: string): string => {
  // Ensure the name is trimmed and lowercase for consistent URLs
  return encodeURIComponent((name || '').trim().toLowerCase());
};

// Type guards need to be robust
const isComplex = (a: any): a is ComplexArticle => 
    a !== null && 
    typeof a === 'object' && 
    typeof a.id === 'string' &&
    Array.isArray(a.content); // Differentiator: content is an array
  
const isSimple = (a: any): a is SimpleArticle => 
    a !== null && 
    typeof a === 'object' && 
    typeof a.id === 'string' &&
    typeof a.body === 'string' && // Differentiator: body is a string
    !Array.isArray((a as ComplexArticle).content); // And content is not an array (extra check)

const RenderArticle: React.FC<RenderArticleProps> = ({ article }) => {
  const [visibleParagraphs, setVisibleParagraphs] = useState<Record<string, boolean>>({});
  const paragraphRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  const articleId = article.id;

  // State for ShareModal
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  // State for Likes
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(article.likes?.length || 0);
  const [baseUrl, setBaseUrl] = useState('https://mvp.journalite.app/');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Sync like state with the article prop, especially if it can change from parent
    const currentLikes = article.likes || [];
    if (currentUser) {
      setIsLiked(currentLikes.includes(currentUser.uid));
    }
    setLikeCount(currentLikes.length);
  }, [article.likes, currentUser]);

  const handleLike = async () => {
    if (!currentUser) {
      // Optionally: prompt user to log in
      alert("Please log in to like articles.");
      return;
    }
    if (!articleId) {
      console.error("Article ID is missing.");
      return;
    }

    const articleRef = doc(db, "articles", articleId);
    try {
      if (isLiked) {
        await updateDoc(articleRef, { likes: arrayRemove(currentUser.uid) });
        setIsLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1)); // Ensure count doesn't go below 0
      } else {
        await updateDoc(articleRef, { likes: arrayUnion(currentUser.uid) });
        setIsLiked(true);
        setLikeCount(prev => prev + 1);
      }
      // To reflect changes in the parent if it relies on this prop for likes:
      // You might need a callback function passed from parent to update its state.
      // For now, this updates local state which is often sufficient for immediate UI feedback.
    } catch (error) {
        console.error("Error updating like status: ", error);
        alert("Failed to update like status. Please try again.");
    }
  };
  
  const getExcerptForSharing = (maxLength = 150) => {
    if (article.excerpt) return stripHtmlTags(article.excerpt).substring(0, maxLength) + (stripHtmlTags(article.excerpt).length > maxLength ? '...' : '');
    let textToClean = '';
    if (isComplex(article) && article.content.length > 0) {
        textToClean = article.content[0].text;
    } else if (isSimple(article)) {
        textToClean = article.body;
    }
    
    const cleanText = stripHtmlTags(textToClean);
    if (cleanText.length <= maxLength) return cleanText;
    return cleanText.substring(0, maxLength).trim() + '...';
  };

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };
  
  // Set initial paragraph visibility state (for complex articles)
  useEffect(() => {
    if (!isComplex(article)) return; // Guard for complex articles
    const initialVisibility = article.content.reduce((acc, para) => {
      acc[para.paragraphId] = true;
      return acc;
    }, {} as Record<string, boolean>);
    const timer = setTimeout(() => setVisibleParagraphs(initialVisibility), 100);
    return () => clearTimeout(timer);
  }, [article]);

  // IntersectionObserver for fade‑in (for complex articles)
  useEffect(() => {
    if (!isComplex(article)) return; // Guard for complex articles
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('data-paragraph-id');
          if (id && entry.isIntersecting) {
            setVisibleParagraphs(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.3, rootMargin: '-30px 0px' }
    );
    const currentRefs = { ...paragraphRefs.current }; // Clone to avoid issues with changing refs
    Object.values(currentRefs).forEach(el => {
      if (el) observer.observe(el);
    });
    return () => {
      Object.values(currentRefs).forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [article]);

  if (!articleId) {
    return <div className="article-error">Article data is incomplete (missing ID).</div>;
  }
  
  // Combined guard: if it's neither identifiably simple nor complex, then error.
  if (!isSimple(article) && !isComplex(article)) {
    console.warn("Article format not supported, article object:", article);
    return <div className="article-error">Article format not supported or missing ID.</div>;
  }

  const ogUrl = `${baseUrl}/articles?slug=${encodeURIComponent(article.slug)}`;
  const ogTitle = article.title;
  const ogDescription = getExcerptForSharing(100);
  const ogImage = article.coverImageUrl || `${baseUrl}/default-journalite-og-image.png`; // Add a default OG image to your public folder

  // Common article header structure
  const ArticleHeader = () => {
    const authorName = article.authorName || "Unknown Author";
    const urlUsername = prepareUsernameForUrl(authorName);
    const createdAtDate = article.createdAt || new Date().toISOString(); // Fallback for createdAt
    const formattedDate = formatDate(createdAtDate);
    const tags = article.tags || [];

    return (
      <header className="article-header">
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <div className="author-image-container">
            <Image
              src={article.authorName && article.authorId ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330" : "/default-avatar.png"} 
              alt={authorName}
              width={40}
              height={40}
              className="author-image"
            />
          </div>
          <Link href={`/user/${urlUsername}`} className="author-link">
            By {authorName}
          </Link>
          <span className="separator">•</span>
          <span className="date">{formattedDate}</span>
        </div>
        {tags.length > 0 && (
          <div className="article-tags">
            {tags.map(tag => (
              <Link 
                key={tag} 
                href={`/tag/${tag.toLowerCase()}`}
                className="tag"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>
    );
  };
  
  const ReactionBar = () => (
    <div className={`${styles['reaction-bar']} article-reaction-bar`} style={{ marginTop: '2rem', marginBottom: '1rem', justifyContent: 'flex-start', gap: '1rem' }}>
      <button 
        onClick={handleLike} 
        className={`${styles['reaction-button']} ${isLiked ? styles['liked'] : ''}`} 
        aria-label={isLiked ? "Unlike article" : "Like article"}
        disabled={!currentUser} // Disable if not logged in
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span style={{ marginLeft: '0.5rem' }}>{likeCount}</span>
      </button>
      <button 
        className={styles['reaction-button']} 
        aria-label="Share article"
        onClick={handleOpenShareModal}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
        </svg>
      </button>
      {/* Add Comment button if needed here */}
    </div>
  );

  return (
    <>
      <Head>
        <title>{ogTitle} | Journalite</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <article className="article-container">
        <div className="article-main">
          <ArticleHeader />
          <ReactionBar />

          <section className="article-content">
            {isComplex(article) ? (
              article.content.map(para => (
                <div
                  key={para.paragraphId}
                  ref={(el) => { paragraphRefs.current[para.paragraphId] = el; }} 
                  data-paragraph-id={para.paragraphId}
                  className={`paragraph-block ${visibleParagraphs[para.paragraphId] ? 'visible' : ''}`}
                >
                  {isHtmlContent(para.text) ? (
                    <div className="paragraph-text" dangerouslySetInnerHTML={{ __html: para.text }} />
                  ) : (
                    <div className="paragraph-text"><ReactMarkdown>{para.text}</ReactMarkdown></div>
                  )}
                </div>
              ))
            ) : isSimple(article) ? (
              (() => {
                const articleContent = article.body; // Now strictly body for simple articles
                return (
                  <div className="paragraph-block visible">
                    {isHtmlContent(articleContent) ? (
                      <div className="paragraph-text" dangerouslySetInnerHTML={{ __html: articleContent }} />
                    ) : (
                      <div className="paragraph-text"><ReactMarkdown>{articleContent}</ReactMarkdown></div>
                    )}
                  </div>
                );
              })()
            ) : null}
          </section>
          
          <CommentSection slug={article.slug} />
        </div>
      </article>
      
      {isShareModalOpen && articleId && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={handleCloseShareModal}
          articleTitle={article.title}
          articleUrl={ogUrl}
          coverImageUrl={article.coverImageUrl || undefined}
          excerpt={getExcerptForSharing(100)}
        />
      )}
    </>
  );
};

export default RenderArticle;