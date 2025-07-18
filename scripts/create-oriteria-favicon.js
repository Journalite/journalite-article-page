#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create Oriteria favicon in multiple sizes
const createOriteriaFavicons = () => {
    console.log('Creating Oriteria favicons...');

    // Base favicon template with gradient background and "O" logo
    const createFavicon = (size) => {
        const radius = size / 2;
        const fontSize = Math.floor(size * 0.6); // 60% of size for optimal readability
        const textY = size / 2 + fontSize * 0.15; // Slight adjustment for better centering

        return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#203a43;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle with gradient -->
  <circle cx="${radius}" cy="${radius}" r="${radius}" fill="url(#faviconGradient)"/>
  
  <!-- Subtle inner shadow effect -->
  <circle cx="${radius}" cy="${radius}" r="${radius - 1}" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
  
  <!-- "O" letter -->
  <text 
    x="${radius}" 
    y="${textY}" 
    font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
    font-size="${fontSize}" 
    font-weight="700" 
    text-anchor="middle" 
    fill="url(#textGradient)"
    dominant-baseline="middle"
  >O</text>
</svg>`;
    };

    // Create favicons in different sizes
    const sizes = [16, 32, 48, 180, 512];

    sizes.forEach(size => {
        const favicon = createFavicon(size);
        let filename;

        if (size === 180) {
            filename = 'apple-touch-icon.svg';
        } else if (size === 512) {
            filename = 'icon-512x512.svg';
        } else {
            filename = `favicon-${size}x${size}.svg`;
        }

        const filepath = path.join(process.cwd(), 'public', filename);
        fs.writeFileSync(filepath, favicon);
        console.log(`✅ Created ${filename} (${size}x${size})`);
    });
};

// Create a simple PNG fallback script instruction
const createPngInstructions = () => {
    console.log('\n📝 To create PNG versions (recommended for better browser support):');
    console.log('1. Use an online SVG to PNG converter like:');
    console.log('   - https://convertio.co/svg-png/');
    console.log('   - https://cloudconvert.com/svg-to-png');
    console.log('2. Convert the following files:');
    console.log('   - favicon-16x16.svg → favicon-16x16.png');
    console.log('   - favicon-32x32.svg → favicon-32x32.png');
    console.log('   - favicon-48x48.svg → favicon-48x48.png');
    console.log('   - apple-touch-icon.svg → apple-touch-icon.png');
    console.log('   - icon-512x512.svg → icon-512x512.png');
    console.log('3. Also create favicon.ico (16x16, 32x32, 48x48 combined)');
};

// Update manifest.json with new branding
const updateManifest = () => {
    console.log('\n📱 Updating manifest.json...');

    const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');
    const manifest = {
        "name": "Oriteria",
        "short_name": "Oriteria",
        "description": "Your Trusted Source for Quality Journalism",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#0f2027",
        "theme_color": "#2c5364",
        "icons": [
            {
                "src": "/icon-512x512.svg",
                "sizes": "512x512",
                "type": "image/svg+xml",
                "purpose": "any maskable"
            },
            {
                "src": "/apple-touch-icon.svg",
                "sizes": "180x180",
                "type": "image/svg+xml"
            },
            {
                "src": "/favicon-48x48.svg",
                "sizes": "48x48",
                "type": "image/svg+xml"
            },
            {
                "src": "/favicon-32x32.svg",
                "sizes": "32x32",
                "type": "image/svg+xml"
            },
            {
                "src": "/favicon-16x16.svg",
                "sizes": "16x16",
                "type": "image/svg+xml"
            }
        ]
    };

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('✅ Updated manifest.json with Oriteria branding');
};

// Run the script
if (require.main === module) {
    try {
        createOriteriaFavicons();
        updateManifest();
        createPngInstructions();

        console.log('\n🎉 Oriteria favicons created successfully!');
        console.log('📄 Files updated:');
        console.log('   - favicon-16x16.svg');
        console.log('   - favicon-32x32.svg');
        console.log('   - favicon-48x48.svg');
        console.log('   - apple-touch-icon.svg (180x180)');
        console.log('   - icon-512x512.svg');
        console.log('   - manifest.json');
        console.log('\n🔧 The favicons are now ready to use!');
        console.log('   They feature the Oriteria "O" logo with a beautiful gradient background.');

    } catch (error) {
        console.error('❌ Error creating favicons:', error);
        process.exit(1);
    }
}

module.exports = { createOriteriaFavicons, updateManifest }; 