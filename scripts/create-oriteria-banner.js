#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create a beautiful gradient SVG banner with "Oriteria" text
const createOriteriaGradientBanner = () => {
    console.log('Creating Oriteria gradient banner...');

    // Beautiful gradient SVG banner with Oriteria branding
    const svgBanner = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#203a43;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="overlayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:0.1" />
    </linearGradient>

    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d1d1d1;stop-opacity:0.9" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#mainGradient)"/>
  <rect width="1200" height="630" fill="url(#overlayGradient)"/>

  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="60" fill="rgba(255,255,255,0.05)" />
  <circle cx="1100" cy="530" r="80" fill="rgba(255,255,255,0.04)" />
  <circle cx="200" cy="500" r="40" fill="rgba(255,255,255,0.06)" />

  <!-- Logo circle with 'O' -->
  <circle cx="200" cy="315" r="70" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
  <text x="200" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" text-anchor="middle" fill="#2c5364">O</text>

  <!-- Oriteria wordmark (without the 'O') -->
  <text x="320" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="84" font-weight="700" fill="url(#textGradient)" letter-spacing="-2px">riteria</text>

  <!-- Subtitle -->
  <text x="320" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="rgba(255,255,255,0.9)">Your Trusted Source</text>

  <!-- Tagline -->
  <text x="320" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="300" fill="rgba(255,255,255,0.7)">Quality journalism • Thoughtful analysis • Community discussions</text>

  <line x1="320" y1="390" x2="520" y2="390" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
</svg>`;

    // Save the SVG banner
    const bannerDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(bannerDir)) {
        fs.mkdirSync(bannerDir, { recursive: true });
    }

    const svgPath = path.join(bannerDir, 'oriteria-social-banner.svg');
    fs.writeFileSync(svgPath, svgBanner.trim());

    console.log('✅ Created beautiful gradient banner at public/images/oriteria-social-banner.svg');
    console.log('📝 This banner will be used for articles without cover images');
    console.log('🎨 Features: Beautiful gradient, elegant typography, and subtle decorative elements');

    return svgPath;
};

// Also create a smaller version for article cards
const createOriteriaArticleCover = () => {
    console.log('Creating Oriteria article cover template...');

    const articleCoverSvg = `<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Article cover gradient -->
    <linearGradient id="articleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#203a43;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1" />
    </linearGradient>
    
    <!-- Overlay -->
    <linearGradient id="articleOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#000000;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:0.05" />
    </linearGradient>
    
    <!-- Text gradient -->
    <linearGradient id="articleTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d1d1d1;stop-opacity:0.9" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="400" fill="url(#articleGradient)"/>
  
  <!-- Overlay -->
  <rect width="800" height="400" fill="url(#articleOverlay)"/>
  
  <!-- Decorative elements -->
  <circle cx="680" cy="80" r="40" fill="rgba(255,255,255,0.04)" />
  <circle cx="120" cy="320" r="30" fill="rgba(255,255,255,0.06)" />
  
  <!-- Logo -->
  <circle cx="300" cy="160" r="45" fill="rgba(255,255,255,0.95)"/>
  <text x="300" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="700" text-anchor="middle" fill="#2c5364">O</text>
  
  <!-- Text -->
  <text x="360" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="700" text-anchor="start" fill="white" letter-spacing="-1px">riteria</text>
  
  <!-- Subtitle -->
  <text x="400" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="300" text-anchor="middle" fill="rgba(255,255,255,0.8)">Quality Content</text>
</svg>`;

    const articleCoverPath = path.join(process.cwd(), 'public', 'images', 'oriteria-article-cover.svg');
    fs.writeFileSync(articleCoverPath, articleCoverSvg.trim());

    console.log('✅ Created article cover template at public/images/oriteria-article-cover.svg');

    return articleCoverPath;
};

// Run the script
if (require.main === module) {
    try {
        createOriteriaGradientBanner();
        createOriteriaArticleCover();
        console.log('\n🎉 All Oriteria banners created successfully!');
        console.log('📄 Files created:');
        console.log('   - public/images/oriteria-social-banner.svg (for social sharing)');
        console.log('   - public/images/oriteria-article-cover.svg (for article cards)');
    } catch (error) {
        console.error('❌ Error creating banners:', error);
        process.exit(1);
    }
}

module.exports = { createOriteriaGradientBanner, createOriteriaArticleCover }; 