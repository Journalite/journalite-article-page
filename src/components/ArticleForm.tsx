'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createArticle } from '@/firebase/articles'
import { auth } from '@/firebase/clientApp'
import styles from '@/styles/ArticleForm.module.css'

const ArticleForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [status, setStatus] = useState<'published' | 'drafts'>('published')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [bodyCharCount, setBodyCharCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Update character count when body changes
    setBodyCharCount(body.length);
  }, [body]);

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

  // Writing tips
  const writingTips = [
    "Use a clear, compelling title that captures interest",
    "Break your content into smaller paragraphs for readability",
    "Add relevant tags to help readers discover your article",
    "Consider adding a cover image to make your article stand out"
  ];

  // Get a random tip to display
  const randomTip = writingTips[Math.floor(Math.random() * writingTips.length)];

  return (
    <div className={styles.articleFormContainer}>
      <div className={styles.articleFormHeader}>
        <h1 className={styles.articleFormTitle}>Create Your Story</h1>
        <p className={styles.articleFormSubtitle}>Share your thoughts, ideas, and insights with the world</p>
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
            placeholder="Enter a captivating title for your article..."
            className={styles.formControl}
            maxLength={100}
          />
          <div className={styles.formHint}>A good title is clear, specific, and engaging</div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="coverImage" className={styles.formLabel}>
            Cover Image URL <span className={styles.optionalLabel}>optional</span>
          </label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className={styles.formControl}
          />
          <div className={styles.formHint}>Add a cover image to make your article visually appealing</div>
          {coverImage && (
            <div className={styles.imagePreview}>
              <img src={coverImage} alt="Cover preview" />
            </div>
          )}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="tags" className={styles.formLabel}>
            Tags <span className={styles.optionalLabel}>comma separated</span>
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="technology, news, science, learning"
            className={styles.formControl}
          />
          <div className={styles.formHint}>Tags help readers discover your content</div>
          {tags && (
            <div className={styles.tagsPreview}>
              {tags.split(',').map((tag, index) => tag.trim() && (
                <span key={index} className={styles.tag}>{tag.trim()}</span>
              ))}
            </div>
          )}
        </div>
        
        <div className={`${styles.formGroup} ${styles.statusDropdown}`}>
          <label htmlFor="status" className={styles.formLabel}>Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'published' | 'drafts')}
            className={styles.formControl}
          >
            <option value="published">Published (visible to everyone)</option>
            <option value="drafts">Save as Draft (only visible to you)</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.formLabel}>Content</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            placeholder="Write your article content here. Provide valuable insights, share your experience, or tell a compelling story..."
            className={styles.formTextarea}
            rows={15}
          />
          <div className={styles.characterCount}>
            <span className={bodyCharCount > 3000 ? styles.characterWarning : ''}>
              {bodyCharCount} characters
            </span>
          </div>
          <div className={styles.formHint}>
            <span>✨ Tip: {randomTip}</span>
          </div>
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