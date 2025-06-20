'use client'

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ReflectionRoom.module.css';

interface ReflectionRoomButtonProps {
  topic: string;
  unreadCount: number;
  isOpen: boolean;
  onClick: () => void;
}

const ReflectionRoomButton: React.FC<ReflectionRoomButtonProps> = ({
  topic,
  unreadCount,
  isOpen,
  onClick
}) => {
  const truncatedTopic = topic.length > 60 ? `${topic.substring(0, 60)}...` : topic;

  return (
    <motion.div
      className={styles.reflectionSearchBar}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className={`${styles.reflectionSearchWrapper} ${isOpen ? styles.focused : ''}`}>
        {/* Chat Icon */}
        <div className={styles.reflectionIcon}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <path d="M8 10h8"/>
            <path d="M8 14h6"/>
          </svg>
        </div>

        {/* Topic Display */}
        <div className={styles.reflectionText}>
          <span className={styles.reflectionLabel}>Reflect on:</span>
          <span className={styles.reflectionTopic}>"{truncatedTopic}"</span>
        </div>

        {/* Join Indicator */}
        <div className={styles.reflectionJoin}>
          {unreadCount > 0 && (
            <div className={styles.reflectionUnread}>
              {unreadCount}
            </div>
          )}
          <span className={styles.reflectionJoinText}>Join discussion</span>
          <svg 
            className={styles.reflectionArrow}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ReflectionRoomButton; 