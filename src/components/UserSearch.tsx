'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchUsers, UserProfile } from '@/services/userService';
import styles from '@/styles/home.module.css';

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
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
    if (searchTerm.trim().length >= 2 && searchResults.length > 0) {
      setShowResults(true);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          ref={searchInputRef}
          className={styles.searchInput}
          placeholder="Search users by name or username..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleFocus}
        />
        {isSearching && <div className={styles.searchLoading}>Searching...</div>}
      </div>
      
      {showResults && searchResults.length > 0 && (
        <div ref={resultsRef} className={styles.searchResults}>
          {searchResults.map((user) => (
            <Link 
              key={user.uid} 
              href={`/user/${encodeURIComponent(user.username.toLowerCase())}`}
              className={styles.searchResultItem}
              onClick={() => setShowResults(false)}
            >
              <div className={styles.userAvatar}>
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.firstName} {user.lastName}</div>
                <div className={styles.userUsername}>@{user.username}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {showResults && searchTerm.trim().length >= 2 && searchResults.length === 0 && (
        <div className={styles.searchResults}>
          <div className={styles.noResults}>No users found matching "{searchTerm}"</div>
        </div>
      )}
    </div>
  );
};

export default UserSearch; 