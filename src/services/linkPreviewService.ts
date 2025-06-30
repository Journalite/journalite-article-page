'use client'

import { getArticleBySlug } from '@/firebase/articles';

// Cache for article metadata to avoid repeated fetches
const metadataCache = new Map<string, ArticleMetadata>();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export interface ArticleMetadata {
    slug: string;
    title: string;
    excerpt?: string;
    coverImageUrl?: string;
    authorName?: string;
    readTime?: number;
    publishedDate?: string;
    isExternal?: boolean;
    externalUrl?: string;
    fetchedAt: number;
}

// Extract slug from URL
export function extractSlugFromUrl(url: string): string | null {
    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;

        if (pathname.startsWith('/articles/')) {
            return pathname.replace('/articles/', '').replace(/\/$/, '');
        } else if (pathname.startsWith('/guardian-news/')) {
            return pathname.replace('/guardian-news/', '').replace(/\/$/, '');
        } else if (pathname.startsWith('/news/')) {
            return decodeURIComponent(pathname.replace('/news/', '').replace(/\/$/, ''));
        }

        return null;
    } catch (error) {
        console.error('Error extracting slug from URL:', error);
        return null;
    }
}

// Fetch article metadata from internal Journalite articles
async function fetchJournaliteArticle(slug: string): Promise<ArticleMetadata | null> {
    try {
        const article = await getArticleBySlug(slug);

        if (!article) {
            return null;
        }

        // Calculate reading time
        const wordCount = article.body?.split(' ').length || 0;
        const readTime = Math.max(1, Math.ceil(wordCount / 200));

        // Create excerpt from body (strip HTML if present)
        let excerpt = article.excerpt;
        if (!excerpt && article.body) {
            // Remove HTML tags and get first 200 characters
            const textContent = article.body.replace(/<[^>]*>/g, '').trim();
            excerpt = textContent.length > 200
                ? textContent.substring(0, 200) + '...'
                : textContent;
        }

        const metadata: ArticleMetadata = {
            slug: article.slug || slug,
            title: article.title || 'Untitled Article',
            excerpt: excerpt || '',
            coverImageUrl: article.coverImage || undefined,
            authorName: article.authorName || 'Unknown Author',
            readTime: readTime,
            publishedDate: article.createdAt ? article.createdAt.toDate().toISOString() : undefined,
            isExternal: false,
            fetchedAt: Date.now()
        };

        return metadata;
    } catch (error) {
        console.error('Error fetching Journalite article:', error);
        return null;
    }
}

// Fetch Guardian article metadata from Guardian Content API
async function fetchGuardianArticle(articleId: string): Promise<ArticleMetadata | null> {
    const apiKey = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY;
    if (!apiKey) {
        console.warn('Guardian API key missing; using fallback metadata');
        return {
            slug: articleId,
            title: 'Guardian Article',
            excerpt: 'Read this article on The Guardian.',
            isExternal: true,
            externalUrl: `https://theguardian.com/${articleId}`,
            fetchedAt: Date.now()
        };
    }

    try {
        const endpoint = `https://content.guardianapis.com/${articleId}?api-key=${apiKey}&show-fields=trailText,thumbnail,headline,byline,wordcount,firstPublicationDate`;
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`Guardian API ${res.status}`);

        const json = await res.json();
        const content = json.response?.content;
        if (!content) throw new Error('No content');

        const fields = content.fields || {};

        const wordCount = parseInt(fields.wordcount || '0', 10);
        const readTime = wordCount ? Math.max(1, Math.ceil(wordCount / 200)) : undefined;

        const metadata: ArticleMetadata = {
            slug: articleId,
            title: fields.headline || content.webTitle || 'Guardian Article',
            excerpt: fields.trailText?.replace(/<[^>]*>/g, '') || undefined,
            coverImageUrl: fields.thumbnail,
            authorName: fields.byline || 'The Guardian',
            readTime,
            publishedDate: fields.firstPublicationDate || content.webPublicationDate,
            isExternal: true,
            externalUrl: content.webUrl,
            fetchedAt: Date.now()
        };

        return metadata;
    } catch (error) {
        console.error('Error fetching Guardian article:', error);
        return null;
    }
}

// Fetch external article metadata (you can expand this to use a web scraping service)
async function fetchExternalArticle(url: string): Promise<ArticleMetadata | null> {
    try {
        // For now, create a basic preview. In production, you'd use a service like:
        // - Open Graph metadata scraping
        // - Mercury Parser
        // - Your own backend service that fetches metadata
        const domain = new URL(url).hostname;

        const metadata: ArticleMetadata = {
            slug: encodeURIComponent(url),
            title: `Article from ${domain}`,
            excerpt: `Read this article on ${domain}.`,
            coverImageUrl: undefined,
            authorName: domain,
            readTime: 3,
            publishedDate: new Date().toISOString(),
            isExternal: true,
            externalUrl: url,
            fetchedAt: Date.now()
        };

        return metadata;
    } catch (error) {
        console.error('Error fetching external article:', error);
        return null;
    }
}

// Main function to fetch article metadata with caching
export async function fetchArticleMetadata(url: string): Promise<ArticleMetadata | null> {
    const cacheKey = url;

    // Check cache first
    const cached = metadataCache.get(cacheKey);
    if (cached && (Date.now() - cached.fetchedAt) < CACHE_DURATION) {
        return cached;
    }

    let metadata: ArticleMetadata | null = null;

    try {
        if (url.includes('/articles/')) {
            // Internal Journalite article
            const slug = extractSlugFromUrl(url);
            if (slug) {
                metadata = await fetchJournaliteArticle(slug);
            }
        } else if (url.includes('/guardian-news/')) {
            // Guardian article
            const articleId = extractSlugFromUrl(url);
            if (articleId) {
                metadata = await fetchGuardianArticle(articleId);
            }
        } else if (url.includes('/news/')) {
            // External news article
            const externalUrl = extractSlugFromUrl(url);
            if (externalUrl) {
                metadata = await fetchExternalArticle(externalUrl);
            }
        }

        // Cache the result (even if null, to avoid repeated failed fetches)
        if (metadata) {
            metadataCache.set(cacheKey, metadata);
        } else {
            // Create a basic fallback and cache it briefly
            const slug = extractSlugFromUrl(url) || 'unknown';
            const fallbackMetadata: ArticleMetadata = {
                slug: slug,
                title: `Article: ${slug.replace(/[-_]/g, ' ')}`,
                excerpt: 'Unable to load article preview.',
                isExternal: false,
                fetchedAt: Date.now()
            };

            // Cache fallback for a shorter duration
            setTimeout(() => metadataCache.delete(cacheKey), 60000); // 1 minute
            metadataCache.set(cacheKey, fallbackMetadata);
            return fallbackMetadata;
        }

        return metadata;
    } catch (error) {
        console.error('Error fetching article metadata:', error);
        return null;
    }
}

// Clear cache (useful for testing or when needed)
export function clearMetadataCache(): void {
    metadataCache.clear();
}

// Get cache size (useful for debugging)
export function getCacheSize(): number {
    return metadataCache.size;
} 