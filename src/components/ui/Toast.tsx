'use client'

import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

interface ToastContextType {
  showToast: (message: string, type?: Toast['type'], duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = (message: string, type: Toast['type'] = 'info', duration = 5000) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: Toast = { id, message, type, duration }
    
    setToasts(prev => [...prev, newToast])
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  )
}

interface ToastContainerProps {
  toasts: Toast[]
  onRemove: (id: string) => void
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map(toast => (
          <ToastComponent
            key={toast.id}
            toast={toast}
            onRemove={() => onRemove(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

interface ToastComponentProps {
  toast: Toast
  onRemove: () => void
}

const ToastComponent: React.FC<ToastComponentProps> = ({ toast, onRemove }) => {
  const getToastStyles = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white'
      case 'error':
        return 'bg-red-500 text-white'
      case 'warning':
        return 'bg-yellow-500 text-black'
      case 'info':
      default:
        return 'bg-blue-500 text-white'
    }
  }

  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return '✅'
      case 'error':
        return '❌'
      case 'warning':
        return '⚠️'
      case 'info':
      default:
        return 'ℹ️'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.3 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm
        max-w-md min-w-[200px] cursor-pointer transition-all duration-200
        hover:scale-105 ${getToastStyles(toast.type)}
      `}
      onClick={onRemove}
    >
      <span className="text-lg">{getIcon(toast.type)}</span>
      <span className="flex-1 text-sm font-medium">{toast.message}</span>
      <button
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        className="text-lg opacity-70 hover:opacity-100 transition-opacity"
      >
        ×
      </button>
    </motion.div>
  )
}

// Helper function to replace alert() calls
export const showNotification = (message: string, type?: Toast['type']) => {
  // This will work if ToastProvider is available in the component tree
  // For cases where it's not available, fall back to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${type?.toUpperCase() || 'INFO'}] ${message}`)
  }
  
  // In production, you might want to integrate with a notification service
  // or show a simple browser notification
  if (process.env.NODE_ENV === 'production' && 'Notification' in window) {
    if (Notification.permission === 'granted') {
      new Notification(message)
    }
  }
} 