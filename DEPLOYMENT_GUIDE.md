# Deployment Guide for Journalite

## Issue Summary

The application was failing to build in GitHub Actions with the error:
```
[Error: Page "/guardian-news/[...articleId]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.]
```

### Root Cause
The original GitHub Actions workflow (`nextjs.yml`) was using `actions/configure-pages@v5` which **automatically injects `output: 'export'`** into the Next.js configuration. This forces static site generation, but our app has dynamic routes for external content (Guardian API, NewsAPI) that cannot be pre-generated.

## Solution Options

### Option 1: Vercel Deployment (Recommended) ✅

**Best for**: Full-featured deployment with dynamic content support

The updated `nextjs.yml` workflow now deploys to Vercel instead of GitHub Pages.

**Setup Steps:**
1. Create a Vercel account and connect your GitHub repository
2. Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID  
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
3. Push to main branch - automatic deployment will occur

**Benefits:**
- ✅ Full support for dynamic routes
- ✅ Server-side rendering capabilities
- ✅ Edge functions support
- ✅ Automatic scaling
- ✅ Built-in analytics

### Option 2: Build-Only Workflow ✅

**Best for**: Testing and validation without deployment

The `build-only.yml` workflow builds and tests the application without deploying.

**Features:**
- ✅ Validates builds on push/PR
- ✅ Runs tests if available
- ✅ No deployment conflicts
- ✅ Fast feedback for development

### Option 3: GitHub Pages (Static Only) ⚠️

**Best for**: Static content only (removes dynamic features)

The `github-pages-static.yml` workflow removes dynamic routes and deploys to GitHub Pages.

**Limitations:**
- ❌ No Guardian news integration
- ❌ No NewsAPI integration  
- ❌ Manual workflow trigger only
- ✅ Free hosting on GitHub Pages

## Environment Variables Setup

### For Vercel Deployment
Add these environment variables in your Vercel dashboard:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# API Configuration
NEXT_PUBLIC_API_BASE_URL=your_api_base_url
NEXT_PUBLIC_GUARDIAN_API_KEY=your_guardian_api_key
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
```

### For GitHub Secrets
Add these secrets in your GitHub repository settings:

```bash
# All the above environment variables, plus:
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id  
VERCEL_PROJECT_ID=your_vercel_project_id
```

## Configuration Files

### `next.config.js`
- ✅ Conditionally enables static export with `STATIC_EXPORT=true`
- ✅ Security headers for production
- ✅ Performance optimizations
- ✅ Bundle splitting configuration

### `vercel.json`
- ✅ Vercel-specific deployment configuration
- ✅ Environment variable mapping
- ✅ Function timeout settings
- ✅ Security headers

## Build Commands

### Local Development
```bash
npm run dev          # Development server
npm run build        # Production build (dynamic)
npm run start        # Start production server
```

### Static Export (for GitHub Pages)
```bash
STATIC_EXPORT=true npm run build    # Static export build
```

## Troubleshooting

### "output: export" Error
- **Cause**: GitHub Actions using `actions/configure-pages`
- **Solution**: Use Vercel deployment or build-only workflow

### Dynamic Routes Not Working
- **Cause**: Static export doesn't support dynamic external content
- **Solution**: Use server-side deployment (Vercel, Netlify, etc.)

### Environment Variables Not Found
- **Cause**: Missing secrets in deployment platform
- **Solution**: Add all required environment variables to your deployment platform

## Recommended Workflow

1. **Development**: Use local development server
2. **Testing**: Build-only workflow validates changes
3. **Production**: Vercel deployment for full feature support

## Migration from GitHub Pages

If you were previously using GitHub Pages:

1. **Backup**: Export your current deployment
2. **Setup Vercel**: Follow Option 1 setup steps  
3. **Update DNS**: Point your domain to Vercel (if applicable)
4. **Test**: Verify all features work correctly
5. **Disable**: Turn off GitHub Pages in repository settings

## Support

For deployment issues:
- Check GitHub Actions logs for specific errors
- Verify all environment variables are set correctly
- Ensure API keys have proper permissions
- Test builds locally first

---

**Note**: The dynamic external content features (Guardian news, NewsAPI) require server-side rendering and cannot work with static export. Choose your deployment method based on which features you need. 