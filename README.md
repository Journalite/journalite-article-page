# Journalite: Article Publishing Platform

## Project Overview
Journalite is a React/Next.js application with Firebase integration that allows users to create, publish, and interact with articles.

## Key Features Implemented

### Article System
- **Firestore-backed article storage**: Replaced hardcoded article data with Firestore database
- **Article CRUD operations**: Create, read, update, and delete functionality
- **Draft support**: Articles can be saved as drafts before publishing
- **Article status management**: Articles can be published or kept as drafts
- **Rich-text editing**: Support for formatting article content
- **Article metadata**: Title, content, author information, publication date

### User Authentication
- **Firebase Auth integration**: Secure user authentication and authorization
- **Protected routes**: Certain pages only accessible to authenticated users
- **Author verification**: Only article owners can edit or delete their content

### User Content Management
- **"My Thoughts" page**: Dashboard for users to manage their articles
- **View separation**: Toggle between Published and Draft articles
- **Article management**: Edit and delete functionality
- **Content preview**: Truncated previews of article content

### User Search and Profiles
- **Author search functionality**: Search users by name or username
- **Real-time search results**: Dynamic search with debounced queries
- **Profile navigation**: Click search results to view author profiles
- **Responsive design**: Search works across all device sizes
- **Consistent user cards**: Unified display of user information with avatars
- **User profiles**: Detailed view of author information and their published articles

### User Following System
- **Follow/unfollow functionality**: Users can follow and unfollow other users
- **Followers/following lists**: View who a user follows and who follows them
- **Profile sidebar preview**: Shows a preview of followers and following on profile
- **Expandable lists**: "See all" links to view complete follower/following lists
- **Responsive layout**: Properly handles long usernames and maintains consistent layout
- **Visual feedback**: Clearly shows follow relationship status

### Comment System
- **Nested comments**: Support for main comments and replies
- **Real-time updates**: Comments appear immediately after posting
- **Author identification**: Comments linked to user accounts
- **Timestamp display**: Shows when comments were posted

### Notification System
- **Comment notifications**: Users notified when someone comments on their articles
- **Notification bell**: Visual indicator with unread badge
- **Notification dropdown**: Quick access to recent notifications
- **Notification management**: Mark as read and delete functionality
- **Dedicated notifications page**: Full list of all notifications

### UI/UX Improvements for Mobile
I need to really look into fix this after getting the PC and regular computer side done first!!!!!!!!!

## Code Snippets

### Article Service
```typescript
// Example of Firestore article service
export const getArticles = async (options?: { 
  includeAuthor?: boolean;
  includeDrafts?: boolean;
  authorId?: string;
  articleStatus?: ArticleStatus;
}): Promise<Article[]> => {
  try {
    let query = collection(db, 'articles') as Query;
    
    if (options?.authorId) {
      query = query.where('authorId', '==', options.authorId);
    }
    
    if (options?.articleStatus) {
      query = query.where('status', '==', options.articleStatus);
    } else if (!options?.includeDrafts) {
      // By default, don't include drafts in results
      query = query.where('status', '==', 'published');
    }
    
    // Sort by creation date, newest first
    query = query.orderBy('createdAt', 'desc');
    
    const snapshot = await getDocs(query);
    const articles = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    } as Article));
    
    // Include author details if requested
    if (options?.includeAuthor) {
      const articlesWithAuthors = await Promise.all(
        articles.map(async (article) => {
          const author = await getUserById(article.authorId);
          return { ...article, author };
        })
      );
      return articlesWithAuthors;
    }
    
    return articles;
  } catch (error) {
    console.error('Error getting articles:', error);
    throw error;
  }
};
```

### Notification Implementation
```typescript
// Notification creation when a comment is added
export const createNotification = async (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>): Promise<Notification> => {
  try {
    const notificationData = {
      ...notification,
      createdAt: serverTimestamp(),
      read: false
    };
    
    const docRef = await addDoc(collection(db, 'notifications'), notificationData);
    
    return {
      id: docRef.id,
      ...notificationData,
      createdAt: new Date()
    } as Notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

// Used when adding a comment to notify the article author
const handleAddComment = async (content: string) => {
  if (!user || !content.trim()) return;
  
  try {
    setIsSubmitting(true);
    
    const newComment = await addComment({
      articleId,
      content,
      authorId: user.uid,
      authorName: user.displayName || 'Anonymous'
    });
    
    // Create notification for article author if commenter is not the author
    if (article?.authorId && user.uid !== article.authorId) {
      await createNotification({
        userId: article.authorId,
        type: 'comment',
        message: `${user.displayName || 'Someone'} commented on your article "${article.title}"`,
        articleId,
        commentId: newComment.id,
        senderId: user.uid
      });
    }
    
    setCommentContent('');
  } catch (error) {
    console.error('Error adding comment:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

### User Content Management
```typescript
// My Thoughts page for managing user's articles
export default function MyThoughts() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'published' | 'drafts'>('published');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<Article | null>(null);
  
  useEffect(() => {
    if (!user) return;
    
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const articleStatus = activeTab === 'published' ? 'published' : 'draft';
        const fetchedArticles = await getArticles({ 
          authorId: user.uid,
          articleStatus
        });
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, [user, activeTab]);
  
  const handleDelete = async () => {
    if (!articleToDelete) return;
    
    try {
      await deleteArticle(articleToDelete.id);
      setArticles(articles.filter(article => article.id !== articleToDelete.id));
      setShowDeleteModal(false);
      setArticleToDelete(null);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };
  
  // Component rendering
  // ...
}
```

### Protected Routes
```tsx
// Protected route wrapper component
export function withAuth<P extends object>(
  Component: ComponentType<P>
): ComponentType<P> {
  return function WithAuth(props: P) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login?redirect=' + router.asPath);
      }
    }, [user, loading, router]);

    if (loading) {
      return <div className={styles.loadingContainer}>
        <Spinner size="large" />
      </div>;
    }

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}

// Usage on create article page
function CreateArticlePage() {
  // Component implementation
}

export default withAuth(CreateArticlePage);
```

### Notification UI Component
```tsx
export default function NotificationBell() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  
  useEffect(() => {
    if (!user) return;
    
    const fetchNotifications = async () => {
      try {
        const userNotifications = await getNotifications(user.uid, { limit: 5 });
        setNotifications(userNotifications);
        setUnreadCount(userNotifications.filter(n => !n.read).length);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    
    fetchNotifications();
    
    // Set up real-time listener for new notifications
    const unsubscribe = onNotificationsUpdate(user.uid, (updatedNotifications) => {
      setNotifications(updatedNotifications.slice(0, 5));
      setUnreadCount(updatedNotifications.filter(n => !n.read).length);
    });
    
    return () => unsubscribe();
  }, [user]);
  
  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications(notifications.map(n => 
        n.id === notificationId ? { ...n, read: true } : n
      ));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };
  
  // Component rendering
  // ...
}
```

### User Search Implementation
```tsx
// User search service function
export async function searchUsers(searchTerm: string): Promise<UserProfile[]> {
  try {
    if (!searchTerm || searchTerm.trim().length < 2) {
      return [];
    }

    const searchTermLower = searchTerm.toLowerCase().trim();
    
    // Query Firestore for all users
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    
    // Filter users locally since Firestore doesn't support contains queries directly
    const matchingUsers = usersSnapshot.docs
      .map(doc => {
        // Get user data and ensure it has the correct UserProfile shape
        const userData = doc.data() as UserProfile;
        return userData;
      })
      .filter(user => {
        const usernameLower = user.username.toLowerCase();
        const firstNameLower = user.firstName.toLowerCase();
        const lastNameLower = user.lastName.toLowerCase();
        const fullNameLower = `${firstNameLower} ${lastNameLower}`;
        
        // Match on username, first name, last name, or full name
        return usernameLower.includes(searchTermLower) || 
               firstNameLower.includes(searchTermLower) ||
               lastNameLower.includes(searchTermLower) ||
               fullNameLower.includes(searchTermLower);
      });
    
    return matchingUsers;
  } catch (error) {
    console.error('Error searching users:', error);
    return [];
  }
}

// User search component with debouncing and dropdown results
const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<UserProfile[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Debounced search effect
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.trim().length >= 2) {
        setIsSearching(true);
        try {
          const results = await searchUsers(searchTerm);
          setSearchResults(results);
          setShowResults(true);
        } catch (error) {
          console.error('Error searching users:', error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search users by name or username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {showResults && searchResults.length > 0 && (
        <div className={styles.searchResults}>
          {searchResults.map((user) => (
            <Link 
              key={user.uid} 
              href={`/user/${encodeURIComponent(user.username.toLowerCase())}`}
              className={styles.searchResultItem}
            >
              <div className={styles.userAvatar}>
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.firstName} {user.lastName}</div>
                <div className={styles.userUsername}>@{user.username}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
```

## Technical Implementations

### Firebase Integration
- **Firestore collections**: Articles, comments, notifications
- **Firebase Auth**: User authentication and management
- **Composite indexes**: Optimized queries for filtering by authorId and status
- **Security rules**: Proper data access controls

### Code Structure
- **Service layer**: Dedicated services for Firestore operations
- **Component architecture**: Reusable React components
- **Type safety**: TypeScript interfaces for data models
- **Context providers**: Global state management

### Recent Fixes
- **Notification dropdown positioning**: Centered dropdown with proper arrow indicator
- **Draft visibility**: Prevented draft articles from appearing in public feeds
- **Index creation**: Added composite indexes for complex Firestore queries
- **Author verification**: Added checks to ensure only authors can view their drafts
- **Author display in articles**: Fixed article rendering to show the author's display name instead of their userId
- **User search feature**: Added comprehensive user search functionality:
  - Implemented search by username, first name, last name, or full name
  - Created debounced search to minimize database queries
  - Added dropdown results with user avatars and profile information
  - Fixed TypeScript errors in user data handling
  - Integrated search in the sidebar for easy access across the site
  - Added responsive design for all device sizes
- **User profiles and bios**: Added user profile features:
  - Added bio field to user profiles
  - Created user profile page to display user information and articles
  - Added author links on articles to navigate to author profiles
  - Updated profile editing form to include bio with character counter
  - Added responsive styling for profile pages
- **Enhanced article form**: Redesigned article creation and editing forms with:
  - Creative, minimalist UI with subtle animations and modern styling
  - Character count indicator for article content
  - Random writing tips to guide authors
  - Improved input fields with helpful hints
  - Better status selection with clear visibility explanations
  - Interactive tag preview with hover effects
  - Responsive design for mobile devices
- **Article Page Redesign**: Completely redesigned the article reading experience:
  - Removed sidebars for a cleaner, distraction-free reading experience
  - Added a minimalistic notification bell with SVG icon in the header
  - Made the Journalite logo a link to the homepage
  - Added user profile dropdown menu in the top-right corner
  - Made author names clickable, linking to author profile pages
  - Improved spacing and typography for better readability
  - Moved related tags to the bottom of the article
  - Added proper click-outside behavior for dropdown menus
  - Fixed navigation links to ensure all sidebar options are still accessible
  - Improved mobile responsiveness
- **Copy-paste functionality in editor**: Enhanced the editing experience:
  - Fixed issues with copy-paste functionality in the article editor
  - Added support for both regular paste (preserving formatting) and "paste and match style"
  - Implemented proper handling of the editor content to maintain consistent state
- **Params handling in Next.js**: Fixed issues with Next.js params:
  - Properly handled params in dynamic routes without using unstable React.use() with Promise
  - Fixed "article becomes blank" issue after editing and updating
  - Added proper type safety for route parameters
- **Next.js build errors**: Fixed Next.js 15.3.0 build issues:
  - Fixed critical build error in edit-article page by moving viewport configuration to layout files
  - Fixed CSR bailout errors by wrapping useSearchParams() in Suspense boundaries
  - Improved component structure to follow Next.js practices
  - Fixed error "missing exported function generateStaticParams()" by:
    - Adding proper metadata and generateStaticParams to dynamic routes
    - Updating the output configuration to 'standalone' mode for SSR support
    - Updating layout components with proper Viewport typing and imports
  - Used Image component instead of img tags for better performance
  - Known issue: There's a type incompatibility between Next.js 15.3.0's built-in PageProps typing and dynamic routes that prevents a fully clean build. This appears to be a Next.js framework issue.
  - Added proper layout files with viewport configuration to fix related warnings
  - Implemented proper TypeScript typing for dynamic routes using a custom DynamicPageProps helper:
    ```typescript
    // src/types/next.ts
    export type DynamicPageProps<T extends string> = {
      params: {
        [K in T]: string
      }
    }
    
    // Usage in page component:
    export default function Page({ params }: DynamicPageProps<'username'>) {
      const { username } = params;
      // ...
    }
    ```

- **Author Profile Navigation Fixes**: Resolved hydration and navigation issues:
  - Fixed hydration error with author links by ensuring consistent date formatting between server and client
  - Added proper awaiting of dynamic page parameters in user profile page
  - Ensured consistent username case handling for profile links (standardized to lowercase)
  - Implemented proper viewport configuration in all layout files to remove warnings
  - Added support for additional image domains in next.config.js
  - Fixed inconsistent HTML structure between server and client rendering
  - Created consistent date formatting functions with fixed locale ('en-US') and timezone ('UTC')
  - Replaced HTML img tags with Next.js Image components with proper configuration

## Article Editor/Writer Deep Dive

The Journalite article editor is a custom-built, Medium-like rich text editor that provides a seamless writing experience. It consists of several key components working together:

### Architecture

The article editing system is built with these main components:
1. **ArticleComposer**: The main container component that manages the article state and interactions
2. **ArticleEditor**: The actual editor interface with formatting controls
3. **Document Model**: Custom document model for representing article content
4. **Editor Services**: Services for handling events, operations, and DOM manipulations

### Key Features

#### Rich Text Editing
- **Custom document model**: Represents articles as structured JSON with sections, paragraphs, and formatting
- **WYSIWYG interface**: See exactly what the published article will look like while editing
- **Formatting toolbar**: Bold, italic, headings (H1, H2, H3), and more
- **Copy-paste support**: Properly handles both formatted and plain text pasting
- **Auto-save**: Periodically saves drafts to prevent content loss

#### Document Structure
```typescript
// Document model structure
export interface DocumentModel {
    id: string;          // Document ID (article ID)
    title: string;       // Article title
    sections: Section[]; // Content sections
    coverImage?: string; // Optional cover image
    tags?: string[];     // Article tags
    createdAt?: string;  // Creation timestamp
    updatedAt?: string;  // Last update timestamp
    authorId?: string;   // Author ID
    status?: 'published' | 'drafts'; // Article status
}

export interface Section {
    id: string;
    type: 'section';     // Could be extended for different section types
    paragraphs: Paragraph[];
}

export interface Paragraph {
    id: string;
    type: 'paragraph' | 'heading' | 'image' | 'blockquote' | 'bulletList' | 'orderedList' | 'listItem';
    text: string;
    marks: TextRange[];  // Formatting applied to text ranges
    level?: number;      // For headings (1-3)
    src?: string;        // For images
}

export interface TextRange {
    type: 'bold' | 'italic' | 'code' | 'link';
    from: number;  // Start index in text
    to: number;    // End index in text
    attrs?: {      // Additional attributes for specific mark types
        href?: string; // For links
    };
}
```

#### Article Composer Component
The ArticleComposer handles the overall article state and form functionality:

- **Form inputs**: Title, content, tags, cover image
- **State management**: Tracks editing state, saves, and publishes actions
- **Auto-resize**: Automatically expands text areas as content grows
- **Tag management**: Add/remove tags with real-time preview
- **Cover image preview**: Shows a preview of the cover image
- **Validation**: Ensures required fields are filled before saving/publishing
- **Draft/Publish controls**: Allows saving as draft or publishing immediately
- **Edit mode detection**: Automatically loads article data in edit mode

#### Advanced Editor Capabilities
The ArticleEditor component provides the actual editing interface:

- **ContentEditable base**: Uses a managed contentEditable div for WYSIWYG editing
- **Custom event handling**: Sophisticated event handlers for keyboard interactions
- **Selection management**: Tracks and manages text selection state
- **Formatting commands**: Handles text formatting through commands like bold, italic
- **Paste handling**: Processes pasted content to match the editor's format
- **DOM patching**: Efficiently updates the DOM based on document model changes
- **Document operations**: Six core operations (insert/remove/update paragraph/section)

### Editor Event Handling
The editor uses a custom event handling system to manage user interactions:

```typescript
// Core editor event handler methods
private handleKeyDown = (e: KeyboardEvent): void => {
  if (!this.model) return;

  // Get current paragraph and section
  this.updateCurrentParagraphAndSection();

  // Handle special keys
  switch (e.key) {
    case 'Enter':
      if (!e.shiftKey) {
        e.preventDefault();
        this.handleEnterKey();
      }
      break;

    case 'Backspace':
      if (this.isAtStartOfParagraph()) {
        e.preventDefault();
        this.handleBackspaceAtStart();
      }
      break;

    // More key handlers...
  }
};

// Paste event handler for maintaining formatting
const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
  // Check if the paste was initiated with "Paste and Match Style" option
  const matchStyle = e.nativeEvent.clipboardData?.getData('text/html-editor-match-style');
  
  if (matchStyle === 'true' || e.nativeEvent.clipboardData?.types.includes('text/html-editor-match-style')) {
    // Paste as plain text (match editor style)
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  } else {
    // For regular paste (Cmd+V or Ctrl+V), let the browser handle it normally
    // This will preserve formatting from the source
  }
  
  // Notify model of changes after paste
  if (editorRef.current && onChange) {
    setTimeout(() => {
      if (editorRef.current) {
        onChange(editorRef.current.innerHTML, documentModel);
      }
    }, 0);
  }
};
```

### Document Model to DOM Synchronization
The editor maintains synchronization between the document model and the DOM:

1. **Document model changes**: When the model changes, the DOM is patched
2. **User interaction**: User actions modify the DOM
3. **DOM observation**: Changes to the DOM update the document model
4. **Change notification**: Model changes trigger callbacks to parent components

This bidirectional sync ensures that the editor state always matches what the user sees.

### Article Viewing with Highlights
The article viewing component (`ArticleWithHighlights`) extends the editor's capabilities:

- **Highlighting**: Users can highlight text portions
- **Sharing**: Share highlighted text with others
- **Comments**: Add comments to specific text selections
- **DOM reconciliation**: Efficiently updates highlights without full re-renders
- **Persistence**: Highlights are stored in Firestore linked to the article

### Recent Improvements and Fixes
- **Copy-paste handling**: Fixed issues where pasted content would be incorrectly formatted
- **Selection preservation**: Better handling of cursor position after operations
- **Performance optimizations**: Reduced unnecessary re-renders
- **Mobile support**: Improved touch interaction and responsive design
- **Typing past first line**: Fixed bug preventing typing beyond the first line
- **Content loading messages**: Removed "Content is loaded from HTML" placeholder text
- **Undo/redo support**: Added keyboard shortcut support for undo/redo operations
- **Editor styling**: Improved typography and spacing for better writing experience

## Setup and Installation - This is for Abdul and Hikmat, and Theo. 
To set up this project locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up Firebase:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Firestore and Authentication services
   - Add your Firebase config to `.env.local`:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please make sure your code follows the existing coding patterns and includes appropriate tests. # Deployment test with updated Vercel secrets
# Testing deployment to mvp.journalite project
