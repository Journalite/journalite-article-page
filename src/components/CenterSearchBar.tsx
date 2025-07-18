'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchUsers, UserProfile } from '@/services/userService';
import { getUserGradient, getInitials } from '@/utils/avatarUtils';
import styles from '@/styles/home.module.css';

const CenterSearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add click outside listener to close results
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current && 
        !resultsRef.current.contains(event.target as Node) &&
        searchInputRef.current && 
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.trim().length >= 2) {
        setIsSearching(true);
        try {
          const results = await searchUsers(searchTerm);
          setSearchResults(results);
          setShowResults(true);
        } catch (error) {
          console.error('Error searching users:', error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (searchTerm.trim().length >= 2 && searchResults.length > 0) {
      setShowResults(true);
    }
  };

  const handleBlur = () => {
    // Delay hiding focus state to allow for clicks on results
    setTimeout(() => {
      if (!showResults) {
        setIsFocused(false);
      }
    }, 150);
  };

  return (
    <div className={styles.centerSearchContainer}>
      <div className={`${styles.centerSearchWrapper} ${isFocused ? styles.focused : ''}`}>
        <div className={styles.searchIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21L16.65 16.65"></path>
          </svg>
        </div>
        <input
          type="text"
          ref={searchInputRef}
          className={styles.centerSearchInput}
          placeholder="Search for writers, ideas, or topics..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isSearching && (
          <div className={styles.searchLoadingIcon}>
            <div className={styles.loadingSpinner}></div>
          </div>
        )}
      </div>
      
      {showResults && searchResults.length > 0 && (
        <div ref={resultsRef} className={styles.centerSearchResults}>
          {searchResults.map((user) => (
            <Link 
              key={user.uid} 
              href={`/user/${encodeURIComponent(user.username.toLowerCase())}`}
              className={styles.centerSearchResultItem}
              onClick={() => {
                setShowResults(false);
                setIsFocused(false);
              }}
            >
              <div 
                className={styles.resultUserAvatar}
                style={{
                  background: `linear-gradient(135deg, ${getUserGradient(user.uid, user.username)})`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                }}
              >
                {getInitials(user.firstName, user.lastName)}
              </div>
              <div className={styles.resultUserInfo}>
                <div className={styles.resultUserName}>{user.firstName} {user.lastName}</div>
                <div className={styles.resultUserUsername}>@{user.username}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {showResults && searchTerm.trim().length >= 2 && searchResults.length === 0 && !isSearching && (
        <div className={styles.centerSearchResults}>
          <div className={styles.centerSearchNoResults}>
            No users found matching "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
};

export default CenterSearchBar; 