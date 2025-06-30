import React, { useState, useEffect, useCallback, useMemo } from 'react';
import HighlightToolbar from './HighlightToolbar';
import { useHighlights } from '@/context/HighlightContext';
import { HighlightTag, generateHighlightShareUrl } from '@/services/highlightService';
// import { Highlight } from '@/services/highlightService'; // Unused type import
import ShareModal from './ShareModal';

interface ArticleHighlightsProps {
  articleId: string;
  children: React.ReactNode;
  articleTitle?: string;
  articleSlug?: string;
  // onShare?: (text: string) => void; // Optional share handler - currently unused
}

// Get context for a selection with improved handling that preserves formatting
const getSelectionContext = (selection: Selection): { prefix: string; suffix: string } => {
  const result = { prefix: '', suffix: '' };
  
  if (!selection || selection.rangeCount === 0) return result;
  
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();
  
  // Get the full text content of the container
  const container = range.commonAncestorContainer;
  const containerElement = container.nodeType === Node.TEXT_NODE ? container.parentElement : container;
  
  if (!containerElement) return result;
  
  // Get all text content from the container preserving original formatting
  const fullText = containerElement.textContent || '';
  
  // Find the position of our selected text in the full text (exact match first)
  let startIndex = fullText.indexOf(selectedText);
  
  // If exact match fails, try with normalized spaces as fallback
  if (startIndex === -1) {
    const normalizedSelectedText = selectedText.replace(/\s+/g, ' ').trim();
    const normalizedFullText = fullText.replace(/\s+/g, ' ');
    const normalizedStartIndex = normalizedFullText.indexOf(normalizedSelectedText);
    
    if (normalizedStartIndex !== -1) {
      // Map back to original text position - this is approximate
      startIndex = normalizedStartIndex;
    }
  }
  
  if (startIndex !== -1) {
    // Get context with word boundaries to avoid partial word issues
    const contextLength = 50;
    const prefixStart = Math.max(0, startIndex - contextLength);
    const suffixEnd = Math.min(fullText.length, startIndex + selectedText.length + contextLength);
    
    // Extract prefix and suffix preserving original formatting
    let prefix = fullText.substring(prefixStart, startIndex);
    let suffix = fullText.substring(startIndex + selectedText.length, suffixEnd);
    
    // Only trim word boundaries, not all whitespace
    prefix = prefix.replace(/^\S*\s/, ''); // Remove partial word at start
    suffix = suffix.replace(/\s\S*$/, ''); // Remove partial word at end
    
    result.prefix = prefix;
    result.suffix = suffix;
  }
  
  return result;
};

// Apply highlights to existing content in the DOM
const applyHighlightsToContent = (highlights: any[], articleContent: HTMLElement): void => {
  if (!highlights || !articleContent) return;
  
  // Check if highlights are already applied correctly
  const existingHighlights = articleContent.querySelectorAll('.article-highlight');
  const existingHighlightIds = Array.from(existingHighlights).map(el => el.getAttribute('data-highlight-id')).filter(Boolean);
  const newHighlightIds = highlights.map(h => h.id);
  
  // If the same highlights are already applied, don't re-apply
  if (existingHighlightIds.length === newHighlightIds.length && 
      existingHighlightIds.every(id => newHighlightIds.includes(id))) {
    return;
  }
  
  // First clear existing highlights to prevent duplicates
  existingHighlights.forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      // Replace the highlight with its text content
      const textNode = document.createTextNode(el.textContent || '');
      parent.replaceChild(textNode, el);
      // Normalize to merge adjacent text nodes
      parent.normalize();
    }
  });
  
  // Track highlights that couldn't be applied for cleanup
  const failedHighlights: string[] = [];
  
  // Then apply all highlights from the database
  highlights.forEach(highlight => {
    // Enhanced function to find text in the DOM with better formatting preservation
    const findTextInDOM = (text: string, prefix: string, suffix: string): Range | null => {
      
      // Strategy 1: Try exact text match first (preserves all formatting)
      const walker = document.createTreeWalker(
        articleContent,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      let node;
      while (node = walker.nextNode()) {
        const content = node.textContent || '';
        const index = content.indexOf(text);
        
        if (index !== -1) {
          const range = document.createRange();
          range.setStart(node, index);
          range.setEnd(node, index + text.length);
          return range;
        }
      }
      
      // Strategy 2: Try with relaxed whitespace matching for poetry/formatted text
      const walker2 = document.createTreeWalker(
        articleContent,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      // Create a more flexible pattern that accounts for different whitespace
      const createFlexiblePattern = (str: string): RegExp => {
        // Escape special regex characters but keep spaces flexible
        const escaped = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Replace any sequence of whitespace with flexible whitespace matcher
        const flexible = escaped.replace(/\s+/g, '\\s+');
        return new RegExp(flexible, 'i');
      };
      
      let node2;
      while (node2 = walker2.nextNode()) {
        const content = node2.textContent || '';
        const flexiblePattern = createFlexiblePattern(text);
        const match = content.match(flexiblePattern);
        
        if (match && match.index !== undefined) {
          const range = document.createRange();
          range.setStart(node2, match.index);
          range.setEnd(node2, match.index + match[0].length);
          return range;
        }
      }
      
      // Strategy 3: Try with context if above strategies fail
      if (prefix || suffix) {
        const walker3 = document.createTreeWalker(
          articleContent,
          NodeFilter.SHOW_TEXT,
          null
        );
        
        // Create context pattern with flexible whitespace
        const contextText = prefix + text + suffix;
        const contextPattern = createFlexiblePattern(contextText);
        
        let node3;
        while (node3 = walker3.nextNode()) {
          const content = node3.textContent || '';
          const match = content.match(contextPattern);
          
          if (match && match.index !== undefined) {
            // Find the actual text within the context match
            const fullMatch = match[0];
            const prefixPattern = createFlexiblePattern(prefix);
            const prefixMatch = fullMatch.match(prefixPattern);
            const prefixLength = prefixMatch ? prefixMatch[0].length : 0;
            
            const range = document.createRange();
            const textStart = match.index + prefixLength;
            const textPattern = createFlexiblePattern(text);
            const textInContext = fullMatch.substring(prefixLength);
            const textMatch = textInContext.match(textPattern);
            
            if (textMatch) {
              range.setStart(node3, textStart);
              range.setEnd(node3, textStart + textMatch[0].length);
              return range;
            }
          }
        }
      }
      
      // Strategy 4: Last resort - normalized search (original behavior as fallback)
      const walker4 = document.createTreeWalker(
        articleContent,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      const contextPattern = (prefix + text + suffix).replace(/\s+/g, ' ').trim();
      
      let node4;
      while (node4 = walker4.nextNode()) {
        const content = node4.textContent || '';
        const normalizedContent = content.replace(/\s+/g, ' ');
        const index = normalizedContent.indexOf(contextPattern);
        
        if (index !== -1) {
          const range = document.createRange();
          const prefixLength = prefix.replace(/\s+/g, ' ').trim().length;
          const startIndex = index + (prefixLength > 0 ? prefixLength + 1 : 0);
          range.setStart(node4, startIndex);
          range.setEnd(node4, startIndex + text.replace(/\s+/g, ' ').trim().length);
          return range;
        }
      }
      
      return null;
    };
    
    // Try to find and highlight the text
    const range = findTextInDOM(highlight.text, highlight.prefix || '', highlight.suffix || '');
    if (range) {
      try {
        // Create highlight mark
        const mark = document.createElement('mark');
        mark.className = `article-highlight highlight-${highlight.tag || 'insight'}`;
        mark.dataset.highlightId = highlight.id;
        
        // Apply highlight with better error handling
        try {
        range.surroundContents(mark);
        } catch (surroundError) {
          // Fallback approach
          const contents = range.extractContents();
          mark.appendChild(contents);
          range.insertNode(mark);
        }
        
        console.log(`✅ Applied highlight "${highlight.text.substring(0, 30)}..." with ID: ${highlight.id}`);
      } catch (error) {
        console.error('Error applying highlight:', error, {
          text: highlight.text,
          id: highlight.id,
          tag: highlight.tag
        });
        failedHighlights.push(highlight.id);
      }
    } else {
      console.warn(`❌ Could not find text for highlight: "${highlight.text.substring(0, 30)}..." with ID: ${highlight.id}`);
      failedHighlights.push(highlight.id);
    }
  });
  
  // Clean up failed highlights after a few attempts
  if (failedHighlights.length > 0) {
    console.log(`🧹 Found ${failedHighlights.length} highlights that couldn't be applied. These might be from old text formatting.`);
    
    // Store failed highlights in sessionStorage to track across re-renders
    const storageKey = `failed-highlights-${location.pathname}`;
    const existingFailed = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
    
    failedHighlights.forEach(id => {
      existingFailed[id] = (existingFailed[id] || 0) + 1;
    });
    
    sessionStorage.setItem(storageKey, JSON.stringify(existingFailed));
    
    // If a highlight has failed 3+ times, suggest cleanup
    const persistentlyFailed = Object.entries(existingFailed)
      .filter(([_, count]) => (count as number) >= 3)
      .map(([id]) => id);
    
    if (persistentlyFailed.length > 0) {
      console.log(`🗑️  Suggesting cleanup of ${persistentlyFailed.length} persistently failed highlights`);
      
      // Show a one-time cleanup notification
      const notificationShown = sessionStorage.getItem(`cleanup-notification-${location.pathname}`);
      if (!notificationShown) {
        // Automatically clean up broken highlights from text format change
        console.log('🔄 Auto-cleaning broken highlights from text format change...');
        setTimeout(() => {
          persistentlyFailed.forEach(async (id) => {
            try {
              // We need access to removeHighlight function, so let's emit a custom event
              const cleanupEvent = new CustomEvent('cleanup-broken-highlight', { 
                detail: { highlightId: id } 
              });
              window.dispatchEvent(cleanupEvent);
            } catch (error) {
              console.error('Failed to cleanup highlight:', id, error);
            }
          });
        }, 1000);
        
        sessionStorage.setItem(`cleanup-notification-${location.pathname}`, 'shown');
      }
    }
  }
};

const ArticleHighlights: React.FC<ArticleHighlightsProps> = ({ articleId, children, articleTitle = 'Article', articleSlug = '' }) => {
  const [selection, setSelection] = useState<Selection | null>(null);
  const { highlights, saveHighlight, removeHighlight, highlightElement } = useHighlights();
  const [contentRef, setContentRef] = useState<HTMLElement | null>(null);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedTextForResponse, setSelectedTextForResponse] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);
  const [selectedTextForAi, setSelectedTextForAi] = useState('');
  const [activeHighlight, setActiveHighlight] = useState<{ id: string, text: string } | null>(null);
  const [showUnhighlightToolbar, setShowUnhighlightToolbar] = useState(false);
  const [isHidingToolbar, setIsHidingToolbar] = useState(false);
  const [unhighlightPosition, setUnhighlightPosition] = useState({ top: 0, left: 0 });
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareHighlightText, setShareHighlightText] = useState('');
  
  // Function to hide toolbar with animation
  const hideToolbarWithAnimation = useCallback(() => {
    setIsHidingToolbar(true);
    // After animation completes, actually hide the toolbar
    setTimeout(() => {
      setShowUnhighlightToolbar(false);
      setIsHidingToolbar(false);
    }, 150); // Match this with CSS transition duration
  }, []);
  
  // Handle text selection with simple debouncing
  const handleSelection = useCallback(() => {
    // If unhighlight toolbar is active, don't process regular selections
    if (showUnhighlightToolbar) return;
    
    const currentSelection = window.getSelection();
    if (currentSelection && !currentSelection.isCollapsed) {
      const selectedText = currentSelection.toString();
      const trimmedText = selectedText.trim();
      
      // Filter out selections that are too long (likely accidental)
      if (trimmedText && trimmedText.length > 0 && selectedText.length < 1000) {
        // Check if selection is within our article content
        const range = currentSelection.getRangeAt(0);
        const container = range.commonAncestorContainer;
        const articleContainer = container.nodeType === Node.TEXT_NODE 
          ? container.parentElement?.closest('.article-highlight-container')
          : (container as Element)?.closest('.article-highlight-container');
        
        if (articleContainer) {
          setSelection(currentSelection);
        } else {
          setSelection(null);
        }
      } else {
        setSelection(null);
      }
    } else {
      setSelection(null);
    }
  }, [showUnhighlightToolbar]);
  
  // Handle highlight button click
  const handleHighlight = useCallback((selectedText: string, range: Range, tag: HighlightTag) => {
    if (selectedText && range) {
      // Get context for the selection
      const context = getSelectionContext(window.getSelection()!);
      
      // Save highlight to database with tag (preserve original formatting)
      saveHighlight(
        selectedText, // Don't trim - preserve exact formatting including line breaks
        context.prefix,
        context.suffix,
        articleId,
        tag
      );
      
      // Apply highlight visually with tag-based styling
      highlightElement(range, tag);
    }
  }, [articleId, saveHighlight, highlightElement]);
  
  // Handle highlight click to show unhighlight option
  const handleHighlightClick = useCallback((e: MouseEvent) => {
    // Check if click is on a highlight
    const target = e.target as HTMLElement;
    if (target.classList.contains('article-highlight')) {
      e.preventDefault();
      e.stopPropagation();
      
      // Get highlight info
      const highlightId = target.dataset.highlightId;
      const highlightText = target.textContent || '';
      
      if (highlightId) {
        // Reset hiding state if it was set
        setIsHidingToolbar(false);
        
        // Set active highlight
        setActiveHighlight({ id: highlightId, text: highlightText });
        
        // Position unhighlight toolbar near the highlight
        const rect = target.getBoundingClientRect();
        setUnhighlightPosition({
          top: rect.top - 40 + window.scrollY, // Position above the highlight
          left: rect.left + rect.width / 2
        });
        
        // Show unhighlight toolbar
        setShowUnhighlightToolbar(true);
        
        // Hide regular selection toolbar if visible
        setSelection(null);
      }
    } else {
      // If clicking elsewhere, hide unhighlight toolbar with animation
      if (showUnhighlightToolbar) {
        hideToolbarWithAnimation();
        setActiveHighlight(null);
      }
    }
  }, [showUnhighlightToolbar, hideToolbarWithAnimation]);
  
  // Handle unhighlight action
  const handleUnhighlight = useCallback(() => {
    if (activeHighlight && activeHighlight.id) {
      // Start the hiding animation
      hideToolbarWithAnimation();
      
      // Store the ID before resetting the active highlight
      const highlightId = activeHighlight.id;
      
      // Reset active highlight state
      setActiveHighlight(null);
      
      // Remove highlight from database
      removeHighlight(highlightId);
      
      // Find and remove highlight from DOM
      if (contentRef) {
        const highlightEl = contentRef.querySelector(`[data-highlight-id="${highlightId}"]`);
        if (highlightEl && highlightEl.parentNode) {
          const textNode = document.createTextNode(highlightEl.textContent || '');
          highlightEl.parentNode.replaceChild(textNode, highlightEl);
          highlightEl.parentNode.normalize();
        }
      }
    }
  }, [activeHighlight, removeHighlight, contentRef, hideToolbarWithAnimation]);
  
  // Handle response button click
  const handleResponse = useCallback((selectedText: string) => {
    setSelectedTextForResponse(selectedText);
    setShowResponseModal(true);
  }, []);

  // Handle share button click
  const handleShare = useCallback((selectedText: string) => {
    setShareHighlightText(selectedText);
    setShowShareModal(true);
  }, []);

  // Handle AI assist button click
  const handleAiAssist = useCallback((selectedText: string) => {
    setSelectedTextForAi(selectedText);
    setShowAiModal(true);
  }, []);
  
  // Set up selection event listener
  useEffect(() => {
    document.addEventListener('selectionchange', handleSelection);
    
    // Additional mobile touch handling
    const handleTouchEnd = () => {
      // Small delay to ensure selection is finalized
      setTimeout(handleSelection, 150);
    };
    
    // Only add touch handlers on mobile devices
    if ('ontouchstart' in window) {
      document.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      if ('ontouchstart' in window) {
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [handleSelection]);
  
  // Set up click listener for highlights
  useEffect(() => {
    if (contentRef) {
      contentRef.addEventListener('click', handleHighlightClick as EventListener);
      
      return () => {
        contentRef.removeEventListener('click', handleHighlightClick as EventListener);
      };
    }
  }, [contentRef, handleHighlightClick]);
  
  // Add click listener to document to hide unhighlight toolbar when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (showUnhighlightToolbar) {
        const target = e.target as HTMLElement;
        if (!target.closest('.highlight-toolbar') && 
            !target.classList.contains('article-highlight')) {
          hideToolbarWithAnimation();
          setActiveHighlight(null);
        }
      }
    };
    
    document.addEventListener('click', handleDocumentClick);
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showUnhighlightToolbar, hideToolbarWithAnimation]);
  
  // Apply highlights from database when they change
  useEffect(() => {
    if (contentRef) {
      // Always try to apply highlights, even if array is empty (for cleanup)
      const timeoutId = setTimeout(() => {
        console.log(`🎨 Applying ${highlights.length} highlights to content`);
      applyHighlightsToContent(highlights, contentRef);
      }, 100); // Increased delay for better stability
      
      return () => clearTimeout(timeoutId);
    }
  }, [highlights, contentRef]);
  
  // Listen for cleanup events
  useEffect(() => {
    const handleCleanupEvent = (event: CustomEvent) => {
      const highlightId = event.detail?.highlightId;
      if (highlightId) {
        console.log(`🗑️ Cleaning up broken highlight: ${highlightId}`);
        removeHighlight(highlightId);
      }
    };
    
    window.addEventListener('cleanup-broken-highlight', handleCleanupEvent as EventListener);
    
    return () => {
      window.removeEventListener('cleanup-broken-highlight', handleCleanupEvent as EventListener);
    };
  }, [removeHighlight]);
  
  // Get ref to content element
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node && node !== contentRef) {
      setContentRef(node);
    }
  }, [contentRef]);
  
  return (
    <>
      {/* Toolbar for highlighting */}
      <HighlightToolbar 
        selection={selection} 
        onHighlight={handleHighlight} 
        onResponse={handleResponse}
        onShare={handleShare}
        onAiAssist={handleAiAssist}
      />
      
      {/* Unhighlight toolbar */}
      {showUnhighlightToolbar && activeHighlight && (
        <div 
          className={`highlight-toolbar unhighlight-toolbar ${isHidingToolbar ? 'hiding' : ''}`}
          style={{
            position: 'absolute',
            top: `${unhighlightPosition.top}px`,
            left: `${unhighlightPosition.left}px`,
            transform: isHidingToolbar ? 'translateY(-10px) translateX(-50%)' : 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <button onClick={handleUnhighlight} className="highlight-btn highlight-btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
              <line x1="18" y1="9" x2="12" y2="15"></line>
              <line x1="12" y1="9" x2="18" y2="15"></line>
            </svg>
            <span>Unhighlight</span>
          </button>
          
          <button 
            onClick={() => {
              handleShare(activeHighlight.text);
              hideToolbarWithAnimation();
            }} 
            className="highlight-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>Share</span>
          </button>
          
          <button 
            onClick={() => {
              handleResponse(activeHighlight.text);
              hideToolbarWithAnimation();
            }} 
            className="highlight-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>Response</span>
          </button>
        </div>
      )}
      
      {/* Content with ref for highlight application */}
      <div ref={setRef} className="article-highlight-container">
        {children}
      </div>
      
      {/* Response Modal - placeholder for implementation */}
      {showResponseModal && (
        <div className="highlight-response-modal">
          <div className="highlight-modal-content">
            <button 
              className="highlight-modal-close" 
              onClick={() => setShowResponseModal(false)}
            >
              ×
            </button>
            <h3>Respond to highlighted text</h3>
            <div className="highlight-selected-text">"{selectedTextForResponse}"</div>
            <textarea 
              className="highlight-response-input" 
              placeholder="Write your response..."
            ></textarea>
            <button className="highlight-response-submit">Submit</button>
          </div>
        </div>
      )}
      
      {/* Journa AI Modal - placeholder for implementation */}
      {showAiModal && (
        <div className="highlight-ai-modal">
          <div className="highlight-modal-content">
            <button 
              className="highlight-modal-close" 
              onClick={() => setShowAiModal(false)}
            >
              ×
            </button>
            <h3>Journa AI</h3>
            <div className="highlight-selected-text">"{selectedTextForAi}"</div>
            <div className="highlight-ai-options">
              <button>Explain this</button>
              <button>Fact check</button>
              <button>Provide context</button>
              <button>Summarize</button>
            </div>
            <div className="highlight-ai-response">
              {/* AI response would appear here */}
              <div className="highlight-ai-loading">Journa AI is thinking...</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
          highlightText={shareHighlightText}
          articleTitle={articleTitle}
          shareUrl={generateHighlightShareUrl(articleSlug, articleId)}
          articleData={articleSlug ? {
            slug: articleSlug,
            title: articleTitle || 'Article',
            excerpt: shareHighlightText.substring(0, 200),
            isExternal: false
          } : undefined}
        />
      )}
    </>
  );
};

export default ArticleHighlights; 