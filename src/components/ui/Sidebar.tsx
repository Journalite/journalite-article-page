'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

interface SidebarProps {
  onClose?: () => void
}

const navigationItems = [
  { 
    label: 'Today', 
    href: '/', 
    icon: '📖',
    isHighlighted: true 
  },
  { 
    label: 'News+', 
    href: '/news-plus', 
    icon: '⭐',
    isPremium: true 
  },
  { 
    label: 'Sports', 
    href: '/tag/sports', 
    icon: '⚽' 
  },
  { 
    label: 'Politics', 
    href: '/tag/politics', 
    icon: '🏛️' 
  },
  { 
    label: 'Technology', 
    href: '/tag/technology', 
    icon: '💻' 
  },
  { 
    label: 'Science', 
    href: '/tag/science', 
    icon: '🔬' 
  },
  { 
    label: 'Culture', 
    href: '/tag/culture', 
    icon: '🎭' 
  },
  { 
    label: 'Puzzles', 
    href: '/puzzles', 
    icon: '🧩' 
  },
]

const userItems = [
  { 
    label: 'My Profile', 
    href: '/my-profile', 
    icon: '👤' 
  },
  { 
    label: 'My Articles', 
    href: '/my-thoughts', 
    icon: '📝' 
  },
  { 
    label: 'Compose', 
    href: '/compose', 
    icon: '✍️' 
  },
  { 
    label: 'Settings', 
    href: '/settings', 
    icon: '⚙️' 
  },
]

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="h-full bg-zinc-900/30 backdrop-blur-xl border-r border-white/10 shadow-2xl shadow-black/60">
      <div className="flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 px-6 py-4 border-b border-white/20 dark:border-gray-700/30">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
              <div className="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-gradient-warm">
                Journalite
              </span>
            </Link>
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto scrollbar-none px-3 py-4">
          {/* Main Navigation */}
          <div className="space-y-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200
                    ${isActive(item.href) 
                      ? 'nav-item-active text-accent-warm-start' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:text-gray-900 dark:hover:text-white'
                    }
                    ${item.isHighlighted ? 'bg-gradient-to-r from-accent-warm-start/5 to-transparent' : ''}
                  `}
                >
                  <span className="mr-3 text-base">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                  {item.isPremium && (
                    <span className="text-xs bg-gradient-warm text-white px-2 py-0.5 rounded-full font-medium">
                      Plus
                    </span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200/50 dark:border-gray-700/50" />

          {/* User Navigation */}
          <div className="space-y-1">
            <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Personal
            </h3>
            {userItems.map((item, index) => (
              <motion.div
                key={item.href}
                custom={navigationItems.length + index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200
                    ${isActive(item.href) 
                      ? 'nav-item-active text-accent-warm-start' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
                >
                  <span className="mr-3 text-base">{item.icon}</span>
                  <span className="flex-1">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t border-white/20 dark:border-gray-700/30">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            <p>&copy; 2024 Journalite</p>
            <p className="mt-1">Your trusted journalism source</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 