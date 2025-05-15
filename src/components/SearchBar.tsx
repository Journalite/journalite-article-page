'use client';

import React from 'react';
import UserSearch from './UserSearch';
import styles from '@/styles/home.module.css';

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBarContainer}>
      <UserSearch />
    </div>
  );
};

export default SearchBar; 