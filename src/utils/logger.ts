// Secure logger utility for production
const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
    // Always log errors and warnings
    error: (...args: any[]) => {
        console.error(...args);
    },

    warn: (...args: any[]) => {
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
    }
};

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