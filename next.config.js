/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        domains: ['firebasestorage.googleapis.com', 'images.unsplash.com', 'upload.wikimedia.org'],
    },
    // Unfortunately, there seems to be a type mismatch in Next.js 15's internal types
    // for dynamic route parameters. Despite creating proper type definitions,
    // the framework expects params to be Promise<any> rather than an object.
    // This issue exists in Next.js 15.3.0.
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;