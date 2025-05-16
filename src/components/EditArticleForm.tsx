'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getArticleById, updateArticle } from '@/firebase/articles'
import { auth } from '@/firebase/clientApp'
import styles from '@/styles/ArticleForm.module.css'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Code from '@tiptap/extension-code'
import Image from '@tiptap/extension-image'
import { Link as TiptapLink } from '@tiptap/extension-link'
import KeyboardShortcutsHelp from './KeyboardShortcutsHelp'

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
  const [bodyCharCount, setBodyCharCount] = useState(0)
  const [originalSlug, setOriginalSlug] = useState('')
  const [showPasteOptions, setShowPasteOptions] = useState(false)
  const [clipboardContent, setClipboardContent] = useState<string>('')
  const pasteOptionsRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [isMac, setIsMac] = useState(false)
  const [randomTip, setRandomTip] = useState('')

  // Editor tips to show randomly
  const editorTips = [
    "Use Cmd+B (Mac) or Ctrl+B (Windows) for bold text",
    "Press Cmd+K (Mac) or Ctrl+K (Windows) to insert a link",
    "You can create headings with Cmd+Option+1-3 (Mac) or Ctrl+Alt+1-3 (Windows)",
    "Use bullet lists with Cmd+Shift+8 (Mac) or Ctrl+Shift+8 (Windows)",
    "Press Cmd+Shift+I (Mac) or Ctrl+Shift+I (Windows) to insert an image"
  ]

  // Initialize TipTap editor
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3]
        },
        // Explicitly disable these to avoid duplication with standalone extensions
        bold: false,
        italic: false,
        code: false,
      }),
      Bold,
      Italic,
      Code,
      Image,
      TiptapLink.configure({
        openOnClick: false,
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setBody(html);
      // Count approximate characters (excluding HTML tags)
      const textContent = editor.getText();
      setBodyCharCount(textContent.length);
    },
    // Enable keyboard shortcuts
    enableInputRules: true,
    enablePasteRules: true,
    // Fix SSR issue
    immediatelyRender: false,
  })

  // Clean up editor on unmount
  useEffect(() => {
    return () => {
      editor?.destroy();
    }
  }, [editor]);

  // Set the initial content and check OS platform after component mounts
  useEffect(() => {
    // Check if user is on macOS
    if (typeof navigator !== 'undefined') {
      setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
    }
    
    // Generate a random tip
    const tipIndex = Math.floor(Math.random() * editorTips.length);
    setRandomTip(editorTips[tipIndex]);
  }, []);

  // Load the article data when the component mounts
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true)
        const article = await getArticleById(articleId)
        
        // Set form fields with article data
        setTitle(article.title)
        setBody(article.body)
        
        // Set the editor content if the editor exists
        if (editor && !editor.isDestroyed) {
          editor.commands.setContent(article.body)
        }
        
        setTags(article.tags?.join(', ') || '')
        setCoverImage(article.coverImage || '')
        setStatus(article.status || 'published')
        setOriginalSlug(article.slug || '')
        setBodyCharCount(article.body.length)
      } catch (error) {
        console.error('Error loading article:', error)
        setError('Failed to load article data')
      } finally {
        setIsLoading(false)
      }
    }

    if (articleId && editor) {
      fetchArticle()
    }
  }, [articleId, editor])

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

  // Helper function to set link
  const setLink = useCallback(() => {
    const url = window.prompt('URL');
    if (url) {
      editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }, [editor]);

  // Helper function to add image
  const addImage = useCallback(() => {
    const url = window.prompt('Image URL');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  // Handle custom paste with formatting options
  const handlePaste = useCallback(async (e: React.ClipboardEvent) => {
    if (editor) {
      // Prevent default paste behavior
      e.preventDefault();
      
      // Get clipboard content in both HTML and plain text formats
      const htmlContent = e.clipboardData.getData('text/html');
      const textContent = e.clipboardData.getData('text/plain');
      
      // Store clipboard content - prefer HTML if available
      if (htmlContent && htmlContent.trim()) {
        setClipboardContent(htmlContent);
      } else {
        setClipboardContent(textContent);
      }
      
      // Show paste options
      setShowPasteOptions(true);
    }
  }, [editor]);

  // Paste with formatting
  const pasteWithFormatting = useCallback(() => {
    if (editor && clipboardContent) {
      // If HTML content is available, use it to preserve formatting
      if (clipboardContent.includes('<')) {
        // Insert HTML content
        editor.commands.insertContent(clipboardContent);
      } else {
        // If only plain text, use it directly
        editor.commands.insertContent(clipboardContent);
      }
      
      // Hide paste options after pasting
      setShowPasteOptions(false);
    }
  }, [editor, clipboardContent]);

  // Paste as plain text
  const pasteAsPlainText = useCallback(() => {
    if (editor && clipboardContent) {
      // Extract plain text from HTML or use plain text directly
      let plainText = clipboardContent;
      
      // If content is HTML, create a temporary element to extract text
      if (clipboardContent.startsWith('<')) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = clipboardContent;
        plainText = tempDiv.textContent || tempDiv.innerText || '';
      }
      
      // Insert as plain text
      editor.commands.insertContent(plainText);
      
      // Hide paste options after pasting
      setShowPasteOptions(false);
    }
  }, [editor, clipboardContent]);

  // Custom keyboard shortcut handler
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    // Check if user is on macOS (Command key) or other OS (Ctrl key)
    const mainModifier = isMac ? event.metaKey : event.ctrlKey;
    
    // Image insertion: Cmd+Shift+I (Mac) or Ctrl+Shift+I (Windows/Linux)
    if (mainModifier && event.shiftKey && event.key === 'I') {
      event.preventDefault();
      addImage();
    }
    
    // Paste shortcuts when clipboard has content
    if (showPasteOptions && clipboardContent) {
      // Paste with formatting: Cmd+Shift+V (Mac) or Ctrl+Shift+V (Windows/Linux)
      if (mainModifier && event.shiftKey && event.key === 'V') {
        event.preventDefault();
        pasteWithFormatting();
      }
      
      // Paste as plain text: Cmd+Shift+X (Mac) or Ctrl+Shift+X (Windows/Linux)
      if (mainModifier && event.shiftKey && event.key === 'X') {
        event.preventDefault();
        pasteAsPlainText();
      }
    }
  }, [addImage, showPasteOptions, clipboardContent, pasteWithFormatting, pasteAsPlainText, isMac]);

  // Close paste options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pasteOptionsRef.current && !pasteOptionsRef.current.contains(event.target as Node)) {
        setShowPasteOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return (
      <div className={styles.articleFormContainer}>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
          <span>Loading article data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.articleFormContainer}>
      <div className={styles.articleFormHeader}>
        <h1 className={styles.articleFormTitle}>Edit Your Story</h1>
        <p className={styles.articleFormSubtitle}>Refine your thoughts and make your article shine</p>
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
          <div className={styles.formHint}>A striking image can increase engagement with your article</div>
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
          <div className={styles.formHint}>
            {status === 'published' 
              ? 'Your article will be visible to all users' 
              : 'Only you can see your draft until you publish it'}
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="body" className={styles.formLabel}>Content</label>
          
          {/* Rich Text Editor Toolbar */}
          <div className={styles.editorToolbar}>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor?.isActive('heading', { level: 1 }) ? styles.activeButton : styles.toolbarButton}
              title={`Heading 1 (${isMac ? '⌘+Option+1' : 'Ctrl+Alt+1'})`}
            >
              H1
            </button>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor?.isActive('heading', { level: 2 }) ? styles.activeButton : styles.toolbarButton}
              title={`Heading 2 (${isMac ? '⌘+Option+2' : 'Ctrl+Alt+2'})`}
            >
              H2
            </button>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor?.isActive('heading', { level: 3 }) ? styles.activeButton : styles.toolbarButton}
              title={`Heading 3 (${isMac ? '⌘+Option+3' : 'Ctrl+Alt+3'})`}
            >
              H3
            </button>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={editor?.isActive('bold') ? styles.activeButton : styles.toolbarButton}
              title={`Bold (${isMac ? '⌘+B' : 'Ctrl+B'})`}
            >
              Bold
            </button>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={editor?.isActive('italic') ? styles.activeButton : styles.toolbarButton}
              title={`Italic (${isMac ? '⌘+I' : 'Ctrl+I'})`}
            >
              Italic
            </button>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleCode().run()}
              className={editor?.isActive('code') ? styles.activeButton : styles.toolbarButton}
              title={`Code (${isMac ? '⌘+E' : 'Ctrl+E'})`}
            >
              Code
            </button>
            <button 
              type="button" 
              onClick={setLink}
              className={editor?.isActive('link') ? styles.activeButton : styles.toolbarButton}
              title={`Link (${isMac ? '⌘+K' : 'Ctrl+K'})`}
            >
              Link
            </button>
            <button 
              type="button" 
              onClick={addImage}
              className={styles.toolbarButton}
              title={`Insert Image (${isMac ? '⌘+Shift+I' : 'Ctrl+Shift+I'})`}
            >
              Image
            </button>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={editor?.isActive('bulletList') ? styles.activeButton : styles.toolbarButton}
              title={`Bullet List (${isMac ? '⌘+Shift+8' : 'Ctrl+Shift+8'})`}
            >
              Bullet List
            </button>
            <button 
              type="button" 
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className={editor?.isActive('orderedList') ? styles.activeButton : styles.toolbarButton}
              title={`Numbered List (${isMac ? '⌘+Shift+7' : 'Ctrl+Shift+7'})`}
            >
              Numbered List
            </button>
            
            <div className={styles.toolbarSpacer}></div>
            
            <KeyboardShortcutsHelp />
          </div>
          
          {/* TipTap Editor */}
          <EditorContent 
            editor={editor} 
            className={styles.richTextEditor}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
          />
          
          {/* Paste Options Popup */}
          {showPasteOptions && (
            <div ref={pasteOptionsRef} className={styles.pasteOptionsContainer}>
              <div className={styles.pasteOptionsHeader}>Paste Options</div>
              <button 
                type="button" 
                className={styles.pasteOptionButton}
                onClick={pasteWithFormatting}
              >
                Keep Formatting ({isMac ? '⌘+Shift+V' : 'Ctrl+Shift+V'})
              </button>
              <button 
                type="button" 
                className={styles.pasteOptionButton}
                onClick={pasteAsPlainText}
              >
                Paste as Plain Text ({isMac ? '⌘+Shift+X' : 'Ctrl+Shift+X'})
              </button>
            </div>
          )}
          
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
          <Link href="/my-thoughts" className={styles.cancelButton}>
            Cancel
          </Link>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? 'Saving changes...' 
              : 'Save changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditArticleForm 