/**
 * This generates empty static params to satisfy Next.js requirements
 * when using dynamic routes with 'output: export'.
 * 
 * Keeping this in a separate file from the 'use client' page component.
 */
export async function generateStaticParams() {
    // For dynamic tag routes, we don't pre-generate paths
    // but this empty array satisfies the Next.js requirement
    return [];
} 