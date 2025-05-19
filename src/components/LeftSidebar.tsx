'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';
import SearchBar from './SearchBar';

interface LeftSidebarProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isAuthenticated,
  handleLogout,
  toggleSidebar,
  isSidebarCollapsed
}) => (
  <aside className={`${styles['left-sidebar']} ${isSidebarCollapsed ? styles['collapsed'] : ''}`}>
    <div className={styles['sidebar-header']}>
      <div className={styles.logo}>Journalite</div>
      <button
        className={styles['toggle-button']}
        onClick={toggleSidebar}
        aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isSidebarCollapsed ? "→" : "←"}
      </button>
    </div>
    
    {/* Add search bar */}
    <div className={styles.sidebarSearch}>
      <SearchBar />
    </div>
    
    <nav className={styles['vertical-nav']}>
      {isAuthenticated ? (
        // Navigation for authenticated users
        <>
          <Link 
            href="/" 
            className={`${styles['nav-link']} ${styles['nav-home']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Home</span>
          </Link>
          <Link 
            href="/my-thoughts" 
            className={`${styles['nav-link']} ${styles['nav-thoughts']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>My Thoughts</span>
          </Link>
          <Link 
            href="/create-article" 
            className={`${styles['nav-link']} ${styles['nav-create']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Create Article</span>
          </Link>
          <Link 
            href="/explore" 
            className={`${styles['nav-link']} ${styles['nav-explore']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Explore</span>
          </Link>
          <Link 
            href="/my-profile" 
            className={`${styles['nav-link']} ${styles['nav-profile']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>My Profile</span>
          </Link>
          <Link 
            href="/settings" 
            className={`${styles['nav-link']} ${styles['nav-settings']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Settings</span>
          </Link>
          <Link 
            href="/notifications" 
            className={`${styles['nav-link']} ${styles['nav-notifications']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Notifications</span>
          </Link>
          <Link 
            href="https://journalite.app/" 
            className={`${styles['nav-link']} ${styles['nav-learn-more']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Learn More</span>
          </Link>
          <button 
            onClick={handleLogout}
            className={`${styles['nav-link']} ${styles['nav-logout']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Log out</span>
          </button>
        </>
      ) : (
        // Navigation for non-authenticated users
        <>
          <Link 
            href="/" 
            className={`${styles['nav-link']} ${styles['nav-home']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Home</span>
          </Link>
          <Link 
            href="/login" 
            className={`${styles['nav-link']} ${styles['nav-login']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Login</span>
          </Link>
          <Link 
            href="https://journalite.app/" 
            className={`${styles['nav-link']} ${styles['nav-learn-more']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Learn More</span>
          </Link>
          <Link 
            href="/plans" 
            className={`${styles['nav-link']} ${styles['nav-plans']}`}
          >
            <span className={styles['nav-icon']}>•</span>
            <span className={styles['nav-text']}>Plans</span>
          </Link>
        </>
      )}
    </nav>
  </aside>
);

export default LeftSidebar; 