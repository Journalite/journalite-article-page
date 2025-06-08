export const moodThemes = {
    joyful: {
        gradientStart: '#FFD700',  // Golden yellow
        gradientEnd: '#FF6B6B',    // Coral pink
        accent: '#FF4757'          // Bright red
    },
    angry: {
        gradientStart: '#FF416C',  // Hot pink
        gradientEnd: '#FF4B2B',    // Fiery red
        accent: '#B71C1C'          // Dark red
    },
    energetic: {
        gradientStart: '#00F260',  // Electric green
        gradientEnd: '#0575E6',    // Electric blue
        accent: '#1565C0'          // Deep blue
    },
    peaceful: {
        gradientStart: '#A8E6CF',  // Soft mint
        gradientEnd: '#88D8C0',    // Sage green
        accent: '#4CAF50'          // Forest green
    },
    reflective: {
        gradientStart: '#667eea',  // Soft purple
        gradientEnd: '#764ba2',    // Deep purple
        accent: '#5E35B1'          // Royal purple
    },
    sad: {
        gradientStart: '#4facfe',  // Sky blue
        gradientEnd: '#00f2fe',    // Cyan
        accent: '#0288D1'          // Ocean blue
    },
};

export const gradientTypes = {
    linear: 'linear',
    radial: 'radial',
    conic: 'conic',
    waves: 'waves',
    dots: 'dots',
    mesh: 'mesh'
} as const;

export type GradientType = keyof typeof gradientTypes;

export const generateGradientStyle = (
    mood: keyof typeof moodThemes,
    gradientType: GradientType,
    opacity: number = 0.4
) => {
    const theme = moodThemes[mood];
    const opacityHex = Math.round(opacity * 255).toString(16).padStart(2, '0');

    switch (gradientType) {
        case 'linear':
            return `linear-gradient(45deg, ${theme.gradientStart}${opacityHex}, ${theme.gradientEnd}${opacityHex})`;

        case 'radial':
            return `radial-gradient(circle at 50% 50%, ${theme.gradientStart}${opacityHex} 0%, ${theme.gradientEnd}${opacityHex} 100%)`;

        case 'conic':
            return `conic-gradient(from 0deg at 50% 50%, ${theme.gradientStart}${opacityHex}, ${theme.gradientEnd}${opacityHex}, ${theme.accent}${opacityHex}, ${theme.gradientStart}${opacityHex})`;

        case 'waves':
            return `
        radial-gradient(ellipse 200% 100% at 50% 0%, ${theme.gradientStart}${opacityHex}, transparent 50%), 
        radial-gradient(ellipse 200% 100% at 50% 100%, ${theme.gradientEnd}${opacityHex}, transparent 50%)
      `;

        case 'dots':
            return `
        radial-gradient(circle at 20% 20%, ${theme.gradientStart}${opacityHex} 8px, transparent 8px),
        radial-gradient(circle at 80% 80%, ${theme.gradientEnd}${opacityHex} 8px, transparent 8px),
        radial-gradient(circle at 40% 60%, ${theme.accent}${Math.round(opacity * 0.6 * 255).toString(16).padStart(2, '0')} 4px, transparent 4px)
      `;

        case 'mesh':
            return `
        radial-gradient(circle at 20% 20%, ${theme.gradientStart}${opacityHex}, transparent 50%), 
        radial-gradient(circle at 80% 60%, ${theme.gradientEnd}${opacityHex}, transparent 50%),
        radial-gradient(circle at 40% 90%, ${theme.accent}${Math.round(opacity * 0.8 * 255).toString(16).padStart(2, '0')}, transparent 50%),
        radial-gradient(circle at 70% 30%, ${theme.gradientStart}${Math.round(opacity * 0.6 * 255).toString(16).padStart(2, '0')}, transparent 50%)
      `;

        default:
            return `linear-gradient(45deg, ${theme.gradientStart}${opacityHex}, ${theme.gradientEnd}${opacityHex})`;
    }
};

// Real-time gradient updater utility
export const updateAllGradients = (mood: keyof typeof moodThemes, gradientType: GradientType) => {
    const elements = document.querySelectorAll('[data-mood-element]') as NodeListOf<HTMLElement>;

    elements.forEach(element => {
        const elementType = element.getAttribute('data-mood-element');
        element.style.backgroundImage = generateGradientStyle(mood, gradientType, 0.4);
        element.style.transition = 'background-image 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}; 