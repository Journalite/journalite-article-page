import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip all ESLint checks during production builds
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
