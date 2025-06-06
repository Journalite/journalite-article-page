'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { createArticle, updateArticle, getArticleById, Article } from '@/firebase/articles';
import { auth } from '@/firebase/clientApp';
import Editor from './Editor';
import InspirationWidget from './InspirationWidget';
import styles from '@/styles/ArticleComposer.module.css';
import { User } from 'firebase/auth';

interface ArticleComposerProps {
  articleId?: string; // Optional - if provided, edit mode, otherwise create mode
  onUpdateComplete?: (updatedArticle?: Article | null) => void; // Callback when update is complete
}

const ArticleComposer: React.FC<ArticleComposerProps> = ({ articleId, onUpdateComplete }) => {
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
  
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const tagInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);
  
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
        } catch (error) {
          console.error('Error loading article:', error);
          setError('Failed to load article');
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchArticle();
    } else if (!articleId) {
      // Editor will start with empty content - no need for document model
      setIsLoading(false);
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
  
  // Handle editor content changes with debouncing for better performance
  const handleEditorChange = useCallback((html: string, json: any) => {
    // Only update if content has actually changed
    if (html !== content) {
      setContent(html);
      
      // Reset saved status when content changes
      if (isSaved) {
        setIsSaved(false);
      }
    }
  }, [content, isSaved]);
  
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
      // Note: The new Editor component will handle its own focus
      // when the user starts typing in the editor area
    }
  };
  
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
        try {
          // Update existing article
          const updatedArticle = await updateArticle(articleId, articleData);
          console.log('Article updated successfully:', updatedArticle?.title);
          
          // Show saved indicator
          setIsSaved(true);
          
          // Wait a moment for Firebase to fully process the update
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Get the updated article with fresh data
          const updatedArticleData = await getArticleById(articleId);
          console.log('Fetched updated article data:', updatedArticleData?.title);
          
          // Call the callback if provided, pass the updated article data
          if (onUpdateComplete) {
            onUpdateComplete(updatedArticleData);
          }
          
          // THIS IS CRITICAL: Go directly to the article page by ID (not slug) to avoid issues
          // when title/slug changes
          setTimeout(() => {
            console.log('Applying changes immediately and redirecting to article ID page');
            // Direct navigation to our ID-based view route
            window.location.href = `/articles/${articleId}/view?updated=true&time=${Date.now()}`;
            
            // Add a fallback in case something goes wrong - but use ID-based routing
            setTimeout(() => {
              if (window.location.pathname.includes('/edit')) {
                console.log('Fallback navigation to ID-based article page');
                window.location.href = `/articles/${articleId}?updated=true&time=${Date.now()}`;
              }
            }, 2000);
          }, 1000);
        } catch (error) {
          console.error('Error updating article:', error);
          setError('Failed to update article. Please try again.');
          setIsSaved(false);
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

  // Handle inserting text from inspiration widget
  const handleInsertInspiration = (text: string) => {
    // Try to insert using the editor ref first
    if (editorRef.current && editorRef.current.insertText) {
      editorRef.current.insertText('\n\n' + text + '\n\n');
    } else {
      // Fallback: append to content with proper spacing
      setContent(prevContent => {
        const newContent = prevContent.trim() 
          ? prevContent + '\n\n<p>' + text + '</p>' 
          : '<p>' + text + '</p>';
        return newContent;
      });
    }
    
    // Focus the editor after insertion
    setTimeout(() => {
      if (editorRef.current && editorRef.current.focus) {
        editorRef.current.focus();
      }
    }, 100);
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
        <div className={styles.editorContainer}>
          <Editor
            ref={editorRef}
            articleId={articleId || uuidv4()}
            initialContent={content}
            onChange={handleEditorChange}
            placeholder="Tell your story..."
          />
        </div>
      </main>

      {/* Inspiration Widget */}
      <InspirationWidget onInsert={handleInsertInspiration} />
    </div>
  );
};

export default ArticleComposer; 