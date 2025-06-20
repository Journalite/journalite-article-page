'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/home.module.css';

interface MobileBottomNavProps {
  isAuthenticated: boolean;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ isAuthenticated }) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className={styles['bottom-navigation']}>
      {isAuthenticated ? (
        // Navigation for authenticated users
        <>
          <Link 
            href="/" 
            className={`${styles['bottom-nav-item']} ${isActive('/') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Home</span>
          </Link>
          
          <Link 
            href="/create-article" 
            className={`${styles['bottom-nav-item']} ${isActive('/create-article') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/create-article') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Write</span>
          </Link>
          
          <Link 
            href="/messages" 
            className={`${styles['bottom-nav-item']} ${isActive('/messages') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/messages') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Messages</span>
          </Link>
          
          <Link 
            href="/explore" 
            className={`${styles['bottom-nav-item']} ${isActive('/explore') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/explore') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Explore</span>
          </Link>
        </>
      ) : (
        // Navigation for unauthenticated users
        <>
          <Link 
            href="/" 
            className={`${styles['bottom-nav-item']} ${isActive('/') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Home</span>
          </Link>
          
          <Link 
            href="/explore" 
            className={`${styles['bottom-nav-item']} ${isActive('/explore') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/explore') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Explore</span>
          </Link>
          
          <Link 
            href="/register" 
            className={`${styles['bottom-nav-item']} ${isActive('/register') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/register') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Sign Up</span>
          </Link>
          
          <Link 
            href="/login" 
            className={`${styles['bottom-nav-item']} ${isActive('/login') ? styles.active : ''}`}
          >
            <div 
              className={styles['bottom-nav-icon']}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isActive('/login') ? '%232563EB' : '%236B7280'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'/%3E%3C/svg%3E")`
              }}
            />
            <span className={styles['bottom-nav-text']}>Login</span>
          </Link>
        </>
      )}
    </nav>
  );
};

export default MobileBottomNav; 