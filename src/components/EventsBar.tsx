"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './EventsBar.module.css';

const EventsBar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show mobile widget on screens smaller than 768px
  if (windowWidth <= 768) {
    return (
      <Link href="/events" passHref>
        <div className={styles.mobileEventsWidget}>
          <span className={styles.mobileEventsText}>Events</span>
        </div>
      </Link>
    );
  }

  // Desktop version
  return (
    <Link href="/events" passHref>
      <div 
        className={styles.eventsBar}
        style={{
          position: 'fixed',
          top: '50%',
          right: '30px',
          transform: 'translateY(-50%)',
          width: '60px',
          height: '240px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '28px',
          zIndex: 1001,
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <div className={styles.eventsText}>
          Events
        </div>
      </div>
    </Link>
  );
};

export default EventsBar; 