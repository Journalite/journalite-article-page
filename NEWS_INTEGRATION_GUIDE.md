# News API Integration Guide

This guide shows you how to integrate free news APIs into your journal application while reusing your existing article page styling.

## Available News APIs

### ✅ Currently Integrated
- **The Guardian API** - High-quality journalism (500 requests/day free)
- **NewsAPI.org** - Multiple sources (1000 requests/day free)

### 🆕 New Free Alternatives
- **NewsData.io** - Better free tier (200 requests/day, more reliable)
- **Hacker News API** - Tech news (unlimited, completely free)

## Features

✅ **Multiple API Support** - Use multiple news sources with automatic fallback  
✅ **Reuses your existing article styling** - All news articles use your beautiful layout  
✅ **Free tiers available** - Several APIs with generous free limits  
✅ **Search functionality** - Search across different news sources  
✅ **Category filtering** - Browse by topic across all sources  
✅ **Mobile responsive** - Works perfectly on all device sizes  
✅ **Authentication aware** - Shows different navigation based on user login status  

## Setup Instructions

### 1. Get API Keys

#### NewsData.io (Recommended Replacement)
1. Visit [NewsData.io](https://newsdata.io/)
2. Sign up for free (200 requests/day)
3. Get your API key from dashboard

#### Hacker News (Completely Free)
- No API key needed! Ready to use immediately.

#### Keep Existing APIs
- **The Guardian API** - Keep if you have it (high quality)
- **NewsAPI.org** - Keep as fallback if desired

### 2. Configure Environment Variables

Add to your `.env.local` file:

```bash
# Recommended: NewsData.io (better than NewsAPI.org)
NEXT_PUBLIC_NEWSDATA_API_KEY=your_newsdata_api_key_here

# Keep existing (optional)
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key_here
NEXT_PUBLIC_GUARDIAN_API_KEY=your_guardian_api_key_here

# Hacker News needs no key (completely free)
```

### 3. Usage Priority

The system now uses this priority order:
1. **NewsData.io** (if configured) - Better free tier
2. **NewsAPI.org** (fallback) - Your existing setup  
3. **Hacker News** - For tech news (always available)
4. **The Guardian** - High-quality journalism

## API Comparison

| API | Free Limit | Content Quality | Sources | Setup |
|-----|------------|----------------|---------|-------|
| **NewsData.io** | 200/day | High | 7500+ sources | Easy |
| **Hacker News** | Unlimited | Tech-focused | HackerNews only | None needed |
| **The Guardian** | 500/day | Very High | Guardian only | Easy |
| **NewsAPI.org** | 1000/day | Mixed | 150k+ sources | Easy |

## How It Works

### Architecture

The updated news service now supports multiple APIs with automatic fallback:

```
User Request → NewsData.io → (fallback) → NewsAPI.org → Article Display
             ↘ HackerNews (for tech) ↗
```

### New Service Files
- `src/services/newsService.ts` - Updated with NewsData.io support
- `src/services/hackerNewsService.ts` - New Hacker News integration
- `src/services/guardianService.ts` - Existing Guardian integration

### Automatic Fallback
If your primary API (NewsData.io) fails or hits limits, the system automatically falls back to NewsAPI.org, ensuring your app always has news content.

## Using Different APIs

### NewsData.io (Primary)
```typescript
// Automatically used if NEXT_PUBLIC_NEWSDATA_API_KEY is set
const news = await newsService.getTopHeadlines('technology');
```

### Hacker News (Tech Stories)
```typescript
import { hackerNewsService } from '@/services/hackerNewsService';

// Get top tech stories (completely free)
const techNews = await hackerNewsService.getTopStories(10);
const newStories = await hackerNewsService.getNewStories(10);
const bestStories = await hackerNewsService.getBestStories(10);
```

### Search Across Sources
```typescript
// Searches NewsData.io first, then falls back to NewsAPI.org
const searchResults = await newsService.searchArticles('artificial intelligence');

// Search Hacker News
const hnResults = await hackerNewsService.searchStories('AI');
```

## Alternative Free APIs (Not Yet Integrated)

If you want even more sources, consider these free options:

### Reddit API
- **Free**: 60 requests/minute
- **Good for**: Trending topics, community discussions
- **Setup**: Easy OAuth

### RSS Feeds (Always Free)
- **BBC**: `http://feeds.bbci.co.uk/news/rss.xml`
- **CNN**: `http://rss.cnn.com/rss/edition.rss`  
- **Reuters**: Various RSS feeds
- **Setup**: Parse XML directly

### Other APIs
- **Currents API**: 600 requests/day free
- **GNews API**: 100 requests/day free
- **Mediastack**: 1000 requests/month free

## Benefits of New Setup

### ✅ Better Reliability
- Multiple APIs mean if one is down, others work
- NewsData.io is more reliable than NewsAPI.org

### ✅ More Content
- Tech news from Hacker News
- Quality journalism from Guardian
- General news from NewsData.io
- Fallback from NewsAPI.org

### ✅ Cost Effective
- Hacker News is completely free
- NewsData.io has better free tier
- Guardian provides quality content
- Only pay if you need more

### ✅ Same User Experience
- All APIs convert to the same format
- Your existing UI works unchanged
- Same article layouts and styling

## Troubleshooting

### "No news API keys configured" Error
- Add at least one API key to `.env.local`
- `NEXT_PUBLIC_NEWSDATA_API_KEY` is recommended
- Hacker News works without any keys

### API Rate Limits
- System automatically switches between APIs
- Monitor usage on each API's dashboard
- Consider caching responses in production

### Missing Articles
- Different APIs have different content
- Try multiple sources for comprehensive coverage
- Hacker News focuses on tech content

## Production Recommendations

1. **Use Multiple APIs** - Don't rely on just one source
2. **Monitor Usage** - Track API usage across all services  
3. **Cache Responses** - Reduce API calls with caching
4. **Error Handling** - The system handles API failures gracefully
5. **Update Keys** - Rotate API keys periodically

## Migration from NewsAPI.org

If you want to completely replace NewsAPI.org:

1. **Add NewsData.io key** - Better free tier, more reliable
2. **Test thoroughly** - Ensure all features work
3. **Keep NewsAPI as fallback** - Or remove it entirely
4. **Add Hacker News** - For free tech content
5. **Monitor performance** - Check response times and reliability

The updated system is designed to provide better reliability, more content variety, and reduced dependence on any single news API provider.

## Contributing

Feel free to enhance the news integration by:
- Adding more news sources
- Improving the article conversion logic
- Adding news categories
- Implementing caching
- Adding news notifications

The news integration is designed to seamlessly blend with your existing article experience while providing access to real-time news content. 