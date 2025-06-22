'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { doc, collection, addDoc, query, orderBy, onSnapshot, updateDoc, deleteDoc, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db as firestore } from '@/firebase/clientApp';
import styles from '@/styles/comment.module.css';
import { HeartIcon, ReplyIcon, DotsVerticalIcon, TrashIcon, EditIcon } from './icons/CustomIcons';
import { getUserAvatar } from '@/utils/avatarUtils';
import { getMoodFromText } from '@/utils/getMoodFromText';
import { moodThemes } from '@/utils/moodThemes';

interface Comment {
  id: string;
  text: string;
  authorId: string;
  authorName: string;
  authorEmail: string;
  createdAt: any;
  likes: string[];
  mood?: string;
  replies?: Comment[];
  parentId?: string;
}

interface CommentSectionProps {
  articleId: string;
  className?: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ articleId, className = '' }) => {
  const router = useRouter();
  
  // State management
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
  const [focusState, setFocusState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Mood feature toggle
  const moodFeatureEnabled = process.env.NODE_ENV === 'development';

  // Device detection and responsive state
  const deviceInfo = useMemo(() => {
    return {
      isMobile: windowWidth <= 768,
      isTablet: windowWidth > 768 && windowWidth <= 1024,
      isSmallPhone: windowWidth <= 480,
      bottomSafeArea: windowWidth <= 768 ? 120 : 40
    };
  }, [windowWidth]);

  // Optimized window resize handler
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWidth, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Authentication state management
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  // Real-time comments subscription
  useEffect(() => {
    if (!articleId) return;

    const commentsRef = collection(firestore, 'articles', articleId, 'comments');
    const q = query(commentsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments: Comment[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        fetchedComments.push({
          id: doc.id,
          ...data,
        } as Comment);
      });
      
      // Organize comments with replies
      const organizedComments = organizeCommentsWithReplies(fetchedComments);
      setComments(organizedComments);
    });

    return () => unsubscribe();
  }, [articleId]);

  // Organize comments into threads
  const organizeCommentsWithReplies = useCallback((allComments: Comment[]): Comment[] => {
    const topLevelComments = allComments.filter(comment => !comment.parentId);
    const replies = allComments.filter(comment => comment.parentId);

    return topLevelComments.map(comment => ({
      ...comment,
      replies: replies.filter(reply => reply.parentId === comment.id)
        .sort((a, b) => a.createdAt?.toDate() - b.createdAt?.toDate())
    }));
  }, []);

  // Get mood for styling
  const mood = useMemo(() => {
    if (!moodFeatureEnabled) return 'calm';
    return getMoodFromText(newComment || replyText || editText);
  }, [moodFeatureEnabled, newComment, replyText, editText]);

  // Optimized comment submission
  const handleCommentSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !currentUser || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const commentsRef = collection(firestore, 'articles', articleId, 'comments');
      const commentData: any = {
        text: newComment.trim(),
        authorId: currentUser.uid,
        authorName: currentUser.displayName || 'Anonymous',
        authorEmail: currentUser.email || '',
        createdAt: new Date(),
        likes: [],
      };

      // Only add mood field if mood feature is enabled
      if (moodFeatureEnabled) {
        commentData.mood = mood;
      }

      await addDoc(commentsRef, commentData);

      setNewComment('');
      setFocusState(false);
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [newComment, currentUser, isSubmitting, articleId, mood, moodFeatureEnabled]);

  // Reply submission
  const handleReplySubmit = useCallback(async (parentId: string) => {
    if (!replyText.trim() || !currentUser || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const commentsRef = collection(firestore, 'articles', articleId, 'comments');
      const replyData: any = {
        text: replyText.trim(),
        authorId: currentUser.uid,
        authorName: currentUser.displayName || 'Anonymous',
        authorEmail: currentUser.email || '',
        createdAt: new Date(),
        likes: [],
        parentId,
      };

      // Only add mood field if mood feature is enabled
      if (moodFeatureEnabled) {
        replyData.mood = getMoodFromText(replyText);
      }

      await addDoc(commentsRef, replyData);

      setReplyText('');
      setReplyingTo(null);
    } catch (error) {
      console.error('Error adding reply:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [replyText, currentUser, isSubmitting, articleId, moodFeatureEnabled]);

  // Like/unlike functionality
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
  }, [currentUser, articleId]);

  // Comment editing
  const handleEditSubmit = useCallback(async (commentId: string) => {
    if (!editText.trim() || !currentUser || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const commentRef = doc(firestore, 'articles', articleId, 'comments', commentId);
      const updateData: any = {
        text: editText.trim(),
        editedAt: new Date()
      };

      // Only add mood field if mood feature is enabled
      if (moodFeatureEnabled) {
        updateData.mood = getMoodFromText(editText);
      }

      await updateDoc(commentRef, updateData);

      setEditingComment(null);
      setEditText('');
    } catch (error) {
      console.error('Error editing comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [editText, currentUser, isSubmitting, articleId, moodFeatureEnabled]);

  // Comment deletion
  const handleDelete = useCallback(async (commentId: string) => {
    if (!currentUser || isSubmitting) return;

    if (!confirm('Are you sure you want to delete this comment?')) return;

    setIsSubmitting(true);
    try {
      // Delete the comment
      const commentRef = doc(firestore, 'articles', articleId, 'comments', commentId);
      await deleteDoc(commentRef);

      // Delete all replies to this comment
      const repliesQuery = query(
        collection(firestore, 'articles', articleId, 'comments'),
        where('parentId', '==', commentId)
      );
      const repliesSnapshot = await getDocs(repliesQuery);
      
      const deletePromises = repliesSnapshot.docs.map(replyDoc => 
        deleteDoc(doc(firestore, 'articles', articleId, 'comments', replyDoc.id))
      );
      
      await Promise.all(deletePromises);
      
      setExpandedMenus(prev => {
        const newSet = new Set(prev);
        newSet.delete(commentId);
        return newSet;
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [currentUser, isSubmitting, articleId]);

  // Format timestamp
  const formatTimestamp = useCallback((timestamp: any) => {
    if (!timestamp) return 'Just now';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  }, []);

  // Memoized container styles
  const containerStyles = useMemo(() => ({
    marginBottom: deviceInfo.isMobile ? 
      `max(${deviceInfo.bottomSafeArea + 40}px, calc(${deviceInfo.bottomSafeArea}px + env(safe-area-inset-bottom)))` :
      '2rem',
    paddingBottom: deviceInfo.isMobile ? '20px' : '0'
  }), [deviceInfo]);

  // Render individual comment
  const renderComment = useCallback((comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${styles.comment} ${isReply ? styles.reply : ''}`}>
      <div className={styles.commentHeader}>
        <div className={styles.commentAvatar}>
          {getUserAvatar(comment.authorName, comment.authorId)}
        </div>
        <div className={styles.commentMeta}>
          <span className={styles.commentAuthor}>{comment.authorName}</span>
          <span className={styles.commentTime}>{formatTimestamp(comment.createdAt)}</span>
        </div>
        {currentUser?.uid === comment.authorId && (
          <div className={styles.commentActions}>
            <button
              onClick={() => {
                const newExpanded = new Set(expandedMenus);
                if (expandedMenus.has(comment.id)) {
                  newExpanded.delete(comment.id);
                } else {
                  newExpanded.add(comment.id);
                }
                setExpandedMenus(newExpanded);
              }}
              className={styles.menuButton}
              aria-label="Comment options"
            >
              <DotsVerticalIcon size={16} color="#64748b" />
            </button>
            {expandedMenus.has(comment.id) && (
              <div className={styles.dropdownMenu}>
                <button
                  onClick={() => {
                    setEditingComment(comment.id);
                    setEditText(comment.text);
                    setExpandedMenus(new Set());
                  }}
                  className={styles.menuItem}
                >
                  <EditIcon size={14} color="#3b82f6" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className={styles.menuItem}
                  disabled={isSubmitting}
                >
                  <TrashIcon size={14} color="#ef4444" />
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {editingComment === comment.id ? (
        <div className={styles.editForm}>
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={`${styles.editInput} mobile-optimized-input`}
            data-mobile="true"
            rows={3}
            autoFocus
          />
          <div className={styles.editActions}>
            <button
              onClick={() => {
                setEditingComment(null);
                setEditText('');
              }}
              className={styles.cancelButton}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={() => handleEditSubmit(comment.id)}
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
              onClick={() => handleLike(comment.id, comment.likes || [])}
              className={`${styles.likeButton} ${
                comment.likes?.includes(currentUser?.uid) ? styles.liked : ''
              }`}
              disabled={!isAuthenticated}
            >
              <HeartIcon
                size={14}
                color={comment.likes?.includes(currentUser?.uid) ? '#ef4444' : '#64748b'}
              />
              {comment.likes?.length ? comment.likes.length : ''}
            </button>
            {!isReply && (
              <button
                onClick={() => setReplyingTo(comment.id)}
                className={styles.replyButton}
                disabled={!isAuthenticated}
              >
                <ReplyIcon size={14} color="#64748b" />
                Reply
              </button>
            )}
          </div>
        </>
      )}

      {/* Reply form */}
      {replyingTo === comment.id && (
        <div className={styles.replyForm}>
          <div className={styles.replyInputContainer}>
            <div className={styles.commentAvatar}>
              {getUserAvatar(currentUser?.displayName || 'User', currentUser?.uid)}
            </div>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
              className={`${styles.replyInput} mobile-optimized-input`}
              data-mobile="true"
              rows={2}
              autoFocus
            />
          </div>
          <div className={styles.replyActions}>
            <button
              onClick={() => {
                setReplyingTo(null);
                setReplyText('');
              }}
              className={styles.cancelButton}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={() => handleReplySubmit(comment.id)}
              className={styles.submitButton}
              disabled={!replyText.trim() || isSubmitting}
            >
              {isSubmitting ? 'Replying...' : 'Reply'}
            </button>
          </div>
        </div>
      )}

      {/* Render replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className={styles.repliesContainer}>
          {comment.replies.map(reply => renderComment(reply, true))}
        </div>
      )}
    </div>
  ), [
    currentUser, expandedMenus, editingComment, editText, replyingTo, replyText,
    isSubmitting, isAuthenticated, formatTimestamp, handleLike, handleDelete,
    handleEditSubmit, handleReplySubmit
  ]);

  return (
    <div 
      className={`${styles.commentsSection} ${className} comment-section`} 
      style={containerStyles}
    >
      <h3 className={styles.commentsTitle}>
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        {isAuthenticated ? (
          <div className={styles.commentInputContainer}>
            <div className={styles.commentAvatar}>
              {getUserAvatar(currentUser.displayName || currentUser.name, currentUser.uid || currentUser.id)}
            </div>
            <textarea
              className={styles.commentInput}
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              onFocus={() => setFocusState(true)}
              onBlur={() => setFocusState(false)}
              rows={4}
            />
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
                <span>{isSubmitting ? 'Posting...' : 'Post Comment'}</span>
              </button>
            </div>
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
      </form>

      {/* Comments List */}
      <div className={styles.commentsList}>
        {comments.length === 0 ? (
          <div className={styles.noComments}>
            <h4>No comments yet</h4>
            <p>Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map(comment => renderComment(comment))
        )}
      </div>
    </div>
  );
};

export default React.memo(CommentSection); 