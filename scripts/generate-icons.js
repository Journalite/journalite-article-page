#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple SVG to PNG conversion using built-in Canvas API
// For production, you'd typically use a proper image library like sharp or canvas

const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-512x512.png', size: 512 },
];

// Generate SVG for the "J" icon
function generateJIconSVG(size) {
    const fontSize = Math.floor(size * 0.6); // 60% of the icon size
    const strokeWidth = Math.max(1, Math.floor(size * 0.05)); // 5% of icon size, minimum 1

    return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#000000"/>
  <text 
    x="${size / 2}" 
    y="${size / 2 + fontSize / 3}" 
    font-family="Arial, sans-serif" 
    font-size="${fontSize}" 
    font-weight="900" 
    text-anchor="middle" 
    fill="#FFFFFF"
    dominant-baseline="middle"
  >J</text>
</svg>`.trim();
}

// Create icons directory
const iconsDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate SVG files for each size
console.log('Generating Journalite favicon and app icons...\n');

sizes.forEach(({ name, size }) => {
    const svg = generateJIconSVG(size);
    const svgPath = path.join(iconsDir, name.replace('.png', '.svg'));

    fs.writeFileSync(svgPath, svg);
    console.log(`✓ Generated ${name.replace('.png', '.svg')} (${size}x${size})`);
});

console.log('\n🎉 Icon generation complete!');
console.log('\nGenerated SVG files in /public directory:');
sizes.forEach(({ name }) => {
    console.log(`  - ${name.replace('.png', '.svg')}`);
});

console.log('\n📝 Next steps:');
console.log('1. Convert SVG files to PNG using an online converter or design tool');
console.log('2. Replace the .svg files with .png versions');
console.log('3. Ensure all PNG files are optimized and under 120KB');

// Generate a basic PWA manifest
const manifest = {
    name: "Journalite",
    short_name: "Journalite",
    description: "Your Trusted Journalism Source",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
        {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
        },
        {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png"
        }
    ]
};

fs.writeFileSync(
    path.join(iconsDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
);

console.log('4. Generated manifest.json for PWA support'); 