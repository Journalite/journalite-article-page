import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip all ESLint checks during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Use SSR with standalone output instead of static export
  output: 'standalone',
  trailingSlash: true,    // Ensure paths like /about/ instead of /about
  basePath: '',           // <- Must be empty for custom domains!
  assetPrefix: ''
};

export default nextConfig;
