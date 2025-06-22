'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { doc, getDoc, collection, getDocs, query, limit, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';
import { getCurrentInterestsVersion, markUsersForInterestsUpdate } from '@/services/userService';
import styles from '@/styles/home.module.css';
import Link from 'next/link';
import { 
  RocketIcon, 
  UserIcon, 
  ComputerIcon, 
  SettingsIcon,
  StarIcon,
  BulbIcon,
  CommentIcon,
  NotificationIcon
} from '@/components/icons/CustomIcons';

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

## Color-Coded Highlights by Theme

### Four Semantic Categories

\`\`\`tsx[src/services/highlightService.ts]
export type HighlightTag = 'insight' | 'question' | 'quote' | 'important';

const highlightTags = [
  { tag: 'insight', label: 'Insight', color: '#3B82F6', icon: '◇' },
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

## Performance & Data Structure

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

## User Experience Enhancements

### Visual Feedback

- **Hover states**: Show reaction/share options on highlight hover
- **Flash animation**: Shared highlights flash when visited via URL
- **Instant feedback**: Reactions update immediately with optimistic UI
- **Color coding**: Instant visual categorization of highlight types

### Mobile Optimization

- **Touch-friendly**: Large tap targets for reaction buttons
- **Native sharing**: Uses device's native share sheet when available
- **Responsive toolbar**: Adapts to screen size constraints

## Implementation Guide

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

## Future Enhancement Ideas

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

## Impact Metrics

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

### Interactive Gradient Editor

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

### Tactile Rotary Controls

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

### ▣ Multi-Stop Gradient System

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

### Smart Element Targeting

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

### Optimized Rendering

- **Direct DOM manipulation** for performance (no React re-renders)
- **Debounced updates** during dragging operations
- **CSS transitions** for smooth visual changes
- **Hardware acceleration** via CSS transforms

### ◈ Color Palette Integration

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

### Integration with Mood System

- **Mood-aware defaults**: Starting colors based on detected article mood
- **Seamless transitions**: Smooth blending between mood and custom themes
- **Context preservation**: Custom themes respect reading context

### ▣ Usage Analytics

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

### ◦ Performance Optimizations

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

## Complete Data Flow

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

## Key Logic Patterns

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

## Real-time Update Cycle

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

## ◈ UI Rendering Logic

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

## Performance Optimizations

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

## Why This Design?

1. **Resilient**: Multiple cleanup mechanisms handle edge cases
2. **Real-time**: Firebase listeners provide instant updates
3. **Efficient**: Short heartbeat + aggressive cleanup = minimal database load
4. **Scalable**: Works with 1 user or 1000 users per article
5. **Private**: Only authenticated users with profiles participate
6. **Accurate**: 45-second window ensures users are actually active

## Integration

The feature is integrated into both article routes:
- \`/articles/[slug]\` - Individual article pages
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

This creates a Google Docs-like experience where you can see who's actively reading the same content as you in real-time!

**Result**: Users will disappear from the "reading" indicator within **45 seconds** of actually leaving, with no ghost users showing as "active" when they've logged out or closed their browser.
  `
};

const messagingSystemDoc: DocSection = {
  id: 'messaging-system',
  title: 'Advanced Messaging System',
  content: `
## Comprehensive Messaging Features

Our messaging system includes advanced features like @mentions, profile card sharing, real-time notifications, and WhatsApp-style avatars. Here's a complete breakdown for new interns:

### 1. @Mention Functionality with Profile Card Sharing

Users can type \`@username\` to search for and send profile cards in messages.

#### Implementation Details:

\`\`\`tsx
// In ChatView.tsx - Real-time @mention detection
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setMessage(value);

  // Detect @mention patterns
  const mentionMatch = value.match(/@([a-zA-Z0-9_.]*)$/);
  
  if (mentionMatch) {
    const searchTerm = mentionMatch[1];
    if (searchTerm.length > 0) {
      // Debounced search to avoid excessive API calls
      debouncedSearch(searchTerm);
    } else {
      setMentionUsers([]);
      setShowMentions(false);
    }
  } else {
    setMentionUsers([]);
    setShowMentions(false);
  }
};

// Debounced search function (300ms delay)
const debouncedSearch = useMemo(
  () => debounce(async (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    try {
      const users = await searchUsers(searchTerm);
      setMentionUsers(users.slice(0, 5)); // Limit to 5 results
      setShowMentions(true);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  }, 300),
  []
);
\`\`\`

#### Profile Card Message Type:

\`\`\`tsx
// Message interface supports profile attachments
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  content: string;
  type: 'text' | 'image' | 'profile'; // Profile type for profile cards
  timestamp: Timestamp;
  read: boolean;
  profileAttachment?: {
    uid: string;
    username: string;
    firstName: string;
    lastName: string;
    bio?: string;
  };
}

// Sending profile messages
export async function sendProfileMessage(
  conversationId: string,
  receiverId: string,
  profileData: ProfileData
): Promise<string> {
  const currentUser = auth.currentUser;
  if (!currentUser) throw new Error('User must be authenticated');

  const messagesRef = collection(db, 'messages');
  const newMessage = {
    conversationId,
    senderId: currentUser.uid,
    receiverId,
    content: \`Shared \${profileData.firstName} \${profileData.lastName}'s profile\`,
    type: 'profile',
    timestamp: serverTimestamp(),
    read: false,
    profileAttachment: profileData
  };

  return await addDoc(messagesRef, newMessage);
}
\`\`\`

### 2. WhatsApp-Style Avatar System

Messages display user avatars with smart grouping logic - only showing avatars for the other person's messages and only on the last message in a consecutive group.

#### Avatar Logic Implementation:

\`\`\`tsx
// Smart avatar grouping in ChatView.tsx
const shouldShowAvatar = (message: Message, index: number, messages: Message[]) => {
  // Only show avatars for other person's messages (not your own)
  if (message.senderId === currentUser?.uid) return false;
  
  // Show avatar if this is the last message in a group from the same sender
  const nextMessage = messages[index + 1];
  
  // Show if: no next message OR next message is from different sender
  return !nextMessage || nextMessage.senderId !== message.senderId;
};

// Avatar rendering with gradient backgrounds
const renderAvatar = (message: Message) => {
  if (message.senderId === currentUser?.uid) {
    // Own messages: green-blue gradient
    return (
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #10b981, #3b82f6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: '600'
      }}>
        {getInitials(currentUser.displayName)}
      </div>
    );
  } else {
    // Other person's messages: blue-purple gradient
    return (
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: '600'
      }}>
        {getInitials(otherUser?.firstName, otherUser?.lastName)}
      </div>
    );
  }
};
\`\`\`

### 3. Real-Time Message Notifications

Message notification bells appear in headers across the app with real-time unread count updates.

#### Implementation in Headers:

\`\`\`tsx
// MessageNotificationBell component with real-time updates
import { subscribeToConversations } from '@/services/messagesService';

const MessageNotificationBell: React.FC = () => {
  const [user] = useAuthState(auth);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    // Real-time subscription to conversations
    const unsubscribe = subscribeToConversations(user.uid, (conversations) => {
      const totalUnread = conversations.reduce((total, conv) => total + conv.unreadCount, 0);
      setUnreadCount(totalUnread);
    });
    
    // Fallback periodic update every 30 seconds
    const interval = setInterval(async () => {
      try {
        const count = await getTotalUnreadCount(user.uid);
        setUnreadCount(count);
      } catch (error) {
        console.error('Error getting message unread count:', error);
      }
    }, 30000);
    
    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [user]);

  return (
    <Link href="/messages">
      <button className={styles.button}>
        <MessageIcon />
        {unreadCount > 0 && (
          <span className={styles.badge}>{unreadCount}</span>
        )}
      </button>
    </Link>
  );
};
\`\`\`

#### Badge Positioning CSS:

\`\`\`css
/* Proper notification badge positioning */
.badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #e53935;
  color: white;
  font-size: 10px;
  font-weight: 600;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transform: translate(50%, -50%); /* Positions at icon edge */
}
\`\`\`

### 4. Real-Time Message Updates

The system uses Firestore's \`onSnapshot\` for real-time message updates:

\`\`\`tsx
// Real-time message subscription
export function subscribeToMessages(
  conversationId: string,
  callback: (messages: Message[]) => void,
  messageLimit: number = 50
): () => void {
  const messagesRef = collection(db, 'messages');
  const q = query(
    messagesRef,
    where('conversationId', '==', conversationId),
    orderBy('timestamp', 'desc'),
    limit(messageLimit)
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() } as Message))
      .reverse(); // Reverse to show oldest first
    
    callback(messages);
  });
}

// Real-time conversation updates
export function subscribeToConversations(
  userId: string,
  callback: (conversations: ConversationWithUser[]) => void
): () => void {
  const conversationsRef = collection(db, 'conversations');
  const q = query(
    conversationsRef,
    where('participants', 'array-contains', userId),
    orderBy('updatedAt', 'desc')
  );

  return onSnapshot(q, async (snapshot) => {
    const conversationsWithUsers = await Promise.all(
      snapshot.docs.map(async (doc) => {
        const conversation = { id: doc.id, ...doc.data() } as Conversation;
        const otherUserId = conversation.participants.find(id => id !== userId);
        
        if (!otherUserId) return null;
        
        const otherUser = await getCachedUserProfile(otherUserId);
        const unreadCount = await getCachedUnreadCount(conversation.id, userId);
        
        return {
          conversation,
          otherUser,
          unreadCount
        };
      })
    );
    
    callback(conversationsWithUsers.filter(Boolean) as ConversationWithUser[]);
  });
}
\`\`\`

### 5. Performance Optimizations

#### Caching Strategy:

\`\`\`tsx
// User profile cache to reduce Firebase queries
const userProfileCache = new Map<string, { profile: any; timestamp: number }>();
const unreadCountCache = new Map<string, { count: number; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const UNREAD_CACHE_DURATION = 30 * 1000; // 30 seconds for unread counts

async function getCachedUserProfile(userId: string) {
  const cached = userProfileCache.get(userId);
  const now = Date.now();

  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return cached.profile;
  }

  const profile = await getUserProfile(userId);
  if (profile) {
    userProfileCache.set(userId, { profile, timestamp: now });
  }

  return profile;
}
\`\`\`

### 6. Mobile Navigation Integration

Messages tab integrated into mobile bottom navigation:

\`\`\`tsx
// MobileBottomNav.tsx - Updated navigation
const navigationItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Explore', href: '/explore', icon: CompassIcon },
  { name: 'Compose', href: '/create-article', icon: PenIcon },
  { name: 'Messages', href: '/messages', icon: MessageIcon }, // New Messages tab
  { name: 'Profile', href: '/my-profile', icon: UserIcon },
];
\`\`\`

### 7. File Structure for Messaging

\`\`\`
/src
  /components
    /messages
      ChatView.tsx              # Main chat interface
      ConversationsList.tsx     # List of conversations
      ProfileCard.tsx           # Profile card component
      UserMentionDropdown.tsx   # @mention dropdown
    MessageNotificationBell.tsx # Notification bell component
  /services
    messagesService.ts          # Core messaging logic
  /app
    /messages
      page.tsx                  # Messages page layout
\`\`\`

### Key Features Summary:

• **@Mention Functionality**: Type @username to share profile cards
• **WhatsApp-Style Avatars**: Smart avatar grouping (other person only, last in group)
• **Real-Time Notifications**: Instant unread count updates across the app
• **Profile Card Sharing**: Rich profile cards with user info and "View Profile" button
• **Performance Optimization**: Intelligent caching and debounced searches
• **Mobile Integration**: Dedicated Messages tab in mobile navigation
• **Real-Time Updates**: Instant message delivery and read status updates  

This messaging system provides a modern, feature-rich communication experience similar to popular social media platforms!
  `
};

const memoryOptimizationDoc: DocSection = {
  id: 'memory-optimization',
  title: 'Memory Optimization Guide',
  content: `
## Memory Optimization Strategies

During development, we successfully reduced memory usage from 2GB+ to 500-600MB (70% reduction) using proven optimization techniques. Here's what interns should know:

### Problem Identification

Before optimization, our dev server was consuming excessive memory due to:
- 25+ Firebase onSnapshot subscriptions running simultaneously
- Presence service with 15-second heartbeat intervals  
- Multiple notification polling at 30-60 second intervals
- DOM event listeners not properly cleaned up
- Heavy development dependencies (Storybook 54MB, Firebase SDK 33MB)
- Performance-heavy components with memory leaks

### 🔧 **Applied Solutions**

#### 1. **Firebase Service Optimization**

\`\`\`typescript
// Before: Aggressive polling
const HEARTBEAT_INTERVAL = 15000; // 15 seconds
const CLEANUP_INTERVAL = 30000;   // 30 seconds

// After: Optimized intervals
const HEARTBEAT_INTERVAL = 30000; // 30 seconds (2x reduction)  
const CLEANUP_INTERVAL = 60000;   // 60 seconds (2x reduction)

// Added cleanup flag to prevent memory leaks
export class PresenceService {
  private isDestroyed = false;
  
  destroy() {
    this.isDestroyed = true;
    // Cleanup all subscriptions and timers
  }
  
  private updatePresence() {
    if (this.isDestroyed) return; // Prevent updates after cleanup
    // ... presence logic
  }
}
\`\`\`

#### 2. **Component Memory Leak Prevention**

\`\`\`typescript
// GradientPanel.tsx - Throttled DOM updates
const updateThemeRealTime = useMemo(() => {
  let lastUpdate = 0;
  return (config: ThemeConfig) => {
    const now = Date.now();
    // Throttle updates to max once every 100ms
    if (now - lastUpdate < 100) return;
    lastUpdate = now;
    
    // Batch DOM updates using requestAnimationFrame
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll('[data-mood-element]');
      elements.forEach(element => {
        if (element) {
          element.style.backgroundImage = gradientCSS;
          element.style.transition = 'background-image 0.2s ease';
        }
      });

      // Debounced localStorage saves (500ms)
      clearTimeout(saveTimeout.current);
      saveTimeout.current = setTimeout(() => {
        localStorage.setItem('config', JSON.stringify(config));
      }, 500);
    });
  };
}, []);

// Cleanup on unmount
useEffect(() => {
  return () => {
    if (saveTimeout.current) {
      clearTimeout(saveTimeout.current);
    }
  };
}, []);
\`\`\`

#### 3. **Next.js Memory Configuration**

\`\`\`javascript
// next.config.js - Conservative memory limits
const nextConfig = {
  experimental: {
    turbo: {
      memoryLimit: 1024 // 1GB limit for turbopack
    }
  }
};

// package.json - Memory-optimized scripts  
{
  "scripts": {
    "dev": "next dev --turbopack",
    "dev:memory": "NODE_OPTIONS='--max-old-space-size=1024' next dev",
    "dev:minimal": "NODE_OPTIONS='--max-old-space-size=1024' next dev --turbopack"
  }
}
\`\`\`

### Results Achieved

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **RAM Usage** | 2GB+ | 500-600MB | **70% reduction** |
| **next-server** | ~800MB | 226MB | **72% reduction** |
| **node dev** | ~300MB | 81MB | **73% reduction** |
| **Transform workers** | ~400MB | ~200MB | **50% reduction** |

### 🛡️ **Key Principles Applied**

1. **Throttling Over Elimination**
   - Reduce frequency instead of removing functionality
   - Use \`requestAnimationFrame\` for DOM updates
   - Implement debouncing for expensive operations

2. **Proper Cleanup Patterns**
   \`\`\`typescript
   useEffect(() => {
     const subscription = service.subscribe(callback);
     const timer = setInterval(update, 1000);
     
     return () => {
       subscription.unsubscribe();
       clearInterval(timer);
     };
   }, []);
   \`\`\`

3. **Memory-Conscious Event Handling**
   \`\`\`typescript
   // Bad: Creates new function on every render
   <button onClick={() => handleClick(id)}>Click</button>
   
   // Good: Stable reference with useCallback
   const handleClick = useCallback((id) => {
     // Handle click
   }, []);
   \`\`\`

4. **Development vs Production Separation**
   - All optimizations target development mode only
   - Production builds remain unchanged
   - Use environment-specific configurations

### Monitoring Commands

\`\`\`bash
# Monitor memory usage during development
ps aux | grep node | grep -v grep

# Check specific process memory
top -pid \$(pgrep -f "next-server")

# Monitor in real-time
watch -n 2 "ps aux | grep next | grep -v grep"
\`\`\`

### ⚠️ **Common Pitfalls to Avoid**

1. **Over-optimization**: Don't sacrifice functionality for minor memory gains
2. **Aggressive Cleanup**: Some services need persistence across page changes  
3. **Production Impact**: Never apply development optimizations to production
4. **Premature Optimization**: Profile first, optimize based on data

### Best Practices for New Features

- **Profile Before Building**: Use browser dev tools to identify bottlenecks
- **Implement Cleanup**: Always clean up subscriptions, timers, and event listeners
- **Use React Profiler**: Identify expensive re-renders and optimize accordingly
- **Monitor Memory**: Regularly check memory usage during development
- **Test Optimizations**: Verify that optimizations don't break functionality

### Recommended Development Workflow

1. **Start Development**: \`npm run dev:memory\` (uses 1GB memory limit)
2. **Monitor Performance**: Use browser dev tools and terminal commands
3. **Identify Issues**: Look for memory leaks, excessive re-renders, or polling
4. **Apply Optimizations**: Use throttling, debouncing, and proper cleanup
5. **Test & Verify**: Ensure functionality remains intact
6. **Document Changes**: Update this guide with new optimization techniques

This memory optimization work demonstrates that with careful analysis and targeted improvements, significant performance gains are achievable without sacrificing functionality! 🎯
  `
};

const securityAuditDoc: DocSection = {
  id: 'security-audit',
  title: 'Security Audit & Hardening',
  content: `
## Security Audit Results ✓

### **API Key Security**
- ✓ All API keys use environment variables
- ✓ GitHub Secrets configured for CI/CD
- ✓ No hardcoded secrets in codebase
- ✓ Production console logs sanitized

### **Security Headers Implemented**
\`\`\`javascript
// next.config.js security headers
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: Comprehensive CSP rules
Permissions-Policy: Disabled unnecessary permissions
\`\`\`

### **Content Security Policy**
- **Scripts**: Self, Google Analytics only
- **Styles**: Self, Google Fonts
- **Images**: Self, HTTPS, data URLs, blob
- **Connect**: Firebase, Guardian API, NewsAPI
- **Frame**: Completely disabled

### **Production Hardening**
- Console logs removed in production (except errors/warnings)
- Powered-by header disabled
- SWC minification enabled
- Bundle splitting optimized

### **Environment Variables**
\`\`\`bash
# Required in GitHub Secrets
GUARDIAN_API_KEY=your_guardian_key
NEWS_API_KEY=your_news_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
# ... other Firebase config
\`\`\`
  `
};

const performanceOptimizationDoc: DocSection = {
  id: 'performance-optimization',
  title: 'Performance Optimization',
  content: `
## Performance Enhancements

### **Bundle Optimization**
- **Code Splitting**: Vendor, Firebase, ProseMirror chunks
- **Tree Shaking**: Unused code elimination
- **Dynamic Imports**: Lazy loading for heavy components
- **SWC Minification**: Faster than Terser

### **Caching Strategy**
\`\`\`typescript
// API Response Caching (5 minutes)
import { apiCache } from '@/utils/performance';

// Cache Guardian articles
const cacheKey = \`guardian-\${section}-\${page}\`;
const cached = apiCache.get(cacheKey);
if (cached) return cached;

const data = await guardianService.searchArticles(...);
apiCache.set(cacheKey, data);
\`\`\`

### **Image Optimization**
\`\`\`typescript
// Automatic WebP conversion for Unsplash
getOptimizedImageUrl(url, 800, 600, 80);
// Outputs: url?w=800&h=600&q=80&fm=webp
\`\`\`

### **Lazy Loading**
- **Components**: Editor, ArticleComposer, ReflectionRoom
- **Services**: Guardian, NewsAPI
- **Images**: Intersection Observer with 50px margin
- **Routes**: Next.js automatic code splitting

### **Memory Management**
- **Cache Cleanup**: Auto-clear when >100 entries
- **Garbage Collection**: Development mode optimization
- **Resource Preloading**: Critical CSS/JS

### **Performance Monitoring**
\`\`\`typescript
import { measurePerformance } from '@/utils/performance';

measurePerformance('API Call', () => {
  return fetchArticles();
});
// Logs: Performance [API Call]: 245ms
\`\`\`

### **Debouncing & Throttling**
\`\`\`typescript
// Search input debouncing (300ms)
const debouncedSearch = debounce(handleSearch, 300);

// Scroll event throttling (100ms)
const throttledScroll = throttle(handleScroll, 100);
\`\`\`
  `
};

const externalArticleIntegrationDoc: DocSection = {
  id: 'external-articles',
  title: 'External Article Integration',
  content: `
## Multi-Source Content System 🌐

### **Integrated News Sources**
1. **The Guardian API** - High-quality journalism
2. **NewsAPI.org** - Global news aggregation  
3. **Journalite** - Internal articles

### **Content Distribution Strategy**
\`\`\`typescript
// Homepage: 2 Journalite + 1 Guardian + 1 NewsAPI
// Explore: Balanced mix with external priority
// Categories: Interest-based article matching
\`\`\`

### **Guardian API Integration**
\`\`\`typescript
// Service: /src/services/guardianService.ts
await guardianService.searchArticles(
  'climate change',  // query
  'environment',     // section
  1,                 // page
  10                 // limit
);

// Features:
- Article search by keywords
- Section filtering (technology, science, etc.)
- Full HTML content with images
- Proper image positioning preservation
- Author and metadata extraction
\`\`\`

### **NewsAPI Integration**
\`\`\`typescript
// Service: /src/services/newsService.ts
await newsService.getTopHeadlines('technology');
await newsService.searchArticles('artificial intelligence');

// Features:
- Top headlines by category
- Global news search
- Source attribution
- Image optimization
\`\`\`

### **Content Adaptation**
All external articles are converted to Journalite format:
\`\`\`typescript
interface BaseArticle {
  id: string;
  title: string;
  slug: string;
  authorName: string;
  excerpt: string; // HTML cleaned
  coverImageUrl?: string;
  tags: string[];
  source: 'journalite' | 'guardian' | 'newsapi';
  isExternal: boolean;
  externalUrl?: string;
}
\`\`\`

### **HTML Content Cleaning**
\`\`\`typescript
// Removes HTML tags from previews
const cleanHtmlText = (html: string) => {
  return html
    .replace(/<[^>]*>/g, ' ')      // Remove tags
    .replace(/\s+/g, ' ')          // Clean whitespace
    .replace(/&amp;/g, '&')        // Decode entities
    .trim()
    .substring(0, 200) + '...';    // Limit length
};
\`\`\`

### **Smart Content Categorization**
\`\`\`typescript
const INTEREST_MAPPING = {
  'Technology': {
    newsCategory: 'technology',
    guardianSections: ['technology', 'science'],
    keywords: ['tech', 'AI', 'software', 'digital']
  },
  // ... 20+ interest mappings
};
\`\`\`

### **Source Identification**
- **Visual Badges**: Color-coded source indicators
- **Guardian**: Dark blue (#052962)  
- **NewsAPI**: Green (#10B981)
- **Journalite**: Purple (#7C3AED)

### **Error Handling**
- Graceful API failures
- Fallback to Journalite content
- Retry mechanisms for network issues
- Cache-first strategy
  `
};

const homepageRedesignDoc: DocSection = {
  id: 'homepage-redesign',
  title: 'Homepage Redesign',
  content: `
## Modern Homepage Experience

### **Dual-Purpose Design**
**Unauthenticated Users**: Landing page with hero section
**Authenticated Users**: Personalized dashboard

### **Hero Section (Unauthenticated)**
\`\`\`tsx
<section className="hero-section">
  <h1>Welcome to Journalite</h1>
  <p>Where stories come alive through reflection</p>
  <div className="cta-buttons">
    <Link href="/register">Get Started</Link>
    <Link href="/login">Sign In</Link>
  </div>
</section>
\`\`\`

### **Welcome Dashboard (Authenticated)**
\`\`\`tsx
<section className="welcome-section">
  <h2>Welcome back, {user.displayName}</h2>
  <div className="quick-actions">
    <Link href="/explore">🔍 Explore</Link>
    <Link href="/compose">✍️ Write</Link>
    <Link href="/my-thoughts">💭 My Thoughts</Link>
  </div>
</section>
\`\`\`

### **Featured Articles**
- **Mixed Content**: 2 Journalite + 1 Guardian + 1 NewsAPI
- **Smart Image Selection**: Content-aware Unsplash images
- **Glassmorphism Design**: Backdrop blur effects
- **Hover Animations**: Smooth transitions

### **Platform Features (Unauthenticated)**
\`\`\`tsx
const features = [
  {
    icon: <GlobeIcon />, // Professional SVG
    title: "Diverse Sources",
    description: "Curated content from trusted sources"
  },
  {
    icon: <LightBulbIcon />,
    title: "Personalized Feed", 
    description: "AI-powered content recommendations"
  },
  {
    icon: <DocumentCheckIcon />,
    title: "Reflection Tools",
    description: "Deep thinking and mindful reading"
  }
];
\`\`\`

### **Design System**
\`\`\`css
/* Glassmorphism Effects */
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Gradient Backgrounds */
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Hover Animations */
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
}
\`\`\`

### **Content-Aware Image Selection**
\`\`\`typescript
const imageCategories = {
  'Tech & Innovation': [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  ],
  'Culture & Society': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0'
  ]
  // ... more categories
};

// Smart matching based on article tags/content
const selectImageForArticle = (article) => {
  const category = matchContentToCategory(article.tags, article.title);
  return getRandomImage(imageCategories[category]);
};
\`\`\`
  `
};

const explorePageEnhancementsDoc: DocSection = {
  id: 'explore-enhancements',
  title: 'Explore Page Enhancements',
  content: `
## Advanced Content Discovery

### **Multi-Source Content Strategy**
\`\`\`typescript
// Content Distribution
const contentSources = {
  journalite: 8,    // Reduced from 12
  guardian: 18,     // 6 per interest × 3 interests  
  newsapi: 18,      // 6 per interest × 3 interests
  total: 44         // Before deduplication
};
\`\`\`

### **Intelligent Categorization**
1. **Discover Stories** (Priority 100)
   - 8 external articles + 4 Journalite
   - Balanced source mixing
   
2. **For You/Featured** (Priority 95)
   - Personalized based on interests
   - Engagement scoring algorithm
   
3. **Latest News** (Priority 90)
   - External articles only
   - Guardian + NewsAPI content
   
4. **Interest Categories** (Priority 85)
   - User's top 2 interests
   - Mixed source content
   
5. **Trending on Journalite** (Priority 80)
   - High engagement articles
   - Journalite exclusive
   
6. **Latest Updates** (Priority 75)
   - Recent from all sources

### **Content Scoring Algorithm**
\`\`\`typescript
const scoreArticle = (article, userInterests) => {
  let score = 0;
  
  // Interest keyword matching (+10 per match)
  userInterests.forEach(interest => {
    const keywords = INTEREST_MAPPING[interest].keywords;
    keywords.forEach(keyword => {
      if (article.content.includes(keyword)) score += 10;
    });
  });
  
  // Tag relevance (+15 per match)
  article.tags.forEach(tag => {
    if (userInterests.includes(tag)) score += 15;
  });
  
  // Recency bonus
  const daysSince = getDaysSincePublished(article.createdAt);
  if (daysSince < 1) score += 5;
  else if (daysSince < 7) score += 3;
  
  // Engagement metrics
  score += (article.likes?.length || 0);
  score += Math.log(article.viewCount || 1);
  
  return score;
};
\`\`\`

### **Deduplication System**
\`\`\`typescript
const deduplicateArticles = (articles) => {
  const seen = new Set();
  
  return articles.filter(article => {
    // Create unique key from title + URL
    const titleKey = article.title.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const key = \`\${titleKey}|\${article.url || ''}\`;
    
    // Check for similar titles (first 50 chars)
    const isDuplicate = Array.from(seen).some(existingKey => {
      const existingTitle = existingKey.split('|')[0].substring(0, 50);
      const currentTitle = titleKey.substring(0, 50);
      return existingTitle === currentTitle;
    });
    
    if (!seen.has(key) && !isDuplicate) {
      seen.add(key);
      return true;
    }
    return false;
  });
};
\`\`\`

### **Performance Monitoring**
\`\`\`typescript
// Detailed logging for debugging
console.log('📊 Final categories:', categoriesData.map(cat => ({
  name: cat.name,
  count: cat.articles.length,
  sources: {
    journalite: cat.articles.filter(a => a.source === 'journalite').length,
    guardian: cat.articles.filter(a => a.source === 'guardian').length,
    newsapi: cat.articles.filter(a => a.source === 'newsapi').length
  }
})));
\`\`\`

### **Fallback Strategies**
1. **API Failure**: Fall back to Journalite only
2. **No External Content**: Try general categories
3. **Empty Categories**: Hide from UI
4. **Network Issues**: Show cached content

### **Interest Mapping System**
\`\`\`typescript
// 20+ interest categories mapped to:
const INTEREST_MAPPING = {
  'Technology': {
    newsCategory: 'technology',           // NewsAPI category
    guardianSections: ['technology'],     // Guardian sections
    keywords: ['tech', 'AI', 'software'] // Search keywords
  }
  // ... comprehensive mapping
};
\`\`\`
  `
};

const guardianIntegrationDoc: DocSection = {
  id: 'guardian-integration',
  title: 'Guardian API Deep Dive',
  content: `
## The Guardian Integration

### **API Configuration**
\`\`\`typescript
class GuardianService {
  private apiKey: string;
  private baseUrl = 'https://content.guardianapis.com';
  
  // Rate limiting: 1 req/sec, 500/day
  // Free tier: Non-commercial use only
}
\`\`\`

### **Content Preservation**
**Problem**: Original implementation added images at the bottom
**Solution**: Preserve Guardian's original HTML structure

\`\`\`typescript
convertToArticleFormat(article: GuardianArticle) {
  let bodyContent = article.fields?.body || '';
  
  if (bodyContent) {
    // Enhance existing images without moving them
    bodyContent = bodyContent.replace(
      /<img([^>]*?)>/g,
      (match, attrs) => {
        return \`<img \${attrs} style="max-width: 100%; height: auto; margin: 2em auto; display: block; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />\`;
      }
    );
    
    // Enhance figure elements
    bodyContent = bodyContent.replace(
      /<figure([^>]*?)>/g,
      (match, attrs) => {
        return \`<figure \${attrs} style="margin: 2em auto; text-align: center;">\`;
      }
    );
  }
  
  // Only add fallback images if body has none
  const hasImagesInBody = bodyContent.includes('<img');
  if (!hasImagesInBody && article.elements) {
    // Add main image at top, not bottom
    const mainImage = article.elements.find(el => el.type === 'image');
    if (mainImage) {
      bodyContent = \`<figure>\${imageHtml}</figure>\` + bodyContent;
    }
  }
}
\`\`\`

### **Article Fields Available**
\`\`\`typescript
interface GuardianArticle {
  id: string;                    // Unique identifier
  webTitle: string;              // Article title
  webUrl: string;                // Original URL
  webPublicationDate: string;    // ISO date
  sectionName: string;           // e.g., "Technology"
  pillarName: string;            // e.g., "News"
  
  fields?: {
    headline?: string;           // Often better than webTitle
    standfirst?: string;         // Article summary
    body?: string;               // Full HTML content
    bodyText?: string;           // Plain text version
    trailText?: string;          // Preview text
    main?: string;               // Main image URL
    thumbnail?: string;          // Thumbnail URL
    byline?: string;             // Author info
  };
  
  elements?: Array<{             // Media elements
    type: 'image' | 'video';
    assets: Array<{
      type: string;
      file: string;              // Media URL
      typeData: {
        secureFile?: string;     // HTTPS URL
        caption?: string;        // Image caption
        alt?: string;            // Alt text
        width?: number;
        height?: number;
      };
    }>;
  }>;
  
  tags: Array<{                  // Article tags
    id: string;
    type: 'contributor' | 'keyword';
    webTitle: string;
  }>;
}
\`\`\`

### **Search Capabilities**
\`\`\`typescript
// Keyword search
await guardianService.searchArticles('climate change');

// Section filtering
await guardianService.searchArticles('', 'environment');

// Combined search
await guardianService.searchArticles('renewable energy', 'environment');

// Boolean search
await guardianService.searchArticles('climate AND (warming OR change)');

// Date range
await guardianService.searchArticles('brexit', 'politics', 1, 10, {
  fromDate: '2023-01-01',
  toDate: '2023-12-31'
});
\`\`\`

### **Available Sections**
- \`world\` - World news
- \`politics\` - Politics  
- \`business\` - Business
- \`technology\` - Technology
- \`science\` - Science
- \`environment\` - Environment & climate
- \`sport\` - Sports
- \`culture\` - Arts, books, music, film
- \`lifeandstyle\` - Lifestyle
- \`opinion\` - Opinion & commentary

### **Image Handling Strategy**
1. **Preserve Original Layout**: Keep images where Guardian placed them
2. **Enhance Styling**: Add responsive CSS, shadows, borders
3. **Fallback Images**: Only add if body content has no images
4. **Caption Support**: Maintain figcaption elements
5. **Performance**: Lazy loading with intersection observer
  `
};

const recommendationSystemDoc: DocSection = {
  id: 'recommendation-system',
  title: 'Guardian Recommendation System - Cost Efficiency',
  content: `
## Intelligent Recommendation Engine

**Cost-Efficient Machine Learning for Personalized News**

### System Overview

The recommendation system learns user preferences through interactions (likes, comments, views) to deliver personalized Guardian articles without expensive ML infrastructure.

### Vercel Function Efficiency Analysis

**Per User Visit (Explore Page)**:
- **0-1 function calls** for personalized Guardian articles
- **1 function call** only when user likes/comments (\`/api/track-interaction\`)
- **Total: ~1 function call per visit** (only if user interacts)

**Why It's Extremely Efficient**:

\`\`\`
Traditional ML APIs: 50+ function calls per recommendation
Real-time ML inference: 100+ function calls per visit
Our system: 0-1 function calls per interaction
\`\`\`

### Cost-Saving Architecture

**Leverages Existing Infrastructure**:
- **No new Guardian API calls**: Uses existing 8-minute cached endpoints
- **Client-side scoring**: Recommendation algorithm runs in browser
- **Reuses cache infrastructure**: Built on current Guardian API setup

**Smart Data Strategy**:
- **User preferences**: Firestore (direct database, no functions)
- **Guardian articles**: Already cached for 8 minutes
- **Recommendation scores**: Calculated client-side

### Usage Patterns & Costs

**Heavy User (100 visits/day)**:
- Function calls: ~20-30/day (only when they like articles)
- Cost impact: Minimal - uses existing cached endpoints

**Light User (10 visits/day)**:
- Function calls: ~2-5/day
- Cost impact: Nearly zero

**Expected Function Call Increase**: <5% of current usage

### Technical Implementation

**Smart Recommendation Algorithm**:
\`\`\`typescript
// Multi-factor scoring system
const scoring = {
  sections: 30,      // Guardian section preference
  tags: 25,          // Article tag matching
  keywords: 20,      // Title keyword analysis
  recency: 15,       // Newer articles boosted
  novelty: 10        // Explore new topics bonus
};

// Weighted interactions
const interactions = {
  comments: 5,       // Highest engagement
  likes: 3,          // Medium engagement  
  views: 1           // Basic engagement
};
\`\`\`

**Learning System**:
- **Auto-update**: User preferences update after each interaction
- **Fallback**: Diverse content for new users
- **Privacy-first**: All data securely stored in Firestore

### Performance Benefits

**Features Delivered**:
- "🎯 Recommended News" section on explore page
- Automatic user preference learning
- Real-time personalization
- Analytics dashboard for monitoring

**User Experience**:
- Articles get more relevant over time
- No additional loading delays
- Seamless integration with existing UI

### Cost Comparison

\`\`\`
❌ Traditional ML Services: $50-200/month for similar features
❌ Real-time inference APIs: $100-500/month
❌ Dedicated recommendation engines: $200-1000/month
✅ Our recommendation system: <$5/month additional cost
\`\`\`

### Monitoring & Analytics

Use the "Recommendation Analytics" tab to:
- Track popular Guardian sections across all users
- Search individual user interactions by username
- Monitor system performance and engagement
- Analyze learning algorithm effectiveness

### Future Scalability

The system is designed to handle:
- **10,000+ users**: No architecture changes needed
- **100,000+ interactions/day**: Efficient Firestore scaling
- **Multiple content sources**: Extensible to other news APIs
- **Advanced ML**: Ready for future algorithm upgrades

### Implementation Files

\`\`\`typescript
// Core recommendation logic
/src/services/recommendationService.ts

// Guardian integration
/src/services/guardianService.ts

// Interaction tracking API
/src/app/api/track-interaction/route.ts

// User interface integration
/src/app/explore/ExploreClient.tsx
/src/components/LikeButton.tsx
\`\`\`

This recommendation engine provides enterprise-level personalization at a fraction of traditional ML service costs, making it ideal for cost-conscious partners and sustainable business scaling.

### Partner Benefits

**For Investors**:
- Minimal operational costs
- Scalable architecture
- Advanced user engagement without ML overhead

**For Technical Partners**:
- Clean, maintainable codebase
- Extensible to new content sources
- Built on proven technologies (Firebase, Next.js)

**For Business Partners**:
- Improved user retention through personalization
- Data-driven insights into user preferences
- Competitive advantage with minimal investment
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
  realTimePresenceDoc,
  messagingSystemDoc,
  memoryOptimizationDoc,
  securityAuditDoc,
  performanceOptimizationDoc,
  externalArticleIntegrationDoc,
  homepageRedesignDoc,
  explorePageEnhancementsDoc,
  guardianIntegrationDoc,
  recommendationSystemDoc
];

// Cache Monitor Component
function RecommendationAnalytics() {
  const [userInteractions, setUserInteractions] = useState<any[]>([]);
  const [popularSections, setPopularSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchUsername, setSearchUsername] = useState('');
  const [foundUser, setFoundUser] = useState<any>(null);

  const fetchRecommendationData = async () => {
    setLoading(true);
    try {
      // Fetch popular Guardian sections
      const { recommendationService } = await import('@/services/recommendationService');
      const sections = await recommendationService.getPopularGuardianSections();
      setPopularSections(sections);

      // If a specific user is found, get their interaction history
      if (foundUser?.id) {
        const interactions = await recommendationService.getUserInteractionHistory(foundUser.id, 20);
        setUserInteractions(interactions);
      }
    } catch (error) {
      console.error('Error fetching recommendation data:', error);
    } finally {
      setLoading(false);
    }
  };

  const searchUserByUsername = async () => {
    if (!searchUsername.trim()) return;
    
    setLoading(true);
    try {
      // Search for user by username in Firestore
      const { collection, query, where, getDocs } = await import('firebase/firestore');
      const { db } = await import('@/lib/firebase');
      
      const usersQuery = query(
        collection(db, 'users'),
        where('username', '==', searchUsername.toLowerCase())
      );
      
      const querySnapshot = await getDocs(usersQuery);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = { id: userDoc.id, ...userDoc.data() };
        setFoundUser(userData);
        
        // Fetch interactions for this user
        const { recommendationService } = await import('@/services/recommendationService');
        const interactions = await recommendationService.getUserInteractionHistory(userData.id, 20);
        setUserInteractions(interactions);
      } else {
        setFoundUser(null);
        setUserInteractions([]);
        alert('User not found with that username');
      }
    } catch (error) {
      console.error('Error searching for user:', error);
      setFoundUser(null);
      setUserInteractions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.docsContainer}>
      <div className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
        <ComputerIcon size={24} color="#0066cc" />
        Recommendation System Analytics
      </div>
      <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
        Monitor user interactions and recommendation algorithm performance for Guardian articles.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={fetchRecommendationData}
          disabled={loading}
          className={styles.submitButton}
          style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
        >
          {loading ? 'Loading...' : 'Refresh Analytics'}
        </button>
      </div>

      {/* Popular Guardian Sections */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
          Popular Guardian Sections
        </h3>
        {popularSections.length > 0 ? (
          <>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              {popularSections.slice(0, 8).map((section, index) => (
                <div key={section.section} style={{
                  backgroundColor: '#f8fafc',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0066cc' }}>
                    {section.popularity}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#666', textTransform: 'capitalize' }}>
                    {section.section}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Total tracked sections: {popularSections.length}
            </p>
          </>
        ) : (
          <p style={{ color: '#666', fontStyle: 'italic' }}>No interaction data available yet.</p>
        )}
      </div>

      {/* User Interaction Search */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
          User Interaction History
        </h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Enter username to view their interactions..."
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && searchUserByUsername()}
            style={{
              flex: 1,
              padding: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '0.9rem'
            }}
          />
          <button 
            onClick={searchUserByUsername}
            disabled={loading || !searchUsername.trim()}
            className={styles.submitButton}
            style={{ 
              cursor: (loading || !searchUsername.trim()) ? 'not-allowed' : 'pointer', 
              opacity: (loading || !searchUsername.trim()) ? 0.6 : 1 
            }}
          >
            Search
          </button>
          {(foundUser || userInteractions.length > 0) && (
            <button 
              onClick={() => {
                setSearchUsername('');
                setFoundUser(null);
                setUserInteractions([]);
              }}
              className={styles.submitButton}
              style={{ 
                backgroundColor: '#dc3545',
                cursor: 'pointer'
              }}
            >
              Clear
            </button>
          )}
        </div>

        {foundUser && (
          <div style={{ 
            backgroundColor: '#e6f3ff',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            border: '1px solid #b3d9ff'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#0066cc' }}>Found User:</h4>
            <div style={{ fontSize: '0.9rem', color: '#333' }}>
              <strong>Name:</strong> {foundUser.name || foundUser.displayName || 'N/A'}<br/>
              <strong>Username:</strong> @{foundUser.username}<br/>
              <strong>Email:</strong> {foundUser.email}<br/>
              <strong>User ID:</strong> {foundUser.id}<br/>
              <strong>Role:</strong> {foundUser.role || 'user'}
            </div>
          </div>
        )}

        {userInteractions.length > 0 && (
          <div style={{ 
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: '#e2e8f0',
              padding: '0.75rem 1rem',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              color: '#333'
            }}>
              Recent Interactions ({userInteractions.length})
            </div>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {userInteractions.map((interaction, index) => (
                <div key={index} style={{
                  padding: '1rem',
                  borderBottom: index < userInteractions.length - 1 ? '1px solid #e2e8f0' : 'none',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ 
                      backgroundColor: getInteractionTypeColor(interaction.interactionType),
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      {interaction.interactionType.toUpperCase()}
                    </span>
                    <span style={{ color: '#666', fontSize: '0.8rem' }}>
                      {new Date(interaction.timestamp?.toDate?.() || interaction.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong>{interaction.articleMetadata.title}</strong>
                  </div>
                  {interaction.articleMetadata.section && (
                    <div style={{ color: '#666', fontSize: '0.8rem' }}>
                      Section: {interaction.articleMetadata.section}
                    </div>
                  )}
                  {interaction.interactionContext && (
                    <div style={{ 
                      marginTop: '0.5rem',
                      padding: '0.5rem',
                      backgroundColor: '#f1f5f9',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      color: '#555'
                    }}>
                      Context: {interaction.interactionContext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function getInteractionTypeColor(type: string) {
    switch (type) {
      case 'like': return '#10b981';
      case 'comment': return '#3b82f6';
      case 'view': return '#8b5cf6';
      default: return '#64748b';
    }
  }
}

function CacheMonitor() {
  const [cacheStats, setCacheStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchCacheStats = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/guardian/cache-stats');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCacheStats(data);
    } catch (err) {
      console.error('Error fetching cache stats:', err);
      setError('Failed to fetch cache statistics: ' + (err instanceof Error ? err.message : 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCacheStats();
    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchCacheStats, 30000);
    return () => clearInterval(interval);
  }, []);

      return (
      <div className={styles.docsContainer}>
        <div className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <RocketIcon size={24} color="#0066cc" />
          Guardian API Cache Monitor
        </div>
        <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
          Monitor the performance of the 8-minute in-memory cache for Guardian API responses.
        </p>

              <div style={{ marginBottom: '1rem' }}>
          <button 
            onClick={fetchCacheStats}
            disabled={loading}
            className={styles.submitButton}
            style={{ cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
          >
          {loading ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SettingsIcon size={16} />
              Refreshing...
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SettingsIcon size={16} />
              Refresh Stats
            </span>
          )}
        </button>
      </div>

      {error && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#fee',
          border: '1px solid #fcc',
          borderRadius: '4px',
          color: '#c33',
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}

      {cacheStats && (
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '1rem'
        }}>
          <h3 style={{ color: '#333', marginBottom: '1rem' }}>Cache Statistics</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#e8f4fd', borderRadius: '6px', border: '1px solid #b3d9ff' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0066cc' }}>
                {cacheStats.activeItems}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Active Items</div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '6px', border: '1px solid #ccc' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#666' }}>
                {cacheStats.totalSize}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Total Size</div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '6px', border: '1px solid #ffeb3b' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#856404' }}>
                {cacheStats.expiredItems}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Expired Items</div>
            </div>

            <div style={{ padding: '1rem', backgroundColor: '#d4edda', borderRadius: '6px', border: '1px solid #c3e6cb' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#155724' }}>
                {cacheStats.ttlMinutes} min
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Cache TTL</div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#e8f5e8', borderRadius: '6px' }}>
            <h4 style={{ color: '#2d5a2d', marginBottom: '0.5rem' }}>Cache Benefits</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#2d5a2d', listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <RocketIcon size={16} color="#2d5a2d" />
                <strong>95% reduction</strong> in Guardian API calls
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <StarIcon size={16} color="#2d5a2d" />
                <strong>Sub-100ms</strong> response times for cached articles
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <BulbIcon size={16} color="#2d5a2d" />
                <strong>Significant cost savings</strong> on API usage
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SettingsIcon size={16} color="#2d5a2d" />
                <strong>8-minute refresh</strong> ensures fresh content
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <strong>Cache Type:</strong> {cacheStats.cacheType}<br/>
            <strong>Description:</strong> {cacheStats.description}<br/>
            <strong>Max Capacity:</strong> {cacheStats.maxSize} items<br/>
            <strong>Last Updated:</strong> {new Date().toLocaleTimeString()}
          </div>
        </div>
      )}
    </div>
  );
}

// User Management Component
function InterestsManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [currentVersion, setCurrentVersion] = useState(0);

  useEffect(() => {
    setCurrentVersion(getCurrentInterestsVersion());
  }, []);

  const handlePromptAllUsers = async () => {
    setIsLoading(true);
    setMessage('');
    setError('');
    
    try {
      // In practice, you would increment the version in the service file
      // For demo, we'll just show a message
              setMessage(
          `To prompt all existing users for interests update:
          
          1. Increment the version number in src/services/userService.ts in the getCurrentInterestsVersion() function
          2. Deploy the changes
          3. All existing users will be prompted on their next login
          
          Current version: ${currentVersion}
          Next version should be: ${currentVersion + 1}`
        );
    } catch (err) {
      setError('Failed to set up user prompting');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptSpecificUser = async () => {
    const userId = prompt('Enter User ID to prompt for interests update:');
    if (!userId) return;

    setIsLoading(true);
    setMessage('');
    setError('');
    
    try {
      await markUsersForInterestsUpdate(userId);
      setMessage(`User ${userId} has been marked for interests update and will be prompted on their next login.`);
    } catch (err: any) {
      setError(`Failed to mark user for interests update: ${err.message || err}`);
    } finally {
      setIsLoading(false);
    }
  };

      return (
      <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px', marginBottom: '2rem' }}>
        <div className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>
          <CommentIcon size={20} color="#2d3748" />
          Interests Re-engagement Management
        </div>
      
      <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#e6f3ff', borderRadius: '8px', border: '1px solid #b3d9ff' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#1a365d' }}>
          <strong>Current Interests Version:</strong> {currentVersion}
        </p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem', color: '#4a5568' }}>
          Users with version &lt; {currentVersion} will be prompted to update their interests.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={handlePromptAllUsers}
          disabled={isLoading}
          className={styles.submitButton}
          style={{
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {isLoading ? (
            <>
              <SettingsIcon size={16} />
              Processing...
            </>
          ) : (
            <>
              <ComputerIcon size={16} />
              Prompt All Users
            </>
          )}
        </button>
        
        <button
          onClick={handlePromptSpecificUser}
          disabled={isLoading}
          className={styles.submitButton}
          style={{
            backgroundColor: '#48bb78',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.6 : 1,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {isLoading ? (
            <>
              <SettingsIcon size={16} />
              Processing...
            </>
          ) : (
            <>
              <UserIcon size={16} />
              Prompt Specific User
            </>
          )}
        </button>
      </div>

      {message && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#f0fff4', 
          border: '1px solid #9ae6b4', 
          borderRadius: '8px', 
          marginBottom: '1rem',
          whiteSpace: 'pre-line'
        }}>
          <p style={{ margin: 0, color: '#22543d', fontSize: '0.9rem' }}>{message}</p>
        </div>
      )}

      {error && (
        <div style={{ padding: '1rem', backgroundColor: '#fed7d7', border: '1px solid #fc8181', borderRadius: '8px' }}>
          <p style={{ margin: 0, color: '#822727', fontSize: '0.9rem' }}>{error}</p>
        </div>
      )}
    </div>
  );
}

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

// Simplified markdown to HTML converter with consistent styling
function markdownToHtml(markdown: string): string {
  // Process code blocks with basic syntax highlighting
  const processCodeBlocks = (content: string): string => {
    return content.replace(/```(tsx|js|jsx|ts|html|css|json)?\s*(?:\[([^\]]+)\])?(?:\n)([\s\S]+?)```/g, (match, lang, filename, code) => {
      const displayFilename = filename || getDefaultFilename(lang || '');
      const cleanCode = code.trim();
      const highlightedCode = highlightSyntax(cleanCode, lang || '');
      
      return `
        <div class="${styles.codeBlockContainer}">
          <pre class="${styles.codeBlock}" data-filename="${displayFilename}">
            <div class="${styles.codeContent}">${highlightedCode}</div>
            <button class="${styles.copyButton}" title="Copy to clipboard">Copy</button>
          </pre>
        </div>
      `;
    });
  };

  // Get default filename based on language
  const getDefaultFilename = (lang: string): string => {
    const filenames = {
      'tsx': 'Component.tsx',
      'ts': 'index.ts', 
      'js': 'script.js',
      'jsx': 'Component.jsx',
      'html': 'index.html',
      'css': 'styles.css',
      'json': 'config.json'
    };
    return filenames[lang as keyof typeof filenames] || 'example.code';
  };
  
  // Simplified syntax highlighting function
  const highlightSyntax = (code: string, language: string): string => {
    // Escape HTML first
    const escapedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    // Apply basic syntax highlighting for common languages
    if (['ts', 'tsx', 'js', 'jsx'].includes(language)) {
      return escapedCode
        // Keywords
        .replace(/\b(const|let|var|function|class|interface|type|import|export|return|if|else|for|async|await)\b/g, `<span class="${styles.keyword}">$1</span>`)
        // Strings
        .replace(/(["'`])((?:\\.|(?!\1).)*?)\1/g, `<span class="${styles.string}">$1$2$1</span>`)
        // Comments
        .replace(/(\/\/.*?)$/gm, `<span class="${styles.comment}">$1</span>`)
        // Numbers
        .replace(/\b(\d+\.?\d*)\b/g, `<span class="${styles.number}">$1</span>`);
    }
    
    if (language === 'css') {
      return escapedCode
        // Properties
        .replace(/([\w-]+)(\s*:\s*)/g, `<span class="${styles.variable}">$1</span>$2`)
        // Values
        .replace(/(:)([^;{}]+)(;)/g, `$1<span class="${styles.string}">$2</span>$3`)
        // Comments
        .replace(/(\/\*[\s\S]*?\*\/)/g, `<span class="${styles.comment}">$1</span>`);
    }
    
    if (language === 'json') {
      return escapedCode
        // Keys
        .replace(/"([^"]+)"(\s*:)/g, `<span class="${styles.variable}">"$1"</span>$2`)
        // String values
        .replace(/(:)(\s*)"([^"]+)"/g, `$1$2<span class="${styles.string}">"$3"</span>`)
        // Numbers
        .replace(/(:)(\s*)(\d+\.?\d*)/g, `$1$2<span class="${styles.number}">$3</span>`)
        // Booleans
        .replace(/(:)(\s*)(true|false|null)/g, `$1$2<span class="${styles.keyword}">$3</span>`);
    }
    
    return escapedCode;
  };

  let html = markdown;
  
  // Process inline code first (before code blocks)
  html = html.replace(/`([^`]+)`/g, `<code class="${styles.docText} code">$1</code>`);

  // Process code blocks
  html = processCodeBlocks(html);
  
  // Process other markdown elements with consistent styling
  html = html
    // Headers
    .replace(/## ([^\n]+)/g, `<h2 class="${styles.docSubheading}">$1</h2>`)
    // Bold and italic
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Lists
    .replace(/- ([^\n]+)/g, '<li>$1</li>')
    .replace(/(<li>[^<]+<\/li>(\s*)?)+/g, '<ul>$&</ul>')
    // Line breaks
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
  
  return html;
}

function CacheControl() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchEmail, setSearchEmail] = useState('');
  const [foundUser, setFoundUser] = useState<any>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const searchUser = async () => {
    if (!searchEmail.trim()) return;
    
    setLoading(true);
    try {
      const { getUserProfileByEmail } = await import('@/services/userService');
      const user = await getUserProfileByEmail(searchEmail.trim());
      
      if (user) {
        setFoundUser({
          ...user,
          cacheEnabled: user.cacheEnabled !== undefined ? user.cacheEnabled : true
        });
        setMessage({ type: 'success', text: `Found user: ${user.firstName} ${user.lastName}` });
      } else {
        setFoundUser(null);
        setMessage({ type: 'error', text: 'User not found' });
      }
    } catch (error) {
      console.error('Error searching user:', error);
      setMessage({ type: 'error', text: 'Error searching for user' });
    } finally {
      setLoading(false);
    }
  };

  const updateCachePreference = async (userId: string, enableCache: boolean) => {
    if (!userId || typeof userId !== 'string' || userId.trim() === '') {
      setMessage({ type: 'error', text: 'Invalid user ID provided' });
      return;
    }

    setUpdating(userId);
    try {
      const { setUserCachePreference } = await import('@/services/userService');
      await setUserCachePreference(userId, enableCache);
      
      // Update local state (Firebase uses 'uid' not 'id')
      if (foundUser && foundUser.uid === userId) {
        setFoundUser({ ...foundUser, cacheEnabled: enableCache });
      }
      
      setMessage({ 
        type: 'success', 
        text: `Cache ${enableCache ? 'enabled' : 'disabled'} for user ${foundUser?.firstName} ${foundUser?.lastName}` 
      });
    } catch (error) {
      console.error('Error updating cache preference:', error);
      setMessage({ type: 'error', text: `Failed to update cache preference: ${error instanceof Error ? error.message : 'Unknown error'}` });
    } finally {
      setUpdating(null);
    }
  };

  const testCacheBypass = async () => {
    if (!foundUser) return;
    
    setLoading(true);
    try {
      console.log('🧪 Testing cache bypass for user:', foundUser.email);
      
      // Test with cache
      const start1 = Date.now();
      const response1 = await fetch(`/api/guardian/search?q=technology&userEmail=${foundUser.email}`);
      const data1 = await response1.json();
      const time1 = Date.now() - start1;
      
      // Test without cache (force fresh)
      const start2 = Date.now();
      const response2 = await fetch(`/api/guardian/search?q=technology&userEmail=${foundUser.email}&noCache=true`);
      const data2 = await response2.json();
      const time2 = Date.now() - start2;
      
      console.log('Cache test results:', {
        withCache: { time: time1, hit: data1.cacheHit, disabled: data1.cacheDisabledForUser },
        withoutCache: { time: time2, hit: data2.cacheHit, disabled: data2.cacheDisabledForUser }
      });
      
      setMessage({ 
        type: 'success', 
        text: `Cache test complete: ${time1}ms (cache) vs ${time2}ms (fresh)` 
      });
    } catch (error) {
      console.error('Error testing cache:', error);
      setMessage({ type: 'error', text: 'Error testing cache' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.docsContainer}>
      <div className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <SettingsIcon size={24} color="#0066cc" />
        Per-User Cache Control
      </div>
      <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
        Control caching behavior for specific users. Useful for testing, debugging, or providing different experiences.
      </p>

      {/* User Search */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#333', marginBottom: '1rem' }}>Find User by Email</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <input
            type="email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            placeholder="Enter user email..."
            style={{
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              flex: 1,
              fontSize: '1rem'
            }}
            onKeyDown={(e) => e.key === 'Enter' && searchUser()}
          />
          <button 
            onClick={searchUser}
            disabled={loading || !searchEmail.trim()}
            className={styles.submitButton}
            style={{ 
              cursor: loading || !searchEmail.trim() ? 'not-allowed' : 'pointer',
              opacity: loading || !searchEmail.trim() ? 0.6 : 1 
            }}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </div>

      {/* Found User */}
      {foundUser && (
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#333', marginBottom: '1rem' }}>User Found</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <strong>Name:</strong> {foundUser.firstName} {foundUser.lastName}
            </div>
            <div>
              <strong>Email:</strong> {foundUser.email}
            </div>
            <div>
              <strong>Username:</strong> @{foundUser.username}
            </div>
            <div>
              <strong>Cache Status:</strong> 
              <span style={{ 
                color: foundUser.cacheEnabled ? '#28a745' : '#dc3545',
                fontWeight: 'bold',
                marginLeft: '0.5rem'
              }}>
                {foundUser.cacheEnabled ? 'ENABLED' : 'DISABLED'}
              </span>
            </div>
          </div>

          {/* Cache Control Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button 
                                  onClick={() => updateCachePreference(foundUser.uid, true)}
                              disabled={updating === foundUser.uid || foundUser.cacheEnabled}
              className={styles.submitButton}
              style={{ 
                backgroundColor: foundUser.cacheEnabled ? '#28a745' : '#007bff',
                                  cursor: updating === foundUser.uid || foundUser.cacheEnabled ? 'not-allowed' : 'pointer',
                  opacity: updating === foundUser.uid || foundUser.cacheEnabled ? 0.6 : 1 
              }}
            >
                              {updating === foundUser.uid ? 'Updating...' : 'Enable Cache'}
            </button>
            
            <button 
                                  onClick={() => updateCachePreference(foundUser.uid, false)}
                              disabled={updating === foundUser.uid || !foundUser.cacheEnabled}
              className={styles.submitButton}
              style={{ 
                backgroundColor: !foundUser.cacheEnabled ? '#dc3545' : '#6c757d',
                                  cursor: updating === foundUser.uid || !foundUser.cacheEnabled ? 'not-allowed' : 'pointer',
                  opacity: updating === foundUser.uid || !foundUser.cacheEnabled ? 0.6 : 1 
              }}
            >
                              {updating === foundUser.uid ? 'Updating...' : 'Disable Cache'}
            </button>

            <button 
              onClick={testCacheBypass}
              disabled={loading}
              className={styles.submitButton}
              style={{ 
                backgroundColor: '#17a2b8',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1 
              }}
            >
              {loading ? 'Testing...' : 'Test Cache'}
            </button>
          </div>
        </div>
      )}

      {/* Message Display */}
      {message && (
        <div style={{
          padding: '1rem',
          backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
          border: `1px solid ${message.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '4px',
          color: message.type === 'success' ? '#155724' : '#721c24',
          marginBottom: '1rem'
        }}>
          {message.text}
        </div>
      )}

      {/* Cache Control Info */}
      <div style={{
        padding: '1.5rem',
        backgroundColor: '#e8f4fd',
        border: '1px solid #b3d9ff',
        borderRadius: '8px'
      }}>
        <h4 style={{ color: '#0066cc', marginBottom: '1rem' }}>How Cache Control Works</h4>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#0066cc', lineHeight: '1.6' }}>
          <li><strong>Cache Enabled:</strong> User gets cached articles (faster loading, 8-min TTL)</li>
          <li><strong>Cache Disabled:</strong> User always gets fresh articles (slower, direct API calls)</li>
          <li><strong>URL Parameters:</strong> 
            <ul style={{ marginTop: '0.5rem' }}>
              <li><code>?userEmail=user@example.com</code> - Check user cache preference</li>
              <li><code>&noCache=true</code> - Force bypass cache for any user</li>
            </ul>
          </li>
          <li><strong>Console Logs:</strong> Watch browser console for cache behavior indicators</li>
        </ul>
      </div>
    </div>
  );
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
          <button 
            className={`${styles.tabButton} ${activeTab === 'interests' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('interests')}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CommentIcon size={16} />
              Interests Management
            </span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'cache' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('cache')}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <RocketIcon size={16} />
              Cache Monitor
            </span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'recommendations' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('recommendations')}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ComputerIcon size={16} />
              Recommendation Analytics
            </span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'cache-control' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('cache-control')}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SettingsIcon size={16} />
              Cache Control
            </span>
          </button>
        </div>
        
        {activeTab === 'docs' ? (
          <Documentation />
        ) : activeTab === 'interests' ? (
          <InterestsManagement />
        ) : activeTab === 'cache' ? (
          <CacheMonitor />
        ) : activeTab === 'recommendations' ? (
          <RecommendationAnalytics />
        ) : activeTab === 'cache-control' ? (
          <CacheControl />
        ) : (
          <UserManagement />
        )}
      </div>
    </div>
  );
} 