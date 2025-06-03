'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Article {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImageUrl?: string | null;
  authorName?: string;
  createdAt: string;
  tags?: string[];
  viewCount?: number;
}

interface ArticleCardProps {
  article: Article;
  index?: number;
  variant?: 'default' | 'compact' | 'featured';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  index = 0, 
  variant = 'default' 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const getReadingTime = (excerpt?: string) => {
    if (!excerpt) return 1
    const words = excerpt.split(' ').length
    return Math.max(1, Math.ceil(words / 200))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  if (variant === 'compact') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href={`/articles?slug=${encodeURIComponent(article.slug)}`}>
          <div className="group apple-card p-4 hover:shadow-lg">
            <div className="flex space-x-3">
              {article.coverImageUrl && (
                <div className="flex-shrink-0 w-16 h-16 relative overflow-hidden rounded-lg">
                  <Image
                    src={article.coverImageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-accent-warm-start transition-colors mb-1">
                  {article.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{article.authorName}</span>
                  <span className="mx-1">•</span>
                  <span>{formatDate(article.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group"
    >
      <Link href={`/articles?slug=${encodeURIComponent(article.slug)}`}>
        <article className="apple-card overflow-hidden">
          {/* Image */}
          {article.coverImageUrl && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={article.coverImageUrl}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Tags overlay */}
              {article.tags && article.tags.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className="headline-medium mb-3 line-clamp-2 group-hover:text-accent-warm-start transition-colors">
              {article.title}
            </h3>
            
            {/* Excerpt */}
            {article.excerpt && (
              <p className="body-medium text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                {article.excerpt}
              </p>
            )}
            
            {/* Meta information */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Author avatar */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-cool rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {article.authorName?.charAt(0) || 'A'}
                    </span>
                  </div>
                </div>
                
                {/* Author and date */}
                <div className="flex flex-col min-w-0">
                  <span className="font-medium text-sm text-gray-900 dark:text-white truncate">
                    {article.authorName}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>{formatDate(article.createdAt)}</span>
                    <span className="mx-1">•</span>
                    <span>{getReadingTime(article.excerpt)} min read</span>
                  </div>
                </div>
              </div>
              
              {/* View count */}
              {article.viewCount && (
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{article.viewCount.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default ArticleCard 