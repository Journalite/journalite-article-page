'use client'

import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';
import { SparkleIcon, DiceIcon, WriteIcon, CloseIcon } from './icons/CustomIcons';

interface ReflectionToggleProps {
  articleId: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReflectionToggle: React.FC<ReflectionToggleProps> = ({ 
  articleId,
  className = '',
  style = {}
}) => {
  const [showReflectionPanel, setShowReflectionPanel] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reflectionCount, setReflectionCount] = useState(0);
  const [currentReflection, setCurrentReflection] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Base reflection prompts
  const basePrompts = [
    "How does this make you feel?",
    "What questions does this raise for you?",
    "How does this connect to your own experiences?",
    "What would you have done differently?",
    "What surprises you most about this?",
    "How might this change your perspective?",
    "What emotions are you experiencing right now?",
    "What does this remind you of?",
    "If you could ask the author one question, what would it be?",
    "How does this challenge your existing beliefs?"
  ];

  const getDefaultPrompt = () => {
    return basePrompts[reflectionCount % basePrompts.length];
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Initialize prompt when panel opens
  useEffect(() => {
    if (showReflectionPanel && !currentPrompt) {
      setCurrentPrompt(getDefaultPrompt());
    }
  }, [showReflectionPanel, reflectionCount]);

  const toggleReflectionPanel = () => {
    console.log('ReflectionToggle clicked - should NOT trigger parent re-render');
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    setShowReflectionPanel(!showReflectionPanel);
    if (!showReflectionPanel) {
      setCurrentPrompt(getDefaultPrompt());
    }
  };

  const handlePromptEdit = () => {
    setIsEditingPrompt(true);
  };

  const handlePromptSave = () => {
    setIsEditingPrompt(false);
  };

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * basePrompts.length);
    setCurrentPrompt(basePrompts[randomIndex]);
  };

  const handleReflectionSubmit = async () => {
    if (!currentReflection.trim() || !currentUser) return;
    
    setIsSubmitting(true);
    
    try {
      console.log('Starting reflection submission:', {
        articleId,
        currentPrompt,
        currentReflection,
        reflectionCount
      });
      
      // Import the reflection service
      const { saveReflectionResponse } = await import('@/services/reflectionService');
      
      // Save the reflection with proper metadata
      await saveReflectionResponse(
        articleId,
        `prompt_${Date.now()}`,
        currentPrompt,
        currentReflection,
        reflectionCount,
        true // isPrivate
      );
      
      console.log('Reflection saved successfully');
      
      // Update count and close panel
      setReflectionCount(prev => prev + 1);
      setCurrentReflection('');
      setShowReflectionPanel(false);
      
    } catch (error) {
      console.error('Error saving reflection:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!currentUser) {
    return null; // Don't show for unauthenticated users
  }

  return (
    <>
      {/* Elegant Floating Reflection Button */}
      <button
        data-reflection-element="floating-button"
        onClick={toggleReflectionPanel}
        className={className}
        style={{
          position: 'fixed',
          bottom: window.innerWidth <= 768 ? '100px' : '40px', // Higher bottom position on mobile to avoid nav
          right: window.innerWidth <= 768 ? '20px' : '40px',
          width: window.innerWidth <= 768 ? '48px' : '56px',
          height: window.innerWidth <= 768 ? '48px' : '56px',
          borderRadius: '50%',
          background: showReflectionPanel 
            ? 'linear-gradient(135deg, #1d4ed8, #7c3aed)' 
            : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          border: 'none',
          boxShadow: showReflectionPanel
            ? '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.2)'
            : '0 6px 20px rgba(59, 130, 246, 0.3)',
          cursor: 'pointer',
          zIndex: 1001, // Higher than mobile bottom nav (1000)
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0',
          padding: '0',
          margin: '0',
          lineHeight: '0',
          textAlign: 'center',
          verticalAlign: 'middle',
          overflow: 'hidden',
          boxSizing: 'border-box',
          transform: isAnimating ? 'scale(1.1)' : showReflectionPanel ? 'scale(1.05)' : 'scale(1)',
          backdropFilter: 'blur(10px)',
          ...style,
        }}
        title={showReflectionPanel ? "Close reflection" : "Open reflection"}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}>
          {showReflectionPanel ? <CloseIcon size={14} color="#ffffff" /> : <WriteIcon size={14} color="#ffffff" />}
        </div>
      </button>

      {/* Custom Floating Reflection Panel */}
      {showReflectionPanel && (
        <div style={{
          position: 'fixed',
          bottom: window.innerWidth <= 768 ? '160px' : '110px', // Even higher when expanded on mobile
          right: window.innerWidth <= 768 ? '20px' : '40px',
          left: window.innerWidth <= 768 ? '20px' : 'auto',
          width: window.innerWidth <= 768 ? 'auto' : '380px',
          maxWidth: window.innerWidth <= 768 ? 'none' : '380px',
          maxHeight: window.innerWidth <= 768 ? '400px' : '500px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: window.innerWidth <= 768 ? '16px' : '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          zIndex: 999,
          animation: 'gentleSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: window.innerWidth <= 768 ? '16px' : '24px',
          overflow: 'hidden'
        }}>
          <style>
            {`
              @keyframes gentleSlideUp {
                from {
                  opacity: 0;
                  transform: translateY(20px) scale(0.98);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}
          </style>
          
          {/* Header */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h3 style={{
              margin: '0 0 12px 0',
              fontSize: '16px',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <SparkleIcon size={16} color="#3b82f6" />
              Time to Reflect
            </h3>
            
            {/* Editable Prompt */}
            <div style={{ position: 'relative' }}>
              {isEditingPrompt ? (
                <input
                  type="text"
                  value={currentPrompt}
                  onChange={(e) => setCurrentPrompt(e.target.value)}
                  onBlur={handlePromptSave}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handlePromptSave();
                    if (e.key === 'Escape') {
                      setCurrentPrompt(getDefaultPrompt());
                      setIsEditingPrompt(false);
                    }
                  }}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '2px solid #3b82f6',
                    borderRadius: '12px',
                    background: 'white',
                    fontSize: '14px',
                    textAlign: 'center',
                    outline: 'none'
                  }}
                />
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  <p 
                    onClick={handlePromptEdit}
                    style={{
                      margin: 0,
                      fontSize: '14px',
                      color: '#64748b',
                      fontWeight: '500',
                      cursor: 'pointer',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    title="Click to edit question"
                  >
                    {currentPrompt}
                  </p>
                  <button
                    onClick={getRandomPrompt}
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '12px',
                      color: '#3b82f6',
                      cursor: 'pointer',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Get different question"
                  >
                    <DiceIcon size={12} color="#3b82f6" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Reflection Input */}
          <textarea
            value={currentReflection}
            onChange={(e) => setCurrentReflection(e.target.value)}
            placeholder="Share your thoughts..."
            style={{
              width: '100%',
              height: '120px',
              padding: '12px',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              background: 'white',
              fontSize: '14px',
              fontFamily: 'inherit',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              marginBottom: '16px'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
            }}
          />

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px'
          }}>
            <button
              onClick={() => setShowReflectionPanel(false)}
              style={{
                background: 'transparent',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                padding: '8px 16px',
                fontSize: '14px',
                color: '#64748b',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              Cancel
            </button>
            
            <button
              onClick={handleReflectionSubmit}
              disabled={!currentReflection.trim() || isSubmitting}
              style={{
                background: currentReflection.trim() 
                  ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' 
                  : '#e2e8f0',
                border: 'none',
                borderRadius: '12px',
                padding: '8px 20px',
                fontSize: '14px',
                color: currentReflection.trim() ? 'white' : '#94a3b8',
                cursor: currentReflection.trim() ? 'pointer' : 'not-allowed',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Saving...' : 'Save Reflection'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(ReflectionToggle); 