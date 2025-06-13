'use client'

import React, { useState, useEffect } from 'react';
import ArticleComposer from '@/components/ArticleComposer';
import MobileBottomNav from '@/components/MobileBottomNav';
import { auth } from '@/firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Compose Page
 * 
 * A clean, focused page for creating new articles with the Medium-like editor
 */
const ComposePage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ArticleComposer />
      {/* Bottom Navigation - shown on all screen sizes */}
      <MobileBottomNav isAuthenticated={isAuthenticated} />
    </div>
  );
};

export default ComposePage; 