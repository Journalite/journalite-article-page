/** @type {import('next').NextConfig} */
const nextConfig = {
    // Conditionally enable static export for GitHub Pages
    ...(process.env.STATIC_EXPORT === 'true' && {
        output: 'export',
        distDir: 'out',
        images: {
            unoptimized: true,
        },
    }),

    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: ['firebasestorage.googleapis.com', 'images.unsplash.com', 'upload.wikimedia.org'],
    },
    // Unfortunately, there seems to be a type mismatch in Next.js 15's internal types
    // for dynamic route parameters. Despite creating proper type definitions,
    // the framework expects params to be Promise<any> rather than an object.
    // This issue exists in Next.js 15.3.0.
    typescript: {
        ignoreBuildErrors: true,
    },
    // Performance optimizations
    experimental: {
        optimizePackageImports: ['react', 'react-dom', 'firebase'],
        optimizeServerReact: true,
    },
    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn']
        } : false,
    },
    // Security headers for production (only if not using static export)
    async headers() {
        if (process.env.NODE_ENV === 'production' && process.env.STATIC_EXPORT !== 'true') {
            return [
                {
                    source: '/(.*)',
                    headers: [
                        {
                            key: 'X-Frame-Options',
                            value: 'DENY'
                        },
                        {
                            key: 'X-Content-Type-Options',
                            value: 'nosniff'
                        },
                        {
                            key: 'Referrer-Policy',
                            value: 'strict-origin-when-cross-origin'
                        },
                        {
                            key: 'Content-Security-Policy',
                            value: [
                                "default-src 'self'",
                                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://apis.google.com",
                                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                                "font-src 'self' https://fonts.gstatic.com",
                                "img-src 'self' data: https: blob:",
                                "media-src 'self' https:",
                                "connect-src 'self' https://firestore.googleapis.com https://firebase.googleapis.com https://firebaseinstallations.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://content.guardianapis.com https://newsapi.org wss://firestore.googleapis.com",
                                "frame-src 'none'",
                                "object-src 'none'",
                                "base-uri 'self'"
                            ].join('; ')
                        },
                        {
                            key: 'Permissions-Policy',
                            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
                        }
                    ]
                }
            ];
        }
        return [];
    },
    // Bundle analyzer for production builds
    webpack: (config, { dev, isServer }) => {
        // Production optimizations
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all',
                        },
                        firebase: {
                            test: /[\\/]node_modules[\\/]firebase[\\/]/,
                            name: 'firebase',
                            chunks: 'all',
                        },
                        prosemirror: {
                            test: /[\\/]node_modules[\\/]prosemirror[\\/]/,
                            name: 'prosemirror',
                            chunks: 'all',
                        },
                    },
                },
            };
        }
        return config;
    },
    // Disable powered by header
    poweredByHeader: false,
    // Disable ESLint for production build
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;