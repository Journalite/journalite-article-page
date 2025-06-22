#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create a simple HTML file that can be used to generate the banner
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        .banner {
            width: 1200px;
            height: 630px;
            background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
            display: flex;
            align-items: center;
            color: white;
            position: relative;
        }
        .logo {
            width: 160px;
            height: 160px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 100px;
            margin-right: 60px;
        }
        .logo-text {
            font-size: 90px;
            font-weight: 900;
            color: black;
        }
        .content h1 {
            font-size: 72px;
            font-weight: 700;
            margin: 0 0 20px 0;
            color: white;
        }
        .content h2 {
            font-size: 36px;
            font-weight: 400;
            margin: 0 0 20px 0;
            color: #cccccc;
        }
        .content p {
            font-size: 24px;
            font-weight: 300;
            margin: 0;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="banner">
        <div class="logo">
            <div class="logo-text">J</div>
        </div>
        <div class="content">
            <h1>Journalite</h1>
            <h2>Your Trusted Journalism Source</h2>
            <p>Reliable journalism • Thoughtful analysis • Community discussions</p>
        </div>
    </div>
</body>
</html>
`;

// Write the HTML file
const htmlPath = path.join(process.cwd(), 'temp-banner.html');
fs.writeFileSync(htmlPath, htmlContent);

console.log('📄 Created temp-banner.html');
console.log('');
console.log('To create the PNG banner:');
console.log('1. Open temp-banner.html in a browser');
console.log('2. Take a screenshot or use browser dev tools to export as PNG');
console.log('3. Save as public/images/journalite-social-banner.png (1200x630)');
console.log('4. Delete temp-banner.html when done');
console.log('');
console.log('Alternative: Use an online HTML to PNG converter');
console.log('- https://htmlcsstoimage.com/');
console.log('- https://www.bannerbear.com/tools/html-to-image/');

// Also create a simple CSS-based banner that can be screenshot
const bannerDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(bannerDir)) {
    fs.mkdirSync(bannerDir, { recursive: true });
}

console.log('✅ Ready to create social banner image!'); 