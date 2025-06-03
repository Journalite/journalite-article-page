'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navigationItems = [
  { 
    label: 'Today', 
    href: '/', 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 7V3a2 2 0 012-2h4a2 2 0 012 2v4" />
      </svg>
    )
  },
  { 
    label: 'Explore', 
    href: '/explore', 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  { 
    label: 'Compose', 
    href: '/compose', 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="12 4v16m8-8H4" />
      </svg>
    )
  },
  { 
    label: 'My Articles', 
    href: '/my-thoughts', 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  { 
    label: 'Profile', 
    href: '/my-profile', 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
]

const BottomNav: React.FC = () => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-white/20 dark:bg-zinc-900/30 backdrop-blur-xl border-t border-white/10">
      <div className="flex items-center justify-around px-2 py-2 pb-safe">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            <Link
              href={item.href}
              className={`
                flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-200 min-w-[60px]
                ${isActive(item.href) 
                  ? 'text-accent-warm-start bg-accent-warm-start/10' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
                }
              `}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center"
              >
                {item.icon}
              </motion.div>
              <span className="text-xs font-medium mt-1 leading-none">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  )
}

export default BottomNav 