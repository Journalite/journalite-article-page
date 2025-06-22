import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const userEmail = searchParams.get('userEmail');
        const testQuery = searchParams.get('query') || 'technology';

        if (!userEmail) {
            return NextResponse.json(
                { error: 'userEmail parameter required' },
                { status: 400 }
            );
        }

        const results: {
            userEmail: string;
            testQuery: string;
            timestamp: string;
            tests: Array<{
                name: string;
                time: string;
                cacheHit: boolean;
                cacheDisabledForUser: boolean;
                articlesCount: number;
            }>;
            performance?: {
                speedDifference: string;
                speedupPercentage: string;
                interpretation: string;
            };
        } = {
            userEmail,
            testQuery,
            timestamp: new Date().toISOString(),
            tests: []
        };

        // Test 1: With cache (user preference respected)
        const start1 = Date.now();
        const response1 = await fetch(
            `${request.nextUrl.origin}/api/guardian/search?q=${testQuery}&userEmail=${userEmail}`,
            { method: 'GET' }
        );
        const data1 = await response1.json();
        const time1 = Date.now() - start1;

        results.tests.push({
            name: 'With Cache (User Preference)',
            time: `${time1}ms`,
            cacheHit: data1.cacheHit || false,
            cacheDisabledForUser: data1.cacheDisabledForUser || false,
            articlesCount: data1.results?.length || 0
        });

        // Test 2: Force no cache
        const start2 = Date.now();
        const response2 = await fetch(
            `${request.nextUrl.origin}/api/guardian/search?q=${testQuery}&userEmail=${userEmail}&noCache=true`,
            { method: 'GET' }
        );
        const data2 = await response2.json();
        const time2 = Date.now() - start2;

        results.tests.push({
            name: 'Force No Cache',
            time: `${time2}ms`,
            cacheHit: data2.cacheHit || false,
            cacheDisabledForUser: data2.cacheDisabledForUser || false,
            articlesCount: data2.results?.length || 0
        });

        // Performance comparison
        const speedDifference = time2 - time1;
        const speedupPercentage = time1 > 0 ? Math.round(((time2 - time1) / time1) * 100) : 0;

        results.performance = {
            speedDifference: `${speedDifference}ms`,
            speedupPercentage: `${speedupPercentage > 0 ? '+' : ''}${speedupPercentage}%`,
            interpretation: speedDifference > 50
                ? 'Cache is providing significant performance improvement'
                : speedDifference > 0
                    ? 'Cache is providing moderate performance improvement'
                    : 'No significant performance difference detected'
        };

        return NextResponse.json(results);

    } catch (error) {
        console.error('❌ Cache test error:', error);
        return NextResponse.json(
            {
                error: 'Failed to test cache performance',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
} 