import {
    collection,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

export interface ExternalArticleSocial {
    id?: string;
    externalId: string; // The Guardian article ID or NewsAPI URL
    source: 'guardian' | 'newsapi';
    title: string;
    url: string;
    likes: string[];
    createdAt: any;
    lastActivity: any;
}

export class ExternalArticleService {

    // Get or create social data for an external article
    static async getOrCreateSocialData(
        externalId: string,
        source: 'guardian' | 'newsapi',
        title: string,
        url: string
    ): Promise<ExternalArticleSocial> {
        try {
            // Encode the external ID to ensure it's safe for Firestore document IDs
            const encodedExternalId = encodeURIComponent(externalId);
            const socialId = `${source}-${encodedExternalId}`;
            const socialRef = doc(db, 'external_articles', socialId);
            const socialDoc = await getDoc(socialRef);

            if (socialDoc.exists()) {
                return { id: socialId, ...socialDoc.data() } as ExternalArticleSocial;
            } else {
                // Create new social data entry
                const newSocialData: Omit<ExternalArticleSocial, 'id'> = {
                    externalId,
                    source,
                    title,
                    url,
                    likes: [],
                    createdAt: serverTimestamp(),
                    lastActivity: serverTimestamp()
                };

                await setDoc(socialRef, newSocialData);
                return { id: socialId, ...newSocialData };
            }
        } catch (error) {
            console.error('Error getting or creating social data:', error);
            throw error;
        }
    }

    // Like or unlike an external article
    static async toggleLike(
        externalId: string,
        source: 'guardian' | 'newsapi',
        userId: string,
        title: string,
        url: string
    ): Promise<{ isLiked: boolean; totalLikes: number }> {
        try {
            // Encode the external ID to ensure it's safe for Firestore document IDs
            const encodedExternalId = encodeURIComponent(externalId);
            const socialId = `${source}-${encodedExternalId}`;
            const socialRef = doc(db, 'external_articles', socialId);

            // Ensure social data exists
            await this.getOrCreateSocialData(externalId, source, title, url);

            const socialDoc = await getDoc(socialRef);
            const socialData = socialDoc.data() as ExternalArticleSocial;

            const currentLikes = socialData.likes || [];
            const isCurrentlyLiked = currentLikes.includes(userId);

            if (isCurrentlyLiked) {
                // Unlike
                await updateDoc(socialRef, {
                    likes: arrayRemove(userId),
                    lastActivity: serverTimestamp()
                });
                return { isLiked: false, totalLikes: currentLikes.length - 1 };
            } else {
                // Like
                await updateDoc(socialRef, {
                    likes: arrayUnion(userId),
                    lastActivity: serverTimestamp()
                });
                return { isLiked: true, totalLikes: currentLikes.length + 1 };
            }
        } catch (error) {
            console.error('Error toggling like:', error);
            throw error;
        }
    }

    // Get social data for an external article
    static async getSocialData(externalId: string, source: 'guardian' | 'newsapi'): Promise<ExternalArticleSocial | null> {
        try {
            // Encode the external ID to ensure it's safe for Firestore document IDs
            const encodedExternalId = encodeURIComponent(externalId);
            const socialId = `${source}-${encodedExternalId}`;
            const socialRef = doc(db, 'external_articles', socialId);
            const socialDoc = await getDoc(socialRef);

            if (socialDoc.exists()) {
                return { id: socialId, ...socialDoc.data() } as ExternalArticleSocial;
            }
            return null;
        } catch (error) {
            console.error('Error getting social data:', error);
            return null;
        }
    }
} 