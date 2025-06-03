'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BackgroundControlsProps {
  isOpen: boolean
  onClose: () => void
}

const BackgroundControls: React.FC<BackgroundControlsProps> = ({ isOpen, onClose }) => {
  const [currentBackground, setCurrentBackground] = useState('transparent')
  
  useEffect(() => {
    // Load saved background preference
    const savedBg = localStorage.getItem('user-background') || 'wallpaper-abstract'
    setCurrentBackground(savedBg)
    applyBackground(savedBg)
  }, [])

  const applyBackground = (bgType: string) => {
    // Save preference
    localStorage.setItem('user-background', bgType)
    setCurrentBackground(bgType)
    
    // Trigger custom event for same-tab updates
    window.dispatchEvent(new Event('backgroundChanged'))
  }

  const backgroundOptions = [
    { id: 'wallpaper-abstract', name: 'Abstract Gradient', description: 'Colorful abstract background (Default)' },
    { id: 'wallpaper-vibrant', name: 'Vibrant Colors', description: 'Bright colorful gradient' },
    { id: 'wallpaper-mountain', name: 'Mountain Scene', description: 'Beautiful mountain wallpaper' },
    { id: 'subtle-gradient', name: 'Subtle Gradient', description: 'Light animated gradient' },
    { id: 'dots', name: 'Dot Pattern', description: 'Subtle dot pattern' },
    { id: 'transparent', name: 'Transparent', description: 'Show desktop wallpaper' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-20 right-4 w-80 apple-card p-6 z-50 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="headline-medium">Background</h3>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="body-medium text-gray-600 dark:text-gray-400 mb-6">
              Customize what appears behind the frosted glass interface
            </p>
            
            <div className="space-y-3">
              {backgroundOptions.map((option) => (
                <motion.button
                  key={option.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => applyBackground(option.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                    currentBackground === option.id
                      ? 'bg-accent-warm-start/10 border-2 border-accent-warm-start/30'
                      : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {option.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {option.description}
                      </div>
                    </div>
                    {currentBackground === option.id && (
                      <div className="w-5 h-5 bg-accent-warm-start rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-50/50 dark:bg-gray-800/50 rounded-xl">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium mb-1">💡 Pro Tip:</p>
                <p>Choose "Transparent" to show your actual desktop wallpaper through the glass for the most authentic Apple News effect!</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BackgroundControls 