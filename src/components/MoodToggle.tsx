'use client'

import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';
import GradientPanel from './GradientPanel';
import { moodThemes } from '@/utils/moodThemes';

interface MoodToggleProps {
  initialEnabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  currentMood?: keyof typeof moodThemes;
}

const MoodToggle: React.FC<MoodToggleProps> = ({ 
  initialEnabled = true, 
  className = '',
  style = {},
  currentMood = 'joyful'
}) => {
  const [moodFeatureEnabled, setMoodFeatureEnabled] = useState(initialEnabled);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      
              if (user) {
          // Load user's mood preference from localStorage
          const savedPreference = localStorage.getItem('moodFeatureEnabled');
          if (savedPreference !== null) {
            const enabled = JSON.parse(savedPreference);
            setMoodFeatureEnabled(enabled);
            
            // Apply initial state to DOM with multiple attempts to ensure it works
            const applyInitialState = (attempt = 1) => {
              console.log(`🎨 Applying initial mood state (attempt ${attempt}):`, enabled);
              const moodElements = document.querySelectorAll('[data-mood-element]') as NodeListOf<HTMLElement>;
              console.log('🎨 Found mood elements on init:', moodElements.length);
              
              if (moodElements.length === 0 && attempt < 5) {
                // Elements not ready yet, try again
                setTimeout(() => applyInitialState(attempt + 1), 200);
                return;
              }
              
                    moodElements.forEach(element => {
        // Ensure elements have proper transitions
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        if (enabled) {
          // Show elements with data attributes
          element.setAttribute('data-mood-active', 'true');
          element.style.display = 'block';
          element.style.visibility = 'visible';
          element.style.opacity = '1';
          element.style.transform = 'scale(1)';
          console.log('🎨 Initial show:', element.getAttribute('data-mood-element'));
        } else {
          // Hide elements with data attributes
          element.setAttribute('data-mood-active', 'false');
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.style.opacity = '0';
          element.style.transform = 'scale(0.95)';
          console.log('🎨 Initial hide:', element.getAttribute('data-mood-element'));
        }
      });
              
              // Also apply to headers
              const moodHeaders = document.querySelectorAll('[data-mood-header]') as NodeListOf<HTMLElement>;
              moodHeaders.forEach(element => {
                element.style.transition = 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease';
                if (!enabled) {
                  element.style.background = 'rgba(255, 255, 255, 0.95)';
                  element.style.border = '1px solid rgba(0, 0, 0, 0.1)';
                  element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }
              });
            };
            
            // Start applying initial state
            setTimeout(() => applyInitialState(), 100);
          } else {
            setMoodFeatureEnabled(true);
          }
        } else {
          setMoodFeatureEnabled(false);
        }
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    console.log('🎨 MoodToggle clicked - should NOT trigger parent re-render');
    
    if (!currentUser) return;

    // Optimistic update with animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    const newEnabled = !moodFeatureEnabled;
    setMoodFeatureEnabled(newEnabled);
    localStorage.setItem('moodFeatureEnabled', JSON.stringify(newEnabled));
    
    console.log('🎨 Mood feature toggled to:', newEnabled);
    
    // 🚫 REMOVED: No more React state updates that cause re-renders and lose highlights!
    
    // Force IMMEDIATE visual updates for mood backgrounds - no waiting for events
    console.log('🎨 Toggle clicked - searching for mood elements...');
    
    const findAndUpdateElements = (attempt = 1) => {
      const moodElements = document.querySelectorAll('[data-mood-element]') as NodeListOf<HTMLElement>;
      console.log(`🎨 Found mood elements (attempt ${attempt}):`, moodElements.length);
      
      if (moodElements.length === 0 && attempt < 3) {
        // Try again if elements not found
        setTimeout(() => findAndUpdateElements(attempt + 1), 100);
        return;
      }
      
      moodElements.forEach(element => {
        // Add smooth transitions
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        if (newEnabled) {
          // Show elements - use data attributes and CSS properties
          element.setAttribute('data-mood-active', 'true');
          element.style.display = 'block';
          element.style.visibility = 'visible';
          element.style.opacity = '1';
          element.style.transform = 'scale(1)';
          console.log('🎨 Showing mood element:', element.getAttribute('data-mood-element'));
        } else {
          // Hide elements
          element.setAttribute('data-mood-active', 'false');
          element.style.opacity = '0';
          element.style.transform = 'scale(0.95)';
          console.log('🎨 Hiding mood element:', element.getAttribute('data-mood-element'));
          
          // Hide after animation completes
          setTimeout(() => {
            if (element.getAttribute('data-mood-active') === 'false') {
              element.style.display = 'none';
              element.style.visibility = 'hidden';
            }
          }, 300);
        }
      });
    };
    
    // Start the search and update process
    findAndUpdateElements();
    
    // Also update any mood-controlled headers/panels with smooth transitions
    const moodHeaders = document.querySelectorAll('[data-mood-header]') as NodeListOf<HTMLElement>;
    moodHeaders.forEach(element => {
      // Add smooth transition for header changes
      element.style.transition = 'background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease';
      
      if (newEnabled) {
        // When enabling, clear any overrides to restore original mood styling
        element.style.background = '';
        element.style.border = '';
        element.style.boxShadow = '';
        
        // Force a complete refresh by temporarily hiding and showing
        const originalDisplay = element.style.display;
        element.style.display = 'none';
        element.offsetHeight; // Force reflow
        element.style.display = originalDisplay;
        
        console.log('🎨 Header mood styling restored - cleared overrides');
      } else {
        // Save current mood styling and apply neutral background
        element.setAttribute('data-mood-style', element.style.background);
        element.style.background = 'rgba(255, 255, 255, 0.95)';
        element.style.border = '1px solid rgba(0, 0, 0, 0.1)';
        element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        console.log('🎨 Header mood styling removed');
      }
    });
    
    console.log('🎨 Mood backgrounds updated immediately. Enabled:', newEnabled);
  };

  if (!currentUser) {
    return null; // Don't show toggle for unauthenticated users
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className={className}
        style={{
          ...style,
          transition: 'all 0.3s ease',
          transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
        }}
        title={moodFeatureEnabled ? "Turn off mood feature" : "Turn on mood feature"}
      >
        {moodFeatureEnabled ? 'ON' : 'OFF'}
      </button>

      {/* Real-time gradient panel */}
      <GradientPanel
        currentMood={currentMood}
        isVisible={!!currentUser}
        moodFeatureEnabled={moodFeatureEnabled}
      />
    </>
  );
};

export default React.memo(MoodToggle); 