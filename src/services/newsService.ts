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
    private apiKey: string;
    private baseUrl = 'https://newsapi.org/v2';

    constructor() {
        this.apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY || '';
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            console.warn('News API key not configured. Please set NEXT_PUBLIC_NEWS_API_KEY in your environment variables.');
        }
    }

    async getTopHeadlines(category: string = 'general', country: string = 'us'): Promise<NewsResponse> {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('News API key not configured');
        }

        const url = `${this.baseUrl}/top-headlines?category=${category}&country=${country}&apiKey=${this.apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    async searchArticles(query: string, sortBy: string = 'publishedAt'): Promise<NewsResponse> {
        if (!this.apiKey || this.apiKey === 'YOUR_API_KEY_HERE') {
            throw new Error('News API key not configured');
        }

        const url = `${this.baseUrl}/everything?q=${encodeURIComponent(query)}&sortBy=${sortBy}&apiKey=${this.apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    isConfigured(): boolean {
        return !!(this.apiKey && this.apiKey !== 'YOUR_API_KEY_HERE');
    }
}

export const newsService = new NewsService(); 