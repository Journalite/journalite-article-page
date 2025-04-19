import React, { useState, useEffect } from 'react';
import { 
  ArticleComment, 
  CommentReply,
  getArticleComments, 
  postComment, 
  postReply,
  likeComment, 
  likeReply,
  deleteComment, 
  deleteReply 
} from '@/services/articleService';

interface CommentSectionProps {
  slug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ slug }) => {
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [focusState, setFocusState] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [submittingReply, setSubmittingReply] = useState(false);
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({});
  
  // This would normally come from authentication
  const currentUser = { id: 'temp-user-id', name: 'Reader' };

  useEffect(() => {
    if (!slug) return;
    
    setLoading(true);
    getArticleComments(slug)
      .then(data => {
        // Add a small delay to show loading animation
        setTimeout(() => {
          setComments(data);
          setLoading(false);
        }, 800);
      })
      .catch(err => {
        setError('Unable to load discussions. Please refresh the page to try again.');
        setLoading(false);
        console.error(err);
      });
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || submitting) return;
    
    try {
      setSubmitting(true);
      const comment = await postComment(slug, currentUser.id, newComment);
      setComments(prev => [comment, ...prev]);
      setNewComment('');
      setSubmitting(false);
      setFocusState(false); // Reset focus state after submission
    } catch (err) {
      console.error('Failed to post comment:', err);
      setError('Your response could not be posted. Please try again.');
      setSubmitting(false);
    }
  };

  const handleReplySubmit = async (commentId: string) => {
    if (!replyContent.trim() || submittingReply) return;
    
    try {
      setSubmittingReply(true);
      const reply = await postReply(slug, commentId, currentUser.id, replyContent);
      
      // Update the local state with the new reply
      setComments(prev => 
        prev.map(comment => 
          comment.commentId === commentId
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
      console.error('Failed to post reply:', err);
      setSubmittingReply(false);
    }
  };

  const handleLikeComment = async (commentId: string) => {
    try {
      const result = await likeComment(slug, commentId, currentUser.id);
      
      // Update local state
      setComments(prev => 
        prev.map(comment => 
          comment.commentId === commentId 
            ? { ...comment, likes: result.likes } 
            : comment
        )
      );
    } catch (err) {
      console.error('Failed to like comment:', err);
    }
  };

  const handleLikeReply = async (commentId: string, replyId: string) => {
    try {
      const result = await likeReply(slug, commentId, replyId, currentUser.id);
      
      // Update local state
      setComments(prev => 
        prev.map(comment => 
          comment.commentId === commentId 
            ? { 
                ...comment, 
                replies: comment.replies.map(reply => 
                  reply.replyId === replyId
                    ? { ...reply, likes: result.likes }
                    : reply
                )
              } 
            : comment
        )
      );
    } catch (err) {
      console.error('Failed to like reply:', err);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(slug, commentId, currentUser.id);
      
      // Remove comment from local state
      setComments(prev => 
        prev.filter(comment => comment.commentId !== commentId)
      );
    } catch (err) {
      console.error('Failed to delete comment:', err);
    }
  };

  const handleDeleteReply = async (commentId: string, replyId: string) => {
    try {
      await deleteReply(slug, commentId, replyId, currentUser.id);
      
      // Remove reply from local state
      setComments(prev => 
        prev.map(comment => 
          comment.commentId === commentId 
            ? { 
                ...comment, 
                replies: comment.replies.filter(reply => reply.replyId !== replyId)
              } 
            : comment
        )
      );
    } catch (err) {
      console.error('Failed to delete reply:', err);
    }
  };

  const toggleReplies = (commentId: string) => {
    setExpandedReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMillis = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));
    const diffInHours = Math.floor(diffInMillis / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  };
  
  // Function to get user avatar with initial
  const getUserAvatar = (userId: string, isReply = false) => {
    const initial = userId.charAt(0).toUpperCase();
    const colors = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444'];
    const colorIndex = userId.charCodeAt(0) % colors.length;
    const bgColor = colors[colorIndex];
    
    return (
      <div 
        className={isReply ? "reply-avatar" : "comment-avatar-small"} 
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
    <section className="comment-section">
      <h2 className="comment-section-title">
        Join the Discussion
      </h2>
      
      {error && (
        <div className="comment-error">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {error}
        </div>
      )}
      
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <div 
          className="comment-input-container"
          onFocus={() => setFocusState(true)}
          onBlur={(e) => {
            // Only blur if not clicking within the container
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setFocusState(false);
            }
          }}
        >
          <div className="comment-avatar">
            {getUserAvatar(currentUser.id)}
          </div>
          <textarea
            className="comment-input"
            placeholder="Share your perspective..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={focusState ? 4 : 3}
          />
          <button 
            type="submit" 
            className="comment-submit"
            disabled={submitting || !newComment.trim()}
          >
            {submitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </form>
      
      {loading ? (
        <div className="comment-loading">
          <div>Loading discussions</div>
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      ) : (
        <div className="comments-list">
          {comments.length === 0 ? (
            <div className="no-comments">Start the conversation by sharing your thoughts.</div>
          ) : (
            comments.map((comment, index) => (
              <div 
                key={comment.commentId} 
                className="comment-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="comment-header">
                  {getUserAvatar(comment.userId)}
                  <div className="comment-user">{comment.userId}</div>
                  <div className="comment-date">{formatDate(comment.createdAt)}</div>
                </div>
                <div className="comment-content">{comment.content}</div>
                
                <div className="comment-actions">
                  <button 
                    className="reply-toggle"
                    onClick={() => setReplyingTo(replyingTo === comment.commentId ? null : comment.commentId)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 10h10a8 8 0 0 1 8 8v-3"></path>
                      <path d="M21 7v3h-3"></path>
                    </svg>
                    Reply
                  </button>
                  
                  <button 
                    className={`comment-like-btn ${comment.likes.includes(currentUser.id) ? 'liked' : ''}`}
                    onClick={() => handleLikeComment(comment.commentId)}
                    aria-label={comment.likes.includes(currentUser.id) ? 'Unlike' : 'Like'}
                  >
                    {comment.likes.includes(currentUser.id) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    )}
                    <span>{comment.likes.length > 0 ? comment.likes.length : ''}</span>
                  </button>
                  
                  {comment.userId === currentUser.id && (
                    <button 
                      className="comment-delete-btn"
                      onClick={() => handleDeleteComment(comment.commentId)}
                      aria-label="Delete response"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span>Remove</span>
                    </button>
                  )}
                </div>
                
                {/* Replies section */}
                {comment.replies && comment.replies.length > 0 && (
                  <>
                    <button 
                      className="replies-toggle" 
                      onClick={() => toggleReplies(comment.commentId)}
                    >
                      <span className={`replies-toggle-icon ${expandedReplies[comment.commentId] ? 'open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </span>
                      {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                    </button>
                    
                    {expandedReplies[comment.commentId] && (
                      <div className="reply-section">
                        <div className="replies-list">
                          {comment.replies.map((reply, replyIndex) => (
                            <div 
                              key={reply.replyId} 
                              className="reply-item"
                              style={{ animationDelay: `${replyIndex * 0.1}s` }}
                            >
                              <div className="reply-header">
                                {getUserAvatar(reply.userId, true)}
                                <div className="reply-user">{reply.userId}</div>
                                <div className="reply-date">{formatDate(reply.createdAt)}</div>
                              </div>
                              <div className="reply-content">{reply.content}</div>
                              <div className="reply-actions">
                                <button 
                                  className={`comment-like-btn ${reply.likes.includes(currentUser.id) ? 'liked' : ''}`}
                                  onClick={() => handleLikeReply(comment.commentId, reply.replyId)}
                                  aria-label={reply.likes.includes(currentUser.id) ? 'Unlike' : 'Like'}
                                >
                                  {reply.likes.includes(currentUser.id) ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                  )}
                                  <span>{reply.likes.length > 0 ? reply.likes.length : ''}</span>
                                </button>
                                
                                {reply.userId === currentUser.id && (
                                  <button 
                                    className="comment-delete-btn"
                                    onClick={() => handleDeleteReply(comment.commentId, reply.replyId)}
                                    aria-label="Delete reply"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                      <line x1="18" y1="6" x2="6" y2="18"></line>
                                      <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                    <span>Remove</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
                
                {/* Reply form - moved below replies */}
                {replyingTo === comment.commentId && (
                  <div className={`reply-form ${comment.replies && comment.replies.length > 0 && expandedReplies[comment.commentId] ? 'in-thread' : ''}`}>
                    <textarea
                      className="reply-input"
                      placeholder="Write your reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                    />
                    <div className="reply-buttons">
                      <button
                        className="reply-cancel"
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyContent('');
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="reply-submit"
                        onClick={() => handleReplySubmit(comment.commentId)}
                        disabled={submittingReply || !replyContent.trim()}
                      >
                        {submittingReply ? 'Posting...' : 'Reply'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default CommentSection; 