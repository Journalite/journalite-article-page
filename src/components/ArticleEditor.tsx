'use client'

import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import editorEventHandler from '@/services/EditorEventHandler';
import documentMapper from '@/services/DocumentMapper';
import { DocumentModel, Paragraph, TextRange } from '@/types/DocumentModel';
import styles from '@/styles/ArticleEditor.module.css';

interface ArticleEditorProps {
  articleId: string;
  initialHtml?: string;
  onChange?: (html: string, model: DocumentModel) => void;
}

/**
 * ArticleEditor
 * 
 * A Medium-like editor built on our custom document model
 */
const ArticleEditor: React.FC<ArticleEditorProps> = ({ 
  articleId, 
  initialHtml = '', 
  onChange 
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [documentModel, setDocumentModel] = useState<DocumentModel>({
    id: articleId,
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
  });

  // Initialize editor when component mounts
  useEffect(() => {
    if (!editorRef.current || isInitialized) return;

    // Create a proper document model from the initial HTML
    if (initialHtml && initialHtml.trim()) {
      try {
        // Remove any "Untitled Article" or placeholder text
        const cleanHtml = initialHtml
          .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
          .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
        
        // Create temp container to parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cleanHtml;
        
        // Extract content elements
        const elements = Array.from(tempDiv.children);
        
        // Build paragraphs from HTML elements
        const paragraphs = elements.map(element => {
          const tagType = element.tagName.toLowerCase();
          // Default to paragraph type
          let type: Paragraph['type'] = 'paragraph';
          
          // Determine paragraph type based on HTML tag
          if (tagType === 'h1' || tagType === 'h2' || tagType === 'h3') {
            type = 'heading';
          } else if (tagType === 'blockquote') {
            type = 'blockquote';
          } else if (tagType === 'ul') {
            type = 'bulletList';
          } else if (tagType === 'ol') {
            type = 'orderedList';
          } else if (tagType === 'li') {
            type = 'listItem';
          } else if (tagType === 'img') {
            type = 'image';
          }
          
          // Extract text content
          const text = element.textContent || '';
          
          // Extract marks (bold, italic, etc.)
          const marks: TextRange[] = [];
          
          // Look for bold text
          if (element.querySelector('strong, b')) {
            marks.push({ type: 'bold', from: 0, to: text.length });
          }
          
          // Look for italic text
          if (element.querySelector('em, i')) {
            marks.push({ type: 'italic', from: 0, to: text.length });
          }

          // For headings, add level property
          const paragraph: Paragraph = {
            id: uuidv4(),
            type,
            text,
            marks
          };

          if (type === 'heading') {
            if (tagType === 'h1') paragraph.level = 1;
            else if (tagType === 'h2') paragraph.level = 2;
            else if (tagType === 'h3') paragraph.level = 3;
          }

          // For images, add src property
          if (type === 'image') {
            const src = element.getAttribute('src') || '';
            paragraph.src = src;
          }
          
          return paragraph;
        });
        
        // If no paragraphs were extracted, create a default one
        if (paragraphs.length === 0) {
          paragraphs.push({
            id: uuidv4(),
            type: 'paragraph',
            text: '',
            marks: []
          });
        }
        
        // Create updated model with content from HTML
        const initialModel: DocumentModel = {
          id: articleId,
          title: '', // This will be handled by the parent component
          sections: [
            {
              id: uuidv4(),
              type: 'section',
              paragraphs: paragraphs
            }
          ]
        };
        
        setDocumentModel(initialModel);
      } catch (error) {
        console.error('Error parsing initial HTML:', error);
      }
    }

    // Initialize editor and populate with content
    const initializeEditor = () => {
      if (editorRef.current) {
        // Clear any existing content
        editorRef.current.innerHTML = '';
        
        // First, initialize the event handler
        editorEventHandler.initialize(
          documentModel,
          editorRef.current,
          handleModelChange
        );
        
        // Then, set the content from initial HTML if we have it
        if (initialHtml && initialHtml.trim()) {
          // Directly insert HTML, but remove any "Untitled Article" or placeholder text
          const cleanHtml = initialHtml
            .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
            .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
          
          editorRef.current.innerHTML = cleanHtml;
          
          // Ensure the cursor is at the end
          const range = document.createRange();
          const sel = window.getSelection();
          if (editorRef.current.childNodes.length > 0) {
            const lastNode = editorRef.current.lastChild;
            if (lastNode) {
              range.setStartAfter(lastNode);
              range.collapse(true);
              if (sel) {
                sel.removeAllRanges();
                sel.addRange(range);
              }
            }
          }
        } else {
          // If no initial HTML, add an empty paragraph
          editorRef.current.innerHTML = '<p><br></p>';
        }
        
        setIsInitialized(true);
      }
    };
    
    // Short delay to ensure the DOM is ready
    setTimeout(initializeEditor, 50);
    
    // Cleanup on unmount
    return () => {
      editorEventHandler.destroy();
    };
  }, [articleId, initialHtml]);

  // Handle content editable focus
  const handleEditorFocus = () => {
    if (editorRef.current && editorRef.current.innerHTML === '') {
      // If editor is empty, add a paragraph block for the user to start typing
      editorRef.current.innerHTML = '<p><br></p>';
      
      // Set cursor position at the beginning of paragraph
      const range = document.createRange();
      const sel = window.getSelection();
      const paragraph = editorRef.current.querySelector('p');
      
      if (paragraph) {
        range.setStart(paragraph, 0);
        range.collapse(true);
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    }
  };

  // Handle document model changes
  const handleModelChange = (updatedModel: DocumentModel) => {
    setDocumentModel(updatedModel);
    
    // Convert model to HTML for external onChange handler
    if (onChange && editorRef.current) {
      // Get the actual HTML content from the editor
      const html = editorRef.current.innerHTML;
      
      // Remove any "Content is loaded from HTML" message or unwanted elements
      const cleanHtml = html
        .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
        .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
      
      onChange(cleanHtml, updatedModel);
    }
  };

  // Handle keydown events in the editor
  const handleEditorKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle Enter key to create new paragraphs
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      document.execCommand('insertParagraph', false);
      
      // Make sure we have a clean paragraph, not a div
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const parentElement = range.startContainer.parentElement;
        
        // If we're in a div, convert it to a p
        if (parentElement && parentElement.tagName.toLowerCase() === 'div') {
          document.execCommand('formatBlock', false, 'p');
        }
      }

      // Notify model of changes
      if (editorRef.current && onChange) {
        onChange(editorRef.current.innerHTML, documentModel);
      }

      return false;
    }
  };

  // Handle paste events
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    // Check if the paste was initiated with "Paste and Match Style" option
    const matchStyle = e.nativeEvent.clipboardData?.getData('text/html-editor-match-style');
    
    if (matchStyle === 'true' || e.nativeEvent.clipboardData?.types.includes('text/html-editor-match-style')) {
      // Paste as plain text (match editor style)
      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertText', false, text);
    } else {
      // For regular paste (Cmd+V or Ctrl+V), let the browser handle it normally
      // This will preserve formatting from the source
    }
    
    // Notify model of changes after paste
    if (editorRef.current && onChange) {
      setTimeout(() => {
        if (editorRef.current) {
          onChange(editorRef.current.innerHTML, documentModel);
        }
      }, 0);
    }
  };

  // Toolbar actions
  const handleBold = () => {
    document.execCommand('bold', false);
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const handleItalic = () => {
    document.execCommand('italic', false);
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const handleHeading = (level: 1 | 2 | 3) => {
    document.execCommand('formatBlock', false, `h${level}`);
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  return (
    <div className={styles.articleEditor}>
      {/* Basic toolbar */}
      <div className={styles.toolbar}>
        <button 
          className={styles.toolbarButton} 
          onClick={handleBold}
          title="Bold (Ctrl+B)"
        >
          B
        </button>
        <button 
          className={styles.toolbarButton} 
          onClick={handleItalic}
          title="Italic (Ctrl+I)"
        >
          I
        </button>
        <button 
          className={styles.toolbarButton} 
          onClick={() => handleHeading(1)}
          title="Heading 1"
        >
          H1
        </button>
        <button 
          className={styles.toolbarButton} 
          onClick={() => handleHeading(2)}
          title="Heading 2"
        >
          H2
        </button>
        <button 
          className={styles.toolbarButton} 
          onClick={() => handleHeading(3)}
          title="Heading 3"
        >
          H3
        </button>
      </div>
      
      {/* Editor content area */}
      <div 
        ref={editorRef}
        className={styles.editorContent}
        contentEditable
        aria-label="Article editor"
        suppressContentEditableWarning
        onFocus={handleEditorFocus}
        onKeyDown={handleEditorKeyDown}
        onPaste={handlePaste}
      />
    </div>
  );
};

export default ArticleEditor; 