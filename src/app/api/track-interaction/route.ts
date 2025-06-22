import { NextRequest, NextResponse } from 'next/server';
import { recommendationService } from '@/services/recommendationService';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { userId, articleId, articleType, interactionType, articleMetadata, interactionContext } = body;

        // Validate required fields
        if (!userId || !articleId || !articleType || !interactionType || !articleMetadata) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Track the interaction
        await recommendationService.trackInteraction({
            userId,
            articleId,
            articleType,
            interactionType,
            articleMetadata,
            interactionContext
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error tracking interaction:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 