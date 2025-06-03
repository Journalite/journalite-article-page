'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import RightOverlay from './RightOverlay'
import BottomNav from './BottomNav'
import GlobalBackground from './GlobalBackground'

interface AppShellProps {
  children: React.ReactNode
  showRightOverlay?: boolean
  rightOverlayContent?: React.ReactNode
}

// Hook for background-adaptive styling
const useBackgroundAdaptive = () => {
  const [backgroundInfo, setBackgroundInfo] = useState({
    type: 'wallpaper-abstract',
    isDark: true,
    isLight: false
  })

  useEffect(() => {
    const handleBackgroundChange = (event: CustomEvent) => {
      setBackgroundInfo(event.detail)
    }

    window.addEventListener('backgroundTypeChange', handleBackgroundChange as EventListener)
    
    return () => {
      window.removeEventListener('backgroundTypeChange', handleBackgroundChange as EventListener)
    }
  }, [])

  return backgroundInfo
}

const AppShell: React.FC<AppShellProps> = ({ 
  children, 
  showRightOverlay = false,
  rightOverlayContent 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )
  const backgroundInfo = useBackgroundAdaptive()

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close sidebar when clicking outside on mobile
  const closeSidebar = () => setIsSidebarOpen(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  // Adaptive text colors based on background
  const getAdaptiveTextClasses = () => {
    if (backgroundInfo.isDark) {
      return 'text-white/90 [&_h1]:text-white [&_h2]:text-white/95 [&_h3]:text-white/95 [&_p]:text-white/85 [&_span]:text-white/80'
    } else {
      return 'text-gray-900 [&_h1]:text-gray-900 [&_h2]:text-gray-800 [&_h3]:text-gray-800 [&_p]:text-gray-700 [&_span]:text-gray-600'
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Global Background Layer */}
      <GlobalBackground />
      
      {/* Sidebar - Desktop persistent, Mobile overlay */}
      {isDesktop ? (
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
      ) : (
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Mobile backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={closeSidebar}
              />
              
              {/* Mobile sidebar */}
              <motion.div
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed left-0 top-0 bottom-0 w-64 z-50"
              >
                <Sidebar onClose={closeSidebar} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <TopBar 
          onMenuClick={toggleSidebar}
          showMenuButton={!isDesktop}
        />

        {/* Main content with right overlay */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main content */}
          <main className="flex-1 overflow-y-auto scrollbar-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`min-h-full bg-white/20 dark:bg-zinc-900/30 backdrop-blur-xl m-4 rounded-2xl border border-white/10 shadow-2xl shadow-black/20 ${getAdaptiveTextClasses()}`}
            >
              <div className="p-6">
                {children}
              </div>
            </motion.div>
          </main>

          {/* Right overlay - Desktop only when content provided */}
          {showRightOverlay && rightOverlayContent && isDesktop && (
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-56 flex-shrink-0"
            >
              <RightOverlay>
                {rightOverlayContent}
              </RightOverlay>
            </motion.aside>
          )}
        </div>
      </div>

      {/* Bottom navigation - Mobile only */}
      {isMobile && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-30"
        >
          <BottomNav />
        </motion.div>
      )}
    </div>
  )
}

export default AppShell 