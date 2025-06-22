# 🚀 Journalite Production Deployment Guide

This guide helps you deploy Journalite safely to production.

## 📋 Pre-Deployment Checklist

### Environment Setup
- [ ] Set up production environment variables (see Environment Variables section)
- [ ] Configure Firebase project for production
- [ ] Set up external API keys (Guardian, NewsAPI)
- [ ] Configure domain and SSL certificates

### Code Quality
- [ ] Run type checking: `npm run type-check`
- [ ] Run linting: `npm run lint`
- [ ] Remove debug console statements
- [ ] Test production build locally: `npm run preview`

### Security
- [ ] Review Firebase security rules
- [ ] Validate environment variable security
- [ ] Check for exposed API keys in client code
- [ ] Verify security headers configuration

### Performance
- [ ] Optimize images and assets
- [ ] Run bundle analysis: `ANALYZE=true npm run build`
- [ ] Test page load speeds
- [ ] Verify lazy loading implementation

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Bundle analysis
ANALYZE=true npm run build
```

## 🌐 Environment Variables

### Required Variables
Create a `.env.local` file with these variables:

```bash
# Firebase Configuration (Required)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional API Keys
NEXT_PUBLIC_GUARDIAN_API_KEY=your_guardian_api_key
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key
```

### Security Notes
- Never commit `.env` files to version control
- Use different Firebase projects for development and production
- Rotate API keys regularly
- Use environment-specific configurations

## 🚀 Deployment Platforms

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository and set build command: `npm run build`
2. Set publish directory: `.next`
3. Configure environment variables

### Self-Hosted
1. Build the application: `npm run build`
2. Start the server: `npm start`
3. Configure reverse proxy (nginx/Apache)
4. Set up SSL certificates

## 📊 Monitoring & Analytics

### Recommended Services
- **Error Monitoring**: Sentry, LogRocket
- **Analytics**: Google Analytics, Plausible
- **Performance**: Web Vitals, Lighthouse CI
- **Uptime**: UptimeRobot, Pingdom

### Key Metrics to Track
- Page load times
- Error rates
- User engagement
- API response times
- Bundle size

## 🔒 Security Best Practices

### Firebase Security
- Configure Firestore security rules
- Enable Firebase App Check
- Use Firebase Auth for authentication
- Regular security rule audits

### API Security
- Implement rate limiting
- Validate all user inputs
- Use HTTPS everywhere
- Regular dependency updates

### Content Security
- Implement Content Security Policy (CSP)
- Sanitize user-generated content
- Validate file uploads
- Monitor for suspicious activity

## 🛠️ Maintenance

### Regular Tasks
- [ ] Update dependencies monthly
- [ ] Review security alerts
- [ ] Monitor performance metrics
- [ ] Backup user data
- [ ] Test disaster recovery

### Monitoring Alerts
- [ ] Set up error rate alerts
- [ ] Monitor API quota usage
- [ ] Track performance degradation
- [ ] Watch for security incidents

## 📞 Support & Troubleshooting

### Common Issues
1. **Build Failures**: Check TypeScript errors and dependency versions
2. **Environment Variables**: Verify all required variables are set
3. **Firebase Errors**: Check project configuration and security rules
4. **Performance Issues**: Run bundle analysis and optimize large components

### Getting Help
- Check Next.js documentation
- Review Firebase documentation  
- Search GitHub issues
- Contact support team

## 🎯 Production Readiness

### Minimum Requirements
- [ ] All environment variables configured
- [ ] Production build successful
- [ ] Security headers implemented
- [ ] Error monitoring setup
- [ ] Performance baseline established

### Recommended Additions
- [ ] CI/CD pipeline
- [ ] Automated testing
- [ ] Performance monitoring
- [ ] User analytics
- [ ] Content moderation tools

---

**Note**: This is a general guide. Specific deployment steps may vary based on your hosting platform and requirements. Always test thoroughly in a staging environment before deploying to production. 

