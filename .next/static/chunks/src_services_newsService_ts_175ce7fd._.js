(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/services/newsService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// NewsData.io interfaces (primary source)
__turbopack_context__.s({
    "newsService": (()=>newsService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class NewsService {
    newsDataApiKey;
    newsApiKey;
    newsDataBaseUrl = 'https://newsdata.io/api/1/news';
    newsApiBaseUrl = 'https://newsapi.org/v2';
    constructor(){
        // Primary: NewsData.io
        this.newsDataApiKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_NEWSDATA_API_KEY || '';
        // Fallback: NewsAPI.org  
        this.newsApiKey = ("TURBOPACK compile-time value", "eee337e6eb7e49f4a013473e136af6fc") || '';
        if (!this.newsDataApiKey || this.newsDataApiKey === 'YOUR_API_KEY_HERE') {
            console.warn('NewsData.io API key not configured. Please set NEXT_PUBLIC_NEWSDATA_API_KEY in your environment variables.');
        }
        if (!this.newsApiKey || this.newsApiKey === 'YOUR_API_KEY_HERE') {
            console.warn('NewsAPI.org key not configured. NewsData.io will be used exclusively.');
        }
    }
    // Helper method to convert NewsData.io articles to standard format
    convertNewsDataToStandard(newsDataArticle) {
        return {
            title: newsDataArticle.title,
            description: newsDataArticle.description || '',
            content: newsDataArticle.content || newsDataArticle.description || '',
            url: newsDataArticle.link,
            urlToImage: newsDataArticle.image_url || '',
            publishedAt: newsDataArticle.pubDate,
            source: {
                name: newsDataArticle.source_name || newsDataArticle.source_id
            },
            author: newsDataArticle.creator?.[0] || newsDataArticle.source_name || 'Unknown'
        };
    }
    async getTopHeadlines(category = 'general', country = 'us') {
        // Try NewsData.io first (primary source)
        if (this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE') {
            try {
                console.log('📰 Fetching from NewsData.io (primary)');
                return await this.getNewsDataHeadlines(category, country);
            } catch (error) {
                console.warn('⚠️ NewsData.io failed, falling back to NewsAPI.org:', error);
            }
        }
        // Fallback to NewsAPI.org
        if (this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE') {
            console.log('📰 Using NewsAPI.org (fallback)');
            return await this.getNewsApiHeadlines(category, country);
        }
        throw new Error('No news API keys configured. Please set NEXT_PUBLIC_NEWSDATA_API_KEY or NEXT_PUBLIC_NEWS_API_KEY');
    }
    async searchArticles(query, sortBy = 'publishedAt') {
        // Try NewsData.io first (primary source)
        if (this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE') {
            try {
                console.log('🔍 Searching with NewsData.io (primary)');
                return await this.searchNewsDataArticles(query);
            } catch (error) {
                console.warn('⚠️ NewsData.io search failed, falling back to NewsAPI.org:', error);
            }
        }
        // Fallback to NewsAPI.org
        if (this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE') {
            console.log('🔍 Searching with NewsAPI.org (fallback)');
            return await this.searchNewsApiArticles(query, sortBy);
        }
        throw new Error('No news API keys configured. Please set NEXT_PUBLIC_NEWSDATA_API_KEY or NEXT_PUBLIC_NEWS_API_KEY');
    }
    // NewsData.io implementation
    async getNewsDataHeadlines(category = 'general', country = 'us') {
        const params = new URLSearchParams({
            apikey: this.newsDataApiKey,
            country: country,
            language: 'en',
            size: '10'
        });
        // Map categories to NewsData.io categories
        const categoryMap = {
            'general': 'top',
            'business': 'business',
            'technology': 'technology',
            'science': 'science',
            'health': 'health',
            'sports': 'sports',
            'entertainment': 'entertainment'
        };
        if (categoryMap[category]) {
            params.append('category', categoryMap[category]);
        }
        const url = `${this.newsDataBaseUrl}?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`NewsData.io HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Convert to standard format
        return {
            status: data.status,
            totalResults: data.totalResults,
            articles: data.results.map((article)=>this.convertNewsDataToStandard(article))
        };
    }
    async searchNewsDataArticles(query) {
        const params = new URLSearchParams({
            apikey: this.newsDataApiKey,
            q: query,
            language: 'en',
            size: '10'
        });
        const url = `${this.newsDataBaseUrl}?${params.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`NewsData.io search HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Convert to standard format
        return {
            status: data.status,
            totalResults: data.totalResults,
            articles: data.results.map((article)=>this.convertNewsDataToStandard(article))
        };
    }
    // NewsAPI.org fallback implementation
    async getNewsApiHeadlines(category = 'general', country = 'us') {
        const url = `${this.newsApiBaseUrl}/top-headlines?category=${category}&country=${country}&apiKey=${this.newsApiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`NewsAPI.org HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
    async searchNewsApiArticles(query, sortBy = 'publishedAt') {
        const url = `${this.newsApiBaseUrl}/everything?q=${encodeURIComponent(query)}&sortBy=${sortBy}&apiKey=${this.newsApiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`NewsAPI.org search HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
    isConfigured() {
        return !!(this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE' || this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE');
    }
    getConfiguredServices() {
        const services = [];
        if (this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE') {
            services.push('NewsData.io (Primary)');
        }
        if (this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE') {
            services.push('NewsAPI.org (Fallback)');
        }
        return services;
    }
    getCurrentProvider() {
        if (this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE') {
            return 'NewsData.io';
        }
        if (this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE') {
            return 'NewsAPI.org';
        }
        return 'None configured';
    }
}
const newsService = new NewsService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_services_newsService_ts_175ce7fd._.js.map