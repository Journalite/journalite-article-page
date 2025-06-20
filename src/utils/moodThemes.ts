export const moodThemes = {
    joyful: {
        gradientStart: '#fde047',  // yellow-300
        gradientEnd: '#fb923c',    // orange-400
        accent: '#f59e0b',          // amber-500
    },
    angry: {
        gradientStart: '#f87171',  // red-400
        gradientEnd: '#dc2626',    // red-600
        accent: '#ef4444',          // red-500
    },
    energetic: {
        gradientStart: '#34d399',  // emerald-400
        gradientEnd: '#059669',    // emerald-600
        accent: '#10b981',          // emerald-500
    },
    peaceful: {
        gradientStart: '#60a5fa',  // blue-400
        gradientEnd: '#2563eb',    // blue-600
        accent: '#3b82f6',          // blue-500
    },
    reflective: {
        gradientStart: '#a78bfa',  // violet-400
        gradientEnd: '#7c3aed',    // violet-600
        accent: '#8b5cf6',          // violet-500
    },
    sad: {
        gradientStart: '#94a3b8',  // slate-400
        gradientEnd: '#475569',    // slate-600
        accent: '#64748b',          // slate-500
    },
    calm: {
        gradientStart: '#67e8f9',  // cyan-300
        gradientEnd: '#0891b2',    // cyan-600
        accent: '#06b6d4',          // cyan-500
    }
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