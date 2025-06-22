# SEO & Metadata Implementation Guide

This guide explains how to implement and extend SEO metadata for Journalite pages, ensuring rich link previews on social media platforms and proper search engine optimization.

## Overview

The SEO system consists of three main components:

1. **SEO Defaults** (`src/lib/seoDefaults.ts`) - Site-wide configuration
2. **Metadata Builder** (`src/lib/buildMeta.ts`) - Reusable metadata generation
3. **Page-specific implementations** - Dynamic metadata for each route

## Quick Start

### For New Pages

1. Import the metadata builder in your page file:
```typescript
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/buildMeta';
import { getDefaultMetadata } from '@/lib/seoDefaults';
```

2. Export a `generateMetadata` function:
```typescript
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Your Page Title",
    description: "Your page description (max 160 characters)",
    pathname: "/your-route",
    type: "website", // or "article"
  });
}
```

### For Dynamic Routes

For routes with dynamic content (like articles), fetch the data first:

```typescript
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const data = await fetchYourData(params.id);
    
    if (!data) {
      return buildMetadata(getDefaultMetadata());
    }

    return buildMetadata({
      title: data.title,
      description: data.excerpt || generateExcerpt(data.content),
      image: data.featuredImage,
      pathname: `/your-route/${params.id}`,
      type: "article",
      publishedTime: data.publishedAt?.toISOString(),
      authors: [data.authorName],
      tags: data.tags,
    });
  } catch (error) {
    console.error('Error generating metadata:', error);
    return buildMetadata(getDefaultMetadata());
  }
}
```

## Configuration

### SEO Defaults

Update `src/lib/seoDefaults.ts` to modify site-wide settings:

```typescript
export const seoDefaults: SEODefaults = {
  title: "Your Site Title",
  description: "Your site description",
  siteName: "Your Site Name",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com",
  defaultImage: "/images/your-social-banner.jpg",
  twitterHandle: "@yourhandle"
};
```

### Metadata Builder Options

The `buildMetadata` function accepts these options:

| Option | Type | Description |
|--------|------|-------------|
| `title` | string | Page title (appears in browser tab and social shares) |
| `description` | string | Page description (max 160 chars for SEO) |
| `image` | string | Social media image URL (1200x630px recommended) |
| `pathname` | string | Page path (used for canonical URL) |
| `type` | 'website' \| 'article' | Open Graph type |
| `publishedTime` | string | ISO date string for articles |
| `modifiedTime` | string | ISO date string for last modification |
| `authors` | string[] | Array of author names |
| `tags` | string[] | Array of tags/keywords |
| `siteName` | string | Override default site name |

## Best Practices

### Images

1. **Size**: Use 1200x630px for optimal social media display
2. **Format**: JPG or PNG, optimized to under 120KB
3. **Content**: Include text overlay for better engagement
4. **Alt text**: Automatically generated based on content

### Descriptions

1. **Length**: Keep under 160 characters for search engines
2. **Clarity**: Write compelling, descriptive text
3. **Keywords**: Include relevant terms naturally
4. **Uniqueness**: Each page should have a unique description

### Titles

1. **Length**: Keep under 60 characters for full display
2. **Format**: "Page Title | Site Name" (automatically handled)
3. **Keywords**: Include primary keywords early
4. **Branding**: Site name automatically appended

## Examples

### Static Page
```typescript
// src/app/about/page.tsx
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "About Journalite",
    description: "Learn about our mission to deliver reliable journalism and foster meaningful discussions in the digital age.",
    pathname: "/about",
    type: "website",
  });
}
```

### User Profile Page
```typescript
// src/app/user/[username]/page.tsx
export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const user = await getUserByUsername(params.username);
  
  return buildMetadata({
    title: `${user.displayName} on Journalite`,
    description: user.bio || `Read articles and thoughts by ${user.displayName} on Journalite.`,
    image: user.profileImage,
    pathname: `/user/${params.username}`,
    type: "website",
  });
}
```

### Tag Page
```typescript
// src/app/tag/[tag]/page.tsx
export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const articles = await getArticlesByTag(params.tag);
  
  return buildMetadata({
    title: `#${params.tag} Articles`,
    description: `Discover insightful articles tagged with #${params.tag}. ${articles.length} articles available.`,
    pathname: `/tag/${params.tag}`,
    type: "website",
    tags: [params.tag],
  });
}
```

## Testing & Validation

### Tools

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Google Rich Results Test**: https://search.google.com/test/rich-results

### Checklist

- [ ] Title appears correctly (under 60 chars)
- [ ] Description is compelling (under 160 chars)
- [ ] Image displays properly (1200x630px)
- [ ] URL is canonical and absolute
- [ ] No duplicate or missing tags
- [ ] Mobile preview looks good
- [ ] All social platforms render correctly

### Common Issues

1. **Image not loading**: Ensure absolute URLs and proper file format
2. **Caching issues**: Use debugger tools to refresh cache
3. **Missing fallbacks**: Always provide default metadata
4. **Performance**: Optimize images and use Next.js Image component

## Favicon & App Icons

Icons are automatically generated and configured in the root layout. To update:

1. Modify `scripts/generate-icons.js`
2. Run `node scripts/generate-icons.js`
3. Convert SVG files to PNG format
4. Replace files in `/public` directory

Required sizes:
- `favicon-16x16.png`
- `favicon-32x32.png` 
- `favicon-48x48.png`
- `apple-touch-icon.png` (180x180)
- `icon-512x512.png`

## Environment Variables

Ensure these are set in your environment:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Troubleshooting

### Metadata not updating
1. Clear browser cache
2. Use social media debugger tools
3. Check for TypeScript errors
4. Verify environment variables

### Images not displaying
1. Ensure absolute URLs
2. Check image file exists
3. Verify proper file format (JPG/PNG)
4. Test image URL directly

### Performance issues
1. Optimize image sizes
2. Use Next.js Image component
3. Implement proper caching headers
4. Monitor Core Web Vitals

For additional help, refer to the [Next.js Metadata documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata). 