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

### UI/UX Improvements
- **Responsive design**: Mobile-friendly layouts
- **CSS modules**: Scoped styling to prevent conflicts
- **Loading states**: Visual feedback during data fetching
- **Confirmation dialogs**: Prevent accidental deletions
- **Error handling**: Graceful error management

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

Please ensure your code follows the existing coding patterns and includes appropriate tests. 