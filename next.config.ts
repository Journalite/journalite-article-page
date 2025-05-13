import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip all ESLint checks during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure static export for GitHub Pages
  output: 'export',
  trailingSlash: true,    // Ensure paths like /about/ instead of /about
  basePath: '',           // <- Must be empty for custom domains!
  assetPrefix: '',
  // Handle environment variables correctly during build
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'dummy-key-for-static-build',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'example.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'example',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'example.appspot.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '000000000000',
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:000000000000:web:0000000000000000000000',
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-0000000000'
  }
};

export default nextConfig;
