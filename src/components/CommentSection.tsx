'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { auth } from '@/firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';
import { 
  getArticleComments, 
  addComment, 
  addReply,
  likeComment,
  deleteComment,
  getArticleBySlug,
  ArticleComment as FirestoreComment,
  CommentReply as FirestoreReply
} from '@/firebase/articles';
import styles from '@/styles/comment.module.css';

interface CommentSectionProps {
  articleId: string;
  slug?: string; // Keep slug as optional for backward compatibility
  isComplex?: boolean; // New prop for article type
}

const CommentSection: React.FC<CommentSectionProps> = ({ slug, articleId: propArticleId, isComplex }) => {
  const [comments, setComments] = useState<FirestoreComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [focusState, setFocusState] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [submittingReply, setSubmittingReply] = useState(false);
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [articleId, setArticleId] = useState<string | null>(propArticleId || null);
  
  // This user object will be updated when authenticated
  const [currentUser, setCurrentUser] = useState({ id: '', name: 'Reader' });

  useEffect(() => {
    // Check authentication status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isAuth = !!user;
      setIsAuthenticated(isAuth);
      
      if (isAuth && user) {
        setCurrentUser({
          id: user.uid,
          name: user.displayName || user.email?.split('@')[0] || 'User'
        });
      } else {
        setCurrentUser({ id: '', name: 'Reader' });
      }
    });
    
    return () => unsubscribe();
  }, []);

  // First, get the article ID from the slug if not provided directly
  useEffect(() => {
    if (propArticleId) {
      setArticleId(propArticleId);
      return;
    }
    
    if (!slug) return;

    const fetchArticleId = async () => {
      try {
        const article = await getArticleBySlug(slug);
        if (article && article.id) {
          setArticleId(article.id);
        }
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Unable to load article details.');
      }
    };

    fetchArticleId();
  }, [slug, propArticleId]);

  // Then, fetch comments when we have the articleId
  useEffect(() => {
    if (!articleId) return;
    
    setLoading(true);
    const fetchComments = async () => {
      try {
        const commentsData = await getArticleComments(articleId);
        
        // Add a small delay to show loading animation
        setTimeout(() => {
          setComments(commentsData);
          setLoading(false);
        }, 800);
      } catch (err) {
        console.error('Error fetching comments:', err);
        setError('Unable to load discussions. Please refresh the page to try again.');
        setLoading(false);
      }
    };

    fetchComments();
  }, [articleId]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || submitting || !articleId) return;
    
    if (!isAuthenticated) {
      setShowLoginPrompt(true);
      return;
    }
    
    try {
      setSubmitting(true);
      const comment = await addComment(articleId, newComment);
      setComments(prev => [comment, ...prev]);
      setNewComment('');
      setSubmitting(false);
      setFocusState(false); // Reset focus state after submission
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Your response could not be posted. Please try again.');
      setSubmitting(false);
    }
  };

  const handleReplySubmit = async (commentId: string) => {
    if (!replyContent.trim() || submittingReply || !articleId) return;
    
    if (!isAuthenticated) {
      setShowLoginPrompt(true);
      return;
    }
    
    try {
      setSubmittingReply(true);
      const reply = await addReply(articleId, commentId, replyContent);
      
      // Update the local state with the new reply
      setComments(prev => 
        prev.map(comment => 
          comment.commentId === commentId || comment.id === commentId
            ? { 
                ...comment, 
                replies: [...(comment.replies || []), reply]
              }
            : comment
        )
      );
      
      // Reset reply state
      setReplyContent('');
      setReplyingTo(null);
      setSubmittingReply(false);
      
      // Ensure replies for this comment are expanded
      setExpandedReplies(prev => ({
        ...prev,
        [commentId]: true
      }));
    } catch (err) {
      console.error('Error adding reply:', err);
      setSubmittingReply(false);
    }
  };

  const handleLikeComment = async (commentId: string) => {
    if (!isAuthenticated || !articleId) {
      setShowLoginPrompt(true);
      return;
    }
    
    try {
      const result = await likeComment(articleId, commentId);
      
      // Update local state
      setComments(prev => 
        prev.map(comment => 
          comment.commentId === commentId || comment.id === commentId
            ? { ...comment, likes: result.likes } 
            : comment
        )
      );
    } catch (err) {
      console.error('Error liking comment:', err);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!isAuthenticated || !articleId) {
      return;
    }
    
    try {
      await deleteComment(articleId, commentId);
      
      // Remove comment from local state
      setComments(prev => 
        prev.filter(comment => 
          comment.commentId !== commentId && comment.id !== commentId
        )
      );
    } catch (err) {
      console.error('Error deleting comment:', err);
    }
  };

  const toggleReplies = (commentId: string) => {
    setExpandedReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  // Helper to format dates
  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown date';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    // For recent dates, use relative time (which is less prone to hydration issues)
    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else {
      // Use consistent UTC timezone and locale for older dates
      try {
        const options: Intl.DateTimeFormatOptions = { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          timeZone: 'UTC'
        };
        
        return date.toLocaleDateString('en-US', options);
      } catch (error) {
        console.error('Error formatting date:', error);
        return 'Unknown date';
      }
    }
  };

  // Generate a user avatar with initial
  const getUserAvatar = (name: string, userId: string, isReply = false) => {
    const initial = name?.charAt(0).toUpperCase() || 'A';
    const colors = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444'];
    const colorIndex = userId ? Math.abs(userId.charCodeAt(0) % colors.length) : 0;
    const bgColor = colors[colorIndex];
    
    return (
      <div 
        className={isReply ? styles.replyAvatar : styles.commentAvatar} 
        style={{ 
          backgroundColor: bgColor, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: isReply ? '0.9rem' : '1.2rem'
        }}
      >
        {initial}
      </div>
    );
  };

  return (
    <section className={styles.commentSection}>
      <h2 className={styles.commentSectionTitle}>
        Join the Discussion
      </h2>
      
      {error && (
        <div className={styles.commentError}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
        </div>
      )}
      
      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        <div
          className={styles.commentInputContainer}
          style={{ opacity: focusState ? 1 : 0.85 }}
        >
          {isAuthenticated ? (
            <>
              <div className={styles.commentAvatar}>
                {getUserAvatar(currentUser.name, currentUser.id)}
              </div>
              <textarea
                className={styles.commentInput}
                placeholder="Share your thoughts..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                onFocus={() => setFocusState(true)}
                onBlur={() => {
                  if (!newComment.trim()) {
                    setFocusState(false);
                  }
                }}
              />
              <button 
                className={styles.commentSubmit}
                type="submit" 
                disabled={!newComment.trim() || submitting}
              >
                {submitting ? 'Posting...' : 'Post'}
              </button>
            </>
          ) : (
            <div className={styles.loginPromptContainer} onClick={() => setShowLoginPrompt(true)}>
              <textarea
                className={styles.commentInput}
                placeholder="Login to join the discussion..."
                disabled
              />
              <button
                className={`${styles.commentSubmit} ${styles.loginButton}`}
                type="button"
                onClick={() => setShowLoginPrompt(true)}
              >
                Login to comment
              </button>
            </div>
          )}
        </div>
      </form>

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className={styles.loginModalOverlay} onClick={() => setShowLoginPrompt(false)}>
          <div className={styles.loginModal} onClick={e => e.stopPropagation()}>
            <button className={styles.loginModalClose} onClick={() => setShowLoginPrompt(false)}>×</button>
            <h3 className={styles.loginModalTitle}>Join the conversation</h3>
            <p className={styles.loginModalText}>
              Sign in to Journalite to share your thoughts and join the discussion.
            </p>
            <div className={styles.loginModalButtons}>
              <Link href="/login" className={`${styles.loginModalButton} ${styles.primary}`}>
                Log In
              </Link>
              <Link href="/register" className={`${styles.loginModalButton} ${styles.secondary}`}>
                Create Account
              </Link>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className={styles.commentLoading}>
          <p>Loading comments...</p>
          <div className={styles.loadingDots}>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
            <div className={styles.loadingDot}></div>
          </div>
        </div>
      ) : comments.length === 0 ? (
        <div className={styles.noComments}>
          Be the first to share your thoughts on this article.
        </div>
      ) : (
        <div className={styles.commentsList}>
          {comments.map(comment => {
            const commentId = comment.commentId || comment.id || '';
            return (
              <div key={commentId} className={styles.commentItem}>
                <div className={styles.commentHeader}>
                  {getUserAvatar(comment.userName, comment.userId)}
                  <span className={styles.commentUser}>{comment.userName}</span>
                  <span className={styles.commentDate}>{formatDate(comment.createdAt)}</span>
                </div>
                <div className={styles.commentContent}>
                  {comment.content}
                </div>
                <div className={styles.commentActions}>
                  <button 
                    className={`${styles.commentLikeBtn} ${comment.likes.includes(currentUser.id) ? styles.liked : ''}`}
                    onClick={() => handleLikeComment(commentId)}
                    aria-pressed={comment.likes.includes(currentUser.id)}
                    aria-label={comment.likes.includes(currentUser.id) ? "Unlike comment" : "Like comment"}
                  >
                    {comment.likes.includes(currentUser.id) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    )}
                    <span>{comment.likes.length > 0 ? comment.likes.length : ''}</span>
                  </button>
                  
                  <button 
                    className={styles.replyToggle}
                    onClick={() => {
                      if (isAuthenticated) {
                        setReplyingTo(replyingTo === commentId ? null : commentId);
                      } else {
                        setShowLoginPrompt(true);
                      }
                    }}
                    aria-label="Reply to comment"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                    <span>Reply</span>
                  </button>
                  
                  {/* Only show delete button for the user's own comments */}
                  {comment.userId === currentUser.id && (
                    <button 
                      className={styles.commentDeleteBtn}
                      onClick={() => handleDeleteComment(commentId)}
                      aria-label="Delete comment"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09.996-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                      <span>Delete</span>
                    </button>
                  )}
                </div>
                
                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <>
                    <button
                      className={styles.repliesToggle}
                      onClick={() => toggleReplies(commentId)}
                    >
                      <span className={`${styles.repliesToggleIcon} ${expandedReplies[commentId] ? styles.open : ''}`}>
                        ▷
                      </span>
                      {`${comment.replies.length} ${comment.replies.length === 1 ? 'reply' : 'replies'}`}
                    </button>
                    
                    {expandedReplies[commentId] && (
                      <div className={styles.replySection}>
                        {comment.replies.map(reply => (
                          <div key={reply.replyId} className={styles.replyItem}>
                            <div className={styles.replyHeader}>
                              {getUserAvatar(reply.userName, reply.userId, true)}
                              <span className={styles.replyUser}>{reply.userName}</span>
                              <span className={styles.replyDate}>{formatDate(reply.createdAt)}</span>
                            </div>
                            <div className={styles.replyContent}>
                              {reply.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
                
                {/* Reply form */}
                {replyingTo === commentId && (
                  <div className={`${styles.replyForm} ${comment.replies && comment.replies.length > 0 ? styles.inThread : ''}`}>
                    <textarea
                      className={styles.replyInput}
                      placeholder="Write a reply..."
                      value={replyContent}
                      onChange={e => setReplyContent(e.target.value)}
                    />
                    <div className={styles.replyButtons}>
                      <button 
                        className={styles.replyCancel}
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyContent('');
                        }}
                      >
                        Cancel
                      </button>
                      <button 
                        className={styles.replySubmit}
                        disabled={!replyContent.trim() || submittingReply}
                        onClick={() => handleReplySubmit(commentId)}
                      >
                        {submittingReply ? 'Posting...' : 'Post Reply'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CommentSection; 