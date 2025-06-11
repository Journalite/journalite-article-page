'use client'

import { useEffect } from 'react';

export function ConsoleSuppressionScript() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Suppress React DevTools message and other development warnings
      const originalConsoleLog = console.log;
      const originalConsoleWarn = console.warn;
      const originalConsoleInfo = console.info;

      console.log = (...args) => {
        const message = String(args[0] || '');
        
        // Suppress common development messages
        if (
          message.includes('Download the React DevTools') ||
          message.includes('react-dom-client.development.js') ||
          message.includes('Fast Refresh') ||
          message.includes('HMR') ||
          message.includes('[turbopack]')
        ) {
          return;
        }
        
        originalConsoleLog.apply(console, args);
      };

      console.warn = (...args) => {
        const message = String(args[0] || '');
        
        // Suppress development warnings
        if (
          message.includes('DevTools') ||
          message.includes('development') ||
          message.includes('[turbopack]')
        ) {
          return;
        }
        
        originalConsoleWarn.apply(console, args);
      };

      console.info = (...args) => {
        const message = String(args[0] || '');
        
        // Suppress development info messages
        if (
          message.includes('DevTools') ||
          message.includes('[turbopack]')
        ) {
          return;
        }
        
        originalConsoleInfo.apply(console, args);
      };
    }
  }, []);

  return null; // This component doesn't render anything
} 