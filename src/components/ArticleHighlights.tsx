import React, { useState, useEffect, useCallback } from 'react';
import HighlightToolbar from './HighlightToolbar';
import { useHighlights } from '@/context/HighlightContext';
import { Highlight } from '@/services/highlightService';

interface ArticleHighlightsProps {
  articleId: string;
  children: React.ReactNode;
  onShare?: (text: string) => void; // Optional share handler
}

// Get context for a selection
const getSelectionContext = (selection: Selection): { prefix: string; suffix: string } => {
  // Default empty result
  const result = { prefix: '', suffix: '' };
  
  if (!selection || selection.rangeCount === 0) return result;
  
  const range = selection.getRangeAt(0);
  const selectedText = range.toString();
  
  // Clone the range for getting surrounding content
  const contextRange = range.cloneRange();
  
  // Get parent node of selection
  const parentNode = range.commonAncestorContainer;
  const parentContent = parentNode.textContent || '';
  
  // Find selection position in parent content
  const selectionStart = parentContent.indexOf(selectedText);
  
  if (selectionStart !== -1) {
    // Get up to 30 chars of context before and after selection
    const prefixStart = Math.max(0, selectionStart - 30);
    const suffixEnd = Math.min(parentContent.length, selectionStart + selectedText.length + 30);
    
    result.prefix = parentContent.substring(prefixStart, selectionStart);
    result.suffix = parentContent.substring(selectionStart + selectedText.length, suffixEnd);
  }
  
  return result;
};

// Apply highlights to existing content in the DOM
const applyHighlightsToContent = (highlights: any[], articleContent: HTMLElement): void => {
  if (!highlights || !articleContent) return;
  
  // First clear existing highlights to prevent duplicates
  const existingHighlights = articleContent.querySelectorAll('.article-highlight');
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
  
  // Then apply all highlights from the database
  highlights.forEach(highlight => {
    // Function to find text in the DOM using prefix and suffix as context
    const findTextInDOM = (text: string, prefix: string, suffix: string): Range | null => {
      // Create a text finder walker
      const walker = document.createTreeWalker(
        articleContent,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      // Pattern to search for (prefix + text + suffix)
      const pattern = (prefix + text + suffix).trim();
      
      let node;
      while (node = walker.nextNode()) {
        const content = node.textContent || '';
        const index = content.indexOf(pattern);
        
        if (index !== -1) {
          // Found the text with context, create a range
          const range = document.createRange();
          const prefixLength = prefix.trim().length;
          range.setStart(node, index + prefixLength);
          range.setEnd(node, index + prefixLength + text.trim().length);
          return range;
        }
      }
      
      return null;
    };
    
    // Try to find and highlight the text
    const range = findTextInDOM(highlight.text, highlight.prefix, highlight.suffix);
    if (range) {
      try {
        // Create highlight mark
        const mark = document.createElement('mark');
        mark.className = 'article-highlight';
        mark.dataset.highlightId = highlight.id;
        
        // Apply highlight
        range.surroundContents(mark);
      } catch (error) {
        console.error('Error applying highlight:', error);
      }
    }
  });
};

const ArticleHighlights: React.FC<ArticleHighlightsProps> = ({ articleId, children, onShare }) => {
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
  
  // Function to hide toolbar with animation
  const hideToolbarWithAnimation = useCallback(() => {
    setIsHidingToolbar(true);
    // After animation completes, actually hide the toolbar
    setTimeout(() => {
      setShowUnhighlightToolbar(false);
      setIsHidingToolbar(false);
    }, 150); // Match this with CSS transition duration
  }, []);
  
  // Handle text selection
  const handleSelection = useCallback(() => {
    // If unhighlight toolbar is active, don't process regular selections
    if (showUnhighlightToolbar) return;
    
    const currentSelection = window.getSelection();
    if (currentSelection && !currentSelection.isCollapsed && currentSelection.toString().trim() !== '') {
      setSelection(currentSelection);
    } else {
      setSelection(null);
    }
  }, [showUnhighlightToolbar]);
  
  // Handle highlight button click
  const handleHighlight = useCallback((selectedText: string, range: Range) => {
    if (selectedText && range) {
      // Get context for the selection
      const context = getSelectionContext(window.getSelection()!);
      
      // Save highlight to database
      saveHighlight(
        selectedText.trim(),
        context.prefix,
        context.suffix,
        articleId
      );
      
      // Apply highlight visually
      highlightElement(range);
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
    if (onShare) {
      onShare(selectedText);
    } else {
      // Fallback if no share handler is provided
      const shareText = `"${selectedText}" — via Journalite`;
      
      // Try to use native share API if available
      if (navigator.share) {
        navigator.share({
          text: shareText,
        }).catch(error => {
          console.error('Error sharing:', error);
          // Fallback to copying to clipboard
          navigator.clipboard.writeText(shareText)
            .then(() => alert('Quote copied to clipboard!'))
            .catch(err => console.error('Failed to copy:', err));
        });
      } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(shareText)
          .then(() => alert('Quote copied to clipboard!'))
          .catch(err => console.error('Failed to copy:', err));
      }
    }
  }, [onShare]);

  // Handle AI assist button click
  const handleAiAssist = useCallback((selectedText: string) => {
    setSelectedTextForAi(selectedText);
    setShowAiModal(true);
  }, []);
  
  // Set up selection event listener
  useEffect(() => {
    document.addEventListener('selectionchange', handleSelection);
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
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
    if (contentRef && highlights.length > 0) {
      applyHighlightsToContent(highlights, contentRef);
    }
  }, [highlights, contentRef]);
  
  // Get ref to content element
  const setRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      setContentRef(node);
    }
  }, []);
  
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
    </>
  );
};

export default ArticleHighlights; 