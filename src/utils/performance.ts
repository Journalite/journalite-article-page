// Performance optimization utilities
import { lazy, ComponentType } from 'react';

// Lazy loading with retry mechanism
export function lazyWithRetry<T>(
    factory: () => Promise<{ default: T }>,
    name: string = 'Component'
) {
    return factory().catch((error) => {
        console.error(`Failed to load ${name}:`, error);
        throw error; // Re-throw to let React's error boundary handle it
    });
}

// Debounce function for search inputs
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), wait);
        }
    };
}

// Image lazy loading with intersection observer
export function createImageObserver(
    callback: (entry: IntersectionObserverEntry) => void
) {
    if (typeof window === 'undefined') return null;

    return new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        },
        {
            rootMargin: '50px',
            threshold: 0.1,
        }
    );
}

// Preload critical resources
export function preloadResource(href: string, as: string) {
    if (typeof window === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
}

// Cache implementation for API responses
class SimpleCache<T> {
    private cache = new Map<string, { data: T; timestamp: number }>();
    private ttl: number;

    constructor(ttlMinutes: number = 5) {
        this.ttl = ttlMinutes * 60 * 1000; // Convert to milliseconds
    }

    set(key: string, data: T): void {
        this.cache.set(key, { data, timestamp: Date.now() });
    }

    get(key: string): T | null {
        const entry = this.cache.get(key);
        if (!entry) return null;

        if (Date.now() - entry.timestamp > this.ttl) {
            this.cache.delete(key);
            return null;
        }

        return entry.data;
    }

    clear(): void {
        this.cache.clear();
    }

    size(): number {
        return this.cache.size;
    }
}

export const apiCache = new SimpleCache(5); // 5 minute cache

// Performance monitoring
export function measurePerformance(name: string, fn: () => void) {
    if (typeof window === 'undefined') return fn();

    const start = performance.now();
    const result = fn();
    const end = performance.now();

    if (process.env.NODE_ENV === 'development') {
        console.log(`Performance [${name}]: ${end - start}ms`);
    }

    return result;
}

// Bundle size optimization helpers
export const dynamicImports = {
    // Lazy load heavy components
    Editor: () => import('@/components/Editor'),
    ArticleComposer: () => import('@/components/ArticleComposer'),
    ReflectionRoom: () => import('@/components/ReflectionRoom'),

    // Lazy load services
    guardianService: () => import('@/services/guardianService'),
    newsService: () => import('@/services/newsService'),

    // Lazy load utilities
    sentiment: () => import('sentiment'),
    dateUtils: () => import('date-fns'),
};

// Memory management
export function cleanupUnusedResources() {
    // Clear API cache if it gets too large
    if (apiCache.size() > 100) {
        apiCache.clear();
    }

    // Force garbage collection in development
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        // @ts-ignore
        if (window.gc) {
            // @ts-ignore
            window.gc();
        }
    }
}

// Optimize images
export function getOptimizedImageUrl(
    url: string,
    width?: number,
    height?: number,
    quality: number = 80
): string {
    if (!url) return '';

    // For Unsplash images, add optimization parameters
    if (url.includes('unsplash.com')) {
        const params = new URLSearchParams();
        if (width) params.set('w', width.toString());
        if (height) params.set('h', height.toString());
        params.set('q', quality.toString());
        params.set('fm', 'webp');

        return `${url}?${params.toString()}`;
    }

    return url;
}

// Service worker registration for caching
export function registerServiceWorker() {
    if (
        typeof window !== 'undefined' &&
        'serviceWorker' in navigator &&
        process.env.NODE_ENV === 'production'
    ) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

export default {
    lazyWithRetry,
    debounce,
    throttle,
    createImageObserver,
    preloadResource,
    apiCache,
    measurePerformance,
    dynamicImports,
    cleanupUnusedResources,
    getOptimizedImageUrl,
    registerServiceWorker,
}; 