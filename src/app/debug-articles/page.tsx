'use client'

import { useState, useEffect } from 'react'
import { getArticles } from '@/firebase/articles'

export default function DebugArticles() {
  const [articles, setArticles] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = await getArticles({ limit: 10, includeDrafts: true })
        setArticles(articlesData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching articles:', error)
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (isLoading) {
    return <div style={{ padding: '2rem' }}>Loading articles...</div>
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>Debug: Articles in Database</h1>
      <p>Total articles: {articles.length}</p>
      
      <div style={{ marginTop: '2rem' }}>
        {articles.map((article, index) => (
          <div key={article.id} style={{ 
            border: '1px solid #ccc', 
            padding: '1rem', 
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9'
          }}>
            <h3>Article #{index + 1}</h3>
            <p><strong>ID:</strong> {article.id}</p>
            <p><strong>Title:</strong> {article.title}</p>
            <p><strong>Slug:</strong> {article.slug || 'NO SLUG'}</p>
            <p><strong>Status:</strong> {article.status || 'NO STATUS'}</p>
            <p><strong>Author:</strong> {article.authorName}</p>
            <p><strong>Created:</strong> {article.createdAt?.toDate?.()?.toLocaleString() || 'Unknown'}</p>
            
            {/* Test links */}
            <div style={{ marginTop: '1rem' }}>
              <strong>Test URLs:</strong><br/>
              {article.slug && (
                <>
                  <a href={`/articles/${encodeURIComponent(article.slug)}`} target="_blank" rel="noopener noreferrer">
                    /articles/{article.slug}
                  </a><br/>
                </>
              )}
              <a href={`/articles?slug=${encodeURIComponent(article.slug || article.id)}`} target="_blank" rel="noopener noreferrer">
                /articles?slug={article.slug || article.id}
              </a><br/>
              <a href={`/articles/${article.id}`} target="_blank" rel="noopener noreferrer">
                /articles/{article.id} (old ID route)
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {articles.length === 0 && (
        <p>No articles found in database.</p>
      )}
    </div>
  )
} 