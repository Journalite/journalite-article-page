import React, { useState, useEffect } from 'react';
import { Highlight, HighlightTag, addReactionToHighlight, removeReactionFromHighlight, generateHighlightShareUrl } from '@/services/highlightService';
import { auth } from '@/firebase/clientApp';
import { User } from 'firebase/auth';
import { ThumbsUpIcon, HeartIcon, ThinkingIcon, BulbIcon, ShareIcon } from './icons/CustomIcons';
import ShareModal from './ShareModal';

interface HighlightDisplayProps {
  highlight: Highlight;
  articleSlug: string;
  articleTitle: string;
  onUpdate?: () => void;
}

const availableReactions = [
  { emoji: 'thumbsUp', component: ThumbsUpIcon, color: '#22c55e' },
  { emoji: 'heart', component: HeartIcon, color: '#ef4444' },
  { emoji: 'thinking', component: ThinkingIcon, color: '#3b82f6' },
  { emoji: 'bulb', component: BulbIcon, color: '#f59e0b' }
];

const HighlightDisplay: React.FC<HighlightDisplayProps> = ({ 
  highlight, 
  articleSlug, 
  articleTitle,
  onUpdate 
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Check if this highlight should flash (from URL fragment)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlFragment = window.location.hash;
      if (urlFragment === `#highlight=${highlight.id}`) {
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 1000);
        
        // Scroll to highlight
        const element = document.querySelector(`[data-highlight-id="${highlight.id}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [highlight.id]);

  const handleReaction = async (reactionType: string) => {
    if (!currentUser) return;

    try {
      const userCurrentReaction = highlight.userReactions?.[currentUser.uid];
      
      if (userCurrentReaction === reactionType) {
        // Remove reaction
        await removeReactionFromHighlight(highlight.id, currentUser.uid, reactionType);
      } else {
        // Add or change reaction
        if (userCurrentReaction) {
          await removeReactionFromHighlight(highlight.id, currentUser.uid, userCurrentReaction);
        }
        await addReactionToHighlight(highlight.id, currentUser.uid, reactionType);
      }
      
      onUpdate?.();
    } catch (error) {
      console.error('Error updating reaction:', error);
    }
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const getHighlightClassName = (tag: HighlightTag) => {
    return `article-highlight highlight-${tag}${isFlashing ? ' highlight-shared-flash' : ''}`;
  };

  const userReaction = currentUser ? highlight.userReactions?.[currentUser.uid] : null;

  const shareUrl = generateHighlightShareUrl(articleSlug, highlight.id);

  return (
    <>
      <span 
        className={getHighlightClassName(highlight.tag)}
        data-highlight-id={highlight.id}
        style={{ position: 'relative' }}
      >
        {highlight.text}
      
      {/* Highlight actions on hover */}
      <div className="highlight-actions" style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        opacity: 0,
        transition: 'opacity 0.2s ease',
        pointerEvents: 'none',
        marginTop: '0.25rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'white',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '0.5rem',
          padding: '0.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          whiteSpace: 'nowrap'
        }}>
          {/* Share button */}
          <button
            onClick={handleShare}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              color: '#6b7280',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
            title="Share highlight"
          >
            <ShareIcon size={14} color="#6b7280" /> Share
          </button>

          {/* Reactions */}
          <div className="highlight-reactions">
            {availableReactions.map(reaction => {
              const count = highlight.reactions?.[reaction.emoji] || 0;
              const isActive = userReaction === reaction.emoji;
              const IconComponent = reaction.component;
              
              return (
                <button
                  key={reaction.emoji}
                  onClick={() => handleReaction(reaction.emoji)}
                  className={`highlight-reaction-btn ${isActive ? 'active' : ''}`}
                  disabled={!currentUser}
                  style={{ 
                    opacity: !currentUser ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    background: 'none',
                    border: isActive ? `1px solid ${reaction.color}` : '1px solid transparent',
                    borderRadius: '0.25rem',
                    padding: '0.25rem',
                    cursor: 'pointer'
                  }}
                >
                  <IconComponent 
                    size={14} 
                    color={isActive ? reaction.color : '#6b7280'} 
                  />
                  {count > 0 && (
                    <span 
                      className="highlight-reaction-count"
                      style={{ fontSize: '0.75rem', color: isActive ? reaction.color : '#6b7280' }}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ShareModal will be rendered separately */}
        </div>
      </div>

        <style jsx>{`
          .article-highlight:hover .highlight-actions {
            opacity: 1 !important;
            pointer-events: all !important;
          }
        `}</style>
      </span>
      
      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        highlightText={highlight.text}
        articleTitle={articleTitle}
        shareUrl={shareUrl}
      />
    </>
  );
};

export default HighlightDisplay; 