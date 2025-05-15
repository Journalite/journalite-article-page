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
  slug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ slug }) => {
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
  const [articleId, setArticleId] = useState<string | null>(null);
  
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

  // First, get the article ID from the slug
  useEffect(() => {
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
  }, [slug]);

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
    if (!timestamp) return 'Just now';
    
    let date;
    
    // Handle Firestore Timestamp objects
    if (timestamp && typeof timestamp.toDate === 'function') {
      date = timestamp.toDate();
    } 
    // Handle ISO strings
    else if (typeof timestamp === 'string') {
      date = new Date(timestamp);
    }
    // Use current date as fallback
    else {
      date = new Date();
    }
    
    // Format the date
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
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
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
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
                  >
                    <span>❤</span>
                    <span>{comment.likes.length || ''}</span>
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
                  >
                    <span>↩</span>
                    <span>Reply</span>
                  </button>
                  
                  {/* Only show delete button for the user's own comments */}
                  {comment.userId === currentUser.id && (
                    <button 
                      className={styles.commentDeleteBtn}
                      onClick={() => handleDeleteComment(commentId)}
                    >
                      <span>🗑</span>
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