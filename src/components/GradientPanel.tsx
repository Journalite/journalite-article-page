'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { moodThemes } from '@/utils/moodThemes';
import { AutoIcon } from './icons/CustomIcons';

interface GradientPanelProps {
  currentMood: keyof typeof moodThemes;
  isVisible: boolean;
  moodFeatureEnabled: boolean;
}

interface ColorStop {
  id: string;
  color: string;
  x: number; // 0-100
  y: number; // 0-100
  isSelected: boolean;
}

interface ThemeConfig {
  colorStops: ColorStop[];
  opacity: number; // 0-100
  grain: number; // 0-100
  mode: 'auto' | 'light' | 'dark';
}

const GradientPanel: React.FC<GradientPanelProps> = ({
  currentMood,
  isVisible,
  moodFeatureEnabled
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState<string | null>(null);
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    colorStops: [
      { id: '1', color: '#007AFF', x: 30, y: 40, isSelected: true }
    ],
    opacity: 80,
    grain: 30,
    mode: 'auto'
  });

  const canvasRef = useRef<HTMLDivElement>(null);
  const opacitySliderRef = useRef<HTMLDivElement>(null);
  const grainSliderRef = useRef<HTMLDivElement>(null);
  const saveTimeout = useRef<NodeJS.Timeout | null>(null);

  // Generate Journa Color-style gradient from color stops with grain effect
  const generateJournaColorGradient = (config: ThemeConfig) => {
    const { colorStops, opacity, grain } = config;
    const alpha = opacity / 100;
    
    // Generate smooth film grain overlay based on grain value
    const grainIntensity = grain / 100;
    let grainPattern = '';
    
    if (grainIntensity > 0.1) {
      const grainOpacity = grainIntensity * 0.08;
      const grainBlur = Math.max(15, 25 - (grainIntensity * 8));
      
      grainPattern = `
        radial-gradient(ellipse at 12% 18%, rgba(255,255,255,${grainOpacity}) 3px, transparent ${grainBlur}px),
        radial-gradient(ellipse at 87% 23%, rgba(0,0,0,${grainOpacity * 0.7}) 2px, transparent ${grainBlur * 1.2}px),
        radial-gradient(ellipse at 43% 82%, rgba(255,255,255,${grainOpacity * 0.5}) 4px, transparent ${grainBlur * 0.9}px),
      `;
    }
    
    let baseGradient = '';
    
    if (colorStops.length === 1) {
      const stop = colorStops[0];
      baseGradient = `radial-gradient(circle at ${stop.x}% ${stop.y}%, ${stop.color}${Math.round(alpha * 255).toString(16)}, transparent 70%)`;
    } else if (colorStops.length === 2) {
      const [stop1, stop2] = colorStops;
      baseGradient = `
        radial-gradient(circle at ${stop1.x}% ${stop1.y}%, ${stop1.color}${Math.round(alpha * 0.7 * 255).toString(16)}, transparent 50%),
        radial-gradient(circle at ${stop2.x}% ${stop2.y}%, ${stop2.color}${Math.round(alpha * 0.7 * 255).toString(16)}, transparent 50%)
      `;
    } else if (colorStops.length === 3) {
      const [stop1, stop2, stop3] = colorStops;
      baseGradient = `
        radial-gradient(circle at ${stop1.x}% ${stop1.y}%, ${stop1.color}${Math.round(alpha * 0.5 * 255).toString(16)}, transparent 40%),
        radial-gradient(circle at ${stop2.x}% ${stop2.y}%, ${stop2.color}${Math.round(alpha * 0.5 * 255).toString(16)}, transparent 40%),
        radial-gradient(circle at ${stop3.x}% ${stop3.y}%, ${stop3.color}${Math.round(alpha * 0.5 * 255).toString(16)}, transparent 40%)
      `;
    }
    
    return grainPattern ? `${grainPattern}${baseGradient}` : baseGradient || 'transparent';
  };

  // Throttled real-time update function
  const updateThemeRealTime = useMemo(() => {
    let lastUpdate = 0;
    return (config: ThemeConfig) => {
      const now = Date.now();
      if (now - lastUpdate < 100) return;
      lastUpdate = now;
      
      if (!moodFeatureEnabled) return;
      
      const gradientCSS = generateJournaColorGradient(config);
      
      requestAnimationFrame(() => {
        const moodElements = document.querySelectorAll('[data-mood-element]') as NodeListOf<HTMLElement>;
        
        moodElements.forEach(element => {
          if (element) {
            element.style.backgroundImage = gradientCSS;
            element.style.transition = 'background-image 0.2s ease';
          }
        });

        // Clear existing timeout
        if (saveTimeout.current) {
          clearTimeout(saveTimeout.current);
        }
        saveTimeout.current = setTimeout(() => {
          localStorage.setItem('journaColorThemeConfig', JSON.stringify(config));
        }, 500);
      });
    };
  }, [moodFeatureEnabled, generateJournaColorGradient]);

  // Handle color stop dragging
  const handleColorStopStart = (e: React.MouseEvent | React.TouchEvent, stopId: string) => {
    e.preventDefault();
    setIsDragging(stopId);
    
    const newConfig = {
      ...themeConfig,
      colorStops: themeConfig.colorStops.map(stop => ({
        ...stop,
        isSelected: stop.id === stopId
      }))
    };
    setThemeConfig(newConfig);
  };

  const handlePointerMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    let clientX: number, clientY: number;
    
    if (e instanceof MouseEvent) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }
    
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    
    const newConfig = {
      ...themeConfig,
      colorStops: themeConfig.colorStops.map(stop =>
        stop.id === isDragging ? { ...stop, x, y } : stop
      )
    };
    
    setThemeConfig(newConfig);
    updateThemeRealTime(newConfig);
  };

  const handlePointerEnd = () => {
    setIsDragging(null);
  };

  // Add color stop
  const addColorStop = () => {
    if (themeConfig.colorStops.length >= 3) return;
    
    const newStop: ColorStop = {
      id: Date.now().toString(),
      color: '#FF6B6B',
      x: 50 + (themeConfig.colorStops.length * 15),
      y: 50 + (themeConfig.colorStops.length * 10),
      isSelected: false
    };
    
    const newConfig = {
      ...themeConfig,
      colorStops: [...themeConfig.colorStops, newStop]
    };
    
    setThemeConfig(newConfig);
    updateThemeRealTime(newConfig);
  };

  // Remove color stop
  const removeColorStop = () => {
    if (themeConfig.colorStops.length <= 1) return;
    
    const newConfig = {
      ...themeConfig,
      colorStops: themeConfig.colorStops.slice(0, -1)
    };
    
    setThemeConfig(newConfig);
    updateThemeRealTime(newConfig);
  };

  // Change selected color
  const changeSelectedColor = (color: string) => {
    const selectedStop = themeConfig.colorStops.find(stop => stop.isSelected);
    if (!selectedStop) return;
    
    const newConfig = {
      ...themeConfig,
      colorStops: themeConfig.colorStops.map(stop => 
        stop.isSelected ? { ...stop, color } : stop
      )
    };
    
    setThemeConfig(newConfig);
    updateThemeRealTime(newConfig);
  };

  // Event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handlePointerMove as EventListener);
      document.addEventListener('mouseup', handlePointerEnd);
      document.addEventListener('touchmove', handlePointerMove as EventListener, { passive: false });
      document.addEventListener('touchend', handlePointerEnd);
      
      return () => {
        document.removeEventListener('mousemove', handlePointerMove as EventListener);
        document.removeEventListener('mouseup', handlePointerEnd);
        document.removeEventListener('touchmove', handlePointerMove as EventListener);
        document.removeEventListener('touchend', handlePointerEnd);
      };
    }
  }, [isDragging, themeConfig]);

  // Load saved configuration
  useEffect(() => {
    const saved = localStorage.getItem('journaColorThemeConfig');
    if (saved) {
      try {
        const config = JSON.parse(saved);
        setThemeConfig(config);
        updateThemeRealTime(config);
      } catch (e) {
        console.error('Failed to load theme config:', e);
      }
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeout.current) {
        clearTimeout(saveTimeout.current);
      }
    };
  }, []);

  if (!isVisible || !moodFeatureEnabled) return null;

  const currentGradient = generateJournaColorGradient(themeConfig);
  const selectedStop = themeConfig.colorStops.find(stop => stop.isSelected) || themeConfig.colorStops[0];
  
  const presetColors = [
    '#FFFFFF', '#FFB3D9', '#B19CD9', '#FF6B6B', 
    '#FF8E53', '#FFD93D', '#6BCF7F', '#4ECDC4', '#45B7D1'
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '40px',
      left: '40px',
      zIndex: 1001,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: 'none',
          background: currentGradient || '#007AFF',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          boxShadow: isExpanded
            ? '0 8px 25px rgba(0, 122, 255, 0.4), 0 0 0 2px rgba(0, 122, 255, 0.2)'
            : '0 6px 20px rgba(0, 122, 255, 0.3)',
          transform: isExpanded ? 'scale(1.05) rotate(45deg)' : 'scale(1) rotate(0deg)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)'
        }}
        title="Journa Color Editor"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="3" fill="white"/>
          <circle cx="16" cy="12" r="2.5" fill="white"/>
          <circle cx="12" cy="18" r="2" fill="white"/>
        </svg>
      </button>

      {/* Expanded panel */}
      {isExpanded && (
        <div style={{
          position: 'fixed',
          bottom: '110px',
          left: '40px',
          width: '380px',
          maxHeight: '500px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '24px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
          zIndex: 999,
          overflow: 'hidden'
        }}>
          {/* Theme mode toggles */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            {[
              { mode: 'auto' as const, icon: AutoIcon, title: 'Auto' },
              { mode: 'light' as const, icon: '☀️', title: 'Light' },
              { mode: 'dark' as const, icon: '🌙', title: 'Dark' }
            ].map(({ mode, icon, title }) => (
              <button
                key={mode}
                onClick={() => {
                  const newConfig = { ...themeConfig, mode };
                  setThemeConfig(newConfig);
                  updateThemeRealTime(newConfig);
                }}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  border: themeConfig.mode === mode ? '2px solid #007AFF' : '2px solid rgba(0,0,0,0.1)',
                  background: themeConfig.mode === mode ? 'rgba(0, 122, 255, 0.1)' : 'rgba(0,0,0,0.05)',
                  fontSize: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title={title}
              >
                {mode === 'auto' ? <AutoIcon size={20} color={themeConfig.mode === mode ? '#007AFF' : '#666'} /> : icon}
              </button>
            ))}
          </div>

          {/* Interactive color canvas */}
          <div 
            ref={canvasRef}
            style={{
              width: '100%',
              height: '180px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #f0f0f0, #e8e8e8)',
              position: 'relative',
              cursor: 'grab',
              marginBottom: '1.5rem',
              border: '1px solid rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            {/* Draggable color stops */}
            {themeConfig.colorStops.map((stop) => (
              <div
                key={stop.id}
                onMouseDown={(e) => handleColorStopStart(e, stop.id)}
                onTouchStart={(e) => handleColorStopStart(e, stop.id)}
                style={{
                  position: 'absolute',
                  top: `${stop.y}%`,
                  left: `${stop.x}%`,
                  transform: 'translate(-50%, -50%)',
                  width: stop.isSelected ? '24px' : '20px',
                  height: stop.isSelected ? '24px' : '20px',
                  borderRadius: '50%',
                  background: stop.color,
                  border: stop.isSelected ? '3px solid white' : '2px solid white',
                  boxShadow: stop.isSelected ? '0 4px 12px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.3)',
                  cursor: isDragging === stop.id ? 'grabbing' : 'grab',
                  transition: isDragging === stop.id ? 'none' : 'all 0.2s ease',
                  zIndex: stop.isSelected ? 10 : 5
                }}
              />
            ))}
          </div>

          {/* Add/Remove controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <button
              onClick={removeColorStop}
              disabled={themeConfig.colorStops.length <= 1}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.2)',
                background: themeConfig.colorStops.length <= 1 ? 'rgba(0,0,0,0.05)' : 'white',
                fontSize: '18px',
                cursor: themeConfig.colorStops.length <= 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: themeConfig.colorStops.length <= 1 ? 0.5 : 1
              }}
            >
              -
            </button>
            
            <span style={{
              fontSize: '14px', 
              color: '#666',
              minWidth: '80px',
              textAlign: 'center'
            }}>
              {themeConfig.colorStops.length}/3 colors
            </span>
            
            <button
              onClick={addColorStop}
              disabled={themeConfig.colorStops.length >= 3}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.2)',
                background: themeConfig.colorStops.length >= 3 ? 'rgba(0,0,0,0.05)' : 'white',
                fontSize: '18px',
                cursor: themeConfig.colorStops.length >= 3 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: themeConfig.colorStops.length >= 3 ? 0.5 : 1
              }}
            >
              +
            </button>
          </div>

          {/* Color preset row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {presetColors.map((color, index) => (
              <button
                key={index}
                onClick={() => changeSelectedColor(color)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: selectedStop.color === color ? '3px solid #007AFF' : '2px solid rgba(0,0,0,0.1)',
                  background: color,
                  cursor: 'pointer',
                  transform: selectedStop.color === color ? 'scale(1.15)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GradientPanel; 