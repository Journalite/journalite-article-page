'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';

const TopLeftLogo: React.FC = () => {
  return (
    <Link href="/" className={styles['top-left-logo']}>
      Journalite
    </Link>
  );
};

export default TopLeftLogo; 