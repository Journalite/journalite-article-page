import Sentiment from 'sentiment';

export function getMoodFromText(text: string): 'joyful' | 'reflective' | 'sad' | 'angry' | 'peaceful' | 'energetic' {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    const lowerText = text.toLowerCase();

    // Define emotion keywords
    const angryWords = ['angry', 'furious', 'rage', 'mad', 'hate', 'disgusted', 'outraged', 'pissed', 'frustrated', 'livid', 'infuriated', 'enraged', 'trump', 'politician', 'corrupt', 'stupid', 'idiot', 'terrible', 'awful', 'worst', 'disgusting', 'pathetic'];
    const joyfulWords = ['happy', 'joy', 'excited', 'amazing', 'wonderful', 'fantastic', 'great', 'awesome', 'brilliant', 'excellent', 'perfect', 'beautiful', 'love', 'celebrate', 'triumph', 'success', 'victory', 'delighted', 'cheerful', 'blissful'];
    const peacefulWords = ['calm', 'peaceful', 'serene', 'tranquil', 'gentle', 'soothing', 'quiet', 'meditation', 'zen', 'harmony', 'balance', 'nature', 'garden', 'sunset', 'ocean', 'mindful', 'breathe', 'stillness'];
    const energeticWords = ['energy', 'power', 'strong', 'dynamic', 'intense', 'passionate', 'vibrant', 'bold', 'fierce', 'electric', 'explosive', 'powerful', 'charged', 'pumped', 'motivated', 'driven'];
    const sadWords = ['sad', 'depressed', 'melancholy', 'grief', 'sorrow', 'tragic', 'heartbreak', 'crying', 'tears', 'lonely', 'despair', 'hopeless', 'miserable', 'devastated', 'broken'];

    // Count keyword matches
    const angryCount = angryWords.filter(word => lowerText.includes(word)).length;
    const joyfulCount = joyfulWords.filter(word => lowerText.includes(word)).length;
    const peacefulCount = peacefulWords.filter(word => lowerText.includes(word)).length;
    const energeticCount = energeticWords.filter(word => lowerText.includes(word)).length;
    const sadCount = sadWords.filter(word => lowerText.includes(word)).length;

    // Determine mood based on keyword frequency and sentiment
    if (angryCount >= 2 || (angryCount >= 1 && result.score < -2)) return 'angry';
    if (joyfulCount >= 2 || (joyfulCount >= 1 && result.score > 3)) return 'joyful';
    if (peacefulCount >= 2 || (peacefulCount >= 1 && result.score > 0)) return 'peaceful';
    if (energeticCount >= 2 || (energeticCount >= 1 && Math.abs(result.score) > 2)) return 'energetic';
    if (sadCount >= 2 || (sadCount >= 1 && result.score < -1)) return 'sad';

    // Fallback to sentiment score
    if (result.score > 2) return 'joyful';
    if (result.score < -3) return 'angry';
    if (result.score < -1) return 'sad';
    return 'reflective';
} 