'use client'

// src/components/RenderArticle.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import '@/styles/highlight.css';  // Import highlight styles
import styles from '@/styles/home.module.css';
import ArticleHighlights from './ArticleHighlights';
import { HighlightProvider } from '@/context/HighlightContext';
import InlineReflection from './InlineReflection';
import { highlightCodeBlocks } from '@/utils/syntaxHighlighter';
import ClientSideHighlighter from './ClientSideHighlighter';
import { getArticleImage } from '@/lib/buildMeta';

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

// Detect if content is poetry or pre-formatted text that should preserve line breaks
const isPoetryOrPreformatted = (content: string): boolean => {
  if (!content || typeof content !== 'string') return false;
  
  // Poetry patterns: short lines with deliberate line breaks
  const lines = content.split('\n').filter(line => line.trim().length > 0);
  
  // Check for poetry characteristics
  const hasShortLines = lines.some(line => line.trim().length < 50);
  const hasMultipleLines = lines.length > 2;
  const hasCommas = content.includes(',');
  const hasDeliberateBreaks = content.includes('\n');
  
  // Poetry often has lines ending with commas or deliberate short lines
  const poetryPatterns = [
    /,\s*\n/g, // Line ending with comma
    /\n[A-Z]/g, // New line starting with capital (verses)
    /\n\s*[A-Z][a-z]+ [a-z]+/g, // New line with capitalized words
  ];
  
  const hasPoetryPatterns = poetryPatterns.some(pattern => pattern.test(content));
  
  return hasDeliberateBreaks && hasMultipleLines && (hasShortLines || hasPoetryPatterns || hasCommas);
};

// Custom renderer that preserves poetry formatting
const renderTextContent = (content: string): React.ReactElement => {
  if (isHtmlContent(content)) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
  
  if (isPoetryOrPreformatted(content)) {
    // For poetry/pre-formatted text, preserve line breaks exactly as they are
    const lines = content.split('\n');
    return (
      <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    );
  }
  
  // For regular text, use ReactMarkdown
  return <ReactMarkdown>{content}</ReactMarkdown>;
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
  
  // State for reflection prompts
  const [reflectionResponses, setReflectionResponses] = useState<Record<string, string>>({});
  const [reflectionsEnabled, setReflectionsEnabled] = useState(true);
  
  // State for tracking read paragraphs
  const [readParagraphs, setReadParagraphs] = useState<Record<string, boolean>>({});
  const [readOrder, setReadOrder] = useState<string[]>([]);
  const readTimers = useRef<Record<string, NodeJS.Timeout>>({});

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
      console.log("🔐 Auth state changed:", user?.uid || "Not logged in");
    });
    return () => unsubscribe();
  }, []);

  // Debug article data
  useEffect(() => {
    console.log("📄 Article data:", {
      id: article.id,
      title: article.title,
      likes: article.likes,
      hasLikes: !!article.likes,
      likesLength: article.likes?.length
    });
  }, [article]);

  // Apply syntax highlighting when article content loads
  useEffect(() => {
    // Small delay to ensure DOM is fully updated
    const timer = setTimeout(() => {
      const articleContent = document.querySelector('.article-content');
      if (articleContent) {
        highlightCodeBlocks(articleContent as HTMLElement);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [article]);

  // Intersection Observer to track paragraph visibility and reading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const paragraphId = entry.target.getAttribute('data-paragraph-id');
          if (!paragraphId) return;

          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Paragraph is visible (50% or more)
            setVisibleParagraphs(prev => ({ ...prev, [paragraphId]: true }));
            
            // Start a timer to mark as "read" after 2 seconds of visibility
            if (!readTimers.current[paragraphId] && !readParagraphs[paragraphId]) {
              readTimers.current[paragraphId] = setTimeout(() => {
                setReadParagraphs(prev => {
                  if (!prev[paragraphId]) {
                    setReadOrder(order => [...order, paragraphId]);
                    return { ...prev, [paragraphId]: true };
                  }
                  return prev;
                });
                delete readTimers.current[paragraphId];
              }, 2000); // 2 seconds to be considered "read"
            }
          } else {
            // Paragraph is not visible
            setVisibleParagraphs(prev => ({ ...prev, [paragraphId]: false }));
            
            // Clear the timer if paragraph goes out of view before 2 seconds
            if (readTimers.current[paragraphId]) {
              clearTimeout(readTimers.current[paragraphId]);
              delete readTimers.current[paragraphId];
            }
          }
        });
      },
      {
        threshold: [0, 0.5, 1], // Track when 0%, 50%, and 100% visible
        rootMargin: '0px 0px -20% 0px' // Trigger when paragraph is 20% from bottom
      }
    );

    // Observe all paragraph elements
    Object.values(paragraphRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      // Clean up any remaining timers
      Object.values(readTimers.current).forEach(timer => clearTimeout(timer));
    };
  }, [paragraphRefs.current, readParagraphs]);

  useEffect(() => {
    // Sync like state with the article prop, especially if it can change from parent
    const currentLikes = article.likes || [];
    if (currentUser) {
      setIsLiked(currentLikes.includes(currentUser.uid));
    }
    setLikeCount(currentLikes.length);
  }, [article.likes, currentUser]);

  const handleLike = async () => {
    console.log("🚀 handleLike called");
    console.log("📊 Current state:", { 
      currentUser: currentUser?.uid, 
      articleId, 
      isLiked, 
      likeCount,
      articleLikes: article.likes 
    });

    if (!currentUser) {
      console.log("❌ No current user");
      alert("Please log in to like articles.");
      return;
    }
    if (!articleId) {
      console.error("❌ Article ID is missing.");
      return;
    }

    const articleRef = doc(db, "articles", articleId);
    console.log("📄 Article ref created for:", articleId);

    try {
      if (isLiked) {
        console.log("💔 Removing like...");
        await updateDoc(articleRef, { likes: arrayRemove(currentUser.uid) });
        setIsLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1));
        console.log("✅ Like removed successfully");
      } else {
        console.log("❤️ Adding like...");
        await updateDoc(articleRef, { likes: arrayUnion(currentUser.uid) });
        setIsLiked(true);
        setLikeCount(prev => prev + 1);
        console.log("✅ Like added successfully");
      }
    } catch (error: any) {
        console.error("💥 Error updating like status: ", error);
        console.error("🔍 Error details:", {
          code: error?.code,
          message: error?.message,
          stack: error?.stack
        });
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

  const ogUrl = `${baseUrl}/articles/${encodeURIComponent(article.slug)}`;
  const ogTitle = article.title;
  const ogDescription = getExcerptForSharing(100);
  
  // Use the helper function to get the best available image for Open Graph
  const ogImage = isSimple(article) 
    ? getArticleImage(article.coverImageUrl, article.body)
    : getArticleImage(article.coverImageUrl, article.content?.[0]?.text);

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
    
  // Handle sharing highlighted text
  const handleShareHighlighted = (highlightedText: string) => {
    // Create a share text that includes the highlighted quote
    const shareText = `"${highlightedText}" from ${article.title}`;
    
    // Set up share data for the modal
    const shareData = {
      title: article.title,
      text: shareText,
      url: `${baseUrl}article/${article.slug}`,
    };
    
    // Try to use the native share API first if available
    if (navigator.share) {
      navigator.share(shareData).catch(error => {
        console.error('Error sharing:', error);
        // Fallback to the share modal
        setIsShareModalOpen(true);
      });
    } else {
      // Fallback to our custom share modal
      setIsShareModalOpen(true);
    }
  };

  // Handle reflection responses
  const handleReflectionResponse = (position: number, response: string) => {
    setReflectionResponses(prev => ({
      ...prev,
      [position]: response
    }));
  };

  // Determine if a reflection prompt should appear based on read paragraphs
  const shouldShowReflection = (index: number, paragraphId: string): boolean => {
    if (!reflectionsEnabled) return false;
    
    const currentParagraphRead = readParagraphs[paragraphId];
    if (!currentParagraphRead) return false; // Don't show until paragraph is actually read
    
    // Count how many paragraphs have been read so far
    const readCount = readOrder.length;
    
    // Show reflection prompts after every 2 read paragraphs
    const shouldShow = readCount > 0 && readCount % 2 === 0;
    
    // Only show the prompt on the most recently read paragraph
    const isLatestRead = readOrder[readOrder.length - 1] === paragraphId;
    
    return shouldShow && isLatestRead;
  };
    
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
      <ClientSideHighlighter />
      <div className="article-container">
        {/* Share Modal */}
        {isShareModalOpen && (
          <ShareModal
            isOpen={isShareModalOpen}
            onClose={handleCloseShareModal}
            highlightText={getExcerptForSharing()}
            articleTitle={article.title}
            shareUrl={`${baseUrl}/articles/${encodeURIComponent(article.slug)}`}
          />
        )}

        {/* Article Header */}
          <ArticleHeader />
          


        {/* Reflection Settings & Reading Progress */}
        <div className="reflection-settings" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '1rem', 
          margin: '1rem 0',
          padding: '0.75rem',
          background: '#f8fafc',
          borderRadius: '8px',
          fontSize: '0.875rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#64748b' }}>
              📖 Reading Progress: {readOrder.length} paragraphs read
            </span>
            {readOrder.length > 0 && (
              <span style={{ 
                color: '#059669', 
                fontSize: '0.75rem',
                background: '#d1fae5',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px'
              }}>
                Next reflection in {2 - (readOrder.length % 2)} paragraphs
              </span>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#64748b' }}>
              💭 Interactive Reflections
            </span>
            <button
              onClick={() => setReflectionsEnabled(!reflectionsEnabled)}
              style={{
                padding: '0.5rem 1rem',
                border: reflectionsEnabled ? '2px solid #3b82f6' : '2px solid #e2e8f0',
                background: reflectionsEnabled ? '#3b82f6' : 'white',
                color: reflectionsEnabled ? 'white' : '#64748b',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {reflectionsEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {/* Article Content wrapped with HighlightProvider and ArticleHighlights */}
        <HighlightProvider articleId={article.id}>
          <ArticleHighlights 
            articleId={article.id}
            articleTitle={article.title}
            articleSlug={article.slug}
          >
            <div className="article-content article-highlight-container">
            {isComplex(article) ? (
                // Complex article with paragraphs
                <>
                  {article.content.map((paragraph, index) => (
                    <React.Fragment key={paragraph.paragraphId || index}>
                      <div
                          ref={el => {
                            if (el) paragraphRefs.current[paragraph.paragraphId || `p-${index}`] = el;
                          }}
                          data-paragraph-id={paragraph.paragraphId || `p-${index}`}
                          className={`paragraph-block ${visibleParagraphs[paragraph.paragraphId || `p-${index}`] ? 'visible' : ''} ${readParagraphs[paragraph.paragraphId || `p-${index}`] ? 'read' : ''}`}
                      >
                          <div className="paragraph-text">
                            {renderTextContent(paragraph.text)}
                          </div>
                      </div>
                      
                      {/* Add reflection prompt after certain paragraphs */}
                      {shouldShowReflection(index, paragraph.paragraphId || `p-${index}`) && (
                        <InlineReflection
                          articleId={article.id}
                          position={index}
                          onResponseSaved={(response) => handleReflectionResponse(index, response)}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </>
            ) : isSimple(article) ? (
                // Simple article with single body
                <>
                  <div 
                    ref={el => {
                      if (el) paragraphRefs.current[`simple-body`] = el;
                    }}
                    data-paragraph-id="simple-body"
                    className={`paragraph-block visible ${readParagraphs['simple-body'] ? 'read' : ''}`}
                  >
                    <div className="paragraph-text">
                      {renderTextContent(article.body)}
                    </div>
                  </div>
                  
                  {/* Add a reflection prompt for simple articles */}
                  {shouldShowReflection(0, 'simple-body') && (
                    <InlineReflection
                      articleId={article.id}
                      position={0}
                      onResponseSaved={(response) => handleReflectionResponse(0, response)}
                    />
                  )}
                </>
                    ) : (
                // Fallback for unexpected article type
                <div className="paragraph-block visible">
                  <div className="paragraph-text">
                    <p>Content format not supported.</p>
                  </div>
                </div>
              )}
            </div>
          </ArticleHighlights>
        </HighlightProvider>
      
        {/* Reaction Bar */}
        <ReactionBar />

        {/* Comment Section */}
        <CommentSection 
          articleId={article.id}
        />
      </div>
    </>
    );
};

export default RenderArticle;