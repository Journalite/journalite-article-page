'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RightOverlayProps {
  children: React.ReactNode
}

const RightOverlay: React.FC<RightOverlayProps> = ({ children }) => {
  return (
          <div className="h-full bg-white/15 dark:bg-zinc-900/25 backdrop-blur-xl border-l border-white/8">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-none p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default RightOverlay 