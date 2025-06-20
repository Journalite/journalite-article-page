import React from 'react';

export const getUserAvatar = (name: string, userId?: string, isSmall: boolean = false) => {
    const initial = name?.charAt(0)?.toUpperCase() || 'A';
    const colors = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16'];
    const colorIndex = userId ? Math.abs(userId.charCodeAt(0) % colors.length) : 0;
    const bgColor = colors[colorIndex];

    return React.createElement('div', {
        style: {
            backgroundColor: bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: isSmall ? '0.8rem' : '1rem',
            width: isSmall ? '32px' : '40px',
            height: isSmall ? '32px' : '40px',
            borderRadius: '50%',
            flexShrink: 0
        }
    }, initial);
};

/**
 * Get initials from first and last name
 */
export const getInitials = (firstName: string, lastName: string): string => {
    const firstInitial = firstName?.charAt(0)?.toUpperCase() || '';
    const lastInitial = lastName?.charAt(0)?.toUpperCase() || '';
    return firstInitial + lastInitial || 'U';
}; 