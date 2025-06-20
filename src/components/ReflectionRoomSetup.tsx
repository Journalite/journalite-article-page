'use client'

import React, { useState } from 'react';
import { enableReflectionRoom, disableReflectionRoom } from '@/services/reflectionRoomService';

interface ReflectionRoomSetupProps {
  articleId: string;
  hasReflectionRoom: boolean;
  isAuthor: boolean;
  onToggle?: (enabled: boolean) => void;
}

const ReflectionRoomSetup: React.FC<ReflectionRoomSetupProps> = ({
  articleId,
  hasReflectionRoom,
  isAuthor,
  onToggle
}) => {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSetup, setShowSetup] = useState(false);

  if (!isAuthor) {
    return null;
  }

  const handleEnable = async () => {
    if (!topic.trim()) return;
    
    setIsLoading(true);
    try {
      await enableReflectionRoom(articleId, topic.trim());
      onToggle?.(true);
      setShowSetup(false);
      setTopic('');
    } catch (error) {
      console.error('Error enabling reflection room:', error);
      alert('Failed to enable reflection room. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisable = async () => {
    if (!confirm('Are you sure you want to disable the reflection room? This will hide it from readers.')) {
      return;
    }

    setIsLoading(true);
    try {
      await disableReflectionRoom(articleId);
      onToggle?.(false);
    } catch (error) {
      console.error('Error disabling reflection room:', error);
      alert('Failed to disable reflection room. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0'
    }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
        Reflection Room Settings
      </h3>
      
      {hasReflectionRoom ? (
        <div>
          <p style={{ margin: '0 0 12px 0', color: '#059669', fontSize: '14px' }}>
            ✅ Reflection Room is enabled for this article
          </p>
          <button
            onClick={handleDisable}
            disabled={isLoading}
            style={{
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '14px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? 'Disabling...' : 'Disable Reflection Room'}
          </button>
        </div>
      ) : (
        <div>
          <p style={{ margin: '0 0 12px 0', color: '#6b7280', fontSize: '14px' }}>
            Enable a reflection room to let readers discuss your article in real-time.
          </p>
          
          {!showSetup ? (
            <button
              onClick={() => setShowSetup(true)}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Enable Reflection Room
            </button>
          ) : (
            <div>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="What should readers discuss? (e.g., 'Share your thoughts on the main theme' or 'What resonated most with you?')"
                maxLength={200}
                rows={3}
                style={{
                  width: '100%',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  padding: '8px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  marginBottom: '8px'
                }}
              />
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>
                {topic.length}/200 characters
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleEnable}
                  disabled={!topic.trim() || isLoading}
                  style={{
                    background: topic.trim() ? '#059669' : '#9ca3af',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    cursor: !topic.trim() || isLoading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isLoading ? 'Creating...' : 'Create Reflection Room'}
                </button>
                <button
                  onClick={() => {
                    setShowSetup(false);
                    setTopic('');
                  }}
                  disabled={isLoading}
                  style={{
                    background: '#6b7280',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReflectionRoomSetup; 