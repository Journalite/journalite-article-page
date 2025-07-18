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

// Helper function to extract images from article content
export function extractImageFromContent(content: string): string | null {
    if (!content) return null;

    // Look for img tags in the content
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;
    const match = content.match(imgRegex);

    if (match && match[1]) {
        return match[1];
    }

    // Look for markdown-style images
    const markdownImgRegex = /!\[.*?\]\(([^)]+)\)/;
    const markdownMatch = content.match(markdownImgRegex);

    if (markdownMatch && markdownMatch[1]) {
        return markdownMatch[1];
    }

    // Look for standalone image URLs in the text
    const urlRegex = /(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp|svg))/i;
    const urlMatch = content.match(urlRegex);

    if (urlMatch && urlMatch[1]) {
        return urlMatch[1];
    }

    return null;
}

// Helper function to generate article excerpt
export function generateArticleExcerpt(body: string, excerpt?: string): string {
    if (excerpt && excerpt.trim()) {
        return excerpt.trim();
    }

    return extractPlainText(body, 160);
}

// Helper function to get the best image for an article (cover image or extracted from content)
export function getArticleImage(coverImage?: string | null, content?: string): string {
    // First try the cover image
    if (coverImage && coverImage.trim() !== '') {
        return coverImage;
    }

    // Fallback: Extract from content
    if (content) {
        const extractedImage = extractImageFromContent(content);
        if (extractedImage) {
            return extractedImage;
        }
    }

    // Final fallback - use article cover for articles without images
    return '/images/oriteria-article-cover.svg';
} 