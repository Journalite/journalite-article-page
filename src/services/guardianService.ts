import { recommendationService, RecommendationScore } from './recommendationService';

export interface GuardianArticle {
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
    elements?: Array<{
        type: string;
        assets: Array<{
            type: string;
            mimeType: string;
            file: string;
            typeData: {
                secureFile?: string;
                displayCredit?: boolean;
                credit?: string;
                source?: string;
                photographer?: string;
                alt?: string;
                caption?: string;
                width?: number;
                height?: number;
            };
        }>;
    }>;
    tags: Array<{
        id: string;
        type: string;
        webTitle: string;
    }>;
    sectionName: string;
    pillarName: string;
    recommendationScore?: number;
    recommendationReasons?: string[];
}

export interface GuardianResponse {
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

class GuardianService {
    private apiKey: string;
    private baseUrl = 'https://content.guardianapis.com';

    constructor() {
        this.apiKey = process.env.NEXT_PUBLIC_GUARDIAN_API_KEY || '';
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            console.warn('Guardian API key not configured. Please set NEXT_PUBLIC_GUARDIAN_API_KEY in your environment variables.');
        }
    }

    async searchArticles(
        query: string = '',
        section?: string,
        page: number = 1,
        pageSize: number = 50,
        userEmail?: string,
        forceNoCache: boolean = false
    ): Promise<GuardianResponse> {
        // Use cached API route instead of direct Guardian API calls
        const params = new URLSearchParams({
            'q': query,
            'pageSize': pageSize.toString()
        });

        if (section) {
            params.append('section', section);
        }

        if (userEmail) {
            params.append('userEmail', userEmail);
        }

        if (forceNoCache) {
            params.append('noCache', 'true');
        }

        const url = `/api/guardian/search?${params.toString()}`;
        console.log('🚀 Using cached Guardian API route:', url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Cached API error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        // Log cache performance
        if (data.cacheDisabledForUser) {
            console.log('🚫 Cache DISABLED for this user - Always fresh data');
        } else if (data.cacheHit) {
            console.log('⚡ Cache HIT - Fast response from in-memory cache');
        } else {
            console.log('🔄 Cache MISS - Fresh data fetched and cached');
        }

        return {
            status: data.status,
            userTier: data.userTier,
            total: data.total,
            startIndex: data.startIndex || 1,
            pageSize: data.pageSize || pageSize,
            currentPage: data.currentPage || page,
            pages: data.pages || 1,
            orderBy: data.orderBy || 'newest',
            results: data.results
        };
    }

    async getArticleById(articleId: string, userEmail?: string, forceNoCache: boolean = false): Promise<GuardianArticle> {
        // Use cached API route instead of direct Guardian API calls
        const params = new URLSearchParams();

        if (userEmail) {
            params.append('userEmail', userEmail);
        }

        if (forceNoCache) {
            params.append('noCache', 'true');
        }

        const queryString = params.toString();
        const url = `/api/guardian/article/${encodeURIComponent(articleId)}${queryString ? `?${queryString}` : ''}`;
        console.log('🚀 Using cached Guardian article API route:', url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Cached API error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        // Log cache performance
        if (data.cacheDisabledForUser) {
            console.log('🚫 Cache DISABLED for this user - Always fresh data');
        } else if (data.cacheHit) {
            console.log('⚡ Cache HIT - Fast article response from in-memory cache');
        } else {
            console.log('🔄 Cache MISS - Fresh article data fetched and cached');
        }

        return data.article;
    }

    async getSections(): Promise<Array<{ id: string, webTitle: string }>> {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('Guardian API key not configured');
        }

        const url = `${this.baseUrl}/sections?api-key=${this.apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.response.results;
    }

    // Convert Guardian article to your app's format
    convertToArticleFormat(article: GuardianArticle) {
        let articleHtml = '';

        // Add standfirst (subtitle/summary) if available
        if (article.fields?.standfirst) {
            articleHtml += `<div class="article-standfirst" style="font-size: 1.2em; color: #666; font-weight: 400; line-height: 1.4; margin: 0 0 2em 0;">
        <strong>${article.fields.standfirst}</strong>
      </div>`;
        }

        // Try different body fields in order of preference
        let bodyContent = article.fields?.body || article.fields?.bodyText || '';

        if (bodyContent) {
            // Debug logging
            // Content type analysis for live blog detection
            const isLiveBlogResult = this.isLiveBlog(article);

            // Check if this is a live blog
            const isLiveBlog = this.isLiveBlog(article);

            if (isLiveBlog) {
                // For live blogs, create a preview and redirect to Guardian
                bodyContent = this.createLiveBlogPreview(article, bodyContent);
            } else {
                // For regular articles, process normally
                // Remove Guardian self-promotional content
                bodyContent = this.removeGuardianPromoContent(bodyContent);

                // Check if the content is HTML or plain text
                const isHtml = bodyContent.includes('<') && bodyContent.includes('>');

                if (!isHtml) {
                    // If it's plain text (bodyText field), format it properly
                    console.log('📝 Processing as plain text');
                    bodyContent = this.formatPlainTextToHtml(bodyContent);
                } else {
                    console.log('🏷️ Processing as HTML');
                    // For HTML content, ensure it's not double-escaped
                    bodyContent = bodyContent
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                        .replace(/&quot;/g, '"')
                        .replace(/&#39;/g, "'")
                        .replace(/&amp;/g, '&');
                }

                bodyContent = this.processRegularArticleContent(bodyContent);
            }

            // Use Guardian's body content directly - it's already well-formatted with images in the right places

            // Enhance existing images in the content with better styling
            bodyContent = bodyContent.replace(
                /<img([^>]*?)>/g,
                (match, attrs) => {
                    // Keep all existing attributes and enhance the styling
                    return `<img ${attrs} style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />`;
                }
            );

            // Enhance existing figure elements with better styling
            bodyContent = bodyContent.replace(
                /<figure([^>]*?)>/g,
                (match, attrs) => {
                    return `<figure ${attrs} style="margin: 2em auto; text-align: center;">`;
                }
            );

            // Enhance figcaptions with better styling
            bodyContent = bodyContent.replace(
                /<figcaption([^>]*?)>/g,
                (match, attrs) => {
                    return `<figcaption ${attrs} style="margin-top: 0.5em; font-size: 0.9em; color: #666; font-style: italic; text-align: center;">`;
                }
            );

            // Enhance video elements if they exist
            bodyContent = bodyContent.replace(
                /<video([^>]*?)>/g,
                (match, attrs) => {
                    return `<video ${attrs} style="width: 100%; max-width: 800px; height: auto; min-height: 400px; margin: 2em auto; display: block; border-radius: 8px;" controls />`;
                }
            );

            // Handle YouTube embeds and iframes
            bodyContent = bodyContent.replace(
                /<iframe([^>]*?)>/g,
                (match, attrs) => {
                    // Check if it's a YouTube video or other video embed
                    const isVideo = attrs.includes('youtube.com') || attrs.includes('youtu.be') || attrs.includes('vimeo.com') || attrs.includes('video');

                    if (isVideo) {
                        return `<div class="video-container" style="position: relative; width: 100%; max-width: 900px; margin: 2em auto; padding-bottom: 50.625%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
                            <iframe ${attrs} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
                        </div>`;
                    } else {
                        // For non-video iframes, just improve the styling
                        return `<iframe ${attrs} style="max-width: 100%; margin: 2em auto; display: block; border-radius: 8px;" />`;
                    }
                }
            );

            // Handle YouTube links that might not be embedded yet
            bodyContent = bodyContent.replace(
                /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/g,
                (match, videoId) => {
                    return `<div class="video-container" style="position: relative; width: 100%; max-width: 900px; margin: 2em auto; padding-bottom: 50.625%; height: 0; overflow: hidden; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
                        <iframe src="https://www.youtube.com/embed/${videoId}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
                    </div>`;
                }
            );

            // Handle Twitter/X links with proper embedding - simple approach
            const twitterRegex = /https?:\/\/(?:twitter\.com|x\.com)\/[a-zA-Z0-9_]+\/status\/\d+(?:\?[^\s]*)?/g;
            bodyContent = bodyContent.replace(twitterRegex, (url) => {
                return `<div class="social-embed twitter-embed">
                    <div class="twitter-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1da1f2">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        Twitter/X Post
                    </div>
                    <p>View this post on <a href="${url}" target="_blank" rel="noopener noreferrer">Twitter/X</a></p>
                </div>`;
            });

            // Handle Instagram links
            bodyContent = bodyContent.replace(
                /https?:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)/g,
                (match, postId) => {
                    return `<div class="social-embed instagram-embed" style="margin: 2em auto; max-width: 400px; border: 1px solid #dbdbdb; border-radius: 12px; padding: 1em; background: #fafafa;">
                        <div style="margin-bottom: 1em; font-weight: 600; color: #e4405f; display: flex; align-items: center;">
                            <svg style="width: 20px; height: 20px; margin-right: 8px;" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            Instagram Post
                        </div>
                        <p style="margin: 0; color: #666; font-style: italic;">View this post on <a href="${match}" target="_blank" rel="noopener noreferrer" style="color: #e4405f; text-decoration: none;">Instagram</a></p>
                    </div>`;
                }
            );

            // Handle Facebook links
            bodyContent = bodyContent.replace(
                /https?:\/\/(?:www\.)?facebook\.com\/[^\/\s]+\/posts\/[^\/\s]+/g,
                (match) => {
                    return `<div class="social-embed facebook-embed" style="margin: 2em auto; max-width: 500px; border: 1px solid #dddfe2; border-radius: 12px; padding: 1em; background: #f5f6f7;">
                        <div style="margin-bottom: 1em; font-weight: 600; color: #1877f2; display: flex; align-items: center;">
                            <svg style="width: 20px; height: 20px; margin-right: 8px;" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook Post
                        </div>
                        <p style="margin: 0; color: #666; font-style: italic;">View this post on <a href="${match}" target="_blank" rel="noopener noreferrer" style="color: #1877f2; text-decoration: none;">Facebook</a></p>
                    </div>`;
                }
            );

            // Enhance live blog updates and timestamps
            bodyContent = bodyContent.replace(
                /<p><strong>(\d{1,2}:\d{2}(?:\s*[ap]m)?)\s*[–-]\s*(.*?)<\/strong><\/p>/gi,
                (match, time, content) => {
                    return `<div class="live-update" style="margin: 2em 0; padding: 1.5em; background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); border-left: 4px solid #f39c12; border-radius: 8px; box-shadow: 0 2px 8px rgba(243, 156, 18, 0.1);">
                        <div style="display: flex; align-items: center; margin-bottom: 0.5em;">
                            <span style="background: #f39c12; color: white; padding: 0.25em 0.75em; border-radius: 20px; font-size: 0.85em; font-weight: 600; margin-right: 1em;">LIVE UPDATE</span>
                            <time style="font-weight: 600; color: #d68910;">${time}</time>
                        </div>
                        <div style="color: #7d6608; font-weight: 500;">${content}</div>
                    </div>`;
                }
            );

            // Handle general updates or breaking news markers
            bodyContent = bodyContent.replace(
                /<p><strong>(UPDATE|BREAKING|LATEST|DEVELOPING):\s*(.*?)<\/strong><\/p>/gi,
                (match, type, content) => {
                    const colors: Record<string, { bg: string; border: string; text: string }> = {
                        'UPDATE': { bg: '#e3f2fd', border: '#2196f3', text: '#0d47a1' },
                        'BREAKING': { bg: '#ffebee', border: '#f44336', text: '#b71c1c' },
                        'LATEST': { bg: '#f3e5f5', border: '#9c27b0', text: '#4a148c' },
                        'DEVELOPING': { bg: '#fff3e0', border: '#ff9800', text: '#e65100' }
                    };
                    const color = colors[type.toUpperCase()] || colors['UPDATE'];

                    return `<div class="news-update ${type.toLowerCase()}" style="margin: 2em 0; padding: 1.5em; background: ${color.bg}; border-left: 4px solid ${color.border}; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <div style="display: flex; align-items: center; margin-bottom: 0.5em;">
                            <span style="background: ${color.border}; color: white; padding: 0.25em 0.75em; border-radius: 20px; font-size: 0.85em; font-weight: 600; margin-right: 1em;">${type.toUpperCase()}</span>
                        </div>
                        <div style="color: ${color.text}; font-weight: 500;">${content}</div>
                    </div>`;
                }
            );

            // Clean up malformed content and fix common issues
            bodyContent = bodyContent.replace(/<p>\s*<\/p>/g, ''); // Remove empty paragraphs
            bodyContent = bodyContent.replace(/pic\.twitter\.com\/[a-zA-Z0-9]+/g, ''); // Remove Twitter pic links
            bodyContent = bodyContent.replace(/—\s*([^<]+)\s*Twitter\/X Post/g, '<br><em>— $1</em>'); // Fix Twitter attribution

            // Fix malformed timestamps and dates
            bodyContent = bodyContent.replace(
                /(\d{1,2}:\d{2}(?:am|pm)?)\s+BST\s*\(/g,
                '<div style="margin: 1em 0; padding: 0.5em; background: #f0f0f0; border-radius: 4px; font-size: 0.9em; color: #666;"><strong>$1 BST</strong></div><p>'
            );

            // Fix broken links and references
            bodyContent = bodyContent.replace(/\?ref_src=twsrc[^>\s]*>/g, '">');

            // Clean up extra spaces and line breaks
            bodyContent = bodyContent.replace(/\s{3,}/g, ' ');
            bodyContent = bodyContent.replace(/\n{3,}/g, '\n\n');

            articleHtml += bodyContent;
        }

        // Only add images from elements if the body content doesn't have any images
        // This prevents duplicate images and preserves the original layout
        const hasImagesInBody = articleHtml.includes('<img') || articleHtml.includes('<figure');

        if (!hasImagesInBody && article.elements && article.elements.length > 0) {
            // Add a main image at the top if available
            const mainImageElement = article.elements.find(element =>
                element.type === 'image' && element.assets && element.assets.length > 0
            );

            if (mainImageElement) {
                const imageAsset = mainImageElement.assets.find(asset => asset.type === 'image');
                if (imageAsset) {
                    const imageUrl = imageAsset.typeData.secureFile || imageAsset.file;
                    const alt = imageAsset.typeData.alt || imageAsset.typeData.caption || '';
                    const caption = imageAsset.typeData.caption || '';

                    // Add main image at the beginning of the article
                    const mainImageHtml = `<figure style="margin: 0 0 2em 0; text-align: center;">
              <img src="${imageUrl}" alt="${alt ? alt.replace(/"/g, '&quot;').replace(/'/g, '&#39;') : ''}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
              ${caption ? `<figcaption style="margin-top: 0.5em; font-size: 0.9em; color: #666; font-style: italic;">${caption.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}</figcaption>` : ''}
            </figure>`;

                    articleHtml = mainImageHtml + articleHtml;
                }
            }
        }

        // Fallback: add main field image only if no other images were added
        if (article.fields?.main && !articleHtml.includes('<img') && !articleHtml.includes('<figure')) {
            const mainImageHtml = `<figure style="margin: 0 0 2em 0; text-align: center;">
              <img src="${article.fields.main}" alt="" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
            </figure>`;

            articleHtml = mainImageHtml + articleHtml;
        }

        // Add link to original article with better styling
        articleHtml += `<div class="original-article-link" style="margin-top: 3em; padding: 1.5em; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; border-left: 4px solid #0066cc; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <p style="margin: 0; color: #495057;"><em>📰 <strong>Read the complete article at:</strong> <a href="${article.webUrl}" target="_blank" rel="noopener noreferrer" style="color: #0066cc; font-weight: 600; text-decoration: none; border-bottom: 1px solid transparent; transition: border-bottom 0.2s ease;" onmouseover="this.style.borderBottom='1px solid #0066cc'" onmouseout="this.style.borderBottom='1px solid transparent'">The Guardian</a></em></p>
    </div>`;

        // Extract author from byline or contributor tags
        const author = article.fields?.byline ||
            article.tags.find(tag => tag.type === 'contributor')?.webTitle ||
            'The Guardian';

        // Format publication date
        const formatDate = (dateString: string): string => {
            try {
                const date = new Date(dateString);
                const options: Intl.DateTimeFormatOptions = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                };
                return date.toLocaleDateString('en-US', options);
            } catch (error) {
                console.error('Error formatting date:', error);
                return dateString;
            }
        };

        // Calculate read time (rough estimate: 200 words per minute)
        const wordCount = article.fields?.body
            ? article.fields.body.replace(/<[^>]*>/g, '').split(/\s+/).length
            : 300;
        const readTime = Math.ceil(wordCount / 200);

        // For articles with read time > 22 minutes, provide a summary and encourage full reading
        if (readTime > 22) {
            console.log(`📚 Long Guardian article detected (${readTime} min read) - providing summary`);

            // Generate a brief summary from the standfirst, first paragraph, or body content
            let summary = '';

            if (article.fields?.standfirst) {
                summary = article.fields.standfirst;
            } else if (article.fields?.trailText) {
                summary = article.fields.trailText;
            } else if (article.fields?.body) {
                // Extract first meaningful paragraph for summary
                const bodyText = article.fields.body.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
                const sentences = bodyText.split(/[.!?]+/).filter(s => s.trim().length > 20);
                summary = sentences.slice(0, 2).join('. ').trim();
                if (summary && !summary.endsWith('.')) summary += '.';
            }

            // Fallback summary if none found
            if (!summary) {
                summary = `This is a comprehensive ${readTime}-minute article from The Guardian covering ${article.sectionName.toLowerCase()} news.`;
            }

            // Create summary section with call-to-action
            const summaryHtml = `
                <div class="long-article-summary" style="margin: 2em 0; padding: 2em; background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%); border-radius: 16px; border-left: 6px solid #ff9800; box-shadow: 0 4px 16px rgba(255, 152, 0, 0.15);">
                    <div style="display: flex; align-items: center; margin-bottom: 1em;">
                        <span style="background: #ff9800; color: white; padding: 0.5em 1em; border-radius: 25px; font-size: 0.9em; font-weight: 600; margin-right: 1em;">📖 ${readTime} MIN READ</span>
                        <span style="color: #e65100; font-weight: 600; font-size: 1.1em;">Extended Article</span>
                    </div>
                    
                    <h3 style="color: #bf360c; margin: 0 0 1em 0; font-size: 1.3em; line-height: 1.3;">Article Summary</h3>
                    
                    <p style="color: #3e2723; font-size: 1.05em; line-height: 1.6; margin: 0 0 1.5em 0; font-weight: 400;">
                        ${summary}
                    </p>
                    
                    <div style="background: rgba(255, 255, 255, 0.7); padding: 1.5em; border-radius: 12px; border: 2px solid #ffcc02; margin: 1.5em 0;">
                        <p style="margin: 0 0 1em 0; color: #bf360c; font-weight: 600; font-size: 1.1em; text-align: center;">
                            📰 <strong>Read the Full Article Here!</strong>
                        </p>
                        <p style="margin: 0 0 1em 0; color: #5d4037; font-size: 0.95em; text-align: center; line-height: 1.5;">
                            This article contains extensive coverage and detailed analysis. For the complete story with all facts, quotes, and context, visit The Guardian's website.
                        </p>
                        <div style="text-align: center;">
                            <a href="${article.webUrl}" target="_blank" rel="noopener noreferrer" 
                               style="display: inline-block; background: linear-gradient(45deg, #ff9800 0%, #f57c00 100%); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; font-size: 1em; box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3); transition: all 0.3s ease;"
                               onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 16px rgba(255, 152, 0, 0.4)'"
                               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(255, 152, 0, 0.3)'">
                                🔗 Read Full Article on The Guardian
                            </a>
                        </div>
                    </div>
                    
                    <p style="margin: 1em 0 0 0; color: #795548; font-size: 0.85em; font-style: italic; text-align: center;">
                        Preview shown above • Full article: ${readTime} minutes • Source: The Guardian
                    </p>
                </div>`;

            // Replace the article content with summary for long articles
            articleHtml = summaryHtml;
        }

        // Extract tags for categories
        const tags = [
            article.sectionName,
            article.pillarName,
            ...article.tags
                .filter(tag => tag.type === 'keyword')
                .slice(0, 3)
                .map(tag => tag.webTitle)
        ].filter(Boolean);

        return {
            title: article.fields?.headline || article.webTitle,
            authorName: author,
            createdAt: formatDate(article.webPublicationDate),
            readTime: readTime,
            tags: tags,
            authorId: 'guardian-api',
            hasReflectionRoom: false,
            html: articleHtml
        };
    }

    private formatPlainTextToHtml(text: string): string {
        if (!text) return '';

        // Clean up the text first
        let cleanText = text
            .replace(/pic\.twitter\.com\/[a-zA-Z0-9]+/g, '') // Remove Twitter pic links
            .replace(/\?ref_src=twsrc[^\s]*/g, '') // Remove Twitter tracking parameters
            .replace(/\s{3,}/g, ' ') // Normalize whitespace
            .trim();

        // Split the text into paragraphs based on double line breaks
        let paragraphs = cleanText.split(/\n\s*\n/);

        // If there are no double line breaks, try single line breaks for very long texts
        if (paragraphs.length === 1 && cleanText.length > 1000) {
            // For very long texts without double line breaks, split on sentence endings followed by new lines
            paragraphs = cleanText.split(/(?<=[.!?])\s*\n+/);
        }

        // If still one long paragraph, try to split on sentences that are likely paragraph breaks
        if (paragraphs.length === 1 && cleanText.length > 1500) {
            // Split on sentences that end with periods and are followed by a capital letter (likely new paragraph)
            paragraphs = cleanText.split(/(?<=[.!?])\s+(?=[A-Z][a-z])/);

            // Group sentences into reasonable paragraph lengths (3-5 sentences each)
            const groupedParagraphs: string[] = [];
            let currentParagraph = '';
            let sentenceCount = 0;

            for (const sentence of paragraphs) {
                currentParagraph += (currentParagraph ? ' ' : '') + sentence.trim();
                sentenceCount++;

                // End paragraph after 3-5 sentences or if it's getting too long
                if (sentenceCount >= 3 && (sentenceCount >= 5 || currentParagraph.length > 400)) {
                    groupedParagraphs.push(currentParagraph);
                    currentParagraph = '';
                    sentenceCount = 0;
                }
            }

            // Add any remaining content
            if (currentParagraph.trim()) {
                groupedParagraphs.push(currentParagraph);
            }

            paragraphs = groupedParagraphs;
        }

        // Convert each paragraph to HTML
        return paragraphs
            .map(paragraph => {
                const trimmed = paragraph.trim();
                if (!trimmed) return '';

                // Handle other live blog timestamps (with colons)
                if (trimmed.match(/^\d{1,2}:\d{2}(?:am|pm)?\s+BST/i)) {
                    return `<div style="margin: 1em 0; padding: 0.5em; background: #f0f0f0; border-radius: 4px; font-size: 0.9em; color: #666;"><strong>${trimmed}</strong></div>`;
                }

                // Handle Twitter attributions
                if (trimmed.match(/^—\s*.*?@\w+/)) {
                    return `<div style="margin: 1em 0; font-style: italic; color: #666; border-left: 3px solid #1da1f2; padding-left: 1em;">${trimmed}</div>`;
                }

                // Escape HTML characters for regular paragraphs
                const escaped = trimmed
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');

                return `<p style="margin-bottom: 1.5em; line-height: 1.6;">${escaped}</p>`;
            })
            .filter(Boolean)
            .join('\n');
    }

    private isLiveBlog(article: any): boolean {
        // Check if this is a live blog based on various indicators
        const tags = article.tags || [];
        const sectionName = article.sectionName?.toLowerCase() || '';
        const webTitle = article.webTitle?.toLowerCase() || '';
        const headline = article.fields?.headline?.toLowerCase() || '';

        // Only check for liveBloggingNow field (not isLive since it's true for all articles)
        const liveBloggingNow = article.fields?.liveBloggingNow === true || article.fields?.liveBloggingNow === "true";

        if (liveBloggingNow) {
            return true;
        }

        // Check for live blog indicators in content
        const hasLiveTags = tags.some((tag: any) => {
            const tagId = tag.id?.toLowerCase() || '';
            const tagTitle = tag.webTitle?.toLowerCase() || '';
            // Look for specific live blog tags, not just any tag containing "live"
            return tagId.includes('live-blog') || tagTitle.includes('live blog') ||
                tagId.includes('liveblog') || tagTitle.includes('liveblog');
        });

        const hasLiveSection = sectionName.includes('live');

        // Be more specific about live blog title patterns
        const hasLiveTitle = webTitle.includes('live blog') ||
            webTitle.includes('– live') ||
            webTitle.includes('- live') ||
            webTitle.includes('liveblog') ||
            webTitle.match(/\blive\b.*\bupdates?\b/i) ||
            webTitle.match(/\blive\b.*\bcoverage\b/i);

        const hasLiveHeadline = headline.includes('live blog') ||
            headline.includes('– live') ||
            headline.includes('- live') ||
            headline.includes('liveblog') ||
            headline.match(/\blive\b.*\bupdates?\b/i) ||
            headline.match(/\blive\b.*\bcoverage\b/i);

        const isLiveByContent = hasLiveTags || hasLiveSection || hasLiveTitle || hasLiveHeadline;

        return isLiveByContent;
    }

    private createLiveBlogPreview(article: any, content: string): string {
        // Clean the content first
        let cleanContent = this.removeGuardianPromoContent(content);

        // Extract first few paragraphs for preview (limit to ~300 words)
        let preview = '';
        if (cleanContent) {
            // Remove HTML tags for word counting
            const textContent = cleanContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            const words = textContent.split(' ');

            // Take first 50-80 words for preview
            const previewWords = words.slice(0, Math.min(80, words.length));
            preview = previewWords.join(' ');

            // If we cut off mid-sentence, try to end at a sentence boundary
            if (words.length > 80) {
                const lastSentenceEnd = preview.lastIndexOf('.');
                if (lastSentenceEnd > preview.length * 0.7) {
                    preview = preview.substring(0, lastSentenceEnd + 1);
                } else {
                    preview += '...';
                }
            }
        }

        // Create live blog preview HTML
        return `
            <div class="live-blog-notice" style="margin: 2em 0; padding: 2em; background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%); border-radius: 16px; color: white; text-align: center; box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);">
                <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 1em;">
                    <div style="width: 12px; height: 12px; background: white; border-radius: 50%; margin-right: 12px; animation: pulse 2s infinite;"></div>
                    <h2 style="margin: 0; font-size: 1.5em; font-weight: 700;">🔴 LIVE BLOG</h2>
                </div>
                <p style="margin: 0 0 1.5em 0; font-size: 1.1em; opacity: 0.95; line-height: 1.5;">
                    This is a live, continuously updating news story. For the most current information and real-time updates, please visit the original Guardian live blog.
                </p>
                <div style="background: rgba(255,255,255,0.15); border-radius: 12px; padding: 1.5em; margin: 1.5em 0; backdrop-filter: blur(10px);">
                    <h3 style="margin: 0 0 1em 0; color: white; font-size: 1.2em;">Latest Updates Preview:</h3>
                    <p style="margin: 0; color: rgba(255,255,255,0.9); line-height: 1.6; font-style: italic;">
                        ${preview || 'Live updates are being posted continuously...'}
                    </p>
                </div>
                <a href="${article.webUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="display: inline-flex; align-items: center; gap: 12px; background: white; color: #ee5a24; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.1em; transition: all 0.3s ease; box-shadow: 0 4px 16px rgba(0,0,0,0.2);"
                   onmouseover="this.style.transform=&quot;translateY(-2px)&quot;; this.style.boxShadow=&quot;0 6px 20px rgba(0,0,0,0.3)&quot;;"
                   onmouseout="this.style.transform=&quot;translateY(0)&quot;; this.style.boxShadow=&quot;0 4px 16px rgba(0,0,0,0.2)&quot;;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                    Follow Live Updates on The Guardian
                </a>
            </div>

            <style>
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(1.1); }
                }
            </style>
        `;
    }

    private removeGuardianPromoContent(content: string): string {
        // Remove Guardian self-promotional content patterns
        const promoPatterns = [
            // App and newsletter promotions - enhanced patterns
            /Get our breaking news email[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Get our[^.]*?breaking news email[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Download our free app[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Download our[^.]*?app[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Sign up for[^.]*?newsletter[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Subscribe to[^.]*?podcast[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,

            // The specific pattern you mentioned - multiple variations
            /Get our breaking news email,\s*free app or daily news podcast[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /free app or daily news podcast[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /breaking news email,\s*free app or daily news podcast[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,

            // More comprehensive app/newsletter patterns
            /Get our[^.]*?(?:app|email|newsletter|podcast)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Download the Guardian[^.]*?(?:app|application)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Subscribe to our[^.]*?(?:newsletter|podcast)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,

            // Welcome messages and author introductions in live blogs
            /Good morning\s*Welcome to another[^.]*?live blog\.(?:\s*<[^>]*>)*\s*/gi,
            /Good evening\s*Welcome to[^.]*?live blog\.(?:\s*<[^>]*>)*\s*/gi,
            /Welcome to another [^.]*?live blog\.(?:\s*<[^>]*>)*\s*/gi,
            /I'm [A-Z][a-z]+ [A-Z][a-z]+ and I'll be taking[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /With that, let's get started[^.…]*?[.…](?:\s*<[^>]*>)*\s*/gi,

            // Generic promotional content
            /Follow us on[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Download the Guardian app[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Follow the Guardian on[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,

            // Social media promotions
            /Follow us on (?:Twitter|Facebook|Instagram|LinkedIn)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Join us on[^.]*?(?:Twitter|Facebook|Instagram|LinkedIn)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,

            // Newsletter and subscription calls
            /Sign up to[^.]*?(?:newsletter|email|updates)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Subscribe for[^.]*?(?:updates|news|newsletter)[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,

            // Guardian-specific promotional content
            /Read more on the Guardian[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Visit the Guardian[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,
            /Guardian readers can[^.]*?\.(?:\s*<[^>]*>)*\s*/gi,

            // Links wrapped in promotional text
            /<p[^>]*>\s*<a[^>]*>(?:Get our|Download|Subscribe|Follow)[^<]*<\/a>[^<]*<\/p>\s*/gi,

            // Remove entire promotional paragraphs
            /<p[^>]*>[^<]*(?:breaking news email|free app|daily news podcast|newsletter|subscribe|download)[^<]*<\/p>\s*/gi,
        ];

        let cleanContent = content;

        // Apply all patterns
        promoPatterns.forEach(pattern => {
            cleanContent = cleanContent.replace(pattern, '');
        });

        // Additional cleanup for promotional links and elements
        cleanContent = cleanContent
            // Remove promotional link lists
            .replace(/<ul[^>]*>\s*<li[^>]*>\s*<a[^>]*>(?:Get our|Download|Subscribe)[^<]*<\/a>[^<]*<\/li>\s*<\/ul>\s*/gi, '')
            // Remove promotional divs
            .replace(/<div[^>]*class="[^"]*(?:promo|newsletter|subscribe)[^"]*"[^>]*>.*?<\/div>\s*/gi, '')
            // Clean up extra whitespace and empty paragraphs
            .replace(/(<p>\s*<\/p>)/gi, '')
            .replace(/(<p[^>]*>\s*<\/p>)/gi, '')
            .replace(/\s+/g, ' ')
            .trim();

        return cleanContent;
    }

    private processRegularArticleContent(content: string): string {
        // Process regular article content - only updated timestamps
        return this.processCommonContent(content);
    }

    private processCommonContent(content: string): string {
        // Common processing for both article types
        let processedContent = content;

        // Detect "Updated at" timestamps for both types
        processedContent = processedContent.replace(
            /(Updated at\s+\d{1,2}\.\d{2}(?:am|pm)\s+(?:GMT|BST|EST|PST|UTC))/gi,
            '<div class="article-updated">📝 ARTICLE UPDATED • $1</div>'
        );

        return processedContent;
    }

    isConfigured(): boolean {
        return !!(this.apiKey && this.apiKey !== 'YOUR_API_KEY_HERE');
    }

    // Get personalized Guardian articles based on user interactions
    async getPersonalizedArticles(
        userId: string,
        interests: string[] = [],
        count: number = 20
    ): Promise<GuardianArticle[]> {
        try {
            // Get articles from multiple relevant sections
            const articlesToScore: GuardianArticle[] = [];

            // Get user preferences to understand their interests
            const userPreferences = await recommendationService.getUserPreferences(userId);

            // Determine sections to search based on user preferences or interests
            let sectionsToSearch: string[] = [];

            if (userPreferences && Object.keys(userPreferences.preferredSections).length > 0) {
                // Use top 3 preferred sections
                sectionsToSearch = Object.entries(userPreferences.preferredSections)
                    .sort(([, a], [, b]) => b - a)
                    .slice(0, 3)
                    .map(([section]) => section);
            } else {
                // Fallback to interests or popular sections
                sectionsToSearch = interests.slice(0, 3);
                if (sectionsToSearch.length === 0) {
                    sectionsToSearch = ['world', 'technology', 'politics'];
                }
            }

            // Fetch articles from each preferred section
            for (const section of sectionsToSearch) {
                try {
                    const sectionArticles = await this.searchArticles('', section, 1, 8);
                    articlesToScore.push(...sectionArticles.results);
                } catch (error) {
                    console.warn(`Failed to fetch articles from section ${section}:`, error);
                }
            }

            // Also get some general articles for diversity
            try {
                const generalArticles = await this.searchArticles('', undefined, 1, 10);
                articlesToScore.push(...generalArticles.results);
            } catch (error) {
                console.warn('Failed to fetch general articles:', error);
            }

            // Remove duplicates
            const uniqueArticles = articlesToScore.filter((article, index, self) =>
                index === self.findIndex(a => a.id === article.id)
            );

            // Score articles using recommendation system
            const scoredArticles = await recommendationService.scoreGuardianArticles(userId, uniqueArticles);

            // Apply scores to articles and sort by recommendation score
            const personalizedArticles = uniqueArticles.map(article => {
                const scoreData = scoredArticles.find(s => s.articleId === article.id);
                return {
                    ...article,
                    recommendationScore: scoreData?.score || 0,
                    recommendationReasons: scoreData?.reasons || []
                };
            }).sort((a, b) => (b.recommendationScore || 0) - (a.recommendationScore || 0));

            return personalizedArticles.slice(0, count);
        } catch (error) {
            console.error('Error getting personalized articles:', error);
            // Fallback to regular search
            const fallbackResponse = await this.searchArticles('', undefined, 1, count);
            return fallbackResponse.results;
        }
    }

    // Track user interaction with a Guardian article
    async trackUserInteraction(
        userId: string,
        article: GuardianArticle,
        interactionType: 'like' | 'comment' | 'view',
        context?: string
    ): Promise<void> {
        try {
            await recommendationService.trackInteraction({
                userId,
                articleId: article.id,
                articleType: 'guardian',
                interactionType,
                articleMetadata: {
                    title: article.webTitle,
                    section: article.sectionName,
                    tags: article.tags?.map(tag => tag.webTitle) || [],
                    url: article.webUrl,
                    publishedDate: article.webPublicationDate
                },
                interactionContext: context
            });
        } catch (error) {
            console.error('Error tracking user interaction:', error);
        }
    }

    // Get similar articles to one the user engaged with
    async getSimilarArticles(
        userId: string,
        referenceArticle: GuardianArticle,
        count: number = 5
    ): Promise<GuardianArticle[]> {
        try {
            // Search for articles in the same section with related keywords
            const keywords = referenceArticle.webTitle.split(' ')
                .filter(word => word.length > 3)
                .slice(0, 3)
                .join(' ');

            const similarArticlesResponse = await this.searchArticles(
                keywords,
                referenceArticle.sectionName,
                1,
                count * 2
            );

            // Filter out the reference article itself
            const candidateArticles = similarArticlesResponse.results.filter(
                article => article.id !== referenceArticle.id
            );

            // Score articles for similarity
            const scoredArticles = await recommendationService.scoreGuardianArticles(userId, candidateArticles);

            // Apply scores and sort
            const rankedArticles = candidateArticles.map(article => {
                const scoreData = scoredArticles.find(s => s.articleId === article.id);
                return {
                    ...article,
                    recommendationScore: scoreData?.score || 0,
                    recommendationReasons: scoreData?.reasons || []
                };
            }).sort((a, b) => (b.recommendationScore || 0) - (a.recommendationScore || 0));

            return rankedArticles.slice(0, count);
        } catch (error) {
            console.error('Error getting similar articles:', error);
            return [];
        }
    }
}

export const guardianService = new GuardianService(); 