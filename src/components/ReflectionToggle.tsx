'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  className, 
  style 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [showReflectionPanel, setShowReflectionPanel] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [currentReflection, setCurrentReflection] = useState('');
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  // Device detection with proper responsive breakpoints
  const deviceInfo = useMemo(() => {
    const width = windowDimensions.width;
    const height = windowDimensions.height;
    
    return {
      isMobile: width <= 768,
      isTablet: width > 768 && width <= 1024,
      isDesktop: width > 1024,
      isSmallPhone: width <= 480,
      isLandscape: width > height,
      isIPad11: width >= 820 && width <= 1024,
      // Safe area calculations
      bottomSafeArea: Math.max(100, width <= 768 ? 120 : 80),
      sideMargin: width <= 480 ? 16 : width <= 768 ? 20 : 40
    };
  }, [windowDimensions]);

  // Optimized window resize handler with debouncing
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial set
    updateDimensions();

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Authentication state management
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Default prompts with better variety
  const defaultPrompts = useMemo(() => [
    "How does this make you feel?",
    "What questions does this raise for you?",
    "How does this relate to your own experience?",
    "What would you do differently?",
    "What surprised you most about this?",
    "What's your main takeaway from this?",
    "How might this change your perspective?"
  ], []);

  const getDefaultPrompt = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * defaultPrompts.length);
    return defaultPrompts[randomIndex];
  }, [defaultPrompts]);

  // Initialize prompt
  useEffect(() => {
    if (!currentPrompt) {
      setCurrentPrompt(getDefaultPrompt());
    }
  }, [currentPrompt, getDefaultPrompt]);

  // Optimized toggle handler
  const toggleReflectionPanel = useCallback(() => {
    setIsAnimating(true);
    setShowReflectionPanel(prev => !prev);
    
    setTimeout(() => setIsAnimating(false), 300);
    
    // Close editing mode when panel closes
    if (showReflectionPanel) {
      setIsEditingPrompt(false);
      setCurrentReflection('');
    }
  }, [showReflectionPanel]);

  // Prompt editing handlers
  const handlePromptSave = useCallback(() => {
    setIsEditingPrompt(false);
    if (!currentPrompt.trim()) {
      setCurrentPrompt(getDefaultPrompt());
    }
  }, [currentPrompt, getDefaultPrompt]);

  // Reflection submission with proper error handling
  const handleReflectionSubmit = useCallback(async () => {
    if (!currentReflection.trim() || isSubmitting || !user) return;

    setIsSubmitting(true);
    try {
      // Import dynamically to reduce bundle size
      const { saveReflectionResponse } = await import('@/services/reflectionService');
      
      await saveReflectionResponse(
        articleId,
        `custom_${Date.now()}`,
        currentPrompt,
        currentReflection.trim(),
        0, // Position
        true // Private
      );
      
      // Success feedback
      setCurrentReflection('');
      setShowReflectionPanel(false);
      
      // Optional: Show success toast
      console.log('Reflection saved successfully');
      
    } catch (error) {
      console.error('Error saving reflection:', error);
      // Optional: Show error toast
    } finally {
      setIsSubmitting(false);
    }
  }, [currentReflection, isSubmitting, user, articleId, currentPrompt]);

  // Memoized styles for performance
  const buttonStyles = useMemo(() => ({
    position: 'fixed' as const,
    bottom: deviceInfo.isMobile ? 
      `max(${deviceInfo.bottomSafeArea + 20}px, calc(${deviceInfo.bottomSafeArea}px + env(safe-area-inset-bottom)))` : 
      '40px',
    right: `${deviceInfo.sideMargin}px`,
    width: deviceInfo.isSmallPhone ? '48px' : deviceInfo.isMobile ? '52px' : '56px',
    height: deviceInfo.isSmallPhone ? '48px' : deviceInfo.isMobile ? '52px' : '56px',
    borderRadius: '50%',
    background: showReflectionPanel 
      ? 'linear-gradient(135deg, #1d4ed8, #7c3aed)' 
      : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    border: 'none',
    boxShadow: showReflectionPanel
      ? '0 8px 25px rgba(59, 130, 246, 0.4), 0 0 0 2px rgba(59, 130, 246, 0.2)'
      : '0 6px 20px rgba(59, 130, 246, 0.3)',
    cursor: 'pointer',
    zIndex: 1002, // Above bottom nav and other elements
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isAnimating ? 'scale(1.1)' : showReflectionPanel ? 'scale(1.05)' : 'scale(1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    contain: 'layout style paint', // Performance optimization
    willChange: isAnimating ? 'transform' : 'auto',
    ...style,
  }), [deviceInfo, showReflectionPanel, isAnimating, style]);

  const panelStyles = useMemo(() => ({
    position: 'fixed' as const,
    bottom: deviceInfo.isMobile ? 
      `max(${deviceInfo.bottomSafeArea + 80}px, calc(${deviceInfo.bottomSafeArea + 60}px + env(safe-area-inset-bottom)))` : 
      '110px',
    right: deviceInfo.isMobile ? `${deviceInfo.sideMargin}px` : '40px',
    left: deviceInfo.isMobile ? `${deviceInfo.sideMargin}px` : 'auto',
    width: deviceInfo.isMobile ? 'auto' : '380px',
    maxWidth: deviceInfo.isMobile ? 'none' : '380px',
    maxHeight: deviceInfo.isLandscape && deviceInfo.isMobile ? '60vh' : 
               deviceInfo.isMobile ? '50vh' : '500px',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: deviceInfo.isSmallPhone ? '16px' : deviceInfo.isMobile ? '18px' : '24px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    zIndex: 1001,
    padding: deviceInfo.isSmallPhone ? '16px' : deviceInfo.isMobile ? '18px' : '24px',
    overflow: 'hidden auto',
    contain: 'layout style paint',
    transform: 'translateZ(0)', // GPU acceleration
  }), [deviceInfo]);

  // Don't render if no user
  if (!user) return null;

  return (
    <>
      {/* Floating Reflection Button */}
      <button
        data-reflection-element="floating-button"
        onClick={toggleReflectionPanel}
        className={`reflection-component hw-accelerated ${className || ''}`}
        style={buttonStyles}
        title={showReflectionPanel ? "Close reflection" : "Open reflection"}
        aria-label={showReflectionPanel ? "Close reflection panel" : "Open reflection panel"}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}>
          {showReflectionPanel ? 
            <CloseIcon size={deviceInfo.isSmallPhone ? 12 : 14} color="#ffffff" /> : 
            <WriteIcon size={deviceInfo.isSmallPhone ? 12 : 14} color="#ffffff" />
          }
        </div>
      </button>

      {/* Reflection Panel */}
      {showReflectionPanel && (
        <div 
          className="reflection-component floating-panel hw-accelerated"
          style={panelStyles}
          role="dialog"
          aria-labelledby="reflection-title"
          aria-modal="true"
        >
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
              
              .reflection-panel-enter {
                animation: gentleSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              }
            `}
          </style>
          
          {/* Header */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h3 
              id="reflection-title"
              style={{
                margin: '0 0 12px 0',
                fontSize: deviceInfo.isSmallPhone ? '14px' : '16px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <SparkleIcon size={deviceInfo.isSmallPhone ? 14 : 16} color="#3b82f6" />
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
                  className="mobile-optimized-input"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '2px solid #3b82f6',
                    borderRadius: '12px',
                    background: 'white',
                    fontSize: deviceInfo.isSmallPhone ? '13px' : '14px',
                    textAlign: 'center',
                    outline: 'none'
                  }}
                />
              ) : (
                <button
                  onClick={() => setIsEditingPrompt(true)}
                  style={{
                    background: 'transparent',
                    border: '2px solid transparent',
                    borderRadius: '12px',
                    padding: '8px 12px',
                    fontSize: deviceInfo.isSmallPhone ? '13px' : '14px',
                    color: '#3b82f6',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontWeight: '500',
                    textAlign: 'center',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.background = 'transparent';
                  }}
                  title="Click to edit prompt"
                >
                  {currentPrompt}
                </button>
              )}
            </div>
          </div>

          {/* Reflection Input */}
          <textarea
            value={currentReflection}
            onChange={(e) => setCurrentReflection(e.target.value)}
            placeholder="Share your thoughts..."
            className="mobile-optimized-input reflection-input"
            data-mobile="true"
            style={{
              width: '100%',
              height: deviceInfo.isSmallPhone ? '100px' : '120px',
              padding: '12px',
              border: '2px solid #e2e8f0',
              borderRadius: '12px',
              background: 'white',
              fontSize: deviceInfo.isSmallPhone ? '15px' : '16px', // Prevent zoom on mobile
              fontFamily: 'inherit',
              resize: 'vertical',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              marginBottom: '16px'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              // Ensure the input is visible on mobile
              if (deviceInfo.isMobile) {
                setTimeout(() => {
                  e.target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  });
                }, 100);
              }
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
            gap: '12px',
            flexDirection: deviceInfo.isSmallPhone ? 'column' : 'row'
          }}>
            <button
              onClick={() => setShowReflectionPanel(false)}
              style={{
                background: 'transparent',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                padding: deviceInfo.isSmallPhone ? '12px 20px' : '8px 16px',
                fontSize: deviceInfo.isSmallPhone ? '15px' : '14px',
                color: '#64748b',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                width: deviceInfo.isSmallPhone ? '100%' : 'auto',
                minHeight: '44px' // Touch-friendly
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
                padding: deviceInfo.isSmallPhone ? '12px 20px' : '8px 20px',
                fontSize: deviceInfo.isSmallPhone ? '15px' : '14px',
                color: currentReflection.trim() ? 'white' : '#94a3b8',
                cursor: currentReflection.trim() ? 'pointer' : 'not-allowed',
                fontWeight: '600',
                transition: 'all 0.2s ease',
                opacity: isSubmitting ? 0.7 : 1,
                width: deviceInfo.isSmallPhone ? '100%' : 'auto',
                minHeight: '44px' // Touch-friendly
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