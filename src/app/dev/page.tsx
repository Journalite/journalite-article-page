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

const userOnboardingImprovementsDoc: DocSection = {
  id: 'user-onboarding-improvements',
  title: 'User Onboarding Flow & Interest Selection',
  content: `
## User Onboarding Flow & Interest Selection

The user onboarding process has been enhanced to include an interest selection step, aiming to personalize the user\\'s initial experience. This is a new area and is open to future tweaks and improvements.

### Onboarding Steps:

1.  **Registration (\`/register\`):**
    *   Users can sign up via Email/Password or Google.
    *   **Email/Password:** Upon successful form submission and profile data creation (\`firstName\`, \`lastName\`, \`username\`, \`email\`), users are redirected to \`/select-interests\`. Email verification is still sent but is a parallel step.
    *   **Google Sign-up:**
        *   If a new user\\'s Google email can be used to form an available username, their basic profile is created, and they are redirected to \`/select-interests\`.
        *   If the auto-generated username is taken, a temporary profile is created, and the user is redirected to \`/profile-setup\` to choose a username. Upon completion, they are then redirected to \`/select-interests\`.

2.  **Profile Setup (\`/profile-setup\`):**
    *   This page is primarily for users (especially new Google sign-ups with clashing usernames) to set or confirm their \`firstName\`, \`lastName\`, and \`username\`.
    *   Their \`email\` is pre-filled.
    *   Upon successful submission, the user profile is updated/created in Firestore, and the user is redirected to \`/select-interests\`.

3.  **Interest Selection (\`/select-interests\`):**
    *   Accessible at \`/select-interests\`.
    *   Users are prompted to select a minimum number of interests (e.g., 3) from a predefined list.
    *   Selected interests are saved to the user\\'s profile in Firestore via the \`updateUserInterests\` function in \`userService.ts\`. The \`UserProfile\` interface now includes an \`interests?: string[]\` field.
    *   After submitting interests, users are redirected to the homepage (\`/\`).

### Key Files & Logic:

*   **\`src/app/register/page.tsx\`**: Handles initial registration and redirection logic.
*   **\`src/app/profile-setup/page.tsx\`**: Handles user profile finalization.
*   **\`src/app/select-interests/page.tsx\`**: New page for interest selection UI and logic.
*   **\`src/services/userService.ts\`**:
    *   \`UserProfile\` interface updated with \`interests\`.
    *   \`updateUserInterests(uid, interests)\` function added.
*   **Redirection Flow:** Carefully orchestrated to guide new users through profile creation/confirmation and then interest selection before landing on the main application.

### Future Considerations:

*   Making the list of interests dynamic (fetched from Firestore).
*   Allowing users to skip interest selection.
*   Enabling users to edit their interests later (e.g., in their profile settings).
*   Refining the email verification step in relation to the new flow.
  `
};

const authStylingEnhancementsDoc: DocSection = {
  id: 'auth-styling-enhancements',
  title: 'Authentication UI & Styling Enhancements',
  content: `
## Authentication UI & Styling Enhancements

The authentication pages (Login, Register, Forgot Password, Reset Password) have been significantly redesigned for a more modern, user-friendly, and consistent look and feel.

### Key Changes:

1.  **Centralized Layout (\`AuthLayout.tsx\`):**
    *   A new \`AuthLayout\` component (\`src/components/AuthLayout.tsx\`) has been created to provide a consistent wrapper for all auth-related pages.
    *   This layout includes:
        *   A clean, centered card for the form content.
        *   The Journalite logo.
        *   A brief introductory text or page title.
        *   Links for alternative actions (e.g., "Don't have an account? Sign Up" or "Back to Login").
    *   The layout uses CSS Modules (\`AuthLayout.module.css\`) for styling.

2.  **Modernized Form Styling (\`AuthForm.module.css\`):**
    *   A dedicated CSS Module (\`AuthForm.module.css\`) is used to style the forms within auth pages.
    *   Inputs, buttons, and error messages now have a more refined and modern appearance.
    *   Focus states are improved for better accessibility.
    *   The color scheme aligns with the Journalite theme (amber and stone).

3.  **Improved User Experience:**
    *   Clearer visual hierarchy and spacing.
    *   Consistent branding across all auth screens.
    *   Responsive design ensures a good experience on all device sizes.

4.  **Page-Specific Updates:**
    *   **Login (\`src/app/login/page.tsx\`):** Uses \`AuthLayout\` and \`AuthForm\` styles.
    *   **Register (\`src/app/register/page.tsx\`):** Updated to use \`AuthLayout\`. Form fields (First Name, Last Name, Username, Email, Password) are styled consistently.
    *   **Forgot Password (\`src/app/forgot-password/page.tsx\`):** Uses \`AuthLayout\`.
    *   **Reset Password (\`src/app/reset-password/page.tsx\`):** Uses \`AuthLayout\`.

### Implementation Details:

*   Each auth page (e.g., \`login/page.tsx\`) now wraps its content with \`<AuthLayout title="..." description="...">...</AuthLayout>\`.
*   Form elements within these pages use class names from \`AuthForm.module.css\`.
*   The global \`globals.css\` and \`home.module.css\` might still apply some base styles, but auth-specific styling is largely encapsulated.

### Example Usage (Login Page):

\`\`\`tsx
// src/app/login/page.tsx
import AuthLayout from '@/components/AuthLayout';
import styles from '@/styles/AuthForm.module.css'; // For form elements

export default function LoginPage() {
  // ... login logic ...
  return (
    <AuthLayout title="Welcome Back" description="Log in to continue to Journalite.">
      <form onSubmit={handleLogin} className={styles.form}>
        {/* ... form inputs and button ... */}
      </form>
    </AuthLayout>
  );
}
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

const featureUpdatesDoc: DocSection = {
  id: 'feature-updates',
  title: 'Feature Updates',
  content: `
## Explore Page Implementation

A new "Explore" page has been added to Journalite, designed to help users discover a wide range of articles.

### Key Features:

*   **Route:** Accessible at \`/explore\`.
*   **Layout:** Utilizes the existing three-column layout (Left Sidebar, Main Content, Right Sidebar).
*   **Content Fetching:** Fetches up to 30 articles using the \`getArticles\` function from \`src/firebase/articles.ts\`.
*   **Categorization:** Articles are organized into sections:
    *   **Featured Stories:** Displays the first 4 articles, with the first article highlighted in a larger format.
    *   **Trending Now:** Shows up to 6 articles, sorted by a combination of view counts and likes.
    *   **Recently Published:** Displays up to 8 of the latest articles.
    *   **Explore by Topic:** Allows users to select a tag (e.g., Technology, Writing) and view up to 6 articles related to that tag. The \`getArticlesByTag\` function is used here.
*   **Structure:**
    *   \`src/app/explore/page.tsx\`: The main page component, acts as a wrapper.
    *   \`src/app/explore/ExploreClient.tsx\`: A client component that handles all the logic, data fetching, state management (selected tags, loading states, etc.), and rendering of the explore page sections and article cards.
*   **Styling:** New CSS styles have been added to \`src/styles/home.module.css\` to support the layout and appearance of the Explore page, including:
    *   \`.explore-header\`, \`.explore-title\`, \`.explore-subtitle\`
    *   \`.explore-container\`, \`.explore-section\`, \`.section-title\`
    *   \`.featured-articles-grid\`, \`.feature-large\` (for the prominent featured article)
    *   \`.tags-selector\`, \`.tag-button\`, \`.tag-button-active\`
    *   Responsive styles to ensure good display on various screen sizes.
*   **Functionality:** Includes standard article card features like displaying author, reading time, excerpt, tags, and reaction buttons (like, share). The share modal functionality is also integrated.

## Home Feed Differentiation

With the introduction of a comprehensive Explore page, the Home Feed (\`/\`) can now focus on a more personalized user experience.

### Potential Home Feed Strategies:

*   **Personalized Recommendations:** Articles based on reading history, liked content, or followed tags/authors.
*   **"For You" Section:** A curated feed algorithmically tailored to individual user preferences.
*   **Following Feed:** Content from authors or topics the user explicitly follows.
*   **Community Activity:** Articles trending within the user's network or recently interacted with by people they follow.
*   **Mixture:** A combination of personalized content, latest articles from followed sources, and some general trending/popular articles to ensure discovery.

The goal is to make the Home Feed a dynamic and relevant starting point for users, while the Explore page serves as a broader discovery tool.
  `
};

const moodFeaturesDoc: DocSection = {
  id: 'mood-features',
  title: 'Mood & Reflection Features',
  content: `
## Overview

The Mood & Reflection system provides an immersive reading experience by analyzing article content and adapting the visual atmosphere accordingly. It includes sentiment analysis, dynamic backgrounds, interactive reflections, and mood-aware comment styling.

## Mood Detection Algorithm

### Sentiment Analysis Engine

\`\`\`tsx[src/utils/getMoodFromText.ts]
import sentiment from 'sentiment';

export function getMoodFromText(text: string): MoodType {
  const analyzer = new sentiment();
  const result = analyzer.analyze(text);
  
  // 6-mood system: joyful, angry, energetic, peaceful, reflective, sad
  // Keywords take precedence over sentiment score for accuracy
  
  const words = text.toLowerCase().split(/\s+/);
  
  // Calculate keyword scores for each mood
  const joyfulScore = countKeywords(words, joyfulWords);
  const angryScore = countKeywords(words, angryWords);
  const energeticScore = countKeywords(words, energeticWords);
  const peacefulScore = countKeywords(words, peacefulWords);
  const sadScore = countKeywords(words, sadWords);
  
  // Political content detection
  const politicalWords = ['trump', 'biden', 'politics', 'election', 'government'];
  const isPolitical = words.some(word => politicalWords.includes(word));
  
  if (isPolitical) {
    return result.score > 2 ? 'energetic' : result.score < -2 ? 'angry' : 'reflective';
  }
  
  // Return mood with highest keyword score
  const maxScore = Math.max(joyfulScore, angryScore, energeticScore, peacefulScore, sadScore);
  if (maxScore === 0) return 'reflective'; // Default
  
  // Return corresponding mood
  if (maxScore === joyfulScore) return 'joyful';
  if (maxScore === angryScore) return 'angry';
  if (maxScore === energeticScore) return 'energetic';
  if (maxScore === peacefulScore) return 'peaceful';
  return 'sad';
}
\`\`\`

### Keyword Categories

Each mood has extensive keyword lists:

- **Joyful**: celebration, success, love, achievement, happiness (200+ words)
- **Angry**: frustrated, furious, outraged, betrayed, injustice (150+ words)
- **Energetic**: exciting, dynamic, breakthrough, innovation, passionate (180+ words)
- **Peaceful**: calm, serene, meditation, nature, harmony (120+ words)
- **Reflective**: contemplation, thoughts, philosophy, introspection (100+ words)
- **Sad**: loss, grief, disappointment, tragedy, melancholy (130+ words)

## Visual Theming System

### Color Palettes

\`\`\`tsx[src/utils/moodThemes.ts]
export const moodThemes = {
  joyful: {
    gradientStart: '#FFD700',
    gradientEnd: '#FF6B6B',
    accent: '#FF4757',
    textColor: '#2C2C54'
  },
  angry: {
    gradientStart: '#FF4757',
    gradientEnd: '#C44569',
    accent: '#B33771',
    textColor: '#FFFFFF'
  },
  // ... 4 more moods
};
\`\`\`

### Multi-Layer Background System

\`\`\`tsx
{/* Four animated layers for immersive experience */}
{moodFeatureEnabled && isAuthenticated && (
  <>
    {/* Primary flowing gradient */}
    <div style={{
      backgroundImage: \`linear-gradient(45deg, 
        \${moodThemes[mood].gradientStart}40, 
        \${moodThemes[mood].gradientEnd}60)\`,
      animation: 'gradientFlow 8s ease-in-out infinite'
    }} />
    
    {/* Secondary wave layer */}
    <div style={{
      backgroundImage: \`radial-gradient(circle, 
        \${moodThemes[mood].gradientEnd}25 0%, transparent 50%)\`,
      animation: 'moodFloat 12s ease-in-out infinite alternate'
    }} />
    
    {/* Floating orbs */}
    <div style={{
      backgroundImage: \`radial-gradient(circle, 
        \${moodThemes[mood].gradientStart}20 0%, transparent 25%)\`,
      animation: 'orbitalFloat 20s linear infinite'
    }} />
    
    {/* Grain texture overlay */}
    <div style={{
      backgroundImage: \`repeating-linear-gradient(90deg,
        transparent, \${moodThemes[mood].gradientStart}02 2px)\`,
      mixBlendMode: 'overlay'
    }} />
  </>
)}
\`\`\`

## Authentication-Gated Features

### Feature Access Control

\`\`\`tsx
// Mood features only work for authenticated users
const isAuthenticated = !!currentUser;

// Reflection bar shows different content
{isAuthenticated ? (
  <div>🎨 Atmosphere adapted - ✨ Reflections saved: {count}</div>
) : (
  <div>🔒 Sign in for enhanced features</div>
)}

// Toggles are disabled for non-auth users
<button 
  disabled={!isAuthenticated}
  onClick={isAuthenticated ? toggleMood : undefined}
>
  {(isAuthenticated && moodEnabled) ? 'ON' : 'OFF'}
</button>
\`\`\`

### User Preferences

- **localStorage persistence**: Mood preferences saved per user
- **Toggle controls**: Users can disable mood backgrounds
- **Default behavior**: New users get mood features enabled

## Interactive Reflections

### Prompt Generation System

\`\`\`tsx
// Base prompts + topic-specific prompts
const getTopicBasedPrompts = (text: string) => {
  const topicPrompts = [];
  
  // Technology content
  if (text.includes('AI') || text.includes('technology')) {
    topicPrompts.push("How might this technology impact your daily life?");
    topicPrompts.push("What ethical considerations does this raise?");
  }
  
  // Social issues
  if (text.includes('social') || text.includes('justice')) {
    topicPrompts.push("What role should individuals play in addressing this?");
    topicPrompts.push("How might different communities view this differently?");
  }
  
  return [...basePrompts, ...topicPrompts];
};
\`\`\`

### Floating Action Button

- **Fixed positioning**: Always accessible during reading
- **Smooth animations**: Scale and glow effects on hover
- **Context awareness**: Shows reflection count and state

## Comment System Integration

### Glass-Morphism Design

\`\`\`tsx
// Comments adapt to detected mood
<div style={{
  background: \`linear-gradient(135deg, 
    rgba(255, 255, 255, 0.25) 0%, 
    \${moodThemes[mood].gradientStart}15 100%)\`,
  backdropFilter: 'blur(20px) saturate(180%)',
  border: \`1px solid \${moodThemes[mood].gradientStart}25\`,
  borderRadius: '24px'
}}>
  {/* Comment content */}
</div>
\`\`\`

### Mood-Themed Elements

- **Input forms**: Dynamic focus states with mood colors
- **Submit buttons**: Animated with mood gradients  
- **Loading states**: Mood-colored progress indicators
- **Reply cards**: Slide animations on hover
- **Empty states**: "Be the first to share" cards with mood styling

## Performance Optimizations

### Efficient Rendering

- **Conditional rendering**: Mood effects only for authenticated users
- **CSS-in-JS**: Dynamic styles without layout thrashing
- **Animation performance**: GPU-accelerated transforms only
- **Memory management**: Cleanup of event listeners and timers

### Code Splitting

\`\`\`tsx
// Mood utilities loaded only when needed
const { getMoodFromText } = await import('@/utils/getMoodFromText');
const { moodThemes } = await import('@/utils/moodThemes');
\`\`\`

## Implementation Guide

### Adding Mood to New Components

1. **Import utilities**:
   \`\`\`tsx
   import { getMoodFromText } from '@/utils/getMoodFromText';
   import { moodThemes } from '@/utils/moodThemes';
   \`\`\`

2. **Detect mood from content**:
   \`\`\`tsx
   const detectedMood = getMoodFromText(textContent);
   \`\`\`

3. **Apply conditional styling**:
   \`\`\`tsx
   style={isAuthenticated && moodEnabled ? {
     background: moodThemes[mood].gradientStart + '20',
     borderColor: moodThemes[mood].accent
   } : {}}
   \`\`\`

4. **Pass mood props to children**:
   \`\`\`tsx
   <ChildComponent 
     {...(isAuthenticated && { mood, moodFeatureEnabled })}
   />
   \`\`\`

### CSS Animations Required

Ensure these keyframes exist in \`globals.css\`:
- \`@keyframes gradientFlow\`
- \`@keyframes moodFloat\`  
- \`@keyframes orbitalFloat\`

## Future Enhancements

- **Machine learning**: More sophisticated mood detection
- **User training**: Let users correct mood detection
- **Seasonal themes**: Holiday and seasonal mood variations
- **Accessibility**: High contrast mode for mood themes
- **Analytics**: Track mood preferences and effectiveness
  `
};

const enhancedHighlightsDoc: DocSection = {
  id: 'enhanced-highlights',
  title: 'Enhanced Highlight Features',
  content: `
## Overview

The Enhanced Highlight system transforms basic text highlighting into an engaging, social, and semantic experience. Users can now categorize highlights, react to them, and share specific highlights via direct URLs.

## 🎨 Color-Coded Highlights by Theme

### Four Semantic Categories

\`\`\`tsx[src/services/highlightService.ts]
export type HighlightTag = 'insight' | 'question' | 'quote' | 'important';

const highlightTags = [
  { tag: 'insight', label: 'Insight', color: '#3B82F6', icon: '💡' },
  { tag: 'question', label: 'Question', color: '#F59E0B', icon: '❓' },
  { tag: 'quote', label: 'Quote', color: '#10B981', icon: '💬' },
  { tag: 'important', label: 'Important', color: '#EF4444', icon: '⭐' }
];
\`\`\`

### Enhanced Highlight Interface

\`\`\`tsx
export interface Highlight {
  id: string;
  articleId: string;
  userId: string;
  text: string;
  prefix: string;
  suffix: string;
  tag: HighlightTag;                    // NEW: Semantic category
  reactions?: { [emoji: string]: number };  // NEW: Reaction counts
  userReactions?: { [userId: string]: string }; // NEW: User reaction tracking
  createdAt: any;
  comments?: Comment[];
}
\`\`\`

### CSS Color Styling

\`\`\`css[src/styles/highlight.css]
.article-highlight.highlight-insight {
  background-color: rgba(59, 130, 246, 0.3); /* Blue */
}

.article-highlight.highlight-question {
  background-color: rgba(245, 158, 11, 0.3); /* Amber */
}

.article-highlight.highlight-quote {
  background-color: rgba(16, 185, 129, 0.3); /* Emerald */
}

.article-highlight.highlight-important {
  background-color: rgba(239, 68, 68, 0.3); /* Red */
}
\`\`\`

## 🔗 Highlight & Share Links

### URL Generation

\`\`\`tsx
export const generateHighlightShareUrl = (
  articleSlug: string,
  highlightId: string,
  baseUrl: string = window.location.origin
): string => {
  return \`\${baseUrl}/articles?slug=\${articleSlug}#highlight=\${highlightId}\`;
};

// Usage example
const shareUrl = generateHighlightShareUrl('my-article', 'highlight123');
// Result: https://journalite.com/articles?slug=my-article#highlight=highlight123
\`\`\`

### Auto-Scroll & Flash Animation

\`\`\`tsx
// Check URL fragment and scroll to highlight
useEffect(() => {
  if (typeof window !== 'undefined') {
    const urlFragment = window.location.hash;
    if (urlFragment === \`#highlight=\${highlight.id}\`) {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 1000);
      
      // Smooth scroll to highlight
      const element = document.querySelector(\`[data-highlight-id="\${highlight.id}"]\`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
}, [highlight.id]);
\`\`\`

### Share Functionality

\`\`\`tsx
const handleShare = () => {
  const shareUrl = generateHighlightShareUrl(articleSlug, highlight.id);
  
  if (navigator.share) {
    // Native share API (mobile)
    navigator.share({
      title: 'Check out this highlight',
      text: \`"\${highlight.text}"\`,
      url: shareUrl,
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareUrl);
    showTooltip('Link copied to clipboard!');
  }
};
\`\`\`

## 👍 Quick Reactions System

### Available Reactions

\`\`\`tsx
const availableReactions = ['👍', '❤️', '🤔', '💡'];
\`\`\`

### Reaction Management

\`\`\`tsx
export const addReactionToHighlight = async (
  highlightId: string,
  userId: string,
  emoji: string
): Promise<void> => {
  const highlightRef = doc(db, 'highlights', highlightId);
  
  await updateDoc(highlightRef, {
    [\`reactions.\${emoji}\`]: increment(1),
    [\`userReactions.\${userId}\`]: emoji
  });
};

export const removeReactionFromHighlight = async (
  highlightId: string,
  userId: string,
  emoji: string
): Promise<void> => {
  const highlightRef = doc(db, 'highlights', highlightId);
  
  await updateDoc(highlightRef, {
    [\`reactions.\${emoji}\`]: increment(-1),
    [\`userReactions.\${userId}\`]: null
  });
};
\`\`\`

### Reaction UI Component

\`\`\`tsx
const ReactionButton = ({ emoji, count, isActive, onReact }) => (
  <button
    onClick={() => onReact(emoji)}
    className={\`highlight-reaction-btn \${isActive ? 'active' : ''}\`}
  >
    <span className="highlight-reaction-emoji">{emoji}</span>
    {count > 0 && (
      <span className="highlight-reaction-count">{count}</span>
    )}
  </button>
);
\`\`\`

## 🛠️ Enhanced Toolbar Implementation

### Color Selection Interface

\`\`\`tsx
const HighlightToolbar = ({ selection, onHighlight }) => {
  const [showColorOptions, setShowColorOptions] = useState(false);
  
  return (
    <div className="highlight-toolbar">
      {!showColorOptions ? (
        <button onClick={() => setShowColorOptions(true)}>
          Highlight
        </button>
      ) : (
        <div className="highlight-color-options">
          <span>Choose highlight type:</span>
          {highlightTags.map((tagInfo) => (
            <button
              key={tagInfo.tag}
              onClick={() => handleHighlight(selection, tagInfo.tag)}
              style={{ backgroundColor: tagInfo.color }}
            >
              {tagInfo.icon} {tagInfo.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
\`\`\`

## 📊 Performance & Data Structure

### Lightweight Implementation

- **Storage**: Only added 3 fields to existing Highlight object
- **Reactions**: Simple integer increments, no complex aggregation
- **Colors**: CSS-only styling, no JavaScript color calculations
- **URLs**: Fragment-based routing, no server-side changes needed

### Database Structure

\`\`\`
highlights/{highlightId}
├── tag: 'insight' | 'question' | 'quote' | 'important'
├── reactions: { '👍': 5, '❤️': 2, '🤔': 1 }
├── userReactions: { 'user1': '👍', 'user2': '❤️' }
└── ...existing fields
\`\`\`

### Query Optimization

\`\`\`tsx
// Reactions use Firestore increment for atomic updates
await updateDoc(highlightRef, {
  [\`reactions.\${emoji}\`]: increment(1)  // Atomic operation
});

// No need for read-then-write patterns
// No race conditions with multiple users reacting simultaneously
\`\`\`

## 🎯 User Experience Enhancements

### Visual Feedback

- **Hover states**: Show reaction/share options on highlight hover
- **Flash animation**: Shared highlights flash when visited via URL
- **Instant feedback**: Reactions update immediately with optimistic UI
- **Color coding**: Instant visual categorization of highlight types

### Mobile Optimization

- **Touch-friendly**: Large tap targets for reaction buttons
- **Native sharing**: Uses device's native share sheet when available
- **Responsive toolbar**: Adapts to screen size constraints

## 🚀 Implementation Guide

### Adding to Existing Articles

1. **Update highlight service**:
   \`\`\`tsx
   import { HighlightTag } from '@/services/highlightService';
   \`\`\`

2. **Modify highlight creation**:
   \`\`\`tsx
   const handleHighlight = (text: string, range: Range, tag: HighlightTag) => {
     saveHighlight(text, prefix, suffix, articleId, tag);
   };
   \`\`\`

3. **Apply color classes**:
   \`\`\`tsx
   <span className={\`article-highlight highlight-\${highlight.tag}\`}>
     {highlight.text}
   </span>
   \`\`\`

4. **Add reaction handling**:
   \`\`\`tsx
   <HighlightDisplay 
     highlight={highlight} 
     articleSlug={articleSlug}
     onUpdate={refreshHighlights}
   />
   \`\`\`

### Required CSS

Ensure these styles exist in \`highlight.css\`:
- \`.highlight-color-options\` - Color selection toolbar
- \`.highlight-reaction-btn\` - Reaction buttons
- \`.highlight-shared-flash\` - Flash animation
- \`.highlight-[tag]\` - Color variants for each tag

## 💡 Future Enhancement Ideas

### Highlight Heatmap Bar (Next Phase)

\`\`\`tsx
// Break article into segments and show highlight density
const HighlightHeatmap = ({ highlights, articleLength }) => {
  const segments = 20;
  const segmentCounts = calculateHighlightDensity(highlights, segments);
  
  return (
    <div className="highlight-heatmap">
      {segmentCounts.map((count, index) => (
        <div 
          key={index}
          className="heatmap-segment"
          style={{ opacity: count / maxCount }}
        />
      ))}
    </div>
  );
};
\`\`\`

### Offline-First Highlighting

\`\`\`tsx
// Buffer highlights in localStorage when offline
const saveHighlightOffline = (highlight) => {
  const pending = JSON.parse(localStorage.getItem('pendingHighlights') || '[]');
  pending.push(highlight);
  localStorage.setItem('pendingHighlights', JSON.stringify(pending));
};

// Sync when online
const syncPendingHighlights = async () => {
  const pending = JSON.parse(localStorage.getItem('pendingHighlights') || '[]');
  
  for (const highlight of pending) {
    await saveHighlight(...highlight);
  }
  
  localStorage.removeItem('pendingHighlights');
};
\`\`\`

### Analytics & Insights

- Track most popular highlight types per article
- Identify engaging content sections via highlight density
- User highlighting patterns and preferences
- Social sharing metrics for highlighted content

## 📈 Impact Metrics

### Engagement Benefits

- **Increased Time on Page**: Categorized highlights encourage deeper reading
- **Social Sharing**: Direct highlight URLs drive referral traffic
- **User Retention**: Reaction system creates social connection
- **Content Insights**: Highlight patterns reveal reader interests

### Technical Benefits

- **Zero Complexity**: No new microservices or complex infrastructure
- **High Performance**: Client-side routing and CSS-only visuals
- **Scalable**: Firestore handles concurrent reactions efficiently
- **Maintainable**: Clean separation of concerns, minimal code changes
  `
};

const journaColorDoc: DocSection = {
  id: 'journa-color',
  title: 'Journa Color - Advanced Theme Customization',
  content: `
## Overview

Journa Color is an advanced theme customization system that allows users to create personalized gradients, colors, and visual effects for their reading experience. Inspired by modern design tools, it provides real-time visual customization with intuitive controls.

## Core Features

### 🎨 Interactive Gradient Editor

\`\`\`tsx[src/components/GradientPanel.tsx]
const GradientPanel: React.FC<GradientPanelProps> = ({
  currentMood,
  isVisible,
  moodFeatureEnabled
}) => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    colorStops: [
      { id: '1', color: '#007AFF', x: 30, y: 40, isSelected: true }
    ],
    opacity: 80,
    grain: 30,
    mode: 'auto'
  });
  
  // Generate real-time gradients with grain effects
  const generateJournaColorGradient = (config: ThemeConfig) => {
    // Multi-layer gradient generation with grain overlay
    // Supports 1-3 color stops with advanced blending
  };
};
\`\`\`

### 🎛️ Tactile Rotary Controls

- **Grain Control**: Rotary knob with 24 detent positions for tactile feedback
- **Opacity Slider**: Squiggly line design for transparency control
- **Color Stops**: Draggable colored circles (up to 3) in canvas area
- **Theme Modes**: Auto, Light, Dark toggles

\`\`\`tsx
// Tactile knob with detents every 15 degrees
const detentSize = 15; // degrees per detent
const rawGrain = (angle / 360) * 100;
const detentIndex = Math.round(rawGrain / (100 / (360 / detentSize)));
const snappedGrain = Math.max(0, Math.min(100, (detentIndex * (100 / (360 / detentSize)))));

// Haptic feedback on mobile devices
if (navigator.vibrate) {
  navigator.vibrate(10); // Short vibration on detent hit
}
\`\`\`

## Visual Components

### 🌈 Multi-Stop Gradient System

\`\`\`tsx
interface ColorStop {
  id: string;
  color: string;
  x: number; // 0-100 canvas position
  y: number; // 0-100 canvas position
  isSelected: boolean;
}

// Supports 1-3 color stops with different blending modes
if (colorStops.length === 1) {
  return \`radial-gradient(circle at \${stop.x}% \${stop.y}%, 
    \${stop.color}\${alpha}, transparent 70%)\`;
} else if (colorStops.length === 2) {
  // Dual-radial blend
} else if (colorStops.length === 3) {
  // Triple-radial blend
}
\`\`\`

### 🔘 Grain & Texture Effects

\`\`\`tsx
// Realistic film grain overlay
const grainPattern = \`
  radial-gradient(circle at 15% 15%, rgba(255,255,255,\${grainOpacity}) 0.5px, transparent \${grainSize}px),
  radial-gradient(circle at 85% 25%, rgba(0,0,0,\${grainOpacity * 0.8}) 0.5px, transparent \${grainSize * 0.7}px),
  radial-gradient(circle at 45% 85%, rgba(255,255,255,\${grainOpacity * 0.6}) 0.5px, transparent \${grainSize * 1.1}px)
\`;

return grainPattern ? \`\${grainPattern}\${baseGradient}\` : baseGradient;
\`\`\`

## Real-Time Application System

### 🎯 Smart Element Targeting

\`\`\`tsx
const updateThemeRealTime = (config: ThemeConfig) => {
  const gradientCSS = generateJournaColorGradient(config);
  const clearerGradientCSS = generateClearerGradient(config);
  
  // Update background mood elements
  const moodElements = document.querySelectorAll('[data-mood-element]');
  moodElements.forEach(element => {
    element.style.backgroundImage = gradientCSS;
    element.style.transition = 'background-image 0.2s ease';
  });

  // Update UI bars with clearer version
  const toggleBar = document.querySelector('[data-toggle-bar="true"]');
  if (toggleBar) {
    toggleBar.style.backgroundImage = clearerGradientCSS;
  }
};
\`\`\`

### 📱 Responsive Design

\`\`\`tsx
// Floating button with dynamic gradient background
<button
  style={{
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: currentGradient || '#007AFF',
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 9999
  }}
>
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="8" cy="8" r="3" fill="url(#iconGradient)"/>
    <circle cx="16" cy="12" r="2.5" fill="url(#iconGradient)"/>
    <circle cx="12" cy="18" r="2" fill="url(#iconGradient)"/>
  </svg>
</button>
\`\`\`

## Architecture & Performance

### 💾 Persistent Storage

\`\`\`tsx
// Configuration automatically saved to localStorage
localStorage.setItem('journaColorThemeConfig', JSON.stringify(config));

// Restored on page load
useEffect(() => {
  const saved = localStorage.getItem('journaColorThemeConfig');
  if (saved) {
    const config = JSON.parse(saved);
    setThemeConfig(config);
    updateThemeRealTime(config);
  }
}, []);
\`\`\`

### ⚡ Optimized Rendering

- **Direct DOM manipulation** for performance (no React re-renders)
- **Debounced updates** during dragging operations
- **CSS transitions** for smooth visual changes
- **Hardware acceleration** via CSS transforms

### 🎨 Color Palette Integration

\`\`\`tsx
const presetColors = [
  '#FFFFFF', '#FFB3D9', '#B19CD9', '#FF6B6B', 
  '#FF8E53', '#FFD93D', '#6BCF7F', '#4ECDC4', '#45B7D1'
];

// Quick color application to selected stop
const changeSelectedColor = (color: string) => {
  const selectedStop = themeConfig.colorStops.find(stop => stop.isSelected);
  if (!selectedStop) return;
  
  const newConfig = {
    ...themeConfig,
    colorStops: themeConfig.colorStops.map(stop => 
      stop.isSelected ? { ...stop, color } : stop
    )
  };
  
  setThemeConfig(newConfig);
  updateThemeRealTime(newConfig);
};
\`\`\`

## User Experience Features

### 🎚️ Intuitive Controls

- **Visual feedback**: Selected elements have enlarged appearance
- **Color harmony**: Smart color suggestions based on current palette
- **Undo/Redo**: State management for experimentation
- **Preview mode**: See changes before applying

### 🔄 Integration with Mood System

- **Mood-aware defaults**: Starting colors based on detected article mood
- **Seamless transitions**: Smooth blending between mood and custom themes
- **Context preservation**: Custom themes respect reading context

### 📊 Usage Analytics

\`\`\`tsx
  // Track user interactions for UX improvements
  const trackCustomization = (action: string, value: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Journa Color:', action, value);
    }
    // Can be extended with analytics service
  };

// Example usage
trackCustomization('color_changed', { from: oldColor, to: newColor });
trackCustomization('grain_adjusted', grainValue);
trackCustomization('preset_selected', presetIndex);
\`\`\`

## Technical Implementation

### 🏗️ Component Structure

\`\`\`
GradientPanel/
├── ThemeConfig interface
├── ColorStop management
├── Real-time gradient generation
├── Tactile control handlers
├── localStorage persistence
└── DOM manipulation utilities
\`\`\`

### 🎯 Performance Optimizations

- **RAF-based updates**: Smooth 60fps interactions
- **Memoized calculations**: Cached gradient computations
- **Efficient selectors**: Minimal DOM queries
- **CSS-only animations**: Hardware-accelerated transitions

This system provides users with professional-grade theme customization while maintaining optimal performance and intuitive user experience.
  `
};

const realTimePresenceDoc: DocSection = {
  id: 'realtime-presence',
  title: 'Real-Time Presence System',
  content: `
## Real-Time Presence Feature

A Google Docs-style real-time presence system that shows overlapping user avatars of people currently reading the same article.

### 🏗️ High-Level Architecture

\`\`\`
User Opens Article → Authentication Check → Start Presence Tracking → Real-time Updates → Cleanup
\`\`\`

### 🔧 Core Components

#### 1. PresenceService (Backend Logic)
- **Purpose**: Manages all Firebase operations and user tracking  
- **Location**: \`src/services/presenceService.ts\`
- **Responsibilities**:
  - Start/stop presence tracking
  - Manage heartbeat updates
  - Handle real-time subscriptions
  - Clean up stale data

#### 2. ActiveReaders Component (Frontend Display)
- **Purpose**: Renders the overlapping user avatars
- **Location**: \`src/components/ActiveReaders.tsx\`
- **Responsibilities**:
  - Display user avatars and count
  - Handle authentication checks
  - Subscribe to presence updates

#### 3. Firebase Database Structure
\`\`\`
articlePresence/
├── {articleId}_{userId1}
│   ├── uid: "user123"
│   ├── username: "john_doe"
│   ├── firstName: "John"
│   ├── lastName: "Doe"
│   ├── lastSeen: timestamp
│   └── articleId: "article456"
├── {articleId}_{userId2}
└── ...
\`\`\`

## 🔄 Complete Data Flow

### Phase 1: User Enters Article
\`\`\`javascript
1. ActiveReaders component mounts
2. Checks if user is authenticated
3. If authenticated → calls presenceService.startPresence(articleId)
4. PresenceService creates document: articlePresence/{articleId}_{userId}
5. Sets up heartbeat interval (every 15 seconds)
6. Adds cleanup event listeners (beforeunload, pagehide, etc.)
\`\`\`

### Phase 2: Real-time Synchronization
\`\`\`javascript
1. Component subscribes to presenceService.subscribeToActiveUsers()
2. Firebase query: "Get all users where lastSeen > 45 seconds ago"
3. For each presence document:
   - Fetch full user profile
   - Add to active users list
   - Exclude current user from display
4. Update UI with new user list
5. Heartbeat updates lastSeen timestamp every 15s
\`\`\`

### Phase 3: User Activity Monitoring
\`\`\`javascript
// Heartbeat Logic
setInterval(() => {
  if (auth.currentUser && !document.hidden) {
    // Update presence timestamp
    updatePresenceDocument()
  }
}, 15000)

// Tab Visibility
document.addEventListener('visibilitychange', () => {
  if (hidden for > 30s) {
    stopPresence()
  }
})
\`\`\`

### Phase 4: Cleanup Scenarios

| **Scenario** | **Detection Method** | **Cleanup Time** |
|--------------|---------------------|------------------|
| User closes tab | \`beforeunload\` event | Immediate |
| User switches tabs | \`visibilitychange\` + timeout | 30 seconds |
| User logs out | \`auth.onAuthStateChanged\` | Immediate |
| Browser crash | Background cleanup service | 60 seconds |
| Network disconnect | Heartbeat failure | 45 seconds |

## 🎯 Key Logic Patterns

### 1. Optimistic Presence Tracking
\`\`\`javascript
// Assume user is active until proven otherwise
startPresence() → immediate UI update
heartbeat() → keep alive signal
noHeartbeat(45s) → assume user left
\`\`\`

### 2. Multi-layer Cleanup
\`\`\`javascript
// Layer 1: Immediate cleanup
window.addEventListener('beforeunload', cleanup)

// Layer 2: Tab switching
document.hidden + setTimeout(30s)

// Layer 3: Background sweeper
setInterval(cleanupStale, 30s) // Removes anything > 60s old
\`\`\`

### 3. Defensive Programming
\`\`\`javascript
// Always check authentication
if (!auth.currentUser) return;

// Always handle Firebase errors
try { updatePresence() } 
catch { stopHeartbeat() }

// Always validate data
if (!userProfile) return;
\`\`\`

## 🔄 Real-time Update Cycle

\`\`\`
User A opens article
     ↓
Document created: articlePresence/article123_userA
     ↓
User B opens same article  
     ↓
Document created: articlePresence/article123_userB
     ↓
Both users subscribe to: "WHERE articleId = 'article123' AND lastSeen > now-45s"
     ↓
Firebase sends real-time updates to both users
     ↓
Each user sees the other in their ActiveReaders component
\`\`\`

## 🎨 UI Rendering Logic

\`\`\`javascript
// Authentication Gate
if (!isAuthenticated) return null;

// Empty State
if (activeUsers.length === 0) return null;

// Render State
return (
  <Stack>
    {users.slice(0,5).map((user, index) => (
      <Avatar 
        left={index * 20px}  // 20px overlap
        zIndex={5 - index}   // First user on top
        color={colors[index % 8]}
      />
    ))}
    <GreenDot position="after-last-avatar" />
    <Text>{users.length} people reading</Text>
  </Stack>
)
\`\`\`

## ⚡ Performance Optimizations

### 1. Efficient Queries
\`\`\`javascript
// Only get recent users (45s window)
where('lastSeen', '>', cutoffTime)
// Limit results
.limit(10)
// Order by recency  
.orderBy('lastSeen', 'desc')
\`\`\`

### 2. Smart Heartbeat
\`\`\`javascript
// Only update if conditions are met
if (auth.currentUser && !document.hidden) {
  updatePresence()
}
\`\`\`

### 3. Automatic Cleanup
\`\`\`javascript
// Background service removes stale data
setInterval(removeOldDocuments, 30000)
\`\`\`

## 🔐 Security & Privacy

\`\`\`javascript
// Authentication Required
if (!user) return "Cannot start presence";

// Profile Data Required  
if (!userProfile) return "No profile found";

// Firebase Security Rules (recommended)
rules_version = '2';
service cloud.firestore {
  match /articlePresence/{document} {
    allow read, write: if request.auth != null 
      && request.auth.uid == resource.data.uid;
  }
}
\`\`\`

## 🎯 Why This Design?

1. **Resilient**: Multiple cleanup mechanisms handle edge cases
2. **Real-time**: Firebase listeners provide instant updates
3. **Efficient**: Short heartbeat + aggressive cleanup = minimal database load
4. **Scalable**: Works with 1 user or 1000 users per article
5. **Private**: Only authenticated users with profiles participate
6. **Accurate**: 45-second window ensures users are actually active

## 🚀 Integration

The feature is integrated into both article routes:
- \`/articles/[id]\` - Individual article pages
- \`/articles?slug=\` - Slug-based article pages

### Example Usage
\`\`\`tsx
import ActiveReaders from '@/components/ActiveReaders';

// In article header
<div className={styles.articleHeaderWithReaders}>
  <div className={styles.titleSection}>
    <h1>{article.title}</h1>
  </div>
  <div className={styles.readersSection}>
    <ActiveReaders articleId={article.id} />
  </div>
</div>
\`\`\`

This creates a Google Docs-like experience where you can see who's actively reading the same content as you in real-time! 🚀

**Result**: Users will disappear from the "reading" indicator within **45 seconds** of actually leaving, with no ghost users showing as "active" when they've logged out or closed their browser.
  `
};

// Collection of all documentation sections
const docSections: DocSection[] = [
  projectStructureDoc,
  firebaseLogicDoc,
  userOnboardingImprovementsDoc,
  authStylingEnhancementsDoc,
  featureUpdatesDoc,
  articleSystemDoc,
  userProfilesDoc,
  routingDoc,
  deploymentDoc,
  bestPracticesDoc,
  tagFeatureDoc,
  moodFeaturesDoc,
  journaColorDoc,
  enhancedHighlightsDoc,
  realTimePresenceDoc
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