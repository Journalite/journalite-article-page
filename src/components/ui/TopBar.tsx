'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BackgroundControls from './BackgroundControls'

interface TopBarProps {
  onMenuClick: () => void
  showMenuButton?: boolean
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick, showMenuButton = true }) => {
  const [isBackgroundControlsOpen, setIsBackgroundControlsOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-shrink-0 h-14 bg-white/15 dark:bg-zinc-900/25 backdrop-blur-xl border-b border-white/8"
      >
        <div className="flex items-center justify-between h-full px-4 lg:px-6">
          {/* Left side - Menu button + Title */}
          <div className="flex items-center space-x-4">
            {showMenuButton && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onMenuClick}
                className="p-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors lg:hidden"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            )}
            
            {/* Page title or breadcrumb */}
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Today
              </h1>
            </div>
          </div>

          {/* Center - Search (desktop only) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent-warm-start/50 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-2">
            {/* Background Controls */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBackgroundControlsOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors"
              aria-label="Background settings"
              title="Customize background"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.button>

            {/* Search button (mobile only) */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>

            {/* Notifications */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors relative"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5V9.586a6 6 0 10-12 0V12l-5 5h5m7 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-medium">
                3
              </span>
            </motion.button>

            {/* User profile */}
            <Link href="/my-profile">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">U</span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Profile
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Background Controls Modal */}
      <BackgroundControls 
        isOpen={isBackgroundControlsOpen}
        onClose={() => setIsBackgroundControlsOpen(false)}
      />
    </>
  )
}

export default TopBar 