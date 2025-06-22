import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    orderBy,
    limit,
    updateDoc,
    arrayUnion,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase/clientApp';

export interface UserInteraction {
    userId: string;
    articleId: string;
    articleType: 'guardian' | 'internal' | 'external';
    interactionType: 'like' | 'comment' | 'view';
    articleMetadata: {
        title: string;
        section?: string;
        tags?: string[];
        keywords?: string[];
        url?: string;
        publishedDate?: string;
    };
    timestamp: any;
    interactionContext?: string; // comment content for comments
}

export interface UserPreferences {
    userId: string;
    preferredSections: { [section: string]: number }; // section -> interest score
    preferredTags: { [tag: string]: number }; // tag -> interest score
    preferredKeywords: { [keyword: string]: number }; // keyword -> interest score
    totalInteractions: number;
    lastUpdated: any;
}

export interface RecommendationScore {
    articleId: string;
    score: number;
    reasons: string[];
}

class RecommendationService {
    // Track user interaction with an article
    async trackInteraction(interaction: Omit<UserInteraction, 'timestamp'>): Promise<void> {
        try {
            const interactionDoc = doc(collection(db, 'userInteractions'));
            await setDoc(interactionDoc, {
                ...interaction,
                timestamp: serverTimestamp()
            });

            // Update user preferences based on this interaction
            await this.updateUserPreferences(interaction.userId, interaction);
        } catch (error) {
            console.error('Error tracking interaction:', error);
        }
    }

    // Update user preferences based on interaction
    private async updateUserPreferences(userId: string, interaction: Omit<UserInteraction, 'timestamp'>): Promise<void> {
        try {
            const preferencesRef = doc(db, 'userPreferences', userId);
            const preferencesSnap = await getDoc(preferencesRef);

            let preferences: UserPreferences;

            if (preferencesSnap.exists()) {
                preferences = preferencesSnap.data() as UserPreferences;
            } else {
                preferences = {
                    userId,
                    preferredSections: {},
                    preferredTags: {},
                    preferredKeywords: {},
                    totalInteractions: 0,
                    lastUpdated: serverTimestamp()
                };
            }

            // Weight different interaction types
            const interactionWeights = {
                'like': 3,
                'comment': 5,
                'view': 1
            };

            const weight = interactionWeights[interaction.interactionType];

            // Update section preferences
            if (interaction.articleMetadata.section) {
                const section = interaction.articleMetadata.section.toLowerCase();
                preferences.preferredSections[section] = (preferences.preferredSections[section] || 0) + weight;
            }

            // Update tag preferences
            if (interaction.articleMetadata.tags) {
                interaction.articleMetadata.tags.forEach(tag => {
                    const normalizedTag = tag.toLowerCase();
                    preferences.preferredTags[normalizedTag] = (preferences.preferredTags[normalizedTag] || 0) + weight;
                });
            }

            // Update keyword preferences (extract from title)
            if (interaction.articleMetadata.title) {
                const keywords = this.extractKeywords(interaction.articleMetadata.title);
                keywords.forEach(keyword => {
                    preferences.preferredKeywords[keyword] = (preferences.preferredKeywords[keyword] || 0) + weight;
                });
            }

            preferences.totalInteractions += 1;
            preferences.lastUpdated = serverTimestamp();

            await setDoc(preferencesRef, preferences);
        } catch (error) {
            console.error('Error updating user preferences:', error);
        }
    }

    // Extract keywords from article title
    private extractKeywords(title: string): string[] {
        // Remove common stop words and extract meaningful keywords
        const stopWords = new Set([
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
            'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
            'between', 'among', 'around', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have',
            'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might',
            'must', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they'
        ]);

        return title
            .toLowerCase()
            .replace(/[^\w\s]/g, '') // Remove punctuation
            .split(/\s+/)
            .filter(word => word.length > 2 && !stopWords.has(word))
            .slice(0, 10); // Limit to 10 keywords
    }

    // Get user preferences
    async getUserPreferences(userId: string): Promise<UserPreferences | null> {
        try {
            const preferencesRef = doc(db, 'userPreferences', userId);
            const preferencesSnap = await getDoc(preferencesRef);

            if (preferencesSnap.exists()) {
                return preferencesSnap.data() as UserPreferences;
            }
            return null;
        } catch (error) {
            console.error('Error getting user preferences:', error);
            return null;
        }
    }

    // Score Guardian articles for recommendation
    async scoreGuardianArticles(userId: string, articles: any[]): Promise<RecommendationScore[]> {
        try {
            const preferences = await this.getUserPreferences(userId);

            if (!preferences || preferences.totalInteractions < 2) {
                // Not enough data for personalization, return random articles
                return articles.map(article => ({
                    articleId: article.id,
                    score: Math.random(),
                    reasons: ['New user - exploring diverse content']
                }));
            }

            return articles.map(article => {
                let score = 0;
                const reasons: string[] = [];

                // Section matching
                if (article.sectionName) {
                    const sectionScore = preferences.preferredSections[article.sectionName.toLowerCase()] || 0;
                    if (sectionScore > 0) {
                        score += sectionScore * 0.3; // 30% weight for section
                        reasons.push(`Interested in ${article.sectionName} section`);
                    }
                }

                // Tag matching
                if (article.tags) {
                    article.tags.forEach((tag: any) => {
                        const tagScore = preferences.preferredTags[tag.webTitle?.toLowerCase()] || 0;
                        if (tagScore > 0) {
                            score += tagScore * 0.25; // 25% weight for tags
                            reasons.push(`Previously engaged with ${tag.webTitle}`);
                        }
                    });
                }

                // Keyword matching in title
                if (article.webTitle) {
                    const articleKeywords = this.extractKeywords(article.webTitle);
                    articleKeywords.forEach(keyword => {
                        const keywordScore = preferences.preferredKeywords[keyword] || 0;
                        if (keywordScore > 0) {
                            score += keywordScore * 0.2; // 20% weight for keywords
                            reasons.push(`Interest in "${keyword}"`);
                        }
                    });
                }

                // Recency boost (prefer newer articles)
                if (article.webPublicationDate) {
                    const daysOld = (Date.now() - new Date(article.webPublicationDate).getTime()) / (1000 * 60 * 60 * 24);
                    const recencyMultiplier = Math.max(0.5, 1 - (daysOld / 30)); // Decay over 30 days
                    score *= recencyMultiplier;
                }

                // Novelty bonus (prefer articles from less-seen sections)
                const sectionCount = preferences.preferredSections[article.sectionName?.toLowerCase()] || 0;
                if (sectionCount < 3) {
                    score += 1; // Small bonus for exploring new sections
                    reasons.push('Exploring new topics');
                }

                return {
                    articleId: article.id,
                    score: Math.max(0, score),
                    reasons: reasons.length > 0 ? reasons : ['General interest']
                };
            }).sort((a, b) => b.score - a.score);
        } catch (error) {
            console.error('Error scoring articles:', error);
            return articles.map(article => ({
                articleId: article.id,
                score: Math.random(),
                reasons: ['Error in recommendation system']
            }));
        }
    }

    // Get recent user interactions for analytics
    async getUserInteractionHistory(userId: string, limitCount: number = 50): Promise<UserInteraction[]> {
        try {
            const interactionsQuery = query(
                collection(db, 'userInteractions'),
                where('userId', '==', userId),
                orderBy('timestamp', 'desc'),
                limit(limitCount)
            );

            const querySnapshot = await getDocs(interactionsQuery);
            return querySnapshot.docs.map(doc => doc.data() as UserInteraction);
        } catch (error) {
            console.error('Error getting user interaction history:', error);
            return [];
        }
    }

    // Get popular Guardian sections among all users
    async getPopularGuardianSections(): Promise<{ section: string; popularity: number }[]> {
        try {
            const interactionsQuery = query(
                collection(db, 'userInteractions'),
                where('articleType', '==', 'guardian'),
                limit(1000)
            );

            const querySnapshot = await getDocs(interactionsQuery);
            const sectionCounts: { [section: string]: number } = {};

            querySnapshot.docs.forEach(doc => {
                const interaction = doc.data() as UserInteraction;
                if (interaction.articleMetadata.section) {
                    const section = interaction.articleMetadata.section.toLowerCase();
                    sectionCounts[section] = (sectionCounts[section] || 0) + 1;
                }
            });

            return Object.entries(sectionCounts)
                .map(([section, count]) => ({ section, popularity: count }))
                .sort((a, b) => b.popularity - a.popularity);
        } catch (error) {
            console.error('Error getting popular sections:', error);
            return [];
        }
    }
}

export const recommendationService = new RecommendationService(); 