#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create a simple favicon.ico equivalent as SVG
const createFaviconIco = () => {
    console.log('Creating favicon.ico equivalent...');

    // Create a simple 16x16 favicon (most common size for .ico)
    const faviconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#203a43;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle with gradient -->
  <circle cx="8" cy="8" r="8" fill="url(#faviconGradient)"/>
  
  <!-- "O" letter -->
  <text 
    x="8" 
    y="11.5" 
    font-family="system-ui, -apple-system, sans-serif" 
    font-size="10" 
    font-weight="700" 
    text-anchor="middle" 
    fill="white"
    dominant-baseline="middle"
  >O</text>
</svg>`;

    // Save as favicon.svg (browsers will use this as fallback)
    const faviconPath = path.join(process.cwd(), 'public', 'favicon.svg');
    fs.writeFileSync(faviconPath, faviconSvg);
    console.log('✅ Created favicon.svg (16x16 equivalent)');

    // Instructions for creating actual .ico file
    console.log('\n📝 To create favicon.ico (recommended):');
    console.log('1. Use an online ICO converter like:');
    console.log('   - https://favicon.io/favicon-converter/');
    console.log('   - https://convertio.co/svg-ico/');
    console.log('2. Upload the favicon-16x16.svg file');
    console.log('3. Download as favicon.ico');
    console.log('4. Place in public/favicon.ico');
    console.log('\n💡 This ensures maximum browser compatibility!');
};

// Run the script
if (require.main === module) {
    try {
        createFaviconIco();
        console.log('\n🎉 Favicon.ico equivalent created successfully!');
    } catch (error) {
        console.error('❌ Error creating favicon.ico:', error);
        process.exit(1);
    }
}

module.exports = { createFaviconIco }; 