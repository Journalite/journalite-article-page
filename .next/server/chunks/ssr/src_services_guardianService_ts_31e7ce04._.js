module.exports = {

"[project]/src/services/guardianService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "guardianService": (()=>guardianService)
});
class GuardianService {
    apiKey;
    baseUrl = 'https://content.guardianapis.com';
    cache = new Map();
    cacheExpiry = 5 * 60 * 1000;
    constructor(){
        this.apiKey = ("TURBOPACK compile-time value", "c928b68e-9227-4e28-a734-63f37cbd301b") || '';
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            console.warn('Guardian API key not configured. Please set NEXT_PUBLIC_GUARDIAN_API_KEY in your environment variables.');
        }
    }
    getCacheKey(endpoint, params) {
        return `${endpoint}?${params.toString()}`;
    }
    getFromCache(cacheKey) {
        const cached = this.cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
            console.log('📋 Using cached Guardian data');
            return cached.data;
        }
        return null;
    }
    setCache(cacheKey, data) {
        this.cache.set(cacheKey, {
            data,
            timestamp: Date.now()
        });
        // Clean old cache entries (keep max 100 entries)
        if (this.cache.size > 100) {
            const oldestKey = this.cache.keys().next().value;
            if (oldestKey) {
                this.cache.delete(oldestKey);
            }
        }
    }
    async searchArticles(query = '', section, page = 1, pageSize = 50) {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('Guardian API key not configured');
        }
        const params = new URLSearchParams({
            'api-key': this.apiKey,
            'show-fields': 'headline,standfirst,body,main,thumbnail,byline,trailText,bodyText',
            'show-tags': 'contributor,keyword',
            'show-elements': 'image,video',
            'page-size': pageSize.toString(),
            'page': page.toString(),
            'order-by': 'newest'
        });
        if (query) {
            params.append('q', query);
        }
        if (section) {
            params.append('section', section);
        }
        // Check cache first
        const cacheKey = this.getCacheKey('/search', params);
        const cachedData = this.getFromCache(cacheKey);
        if (cachedData) {
            return cachedData;
        }
        const url = `${this.baseUrl}/search?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const result = data.response;
        // Cache the result
        this.setCache(cacheKey, result);
        console.log('🌐 Guardian API request made (cached for 5min)');
        return result;
    }
    async getArticleById(articleId) {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('Guardian API key not configured');
        }
        const params = new URLSearchParams({
            'api-key': this.apiKey,
            'show-fields': 'headline,standfirst,body,main,thumbnail,byline,trailText,bodyText',
            'show-tags': 'contributor,keyword',
            'show-elements': 'image,video'
        });
        const url = `${this.baseUrl}/${articleId}?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.response.content;
    }
    async getSections() {
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
    convertToArticleFormat(article) {
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
            // Use Guardian's body content directly - it's already well-formatted with images in the right places
            // Enhance existing images in the content with better styling
            bodyContent = bodyContent.replace(/<img([^>]*?)>/g, (match, attrs)=>{
                // Keep all existing attributes and enhance the styling
                return `<img ${attrs} style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />`;
            });
            // Enhance existing figure elements with better styling
            bodyContent = bodyContent.replace(/<figure([^>]*?)>/g, (match, attrs)=>{
                return `<figure ${attrs} style="margin: 2em auto; text-align: center;">`;
            });
            // Enhance figcaptions with better styling
            bodyContent = bodyContent.replace(/<figcaption([^>]*?)>/g, (match, attrs)=>{
                return `<figcaption ${attrs} style="margin-top: 0.5em; font-size: 0.9em; color: #666; font-style: italic; text-align: center;">`;
            });
            // Enhance video elements if they exist
            bodyContent = bodyContent.replace(/<video([^>]*?)>/g, (match, attrs)=>{
                return `<video ${attrs} style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px;" controls />`;
            });
            // Clean up only truly empty paragraphs
            bodyContent = bodyContent.replace(/<p>\s*<\/p>/g, '');
            articleHtml += bodyContent;
        }
        // Only add images from elements if the body content doesn't have any images
        // This prevents duplicate images and preserves the original layout
        const hasImagesInBody = articleHtml.includes('<img') || articleHtml.includes('<figure');
        if (!hasImagesInBody && article.elements && article.elements.length > 0) {
            // Add a main image at the top if available
            const mainImageElement = article.elements.find((element)=>element.type === 'image' && element.assets && element.assets.length > 0);
            if (mainImageElement) {
                const imageAsset = mainImageElement.assets.find((asset)=>asset.type === 'image');
                if (imageAsset) {
                    const imageUrl = imageAsset.typeData.secureFile || imageAsset.file;
                    const alt = imageAsset.typeData.alt || imageAsset.typeData.caption || article.webTitle;
                    const caption = imageAsset.typeData.caption || '';
                    // Add main image at the beginning of the article
                    const mainImageHtml = `<figure style="margin: 0 0 2em 0; text-align: center;">
              <img src="${imageUrl}" alt="${alt}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
              ${caption ? `<figcaption style="margin-top: 0.5em; font-size: 0.9em; color: #666; font-style: italic;">${caption}</figcaption>` : ''}
            </figure>`;
                    articleHtml = mainImageHtml + articleHtml;
                }
            }
        }
        // Fallback: add main field image only if no other images were added
        if (article.fields?.main && !articleHtml.includes('<img') && !articleHtml.includes('<figure')) {
            const mainImageHtml = `<figure style="margin: 0 0 2em 0; text-align: center;">
              <img src="${article.fields.main}" alt="${article.webTitle.replace(/"/g, '&quot;')}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
            </figure>`;
            articleHtml = mainImageHtml + articleHtml;
        }
        // Add link to original article with better styling
        articleHtml += `<div class="original-article-link" style="margin-top: 3em; padding: 1.5em; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; border-left: 4px solid #0066cc; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <p style="margin: 0; color: #495057;"><em>📰 <strong>Read the complete article at:</strong> <a href="${article.webUrl}" target="_blank" rel="noopener noreferrer" style="color: #0066cc; font-weight: 600; text-decoration: none; border-bottom: 1px solid transparent; transition: border-bottom 0.2s ease;" onmouseover="this.style.borderBottom='1px solid #0066cc'" onmouseout="this.style.borderBottom='1px solid transparent'">The Guardian</a></em></p>
    </div>`;
        // Extract author from byline or contributor tags
        const author = article.fields?.byline || article.tags.find((tag)=>tag.type === 'contributor')?.webTitle || 'The Guardian';
        // Format publication date
        const formatDate = (dateString)=>{
            try {
                const date = new Date(dateString);
                const options = {
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
        const wordCount = article.fields?.body ? article.fields.body.replace(/<[^>]*>/g, '').split(/\s+/).length : 300;
        const readTime = Math.ceil(wordCount / 200);
        // Extract tags for categories
        const tags = [
            article.sectionName,
            article.pillarName,
            ...article.tags.filter((tag)=>tag.type === 'keyword').slice(0, 3).map((tag)=>tag.webTitle)
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
    isConfigured() {
        return !!(this.apiKey && this.apiKey !== 'YOUR_API_KEY_HERE');
    }
}
const guardianService = new GuardianService();
}}),

};

//# sourceMappingURL=src_services_guardianService_ts_31e7ce04._.js.map