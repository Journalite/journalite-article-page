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

/**
 * Generate a consistent gradient for a user based on their unique identifier
 * This gradient will be the same for the user across all pages and components
 */
export const getUserGradient = (userId: string, username?: string): string => {
    // Use userId as primary identifier, fallback to username if needed
    const identifier = userId || username || 'default';

    // Extended gradient palette for more variety
    const gradientPalette = [
        '#667eea, #764ba2', // Purple-Blue
        '#f093fb, #f5576c', // Pink-Red
        '#4facfe, #00f2fe', // Light Blue-Cyan
        '#43e97b, #38f9d7', // Green-Cyan
        '#fa709a, #fee140', // Pink-Yellow
        '#a8edea, #fed6e3', // Cyan-Pink
        '#ffecd2, #fcb69f', // Yellow-Orange
        '#ff9a9e, #fecfef', // Pink-Light Pink
        '#a18cd1, #fbc2eb', // Purple-Light Pink
        '#84fab0, #8fd3f4', // Green-Light Blue
        '#fad0c4, #ffd1ff', // Peach-Light Pink
        '#ffecd2, #fcb69f', // Orange-Peach
        '#a1c4fd, #c2e9fb', // Blue-Light Blue
        '#d4fc79, #96e6a1', // Light Green-Green
        '#fff1eb, #ace0f9', // Light Orange-Light Blue
        '#fdcbf1, #e6dee9', // Light Pink-Light Purple
        '#ff6b6b, #ffa500', // Red-Orange
        '#4ecdc4, #44a08d', // Teal-Dark Teal
        '#f7b733, #fc4a1a', // Yellow-Red
        '#8360c3, #2ebf91', // Purple-Teal
        '#ff8a80, #ea4c89', // Light Red-Pink
        '#89f7fe, #66a6ff', // Light Blue-Blue
        '#fdbb2d, #22c1c3', // Yellow-Teal
        '#ee9ca7, #ffdde1', // Pink-Light Pink
        '#ff6b6b, #556270', // Red-Gray
        '#4ecdc4, #44a08d', // Teal-Dark Teal
        '#667eea, #764ba2', // Purple-Blue (repeat for more coverage)
        '#f093fb, #f5576c', // Pink-Red (repeat for more coverage)
    ];

    // Create a hash from the identifier to ensure consistency
    let hash = 0;
    for (let i = 0; i < identifier.length; i++) {
        const char = identifier.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }

    // Get index based on hash
    const index = Math.abs(hash) % gradientPalette.length;

    return gradientPalette[index];
};

/**
 * Get a user's gradient background style object
 */
export const getUserGradientStyle = (userId: string, username?: string): React.CSSProperties => {
    const gradientColors = getUserGradient(userId, username);

    return {
        background: `linear-gradient(135deg, ${gradientColors})`,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
    };
};

/**
 * Get a user's gradient background CSS string
 */
export const getUserGradientCSS = (userId: string, username?: string): string => {
    const gradientColors = getUserGradient(userId, username);
    return `linear-gradient(135deg, ${gradientColors})`;
}; 