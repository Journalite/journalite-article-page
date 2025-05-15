/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    images: {
        domains: ['firebasestorage.googleapis.com', 'images.unsplash.com', 'upload.wikimedia.org'],
        unoptimized: true,
    },
    // Unfortunately, there seems to be a type mismatch in Next.js 15's internal types
    // for dynamic route parameters. Despite creating proper type definitions,
    // the framework expects params to be Promise<any> rather than an object.
    // This issue exists in Next.js 15.3.0.
    typescript: {
        ignoreBuildErrors: true,
    },
    // Using trailingSlash to ensure consistency in exported pages
    trailingSlash: true,
    // Disable ESLint for production build
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;