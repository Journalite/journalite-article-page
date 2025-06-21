// Standard news article interface (compatible with Guardian API)
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

// Import Guardian service for news functionality
import { guardianService, GuardianArticle } from './guardianService';

class NewsService {
    constructor() {
        // Using Guardian API exclusively for news
        console.log('📰 News service initialized with Guardian API');
    }

    // Convert Guardian article to NewsArticle format for compatibility
    private convertGuardianToNewsArticle(guardianArticle: GuardianArticle): NewsArticle {
        return {
            title: guardianArticle.webTitle,
            description: guardianArticle.fields?.standfirst || guardianArticle.fields?.trailText || '',
            content: guardianArticle.fields?.bodyText || guardianArticle.fields?.standfirst || '',
            url: guardianArticle.webUrl,
            urlToImage: guardianArticle.fields?.thumbnail || '',
            publishedAt: guardianArticle.webPublicationDate,
            source: {
                name: 'The Guardian'
            },
            author: guardianArticle.fields?.byline || 'The Guardian'
        };
    }

    async getTopHeadlines(category: string = 'general', country: string = 'us'): Promise<NewsResponse> {
        if (!guardianService.isConfigured()) {
            throw new Error('Guardian API not configured. Please set NEXT_PUBLIC_GUARDIAN_API_KEY in your environment variables.');
        }

        try {
            // Map categories to Guardian sections
            const categoryToSectionMap: { [key: string]: string } = {
                'general': '',
                'business': 'business',
                'technology': 'technology',
                'science': 'science',
                'health': 'society',
                'sports': 'sport',
                'entertainment': 'culture'
            };

            const section = categoryToSectionMap[category] || '';
            console.log(`📰 Fetching Guardian headlines for section: ${section || 'all'}`);

            const guardianResponse = await guardianService.searchArticles('', section, 1, 10);

            const articles = guardianResponse.results.map(article =>
                this.convertGuardianToNewsArticle(article)
            );

            return {
                status: 'ok',
                totalResults: guardianResponse.total || articles.length,
                articles: articles
            };

        } catch (error) {
            console.error('Error fetching Guardian headlines:', error);
            throw new Error('Failed to fetch news headlines from The Guardian');
        }
    }

    async searchArticles(query: string, sortBy: string = 'newest'): Promise<NewsResponse> {
        if (!guardianService.isConfigured()) {
            throw new Error('Guardian API not configured. Please set NEXT_PUBLIC_GUARDIAN_API_KEY in your environment variables.');
        }

        try {
            console.log(`🔍 Searching Guardian for: "${query}"`);

            const guardianResponse = await guardianService.searchArticles(query, undefined, 1, 10);

            const articles = guardianResponse.results.map(article =>
                this.convertGuardianToNewsArticle(article)
            );

            return {
                status: 'ok',
                totalResults: guardianResponse.total || articles.length,
                articles: articles
            };

        } catch (error) {
            console.error('Error searching Guardian articles:', error);
            throw new Error('Failed to search Guardian articles');
        }
    }

    isConfigured(): boolean {
        return guardianService.isConfigured();
    }

    getCurrentProvider(): string {
        return guardianService.isConfigured() ? 'The Guardian' : 'Not configured';
    }

    getConfiguredServices(): string[] {
        return guardianService.isConfigured() ? ['The Guardian'] : [];
    }
}

export const newsService = new NewsService(); 