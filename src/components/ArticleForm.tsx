'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createArticle } from '@/firebase/articles'
import { auth } from '@/firebase/clientApp'
import styles from '@/styles/home.module.css'

const ArticleForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [status, setStatus] = useState<'published' | 'drafts'>('published')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title || !body) {
      setError('Title and content are required')
      return
    }
    
    if (!auth.currentUser) {
      setError('You must be logged in to create an article')
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
      
      // Create article in Firestore - create a base article object
      const articleData: any = {
        title,
        body,
        tags: tagsArray,
        status
      };
      
      // Only add the coverImage field if it has a value
      if (coverImage.trim() !== '') {
        articleData.coverImage = coverImage;
      }
      
      // Create the article with the cleaned data
      const article = await createArticle(articleData);
      
      // Redirect to the appropriate page based on the status
      if (status === 'published') {
        router.push(`/articles?slug=${article.slug}`)
      } else {
        router.push('/my-thoughts')
      }
    } catch (error) {
      console.error('Error creating article:', error)
      setError('Failed to create article. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.articleFormContainer}>
      <div className={styles.articleFormHeader}>
        <h1 className={styles.articleFormTitle}>Create New Article</h1>
        <p className={styles.articleFormSubtitle}>Share your thoughts with the world</p>
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
          <Link href="/" className={styles.cancelButton}>
            Cancel
          </Link>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (status === 'published' ? 'Publishing...' : 'Saving...') 
              : (status === 'published' ? 'Publish Article' : 'Save as Draft')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ArticleForm 