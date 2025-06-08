'use client'

import React, { useState, useEffect, useRef } from 'react';
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

  // Generate Journa Color-style gradient from color stops with grain effect
  const generateJournaColorGradient = (config: ThemeConfig) => {
    const { colorStops, opacity, grain } = config;
    const alpha = opacity / 100;
    
    // Generate smooth film grain overlay based on grain value (much smoother)
    const grainIntensity = grain / 100;
    let grainPattern = '';
    
    if (grainIntensity > 0.1) {
      // Much lower opacity and larger, softer patterns for smooth grain
      const grainOpacity = grainIntensity * 0.08; // Much more subtle
      const grainBlur = Math.max(15, 25 - (grainIntensity * 8)); // Larger, softer spots
      
      // Create smooth film grain with larger, softer patterns
      grainPattern = `
        radial-gradient(ellipse at 12% 18%, rgba(255,255,255,${grainOpacity}) 3px, transparent ${grainBlur}px),
        radial-gradient(ellipse at 87% 23%, rgba(0,0,0,${grainOpacity * 0.7}) 2px, transparent ${grainBlur * 1.2}px),
        radial-gradient(ellipse at 43% 82%, rgba(255,255,255,${grainOpacity * 0.5}) 4px, transparent ${grainBlur * 0.9}px),
        radial-gradient(ellipse at 71% 64%, rgba(0,0,0,${grainOpacity * 0.6}) 2.5px, transparent ${grainBlur * 1.1}px),
        radial-gradient(ellipse at 29% 57%, rgba(255,255,255,${grainOpacity * 0.4}) 3.5px, transparent ${grainBlur * 1.3}px),
        radial-gradient(ellipse at 93% 11%, rgba(0,0,0,${grainOpacity * 0.3}) 2px, transparent ${grainBlur * 0.8}px),
        radial-gradient(ellipse at 6% 89%, rgba(255,255,255,${grainOpacity * 0.6}) 3px, transparent ${grainBlur * 1.4}px),
        radial-gradient(ellipse at 78% 91%, rgba(0,0,0,${grainOpacity * 0.4}) 2.5px, transparent ${grainBlur * 1.1}px),
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

  // Generate clearer gradient for bars and UI elements (more visible)
  const generateClearerGradient = (config: ThemeConfig) => {
    const { colorStops, opacity, grain } = config;
    const alpha = Math.max(0.7, opacity / 100); // Higher minimum opacity for bars
    
    // Very light, smooth grain for UI elements so it doesn't interfere with readability
    const grainIntensity = grain / 100;
    let lightGrainPattern = '';
    
    if (grainIntensity > 0.3) {
      const grainOpacity = grainIntensity * 0.04; // Even lighter grain for UI elements
      lightGrainPattern = `
        radial-gradient(ellipse at 25% 25%, rgba(255,255,255,${grainOpacity}) 4px, transparent 20px),
        radial-gradient(ellipse at 75% 75%, rgba(0,0,0,${grainOpacity * 0.5}) 3px, transparent 25px),
        radial-gradient(ellipse at 50% 15%, rgba(255,255,255,${grainOpacity * 0.7}) 3.5px, transparent 22px),
      `;
    }
    
    let clearBaseGradient = '';
    
    if (colorStops.length === 1) {
      const stop = colorStops[0];
      clearBaseGradient = `linear-gradient(135deg, ${stop.color}${Math.round(alpha * 255).toString(16)}, ${stop.color}${Math.round(alpha * 0.8 * 255).toString(16)})`;
    } else if (colorStops.length === 2) {
      const [stop1, stop2] = colorStops;
      clearBaseGradient = `linear-gradient(135deg, ${stop1.color}${Math.round(alpha * 255).toString(16)}, ${stop2.color}${Math.round(alpha * 255).toString(16)})`;
    } else if (colorStops.length === 3) {
      const [stop1, stop2, stop3] = colorStops;
      clearBaseGradient = `linear-gradient(135deg, ${stop1.color}${Math.round(alpha * 255).toString(16)}, ${stop2.color}${Math.round(alpha * 0.9 * 255).toString(16)}, ${stop3.color}${Math.round(alpha * 255).toString(16)})`;
    }
    
    return lightGrainPattern ? `${lightGrainPattern}${clearBaseGradient}` : clearBaseGradient || 'transparent';
  };

  // Real-time update function (fixed)
  const updateThemeRealTime = (config: ThemeConfig) => {
    if (!moodFeatureEnabled) return;
    
    const gradientCSS = generateJournaColorGradient(config);
    
    // Create a more visible/clearer version for bars and UI elements
    const clearerGradientCSS = generateClearerGradient(config);
    
    // Update all mood elements immediately
    const moodElements = document.querySelectorAll('[data-mood-element]') as NodeListOf<HTMLElement>;
    moodElements.forEach(element => {
      element.style.backgroundImage = gradientCSS;
      element.style.transition = 'background-image 0.2s ease';
    });

    // Update mood headers
    const moodHeaders = document.querySelectorAll('[data-mood-header]') as NodeListOf<HTMLElement>;
    moodHeaders.forEach(element => {
      element.style.backgroundImage = gradientCSS;
      element.style.transition = 'background-image 0.2s ease';
    });

    // Update the specific toggle/feature bar using data attribute
    console.log('🎨 Looking for toggle bar to update...');
    
    const toggleBar = document.querySelector('[data-toggle-bar="true"]') as HTMLElement;
    if (toggleBar) {
      console.log('🎨 Found toggle bar with data attribute:', toggleBar);
      toggleBar.style.backgroundImage = clearerGradientCSS;
      toggleBar.style.transition = 'background-image 0.2s ease';
      toggleBar.style.backgroundSize = 'cover';
      toggleBar.style.backgroundPosition = 'center';
    } else {
      console.log('🎨 Toggle bar with data attribute not found, trying fallback...');
      
      // Fallback: Look for elements with specific content
      const allElements = document.querySelectorAll('div') as NodeListOf<HTMLElement>;
      allElements.forEach(element => {
        const text = element.textContent || '';
        if (text.includes('Atmosphere') && text.includes('Enhanced features') && 
            text.includes('Mood Background') && text.includes('Interactive Reflections')) {
          console.log('🎨 Found toggle bar via text content:', element);
          element.style.backgroundImage = clearerGradientCSS;
          element.style.transition = 'background-image 0.2s ease';
          element.style.backgroundSize = 'cover';
          element.style.backgroundPosition = 'center';
        }
      });
    }

    // Update reflection/mood bars with clearer gradient
    const reflectionBars = document.querySelectorAll('[data-reflection-bar], [data-mood-bar]') as NodeListOf<HTMLElement>;
    reflectionBars.forEach(element => {
      element.style.backgroundImage = clearerGradientCSS;
      element.style.transition = 'background-image 0.2s ease';
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center';
    });

    // Update any progress bars or status indicators
    const progressBars = document.querySelectorAll('.progress-bar, .status-bar, .mood-indicator') as NodeListOf<HTMLElement>;
    progressBars.forEach(element => {
      element.style.backgroundImage = clearerGradientCSS;
      element.style.transition = 'background-image 0.2s ease';
    });

    // Save configuration
    localStorage.setItem('journaColorThemeConfig', JSON.stringify(config));
  };

  // Handle color stop dragging
  const handleColorStopMouseDown = (e: React.MouseEvent, stopId: string) => {
    e.preventDefault();
    setIsDragging(stopId);
    
    // Select this color stop
    const newConfig = {
      ...themeConfig,
      colorStops: themeConfig.colorStops.map(stop => ({
        ...stop,
        isSelected: stop.id === stopId
      }))
    };
    setThemeConfig(newConfig);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(5, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100));
    
    const newConfig = {
      ...themeConfig,
      colorStops: themeConfig.colorStops.map(stop => 
        stop.id === isDragging ? { ...stop, x, y } : stop
      )
    };
    
    setThemeConfig(newConfig);
    updateThemeRealTime(newConfig);
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  // Handle opacity slider (squiggly line)
  const handleOpacityMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging('opacity');
    handleOpacityMouseMove(e);
  };

  const handleOpacityMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!opacitySliderRef.current) return;
    
    const rect = opacitySliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    
    const newConfig = { ...themeConfig, opacity: x };
    setThemeConfig(newConfig);
    updateThemeRealTime(newConfig);
  };

  // Handle grain rotary knob with tactile detents (like real knob)
  const handleGrainMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging('grain');
    handleGrainMouseMove(e);
  };

  const handleGrainMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!grainSliderRef.current) return;
    
    const rect = grainSliderRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate angle from center
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    
    // Normalize to 0-360 degrees, starting from top (270 degrees offset)
    angle = (angle + 270) % 360;
    if (angle < 0) angle += 360;
    
    // Create detents every 15 degrees (24 steps total) for tactile feel
    const detentSize = 15; // degrees per detent
    const rawGrain = (angle / 360) * 100;
    const detentIndex = Math.round(rawGrain / (100 / (360 / detentSize)));
    const snappedGrain = Math.max(0, Math.min(100, (detentIndex * (100 / (360 / detentSize)))));
    
    // Add haptic feedback simulation by slightly varying the snapped value
    const finalGrain = Math.round(snappedGrain);
    
    if (Math.abs(finalGrain - themeConfig.grain) > 0.5) {
      // Simulate tactile feedback with a tiny vibration-like effect
      if (navigator.vibrate) {
        navigator.vibrate(10); // Very short vibration on mobile
      }
      
      const newConfig = { ...themeConfig, grain: finalGrain };
      setThemeConfig(newConfig);
      updateThemeRealTime(newConfig);
    }
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

  // Mouse event listeners
  useEffect(() => {
    if (isDragging) {
      const handleMove = (e: MouseEvent) => {
        if (isDragging === 'opacity') {
          handleOpacityMouseMove(e);
        } else if (isDragging === 'grain') {
          handleGrainMouseMove(e);
        } else {
          handleMouseMove(e);
        }
      };
      
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleMouseUp);
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
      bottom: window.innerWidth <= 768 ? '20px' : '40px',
      left: window.innerWidth <= 768 ? '20px' : '40px',
      zIndex: 1000,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: window.innerWidth <= 768 ? '48px' : '56px',
          height: window.innerWidth <= 768 ? '48px' : '56px',
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
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7"/>
            </linearGradient>
          </defs>
          <circle cx="8" cy="8" r="3" fill="url(#iconGradient)"/>
          <circle cx="16" cy="12" r="2.5" fill="url(#iconGradient)"/>
          <circle cx="12" cy="18" r="2" fill="url(#iconGradient)"/>
          <path 
            d="M8 8L16 12M16 12L12 18" 
            stroke="url(#iconGradient)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Expanded Journa Color-style panel */}
      {isExpanded && (
        <>
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
                    <div style={{
            position: 'fixed',
            bottom: window.innerWidth <= 768 ? '80px' : '110px',
            left: window.innerWidth <= 768 ? '20px' : '40px',
            width: window.innerWidth <= 768 ? '340px' : '380px',
            maxHeight: window.innerWidth <= 768 ? '400px' : '500px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: window.innerWidth <= 768 ? '16px' : '24px',
            padding: window.innerWidth <= 768 ? '16px' : '24px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
            zIndex: 999,
            animation: 'gentleSlideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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

          {/* Large interactive color area - Journa Color's main canvas */}
          <div 
            ref={canvasRef}
            style={{
              width: '100%',
              height: '180px',
              borderRadius: '16px',
              background: `
                radial-gradient(circle at 50% 50%, rgba(100, 100, 100, 0.1) 0%, transparent 70%),
                repeating-linear-gradient(0deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px),
                repeating-linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px),
                linear-gradient(135deg, #f0f0f0, #e8e8e8)
              `,
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
                onMouseDown={(e) => handleColorStopMouseDown(e, stop.id)}
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

          {/* Add/Remove color stops */}
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
              −
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

          {/* Bottom controls - Squiggly line (opacity) and Dotted circle (grain) */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Squiggly line - Opacity control */}
            <div 
              ref={opacitySliderRef}
              onMouseDown={handleOpacityMouseDown}
              style={{
                flex: 1,
                height: '40px',
                background: 'rgba(0,0,0,0.05)',
                borderRadius: '20px',
                position: 'relative',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '12px',
                paddingRight: '12px'
              }}
            >
              {/* Squiggly pattern background */}
              <div style={{
                position: 'absolute',
                left: '12px',
                right: '12px',
                height: '4px',
                background: `repeating-linear-gradient(to right, #ccc 0px, #ccc 3px, transparent 3px, transparent 6px)`,
                borderRadius: '2px'
              }} />
              
              {/* Opacity slider handle */}
              <div style={{
                position: 'absolute',
                left: `${12 + (themeConfig.opacity / 100) * (100 - 24)}%`,
                width: '16px',
                height: '16px',
                background: 'white',
                borderRadius: '50%',
                border: '2px solid #007AFF',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                transform: 'translateX(-50%)'
              }} />
            </div>

                         {/* Rotary knob - Grain control */}
             <div 
               ref={grainSliderRef}
               onMouseDown={handleGrainMouseDown}
               style={{
                 width: '60px',
                 height: '60px',
                 borderRadius: '50%',
                 background: 'linear-gradient(145deg, #f0f0f0, #d9d9d9)',
                 position: 'relative',
                 cursor: isDragging === 'grain' ? 'grabbing' : 'grab',
                 border: '1px solid rgba(0,0,0,0.1)',
                 boxShadow: isDragging === 'grain' ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)',
                 transition: isDragging === 'grain' ? 'none' : 'all 0.2s ease'
               }}
             >
               {/* Knob track marks */}
               {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                 <div
                   key={i}
                   style={{
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     width: '2px',
                     height: '6px',
                     background: 'rgba(0,0,0,0.3)',
                     borderRadius: '1px',
                     transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-22px)`,
                     transformOrigin: 'center'
                   }}
                 />
               ))}
               
               {/* Knob center */}
               <div style={{
                 position: 'absolute',
                 top: '50%',
                 left: '50%',
                 width: '40px',
                 height: '40px',
                 borderRadius: '50%',
                 background: 'linear-gradient(145deg, #ffffff, #e8e8e8)',
                 transform: 'translate(-50%, -50%)',
                 border: '1px solid rgba(0,0,0,0.1)',
                 boxShadow: isDragging === 'grain' ? 'inset 0 1px 3px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.1)'
               }}>
                 {/* Knob indicator pointer */}
                 <div style={{
                   position: 'absolute',
                   top: '6px',
                   left: '50%',
                   width: '3px',
                   height: '12px',
                   background: '#007AFF',
                   borderRadius: '1.5px',
                   transform: `translateX(-50%) rotate(${(themeConfig.grain / 100) * 360}deg)`,
                   transformOrigin: '50% 14px',
                   transition: isDragging === 'grain' ? 'none' : 'transform 0.2s ease'
                 }} />
                 
                 {/* Center dot */}
                 <div style={{
                   position: 'absolute',
                   top: '50%',
                   left: '50%',
                   width: '4px',
                   height: '4px',
                   background: '#007AFF',
                   borderRadius: '50%',
                   transform: 'translate(-50%, -50%)'
                 }} />
               </div>
               
               {/* Grain value indicator */}
               <div style={{
                 position: 'absolute',
                 bottom: '-20px',
                 left: '50%',
                 transform: 'translateX(-50%)',
                 fontSize: '10px',
                 color: '#666',
                 fontWeight: '500'
               }}>
                 {Math.round(themeConfig.grain)}%
               </div>
             </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default GradientPanel; 