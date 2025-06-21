# News API Integration Guide

This guide shows you how to integrate a free news API into your journal application while reusing your existing article page styling.

## Features

✅ **Reuses your existing article styling** - News articles are displayed using the same beautiful layout as your regular articles  
✅ **Free to use** - Uses NewsAPI.org which offers 1000 free requests per day  
✅ **Search functionality** - Search for specific topics or browse by category  
✅ **Category filtering** - Browse news by Business, Technology, Science, Health, Sports, Entertainment  
✅ **Mobile responsive** - Works perfectly on all device sizes  
✅ **Authentication aware** - Shows different navigation based on user login status  

## Setup Instructions

### 1. Get a Free News API Key

1. Visit [NewsAPI.org](https://newsapi.org/)
2. Click "Get API Key" 
3. Sign up for a free account (no credit card required)
4. Copy your API key

### 2. Configure Environment Variables

Create a `.env.local` file in your project root (if it doesn't exist) and add:

```bash
# News API Configuration
NEXT_PUBLIC_NEWS_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the API key you got from NewsAPI.org.

### 3. Add Navigation Link (Optional)

You can add a link to your news page anywhere in your app. For example, in your main navigation:

```tsx
<Link href="/news" className="nav-link">
  📰 News
</Link>
```

## How It Works

### Architecture

- **News Service** (`src/services/newsService.ts`) - Handles API calls to NewsAPI.org
- **News Page** (`src/app/news/page.tsx`) - Server component wrapper
- **News Client** (`src/app/news/client.tsx`) - Main news component with state management
- **Article Layout Reuse** - Uses your existing `ArticleLayout` component for consistent styling

### News Article Display

When a user clicks on a news article card, it:

1. Converts the news article data to match your internal article format
2. Uses your existing `ArticleLayout` component 
3. Applies all your existing article styling from `article.css`
4. Maintains the same reading experience as your regular articles

### Data Flow

```
User Action → News Service → NewsAPI.org → Article Conversion → Your Article Layout
```

## Available News Sources

NewsAPI.org aggregates from over 150,000 sources including:
- Major news outlets (CNN, BBC, Reuters, etc.)
- Tech publications (TechCrunch, Wired, etc.) 
- Business news (Wall Street Journal, Financial Times, etc.)
- Sports, Entertainment, Science publications

## API Limits

**Free Tier:**
- 1,000 requests per day
- Only current and 30-day historical news
- Rate limited to prevent abuse

**Paid Tiers Available** if you need more requests or historical data.

## Customization

### Styling
All news articles use your existing article styles from:
- `src/styles/article.css` - Main article styling
- `src/styles/ArticlePage.module.css` - Page-specific styles
- Your `ArticleLayout` component styles

### Categories
You can modify the available categories in `src/app/news/client.tsx`:

```tsx
const categories = ['general', 'business', 'technology', 'science', 'health', 'sports', 'entertainment'];
```

### Search
The search functionality supports:
- Keyword search
- Phrase search (with quotes)
- Boolean operators (AND, OR, NOT)
- Date filtering

## Alternative Free News APIs

If you want to use a different news API:

1. **Guardian API** - Free, well documented
2. **Reddit API** - Free, good for trending topics  
3. **Hacker News API** - Free, tech-focused
4. **RSS Feeds** - Parse RSS directly

To switch APIs, just modify the `newsService.ts` file with your preferred API endpoint and data mapping.

## Troubleshooting

### "News API not configured" Error
- Check that your `.env.local` file exists and has the correct API key
- Restart your development server after adding environment variables
- Make sure the variable name is exactly `NEXT_PUBLIC_NEWS_API_KEY`

### API Rate Limits
- Free tier is limited to 1,000 requests/day
- Consider caching responses in production
- Monitor your usage on the NewsAPI.org dashboard

### CORS Issues
- NewsAPI.org supports CORS for browser requests
- If you encounter issues, you may need to proxy requests through your backend

## Production Considerations

1. **Caching** - Consider caching news responses to reduce API calls
2. **Error Handling** - The service includes comprehensive error handling
3. **Rate Limiting** - Monitor your API usage to stay within limits
4. **Backup Sources** - Consider having fallback news sources

## Contributing

Feel free to enhance the news integration by:
- Adding more news sources
- Improving the article conversion logic
- Adding news categories
- Implementing caching
- Adding news notifications

The news integration is designed to seamlessly blend with your existing article experience while providing access to real-time news content. 