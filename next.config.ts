import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip all ESLint checks during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure static export for GitHub Pages
  output: 'export'
};

export default nextConfig;
