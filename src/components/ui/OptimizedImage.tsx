'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { performanceLogger } from '@/utils/logger'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  fill?: boolean
  sizes?: string
  quality?: number
  onLoad?: () => void
  onError?: () => void
  fallbackSrc?: string
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  quality = 75,
  onLoad,
  onError,
  fallbackSrc = '/images/placeholder.jpg'
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority) // Load immediately if priority
  const imgRef = useRef<HTMLDivElement>(null)
  const loadStartTime = useRef<number>(0)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px' // Start loading 50px before the image comes into view
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  // Performance monitoring
  useEffect(() => {
    if (isInView && !isLoading) {
      loadStartTime.current = performance.now()
    }
  }, [isInView, isLoading])

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
    
    // Log performance metrics
    if (loadStartTime.current > 0) {
      const loadTime = performance.now() - loadStartTime.current
      performanceLogger.mark(`image-load-${alt}`)
      
      // Performance logging handled by performanceLogger
    }
    
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    
    // Try fallback image if available
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc)
      setHasError(false)
      return
    }
    
    onError?.()
  }

  // Generate blur placeholder for better UX
  const generateBlurDataURL = (w: number = 10, h: number = 10) => {
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#f3f4f6' // Gray-100
      ctx.fillRect(0, 0, w, h)
    }
    return canvas.toDataURL()
  }

  // Don't render anything until in view (unless priority)
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-100 animate-pulse ${className}`}
        style={{ width, height }}
      />
    )
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      
      {hasError ? (
        <div 
          className="flex items-center justify-center bg-gray-100 text-gray-400 rounded"
          style={{ width, height }}
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
      ) : (
        <Image
          src={imgSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL || (typeof window !== 'undefined' ? generateBlurDataURL() : undefined)}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
    </div>
  )
}

export default OptimizedImage

// Preload critical images
export const preloadImage = (src: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  }
}

// Utility to check if image format is supported
export const supportsWebP = () => {
  if (typeof window === 'undefined') return false
  
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}

// Get optimal image format
export const getOptimalImageSrc = (src: string, format?: 'webp' | 'avif') => {
  if (typeof window === 'undefined') return src
  
  // If already optimized format, return as-is
  if (src.includes('.webp') || src.includes('.avif')) {
    return src
  }
  
  // For external URLs, try to append format query
  if (src.startsWith('http')) {
    const url = new URL(src)
    if (format && supportsWebP()) {
      url.searchParams.set('format', format)
    }
    return url.toString()
  }
  
  return src
} 