// src/components/RenderArticle.tsx
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import { Article as ArticleService } from '@/services/articleService';
import CommentSection from '@/components/CommentSection';
import '@/styles/article.css';  

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

interface ComplexArticle {
  _id: string;
  authorId: string;
  authorName?: string;
  title: string;
  slug: string;
  coverImageUrl?: string;
  tags: string[];
  content: Paragraph[];
  likes: string[];
  reposts: string[];
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

interface RenderArticleProps {
  article: ArticleService | ComplexArticle;
}

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

// Prepare username for URL to ensure consistent casing between client and server
const prepareUsernameForUrl = (name: string): string => {
  // Ensure the name is trimmed and lowercase for consistent URLs
  return encodeURIComponent(name.trim().toLowerCase());
};

const RenderArticle: React.FC<RenderArticleProps> = ({ article }) => {
  const [visibleParagraphs, setVisibleParagraphs] = useState<Record<string, boolean>>({});
  const paragraphRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // IntersectionObserver for fade‑in
  useEffect(() => {
    if (!Array.isArray((article as ComplexArticle).content)) return;

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

    // Store the refs to avoid closure issues in cleanup
    const currentRefs = paragraphRefs.current;

    // observe each paragraph
    Object.values(currentRefs).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      // Use the stored refs for cleanup
      Object.values(currentRefs).forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [article]);

  const isComplex = (a: unknown): a is ComplexArticle => 
    a !== null && 
    typeof a === 'object' && 
    'content' in a && 
    Array.isArray((a as ComplexArticle).content);
    
  if (!isComplex(article)) return null;

  const authorName = article.authorName || "Unknown Author";
  // Pre-compute URL-safe username
  const urlUsername = prepareUsernameForUrl(authorName);
  // Pre-format the date to ensure it's consistent between server and client
  const formattedDate = formatDate(article.createdAt);

  return (
    <article className="article-container">
      <div className="article-main">
        <header className="article-header">
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            {/* Replace img with Next.js Image component */}
            <div className="author-image-container">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Author"
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
          <div className="article-tags">
            {article.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="article-content">
          {article.content.map(para => (
            <div
              key={para.paragraphId}
              data-paragraph-id={para.paragraphId}
              ref={el => {
                paragraphRefs.current[para.paragraphId] = el
              }}
              className={`paragraph-block ${
                visibleParagraphs[para.paragraphId] ? 'visible' : ''
              }`}
            >
              <div className="paragraph-text">
                <ReactMarkdown>{para.text}</ReactMarkdown>
              </div>
            </div>
          ))}
        </section>

        <CommentSection slug={article.slug} />
      </div>
    </article>
  );
};

export default RenderArticle;