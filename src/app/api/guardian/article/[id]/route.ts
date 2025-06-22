import { NextRequest, NextResponse } from 'next/server';
import { guardianCache } from '@/lib/cache';

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
        liveBloggingNow?: boolean;
        isLive?: boolean;
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

async function fetchGuardianArticle(articleId: string): Promise<GuardianArticle> {
    const apiKey = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY;

    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
        throw new Error('Guardian API key not configured');
    }

    const params = new URLSearchParams({
        'api-key': apiKey,
        'show-fields': 'headline,standfirst,body,main,thumbnail,byline,trailText,bodyText,liveBloggingNow,isLive',
        'show-tags': 'contributor,keyword,type',
        'show-elements': 'image,video,audio,embed,rich-link,comment,interactive',
        'show-blocks': 'body,main'
    });

    const url = `https://content.guardianapis.com/${articleId}?${params.toString()}`;
    console.log('🔍 Making Guardian API call for article:', articleId);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Guardian API error: ${response.status}`);
    }

    const data = await response.json();
    return data.response.content;
}

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        // Decode the URL-encoded article ID
        const articleId = decodeURIComponent(params.id);

        if (!articleId) {
            return NextResponse.json(
                { error: 'Article ID is required' },
                { status: 400 }
            );
        }

        console.log('🔍 Processing Guardian article request for ID:', articleId);

        // Create cache key for the article
        const cacheKey = `guardian-article:${articleId}`;

        // Check cache first
        const cachedArticle = guardianCache.get(cacheKey);
        if (cachedArticle) {
            console.log('📋 Cache HIT for Guardian article:', articleId);
            return NextResponse.json({
                article: cachedArticle,
                cached: true,
                cacheHit: true
            });
        }

        console.log('🚫 Cache MISS for Guardian article:', articleId);

        // Fetch fresh data from Guardian API
        const article = await fetchGuardianArticle(articleId);

        // Cache the result for 8 minutes
        guardianCache.set(cacheKey, article, 8);

        console.log(`💾 Cached Guardian article: ${article.webTitle}`);

        return NextResponse.json({
            article,
            cached: false,
            cacheHit: false
        });

    } catch (error) {
        console.error('❌ Guardian article API error:', error);
        return NextResponse.json(
            {
                error: 'Failed to fetch Guardian article',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
} 