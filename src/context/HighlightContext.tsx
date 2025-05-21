import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';
import { 
  Highlight, 
  getArticleHighlights, 
  saveHighlight, 
  deleteHighlight 
} from '@/services/highlightService';

interface HighlightContextType {
  highlights: Highlight[];
  loading: boolean;
  saveHighlight: (text: string, prefix: string, suffix: string, articleId: string) => Promise<string | null>;
  removeHighlight: (highlightId: string) => Promise<void>;
  highlightElement: (range: Range) => void;
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

  // Load highlights for the current article
  useEffect(() => {
    const loadHighlights = async () => {
      if (articleId) {
        setLoading(true);
        try {
          const articleHighlights = await getArticleHighlights(articleId);
          setHighlights(articleHighlights);
        } catch (error) {
          console.error('Error loading highlights:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadHighlights();
  }, [articleId]);

  // Save a new highlight
  const handleSaveHighlight = async (
    text: string, 
    prefix: string, 
    suffix: string, 
    articleId: string
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
        suffix
      );

      // Add the new highlight to state
      const newHighlight: Highlight = {
        id: highlightId,
        articleId,
        userId: currentUser.uid,
        text,
        prefix,
        suffix,
        createdAt: new Date(),
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

  // Apply highlight styling to a DOM element
  const highlightElement = (range: Range): void => {
    const highlightMark = document.createElement('mark');
    highlightMark.className = 'article-highlight';
    
    try {
      range.surroundContents(highlightMark);
    } catch (error) {
      console.error('Error highlighting range:', error);
      // Handle complex selection that spans multiple elements
      const fragment = range.extractContents();
      highlightMark.appendChild(fragment);
      range.insertNode(highlightMark);
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