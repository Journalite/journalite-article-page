'use client'

import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';
import { moodThemes } from '@/utils/moodThemes';

interface ReflectionModeToggleProps {
  className?: string;
  style?: React.CSSProperties;
}

const ReflectionModeToggle: React.FC<ReflectionModeToggleProps> = ({ 
  className = '',
  style = {}
}) => {
  const [reflectionsEnabled, setReflectionsEnabled] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mood] = useState<'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic'>('reflective');

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      
      if (user) {
        // Load user's reflection preference from localStorage
        const savedPreference = localStorage.getItem('reflectionsEnabled');
        if (savedPreference !== null) {
          const enabled = JSON.parse(savedPreference);
          setReflectionsEnabled(enabled);
          // Apply initial state to DOM
          setTimeout(() => {
            const reflectionElements = document.querySelectorAll('[data-reflection-element]') as NodeListOf<HTMLElement>;
            reflectionElements.forEach(element => {
              element.style.display = enabled ? '' : 'none';
            });
          }, 100);
        } else {
          setReflectionsEnabled(true);
        }
      } else {
        setReflectionsEnabled(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    console.log('ReflectionModeToggle clicked - should NOT trigger parent re-render');
    
    if (!currentUser) return;

    // Optimistic update with animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    const newEnabled = !reflectionsEnabled;
    setReflectionsEnabled(newEnabled);
    localStorage.setItem('reflectionsEnabled', JSON.stringify(newEnabled));
    
    console.log('Reflection mode toggled to:', newEnabled);
    
    // Force immediate DOM updates for reflection components
    const reflectionElements = document.querySelectorAll('[data-reflection-element]') as NodeListOf<HTMLElement>;
    reflectionElements.forEach(element => {
      if (newEnabled) {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    });
    
    // Dispatch custom event to notify other components without causing re-renders
    window.dispatchEvent(new CustomEvent('reflectionModeToggle', { 
      detail: { enabled: newEnabled } 
    }));
  };

  if (!currentUser) {
    return (
      <button
        style={{
          ...style,
          opacity: 0.6,
          cursor: 'not-allowed'
        }}
        disabled
        title="Sign in to use reflections"
      >
        OFF
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={className}
      style={{
        ...style,
        transition: 'all 0.3s ease',
        transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
        background: reflectionsEnabled 
          ? 'rgba(255, 255, 255, 0.9)' 
          : 'rgba(255, 255, 255, 0.2)',
        color: reflectionsEnabled ? moodThemes[mood].accent : '#F7FAFC',
      }}
      title={reflectionsEnabled ? "Turn off reflections" : "Turn on reflections"}
    >
      {reflectionsEnabled ? 'ON' : 'OFF'}
    </button>
  );
};

export default React.memo(ReflectionModeToggle); 