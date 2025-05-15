(()=>{var e={};e.id=2,e.ids=[2],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16189:(e,t,r)=>{"use strict";var s=r(65773);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19771:e=>{"use strict";e.exports=require("process")},21820:e=>{"use strict";e.exports=require("os")},22278:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(60687),a=r(43210),i=r(16189),n=r(75535),o=r(43649);r(84245);var c=r(5062),l=r.n(c);let d=[{id:"project-structure",title:"Project Structure",content:`
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
  `},{id:"firebase-logic",title:"Firebase Logic",content:`
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
  `},{id:"article-system",title:"Article System",content:`
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
  `},{id:"user-profiles",title:"User Profiles",content:`
## User Creation & Authentication

When a user signs up in Journalite:
1. Firebase Auth creates an authentication record
2. A corresponding Firestore document is created in \`users/{uid}\`
3. Email verification is sent automatically
4. The user is directed to complete their profile with additional information

\`\`\`tsx
// Registration flow from AuthForm.tsx
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/firebase/clientApp';
import { generateUsername } from '@/utils/userHelpers';

const registerUser = async (email: string, password: string, name: string) => {
  try {
    // Step 1: Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      email, 
      password
    );
    
    const user = userCredential.user;
    
    // Step 2: Generate a unique username from their name
    const username = await generateUsername(name);
    
    // Step 3: Create Firestore profile document
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      username,
      role: 'user',
      bio: '',
      createdAt: new Date(),
      articleCount: 0,
      followersCount: 0,
      followingCount: 0,
      photoURL: null
    });
    
    // Step 4: Send email verification
    await sendEmailVerification(user, {
      url: window.location.origin + '/email-verified'
    });
    
    return {
      user,
      username
    };
  } catch (error) {
    console.error('Error registering user:', error);
    const errorCode = error.code;
    switch(errorCode) {
      case 'auth/email-already-in-use':
        throw new Error('Email is already registered');
      case 'auth/weak-password':
        throw new Error('Password is too weak');
      default:
        throw new Error('Failed to register: ' + error.message);
    }
  }
};
\`\`\`

## User Data Structure

User profiles store comprehensive data:

\`\`\`tsx
interface UserProfile {
  // Basic info
  name: string;        // Display name
  username: string;    // Unique handle
  email: string;       // Email address
  bio?: string;        // Optional bio
  photoURL?: string;   // Profile photo URL
  
  // Role & permissions
  role: 'user' | 'developer' | 'admin';
  
  // Statistics
  articleCount: number;
  followersCount: number;
  followingCount: number;
  
  // Metadata
  createdAt: Timestamp;
  lastActive?: Timestamp;
}
\`\`\`

## Username Generation

Usernames are automatically generated with these rules:
- Derived from the user's display name
- Converted to lowercase
- Spaces replaced with underscores
- Special characters removed
- If already taken, suffixed with random digits

\`\`\`tsx
// Username generation utility
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

export async function generateUsername(name: string): Promise<string> {
  // Convert name to lowercase, replace spaces with underscores
  let baseUsername = name.toLowerCase().replace(/\\s+/g, '_');
  
  // Remove special characters
  baseUsername = baseUsername.replace(/[^a-z0-9_]/g, '');
  
  // Check if username exists
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('username', '==', baseUsername));
  const snapshot = await getDocs(q);
  
  // If username is available, use it
  if (snapshot.empty) {
    return baseUsername;
  }
  
  // Otherwise, add random digits until we find an available username
  let isAvailable = false;
  let candidateUsername = '';
  
  while (!isAvailable) {
    // Add 3 random digits
    const randomSuffix = Math.floor(Math.random() * 900) + 100;
    candidateUsername = \`\${baseUsername}_\${randomSuffix}\`;
    
    // Check if this version is available
    const q2 = query(usersRef, where('username', '==', candidateUsername));
    const snapshot2 = await getDocs(q2);
    
    if (snapshot2.empty) {
      isAvailable = true;
    }
  }
  
  return candidateUsername;
}
\`\`\`

## User Search Implementation

The user search functionality is implemented with these features:
- Real-time search as you type
- Debounced input to minimize database queries
- Case-insensitive matching on name and username
- Clean UI with profile pictures and usernames
- Caching of recent results for performance

\`\`\`tsx
// UserSearch.tsx component
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';
import useDebounce from '@/hooks/useDebounce';

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Debounce search term to avoid too many queries
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    // Don't search until we have at least 2 characters
    if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) {
      setUsers([]);
      return;
    }
    
    const searchUsers = async () => {
      setLoading(true);
      
      try {
        const usersRef = collection(db, 'users');
        
        // Query for users by name (case insensitive)
        const nameQuery = query(
          usersRef,
          where('name', '>=', debouncedSearchTerm),
          where('name', '<=', debouncedSearchTerm + '\\uf8ff'),
          limit(5)
        );
        
        // Query for users by username
        const usernameQuery = query(
          usersRef,
          where('username', '>=', debouncedSearchTerm),
          where('username', '<=', debouncedSearchTerm + '\\uf8ff'),
          limit(5)
        );
        
        // Execute both queries
        const [nameSnapshot, usernameSnapshot] = await Promise.all([
          getDocs(nameQuery),
          getDocs(usernameQuery)
        ]);
        
        // Combine results, remove duplicates
        const usersMap = new Map();
        
        // Add users from name query
        nameSnapshot.docs.forEach(doc => {
          usersMap.set(doc.id, {
            id: doc.id,
            ...doc.data()
          });
        });
        
        // Add users from username query
        usernameSnapshot.docs.forEach(doc => {
          usersMap.set(doc.id, {
            id: doc.id,
            ...doc.data()
          });
        });
        
        // Convert map to array
        setUsers(Array.from(usersMap.values()));
      } catch (error) {
        console.error('Error searching users:', error);
      } finally {
        setLoading(false);
      }
    };
    
    searchUsers();
  }, [debouncedSearchTerm]);
  
  // Render search input and results
  return (
    <div className="searchContainer">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      
      {loading && <div>Searching...</div>}
      
      {!loading && users.length > 0 && (
        <div className="searchResults">
          {users.map(user => (
            <a href={\`/user/\${user.username}\`} key={user.id} className="searchResultItem">
              {/* User search result display */}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
\`\`\`
  `},{id:"routing",title:"Routing",content:`
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
  `},{id:"deployment",title:"Deployment & Build Modes",content:`
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
  `},{id:"best-practices",title:"Best Practices",content:`
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
  `}];function u(){let[e,t]=(0,a.useState)([]),[r,i]=(0,a.useState)([]),[c,d]=(0,a.useState)(!0),[u,p]=(0,a.useState)(null),[m,h]=(0,a.useState)(""),[g,f]=(0,a.useState)({total:0,admins:0,developers:0,regular:0}),b=async(r,s)=>{try{let a=(0,n.H9)(o.db,"users",r);await (0,n.mZ)(a,{role:s});let c=e.map(e=>e.id===r?{...e,role:s}:e);if(t(c),m.trim()){let e=m.toLowerCase();i(c.filter(t=>t.name?.toLowerCase().includes(e)||t.email?.toLowerCase().includes(e)||t.username?.toLowerCase().includes(e)||!1))}else i(c);let l=c.filter(e=>"admin"===e.role).length,d=c.filter(e=>"developer"===e.role).length,u=c.filter(e=>!e.role||"user"===e.role).length;f({total:c.length,admins:l,developers:d,regular:u})}catch(e){console.error("Error updating user role:",e),alert("Failed to update user role")}};return c?(0,s.jsx)("div",{children:"Loading users..."}):u?(0,s.jsx)("div",{children:u}):(0,s.jsxs)("div",{className:l().userManagementContainer,children:[(0,s.jsx)("h2",{className:l().sectionTitle,children:"User Management"}),(0,s.jsxs)("div",{className:l().statsContainer,children:[(0,s.jsxs)("div",{className:l().statBox,children:[(0,s.jsx)("span",{className:l().statNumber,children:g.total}),(0,s.jsx)("span",{className:l().statLabel,children:"Total Users"})]}),(0,s.jsxs)("div",{className:l().statBox,children:[(0,s.jsx)("span",{className:l().statNumber,children:g.admins}),(0,s.jsx)("span",{className:l().statLabel,children:"Admins"})]}),(0,s.jsxs)("div",{className:l().statBox,children:[(0,s.jsx)("span",{className:l().statNumber,children:g.developers}),(0,s.jsx)("span",{className:l().statLabel,children:"Developers"})]}),(0,s.jsxs)("div",{className:l().statBox,children:[(0,s.jsx)("span",{className:l().statNumber,children:g.regular}),(0,s.jsx)("span",{className:l().statLabel,children:"Regular Users"})]})]}),(0,s.jsx)("div",{className:l().searchContainer,children:(0,s.jsx)("input",{type:"text",placeholder:"Search users by name, email, or username...",value:m,onChange:e=>h(e.target.value),className:l().searchInput})}),(0,s.jsx)("div",{className:l().usersTableContainer,children:(0,s.jsxs)("table",{className:l().usersTable,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Email"}),(0,s.jsx)("th",{children:"Username"}),(0,s.jsx)("th",{children:"Role"}),(0,s.jsx)("th",{children:"Actions"})]})}),(0,s.jsx)("tbody",{children:0===r.length?(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:5,className:l().noResults,children:"No users found"})}):r.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.name||"N/A"}),(0,s.jsx)("td",{children:e.email||"N/A"}),(0,s.jsx)("td",{children:e.username||"N/A"}),(0,s.jsx)("td",{children:e.role||"user"}),(0,s.jsx)("td",{children:(0,s.jsxs)("select",{value:e.role||"user",onChange:t=>b(e.id,t.target.value),className:l().roleSelect,children:[(0,s.jsx)("option",{value:"user",children:"User"}),(0,s.jsx)("option",{value:"developer",children:"Developer"}),(0,s.jsx)("option",{value:"admin",children:"Admin"})]})})]},e.id))})]})})]})}function p(){let[e,t]=(0,a.useState)(""),[r,i]=(0,a.useState)(d[0].id),[n,o]=(0,a.useState)(d),c=e=>{i(e),window.scrollTo(0,0)},u=n.find(e=>e.id===r)||n[0],p=`doc-content-${u?.id||"empty"}-${Date.now()}`;return(0,s.jsxs)("div",{className:l().documentationContainer,children:[(0,s.jsxs)("div",{className:l().docSidebar,children:[(0,s.jsx)("div",{className:l().docSearchContainer,children:(0,s.jsx)("input",{type:"text",placeholder:"Search documentation...",value:e,onChange:e=>t(e.target.value),className:l().docSearchInput})}),(0,s.jsx)("nav",{className:l().docNav,children:n.map(e=>(0,s.jsx)("button",{onClick:()=>c(e.id),className:`${l().docNavItem} ${r===e.id?l().docNavItemActive:""}`,children:e.title},e.id))})]}),(0,s.jsx)("div",{className:l().docContent,children:0===n.length?(0,s.jsx)("div",{className:l().noResults,children:"No documentation sections match your search."}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{className:l().docTitle,children:u.title}),(0,s.jsx)("div",{className:l().docText,dangerouslySetInnerHTML:{__html:function(e){let t=e=>{switch(e){case"tsx":return"Component.tsx";case"ts":return"index.ts";case"js":return"script.js";case"jsx":return"Component.jsx";case"html":return"index.html";case"css":return"styles.css";case"json":return"config.json";default:return"example.code"}},r=(e,t)=>["ts","tsx","js","jsx"].includes(t)?e.replace(/\b(const|let|var|function|class|interface|type|enum|import|export|from|as|return|if|else|for|while|switch|case|break|default|try|catch|finally|async|await|new|this|extends|implements|private|public|protected|static|get|set|super|void|yield)\b/g,'<span class="'+l().keyword+'">$1</span>').replace(/(["'`])((?:\\\1|(?!\1).)*?)\1/g,'<span class="'+l().string+'">$1$2$1</span>').replace(/(`)((?:[^`]|\\.)*?)(`)/g,function(e,t,r,s){let a=r.replace(/(\${)(.*?)(})/g,'<span class="'+l().operator+'">$1</span><span class="'+l().variable+'">$2</span><span class="'+l().operator+'">$3</span>');return'<span class="'+l().string+'">'+t+a+s+"</span>"}).replace(/(\/\/.*?)($|\n)/g,'<span class="'+l().comment+'">$1</span>$2').replace(/(\/\*[\s\S]*?\*\/)/g,'<span class="'+l().comment+'">$1</span>').replace(/(&lt;|\<)([A-Z][A-Za-z0-9]*|[a-z][A-Za-z0-9]*|\/?&gt;|\/?>\s*$)/g,function(e,t,r){return'<span class="'+l().operator+'">'+t+'</span><span class="'+l().type+'">'+r+"</span>"}).replace(/(\s)([A-Za-z_$][A-Za-z0-9_$]*)(\s*\()/g,'$1<span class="'+l().function+'">$2</span>$3').replace(/\b(string|number|boolean|any|void|null|undefined|never|object|Symbol|Array|Promise|Record|Partial|Readonly|Required|Pick|Omit|Exclude|Extract|NonNullable|ReturnType)\b/g,'<span class="'+l().type+'">$1</span>').replace(/(\.)([A-Za-z_$][A-Za-z0-9_$]*)/g,'$1<span class="'+l().variable+'">$2</span>').replace(/([A-Za-z_$][A-Za-z0-9_$]*)(\s*:\s*)/g,'<span class="'+l().variable+'">$1</span>$2').replace(/\b(0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g,'<span class="'+l().number+'">$1</span>').replace(/([=!<>+\-*/%&|^~?:;,.]|=&gt;|=&lt;|&amp;&amp;|\|\|)/g,'<span class="'+l().operator+'">$1</span>').split("\n").map((e,t)=>'<span class="code-line" data-line="'+(t+1)+'">'+(e||"&nbsp;")+"</span>").join("\n"):"html"===t?e.replace(/(&lt;|<)(\/?)([\w\-]+)([^>]*?)(\/?)(>|&gt;)/g,'<span class="'+l().operator+'">$1$2</span><span class="'+l().type+'">$3</span>$4<span class="'+l().operator+'">$5$6</span>').replace(/(\s+)([a-zA-Z\-:_]+)(=)/g,'$1<span class="'+l().variable+'">$2</span><span class="'+l().operator+'">$3</span>').replace(/(=)(["'])((?:\\\2|(?!\2).)*?)(\2)/g,'<span class="'+l().operator+'">$1</span><span class="'+l().string+'">$2$3$4</span>').replace(/(&lt;!--|<!--)([\s\S]*?)(--&gt;|-->)/g,'<span class="'+l().comment+'">$1$2$3</span>').split("\n").map((e,t)=>'<span class="code-line" data-line="'+(t+1)+'">'+(e||"&nbsp;")+"</span>").join("\n"):"css"===t?e.replace(/([.#]?[\w\-_]+)(?=\s*\{)/g,'<span class="'+l().type+'">$1</span>').replace(/([\w\-]+)(\s*:\s*)/g,'<span class="'+l().variable+'">$1</span>$2').replace(/(:)([^;{}]*)([;}])/g,function(e,t,r,s){return t+r.replace(/([#](?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b|((?:\d*\.)?\d+(?:px|em|rem|vh|vw|%|s|ms|deg|pt)?)\b)/g,'<span class="'+l().number+'">$1$2</span>')+s}).replace(/(\/\*[\s\S]*?\*\/)/g,'<span class="'+l().comment+'">$1</span>').replace(/({|})/g,'<span class="'+l().operator+'">$1</span>').split("\n").map((e,t)=>'<span class="code-line" data-line="'+(t+1)+'">'+(e||"&nbsp;")+"</span>").join("\n"):"json"===t?e.replace(/"([^"]+)"\s*:/g,'<span class="'+l().variable+'">"$1"</span>:').replace(/:\s*"([^"]+)"/g,': <span class="'+l().string+'">"$1"</span>').replace(/:\s*(-?\d+(?:\.\d+)?)/g,': <span class="'+l().number+'">$1</span>').replace(/:\s*(true|false|null)\b/g,': <span class="'+l().keyword+'">$1</span>').replace(/([{}\[\]])/g,'<span class="'+l().operator+'">$1</span>').split("\n").map((e,t)=>'<span class="code-line" data-line="'+(t+1)+'">'+(e||"&nbsp;")+"</span>").join("\n"):e.split("\n").map((e,t)=>'<span class="code-line" data-line="'+(t+1)+'">'+(e||"&nbsp;")+"</span>").join("\n"),s=e,a=(s=(s=(s=(s=(s=(s=s.replace(/:::info\s+([^:]+):::/g,'<div class="'+l().alertInfo+'">$1</div>')).replace(/:::warning\s+([^:]+):::/g,'<div class="'+l().alertWarning+'">$1</div>')).replace(/:::success\s+([^:]+):::/g,'<div class="'+l().alertSuccess+'">$1</div>')).replace(/`([^`]+)`/g,(e,t)=>"<code>"+t.replace(/\${/g,"\\${")+"</code>")).replace(/```(tsx|js|jsx|ts|html|css|json)?\s*(?:\[([^\]]+)\])?(?:\n)([\s\S]+?)```/g,(e,s,a,i)=>{let n=a||t(s||""),o=i.replace(/\${/g,"___TEMPLATE_START___").replace(/}/g,"___TEMPLATE_END___").replace(/`/g,"___BACKTICK___"),c=o.trim().split("\n").map((e,t)=>`<span class="${l().lineNumber}">${t+1}</span>`).join(""),d=r(o,s||"").replace(/___TEMPLATE_START___/g,"${").replace(/___TEMPLATE_END___/g,"}").replace(/___BACKTICK___/g,"`");return`
        <div class="${l().codeBlockContainer}">
          <pre class="${l().codeBlock}" data-filename="${n}">
            <div class="${l().codeLineNumbers}">${c}</div>
            <div class="${l().codeContent}">${d}</div>
            <button class="${l().copyButton}" title="Copy to clipboard">Copy</button>
          </pre>
        </div>
      `})).replace(/## ([^\n]+)/g,'<h2 class="'+l().docSubheading+'">$1</h2>').replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/- ([^\n]+)/g,"<li>$1</li>").replace(/(<li>[^<]+<\/li>(\s*)?)+/g,"<ul>$&</ul>")).split(/<pre class=/);for(let e=0;e<a.length;e++)0!==e&&a[e].includes("codeBlock")||(a[e]=a[e].replace(/\n\n/g,"<br><br>"));return a.join("<pre class=")}(u.content)}},p)]})})]})}function m(){(0,i.useRouter)();let[e,t]=(0,a.useState)(!0),[r,n]=(0,a.useState)(!1),[o,c]=(0,a.useState)(""),[d,m]=(0,a.useState)("docs");return e?(0,s.jsx)("div",{className:l().container,children:(0,s.jsxs)("div",{className:l().loadingContainer,children:[(0,s.jsx)("div",{className:l().loadingSpinner}),(0,s.jsx)("p",{children:"Verifying access..."})]})}):r?(0,s.jsx)("div",{className:l().container,children:(0,s.jsxs)("div",{className:l().devDocsContainer,children:[(0,s.jsx)("h1",{className:l().devDocsTitle,children:"Developer Portal"}),(0,s.jsxs)("p",{className:l().devDocsWelcome,children:["Welcome, ",o,"! This page contains developer tools and documentation."]}),(0,s.jsxs)("div",{className:l().tabContainer,children:[(0,s.jsx)("button",{className:`${l().tabButton} ${"docs"===d?l().activeTab:""}`,onClick:()=>m("docs"),children:"Documentation"}),(0,s.jsx)("button",{className:`${l().tabButton} ${"users"===d?l().activeTab:""}`,onClick:()=>m("users"),children:"User Management"})]}),"docs"===d?(0,s.jsx)(p,{}):(0,s.jsx)(u,{})]})}):null}},27910:e=>{"use strict";e.exports=require("stream")},28354:e=>{"use strict";e.exports=require("util")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31501:(e,t,r)=>{Promise.resolve().then(r.bind(r,58868))},33873:e=>{"use strict";e.exports=require("path")},34631:e=>{"use strict";e.exports=require("tls")},37366:e=>{"use strict";e.exports=require("dns")},54410:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>l});var s=r(65239),a=r(48088),i=r(88170),n=r.n(i),o=r(30893),c={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let l={children:["",{children:["dev",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,58868)),"/Users/sirabdisalam/journalite-article-page/src/app/dev/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,94431)),"/Users/sirabdisalam/journalite-article-page/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,54413)),"/Users/sirabdisalam/journalite-article-page/src/app/not-found.tsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,65284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,d=["/Users/sirabdisalam/journalite-article-page/src/app/dev/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/dev/page",pathname:"/dev",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},55511:e=>{"use strict";e.exports=require("crypto")},58868:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/sirabdisalam/journalite-article-page/src/app/dev/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/sirabdisalam/journalite-article-page/src/app/dev/page.tsx","default")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73496:e=>{"use strict";e.exports=require("http2")},74075:e=>{"use strict";e.exports=require("zlib")},78765:(e,t,r)=>{Promise.resolve().then(r.bind(r,22278))},79551:e=>{"use strict";e.exports=require("url")},81630:e=>{"use strict";e.exports=require("http")},91645:e=>{"use strict";e.exports=require("net")},94735:e=>{"use strict";e.exports=require("events")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[476,948,154],()=>r(54410));module.exports=s})();