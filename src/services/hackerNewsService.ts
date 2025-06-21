export interface HackerNewsItem {
    id: number;
    deleted?: boolean;
    type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
    by: string;
    time: number;
    text?: string;
    dead?: boolean;
    parent?: number;
    poll?: number;
    kids?: number[];
    url?: string;
    score?: number;
    title?: string;
    parts?: number[];
    descendants?: number;
}

export interface HackerNewsArticle {
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
    score: number;
    comments: number;
}

class HackerNewsService {
    private baseUrl = 'https://hacker-news.firebaseio.com/v0';

    async getTopStories(limit: number = 10): Promise<HackerNewsArticle[]> {
        try {
            // Get top story IDs
            const topStoriesResponse = await fetch(`${this.baseUrl}/topstories.json`);
            const topStoryIds: number[] = await topStoriesResponse.json();

            // Get the first 'limit' stories
            const storyIds = topStoryIds.slice(0, limit);

            // Fetch each story's details
            const stories = await Promise.all(
                storyIds.map(id => this.getStoryById(id))
            );

            // Filter out null results and convert to our format
            return stories
                .filter(story => story !== null)
                .map(story => this.convertToArticleFormat(story!));

        } catch (error) {
            console.error('Error fetching Hacker News top stories:', error);
            throw new Error('Failed to fetch Hacker News stories');
        }
    }

    async getNewStories(limit: number = 10): Promise<HackerNewsArticle[]> {
        try {
            // Get new story IDs
            const newStoriesResponse = await fetch(`${this.baseUrl}/newstories.json`);
            const newStoryIds: number[] = await newStoriesResponse.json();

            // Get the first 'limit' stories
            const storyIds = newStoryIds.slice(0, limit);

            // Fetch each story's details
            const stories = await Promise.all(
                storyIds.map(id => this.getStoryById(id))
            );

            // Filter out null results and convert to our format
            return stories
                .filter(story => story !== null)
                .map(story => this.convertToArticleFormat(story!));

        } catch (error) {
            console.error('Error fetching Hacker News new stories:', error);
            throw new Error('Failed to fetch Hacker News stories');
        }
    }

    async getBestStories(limit: number = 10): Promise<HackerNewsArticle[]> {
        try {
            // Get best story IDs
            const bestStoriesResponse = await fetch(`${this.baseUrl}/beststories.json`);
            const bestStoryIds: number[] = await bestStoriesResponse.json();

            // Get the first 'limit' stories
            const storyIds = bestStoryIds.slice(0, limit);

            // Fetch each story's details
            const stories = await Promise.all(
                storyIds.map(id => this.getStoryById(id))
            );

            // Filter out null results and convert to our format
            return stories
                .filter(story => story !== null)
                .map(story => this.convertToArticleFormat(story!));

        } catch (error) {
            console.error('Error fetching Hacker News best stories:', error);
            throw new Error('Failed to fetch Hacker News stories');
        }
    }

    private async getStoryById(id: number): Promise<HackerNewsItem | null> {
        try {
            const response = await fetch(`${this.baseUrl}/item/${id}.json`);
            const story: HackerNewsItem = await response.json();

            // Only return stories (not jobs, comments, etc.) that have titles
            if (story.type === 'story' && story.title && !story.deleted && !story.dead) {
                return story;
            }

            return null;
        } catch (error) {
            console.error(`Error fetching story ${id}:`, error);
            return null;
        }
    }

    private convertToArticleFormat(story: HackerNewsItem): HackerNewsArticle {
        // Create a description from the story text or a default
        const description = story.text
            ? this.stripHtml(story.text).substring(0, 200) + '...'
            : `Discussion on Hacker News with ${story.score || 0} points and ${story.descendants || 0} comments.`;

        return {
            title: story.title || 'Hacker News Story',
            description: description,
            content: story.text ? this.stripHtml(story.text) : description,
            url: story.url || `https://news.ycombinator.com/item?id=${story.id}`,
            urlToImage: '', // Hacker News doesn't provide images
            publishedAt: new Date(story.time * 1000).toISOString(),
            source: {
                name: 'Hacker News'
            },
            author: story.by || 'Anonymous',
            score: story.score || 0,
            comments: story.descendants || 0
        };
    }

    private stripHtml(html: string): string {
        // Simple HTML tag removal
        return html
            .replace(/<[^>]*>/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'")
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Search functionality (basic implementation)
    async searchStories(query: string, limit: number = 10): Promise<HackerNewsArticle[]> {
        try {
            // Since HN API doesn't have built-in search, we'll get top stories and filter
            const stories = await this.getTopStories(50); // Get more stories to search through

            const filteredStories = stories.filter(story =>
                story.title.toLowerCase().includes(query.toLowerCase()) ||
                story.description.toLowerCase().includes(query.toLowerCase())
            );

            return filteredStories.slice(0, limit);
        } catch (error) {
            console.error('Error searching Hacker News stories:', error);
            throw new Error('Failed to search Hacker News stories');
        }
    }

    isConfigured(): boolean {
        return true; // HackerNews API doesn't require authentication
    }
}

export const hackerNewsService = new HackerNewsService(); 