'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/styles/home.module.css';
import MessageNotificationBell from './MessageNotificationBell';

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
}) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsProfileDropdownOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Main Navigation - 5 Items Liquid Glass */}
      <aside className={styles['left-sidebar']}>
        {/* 5 Core Navigation Items */}
        <nav className={styles['vertical-nav']}>
          {isAuthenticated ? (
            // Navigation for authenticated users: Home, Create Article, My Thoughts, Trending, News
            <>
              <Link 
                href="/" 
                className={`${styles['nav-link']} ${styles['nav-home']} ${isActive('/') ? styles.active : ''}`}
                title="Home"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="/create-article" 
                className={`${styles['nav-link']} ${styles['nav-create']} ${isActive('/create-article') ? styles.active : ''}`}
                title="Create Article"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="/my-thoughts" 
                className={`${styles['nav-link']} ${styles['nav-thoughts']} ${isActive('/my-thoughts') ? styles.active : ''}`}
                title="My Thoughts"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="/explore" 
                className={`${styles['nav-link']} ${styles['nav-explore']} ${isActive('/explore') ? styles.active : ''}`}
                title="Explore"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="/news" 
                className={`${styles['nav-link']} ${styles['nav-news']} ${isActive('/news') ? styles.active : ''}`}
                title="News"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
            </>
          ) : (
            // Navigation for unauthenticated users: Home, Explore, Learn More, Sign In, Login
            <>
              <Link 
                href="/" 
                className={`${styles['nav-link']} ${styles['nav-home']} ${isActive('/') ? styles.active : ''}`}
                title="Home"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="/explore" 
                className={`${styles['nav-link']} ${styles['nav-explore']} ${isActive('/explore') ? styles.active : ''}`}
                title="Explore"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="https://oriteria.app/" 
                className={`${styles['nav-link']} ${styles['nav-learn']}`}
                title="Learn More"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="/register" 
                className={`${styles['nav-link']} ${styles['nav-signin']} ${isActive('/register') ? styles.active : ''}`}
                title="Sign Up"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
              
              <Link 
                href="/login" 
                className={`${styles['nav-link']} ${styles['nav-login']} ${isActive('/login') ? styles.active : ''}`}
                title="Login"
              >
                <span className={styles['nav-icon']}></span>
              </Link>
            </>
          )}
        </nav>
      </aside>

      {/* Top Right Header Area - Notifications and Profile */}
      {isAuthenticated && (
        <>
          {/* Notification Bells Container */}
          <div className="message-bell-fixed-container" style={{
            position: 'fixed',
            top: '30px',
            right: '90px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div 
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
              className="message-bell-container"
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(-1px)';
                target.style.background = 'rgba(255, 255, 255, 0.09)';
                target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'translateY(0)';
                target.style.background = 'rgba(255, 255, 255, 0.06)';
                target.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
            >
              <style jsx>{`
                .message-bell-container :global(button),
                .message-bell-container :global(a) {
                  padding: 4px !important;
                  background: transparent !important;
                  border-radius: 0 !important;
                  position: relative !important;
                  min-width: 44px !important;
                  min-height: 44px !important;
                  display: flex !important;
                  align-items: center !important;
                  justify-content: center !important;
                }
                .message-bell-container :global(button:hover),
                .message-bell-container :global(a:hover) {
                  background: transparent !important;
                }
                .message-bell-container :global(span) {
                  position: absolute !important;
                  top: -4px !important;
                  right: -4px !important;
                  z-index: 20 !important;
                  transform: translate(50%, -50%) !important;
                  min-width: 18px !important;
                  height: 18px !important;
                  font-size: 11px !important;
                  border-radius: 9px !important;
                  padding: 0 4px !important;
                }
              `}</style>
              <div style={{ 
                transform: 'scale(1.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <MessageNotificationBell />
              </div>
            </div>
          </div>

          {/* Profile Button */}
          <button
            ref={buttonRef}
            className={styles['profile-button']}
            onClick={toggleProfileDropdown}
            title="Profile & Settings"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Profile Dropdown */}
          <div 
            ref={dropdownRef}
            className={`${styles['profile-dropdown']} ${isProfileDropdownOpen ? styles.open : ''}`}
          >
            <Link 
              href="/my-profile" 
              className={styles['profile-dropdown-item']}
              onClick={handleDropdownItemClick}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" fill="currentColor"/>
              </svg>
              My Profile
            </Link>

            <Link 
              href="/messages" 
              className={styles['profile-dropdown-item']}
              onClick={handleDropdownItemClick}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Messages
            </Link>

            <Link 
              href="/my-thoughts/reflections" 
              className={styles['profile-dropdown-item']}
              onClick={handleDropdownItemClick}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Reflections
            </Link>

            <Link 
              href="/settings" 
              className={styles['profile-dropdown-item']}
              onClick={handleDropdownItemClick}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Settings
            </Link>

            <Link 
              href="/notifications" 
              className={styles['profile-dropdown-item']}
              onClick={handleDropdownItemClick}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Notifications
            </Link>

            <div className={styles['profile-dropdown-separator']}></div>

            <button 
              onClick={() => {
                handleDropdownItemClick();
                handleLogout();
              }}
              className={styles['profile-dropdown-item']}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3-3 3-3m0 0-3-3m3 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Log out
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default LeftSidebar; 