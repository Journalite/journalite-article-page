// NewsData.io interfaces (primary source)
export interface NewsDataArticle {
    title: string;
    link: string;
    description: string;
    content: string;
    pubDate: string;
    image_url: string;
    source_id: string;
    source_name: string;
    creator: string[];
    category: string[];
    country: string[];
    language: string;
}

export interface NewsDataResponse {
    status: string;
    totalResults: number;
    results: NewsDataArticle[];
    nextPage?: string;
}

// Original NewsAPI.org interfaces (for fallback compatibility)
export interface NewsArticle {
    title: string;
    description: string;
    content: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: {
        name: string;
    };
    author: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

class NewsService {
    private newsDataApiKey: string;
    private newsApiKey: string;
    private newsDataBaseUrl = 'https://newsdata.io/api/1/news';
    private newsApiBaseUrl = 'https://newsapi.org/v2';

    constructor() {
        // Primary: NewsData.io
        this.newsDataApiKey = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY || '';
        // Fallback: NewsAPI.org  
        this.newsApiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY || '';

        if (!this.newsDataApiKey || this.newsDataApiKey === 'YOUR_API_KEY_HERE') {
            console.warn('NewsData.io API key not configured. Please set NEXT_PUBLIC_NEWSDATA_API_KEY in your environment variables.');
        }

        if (!this.newsApiKey || this.newsApiKey === 'YOUR_API_KEY_HERE') {
            console.warn('NewsAPI.org key not configured. NewsData.io will be used exclusively.');
        }
    }

    // Helper method to convert NewsData.io articles to standard format
    private convertNewsDataToStandard(newsDataArticle: NewsDataArticle): NewsArticle {
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

    async getTopHeadlines(category: string = 'general', country: string = 'us'): Promise<NewsResponse> {
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

    async searchArticles(query: string, sortBy: string = 'publishedAt'): Promise<NewsResponse> {
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
    private async getNewsDataHeadlines(category: string = 'general', country: string = 'us'): Promise<NewsResponse> {
        const params = new URLSearchParams({
            apikey: this.newsDataApiKey,
            country: country,
            language: 'en',
            size: '10'
        });

        // Map categories to NewsData.io categories
        const categoryMap: { [key: string]: string } = {
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

        const data: NewsDataResponse = await response.json();

        // Convert to standard format
        return {
            status: data.status,
            totalResults: data.totalResults,
            articles: data.results.map(article => this.convertNewsDataToStandard(article))
        };
    }

    private async searchNewsDataArticles(query: string): Promise<NewsResponse> {
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

        const data: NewsDataResponse = await response.json();

        // Convert to standard format
        return {
            status: data.status,
            totalResults: data.totalResults,
            articles: data.results.map(article => this.convertNewsDataToStandard(article))
        };
    }

    // NewsAPI.org fallback implementation
    private async getNewsApiHeadlines(category: string = 'general', country: string = 'us'): Promise<NewsResponse> {
        const url = `${this.newsApiBaseUrl}/top-headlines?category=${category}&country=${country}&apiKey=${this.newsApiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`NewsAPI.org HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    private async searchNewsApiArticles(query: string, sortBy: string = 'publishedAt'): Promise<NewsResponse> {
        const url = `${this.newsApiBaseUrl}/everything?q=${encodeURIComponent(query)}&sortBy=${sortBy}&apiKey=${this.newsApiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`NewsAPI.org search HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    isConfigured(): boolean {
        return !!(
            (this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE') ||
            (this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE')
        );
    }

    getConfiguredServices(): string[] {
        const services = [];
        if (this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE') {
            services.push('NewsData.io (Primary)');
        }
        if (this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE') {
            services.push('NewsAPI.org (Fallback)');
        }
        return services;
    }

    getCurrentProvider(): string {
        if (this.newsDataApiKey && this.newsDataApiKey !== 'YOUR_API_KEY_HERE') {
            return 'NewsData.io';
        }
        if (this.newsApiKey && this.newsApiKey !== 'YOUR_API_KEY_HERE') {
            return 'NewsAPI.org';
        }
        return 'None configured';
    }
}

export const newsService = new NewsService(); 