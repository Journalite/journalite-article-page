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
      // Get the exact selected text without trimming to preserve formatting
      const selectedText = range.toString();
      if (!selectedText) return;
      
      // Use the original range without modification to preserve exact selection
      const highlightMark = document.createElement('mark');
      highlightMark.className = `article-highlight highlight-${tag}`;
    
      // Use a safer approach that preserves text structure
    try {
        // Try surrounding contents first
      range.surroundContents(highlightMark);
      } catch (error) {
        // If that fails, try extracting and inserting
        try {
          const contents = range.extractContents();
          highlightMark.appendChild(contents);
          range.insertNode(highlightMark);
        } catch (innerError) {
          // Last resort: clone contents to avoid moving elements
          const contents = range.cloneContents();
          highlightMark.appendChild(contents);
          range.deleteContents();
          range.insertNode(highlightMark);
        }
      }
      
      // Clear the selection to prevent UI confusion
      window.getSelection()?.removeAllRanges();
      
    } catch (error) {
      console.error('Error highlighting range:', error);
      // Restore selection if highlight fails
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
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