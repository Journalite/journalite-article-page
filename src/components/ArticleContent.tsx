"use client"

import { useEffect, useState } from 'react'
import { getArticle, Article as ArticleType } from '@/services/articleService'
import RenderArticle from '@/components/RenderArticle'
import styles from '@/styles/home.module.css'

interface ArticleContentProps {
  slug: string;
  setTags: (tags: string[]) => void;
}

export default function ArticleContent({ slug, setTags }: ArticleContentProps) {
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (!slug) return;
        
        const articleData = await getArticle(slug);
        setArticle(articleData);
        
        // Set tags for the right sidebar
        if (articleData && articleData.tags) {
          setTags(articleData.tags);
        }
      } catch (error) {
        setError('Failed to load article');
      }
    };

    fetchArticle();
  }, [slug, setTags]);

  if (error) {
    return <div className={styles['loading']}>Error: {error}</div>;
  }

  if (!article) {
    return <div className={styles['loading']}>Article not found</div>;
  }

  return <RenderArticle article={article} />;
} 