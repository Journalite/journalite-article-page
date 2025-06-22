#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create a simple 1200x630 PNG banner as base64 (for testing)
// This is a minimal black banner with white text "Journalite"
const createTempBanner = () => {
  console.log('Creating temporary PNG banner...');

  // Simple SVG that we'll save as the banner for now
  const svgBanner = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <circle cx="200" cy="315" r="60" fill="#ffffff"/>
  <text x="200" y="335" font-family="Arial, sans-serif" font-size="60" font-weight="900" text-anchor="middle" fill="#000000">J</text>
  <text x="320" y="280" font-family="Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff">Journalite</text>
  <text x="320" y="330" font-family="Arial, sans-serif" font-size="32" fill="#cccccc">Your Trusted Journalism Source</text>
  <text x="320" y="370" font-family="Arial, sans-serif" font-size="20" fill="#999999">Reliable journalism • Thoughtful analysis • Community discussions</text>
</svg>`;

  // Save as SVG for now (can be converted later)
  const bannerPath = path.join(process.cwd(), 'public', 'images', 'journalite-social-banner.svg');
  fs.writeFileSync(bannerPath, svgBanner.trim());

  console.log('✅ Created temporary banner at public/images/journalite-social-banner.svg');
  console.log('📝 Note: For better iOS Messages compatibility, convert this to PNG format');
  console.log('   You can use online tools like:');
  console.log('   - https://convertio.co/svg-png/');
  console.log('   - https://cloudconvert.com/svg-to-png');
  console.log('   Then replace the .svg file with .png');
};

createTempBanner(); 