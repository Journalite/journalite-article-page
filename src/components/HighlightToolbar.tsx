import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HighlightTag } from '@/services/highlightService';

interface HighlightToolbarProps {
  selection: Selection | null;
  onHighlight: (selectedText: string, range: Range, tag: HighlightTag) => void;
  onResponse?: (selectedText: string) => void;
  onShare?: (selectedText: string) => void;
  onAiAssist?: (selectedText: string) => void;
}

const highlightTags: { tag: HighlightTag; label: string; color: string; icon: string }[] = [
  { tag: 'insight', label: 'Insight', color: '#3B82F6', icon: '💡' },
  { tag: 'question', label: 'Question', color: '#F59E0B', icon: '❓' },
  { tag: 'quote', label: 'Quote', color: '#10B981', icon: '💬' },
  { tag: 'important', label: 'Important', color: '#EF4444', icon: '⭐' }
];

const HighlightToolbar: React.FC<HighlightToolbarProps> = ({ 
  selection, 
  onHighlight, 
  onResponse, 
  onShare, 
  onAiAssist 
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showColorOptions, setShowColorOptions] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't show toolbar if no selection or empty selection
    if (!selection || selection.isCollapsed) {
      setIsVisible(false);
      setShowColorOptions(false);
      return;
    }

    // Get the selection's bounding rectangle
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Get viewport and toolbar dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const toolbarWidth = toolbarRef.current?.offsetWidth || 280;
    const toolbarHeight = toolbarRef.current?.offsetHeight || 40;
    
    // Calculate horizontal position (keep within viewport)
    let left = rect.left + rect.width / 2;
    const margin = 16; // Margin from screen edges
    
    // Ensure toolbar doesn't go off screen horizontally
    if (left - toolbarWidth / 2 < margin) {
      left = toolbarWidth / 2 + margin;
    } else if (left + toolbarWidth / 2 > windowWidth - margin) {
      left = windowWidth - toolbarWidth / 2 - margin;
    }
    
    // Calculate vertical position
    let top = rect.top - toolbarHeight - 10 + window.scrollY;
    
    // If toolbar would be above viewport, place it below selection
    if (rect.top - toolbarHeight - 10 < 0) {
      top = rect.bottom + 10 + window.scrollY;
    }
    
    // Additional mobile-specific adjustments
    const isMobile = windowWidth <= 768;
    if (isMobile) {
      // On mobile, ensure toolbar is always visible
      const viewportTop = window.scrollY;
      const viewportBottom = window.scrollY + windowHeight;
      
      // If toolbar would be above viewport
      if (top < viewportTop + margin) {
        top = viewportTop + margin;
      }
      
      // If toolbar would be below viewport
      if (top + toolbarHeight > viewportBottom - margin) {
        top = viewportBottom - toolbarHeight - margin;
      }
    }

    setPosition({ top, left });
    
    // Show the toolbar
    setIsVisible(true);
  }, [selection]);

  // Handle highlighting action with tag
  const handleHighlight = (tag: HighlightTag) => {
    if (selection && !selection.isCollapsed) {
      const range = selection.getRangeAt(0);
      const selectedText = selection.toString();
      onHighlight(selectedText, range, tag);
      // Clear selection after highlighting
      window.getSelection()?.removeAllRanges();
      setIsVisible(false);
      setShowColorOptions(false);
    }
  };

  // Toggle color options
  const toggleColorOptions = () => {
    setShowColorOptions(!showColorOptions);
  };

  // Handle response action
  const handleResponse = () => {
    if (selection && !selection.isCollapsed && onResponse) {
      const selectedText = selection.toString();
      onResponse(selectedText);
      // Clear selection after response
      window.getSelection()?.removeAllRanges();
      setIsVisible(false);
    }
  };

  // Handle share action
  const handleShare = () => {
    if (selection && !selection.isCollapsed && onShare) {
      const selectedText = selection.toString();
      onShare(selectedText);
      // Clear selection after share
      window.getSelection()?.removeAllRanges();
      setIsVisible(false);
    }
  };

  // Handle AI assist action
  const handleAiAssist = () => {
    if (selection && !selection.isCollapsed && onAiAssist) {
      const selectedText = selection.toString();
      onAiAssist(selectedText);
      // Clear selection after AI assist
      window.getSelection()?.removeAllRanges();
      setIsVisible(false);
    }
  };

  // Only render if there's a valid selection and in browser
  if (!isVisible || typeof window === 'undefined') {
    return null;
  }

  // Use portal to render outside of article container
  return createPortal(
    <div 
      ref={toolbarRef}
      className="highlight-toolbar"
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: 'translateX(-50%)',
        zIndex: 1000,
      }}
    >
      {!showColorOptions ? (
        <>
          <button onClick={toggleColorOptions} className="highlight-btn highlight-btn-main">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>Highlight</span>
          </button>
          
          {onResponse && (
            <button onClick={handleResponse} className="highlight-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>Response</span>
            </button>
          )}
          
          {onShare && (
            <button onClick={handleShare} className="highlight-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              <span>Share</span>
            </button>
          )}
          
          {onAiAssist && (
            <button onClick={handleAiAssist} className="highlight-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span>Journa AI</span>
            </button>
          )}
        </>
      ) : (
        <div className="highlight-color-options">
          <span className="highlight-color-label">Choose highlight type:</span>
          {highlightTags.map((tagInfo) => (
            <button
              key={tagInfo.tag}
              onClick={() => handleHighlight(tagInfo.tag)}
              className="highlight-color-btn"
              style={{ backgroundColor: tagInfo.color }}
              title={tagInfo.label}
            >
              <span className="highlight-icon">{tagInfo.icon}</span>
              <span className="highlight-label">{tagInfo.label}</span>
            </button>
          ))}
          <button onClick={toggleColorOptions} className="highlight-btn highlight-btn-cancel">
            Cancel
          </button>
        </div>
      )}
    </div>,
    document.body
  );
};

export default HighlightToolbar; 