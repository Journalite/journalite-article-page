'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { StarIcon, ComputerIcon, TheaterIcon, UserIcon, SettingsIcon, WriteIcon } from '@/components/icons/CustomIcons'

interface SidebarProps {
  onClose?: () => void
}

const navigationItems = [
  { 
    label: 'Today', 
    href: '/', 
    icon: 'book',
    isHighlighted: true 
  },
  { 
    label: 'News+', 
    href: '/news-plus', 
    icon: StarIcon,
    isPremium: true 
  },
  { 
    label: 'Sports', 
    href: '/tag/sports', 
    icon: 'sports' 
  },
  { 
    label: 'Politics', 
    href: '/tag/politics', 
    icon: 'politics' 
  },
  { 
    label: 'Technology', 
    href: '/tag/technology', 
    icon: ComputerIcon 
  },
  { 
    label: 'Science', 
    href: '/tag/science', 
    icon: 'science' 
  },
  { 
    label: 'Culture', 
    href: '/tag/culture', 
    icon: TheaterIcon 
  },
  { 
    label: 'Puzzles', 
    href: '/puzzles', 
    icon: 'puzzles' 
  },
]

const userItems = [
  { 
    label: 'My Profile', 
    href: '/my-profile', 
    icon: UserIcon 
  },
  { 
    label: 'Messages', 
    href: '/messages', 
    icon: 'messages' 
  },
  { 
    label: 'My Articles', 
    href: '/my-thoughts', 
    icon: 'articles' 
  },
  { 
    label: 'Compose', 
    href: '/compose', 
    icon: WriteIcon 
  },
  { 
    label: 'Settings', 
    href: '/settings', 
    icon: SettingsIcon 
  },
]

// Helper function to render custom icons
const renderCustomIcon = (iconName: string) => {
  switch (iconName) {
    case 'book':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      );
    case 'sports':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      );
    case 'politics':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18"/>
          <path d="M5 21V7l8-4v18"/>
          <path d="M19 21V11l-6-4"/>
        </svg>
      );
    case 'science':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3v6l-3 3v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6l-3-3V3"/>
          <path d="M12 3h0"/>
          <circle cx="12" cy="16" r="1"/>
        </svg>
      );
    case 'puzzles':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 2v2.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V2h4v4.5c0 .83-.67 1.5-1.5 1.5S13 7.33 13 6.5V6H9v4"/>
          <path d="M15 9h2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H15v4h-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5H15V9z"/>
          <path d="M9 15v2.5c0 .83-.67 1.5-1.5 1.5S6 18.33 6 17.5V15H2v-2.5c0-.83.67-1.5 1.5-1.5S5 11.67 5 12.5V15h4z"/>
        </svg>
      );
    case 'messages':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      );
    case 'articles':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
        </svg>
      );
    default:
      return null;
  }
};

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
          <div className="h-full bg-zinc-900/25 backdrop-blur-xl border-r border-white/8 shadow-xl shadow-black/40">
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
                  <span className="mr-3 text-base">
                    {typeof item.icon === 'string' ? renderCustomIcon(item.icon) : <item.icon size={18} />}
                  </span>
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
                  <span className="mr-3 text-base">
                    {typeof item.icon === 'string' ? renderCustomIcon(item.icon) : <item.icon size={18} />}
                  </span>
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