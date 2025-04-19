// pages/articles/[slug].tsx

// src/pages/articles/[slug].tsx
// src/pages/articles/[slug].tsx
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getArticle, Article } from '@/services/articleService'
import RenderArticle from '@/components/RenderArticle'

export default function ArticlePage() {
  const { slug } = useRouter().query as { slug?: string }

  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')

  useEffect(() => {
    if (!slug) return
    setLoading(true); setError('')

    getArticle(slug)
      .then(setArticle)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading)  return <div>Loading…</div>
  if (error)    return <div>Error: {error}</div>
  if (!article) return <div>No article found for “{slug}”</div>

  return (
    <div className="article-page">
      <RenderArticle article={article} />
    </div>
  )
}