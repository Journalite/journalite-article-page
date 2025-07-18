'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { createArticle, updateArticle, getArticleById, Article } from '@/firebase/articles';
import { auth } from '@/firebase/clientApp';
import { enableReflectionRoom, updateReflectionTopic } from '@/services/reflectionRoomService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import Editor from './Editor';
import InspirationWidget from './InspirationWidget';
import styles from '@/styles/home.module.css';
import { User } from 'firebase/auth';

interface ArticleComposerProps {
  articleId?: string; // Optional - if provided, edit mode, otherwise create mode
  onUpdateComplete?: (updatedArticle?: Article | null) => void; // Callback when update is complete
  backToArticleAction?: () => void; // Action to go back to article view
  editingTitle?: string; // Title for editing mode display
}

const ArticleComposer: React.FC<ArticleComposerProps> = ({ articleId, onUpdateComplete, backToArticleAction, editingTitle }) => {
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
  const [hasReflectionRoom, setHasReflectionRoom] = useState(false);
  const [reflectionTopic, setReflectionTopic] = useState('');
  const [originalReflectionTopic, setOriginalReflectionTopic] = useState<string>('');
  
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const coverImageRef = useRef<HTMLInputElement>(null);
  const tagInputRef = useRef<HTMLInputElement>(null);
  const reflectionTopicRef = useRef<HTMLInputElement>(null);
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
  
  // Track topic changes and update reflection room when needed
  useEffect(() => {
    const handleTopicChange = async () => {
      // Only handle topic changes for existing articles with reflection rooms
      if (!articleId || !hasReflectionRoom || !user || !reflectionTopic.trim()) return;
      
      // Skip if it's the initial load (original topic is being set)
      if (!originalReflectionTopic) return;
      
      // Only update if the topic actually changed
      if (reflectionTopic.trim() !== originalReflectionTopic.trim()) {
        try {
          await updateReflectionTopic(articleId, reflectionTopic.trim());
          setOriginalReflectionTopic(reflectionTopic.trim());
          console.log('Reflection room topic updated and chat cleared');
        } catch (error) {
          console.error('Error updating reflection topic:', error);
          // Revert to original topic on error
          setReflectionTopic(originalReflectionTopic);
        }
      }
    };

    // Debounce the topic change handler to avoid too many calls
    const timeoutId = setTimeout(handleTopicChange, 1000);
    return () => clearTimeout(timeoutId);
  }, [reflectionTopic, articleId, hasReflectionRoom, user, originalReflectionTopic]);
  
  // Load article data if in edit mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('ArticleComposer useEffect - articleId:', articleId, 'user:', user ? '[USER_LOGGED_IN]' : 'undefined');
    }
    if (articleId && user) {
      const fetchArticle = async () => {
        try {
          if (process.env.NODE_ENV === 'development') {
            console.log('Fetching article for editing, ID:', articleId);
          }
          setIsLoading(true);
          const articleDoc = await getDoc(doc(db, 'articles', articleId));
          
          if (!articleDoc.exists()) {
            setError('Article not found');
            return;
          }
          
          const article = { id: articleDoc.id, ...articleDoc.data() } as Article;
          
          // Check if user is the author
          if (article.authorId !== user.uid) {
            setError('You can only edit your own articles');
            return;
          }
          
          // Set article data
          setTitle(article.title);
          setContent(article.body || '');
          setTags(article.tags || []);
          setCoverImage(article.coverImage || '');
          setHasReflectionRoom(article.hasReflectionRoom || false);
          
          // Load reflection room topic if enabled
          if (article.hasReflectionRoom) {
            try {
              const metadataRef = doc(db, 'reflections', articleId, 'metadata', 'main');
              const metadataSnap = await getDoc(metadataRef);
              if (metadataSnap.exists()) {
                const metadata = metadataSnap.data();
                const topic = metadata.topic || '';
                setReflectionTopic(topic);
                setOriginalReflectionTopic(topic); // Track original topic
              }
            } catch (error) {
              console.error('Error loading reflection room topic:', error);
            }
          }
          
          if (process.env.NODE_ENV === 'development') {
            console.log('Article data loaded successfully for editing');
          }
        } catch (error) {
          console.error('Error loading article:', error);
          setError('Failed to load article');
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchArticle();
    } else if (!articleId) {
      if (process.env.NODE_ENV === 'development') {
        console.log('No articleId, starting with empty content');
      }
      // Editor will start with empty content - no need for document model
      setIsLoading(false);
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.log('User not logged in, waiting...');
      }
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
    // Use functional update to avoid dependency on current content
    setContent(prevContent => {
      // Only update if content has actually changed
      if (html !== prevContent) {
        // Reset saved status when content changes
        if (isSaved) {
          setIsSaved(false);
        }
        return html;
      }
      return prevContent;
    });
  }, [isSaved]);
  
  // Handle tag input
  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value);
  };
  
  // Handle tag input keydown
  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      // If there's a tag to add, add it first
      if (currentTag.trim()) {
        addTag();
      } else {
        // Move to reflection topic if visible, otherwise to editor
        if (reflectionTopicRef.current && hasReflectionRoom && title.length > 5) {
          reflectionTopicRef.current.focus();
        } else if (editorRef.current && editorRef.current.focus) {
          editorRef.current.focus();
        }
      }
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
  
  // Handle focus moving from title to next field
  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Move to cover image if visible, otherwise to tags, then reflection topic, then editor
      if (coverImageRef.current && (coverImage || title.length > 10)) {
        coverImageRef.current.focus();
      } else if (tagInputRef.current && (tags.length > 0 || title.length > 5)) {
        tagInputRef.current.focus();
      } else if (reflectionTopicRef.current && hasReflectionRoom && title.length > 5) {
        reflectionTopicRef.current.focus();
      } else if (editorRef.current && editorRef.current.focus) {
        editorRef.current.focus();
      }
    }
  };

  // Handle cover image field navigation
  const handleCoverImageKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Move to tags if visible, otherwise to reflection topic, then editor
      if (tagInputRef.current && (tags.length > 0 || title.length > 5)) {
        tagInputRef.current.focus();
      } else if (reflectionTopicRef.current && hasReflectionRoom && title.length > 5) {
        reflectionTopicRef.current.focus();
      } else if (editorRef.current && editorRef.current.focus) {
        editorRef.current.focus();
      }
    }
  };

  // Handle reflection topic field navigation
  const handleReflectionTopicKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Move to editor
      if (editorRef.current && editorRef.current.focus) {
        editorRef.current.focus();
      }
    }
  };
  
  // Save article function
  const saveArticle = async (status: 'drafts' | 'published' = 'drafts') => {
    if (!user) {
      setError('You must be logged in to save articles');
      return;
    }

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      setError('');
      setIsSaving(true);

      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      
      const articleData = {
        title: title.trim(),
        body: content,
        tags,
        coverImage,
        status,
        authorId: user.uid,
        authorName: user.displayName || user.email || 'Anonymous',
        slug,
        hasReflectionRoom,
      };

      if (articleId) {
        // Update existing article
        try {
          if (process.env.NODE_ENV === 'development') {
            console.log('Updating article with ID:', articleId);
          }
          const updatedArticleData = await updateArticle(articleId, articleData);
          if (process.env.NODE_ENV === 'development') {
            console.log('Article updated successfully');
          }
          
          // Handle reflection room setup if enabled
          if (hasReflectionRoom && reflectionTopic.trim()) {
            try {
              await enableReflectionRoom(articleId, reflectionTopic.trim());
              if (process.env.NODE_ENV === 'development') {
                console.log('Reflection room enabled successfully');
              }
            } catch (error) {
              console.error('Error setting up reflection room:', error);
              // Don't fail the whole save for this
            }
          }
          
          setIsSaved(true);
          
          if (onUpdateComplete) {
            if (process.env.NODE_ENV === 'development') {
              console.log('Calling onUpdateComplete callback instead of navigating');
            }
            onUpdateComplete(updatedArticleData);
          } else {
            // Only navigate if no callback is provided (standalone editor usage)
            if (process.env.NODE_ENV === 'development') {
              console.log('No callback provided, navigating to article page with updated slug');
            }
            setTimeout(() => {
              // Use the updated slug from the returned article data
              const updatedSlug = updatedArticleData?.slug || slug;
              router.push(`/articles/${updatedSlug}`);
            }, 1000);
          }
        } catch (error) {
          console.error('Error updating article:', error);
          setError('Failed to update article. Please try again.');
          setIsSaved(false);
        }
      } else {
        // Create new article
        const newArticle = await createArticle(articleData);
        
        // Handle reflection room setup if enabled
        if (hasReflectionRoom && reflectionTopic.trim() && newArticle?.id) {
          try {
            await enableReflectionRoom(newArticle.id, reflectionTopic.trim());
            if (process.env.NODE_ENV === 'development') {
              console.log('Reflection room enabled for new article');
            }
          } catch (error) {
            console.error('Error setting up reflection room for new article:', error);
            // Don't fail the whole save for this
          }
        }
        
        if (status === 'published') {
          // Redirect to the new article page using slug
          router.push(`/articles/${slug}`);
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
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
        backgroundAttachment: 'fixed'
      }}>
        <div className={styles['glass-loading']}>
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-stone-600 text-lg">Loading your article...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`${styles['glass-container']} min-h-screen w-full`} style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #f7fafc 20%, #fef7ff 40%, #f0fdfa 60%, #fff7ed 80%, #f3f4f6 100%)',
      backgroundAttachment: 'fixed',
      position: 'relative',
      borderRadius: '0px',
      border: 'none'
    }}>
      {/* Glass highlight for entire page */}
      <div className={styles['glass-highlight']} />

      {/* Floating Header - Mobile Responsive */}
      <header className={`${styles['glass-container']} fixed top-2 left-2 right-2 md:top-6 md:left-6 md:right-6 z-50 max-w-6xl mx-auto`} style={{
        backdropFilter: 'blur(20px) saturate(180%)',
      }}>
        <div className={styles['glass-highlight']} />
        
        <div className={`${styles['glass-content']} flex items-center justify-between p-3 md:p-4`}>
          <div className="flex items-center gap-2 md:gap-4">
            {backToArticleAction ? (
              <button
                onClick={backToArticleAction}
                className={`${styles['glass-button']} flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 text-xs md:text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="md:w-4 md:h-4">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z" />
                </svg>
                <span className="hidden sm:inline">Back to Article</span>
                <span className="sm:hidden">Back</span>
              </button>
            ) : (
                              <div className="text-lg md:text-xl font-bold text-stone-800 font-serif">Oriteria</div>
            )}
            
            <div className="text-stone-500 text-xs md:text-sm hidden sm:block">
              {articleId ? (editingTitle ? `Editing: ${editingTitle}` : 'Editing') : 'Writing'}
            </div>
            
            {isSaved && (
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                Saved
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <button
              className={`${styles['glass-button']} px-2 md:px-4 py-2 text-xs md:text-sm font-semibold disabled:opacity-50 min-h-[44px]`}
              onClick={handleSaveDraft}
              disabled={isSaving || isPublishing}
            >
              <span className="hidden sm:inline">{isSaving ? 'Saving...' : 'Save Draft'}</span>
              <span className="sm:hidden">{isSaving ? 'Saving...' : 'Save'}</span>
            </button>
            
            <button
              className={`${styles['glass-button']} ${styles['glass-button-primary']} px-2 md:px-4 py-2 text-xs md:text-sm font-semibold disabled:opacity-50 min-h-[44px]`}
              onClick={handlePublish}
              disabled={isSaving || isPublishing || !title.trim() || !content.trim()}
            >
              {isPublishing ? 'Publishing...' : (articleId ? 'Update' : 'Publish')}
            </button>
          </div>
        </div>
      </header>
      
      {/* Glass content wrapper for seamless editor with Medium-style layout - Mobile Responsive */}
      <div className={`${styles['glass-content']} pt-24 md:pt-32 pb-32 md:pb-16 min-h-screen w-full max-w-4xl mx-auto px-4 md:px-16 lg:px-16`} style={{
                  paddingTop: typeof window !== 'undefined' && window.innerWidth <= 768 ? '40px' : undefined // Reduced since title has its own margin
      }}>
        {/* Title - Mobile Responsive with Toolbar Clearance */}
        <textarea
          ref={titleRef}
          value={title}
          onChange={handleTitleChange}
          onKeyDown={handleTitleKeyDown}
          placeholder="Title"
          rows={1}
          className="w-full bg-transparent border-none outline-none resize-none overflow-hidden text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 placeholder-stone-400 font-serif leading-tight mb-6 md:mb-8 focus:outline-none mobile-title-spacing"
          style={{
            minHeight: '60px',
            fontSize: typeof window !== 'undefined' && window.innerWidth <= 480 ? '28px' : 
                     typeof window !== 'undefined' && window.innerWidth <= 768 ? '32px' : undefined,
            lineHeight: typeof window !== 'undefined' && window.innerWidth <= 768 ? '1.2' : undefined,
            // Add top margin on mobile to clear floating toolbar - extra space for single long lines
            marginTop: typeof window !== 'undefined' && window.innerWidth <= 768 ? '120px' : '0px',
            zIndex: typeof window !== 'undefined' && window.innerWidth <= 768 ? '1' : 'auto'
          }}
        />

        {/* Cover Image - Mobile Responsive */}
        {(coverImage || title.length > 10) && (
          <div className="mb-6 md:mb-8">
            {!coverImage && (
              <input
                ref={coverImageRef}
                type="text"
                value={coverImage}
                onChange={handleCoverImageChange}
                onKeyDown={handleCoverImageKeyDown}
                placeholder="Add a cover image URL..."
                className="w-full bg-transparent border-none outline-none text-stone-600 placeholder-stone-400 py-2 border-b border-stone-200 focus:border-stone-400 transition-colors mobile-optimized-input"
                style={{ fontSize: '16px' }} // Prevent zoom on iOS
              />
            )}
            {coverImage && (
              <div className="relative group">
                <img 
                  src={coverImage} 
                  alt="Cover" 
                  className="w-full h-48 md:h-64 object-cover rounded-xl md:rounded-2xl mb-3 md:mb-4"
                />
                <input
                  ref={coverImageRef}
                  type="text"
                  value={coverImage}
                  onChange={handleCoverImageChange}
                  onKeyDown={handleCoverImageKeyDown}
                  placeholder="Cover image URL..."
                  className="w-full bg-white/70 backdrop-blur border border-stone-200 outline-none text-stone-600 placeholder-stone-400 py-2 px-3 rounded-md focus:border-stone-400 transition-colors mobile-optimized-input"
                  style={{ fontSize: '16px' }} // Prevent zoom on iOS
                />
              </div>
            )}
          </div>
        )}

        {/* Tags - Mobile Responsive */}
        {(tags.length > 0 || title.length > 5) && (
          <div className="mb-6 md:mb-8 flex flex-wrap gap-2 items-center">
            {tags.map(tag => (
              <div key={tag} className="px-3 py-1.5 md:px-2.5 md:py-0.5 bg-blue-100/50 backdrop-blur text-blue-700 rounded-full text-sm font-medium flex items-center gap-1.5 min-h-[44px] md:min-h-auto">
                {tag}
                <button 
                  className="text-blue-600 hover:text-blue-800 font-bold text-lg md:text-base leading-none w-6 h-6 md:w-auto md:h-auto flex items-center justify-center"
                  onClick={() => removeTag(tag)}
                  aria-label={`Remove ${tag} tag`}
                >
                  ×
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
                placeholder={tags.length === 0 ? "Add tags..." : "Add tag..."}
                className="bg-transparent border-none outline-none text-stone-600 placeholder-stone-400 min-w-24 py-2 md:py-1 mobile-optimized-input"
                style={{ fontSize: '16px' }} // Prevent zoom on iOS
              />
            )}
          </div>
        )}

        {/* Reflection Room Settings - Mobile Responsive */}
        {title.length > 5 && (
          <div className="mb-6 md:mb-8 p-3 md:p-4 bg-white/50 backdrop-blur border border-stone-200/50 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="hasReflectionRoom"
                  checked={hasReflectionRoom}
                  onChange={(e) => {
                    setHasReflectionRoom(e.target.checked);
                    if (!e.target.checked) {
                      setReflectionTopic('');
                    }
                  }}
                  className="w-5 h-5 md:w-4 md:h-4 text-blue-600 bg-white border-stone-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="hasReflectionRoom" className="text-sm font-medium text-stone-700 cursor-pointer">
                  Enable Reflection Room
                </label>
              </div>
              <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
                💭 Let readers discuss
              </span>
            </div>
            
            {hasReflectionRoom && (
              <div className="mt-3">
                <label className="block text-xs font-medium text-stone-600 mb-2">
                  Discussion Topic
                  {articleId && originalReflectionTopic && (
                    <span className="ml-2 text-orange-600 font-normal block sm:inline">
                      (⚠️ Changing this will clear all chat messages)
                    </span>
                  )}
                </label>
                <input
                  ref={reflectionTopicRef}
                  type="text"
                  value={reflectionTopic}
                  onChange={(e) => setReflectionTopic(e.target.value)}
                  onKeyDown={handleReflectionTopicKeyDown}
                  placeholder="What should readers discuss? (e.g., 'Share your thoughts on the main theme')"
                  maxLength={200}
                  className="w-full bg-white/70 backdrop-blur border border-stone-200 outline-none text-stone-700 placeholder-stone-400 py-3 md:py-2 px-3 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm mobile-optimized-input"
                  style={{ fontSize: '16px' }} // Prevent zoom on iOS
                />
                <div className="text-xs text-stone-500 mt-1">
                  {reflectionTopic.length}/200 characters
                </div>
              </div>
            )}
            
            <p className="text-xs text-stone-500 mt-2">
              Reflection rooms create a real-time chat sidebar where authenticated readers can discuss your article.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50/80 border border-red-200 rounded-xl text-red-700 text-sm">
            {error}
          </div>
        )}
        
        {/* Article Editor - completely seamless, full width */}
        <div className="min-h-[500px] w-full" style={{
          background: 'transparent'
        }}>
          <Editor
            ref={editorRef}
            {...({
              articleId: articleId || uuidv4(),
              initialContent: content,
              onChange: handleEditorChange,
              placeholder: "Write your story...",
              className: "seamless-editor"
            } as any)}
          />
        </div>
      </div>

      {/* Inspiration Widget */}
      <InspirationWidget onInsert={handleInsertInspiration} />
    </div>
  );
};

export default ArticleComposer; 