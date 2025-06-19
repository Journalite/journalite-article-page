"use client";

import React from 'react';
import styles from './EventsBar.module.css';

const EventsBar: React.FC = () => {
  return (
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
        justifyContent: 'center'
      }}
    >
      <div className={styles.eventsText}>
        Events
      </div>
    </div>
  );
};

export default EventsBar; 