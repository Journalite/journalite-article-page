'use client';

import React, { useState } from 'react';
import styles from '@/styles/home.module.css'; // Assuming home.module.css has search styles

interface SearchComponentProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ 
  onSearch, 
  placeholder = 'Search users, articles, tags...'
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBarContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        {/* You can use an SVG icon here */}
        Search
      </button>
    </form>
  );
};

export default SearchComponent; 