'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, collection, getDocs, query, limit, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';
import styles from '@/styles/home.module.css';
import Link from 'next/link';

// Define types for user data
type UserRole = 'user' | 'developer' | 'admin';

interface UserData {
  id: string;
  name?: string;
  email?: string;
  username?: string;
  role?: UserRole;
  createdAt?: any;
}

interface UserStats {
  total: number;
  admins: number;
  developers: number;
  regular: number;
}

// Define type for documentation sections
interface DocSection {
  id: string;
  title: string;
  content: string;
}

// Document sections with comprehensive information about the project
const projectStructureDoc: DocSection = {
  id: 'project-structure',
  title: 'Project Structure',
  content: `
## Directory Structure

\`\`\`tsx
/src
  /app                  # Next.js App Router pages
    /articles           # Article-related routes
    /dev                # Developer documentation (this page)
    /login              # Authentication pages
    /my-profile         # User profile pages
    /user               # User public profile pages
  /components           # Reusable React components
    ArticleForm.tsx     # Form for creating/editing articles
    CommentSection.tsx  # Comment functionality for articles
    LeftSidebar.tsx     # Navigation sidebar
    UserSearch.tsx      # Search functionality for users
  /firebase             # Firebase configuration and utilities
    articles.ts         # Article-related Firebase functions
    clientApp.ts        # Firebase initialization
    notifications.ts    # Notification system
  /services             # Business logic services
    articleService.ts   # Article-related business logic
    userService.ts      # User-related business logic
    audioService.ts     # Audio feature functionality
  /styles               # Global and component styles
  /types                # TypeScript type definitions
\`\`\`

## Key Files Explained

- \`app/layout.tsx\`: Main application layout with authentication context
  - Wraps the entire app with auth providers
  - Contains global navigation components
  - Handles theme and responsiveness

- \`app/page.tsx\`: Homepage with article feed
  - Fetches and displays latest articles
  - Shows featured content
  - Handles different user states (authenticated vs guest)

- \`firebase/clientApp.ts\`: Firebase configuration and initialization
  - Sets up Firebase SDK with environment variables
  - Initializes Firestore, Auth, and Storage
  - Provides exported instances to the rest of the app

- \`components/LeftSidebar.tsx\`: Main navigation with user search
  - Collapsible sidebar with responsive behavior
  - Integrates user search functionality
  - Shows different options based on auth state

- \`components/ArticleForm.tsx\`: Form for creating/editing articles
  - Rich text editor integration
  - Image upload capabilities
  - Draft saving and publishing options
  `
};

const firebaseLogicDoc: DocSection = {
  id: 'firebase-logic',
  title: 'Firebase Logic',
  content: `
## Authentication

The app uses Firebase Authentication with email/password and supports:
- User registration with email verification
- Password reset flows
- Session persistence across browser sessions
- Protected routes with role-based access

### Authentication Flow

\`\`\`tsx
// Example from login page
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';

// Sign in
const signIn = async (email, password) => {
  try {
    // Attempt to authenticate with Firebase
    await signInWithEmailAndPassword(auth, email, password);
    
    // Redirect to home page after successful login
    router.push('/');
  } catch (error) {
    // Handle specific error codes
    const errorCode = error.code;
    switch(errorCode) {
      case 'auth/user-not-found':
        setError('No user found with this email');
        break;
      case 'auth/wrong-password':
        setError('Incorrect password');
        break;
      default:
        setError('Failed to sign in: ' + error.message);
    }
  }
};
\`\`\`

## Firestore Database

Data is organized in the following collections:

1. \`users/{uid}\`
   - User profile data
   - Role-based access control
   - References to created articles

2. \`articles/{articleId}\`
   - Article content, metadata
   - Author reference
   - Publication status (draft/published)
   - Read count and likes

3. \`comments/{commentId}\`
   - Comment content
   - References to articles and authors
   - Timestamp and like count

4. \`notifications/{notificationId}\`
   - User notifications
   - References to triggering events
   - Read status tracking

### Example Firestore Query

\`\`\`tsx
// Fetch user articles
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

const fetchUserArticles = async (userId) => {
  try {
    // Reference to articles collection
    const articlesRef = collection(db, 'articles');
    
    // Create query for the user's articles, ordered by date
    const q = query(
      articlesRef, 
      where('authorId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    // Execute the query
    const querySnapshot = await getDocs(q);
    
    // Map the results to a more usable format
    return querySnapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    }));
  } catch (error) {
    console.error('Error fetching user articles:', error);
    throw error;
  }
};
\`\`\`
  `
};

const articleSystemDoc: DocSection = {
  id: 'article-system',
  title: 'Article System',
  content: `
## Article Lifecycle

Articles in Journalite follow this lifecycle:
1. **Creation**: Author creates content using the ArticleForm component
2. **Draft**: Article is saved but not visible to other users
3. **Published**: Article is made available to all users
4. **Updated**: Author can edit and update the article after publishing
5. **Deleted**: Article is removed from the system

## Article Creation Flow

The \`ArticleForm\` component handles article creation with these features:
- Rich text editor with formatting options
- Draft saving with auto-save capability
- Image upload and embedding
- Form validation
- Tag selection and categorization

\`\`\`tsx
// ArticleForm.tsx - Core submission logic
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createArticle } from '@/services/articleService';
import { useAuth } from '@/hooks/useAuth';

const ArticleForm = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !content) {
      setError('Title and content are required');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Create article in Firestore
      const newArticleRef = await createArticle({
        title,
        content,
        authorId: user.uid,
        status: 'published',
        tags,
        coverImage: coverImage ? await uploadImage(coverImage) : null,
        createdAt: new Date(),
        updatedAt: new Date(),
        readCount: 0,
        likes: 0,
      });
      
      // Redirect to the new article
      router.push(\`/articles/\${newArticleRef.id}\`);
    } catch (error) {
      console.error('Error creating article:', error);
      setError('Failed to create article. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Save as draft functionality
  const saveDraft = async () => {
    // Similar to handleSubmit but with status: 'draft'
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for title, content, tags, image upload */}
      {/* Submit and Save Draft buttons */}
    </form>
  );
};
\`\`\`

## Article Feed Population

The home feed is populated with articles using these key techniques:
- Querying published articles sorted by date
- Pagination using Firebase query cursors
- Optional filtering by tags or categories
- Featured articles with special prominence

\`\`\`tsx
// Home page article fetching
import { collection, query, where, orderBy, limit, getDocs, startAfter } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

// Initial article fetch
const fetchArticles = async (pageSize = 10) => {
  try {
    const articlesRef = collection(db, 'articles');
    
    // Get published articles, ordered by date
    const q = query(
      articlesRef,
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      limit(pageSize)
    );
    
    const querySnapshot = await getDocs(q);
    const articles = querySnapshot.docs.map(doc => ({ 
      id: doc.id, 
      ...doc.data() 
    }));
    
    // Store the last document for pagination
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    
    return { articles, lastVisible };
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

// Load more articles (pagination)
const loadMoreArticles = async (lastVisible, pageSize = 10) => {
  try {
    const articlesRef = collection(db, 'articles');
    
    const q = query(
      articlesRef,
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      startAfter(lastVisible), // Start after the last article we fetched
      limit(pageSize)
    );
    
    const querySnapshot = await getDocs(q);
    const newArticles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    
    return { articles: newArticles, lastVisible: newLastVisible };
  } catch (error) {
    console.error('Error loading more articles:', error);
    throw error;
  }
};
\`\`\`

## Article Rendering

Articles are rendered using the \`RenderArticle\` component that handles:
- Markdown or rich text formatting
- Embedded images and media
- Code highlighting for technical content
- Comment section integration
- Social sharing options

## Comment System

Each article has a comment section allowing:
- Nested comments (replies)
- User avatars and profile links
- Markdown formatting in comments
- Likes and other reactions
  `
};

const userProfilesDoc: DocSection = {
  id: 'user-profiles',
  title: 'User Profiles & Social Features',
  content: `
## User Profile System

The user profile system in Journalite provides comprehensive functionality for viewing user information, their published articles, and social connections.

### Profile Pages Structure

- **Main Profile Page**: Displays user info, articles, and sidebar with followers/following
- **Followers Page**: Shows all users who follow the profile owner
- **Following Page**: Shows all users the profile owner follows

### Components Structure

1. \`ProfileClient\`: Main profile page client component
   - Fetches and displays user data and their articles
   - Includes sidebar with followers/following preview

2. \`FollowersClient\` & \`FollowingClient\`: Full pages for followers/following
   - Show complete lists with pagination
   - Include follow buttons for each user

3. \`FollowersList\` & \`FollowingList\`: Reusable components for profile sidebar
   - Show preview of followers/following (limited to 5)
   - Include "See all" links to full pages
   - Handle proper truncation of long usernames

### Profile Page Implementation

\`\`\`tsx
// Simple version of the profile page server component
import ProfileClient from '@/components/ProfileClient';

export default function UserProfilePage({ params }: { params: { username: string } }) {
  return <ProfileClient username={params.username} />;
}
\`\`\`

## Following System

The following system allows users to follow other users, creating a social network aspect to the platform.

### Database Structure

1. \`users/{userId}/following/{followedUserId}\`: Documents tracking who a user follows
2. \`users/{userId}/followers/{followerUserId}\`: Documents tracking who follows a user
3. \`users/{userId}.followingCount\` & \`users/{userId}.followersCount\`: Counter fields for quick access

### Following List Component

\`\`\`tsx
// Simplified FollowingList component
const FollowingList = ({ userId, maxDisplay = 5, username }) => {
  const [following, setFollowing] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  
  // Fetch following users
  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const followingList = await getFollowing(userId, maxDisplay);
        setFollowing(followingList);
        
        // Get total count for "See all" logic
        if (followingList.length > 0 && 'followingCount' in followingList[0]) {
          setTotalCount(followingList[0].followingCount || 0);
        } else {
          setTotalCount(Math.max(maxDisplay, followingList.length));
        }
      } catch (err) {
        console.error('Error fetching following:', err);
      }
    };

    fetchFollowing();
  }, [userId, maxDisplay]);
  
  // Get the display username for the See More link
  const displayUsername = username || (following.length > 0 ? following[0].username : '');
  
  return (
    <div className="space-y-4">
      {following.map((user) => (
        <div key={user.uid} className="flex items-center justify-between">
          {/* User info */}
          <Link href={\`/user/\${user.username}\`} className="flex items-center group flex-1 min-w-0 mr-2 overflow-hidden">
            <div className="avatar">
              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
            </div>
            <div className="overflow-hidden max-w-[calc(100%-45px)]">
              <div className="truncate">{user.firstName} {user.lastName}</div>
              <div className="truncate">@{user.username}</div>
            </div>
          </Link>
          
          {/* Follow button */}
          <FollowButton 
            targetUserId={user.uid} 
            targetUsername={user.username}
            className="flex-shrink-0 min-w-[70px]"
          />
        </div>
      ))}
      
      {/* "See all" link when there are more to show */}
      {displayUsername && totalCount > maxDisplay && (
        <Link href={\`/user/\${displayUsername}/following\`} className="text-blue-600">
          See all {totalCount} following →
        </Link>
      )}
    </div>
  );
};
\`\`\`

### Follow Button Implementation

\`\`\`tsx
// Simplified FollowButton component
const FollowButton = ({ targetUserId, targetUsername }) => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [isCurrentUserFollowing, setIsCurrentUserFollowing] = useState(false);
  
  // Check if current user is signed in and get their ID
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUserId(user.uid);
        // Check if current user is following the target user
        const following = await isFollowing(user.uid, targetUserId);
        setIsCurrentUserFollowing(following);
      }
    });

    return () => unsubscribe();
  }, [targetUserId]);

  // Follow/unfollow handler
  const handleFollowAction = async () => {
    if (!currentUserId) {
      router.push('/login');
      return;
    }

    try {
      if (isCurrentUserFollowing) {
        await unfollowUser(currentUserId, targetUserId);
        setIsCurrentUserFollowing(false);
      } else {
        await followUser(currentUserId, targetUserId);
        setIsCurrentUserFollowing(true);
      }
    } catch (error) {
      console.error('Error with follow/unfollow action:', error);
    }
  };
  
  return (
    <button 
      onClick={handleFollowAction} 
      className={isCurrentUserFollowing ? 'following-style' : 'follow-style'}
    >
      {isCurrentUserFollowing ? 'Following' : 'Follow'}
    </button>
  );
};
\`\`\`

### Responsive Design Considerations

The followers/following lists implement these key responsive features:
1. **Proper text truncation**: Long usernames are truncated with ellipsis
2. **Min-width on buttons**: Follow buttons maintain consistent size
3. **Flexible containers**: Use of flexbox for proper alignment
4. **Responsive spacing**: Different padding on mobile vs. desktop
5. **Overflow handling**: Proper containment of overflowing text

These considerations ensure a good user experience across all device sizes.
  `
};

const routingDoc: DocSection = {
  id: 'routing',
  title: 'Routing',
  content: `
## Next.js App Router Architecture

Journalite uses Next.js App Router for all routing with a clean, logical structure:

\`\`\`
/app
  /page.tsx              # Home page
  /layout.tsx            # Root layout with providers
  /articles
    /[articleId]         # Dynamic article page
    /page.tsx            # Articles index
  /create-article
    /page.tsx            # Article creation form
  /edit-article
    /[articleId]         # Dynamic article editing
  /user
    /[username]          # Public user profile
  /my-profile            # Current user's profile
  /login                 # Authentication pages
  /register
  /dev                   # Developer documentation (this page)
\`\`\`

## Key Routes Explained

### Home Page (\`/\`)

- Displays trending articles
- Shows personalized feed for logged-in users
- Contains featured content section

### Article Page (\`/articles/[articleId]\`)

- Displays full article content
- Shows author information
- Includes comment section
- Provides related articles

\`\`\`tsx
// app/articles/[articleId]/page.tsx
import { getArticleById } from '@/services/articleService';
import { notFound } from 'next/navigation';

// This function generates static paths for articles at build time
export async function generateStaticParams() {
  // Get popular article IDs to pre-render
  const popularArticleIds = await getPopularArticleIds();
  
  return popularArticleIds.map(id => ({
    articleId: id
  }));
}

// Main article page component
export default async function ArticlePage({ params }) {
  const { articleId } = params;
  
  try {
    // Get article data
    const article = await getArticleById(articleId);
    
    // If article doesn't exist or isn't published
    if (!article || article.status !== 'published') {
      notFound();
    }
    
    return (
      <div className="article-container">
        <article>
          <h1>{article.title}</h1>
          <ArticleContent content={article.content} />
          <CommentSection articleId={articleId} />
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error loading article:', error);
    notFound();
  }
}
\`\`\`

### User Profile (\`/user/[username]\`)

- Public user profile accessible by username
- Shows user's articles and bio
- Different from private profile dashboard

\`\`\`tsx
// app/user/[username]/page.tsx
import { getUserByUsername } from '@/services/userService';
import { getUserArticles } from '@/services/articleService';
import { notFound } from 'next/navigation';

export default async function UserProfilePage({ params }) {
  const { username } = params;
  
  try {
    // Get user data by username
    const user = await getUserByUsername(username);
    
    if (!user) {
      notFound();
    }
    
    // Get user's published articles
    const articles = await getUserArticles(user.id, {
      status: 'published',
      limit: 10
    });
    
    return (
      <div className="profile-container">
        <UserProfileHeader user={user} />
        <UserArticlesGrid articles={articles} />
      </div>
    );
  } catch (error) {
    console.error('Error loading profile:', error);
    notFound();
  }
}
\`\`\`

## Route Protection & Authentication

Routes are protected using:
- Client-side authentication checks
- Server-side authentication status verification
- Role-based access control for admin areas

\`\`\`tsx
// Example of protected route wrapper
'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading && !user) {
      // User is not authenticated, redirect to login
      router.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
    }
  }, [user, loading, router]);
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  if (!user) {
    return null; // Don't render anything while redirecting
  }
  
  return children;
}
\`\`\`

## Dynamic Routes & Server Components

Journalite uses both static and dynamic rendering:
- Static rendering for content that doesn't change often
- Dynamic rendering for personalized content
- Streaming for improved user experience with large pages

## Error Handling

Error boundaries are used to gracefully handle route errors:
- Custom 404 page for content not found
- Error pages for server errors
- Fallback UI components for partial failures
  `
};

const deploymentDoc: DocSection = {
  id: 'deployment',
  title: 'Deployment & Build Modes',
  content: `
## Deployment Overview

Journalite is configured for seamless deployment to Vercel with:
- Optimized production builds
- Environment variable configuration
- Image optimization
- Edge caching for improved performance

### Deployment Process

\`\`\`bash
# Build the application for production
npm run build

# Test the production build locally
npm run start

# Deploy to Vercel (if CLI is installed)
vercel --prod
\`\`\`

## Environment Configuration

The application requires these environment variables:

\`\`\`
# Firebase configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Optional analytics
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id

# Optional for custom domains
NEXT_PUBLIC_BASE_URL=https://your-domain.com
\`\`\`

## Next.js Configuration

The Next.js configuration in \`next.config.js\` is optimized for production:

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for containerized deployments (Docker)
  output: 'standalone', 
  
  // Configure allowed image domains for optimization
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com' // For Google profile photos
    ],
    // Image optimization settings
    formats: ['image/webp'],
  },
  
  // Handle TypeScript and ESLint errors gracefully in production
  typescript: {
    // Prevents TypeScript errors from breaking production builds
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  
  eslint: {
    // Prevents ESLint errors from breaking production builds
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  
  // Configure redirects and rewrites
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/my-profile',
        permanent: true,
      },
    ];
  },
  
  // Enable experimental features as needed
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
\`\`\`

## Build Optimization

The build process is optimized for performance:
- Code splitting for reduced bundle sizes
- Image optimization with Next.js Image component
- Font optimization with next/font
- Server component usage for reduced client JS

## Caching Strategy

Journalite implements a hybrid caching strategy:
- Static generation for non-personalized content
- Incremental Static Regeneration (ISR) for semi-dynamic content
- Client-side fetching for user-specific data

\`\`\`tsx
// Example of ISR implementation for article pages
export const revalidate = 3600; // Revalidate this page every hour

export async function generateStaticParams() {
  // Get most popular articles for static generation
  const topArticles = await getTopArticles(50);
  
  return topArticles.map(article => ({
    articleId: article.id,
  }));
}
\`\`\`

## Production Monitoring

Once deployed, monitor your application with:
- Vercel Analytics for performance metrics
- Firebase Performance Monitoring
- Error tracking via Sentry integration
- Custom logging for critical operations

## Scaling Considerations

As your application grows:
- Implement database indexing for common queries
- Consider Firebase collection sharding for large datasets
- Use Firebase Functions for background processing
- Enable Edge caching for frequently accessed content
  `
};

const bestPracticesDoc: DocSection = {
  id: 'best-practices',
  title: 'Best Practices',
  content: `
## Coding Standards

### Component Structure

Components should follow this consistent pattern:

\`\`\`tsx
// Example component structure
import { useState, useEffect } from 'react';
import { SomeType } from '@/types';

// Types at the top
interface Props {
  title: string;
  onAction: () => void;
}

// Component with named export
export default function ExampleComponent({ title, onAction }: Props) {
  // 1. State declarations
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SomeType | null>(null);
  
  // 2. Effects
  useEffect(() => {
    fetchData();
  }, []);
  
  // 3. Event handlers and helper functions
  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch data
      const result = await someApiCall();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClick = () => {
    onAction();
  };
  
  // 4. Conditional rendering
  if (loading) return <LoadingSpinner />;
  if (!data) return <EmptyState />;
  
  // 5. Main render
  return (
    <div className="example-component">
      <h2>{title}</h2>
      <div className="content">
        {data.items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <button onClick={handleClick}>Action</button>
    </div>
  );
}
\`\`\`

### Naming Conventions

- **Components**: PascalCase (e.g., \`ArticleCard.tsx\`)
- **Hooks**: camelCase with 'use' prefix (e.g., \`useArticle.ts\`)
- **Utilities**: camelCase (e.g., \`formatDate.ts\`)
- **Types**: PascalCase with descriptive names (e.g., \`ArticleData\`)
- **CSS Modules**: ComponentName.module.css (e.g., \`ArticleCard.module.css\`)

### File Organization

Follow these patterns for organizing files:

\`\`\`
/components
  /Article                    # Component folder
    ArticleCard.tsx           # Main component
    ArticleCard.module.css    # Component styles
    useArticleActions.ts      # Component-specific hook
    index.ts                  # Re-export for clean imports
  /ui                         # Reusable UI components
    Button.tsx
    Input.tsx
/hooks                        # Global hooks
  useAuth.ts
  useFirestore.ts
/types                        # Type definitions
  article.types.ts
  user.types.ts
\`\`\`

### State Management

For state management, follow this hierarchy:
1. **Local component state**: For UI-specific state
2. **Context API**: For shared state across components
3. **Custom hooks**: For reusable state logic
4. **URL state**: For shareable/bookmarkable state

### Firebase Best Practices

1. **Security Rules**
   - Always implement restrictive security rules
   - Test rules thoroughly before deployment
   - Use role-based permissions

2. **Query Optimization**
   - Use compound queries with appropriate indexes
   - Limit query results to avoid excessive reads
   - Add pagination for large data sets

3. **Data Modeling**
   - Keep documents small and focused
   - Use subcollections for one-to-many relationships
   - Denormalize data when needed for read performance

\`\`\`tsx
// Example of optimized Firestore query
const getArticlesForHome = async (limit = 10) => {
  try {
    const articlesRef = collection(db, "articles");
    const q = query(
      articlesRef,
      where("status", "==", "published"),
      orderBy("publishedAt", "desc"),
      limit(limit)
    );
    
    // Execute query with proper error handling
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error("Failed to fetch articles");
  }
};
\`\`\`

### Performance Optimization

1. **Code Splitting**
   - Use dynamic imports for large components
   - Implement route-based code splitting
   - Lazy load below-the-fold content

2. **Image Optimization**
   - Always use Next.js Image component
   - Choose appropriate sizes and formats
   - Implement responsive images with srcset

3. **Rendering Strategies**
   - Use Server Components for static content
   - Implement Client Components only when needed
   - Consider Streaming for large pages

\`\`\`tsx
// Example of optimized image usage
import Image from 'next/image';

function OptimizedImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={500}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSU..."
      priority={true}
      sizes="(max-width: 768px) 100vw, 800px"
    />
  );
}
\`\`\`

### Error Handling

Implement comprehensive error handling:
- Use try/catch for async operations
- Provide user-friendly error messages
- Log errors for debugging
- Implement error boundaries for UI resilience

### Accessibility

Always follow accessibility best practices:
- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation
- Maintain sufficient color contrast
- Test with screen readers
  `
};

const tagFeatureDoc: DocSection = {
  id: 'tag-feature',
  title: 'Tag Feature Integration',
  content: `
## Tag Feature Integration

The application now supports a tag feature that allows users to categorize and filter articles based on tags. This feature enhances content discoverability and user engagement.

### Key Components

- **Tag Page**: A dedicated page for each tag that displays all articles associated with that tag.
- **Clickable Tags**: Tags are now clickable links that redirect users to the respective tag page.

### Implementation Details

- **Firebase Query**: Articles are fetched from Firestore using a query that filters by the selected tag.
- **UI Components**: The tag page and article components have been updated to support and display tags effectively.
- **Static Generation**: Tag pages are statically generated at build time using \`generateStaticParams()\`.
- **Scheduled Rebuilds**: The site is automatically rebuilt weekly to capture new tags created by users.

### Usage

- Users can click on any tag in an article to view all related articles.
- Developers can extend this feature by adding more tag-related functionalities, such as trending tags or tag-based notifications.
- New tags created by users will be available after the next scheduled rebuild (weekly).

### Example

\`tsx
// Example of fetching articles by tag
import { getArticlesByTag } from '@/firebase/articles';

const fetchArticles = async (tag: string) => {
  const articles = await getArticlesByTag(tag);
  console.log(articles);
};
\`
  `
};

// Collection of all documentation sections
const docSections: DocSection[] = [
  projectStructureDoc,
  firebaseLogicDoc,
  articleSystemDoc,
  userProfilesDoc,
  routingDoc,
  deploymentDoc,
  bestPracticesDoc,
  tagFeatureDoc
];

// User Management Component
function UserManagement() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [stats, setStats] = useState<UserStats>({
    total: 0,
    admins: 0,
    developers: 0,
    regular: 0
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const usersQuery = query(collection(db, "users"), limit(50));
        const querySnapshot = await getDocs(usersQuery);
        
        const usersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as UserData[];

        // Calculate stats
        const adminCount = usersData.filter(user => user.role === 'admin').length;
        const devCount = usersData.filter(user => user.role === 'developer').length;
        const regularCount = usersData.filter(user => !user.role || user.role === 'user').length;

        setStats({
          total: usersData.length,
          admins: adminCount,
          developers: devCount,
          regular: regularCount
        });
        
        setUsers(usersData);
        setFilteredUsers(usersData);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // Filter users when search query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredUsers(users);
      setShowSearchResults(false);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const filtered = users.filter(user => 
        (user.name?.toLowerCase().includes(lowerQuery) || false) ||
        (user.email?.toLowerCase().includes(lowerQuery) || false) ||
        (user.username?.toLowerCase().includes(lowerQuery) || false)
      );
      setFilteredUsers(filtered);
      setShowSearchResults(true);
    }
  }, [searchQuery, users]);

  const updateUserRole = async (userId: string, newRole: UserRole) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        role: newRole
      });
      
      // Update local state to reflect change
      const updatedUsers = users.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      );
      
      setUsers(updatedUsers);
      
      // Update filtered users
      if (!searchQuery.trim()) {
        setFilteredUsers(updatedUsers);
      } else {
        const lowerQuery = searchQuery.toLowerCase();
        setFilteredUsers(updatedUsers.filter(user => 
          (user.name?.toLowerCase().includes(lowerQuery) || false) ||
          (user.email?.toLowerCase().includes(lowerQuery) || false) ||
          (user.username?.toLowerCase().includes(lowerQuery) || false)
        ));
      }
      
      // Update stats
      const adminCount = updatedUsers.filter(user => user.role === 'admin').length;
      const devCount = updatedUsers.filter(user => user.role === 'developer').length;
      const regularCount = updatedUsers.filter(user => !user.role || user.role === 'user').length;
      
      setStats({
        total: updatedUsers.length,
        admins: adminCount,
        developers: devCount,
        regular: regularCount
      });
    } catch (err) {
      console.error("Error updating user role:", err);
      alert("Failed to update user role");
    }
  };

  // Get initials for avatar
  const getInitials = (name: string | undefined): string => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Get first letter for avatar coloring
  const getFirstLetter = (name: string | undefined): string => {
    if (!name) return '?';
    return name.charAt(0).toUpperCase();
  };

  // Get avatar class based on user role
  const getAvatarClass = (role: UserRole | undefined): string => {
    switch (role) {
      case 'admin':
        return styles.adminAvatar;
      case 'developer':
        return styles.developerAvatar;
      default:
        return '';
    }
  };

  // Get role style class
  const getRoleClass = (role: UserRole | undefined): string => {
    switch (role) {
      case 'admin':
        return styles.searchResultRoleAdmin;
      case 'developer':
        return styles.searchResultRoleDeveloper;
      default:
        return styles.searchResultRoleUser;
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };

  if (loading) return <div className={styles.loading}><div className={styles.loadingSpinner}></div>Loading users...</div>;
  if (error) return <div className={styles.errorMessage}>{error}</div>;

  return (
    <div className={styles.userManagementContainer}>
      <h2 className={styles.sectionTitle}>User Management</h2>
      
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>{stats.total}</span>
          <span className={styles.statLabel}>Total Users</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>{stats.admins}</span>
          <span className={styles.statLabel}>Admins</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>{stats.developers}</span>
          <span className={styles.statLabel}>Developers</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statNumber}>{stats.regular}</span>
          <span className={styles.statLabel}>Regular Users</span>
        </div>
      </div>
      
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            placeholder="Search users by name, email, or username..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          {searchQuery && (
            <button 
              onClick={clearSearch}
              className={styles.clearSearchButton}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>
      
      {showSearchResults ? (
        <div className={styles.searchResultsContainer}>
          <h3 className={styles.searchResultsTitle}>
            Search Results ({filteredUsers.length})
            {filteredUsers.length > 0 && (
              <button 
                className={styles.backToAllButton}
                onClick={clearSearch}
              >
                Back to all users
              </button>
            )}
          </h3>
          
          {filteredUsers.length === 0 ? (
            <div className={styles.noResults}>
              No users found matching "{searchQuery}"
            </div>
          ) : (
            <div className={styles.searchResults}>
              {filteredUsers.map(user => (
                <div key={user.id} className={styles.searchResultItem}>
                  <div 
                    className={`${styles.searchResultAvatar} ${getAvatarClass(user.role)}`}
                    data-initial={getFirstLetter(user.name)}
                  >
                    {getInitials(user.name)}
                  </div>
                  <div className={styles.searchResultInfo}>
                    <div className={styles.searchResultName}>
                      {user.name || 'Unnamed User'}
                    </div>
                    <div className={styles.searchResultUsername}>
                      {user.email || user.username || 'No contact info'}
                    </div>
                  </div>
                  <div className={`${styles.searchResultRole} ${getRoleClass(user.role)}`}>
                    {user.role || 'user'}
                  </div>
                  <select
                    value={user.role || 'user'}
                    onChange={(e) => updateUserRole(user.id, e.target.value as UserRole)}
                    className={styles.roleSelect}
                  >
                    <option value="user">User</option>
                    <option value="developer">Developer</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.usersTableContainer}>
          <table className={styles.usersTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.noResults}>No users found</td>
                </tr>
              ) : (
                filteredUsers.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className={styles.userTableCell}>
                        <span 
                          className={`${styles.userAvatar} ${getAvatarClass(user.role)}`}
                          data-initial={getFirstLetter(user.name)}
                        >
                          {getInitials(user.name)}
                        </span>
                        {user.name || 'N/A'}
                      </div>
                    </td>
                    <td>{user.email || 'N/A'}</td>
                    <td>{user.username || 'N/A'}</td>
                    <td>
                      <span className={`${styles.roleTag} ${getRoleClass(user.role)}`}>
                        {user.role || 'user'}
                      </span>
                    </td>
                    <td>
                      <select
                        value={user.role || 'user'}
                        onChange={(e) => updateUserRole(user.id, e.target.value as UserRole)}
                        className={styles.roleSelect}
                      >
                        <option value="user">User</option>
                        <option value="developer">Developer</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Documentation component with search functionality
function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState(docSections[0].id);
  const [filteredSections, setFilteredSections] = useState<DocSection[]>(docSections);

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredSections(docSections);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const filtered = docSections.filter(
      section => 
        section.title.toLowerCase().includes(lowerQuery) || 
        section.content.toLowerCase().includes(lowerQuery)
    );
    
    setFilteredSections(filtered);
    
    // If we have filtered results and the active section isn't in them,
    // set the active section to the first result
    if (filtered.length > 0 && !filtered.some(s => s.id === activeSection)) {
      setActiveSection(filtered[0].id);
    }
  }, [searchQuery, activeSection]);

  // Handle section change
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    // Scroll to top when changing sections
    window.scrollTo(0, 0);
  };
  
  // Add copy button functionality after the content is rendered
  useEffect(() => {
    // Find all copy buttons
    const copyButtons = document.querySelectorAll(`.${styles.copyButton}`);
    
    // Add click handler to each button
    copyButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Find the code content element
        const codeBlock = (button as HTMLElement).closest(`.${styles.codeBlock}`);
        if (!codeBlock) return;
        
        const codeContent = codeBlock.querySelector(`.${styles.codeContent}`);
        if (!codeContent) return;
        
        // Get the text content without the HTML
        const textToCopy = codeContent.textContent || '';
        
        // Copy to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Change button text temporarily
          const originalText = (button as HTMLElement).innerText;
          (button as HTMLElement).innerText = 'Copied!';
          
          // Reset button text after a delay
          setTimeout(() => {
            (button as HTMLElement).innerText = originalText;
          }, 2000);
        });
      });
    });
  }, [activeSection, filteredSections]); // Re-run when the active section changes
  
  // Find the currently active section
  const currentSection = filteredSections.find(s => s.id === activeSection) || filteredSections[0];
  
  // Create a safe html rendering key that changes when the content changes
  const contentKey = `doc-content-${currentSection?.id || 'empty'}-${Date.now()}`;

  return (
    <div className={styles.documentationContainer}>
      <div className={styles.docSidebar}>
        <div className={styles.docSearchContainer}>
          <input
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.docSearchInput}
          />
        </div>
        
        <nav className={styles.docNav}>
          {filteredSections.map(section => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`${styles.docNavItem} ${activeSection === section.id ? styles.docNavItemActive : ''}`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
      
      <div className={styles.docContent}>
        {filteredSections.length === 0 ? (
          <div className={styles.noResults}>
            No documentation sections match your search.
          </div>
        ) : (
          <>
            <h2 className={styles.docTitle}>{currentSection.title}</h2>
            <div 
              key={contentKey}
              className={styles.docText}
              dangerouslySetInnerHTML={{ 
                __html: markdownToHtml(currentSection.content) 
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

// Simple markdown to HTML converter with enhanced styling
function markdownToHtml(markdown: string): string {
  // Process code blocks with syntax highlighting and filename
  const processCodeBlocks = (content: string): string => {
    return content.replace(/```(tsx|js|jsx|ts|html|css|json)?\s*(?:\[([^\]]+)\])?(?:\n)([\s\S]+?)```/g, (match, lang, filename, code) => {
      // Get filename for the code block (default based on language if not provided)
      const displayFilename = filename || getDefaultFilename(lang || '');
      
      // Replace template literals in code with a temporarily safe representation
      const safeCode = code
        .replace(/\${/g, '___TEMPLATE_START___')
        .replace(/}/g, '___TEMPLATE_END___')
        .replace(/`/g, '___BACKTICK___');

      // Add line numbers
      const lines = safeCode.trim().split('\n');
      const lineNumbers = lines.map((_: string, i: number) => `<span class="${styles.lineNumber}">${i + 1}</span>`).join('');
      
      // Apply syntax highlighting based on language
      const highlightedCode = highlightSyntax(safeCode, lang || '');
      
      // Restore the template literals in the highlighted code
      const restoredCode = highlightedCode
        .replace(/___TEMPLATE_START___/g, '${')
        .replace(/___TEMPLATE_END___/g, '}')
        .replace(/___BACKTICK___/g, '`');
      
      return `
        <div class="${styles.codeBlockContainer}">
          <pre class="${styles.codeBlock}" data-filename="${displayFilename}">
            <div class="${styles.codeLineNumbers}">${lineNumbers}</div>
            <div class="${styles.codeContent}">${restoredCode}</div>
            <button class="${styles.copyButton}" title="Copy to clipboard">Copy</button>
          </pre>
        </div>
      `;
    });
  };

  // Get default filename based on language
  const getDefaultFilename = (lang: string): string => {
    switch (lang) {
      case 'tsx':
        return 'Component.tsx';
      case 'ts':
        return 'index.ts';
      case 'js':
        return 'script.js';
      case 'jsx':
        return 'Component.jsx';
      case 'html':
        return 'index.html';
      case 'css':
        return 'styles.css';
      case 'json':
        return 'config.json';
      default:
        return 'example.code';
    }
  };
  
  // Apply syntax highlighting to code
  const highlightSyntax = (code: string, language: string): string => {
    // Basic syntax highlighting for TypeScript/JavaScript
    if (['ts', 'tsx', 'js', 'jsx'].includes(language)) {
      return code
        // Keywords
        .replace(/\b(const|let|var|function|class|interface|type|enum|import|export|from|as|return|if|else|for|while|switch|case|break|default|try|catch|finally|async|await|new|this|extends|implements|private|public|protected|static|get|set|super|void|yield)\b/g, '<span class="' + styles.keyword + '">$1</span>')
        
        // Strings with better handling of escapes and multiline
        .replace(/(["'`])((?:\\\1|(?!\1).)*?)\1/g, '<span class="' + styles.string + '">$1$2$1</span>')
        
        // Template literals special handling
        .replace(/(`)((?:[^`]|\\.)*?)(`)/g, function(match, open, content, close) {
          // Process the content to highlight interpolation
          const processed = content.replace(/(\${)(.*?)(})/g, 
            '<span class="' + styles.operator + '">$1</span>' + 
            '<span class="' + styles.variable + '">$2</span>' + 
            '<span class="' + styles.operator + '">$3</span>'
          );
          return '<span class="' + styles.string + '">' + open + processed + close + '</span>';
        })
        
        // Comments with full line support
        .replace(/(\/\/.*?)($|\n)/g, '<span class="' + styles.comment + '">$1</span>$2')
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="' + styles.comment + '">$1</span>')
        
        // JSX tags (for TSX/JSX)
        .replace(/(&lt;|\<)([A-Z][A-Za-z0-9]*|[a-z][A-Za-z0-9]*|\/?&gt;|\/?>\s*$)/g, function(match, bracket, content) {
          return '<span class="' + styles.operator + '">' + bracket + '</span>' + 
                 '<span class="' + styles.type + '">' + content + '</span>';
        })
        
        // Functions - improved to avoid capturing keywords
        .replace(/(\s)([A-Za-z_$][A-Za-z0-9_$]*)(\s*\()/g, '$1<span class="' + styles.function + '">$2</span>$3')
        
        // Types with expanded list
        .replace(/\b(string|number|boolean|any|void|null|undefined|never|object|Symbol|Array|Promise|Record|Partial|Readonly|Required|Pick|Omit|Exclude|Extract|NonNullable|ReturnType)\b/g, '<span class="' + styles.type + '">$1</span>')
        
        // Variables, properties, and other identifiers
        .replace(/(\.)([A-Za-z_$][A-Za-z0-9_$]*)/g, '$1<span class="' + styles.variable + '">$2</span>')
        .replace(/([A-Za-z_$][A-Za-z0-9_$]*)(\s*:\s*)/g, '<span class="' + styles.variable + '">$1</span>$2')
        
        // Numbers with hex, binary, octal support
        .replace(/\b(0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g, '<span class="' + styles.number + '">$1</span>')
        
        // Operators
        .replace(/([=!<>+\-*/%&|^~?:;,.]|=&gt;|=&lt;|&amp;&amp;|\|\|)/g, '<span class="' + styles.operator + '">$1</span>')
        
        // Wrap each line in a span for line highlighting
        .split('\n').map((line, i) => 
          '<span class="code-line" data-line="' + (i + 1) + '">' + 
          (line || '&nbsp;') + 
          '</span>'  // Replace empty lines with non-breaking space
        ).join('\n');
    }
    
    // HTML highlighting
    else if (language === 'html') {
      return code
        // Tags
        .replace(/(&lt;|<)(\/?)([\w\-]+)([^>]*?)(\/?)(>|&gt;)/g, 
          '<span class="' + styles.operator + '">$1$2</span>' + 
          '<span class="' + styles.type + '">$3</span>' + 
          '$4' +
          '<span class="' + styles.operator + '">$5$6</span>')
        
        // Attributes
        .replace(/(\s+)([a-zA-Z\-:_]+)(=)/g, 
          '$1<span class="' + styles.variable + '">$2</span>' + 
          '<span class="' + styles.operator + '">$3</span>')
        
        // Strings in attributes
        .replace(/(=)(["'])((?:\\\2|(?!\2).)*?)(\2)/g, 
          '<span class="' + styles.operator + '">$1</span>' +
          '<span class="' + styles.string + '">$2$3$4</span>')
        
        // Comments
        .replace(/(&lt;!--|<!--)([\s\S]*?)(--&gt;|-->)/g, 
          '<span class="' + styles.comment + '">$1$2$3</span>')
          
        // Wrap each line in a span for line highlighting
        .split('\n').map((line, i) => 
          '<span class="code-line" data-line="' + (i + 1) + '">' + 
          (line || '&nbsp;') + 
          '</span>'
        ).join('\n');
    }
    
    // CSS highlighting
    else if (language === 'css') {
      return code
        // Selectors
        .replace(/([.#]?[\w\-_]+)(?=\s*\{)/g, '<span class="' + styles.type + '">$1</span>')
        
        // Properties
        .replace(/([\w\-]+)(\s*:\s*)/g, '<span class="' + styles.variable + '">$1</span>$2')
        
        // Values
        .replace(/(:)([^;{}]*)([;}])/g, function(match, colon, value, end) {
          return colon + value.replace(/([#](?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b|((?:\d*\.)?\d+(?:px|em|rem|vh|vw|%|s|ms|deg|pt)?)\b)/g, 
            '<span class="' + styles.number + '">$1$2</span>'
          ) + end;
        })
        
        // Comments
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="' + styles.comment + '">$1</span>')
        
        // Braces
        .replace(/({|})/g, '<span class="' + styles.operator + '">$1</span>')
        
        // Wrap each line in a span for line highlighting
        .split('\n').map((line, i) => 
          '<span class="code-line" data-line="' + (i + 1) + '">' + 
          (line || '&nbsp;') + 
          '</span>'
        ).join('\n');
    }
    
    // JSON highlighting
    else if (language === 'json') {
      return code
        // Keys
        .replace(/"([^"]+)"\s*:/g, '<span class="' + styles.variable + '">"$1"</span>:')
        
        // Strings
        .replace(/:\s*"([^"]+)"/g, ': <span class="' + styles.string + '">"$1"</span>')
        
        // Numbers
        .replace(/:\s*(-?\d+(?:\.\d+)?)/g, ': <span class="' + styles.number + '">$1</span>')
        
        // Boolean & null values
        .replace(/:\s*(true|false|null)\b/g, ': <span class="' + styles.keyword + '">$1</span>')
        
        // Braces and brackets
        .replace(/([{}\[\]])/g, '<span class="' + styles.operator + '">$1</span>')
        
        // Wrap each line in a span for line highlighting
        .split('\n').map((line, i) => 
          '<span class="code-line" data-line="' + (i + 1) + '">' + 
          (line || '&nbsp;') + 
          '</span>'
        ).join('\n');
    }
    
    // For other languages, just wrap lines for consistent hover effect
    return code.split('\n').map((line, i) => 
      '<span class="code-line" data-line="' + (i + 1) + '">' + 
      (line || '&nbsp;') + 
      '</span>'
    ).join('\n');
  };

  let html = markdown;
  
  // Process alert boxes
  html = html.replace(/:::info\s+([^:]+):::/g, '<div class="' + styles.alertInfo + '">$1</div>');
  html = html.replace(/:::warning\s+([^:]+):::/g, '<div class="' + styles.alertWarning + '">$1</div>');
  html = html.replace(/:::success\s+([^:]+):::/g, '<div class="' + styles.alertSuccess + '">$1</div>');
  
  // Process inline backtick content before code blocks
  html = html.replace(/`([^`]+)`/g, (match, content) => {
    // Replace any potential JavaScript template expressions to avoid errors
    return '<code>' + content.replace(/\${/g, '\\${') + '</code>';
  });

  // Process code blocks
  html = processCodeBlocks(html);
  
  // Then process other markdown elements
  html = html
    // Headers
    .replace(/## ([^\n]+)/g, '<h2 class="' + styles.docSubheading + '">$1</h2>')
    
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    
    // Lists
    .replace(/- ([^\n]+)/g, '<li>$1</li>')
    
    // Wrap lists in ul
    .replace(/(<li>[^<]+<\/li>(\s*)?)+/g, '<ul>$&</ul>');
  
  // Replace newlines with br tags except in code blocks
  const parts = html.split(/<pre class=/);
  for (let i = 0; i < parts.length; i++) {
    if (i === 0 || !parts[i].includes('codeBlock')) {
      parts[i] = parts[i].replace(/\n\n/g, '<br><br>');
    }
  }
  html = parts.join('<pre class=');
  
  return html;
}

export default function DevPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [userName, setUserName] = useState('');
  const [activeTab, setActiveTab] = useState('docs');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        // User is not authenticated, redirect to login
        router.push('/login');
        return;
      }

      try {
        // Check user role in Firestore
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const userData = userSnap.data();
          const userRole = userData.role;
          
          // Check if user has developer or admin role
          if (userRole === 'developer' || userRole === 'admin') {
            setAuthorized(true);
            setUserName(userData.name || user.displayName || user.email || 'Developer');
          } else {
            // User doesn't have required role, redirect to home
            router.push('/');
          }
        } else {
          // User document doesn't exist, redirect to home
          router.push('/');
        }
      } catch (error) {
        console.error('Error checking user role:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return null; // This will not be shown as we redirect unauthorized users
  }

  return (
    <div className={styles.container}>
      <div className={styles.devDocsContainer}>
        <h1 className={styles.devDocsTitle}>Developer Portal</h1>
        <p className={styles.devDocsWelcome}>Welcome, {userName}! This page contains developer tools and documentation.</p>
        
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'docs' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            Documentation
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'users' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('users')}
          >
            User Management
          </button>
        </div>
        
        {activeTab === 'docs' ? (
          <Documentation />
        ) : (
          <UserManagement />
        )}
      </div>
    </div>
  );
} 