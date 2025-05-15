'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getArticleById, updateArticle } from '@/firebase/articles'
import { auth } from '@/firebase/clientApp'
import styles from '@/styles/home.module.css'

interface EditArticleFormProps {
  articleId: string
}

const EditArticleForm = ({ articleId }: EditArticleFormProps) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [status, setStatus] = useState<'published' | 'drafts'>('published')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  // Load the article data when the component mounts
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true)
        const article = await getArticleById(articleId)
        
        // Set form fields with article data
        setTitle(article.title)
        setBody(article.body)
        setTags(article.tags?.join(', ') || '')
        setCoverImage(article.coverImage || '')
        setStatus(article.status || 'published')
      } catch (error) {
        console.error('Error loading article:', error)
        setError('Failed to load article data')
      } finally {
        setIsLoading(false)
      }
    }

    if (articleId) {
      fetchArticle()
    }
  }, [articleId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title || !body) {
      setError('Title and content are required')
      return
    }
    
    if (!auth.currentUser) {
      setError('You must be logged in to edit an article')
      return
    }
    
    try {
      setIsSubmitting(true)
      setError('')
      
      // Convert tags string to array
      const tagsArray = tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '')
      
      // Create article update object
      const articleData: any = {
        title,
        body,
        tags: tagsArray,
        status
      }
      
      // Only add the coverImage field if it has a value
      if (coverImage.trim() !== '') {
        articleData.coverImage = coverImage
      }
      
      // Update the article with the cleaned data
      const updatedArticle = await updateArticle(articleId, articleData)
      
      // Redirect to the appropriate page based on the status
      if (status === 'published') {
        router.push(`/articles?slug=${updatedArticle.slug}`)
      } else {
        router.push('/my-thoughts')
      }
    } catch (error) {
      console.error('Error updating article:', error)
      setError('Failed to update article. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className={styles.articleFormContainer}>
        <div className={styles.loading}>Loading article data...</div>
      </div>
    )
  }

  return (
    <div className={styles.articleFormContainer}>
      <div className={styles.articleFormHeader}>
        <h1 className={styles.articleFormTitle}>Edit Article</h1>
        <p className={styles.articleFormSubtitle}>Update your thoughts</p>
      </div>
      
      {error && (
        <div className={styles.errorAlert}>
          <span className={styles.errorIcon}>⚠️</span>
          <span>{error}</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={styles.articleForm}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter a captivating title"
            className={styles.formControl}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="coverImage" className={styles.formLabel}>Cover Image URL <span className={styles.optionalLabel}>(optional)</span></label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className={styles.formControl}
          />
          {coverImage && (
            <div className={styles.imagePreview}>
              <img src={coverImage} alt="Cover preview" />
            </div>
          )}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="tags" className={styles.formLabel}>Tags <span className={styles.optionalLabel}>(comma separated)</span></label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="technology, news, science"
            className={styles.formControl}
          />
          {tags && (
            <div className={styles.tagsPreview}>
              {tags.split(',').map((tag, index) => tag.trim() && (
                <span key={index} className={styles.tag}>{tag.trim()}</span>
              ))}
            </div>
          )}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="status" className={styles.formLabel}>Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'published' | 'drafts')}
            className={styles.formControl}
          >
            <option value="published">Published</option>
            <option value="drafts">Save as Draft</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.formLabel}>Content</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder="Write your article content here..."
            className={styles.formTextarea}
            rows={15}
          />
        </div>
        
        <div className={styles.formActions}>
          <Link href="/my-thoughts" className={styles.cancelButton}>
            Cancel
          </Link>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? 'Saving...' 
              : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditArticleForm 