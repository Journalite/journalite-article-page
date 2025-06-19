'use client'

import React, { useState, useEffect } from 'react';
import { auth } from '@/firebase/clientApp';
import { presenceService, ActiveUser } from '../services/presenceService';
import styles from './ActiveReaders.module.css';

interface ActiveReadersProps {
    articleId: string;
}

const ActiveReaders: React.FC<ActiveReadersProps> = ({ articleId }) => {
    const [activeUsers, setActiveUsers] = useState<ActiveUser[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication status
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!articleId || !isAuthenticated) return;

        // Start presence tracking for current user
        presenceService.startPresence(articleId);

        // Subscribe to active users
        const unsubscribe = presenceService.subscribeToActiveUsers(articleId, (users) => {
            // Limit to first 5 users
            const limitedUsers = users.slice(0, 5);
            setActiveUsers(limitedUsers);
            setIsVisible(limitedUsers.length > 0);
        });

        // Cleanup on unmount
        return () => {
            unsubscribe();
            presenceService.stopPresence(articleId);
        };
    }, [articleId, isAuthenticated]);

    // Don't show anything if user is not authenticated
    if (!isAuthenticated) {
        return null;
    }

    // Only show if there are active users
    if (!isVisible || activeUsers.length === 0) {
        return null;
    }



    return (
        <div className={styles.activeReadersContainer}>
            <div className={styles.avatarStack}>
                {activeUsers.map((user, index) => (
                    <div
                        key={user.uid}
                        className={styles.avatar}
                        style={{
                            backgroundColor: getColorForUser(index),
                            zIndex: 5 - index, // Reverse z-index so first user is on top
                            left: `${index * 20}px`, // Overlap by 20px
                        }}
                        title={getDisplayName(user)}
                    >
                        {getInitials(user)}
                    </div>
                ))}
                {activeUsers.length > 0 && (
                    <div 
                        className={styles.readingIndicator}
                        style={{
                            left: `${(activeUsers.length - 1) * 20 + 24}px`, // Position after last avatar
                        }}
                    >
                        <div className={styles.pulse}></div>
                    </div>
                )}
            </div>
            <div className={styles.tooltip}>
                {activeUsers.length === 1 ? (
                    <span>{getDisplayName(activeUsers[0])} is reading this</span>
                ) : (
                    <span>{activeUsers.length} people are reading this</span>
                )}
            </div>
        </div>
    );
};

// Helper functions moved outside component to avoid re-creating them
const getInitials = (user: ActiveUser): string => {
    if (user.profile?.firstName && user.profile?.lastName) {
        return `${user.profile.firstName[0]}${user.profile.lastName[0]}`.toUpperCase();
    }
    if (user.firstName && user.lastName) {
        return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user.username) {
        return user.username.slice(0, 2).toUpperCase();
    }
    return '?';
};

const getDisplayName = (user: ActiveUser): string => {
    if (user.profile?.firstName && user.profile?.lastName) {
        return `${user.profile.firstName} ${user.profile.lastName}`;
    }
    if (user.firstName && user.lastName) {
        return `${user.firstName} ${user.lastName}`;
    }
    return user.username || 'Anonymous';
};

const getColorForUser = (index: number): string => {
    const colors = [
        '#FF6B6B', // Red
        '#4ECDC4', // Teal
        '#45B7D1', // Blue
        '#96CEB4', // Green
        '#FECA57', // Yellow
        '#FF9FF3', // Pink
        '#A8E6CF', // Light Green
        '#FFD93D', // Bright Yellow
    ];
    return colors[index % colors.length];
};

export default ActiveReaders; 