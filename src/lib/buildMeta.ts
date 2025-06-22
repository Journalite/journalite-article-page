import { Metadata } from 'next';
import { seoDefaults } from './seoDefaults';

export interface MetadataInput {
    title?: string;
    description?: string;
    image?: string;
    pathname?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
    siteName?: string;
}

export function buildMetadata(input: MetadataInput): Metadata {
    const {
        title = seoDefaults.title,
        description = seoDefaults.description,
        image = seoDefaults.defaultImage,
        pathname = '',
        type = 'website',
        publishedTime,
        modifiedTime,
        authors,
        tags,
        siteName = seoDefaults.siteName
    } = input;

    // Ensure URLs are absolute
    const absoluteUrl = `${seoDefaults.siteUrl}${pathname}`;
    const absoluteImageUrl = image.startsWith('http')
        ? image
        : `${seoDefaults.siteUrl}${image}`;

    // Generate alt text for images
    const imageAlt = type === 'article'
        ? `${title} - Article on ${siteName}`
        : `${siteName} - ${description}`;

    const metadata: Metadata = {
        title,
        description,
        keywords: tags?.join(', '),
        authors: authors?.map(name => ({ name })),

        // Open Graph
        openGraph: {
            title,
            description,
            url: absoluteUrl,
            siteName,
            type,
            images: [
                {
                    url: absoluteImageUrl,
                    width: 1200,
                    height: 630,
                    alt: imageAlt,
                }
            ],
            locale: 'en_US',
        },

        // Twitter Cards
        twitter: {
            card: 'summary_large_image',
            site: seoDefaults.twitterHandle,
            creator: seoDefaults.twitterHandle,
            title,
            description,
            images: [absoluteImageUrl],
        },

        // Additional metadata
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Canonical URL
        alternates: {
            canonical: absoluteUrl,
        },
    };

    // Add article-specific metadata
    if (type === 'article') {
        metadata.openGraph = {
            ...metadata.openGraph,
            type: 'article',
            publishedTime,
            modifiedTime,
            authors: authors,
            tags,
        };
    }

    return metadata;
}

// Helper function to extract plain text from HTML
export function extractPlainText(html: string, maxLength: number = 160): string {
    if (!html) return '';

    // Remove HTML tags and decode entities
    const text = html
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();

    return text.length > maxLength
        ? `${text.substring(0, maxLength).trim()}...`
        : text;
}

// Helper function to generate article excerpt
export function generateArticleExcerpt(body: string, excerpt?: string): string {
    if (excerpt && excerpt.trim()) {
        return excerpt.trim();
    }

    return extractPlainText(body, 160);
} 