import { NextResponse } from 'next/server';
import { guardianCache } from '@/lib/cache';

export async function GET() {
    try {
        const stats = guardianCache.getStats();

        // Simple stats from the cache
        const totalKeys = stats.totalSize;
        const activeItems = stats.activeItems;

        return NextResponse.json({
            cache: {
                ...stats,
                description: 'Guardian API Response Cache',
                ttlMinutes: 8
            },
            rateLimit: {
                dailyLimit: 500,
                status: 'monitoring',
                note: 'Rate limiting is handled automatically with fallback content',
                lastReset: 'Resets daily at midnight UTC'
            },
            recommendations: [
                '✅ Cache is actively preventing API rate limit issues',
                '🔄 Rate-limited requests automatically use fallback content',
                '💡 Cache duration is optimized for Guardian API free tier',
                '📋 Failed requests are gracefully handled with cached or fallback data'
            ],
            usage: {
                currentlyCached: `${activeItems} active items`,
                maxCapacity: `${stats.maxSize} items`,
                cacheFull: activeItems >= stats.maxSize * 0.9
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error getting cache stats:', error);
        return NextResponse.json(
            { error: 'Failed to get cache statistics' },
            { status: 500 }
        );
    }
} 