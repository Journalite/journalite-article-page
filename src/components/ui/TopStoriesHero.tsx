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
}

interface TopStoriesHeroProps {
  articles: Article[]
}

const TopStoriesHero: React.FC<TopStoriesHeroProps> = ({ articles }) => {
  const featuredArticle = articles[0]
  const secondaryArticles = articles.slice(1, 4)

  if (!featuredArticle) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="mb-6">
        <h2 className="headline-large text-gradient-warm mb-2">Top Stories</h2>
        <p className="body-medium text-gray-600 dark:text-gray-400 max-w-2xl">
          Welcome to the sample Apple News-style interface. Everything here sits above your desktop wallpaper, 
          blurred and tinted to create that modern "vibrancy" effect.
        </p>
        <p className="body-medium text-gray-600 dark:text-gray-400 mt-2">
          Add more stories, images, or articles here as you like. Scroll to see the glass effect persist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Article - Large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Link href={`/articles?slug=${encodeURIComponent(featuredArticle.slug)}`}>
            <div className="group relative overflow-hidden rounded-2xl aspect-[16/10] apple-card">
              {/* Background Image */}
              {featuredArticle.coverImageUrl && (
                <Image
                  src={featuredArticle.coverImageUrl}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                {/* Tags */}
                {featuredArticle.tags && featuredArticle.tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mb-3 flex flex-wrap gap-2"
                  >
                    {featuredArticle.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                )}
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="headline-hero text-white mb-3 leading-tight"
                >
                  {featuredArticle.title}
                </motion.h3>
                
                {featuredArticle.excerpt && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="body-large text-white/90 mb-4 max-w-2xl leading-relaxed"
                  >
                    {featuredArticle.excerpt}
                  </motion.p>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center text-white/80 text-sm"
                >
                  <span className="font-medium">{featuredArticle.authorName}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(featuredArticle.createdAt).toLocaleDateString()}</span>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary Articles - Grid */}
        <div className="space-y-4">
          {secondaryArticles.map((article, index) => (
            <motion.div
              key={article._id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
            >
              <Link href={`/articles?slug=${encodeURIComponent(article.slug)}`}>
                <div className="group apple-card p-4 hover:shadow-lg">
                  <div className="flex space-x-4">
                    {/* Image */}
                    {article.coverImageUrl && (
                      <div className="flex-shrink-0 w-20 h-20 relative overflow-hidden rounded-xl">
                        <Image
                          src={article.coverImageUrl}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="headline-medium mb-2 line-clamp-2 group-hover:text-accent-warm-start transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <span className="font-medium">{article.authorName}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default TopStoriesHero 