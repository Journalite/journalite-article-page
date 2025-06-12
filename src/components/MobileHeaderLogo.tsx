'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';

const MobileHeaderLogo: React.FC = () => {
  return (
    <Link href="/" className={styles['mobile-header-logo']}>
      Journalite
    </Link>
  );
};

export default MobileHeaderLogo; 