'use client'

import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { useRouter } from 'next/navigation';
import { doc, collection, addDoc, query, orderBy, onSnapshot, updateDoc, deleteDoc, where, getDocs, limit, startAfter } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db as firestore } from '@/firebase/clientApp';
import styles from '@/styles/comment.module.css';
import { HeartIcon, ReplyIcon, DotsVerticalIcon, TrashIcon, EditIcon } from './icons/CustomIcons';
import { getUserGradientStyle } from '@/utils/avatarUtils';

interface Comment {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  authorEmail: string;
  createdAt: any;
  likes: string[];
  parentId?: string;
  depth: number;
  replyCount?: number;
}

interface CommentSectionProps {
  articleId: string;
  className?: string;
}

const COMMENTS_PER_PAGE = 10;

// Memoized Comment Component for better performance
const CommentItem = memo(({ 
  comment, 
  currentUser,
  isAuthenticated,
  onLike,
  onReply,
  onEdit,
  onDelete,
  formatTimestamp,
  getReplies,
  expandedReplies,
  showReplies,
  onToggleReplies,
  replyingTo,
  onCancelReply,
  onReplySubmit
}: {
  comment: Comment;
  currentUser: any;
  isAuthenticated: boolean;
  onLike: (commentId: string, currentLikes: string[]) => void;
  onReply: (commentId: string) => void;
  onEdit: (commentId: string, text: string) => void;
  onDelete: (commentId: string) => void;
  formatTimestamp: (timestamp: any) => string;
  getReplies: (commentId: string) => Comment[];
  expandedReplies: Set<string>;
  showReplies: boolean;
  onToggleReplies: (commentId: string) => void;
  replyingTo: string | null;
  onCancelReply: () => void;
  onReplySubmit: (parentId: string, text: string) => Promise<void>;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [showMenu, setShowMenu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const replies = getReplies(comment.id);
  const isOwner = currentUser?.uid === comment.authorId;
  const isLiked = comment.likes?.includes(currentUser?.uid);
  const hasReplies = replies.length > 0;

  const handleEdit = useCallback(async () => {
    if (!editText.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      await onEdit(comment.id, editText.trim());
      setIsEditing(false);
    } finally {
      setIsSubmitting(false);
    }
  }, [comment.id, editText, onEdit, isSubmitting]);

  const handleDelete = useCallback(async () => {
    if (!confirm('Are you sure you want to delete this comment?')) return;
    setIsSubmitting(true);
    try {
      await onDelete(comment.id);
    } finally {
      setIsSubmitting(false);
    }
  }, [comment.id, onDelete]);

  return (
    <div className={`${styles.comment} ${styles[`depth${comment.depth}`]}`}>
      <div className={styles.commentHeader}>
        <div className={styles.commentAvatar}>
          <div 
            className="w-full h-full rounded-full flex items-center justify-center text-white font-semibold text-sm"
            style={getUserGradientStyle(comment.authorId, comment.authorName)}
          >
            {comment.authorName.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className={styles.commentMeta}>
          <span className={styles.commentAuthor}>{comment.authorName}</span>
          <span className={styles.commentTime}>{formatTimestamp(comment.createdAt)}</span>
        </div>
        {isOwner && (
          <div className={styles.commentMenu}>
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className={styles.menuButton}
            >
              <DotsVerticalIcon size={16} />
            </button>
            {showMenu && (
              <div className={styles.menuDropdown}>
                <button 
                  onClick={() => {
                    setIsEditing(true);
                    setShowMenu(false);
                  }}
                  className={styles.menuItem}
                >
                  <EditIcon size={14} />
                  Edit
                </button>
                <button 
                  onClick={() => {
                    handleDelete();
                    setShowMenu(false);
                  }}
                  className={styles.menuItem}
                >
                  <TrashIcon size={14} />
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      {isEditing ? (
        <div className={styles.editForm}>
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={styles.editInput}
            rows={3}
            autoFocus
          />
          <div className={styles.editActions}>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(comment.text);
              }}
              className={styles.cancelButton}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={handleEdit}
              className={styles.saveButton}
              disabled={!editText.trim() || isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className={styles.commentText}>{comment.text}</p>
          <div className={styles.commentFooter}>
            <button
              onClick={() => onLike(comment.id, comment.likes || [])}
              className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
              disabled={!isAuthenticated}
            >
              <HeartIcon size={14} color={isLiked ? '#ef4444' : '#64748b'} />
              {comment.likes?.length || ''}
            </button>
            {comment.depth < 2 && (
              <button
                onClick={() => onReply(comment.id)}
                className={styles.replyButton}
                disabled={!isAuthenticated}
              >
                <ReplyIcon size={14} color="#64748b" />
                Reply
              </button>
            )}
            
            {/* YouTube-style Replies Toggle Button */}
            {hasReplies && (
              <button
                onClick={() => onToggleReplies(comment.id)}
                className={styles.toggleRepliesButton}
              >
                <span className={styles.toggleIcon}>
                  {showReplies ? '▼' : '▶'}
                </span>
                {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
              </button>
            )}
          </div>
        </>
      )}
      
      {/* Reply Form - Only show if replying to this comment */}
      {replyingTo === comment.id && (
        <ReplyForm
          parentId={comment.id}
          currentUser={currentUser}
          onSubmit={async (parentId: string, text: string) => {
            // Handle reply submission
            if (!currentUser) return;

                         try {
               await onReplySubmit(parentId, text);
               onCancelReply();
             } catch (error) {
               console.error('Error adding reply:', error);
             }
          }}
          onCancel={onCancelReply}
          isSubmitting={isSubmitting}
          depth={Math.min(comment.depth + 1, 2)}
        />
      )}
      
      {/* Recursive Replies - Only show when expanded */}
      {showReplies && hasReplies && (
        <div className={styles.repliesContainer}>
          {replies.map(reply => (
            <CommentItem
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              isAuthenticated={isAuthenticated}
              onLike={onLike}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
              formatTimestamp={formatTimestamp}
              getReplies={getReplies}
              expandedReplies={expandedReplies}
              showReplies={expandedReplies.has(reply.id)}
              onToggleReplies={onToggleReplies}
              replyingTo={replyingTo}
              onCancelReply={onCancelReply}
              onReplySubmit={onReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
});

// Memoized Reply Form Component
const ReplyForm = memo(({ 
  parentId,
  currentUser,
  onSubmit,
  onCancel,
  isSubmitting,
  depth
}: {
  parentId: string;
  currentUser: any;
  onSubmit: (parentId: string, text: string) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
  depth: number;
}) => {
  const [replyText, setReplyText] = useState('');

  const handleSubmit = useCallback(async () => {
    if (!replyText.trim() || isSubmitting) return;
    
    try {
      await onSubmit(parentId, replyText.trim());
      setReplyText('');
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  }, [parentId, replyText, onSubmit, isSubmitting]);

  return (
    <div className={`${styles.replyForm} ${styles[`depth${depth}`]}`}>
      <div className={styles.replyInputContainer}>
        <div className={styles.commentAvatar}>
          <div 
            className="w-full h-full rounded-full flex items-center justify-center text-white font-semibold text-sm"
            style={getUserGradientStyle(currentUser.uid, currentUser.displayName)}
          >
            {(currentUser.displayName || 'User').charAt(0).toUpperCase()}
          </div>
        </div>
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Write a reply..."
          className={styles.replyInput}
          rows={2}
          autoFocus
        />
      </div>
      <div className={styles.replyActions}>
        <button
          onClick={onCancel}
          className={styles.cancelButton}
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className={styles.submitButton}
          disabled={!replyText.trim() || isSubmitting}
        >
          {isSubmitting ? 'Replying...' : 'Reply'}
        </button>
      </div>
    </div>
  );
});

// Enhanced organizeComments to support nested replies up to depth 2
const organizeComments = (comments: Comment[]): { mainComments: Comment[], repliesMap: Map<string, Comment[]> } => {
  // Build a quick lookup map for comments
  const commentLookup = new Map<string, Comment>();
  comments.forEach(c => commentLookup.set(c.id, { ...c }));

  // Helper to compute depth recursively (capped at 2)
  const computeDepth = (comment: Comment): number => {
    if (!comment.parentId) return 0;
    const parent = commentLookup.get(comment.parentId);
    if (!parent) return 0;
    return Math.min(computeDepth(parent) + 1, 2);
  };

  // Assign depth to each comment
  commentLookup.forEach(c => {
    c.depth = computeDepth(c);
  });

  const mainComments: Comment[] = [];
  const repliesMap = new Map<string, Comment[]>();

  commentLookup.forEach(comment => {
    if (comment.depth === 0) {
      mainComments.push(comment);
    } else {
      const parentId = comment.parentId!;
      if (!repliesMap.has(parentId)) {
        repliesMap.set(parentId, []);
      }
      repliesMap.get(parentId)!.push(comment);
    }
  });

  // Sort main comments by newest first
  mainComments.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);

  // Sort replies by oldest first
  repliesMap.forEach(r => r.sort((a, b) => a.createdAt?.seconds - b.createdAt?.seconds));

  return { mainComments, repliesMap };
};

const CommentSection: React.FC<CommentSectionProps> = ({ articleId, className = '' }) => {
  const router = useRouter();
  
  // State management
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());

  // Authentication state management
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  // Load initial comments
  useEffect(() => {
    if (!articleId) return;

    const commentsRef = collection(firestore, 'articles', articleId, 'comments');
    const q = query(
      commentsRef, 
      orderBy('createdAt', 'desc'), 
      limit(COMMENTS_PER_PAGE)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments: Comment[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        fetchedComments.push({
          id: doc.id,
          ...data,
          depth: 0,
        } as Comment);
      });
      
      setComments(fetchedComments);
      setLoading(false);
      setHasMore(fetchedComments.length === COMMENTS_PER_PAGE);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    });

    return () => unsubscribe();
  }, [articleId]);

  // Load more comments
  const loadMoreComments = useCallback(async () => {
    if (!hasMore || loadingMore || !lastDoc) return;
    
    setLoadingMore(true);
    try {
      const commentsRef = collection(firestore, 'articles', articleId, 'comments');
      const q = query(
        commentsRef, 
        orderBy('createdAt', 'desc'), 
        startAfter(lastDoc),
        limit(COMMENTS_PER_PAGE)
      );

      const snapshot = await getDocs(q);
      const newComments: Comment[] = [];
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        newComments.push({
          id: doc.id,
          ...data,
          depth: 0,
        } as Comment);
      });

      if (newComments.length > 0) {
        setComments(prev => [...prev, ...newComments]);
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        setHasMore(newComments.length === COMMENTS_PER_PAGE);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more comments:', error);
    } finally {
      setLoadingMore(false);
    }
  }, [articleId, hasMore, lastDoc, loadingMore]);

  // Submit new comment
  const handleCommentSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !currentUser || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const commentsRef = collection(firestore, 'articles', articleId, 'comments');
      await addDoc(commentsRef, {
        text: newComment.trim(),
        authorId: currentUser.uid,
        authorName: currentUser.displayName || 'Anonymous',
        authorEmail: currentUser.email || '',
        createdAt: new Date(),
        likes: [],
        parentId: null,
      });
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [articleId, newComment, currentUser, isSubmitting]);

  // Submit reply
  const handleReplySubmit = useCallback(async (parentId: string, text: string) => {
    if (!currentUser || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const commentsRef = collection(firestore, 'articles', articleId, 'comments');
      await addDoc(commentsRef, {
        text,
        authorId: currentUser.uid,
        authorName: currentUser.displayName || 'Anonymous',
        authorEmail: currentUser.email || '',
        createdAt: new Date(),
        likes: [],
        parentId,
      });
      setReplyingTo(null);
    } catch (error) {
      console.error('Error adding reply:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [articleId, currentUser, isSubmitting]);

  // Handle like/unlike
  const handleLike = useCallback(async (commentId: string, currentLikes: string[]) => {
    if (!currentUser) return;

    try {
      const commentRef = doc(firestore, 'articles', articleId, 'comments', commentId);
      const userLiked = currentLikes.includes(currentUser.uid);
      
      const updatedLikes = userLiked 
        ? currentLikes.filter(uid => uid !== currentUser.uid)
        : [...currentLikes, currentUser.uid];

      await updateDoc(commentRef, { likes: updatedLikes });
    } catch (error) {
      console.error('Error updating like:', error);
    }
  }, [articleId, currentUser]);

  // Handle edit comment
  const handleEditComment = useCallback(async (commentId: string, newText: string) => {
    try {
      const commentRef = doc(firestore, 'articles', articleId, 'comments', commentId);
      await updateDoc(commentRef, { text: newText });
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  }, [articleId]);

  // Handle delete comment
  const handleDeleteComment = useCallback(async (commentId: string) => {
    try {
      const commentRef = doc(firestore, 'articles', articleId, 'comments', commentId);
      await deleteDoc(commentRef);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  }, [articleId]);

  // Toggle replies visibility
  const handleToggleReplies = useCallback((commentId: string) => {
    setExpandedReplies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  }, []);

  // Format timestamp
  const formatTimestamp = useCallback((timestamp: any) => {
    if (!timestamp) return 'Just now';
    
    const now = new Date();
    const commentDate = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const diffMs = now.getTime() - commentDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return commentDate.toLocaleDateString();
  }, []);

  // Organize comments for display
  const { mainComments, repliesMap } = useMemo(() => organizeComments(comments), [comments]);

  // Helper to fetch replies for a given comment id
  const getReplies = useCallback((commentId: string) => {
    return repliesMap.get(commentId) || [];
  }, [repliesMap]);

  if (loading) {
    return <div className={styles.commentsSection}>Loading comments...</div>;
  }

  return (
    <div className={`${styles.commentsSection} ${className}`}>
      <h3 className={styles.commentsTitle}>
        Comments ({mainComments.length})
      </h3>

      {/* Comment Form */}
      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        {isAuthenticated ? (
          <div className={styles.commentInputContainer}>
            <div className={styles.commentAvatar}>
              <div 
                className="w-full h-full rounded-full flex items-center justify-center text-white font-semibold text-sm"
                style={getUserGradientStyle(currentUser.uid, currentUser.displayName)}
              >
                {(currentUser.displayName || 'User').charAt(0).toUpperCase()}
              </div>
            </div>
            <textarea
              className={styles.commentInput}
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              rows={3}
            />
          </div>
        ) : (
          <div className={styles.loginPromptContainer}>
            <h4>Join the conversation</h4>
            <p>Please log in to share your thoughts and engage with the community.</p>
            <button
              type="button"
              onClick={() => router.push('/login')}
              className={styles.loginButton}
            >
              Sign In
            </button>
          </div>
        )}
        
        {isAuthenticated && (
          <div className={styles.commentActions}>
            <button
              type="button"
              onClick={() => setNewComment('')}
              className={styles.cancelButton}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!newComment.trim() || isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </div>
        )}
      </form>

      {/* Comments List - YouTube Style */}
      <div className={styles.commentsList}>
        {mainComments.length === 0 ? (
          <div className={styles.noComments}>
            <h4>No comments yet</h4>
            <p>Be the first to share your thoughts!</p>
          </div>
        ) : (
          <>
            {mainComments.map(comment => (
              <CommentItem
                key={comment.id}
                comment={comment}
                currentUser={currentUser}
                isAuthenticated={isAuthenticated}
                onLike={handleLike}
                onReply={setReplyingTo}
                onEdit={handleEditComment}
                onDelete={handleDeleteComment}
                formatTimestamp={formatTimestamp}
                getReplies={getReplies}
                expandedReplies={expandedReplies}
                showReplies={expandedReplies.has(comment.id)}
                onToggleReplies={handleToggleReplies}
                replyingTo={replyingTo}
                onCancelReply={() => setReplyingTo(null)}
                onReplySubmit={handleReplySubmit}
              />
            ))}
            
            {/* Load More Button */}
            {hasMore && (
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  onClick={loadMoreComments}
                  disabled={loadingMore}
                  className={styles.submitButton}
                >
                  {loadingMore ? 'Loading...' : 'Load More Comments'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(CommentSection); 