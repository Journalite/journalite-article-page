'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { createArticle, updateArticle, getArticleById } from '@/firebase/articles';
import { auth } from '@/firebase/clientApp';
import { DocumentModel } from '@/types/DocumentModel';
import ArticleEditor from './ArticleEditor';
import styles from '@/styles/ArticleComposer.module.css';
import { User } from 'firebase/auth';

interface ArticleComposerProps {
  articleId?: string; // Optional - if provided, edit mode, otherwise create mode
}

const ArticleComposer: React.FC<ArticleComposerProps> = ({ articleId }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(!!articleId);
  const [user, setUser] = useState<User | null>(null);
  const [currentTag, setCurrentTag] = useState('');
  const [documentModel, setDocumentModel] = useState<DocumentModel | null>(null);
  
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const tagInputRef = useRef<HTMLInputElement>(null);
  
  // Auto-resize title textarea as content grows
  const autoResizeTitle = useCallback(() => {
    if (titleRef.current) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
      // Set focus to title if it's empty when component loads
      if (!title && titleRef.current) {
        titleRef.current.focus();
      }
    }
  }, [title]);
  
  // Set up authentication listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (!user) {
        // Redirect to login if not authenticated
        router.push('/login?redirect=compose');
      }
    });
    
    return () => unsubscribe();
  }, [router]);
  
  // Load article data if in edit mode
  useEffect(() => {
    if (articleId && user) {
      const fetchArticle = async () => {
        try {
          setIsLoading(true);
          const article = await getArticleById(articleId);
          
          if (!article) {
            setError('Article not found');
            router.push('/');
            return;
          }
          
          // Verify article ownership
          if (article.authorId !== user.uid) {
            setError('You can only edit your own articles');
            router.push('/');
            return;
          }
          
          // Set form data
          setTitle(article.title);
          
          // Process HTML to extract and clean the content
          const cleanContent = article.body.replace(/data-[\w-]+="[^"]*"/g, '');
          setContent(cleanContent);
          
          setTags(article.tags || []);
          setCoverImage(article.coverImage || '');
          
          // Initialize with empty document model - we'll let the editor parse the HTML
          const initialModel: DocumentModel = {
            id: articleId,
            title: article.title,
            sections: [
              {
                id: uuidv4(),
                type: 'section',
                paragraphs: []
              }
            ]
          };
          
          setDocumentModel(initialModel);
        } catch (error) {
          console.error('Error loading article:', error);
          setError('Failed to load article');
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchArticle();
    } else if (!articleId) {
      // Create a new document model for new articles
      const newModel: DocumentModel = {
        id: uuidv4(),
        title: '',
        sections: [
          {
            id: uuidv4(),
            type: 'section',
            paragraphs: [
              {
                id: uuidv4(),
                type: 'paragraph',
                text: '',
                marks: []
              }
            ]
          }
        ]
      };
      
      setDocumentModel(newModel);
    }
  }, [articleId, user, router]);
  
  // Auto-resize title when it changes
  useEffect(() => {
    autoResizeTitle();
  }, [title, autoResizeTitle]);
  
  // Auto-save draft periodically (every 30 seconds)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (user && title.trim() && content.trim() && !isSaving && !isPublishing) {
      timer = setTimeout(() => {
        saveArticle('drafts');
      }, 30000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [user, title, content, isSaving, isPublishing]);
  
  // Handle title changes
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  
  // Handle editor content changes
  const handleEditorChange = (html: string, model: DocumentModel) => {
    // Only update if content has actually changed
    if (html !== content) {
      setContent(html);
      setDocumentModel(model);
      
      // Reset saved status when content changes
      if (isSaved) {
        setIsSaved(false);
      }
    }
  };
  
  // Handle tag input
  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value);
  };
  
  // Handle tag input keydown
  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };
  
  // Add a tag
  const addTag = () => {
    const tag = currentTag.trim().toLowerCase();
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag]);
      setCurrentTag('');
    }
  };
  
  // Remove a tag
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  // Handle cover image input
  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoverImage(e.target.value);
  };
  
  // Handle focus moving from title to editor
  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // When user presses Enter in the title field, move focus to the editor
    if (e.key === 'Enter') {
      e.preventDefault();
      if (editorRef.current) {
        editorRef.current.focus();
      }
    }
  };

  // Reference to the editor element
  const editorRef = useRef<HTMLDivElement>(null);
  
  // Save article (draft or published)
  const saveArticle = async (status: 'drafts' | 'published' = 'drafts') => {
    if (!user) {
      setError('You must be logged in to save an article');
      return;
    }
    
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    if (!content.trim()) {
      setError('Content is required');
      return;
    }
    
    try {
      setIsSaving(true);
      setError('');
      
      // Clean HTML content to avoid any strange formatting
      const cleanContent = content.replace(/data-[\w-]+="[^"]*"/g, '');
      
      const articleData = {
        title: title.trim(),
        body: cleanContent,
        tags,
        coverImage: coverImage.trim(),
        status
      };
      
      console.log('Saving article data:', articleData);
      
      if (articleId) {
        // Update existing article
        const updatedArticle = await updateArticle(articleId, articleData);
        
        // If status is published and we're updating, redirect to the article page
        if (status === 'published') {
          setIsSaved(true);
          setTimeout(() => {
            // Using the actual article id from the article data to avoid any issues
            router.push(`/articles/${articleId}`);
          }, 1000);
        } else {
          // Just show saved indicator
          setIsSaved(true);
          setTimeout(() => setIsSaved(false), 3000);
        }
      } else {
        // Create new article
        const newArticle = await createArticle(articleData);
        if (status === 'published') {
          // Redirect to the new article page
          router.push(`/articles/${newArticle.id}`);
        } else {
          // Redirect to dashboard
          router.push(`/dashboard`);
        }
      }
      
    } catch (error) {
      console.error('Error saving article:', error);
      setError('Failed to save article. Please try again.');
    } finally {
      setIsSaving(false);
      setIsPublishing(false);
    }
  };
  
  // Handle publish button click
  const handlePublish = async () => {
    if (!content.trim()) {
      setError('Content is required');
      return;
    }
    
    setIsPublishing(true);
    await saveArticle('published');
  };
  
  // Handle save draft button click
  const handleSaveDraft = async () => {
    await saveArticle('drafts');
  };
  
  if (isLoading) {
    return (
      <div className={styles.composerLoading}>
        <div className={styles.loadingIndicator}></div>
        <p>Loading article...</p>
      </div>
    );
  }
  
  return (
    <div className={styles.articleComposer}>
      {/* Header with actions */}
      <header className={styles.composerHeader}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>Journalite</div>
        </div>
        
        <div className={styles.actionButtons}>
          {isSaved && (
            <span className={styles.savedIndicator}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Saved
            </span>
          )}
          
          <button
            className={styles.actionButton}
            onClick={handleSaveDraft}
            disabled={isSaving || isPublishing}
          >
            Save draft
          </button>
          
          <button
            className={styles.publishButton}
            onClick={handlePublish}
            disabled={isSaving || isPublishing || !title.trim() || !content.trim()}
          >
            {articleId ? 'Update' : 'Publish'}
          </button>
        </div>
      </header>
      
      {/* Main content area */}
      <main className={styles.composerContent}>
        {/* Title input */}
        <textarea
          ref={titleRef}
          className={styles.titleInput}
          value={title}
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyDown}
          placeholder="Title"
          rows={1}
        />
        
        {/* Cover image input */}
        <div className={styles.coverImageInput}>
          <input
            type="text"
            value={coverImage}
            onChange={handleCoverImageChange}
            placeholder="Add a cover image (enter image URL)"
            className={styles.imageUrlInput}
          />
          {coverImage && (
            <div className={styles.coverImagePreview}>
              <img src={coverImage} alt="Cover preview" />
            </div>
          )}
        </div>
        
        {/* Tag input */}
        <div className={styles.tagContainer}>
          {tags.map(tag => (
            <div key={tag} className={styles.tag}>
              {tag}
              <button 
                className={styles.removeTagButton} 
                onClick={() => removeTag(tag)}
                aria-label={`Remove ${tag} tag`}
              >
                &times;
              </button>
            </div>
          ))}
          
          {tags.length < 5 && (
            <input
              ref={tagInputRef}
              type="text"
              value={currentTag}
              onChange={handleTagInputChange}
              onKeyDown={handleTagInputKeyDown}
              onBlur={addTag}
              placeholder={tags.length === 0 ? "Add up to 5 tags..." : "Add another tag..."}
              className={styles.tagInput}
            />
          )}
        </div>
        
        {/* Error message */}
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        {/* Article editor */}
        {documentModel && (
          <div className={styles.editorContainer} ref={editorRef}>
            <ArticleEditor
              articleId={documentModel.id}
              initialHtml={content}
              onChange={handleEditorChange}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default ArticleComposer; 