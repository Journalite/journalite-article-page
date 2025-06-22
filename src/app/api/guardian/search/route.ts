import { NextRequest, NextResponse } from 'next/server';
import { guardianCache } from '@/lib/cache';
import { getUserCachePreferenceByEmail } from '@/services/userService';

interface GuardianArticle {
    id: string;
    webTitle: string;
    webUrl: string;
    webPublicationDate: string;
    fields?: {
        headline?: string;
        standfirst?: string;
        body?: string;
        bodyText?: string;
        trailText?: string;
        main?: string;
        thumbnail?: string;
        byline?: string;
    };
    elements?: Array<any>;
    tags: Array<{
        id: string;
        type: string;
        webTitle: string;
    }>;
    sectionName: string;
    pillarName: string;
}

interface GuardianResponse {
    status: string;
    userTier: string;
    total: number;
    results: GuardianArticle[];
}

async function searchGuardianArticles(
    query: string = '',
    section?: string,
    pageSize: number = 50
): Promise<GuardianResponse> {
    const apiKey = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY;

    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        throw new Error('Guardian API key not configured');
    }

    const params = new URLSearchParams({
        'api-key': apiKey,
        'show-fields': 'headline,standfirst,body,main,thumbnail,byline,trailText,bodyText',
        'show-tags': 'contributor,keyword',
        'show-elements': 'image,video',
        'page-size': pageSize.toString(),
        'page': '1',
        'order-by': 'newest'
    });

    if (query) {
        params.append('q', query);
    }

    if (section) {
        params.append('section', section);
    }

    const url = `https://content.guardianapis.com/search?${params.toString()}`;
    console.log('🔍 Making Guardian API call:', { query, section, pageSize });

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Guardian API error: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
}

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q') || '';
        const section = searchParams.get('section') || undefined;
        const pageSize = parseInt(searchParams.get('pageSize') || '50');
        const userEmail = searchParams.get('userEmail') || undefined;
        const forceNoCache = searchParams.get('noCache') === 'true';

        // Create cache key from search parameters
        const cacheKey = `guardian-search:${query}:${section || 'all'}:${pageSize}`;

        // Check if caching should be used for this user
        let shouldUseCache = !forceNoCache;
        if (userEmail && shouldUseCache) {
            try {
                const userCacheEnabled = await getUserCachePreferenceByEmail(userEmail);
                shouldUseCache = userCacheEnabled;
                console.log(`🎯 Cache preference for ${userEmail}: ${userCacheEnabled ? 'enabled' : 'disabled'}`);
            } catch (error) {
                console.warn('Error checking user cache preference, defaulting to cache enabled:', error);
            }
        }

        // Check cache first (only if caching is enabled for this user)
        if (shouldUseCache) {
            const cachedData = guardianCache.get(cacheKey);
            if (cachedData) {
                console.log('📋 Cache HIT for Guardian search:', cacheKey);
                return NextResponse.json({
                    ...cachedData,
                    cached: true,
                    cacheHit: true,
                    cacheDisabledForUser: false
                });
            }
        } else {
            console.log('🚫 Cache DISABLED for user:', userEmail);
        }

        console.log('🚫 Cache MISS for Guardian search:', cacheKey);

        // Fetch fresh data from Guardian API
        const guardianData = await searchGuardianArticles(query, section, pageSize);

        // Cache the result for 8 minutes (only if caching is enabled)
        if (shouldUseCache) {
            guardianCache.set(cacheKey, guardianData, 8);
            console.log(`💾 Cached Guardian search results: ${guardianData.results.length} articles`);
        }

        return NextResponse.json({
            ...guardianData,
            cached: false,
            cacheHit: false,
            cacheDisabledForUser: !shouldUseCache
        });

    } catch (error) {
        console.error('❌ Guardian search API error:', error);
        return NextResponse.json(
            {
                error: 'Failed to fetch Guardian articles',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
} 