const themes = [
    { id: 1, name: 'Dark', startColor: '0, 0, 0', endColor: '28, 28, 30' },
    { id: 2, name: 'Purple Red', startColor: '26, 11, 46', endColor: '196, 47, 69' },
    { id: 3, name: 'Ocean', startColor: '23, 42, 58', endColor: '72, 95, 138' },
    { id: 4, name: 'Charcoal', startColor: '34, 40, 49', endColor: '57, 62, 70' }
];

const applyTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId) || themes[0];
    document.documentElement.style.setProperty('--theme-bg-start-rgb', theme.startColor);
    document.documentElement.style.setProperty('--theme-bg-end-rgb', theme.endColor);
};

const savedThemeId = localStorage.getItem('selectedThemeId');
if (savedThemeId) {
    applyTheme(parseInt(savedThemeId, 10));
} else {
    applyTheme(1); // Default to theme ID 1 (Dark)
} 