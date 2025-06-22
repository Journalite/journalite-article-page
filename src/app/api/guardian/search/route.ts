import { NextRequest, NextResponse } from 'next/server';
import { guardianCache } from '@/lib/cache';
import { getUserCachePreferenceByEmail } from '@/services/userService';

interface GuardianArticle {
    id: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    fields?: {
        headline?: string;
        byline?: string;
        standfirst?: string;
        body?: string;
        thumbnail?: string;
        bodyText?: string;
    };
}

interface GuardianResponse {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: GuardianArticle[];
}

// Fallback articles for when API is rate limited
const getFallbackArticles = (section?: string): GuardianResponse => {
    // Create unique ID with timestamp and random string to prevent key collisions
    const uniqueId = `fallback/${section || 'general'}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const fallbackArticles: GuardianArticle[] = [
        {
            id: uniqueId,
            sectionId: section || "technology",
            sectionName: section ? section.charAt(0).toUpperCase() + section.slice(1) : "Technology",
            webPublicationDate: new Date().toISOString(),
            webTitle: "Guardian API Rate Limited - Cached Content Unavailable",
            webUrl: "#",
            apiUrl: "#",
            fields: {
                headline: "Guardian API Rate Limited",
                standfirst: "The Guardian API has reached its daily rate limit. Please try again later or upgrade to a paid tier for higher limits.",
                bodyText: "We've temporarily reached the Guardian API rate limit. This happens when we exceed 500 requests per day on the free tier."
            }
        }
    ];

    return {
        status: "ok",
        userTier: "developer",
        total: 1,
        startIndex: 1,
        pageSize: 1,
        currentPage: 1,
        pages: 1,
        orderBy: "newest",
        results: fallbackArticles
    };
};

async function searchGuardianArticles(
    query: string = '',
    section?: string,
    pageSize: number = 50
): Promise<GuardianResponse> {
    const apiKey = process.env.GUARDIAN_API_KEY || process.env.NEXT_PUBLIC_GUARDIAN_API_KEY;

    if (!apiKey) {
        throw new Error('Guardian API key not found');
    }

    // Build API URL
    const baseUrl = 'https://content.guardianapis.com/search';
    const params = new URLSearchParams({
        'api-key': apiKey,
        'show-fields': 'headline,byline,standfirst,body,thumbnail,bodyText',
        'page-size': pageSize.toString(),
        'order-by': 'newest'
    });

    if (query.trim()) {
        params.append('q', query);
    }

    if (section) {
        params.append('section', section);
    }

    const url = `${baseUrl}?${params.toString()}`;
    console.log('🔍 Making Guardian API call:', { query, section, pageSize });

    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 429) {
            console.warn('⚠️ Guardian API rate limit reached (429). Using fallback content.');
            return getFallbackArticles(section);
        }
        throw new Error(`Guardian API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform the response to match our interface
    return {
        status: data.response.status,
        userTier: data.response.userTier,
        total: data.response.total,
        startIndex: data.response.startIndex,
        pageSize: data.response.pageSize,
        currentPage: data.response.currentPage,
        pages: data.response.pages,
        orderBy: data.response.orderBy,
        results: data.response.results
    };
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

        // Check if user wants cache disabled
        let shouldUseCache = true;
        if (userEmail && !forceNoCache) {
            shouldUseCache = await getUserCachePreferenceByEmail(userEmail);
        }

        // Force disable cache if explicitly requested
        if (forceNoCache) {
            shouldUseCache = false;
        }

        // Try cache first (if enabled)
        if (shouldUseCache) {
            const cachedResult = guardianCache.get(cacheKey);
            if (cachedResult) {
                console.log(`📋 Cache HIT for Guardian search: ${cacheKey}`);
                return NextResponse.json({
                    ...cachedResult,
                    cached: true,
                    cacheKey,
                    userCacheEnabled: shouldUseCache
                });
            }
        }

        console.log(`🚫 Cache MISS for Guardian search: ${cacheKey}`);

        try {
            // Make API call
            const result = await searchGuardianArticles(query, section, pageSize);

            // Cache the result for future requests (regardless of user preference)
            guardianCache.set(cacheKey, result);

            return NextResponse.json({
                ...result,
                cached: false,
                cacheKey,
                userCacheEnabled: shouldUseCache
            });
        } catch (error) {
            console.error('❌ Guardian search API error:', error);

            // For rate limit errors, try to return cached content if available
            if (error instanceof Error && error.message.includes('429')) {
                const cachedFallback = guardianCache.get(cacheKey);
                if (cachedFallback) {
                    console.log(`🔄 Using cached fallback for rate-limited request: ${cacheKey}`);
                    return NextResponse.json({
                        ...cachedFallback,
                        cached: true,
                        rateLimited: true,
                        cacheKey,
                        userCacheEnabled: shouldUseCache
                    });
                }

                // No cache available, return fallback content
                const fallback = getFallbackArticles(section);
                return NextResponse.json({
                    ...fallback,
                    cached: false,
                    rateLimited: true,
                    cacheKey,
                    userCacheEnabled: shouldUseCache
                });
            }

            throw error; // Re-throw other errors
        }
    } catch (error) {
        console.error('❌ Guardian search API error:', error);
        return NextResponse.json(
            {
                error: 'Failed to search Guardian articles',
                details: error instanceof Error ? error.message : 'Unknown error',
                rateLimited: error instanceof Error && error.message.includes('429')
            },
            { status: 500 }
        );
    }
} 