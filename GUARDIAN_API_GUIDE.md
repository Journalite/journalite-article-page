# The Guardian API Integration Guide

## Overview

The Guardian API (Guardian Open Platform) is an excellent alternative to NewsAPI.org, offering high-quality journalism from The Guardian and The Observer newspapers. Here's how it works and how to integrate it.

## Guardian API vs NewsAPI.org Comparison

| Feature | Guardian API | NewsAPI.org |
|---------|-------------|-------------|
| **Free Tier** | 500 requests/day | 1000 requests/day |
| **Content Quality** | Very high (Guardian journalism) | Mixed (150k+ sources) |
| **Full Article Text** | ✅ Yes | ✅ Yes |
| **Historical Data** | ✅ Back to 1999 | ❌ Only 30 days |
| **Rate Limiting** | 1 req/sec | Multiple req/sec |
| **Commercial Use** | Requires paid tier | Requires paid tier |
| **Content Sources** | Guardian + Observer only | 150k+ global sources |
| **API Complexity** | Simple, well-documented | Simple, well-documented |

## Guardian API Benefits

✅ **Higher Quality Content** - Professional journalism, fact-checked articles  
✅ **Better Article Structure** - Rich HTML content with proper formatting  
✅ **More Metadata** - Tags, contributors, sections, pillars  
✅ **Historical Access** - Articles back to 1999  
✅ **Stable API** - Well-maintained, reliable service  
✅ **No Aggregation Issues** - Direct from source  

## How The Guardian API Works

### Authentication
```
Base URL: https://content.guardianapis.com/
API Key: Required (free registration)
Rate Limit: 1 request per second, 500 per day
```

### Key Endpoints

1. **Search Articles**
   ```
   GET /search?api-key=YOUR_KEY&q=climate&show-fields=body,headline,thumbnail
   ```

2. **Get Specific Article**
   ```
   GET /world/2024/jan/15/article-id?api-key=YOUR_KEY&show-fields=body
   ```

3. **Get Sections**
   ```
   GET /sections?api-key=YOUR_KEY
   ```

### Request Parameters

**Common Parameters:**
- `api-key` - Your API key (required)
- `q` - Search query
- `section` - Filter by section (world, politics, business, etc.)
- `show-fields` - Fields to include (headline, body, thumbnail, byline, etc.)
- `show-tags` - Include tags (contributor, keyword, etc.)
- `page-size` - Number of results (1-50)
- `page` - Page number
- `order-by` - Sort order (newest, oldest, relevance)

**Advanced Search:**
- `from-date` - Start date (YYYY-MM-DD)
- `to-date` - End date (YYYY-MM-DD)
- `use-date` - Date field to use (published, newspaper-edition)

### Response Format

```json
{
  "response": {
    "status": "ok",
    "userTier": "developer",
    "total": 1234,
    "results": [
      {
        "id": "world/2024/jan/15/climate-change-article",
        "webTitle": "Climate Change Impact Worsens",
        "webUrl": "https://www.theguardian.com/world/2024/jan/15/climate-change-article",
        "webPublicationDate": "2024-01-15T10:30:00Z",
        "sectionName": "World news",
        "pillarName": "News",
        "fields": {
          "headline": "Climate Change Impact Worsens Across Global Regions",
          "standfirst": "New research shows accelerating effects...",
          "body": "<p>Full article HTML content...</p>",
          "byline": "John Smith Environment correspondent",
          "thumbnail": "https://media.guim.co.uk/image.jpg"
        },
        "tags": [
          {
            "id": "environment/climate-change",
            "type": "keyword",
            "webTitle": "Climate change"
          }
        ]
      }
    ]
  }
}
```

## Integration Setup

### 1. Get Guardian API Key

1. Visit [Guardian Open Platform](https://open-platform.theguardian.com/access/)
2. Click "Register developer key"
3. Fill out the form (non-commercial use)
4. Verify your email
5. Copy your API key

### 2. Environment Setup

Add to your `.env.local`:
```bash
NEXT_PUBLIC_GUARDIAN_API_KEY=your_guardian_api_key_here
```

### 3. Using the Guardian Service

The Guardian service I created provides:

```typescript
// Search articles
const data = await guardianService.searchArticles(
  'climate change',  // query
  'environment',     // section (optional)
  1,                 // page
  10                 // page size
);

// Get specific article
const article = await guardianService.getArticleById(
  'environment/2024/jan/15/climate-article'
);

// Convert to your app format
const formatted = guardianService.convertToArticleFormat(article);
```

## Guardian Sections

Popular sections you can filter by:
- `world` - World news
- `politics` - Politics
- `business` - Business
- `technology` - Technology
- `science` - Science
- `environment` - Environment & climate
- `sport` - Sports
- `culture` - Arts, books, music, film
- `lifeandstyle` - Lifestyle
- `opinion` - Opinion & commentary

## Advanced Search Examples

**Search by keyword:**
```
/search?q=artificial intelligence&api-key=YOUR_KEY
```

**Search in specific section:**
```
/search?section=technology&api-key=YOUR_KEY
```

**Search with date range:**
```
/search?q=brexit&from-date=2023-01-01&to-date=2023-12-31&api-key=YOUR_KEY
```

**Boolean search:**
```
/search?q=climate AND (warming OR change)&api-key=YOUR_KEY
```

## Content Fields Available

Request with `show-fields=all` to get:
- `headline` - Article headline
- `standfirst` - Article summary/subtitle
- `body` - Full article HTML
- `main` - Main article image
- `thumbnail` - Thumbnail image
- `byline` - Author information
- `wordcount` - Article word count
- `commentable` - Whether comments are enabled
- `publication` - Publication date

## Rate Limiting & Best Practices

**Free Tier Limits:**
- 1 request per second
- 500 requests per day
- Developer key only for non-commercial use

**Best Practices:**
1. **Cache responses** - Store articles locally to reduce API calls
2. **Implement retry logic** - Handle rate limit errors gracefully
3. **Use specific fields** - Only request fields you need
4. **Paginate efficiently** - Use appropriate page sizes
5. **Monitor usage** - Track your daily request count

## Error Handling

Common HTTP status codes:
- `200` - Success
- `400` - Bad request (invalid parameters)
- `401` - Unauthorized (invalid API key)
- `403` - Forbidden (quota exceeded)
- `404` - Not found
- `429` - Too many requests (rate limited)

## Commercial Usage

For commercial use:
- Contact Guardian licensing team
- Custom rate limits available
- Access to premium content
- Additional media (images, audio, video)
- Pricing based on usage

## Pages Created

I've created both integration options for you:

1. **NewsAPI Integration** - `/news` page using NewsAPI.org
2. **Guardian Integration** - `/guardian-news` page using Guardian API

Both use your existing article styling and provide the same seamless experience.

## Recommendation

**Use Guardian API if:**
- You prioritize content quality over quantity
- You want reliable, fact-checked journalism
- You need historical articles (back to 1999)
- You prefer a single, trusted source

**Use NewsAPI.org if:**
- You want diverse global sources
- You need higher daily request limits
- You want breaking news from many outlets
- You prefer more variety in content types

Both APIs integrate perfectly with your existing article layout and styling system! 🗞️✨ 