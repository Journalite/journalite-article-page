// Production-safe logging utility
// Only logs in development mode, suppressed in production

export const logger = {
    log: (...args: any[]) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(...args);
        }
    },

    error: (...args: any[]) => {
        if (process.env.NODE_ENV === 'development') {
            console.error(...args);
        }
    },

    warn: (...args: any[]) => {
        if (process.env.NODE_ENV === 'development') {
            console.warn(...args);
        }
    },

    info: (...args: any[]) => {
        if (process.env.NODE_ENV === 'development') {
            console.info(...args);
        }
    },

    debug: (...args: any[]) => {
        if (process.env.NODE_ENV === 'development') {
            console.debug(...args);
        }
    }
};

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