import { NextResponse } from 'next/server';
import { guardianCache } from '@/lib/cache';

export async function GET() {
    try {
        const stats = guardianCache.getStats();

        return NextResponse.json({
            ...stats,
            cacheType: 'Guardian API',
            ttlMinutes: 8,
            description: 'Simple In-Memory Cache for Guardian API responses'
        });
    } catch (error) {
        console.error('❌ Cache stats error:', error);
        return NextResponse.json(
            { error: 'Failed to get cache statistics' },
            { status: 500 }
        );
    }
} 