import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';
import { 
  Highlight, 
  HighlightTag,
  getArticleHighlights, 
  saveHighlight, 
  deleteHighlight 
} from '@/services/highlightService';

interface HighlightContextType {
  highlights: Highlight[];
  loading: boolean;
  saveHighlight: (text: string, prefix: string, suffix: string, articleId: string, tag: HighlightTag) => Promise<string | null>;
  removeHighlight: (highlightId: string) => Promise<void>;
  highlightElement: (range: Range, tag: HighlightTag) => void;
}

const HighlightContext = createContext<HighlightContextType | undefined>(undefined);

interface HighlightProviderProps {
  children: ReactNode;
  articleId: string;
}

export const HighlightProvider: React.FC<HighlightProviderProps> = ({ children, articleId }) => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Load highlights for the current article (user-specific)
  useEffect(() => {
    const loadHighlights = async () => {
      if (articleId && currentUser) {
        setLoading(true);
        try {
          // Pass user ID to get only current user's highlights
          const userHighlights = await getArticleHighlights(articleId, currentUser.uid);
          setHighlights(userHighlights);
        } catch (error) {
          console.error('Error loading highlights:', error);
        } finally {
          setLoading(false);
        }
      } else {
        // If no user is logged in, clear highlights
        setHighlights([]);
        setLoading(false);
      }
    };

    loadHighlights();
  }, [articleId, currentUser]);

  // Save a new highlight
  const handleSaveHighlight = async (
    text: string, 
    prefix: string, 
    suffix: string, 
    articleId: string,
    tag: HighlightTag
  ): Promise<string | null> => {
    if (!currentUser) {
      alert('You must be logged in to highlight text');
      return null;
    }

    try {
      const highlightId = await saveHighlight(
        articleId,
        currentUser.uid,
        text,
        prefix,
        suffix,
        tag
      );

      // Add the new highlight to state
      const newHighlight: Highlight = {
        id: highlightId,
        articleId,
        userId: currentUser.uid,
        text,
        prefix,
        suffix,
        tag,
        createdAt: new Date(),
        reactions: {},
        userReactions: {}
      };

      setHighlights(prev => [...prev, newHighlight]);
      return highlightId;
    } catch (error) {
      console.error('Error saving highlight:', error);
      return null;
    }
  };

  // Remove a highlight
  const handleRemoveHighlight = async (highlightId: string): Promise<void> => {
    try {
      await deleteHighlight(highlightId);
      setHighlights(prev => prev.filter(h => h.id !== highlightId));
    } catch (error) {
      console.error('Error removing highlight:', error);
    }
  };

  // Apply highlight styling to a DOM element with improved range handling
  const highlightElement = (range: Range, tag: HighlightTag): void => {
    try {
      // Clean up the range to avoid partial word selections
      const selectedText = range.toString().trim();
      if (!selectedText) return;
      
      // Create a new range to ensure clean boundaries
      const cleanRange = document.createRange();
      cleanRange.setStart(range.startContainer, range.startOffset);
      cleanRange.setEnd(range.endContainer, range.endOffset);
      
      // Expand range to word boundaries if needed
      const startContainer = cleanRange.startContainer;
      const endContainer = cleanRange.endContainer;
      
      if (startContainer.nodeType === Node.TEXT_NODE) {
        const text = startContainer.textContent || '';
        let startOffset = cleanRange.startOffset;
        
        // Move start to word boundary if we're in the middle of a word
        while (startOffset > 0 && /\S/.test(text.charAt(startOffset - 1))) {
          startOffset--;
        }
        cleanRange.setStart(startContainer, startOffset);
      }
      
      if (endContainer.nodeType === Node.TEXT_NODE) {
        const text = endContainer.textContent || '';
        let endOffset = cleanRange.endOffset;
        
        // Move end to word boundary if we're in the middle of a word
        while (endOffset < text.length && /\S/.test(text.charAt(endOffset))) {
          endOffset++;
        }
        cleanRange.setEnd(endContainer, endOffset);
      }
      
      const highlightMark = document.createElement('mark');
      highlightMark.className = `article-highlight highlight-${tag}`;
      
      // Try to surround the contents with the highlight
      try {
        cleanRange.surroundContents(highlightMark);
      } catch (error) {
        // If surrounding fails (e.g., crosses element boundaries), extract and wrap
        const fragment = cleanRange.extractContents();
        highlightMark.appendChild(fragment);
        cleanRange.insertNode(highlightMark);
      }
      
      // Clear the selection to prevent UI confusion
      window.getSelection()?.removeAllRanges();
      
    } catch (error) {
      console.error('Error highlighting range:', error);
    }
  };

  const contextValue: HighlightContextType = {
    highlights,
    loading,
    saveHighlight: handleSaveHighlight,
    removeHighlight: handleRemoveHighlight,
    highlightElement,
  };

  return (
    <HighlightContext.Provider value={contextValue}>
      {children}
    </HighlightContext.Provider>
  );
};

export const useHighlights = (): HighlightContextType => {
  const context = useContext(HighlightContext);
  if (context === undefined) {
    throw new Error('useHighlights must be used within a HighlightProvider');
  }
  return context;
}; 