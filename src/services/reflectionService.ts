import {
    doc,
    setDoc,
    getDoc,
    query,
    collection,
    where,
    getDocs,
    orderBy,
    limit,
    serverTimestamp,
    Timestamp,
    deleteDoc
} from 'firebase/firestore';
import { db, auth } from '../firebase/clientApp';

export interface ReflectionPrompt {
    id: string;
    text: string;
    type: 'emotion' | 'choice' | 'note' | 'custom';
    triggerPosition?: 'paragraph' | 'percentage'; // Where to trigger the prompt
    isDefault: boolean;
}

export interface ReflectionResponse {
    id: string;
    userId: string;
    articleId: string;
    promptId: string;
    promptText: string;
    response: string;
    position: number; // Paragraph index or percentage where prompt appeared
    createdAt: Timestamp;
    isPrivate: boolean;
}

export interface ReflectionJournalEntry {
    userId: string;
    articleId: string;
    articleTitle: string;
    articleSlug: string;
    responses: ReflectionResponse[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}

// Default reflection prompts
export const DEFAULT_REFLECTION_PROMPTS: ReflectionPrompt[] = [
    {
        id: 'emotion-1',
        text: 'How does this make you feel?',
        type: 'emotion',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'choice-1',
        text: 'Would you have made the same choice?',
        type: 'choice',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'note-1',
        text: 'Write your own note to the author.',
        type: 'note',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'custom-1',
        text: 'What questions does this raise for you?',
        type: 'custom',
        triggerPosition: 'paragraph',
        isDefault: true
    },
    {
        id: 'custom-2',
        text: 'How does this relate to your own experience?',
        type: 'custom',
        triggerPosition: 'paragraph',
        isDefault: true
    }
];

// Save reflection response to Firestore and local storage
export async function saveReflectionResponse(
    articleId: string,
    promptId: string,
    promptText: string,
    response: string,
    position: number,
    isPrivate: boolean = true
): Promise<void> {
    console.log('saveReflectionResponse called with:', {
        articleId,
        promptId,
        promptText,
        response,
        position,
        isPrivate
    });

    const user = auth.currentUser;
    console.log('Current user:', user ? user.uid : 'Not authenticated');

    if (!user) {
        // Save to local storage if user is not authenticated
        console.log('User not authenticated, saving to local storage');
        saveReflectionToLocalStorage(articleId, promptId, promptText, response, position, isPrivate);
        return;
    }

    const responseId = `${user.uid}_${articleId}_${promptId}_${Date.now()}`;
    const reflectionDoc = doc(db, 'reflectionResponses', responseId);

    const reflectionResponse: ReflectionResponse = {
        id: responseId,
        userId: user.uid,
        articleId,
        promptId,
        promptText,
        response,
        position,
        createdAt: serverTimestamp() as Timestamp,
        isPrivate
    };

    try {
        console.log('Attempting to save to Firestore with ID:', responseId);
        await setDoc(reflectionDoc, reflectionResponse);
        console.log('Successfully saved to Firestore');

        // Also save a backup to local storage
        saveReflectionToLocalStorage(articleId, promptId, promptText, response, position, isPrivate);
    } catch (error) {
        console.error('Error saving reflection response:', error);
        // Fallback to local storage
        saveReflectionToLocalStorage(articleId, promptId, promptText, response, position, isPrivate);
    }
}

// Save to local storage for offline functionality
function saveReflectionToLocalStorage(
    articleId: string,
    promptId: string,
    promptText: string,
    response: string,
    position: number,
    isPrivate: boolean
): void {
    try {
        const storageKey = `reflection_${articleId}`;
        console.log('Saving to local storage with key:', storageKey);

        const existingData = localStorage.getItem(storageKey);
        const reflections = existingData ? JSON.parse(existingData) : [];
        console.log('Existing reflections:', reflections.length);

        const newReflection = {
            id: `local_${Date.now()}`,
            promptId,
            promptText,
            response,
            position,
            createdAt: new Date().toISOString(),
            isPrivate
        };

        reflections.push(newReflection);
        localStorage.setItem(storageKey, JSON.stringify(reflections));
        console.log('Successfully saved to local storage. Total reflections:', reflections.length);
    } catch (error) {
        console.error('Error saving reflection to local storage:', error);
    }
}

// Get reflection responses for an article
export async function getReflectionResponses(articleId: string): Promise<ReflectionResponse[]> {
    const user = auth.currentUser;

    // Start with local storage data
    const localReflections = getReflectionsFromLocalStorage(articleId);

    if (!user) {
        return localReflections;
    }

    try {
        const reflectionRef = collection(db, 'reflectionResponses');
        const q = query(
            reflectionRef,
            where('userId', '==', user.uid),
            where('articleId', '==', articleId),
            orderBy('createdAt', 'asc')
        );

        const querySnapshot = await getDocs(q);
        const firestoreReflections = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            createdAt: doc.data().createdAt
        })) as ReflectionResponse[];

        // Merge local and Firestore data, removing duplicates
        const allReflections = [...firestoreReflections, ...localReflections];
        const uniqueReflections = allReflections.filter((reflection, index, self) =>
            index === self.findIndex(r => r.promptId === reflection.promptId && r.position === reflection.position)
        );

        return uniqueReflections.sort((a, b) => a.position - b.position);
    } catch (error) {
        console.error('Error fetching reflection responses:', error);
        return localReflections;
    }
}

// Get reflections from local storage
function getReflectionsFromLocalStorage(articleId: string): ReflectionResponse[] {
    try {
        const storageKey = `reflection_${articleId}`;
        const data = localStorage.getItem(storageKey);
        if (!data) return [];

        const reflections = JSON.parse(data);
        return reflections.map((reflection: any) => ({
            ...reflection,
            userId: 'local',
            articleId,
            createdAt: new Date(reflection.createdAt) as any
        }));
    } catch (error) {
        console.error('Error reading reflections from local storage:', error);
        return [];
    }
}

// Get a random reflection prompt - optimized for speed
export function getRandomReflectionPrompt(): ReflectionPrompt {
    const randomIndex = Math.floor(Math.random() * DEFAULT_REFLECTION_PROMPTS.length);
    return DEFAULT_REFLECTION_PROMPTS[randomIndex];
}

// Get a specific prompt by index for testing (faster than random)
export function getPromptByIndex(index: number): ReflectionPrompt {
    return DEFAULT_REFLECTION_PROMPTS[index % DEFAULT_REFLECTION_PROMPTS.length];
}

// Create a reflection journal entry
export async function createReflectionJournal(
    articleId: string,
    articleTitle: string,
    articleSlug: string,
    responses: ReflectionResponse[]
): Promise<void> {
    const user = auth.currentUser;
    if (!user) return;

    const journalId = `${user.uid}_${articleId}`;
    const journalDoc = doc(db, 'reflectionJournals', journalId);

    const journalEntry: ReflectionJournalEntry = {
        userId: user.uid,
        articleId,
        articleTitle,
        articleSlug,
        responses,
        createdAt: serverTimestamp() as Timestamp,
        updatedAt: serverTimestamp() as Timestamp
    };

    try {
        await setDoc(journalDoc, journalEntry);
    } catch (error) {
        console.error('Error creating reflection journal:', error);
    }
}

// Get user's reflection journals - build from individual responses
export async function getUserReflectionJournals(userId?: string): Promise<ReflectionJournalEntry[]> {
    const user = auth.currentUser;
    const targetUserId = userId || user?.uid;

    // Get all reflection responses and build journal entries from them
    const journalMap = new Map<string, ReflectionJournalEntry>();

    // Get from Firestore if user is authenticated
    if (user && targetUserId) {
        try {
            const reflectionRef = collection(db, 'reflectionResponses');
            const q = query(
                reflectionRef,
                where('userId', '==', targetUserId),
                orderBy('createdAt', 'desc')
            );

            const querySnapshot = await getDocs(q);
            querySnapshot.docs.forEach(doc => {
                const response = doc.data() as ReflectionResponse;
                const articleId = response.articleId;

                if (!journalMap.has(articleId)) {
                    journalMap.set(articleId, {
                        userId: response.userId,
                        articleId: articleId,
                        articleTitle: `Loading...`, // Will be updated with actual title
                        articleSlug: articleId,
                        responses: [],
                        createdAt: response.createdAt,
                        updatedAt: response.createdAt
                    });
                }

                const journal = journalMap.get(articleId)!;
                journal.responses.push(response);
                // Update the updated time to the latest response
                if (response.createdAt > journal.updatedAt) {
                    journal.updatedAt = response.createdAt;
                }
            });
        } catch (error) {
            console.error('Error fetching reflection responses from Firestore:', error);
        }
    }

    // Also get from local storage
    try {
        const localStorageKeys = Object.keys(localStorage).filter(key => key.startsWith('reflection_'));

        localStorageKeys.forEach(key => {
            const articleId = key.replace('reflection_', '');
            const data = localStorage.getItem(key);
            if (!data) return;

            try {
                const reflections = JSON.parse(data);
                if (!Array.isArray(reflections)) return;

                reflections.forEach((reflection: any) => {
                    const response: ReflectionResponse = {
                        id: reflection.id || `local_${Date.now()}`,
                        userId: 'local',
                        articleId: articleId,
                        promptId: reflection.promptId,
                        promptText: reflection.promptText,
                        response: reflection.response,
                        position: reflection.position,
                        createdAt: new Date(reflection.createdAt) as any,
                        isPrivate: reflection.isPrivate
                    };

                    if (!journalMap.has(articleId)) {
                        journalMap.set(articleId, {
                            userId: 'local',
                            articleId: articleId,
                            articleTitle: `Loading...`, // Will be updated with actual title
                            articleSlug: articleId,
                            responses: [],
                            createdAt: response.createdAt,
                            updatedAt: response.createdAt
                        });
                    }

                    const journal = journalMap.get(articleId)!;
                    // Check if this response already exists (avoid duplicates)
                    const exists = journal.responses.some(r =>
                        r.promptId === response.promptId &&
                        r.position === response.position &&
                        r.response === response.response
                    );

                    if (!exists) {
                        journal.responses.push(response);
                        if (response.createdAt > journal.updatedAt) {
                            journal.updatedAt = response.createdAt;
                        }
                    }
                });
            } catch (error) {
                console.error('Error parsing local storage reflection data:', error);
            }
        });
    } catch (error) {
        console.error('Error reading from local storage:', error);
    }

    // Convert map to array and fetch article titles
    const journals = Array.from(journalMap.values()).filter(journal => journal.responses.length > 0);

    // Fetch article metadata for each journal using Firebase document ID
    await Promise.all(journals.map(async (journal) => {
        try {
            // Use Firebase getArticleById since the articleId is a Firebase document ID
            const { getArticleById } = await import('@/firebase/articles');
            const firebaseArticle = await getArticleById(journal.articleId);

            if (firebaseArticle) {
                journal.articleTitle = firebaseArticle.title;
                journal.articleSlug = firebaseArticle.slug || journal.articleId; // Update slug if available
                console.log(`Successfully fetched title for ${journal.articleId}: ${firebaseArticle.title}`);
            } else {
                journal.articleTitle = `Article: ${journal.articleId}`;
                console.log(`Article not found for ID: ${journal.articleId}`);
            }
        } catch (error) {
            console.error(`Error fetching article for ${journal.articleId}:`, error);
            journal.articleTitle = `Article: ${journal.articleId}`;
        }
    }));

    // Sort by updated time
    journals.sort((a, b) => {
        const timeA = a.updatedAt instanceof Date ? a.updatedAt.getTime() : a.updatedAt.toMillis();
        const timeB = b.updatedAt instanceof Date ? b.updatedAt.getTime() : b.updatedAt.toMillis();
        return timeB - timeA;
    });

    return journals;
}

// Delete a reflection response
export async function deleteReflectionResponse(
    articleId: string,
    reflectionId: string
): Promise<boolean> {
    console.log('Deleting reflection:', { articleId, reflectionId });

    const user = auth.currentUser;
    let deletedFromFirestore = false;
    let deletedFromLocal = false;

    // Delete from Firestore if user is authenticated
    if (user) {
        try {
            // Try to find and delete from Firestore
            const reflectionRef = collection(db, 'reflectionResponses');
            const q = query(
                reflectionRef,
                where('userId', '==', user.uid),
                where('articleId', '==', articleId),
                where('id', '==', reflectionId)
            );

            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const docToDelete = querySnapshot.docs[0];
                await deleteDoc(docToDelete.ref);
                console.log('Successfully deleted from Firestore');
                deletedFromFirestore = true;
            }
        } catch (error) {
            console.error('Error deleting from Firestore:', error);
        }
    }

    // Delete from local storage
    try {
        const storageKey = `reflection_${articleId}`;
        const existingData = localStorage.getItem(storageKey);

        if (existingData) {
            const reflections = JSON.parse(existingData);
            const filteredReflections = reflections.filter((r: any) => r.id !== reflectionId);

            if (filteredReflections.length !== reflections.length) {
                if (filteredReflections.length === 0) {
                    localStorage.removeItem(storageKey);
                } else {
                    localStorage.setItem(storageKey, JSON.stringify(filteredReflections));
                }
                console.log('Successfully deleted from local storage');
                deletedFromLocal = true;
            }
        }
    } catch (error) {
        console.error('Error deleting from local storage:', error);
    }

    return deletedFromFirestore || deletedFromLocal;
}

// Get inspiration from user's reflections with metadata
export async function getReflectionInspiration(userId?: string): Promise<Array<{ response: string, articleTitle?: string, promptText?: string }>> {
    const user = auth.currentUser;
    const targetUserId = userId || user?.uid;

    const inspirations: Array<{ response: string, articleTitle?: string, promptText?: string }> = [];
    const seenResponses = new Set<string>();

    // Get from Firestore if user is authenticated
    if (user && targetUserId) {
        try {
            const reflectionRef = collection(db, 'reflectionResponses');
            const q = query(
                reflectionRef,
                where('userId', '==', targetUserId),
                orderBy('createdAt', 'desc'),
                limit(10) // Get recent reflections
            );

            const querySnapshot = await getDocs(q);

            // Create a map to get article titles
            const articleTitleMap = new Map<string, string>();

            for (const doc of querySnapshot.docs) {
                const response = doc.data() as ReflectionResponse;
                if (response.response && response.response.length > 20) {
                    const normalizedResponse = response.response.toLowerCase().trim();
                    if (!seenResponses.has(normalizedResponse)) {
                        seenResponses.add(normalizedResponse);

                        // Try to get article title if not cached
                        let articleTitle = articleTitleMap.get(response.articleId);
                        if (!articleTitle) {
                            try {
                                const { getArticleById } = await import('@/firebase/articles');
                                const article = await getArticleById(response.articleId);
                                articleTitle = article?.title || 'Unknown Article';
                                articleTitleMap.set(response.articleId, articleTitle);
                            } catch (error) {
                                articleTitle = 'Unknown Article';
                            }
                        }

                        inspirations.push({
                            response: response.response,
                            articleTitle: articleTitle,
                            promptText: response.promptText
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching inspiration from Firestore:', error);
        }
    }

    // Also get from local storage
    try {
        const localStorageKeys = Object.keys(localStorage).filter(key => key.startsWith('reflection_'));
        const localReflections: any[] = [];

        localStorageKeys.forEach(key => {
            const data = localStorage.getItem(key);
            if (data) {
                try {
                    const reflections = JSON.parse(data);
                    if (Array.isArray(reflections)) {
                        localReflections.push(...reflections);
                    }
                } catch (error) {
                    console.error('Error parsing local storage reflection:', error);
                }
            }
        });

        // Sort by creation date and take recent ones
        localReflections
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 10)
            .forEach(reflection => {
                if (reflection.response && reflection.response.length > 20) {
                    const normalizedResponse = reflection.response.toLowerCase().trim();
                    if (!seenResponses.has(normalizedResponse)) {
                        seenResponses.add(normalizedResponse);
                        inspirations.push({
                            response: reflection.response,
                            articleTitle: 'Local Article', // We could enhance this later
                            promptText: reflection.promptText
                        });
                    }
                }
            });
    } catch (error) {
        console.error('Error reading inspiration from local storage:', error);
    }

    // Shuffle and return up to 5 inspirations
    const shuffled = inspirations.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
}

// Get reflection themes/topics for inspiration
export async function getReflectionThemes(userId?: string): Promise<string[]> {
    const user = auth.currentUser;
    const targetUserId = userId || user?.uid;

    const themes = new Set<string>();
    const prompts: string[] = [];

    // Get prompts from Firestore
    if (user && targetUserId) {
        try {
            const reflectionRef = collection(db, 'reflectionResponses');
            const q = query(
                reflectionRef,
                where('userId', '==', targetUserId),
                orderBy('createdAt', 'desc'),
                limit(20)
            );

            const querySnapshot = await getDocs(q);
            querySnapshot.docs.forEach(doc => {
                const response = doc.data() as ReflectionResponse;
                if (response.promptText) {
                    prompts.push(response.promptText);
                }
            });
        } catch (error) {
            console.error('Error fetching themes from Firestore:', error);
        }
    }

    // Get from local storage
    try {
        const localStorageKeys = Object.keys(localStorage).filter(key => key.startsWith('reflection_'));

        localStorageKeys.forEach(key => {
            const data = localStorage.getItem(key);
            if (data) {
                try {
                    const reflections = JSON.parse(data);
                    if (Array.isArray(reflections)) {
                        reflections.forEach((reflection: any) => {
                            if (reflection.promptText) {
                                prompts.push(reflection.promptText);
                            }
                        });
                    }
                } catch (error) {
                    console.error('Error parsing local storage for themes:', error);
                }
            }
        });
    } catch (error) {
        console.error('Error reading themes from local storage:', error);
    }

    // Extract themes from prompts
    prompts.forEach(prompt => {
        const lowerPrompt = prompt.toLowerCase();
        if (lowerPrompt.includes('feel')) themes.add('emotions');
        if (lowerPrompt.includes('choice') || lowerPrompt.includes('decision')) themes.add('decision-making');
        if (lowerPrompt.includes('experience')) themes.add('personal experience');
        if (lowerPrompt.includes('question')) themes.add('questioning');
        if (lowerPrompt.includes('surprise')) themes.add('unexpected insights');
        if (lowerPrompt.includes('perspective') || lowerPrompt.includes('view')) themes.add('perspectives');
        if (lowerPrompt.includes('author')) themes.add('dialogue with authors');
        if (lowerPrompt.includes('relate') || lowerPrompt.includes('connect')) themes.add('connections');
    });

    return Array.from(themes).slice(0, 6);
} 