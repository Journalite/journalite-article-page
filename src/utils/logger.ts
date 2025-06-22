// Secure logger utility for production
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// Enhanced logger for production safety
export const logger = {
    // Always log errors and warnings
    error: (...args: any[]) => {
        console.error(...args);

        // In production, also send to error monitoring service if available
        if (isProduction && typeof window !== 'undefined') {
            // You can integrate with services like Sentry, LogRocket, etc.
            // Example: Sentry.captureException(new Error(args.join(' ')));
        }
    },

    warn: (...args: any[]) => {
        // Warnings should be visible in production for monitoring
        console.warn(...args);
    },

    // Only log info, debug, and general logs in development
    info: (...args: any[]) => {
        if (isDevelopment) {
            console.info(...args);
        }
    },

    log: (...args: any[]) => {
        if (isDevelopment) {
            console.log(...args);
        }
    },

    debug: (...args: any[]) => {
        if (isDevelopment) {
            console.debug(...args);
        }
    },

    // Conditional logging based on feature flags
    feature: (feature: string, ...args: any[]) => {
        if (isDevelopment) {
            console.log(`[${feature}]`, ...args);
        }
    },

    // Performance logging
    time: (label: string) => {
        if (isDevelopment) {
            console.time(label);
        }
    },

    timeEnd: (label: string) => {
        if (isDevelopment) {
            console.timeEnd(label);
        }
    },

    // API logging with sanitization
    api: (endpoint: string, data?: any) => {
        if (isDevelopment) {
            const sanitizedData = data ? sanitizeLogData(data) : undefined;
            console.log(`[API] ${endpoint}`, sanitizedData);
        }
    },

    // Group logging for better organization
    group: (label: string) => {
        if (isDevelopment) {
            console.group(label);
        }
    },

    groupEnd: () => {
        if (isDevelopment) {
            console.groupEnd();
        }
    }
};

// Development-only console methods
export const devLogger = {
    log: (...args: any[]) => {
        if (isDevelopment) {
            console.log(...args);
        }
    },

    table: (data: any) => {
        if (isDevelopment) {
            console.table(data);
        }
    },

    trace: (...args: any[]) => {
        if (isDevelopment) {
            console.trace(...args);
        }
    }
};

// Performance monitoring for production
export const performanceLogger = {
    mark: (name: string) => {
        if (typeof window !== 'undefined' && window.performance && window.performance.mark) {
            window.performance.mark(name);
        }
    },

    measure: (name: string, startMark: string, endMark: string) => {
        if (typeof window !== 'undefined' && window.performance && window.performance.measure) {
            try {
                window.performance.measure(name, startMark, endMark);

                if (isDevelopment) {
                    const measure = window.performance.getEntriesByName(name)[0];
                    console.log(`⚡ ${name}: ${measure.duration.toFixed(2)}ms`);
                }
            } catch (error) {
                // Silently fail if marks don't exist
            }
        }
    }
};

// User action tracking for analytics
export const analyticsLogger = {
    track: (event: string, properties?: Record<string, any>) => {
        if (isProduction && typeof window !== 'undefined') {
            // Integrate with analytics services like Google Analytics, Mixpanel, etc.
            // Example: gtag('event', event, properties);
            // Example: mixpanel.track(event, properties);
        }

        if (isDevelopment) {
            console.log(`📊 Analytics: ${event}`, properties);
        }
    }
};

// Error boundary logger
export const errorBoundaryLogger = {
    logError: (error: Error, errorInfo: any) => {
        console.error('🚨 Error Boundary Caught:', error, errorInfo);

        if (isProduction) {
            // Send to error monitoring service
            // Example: Sentry.captureException(error, { extra: errorInfo });
        }
    }
};

// Network request logger
export const networkLogger = {
    request: (url: string, options?: RequestInit) => {
        if (isDevelopment) {
            console.log(`🌐 Request: ${options?.method || 'GET'} ${url}`);
        }
    },

    response: (url: string, status: number, duration?: number) => {
        if (isDevelopment) {
            const statusEmoji = status >= 200 && status < 300 ? '✅' : '❌';
            const durationText = duration ? ` (${duration}ms)` : '';
            console.log(`${statusEmoji} Response: ${status} ${url}${durationText}`);
        }
    },

    error: (url: string, error: any) => {
        console.error(`🚨 Network Error: ${url}`, error);
    }
};

// Suppress console in production (fallback)
if (isProduction) {
    // Override console methods in production
    const originalConsoleLog = console.log;
    const originalConsoleInfo = console.info;
    const originalConsoleDebug = console.debug;

    console.log = (...args) => {
        // Only log if it's an error or warning
        if (args.some(arg => typeof arg === 'string' && (arg.includes('error') || arg.includes('warning')))) {
            originalConsoleLog(...args);
        }
    };

    console.info = (...args) => {
        // Suppress info logs in production
    };

    console.debug = (...args) => {
        // Suppress debug logs in production
    };
}

// Sanitize sensitive data from logs
function sanitizeLogData(data: any): any {
    if (typeof data !== 'object' || data === null) {
        return data;
    }

    const sensitiveKeys = ['password', 'token', 'key', 'secret', 'auth', 'credential'];
    const sanitized = { ...data };

    for (const key in sanitized) {
        if (sensitiveKeys.some(sensitiveKey =>
            key.toLowerCase().includes(sensitiveKey.toLowerCase())
        )) {
            sanitized[key] = '[REDACTED]';
        } else if (typeof sanitized[key] === 'object') {
            sanitized[key] = sanitizeLogData(sanitized[key]);
        }
    }

    return sanitized;
}

export default logger;

// Suppress React DevTools message in production
export const suppressReactDevtools = () => {
    if (process.env.NODE_ENV === 'production') {
        // Override console methods to filter out React DevTools messages
        const originalConsoleLog = console.log;
        console.log = (...args) => {
            const message = args.join(' ');
            if (message.includes('Download the React DevTools')) {
                return; // Suppress this message
            }
            originalConsoleLog.apply(console, args);
        };
    }
}; 