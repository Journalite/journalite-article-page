'use client'

import React, { useState, useEffect } from 'react'

const GlobalBackground: React.FC = () => {
  const [currentBackground, setCurrentBackground] = useState('wallpaper-abstract')

  useEffect(() => {
    // Load saved background preference
    const savedBg = localStorage.getItem('user-background') || 'wallpaper-abstract'
    setCurrentBackground(savedBg)
    
    // Emit background type for text color adaptation
    emitBackgroundType(savedBg)
  }, [])

  useEffect(() => {
    // Listen for background changes
    const handleStorageChange = () => {
      const savedBg = localStorage.getItem('user-background') || 'wallpaper-abstract'
      setCurrentBackground(savedBg)
      emitBackgroundType(savedBg)
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Custom event for same-tab updates
    window.addEventListener('backgroundChanged', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('backgroundChanged', handleStorageChange)
    }
  }, [])

  const emitBackgroundType = (bgType: string) => {
    // Determine if background is light or dark for text contrast
    const backgroundInfo = {
      type: bgType,
      isDark: ['wallpaper-abstract', 'wallpaper-vibrant', 'wallpaper-mountain'].includes(bgType),
      isLight: ['transparent', 'subtle-gradient', 'dots'].includes(bgType)
    }
    
    // Emit custom event with background info
    window.dispatchEvent(new CustomEvent('backgroundTypeChange', { 
      detail: backgroundInfo 
    }))
  }

  const getBackgroundClass = () => {
    switch (currentBackground) {
      case 'transparent':
        return '' // No background - shows desktop
      case 'subtle-gradient':
        return 'bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20'
      case 'dots':
        return 'bg-gray-100' // Base + pattern will be added via style
      case 'wallpaper-mountain':
        return 'bg-[url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4")] bg-cover bg-center'
      case 'wallpaper-abstract':
        return 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
      case 'wallpaper-vibrant':
        return 'bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500'
      default:
        return 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
    }
  }

  const getBackgroundStyle = () => {
    if (currentBackground === 'dots') {
      return {
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }
    }
    return {}
  }

  return (
    <div 
      className={`fixed inset-0 -z-10 ${getBackgroundClass()}`}
      style={getBackgroundStyle()}
    />
  )
}

export default GlobalBackground 