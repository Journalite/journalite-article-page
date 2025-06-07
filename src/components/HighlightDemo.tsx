import React from 'react';
import { HighlightTag } from '@/services/highlightService';

const HighlightDemo: React.FC = () => {
  const highlightExamples = [
    { 
      tag: 'insight' as HighlightTag, 
      text: 'This is an insightful passage', 
      icon: '💡',
      color: '#3B82F6' 
    },
    { 
      tag: 'question' as HighlightTag, 
      text: 'This raises important questions', 
      icon: '❓',
      color: '#F59E0B' 
    },
    { 
      tag: 'quote' as HighlightTag, 
      text: 'A memorable quote worth sharing', 
      icon: '💬',
      color: '#10B981' 
    },
    { 
      tag: 'important' as HighlightTag, 
      text: 'Critical information to remember', 
      icon: '⭐',
      color: '#EF4444' 
    },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#1F2937' }}>
        ✨ Enhanced Highlight Features
      </h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#374151', marginBottom: '1rem' }}>
          🎨 Color-Coded Highlights
        </h3>
        <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
          Select text and choose from 4 semantic highlight types:
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {highlightExamples.map((example) => (
            <div key={example.tag} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.25rem' }}>{example.icon}</span>
              <span 
                className={`article-highlight highlight-${example.tag}`}
                style={{ 
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontWeight: '500'
                }}
              >
                {example.text}
              </span>
              <span style={{ color: '#6B7280', fontSize: '0.875rem', textTransform: 'capitalize' }}>
                {example.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#374151', marginBottom: '1rem' }}>
          🔗 Highlight & Share
        </h3>
        <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
          Every highlight gets a shareable URL like:
        </p>
        <div style={{ 
          background: '#F3F4F6', 
          padding: '0.75rem', 
          borderRadius: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#1F2937'
        }}>
          https://journalite.com/articles?slug=example#highlight=abc123
        </div>
        <p style={{ color: '#6B7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>
          Clicking the link scrolls to the highlight and flashes it once ✨
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#374151', marginBottom: '1rem' }}>
          👍 Quick Reactions
        </h3>
        <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
          Readers can react to highlights with emojis:
        </p>
        
        <div style={{ 
          background: '#F9FAFB', 
          border: '1px solid #E5E7EB',
          borderRadius: '0.5rem',
          padding: '1rem'
        }}>
          <span className="article-highlight highlight-insight" style={{ 
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem'
          }}>
            Hover over this highlight to see reactions
          </span>
          
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem', 
            marginTop: '0.75rem',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Reactions:</span>
            {['👍', '❤️', '🤔', '💡'].map((emoji, index) => (
              <button key={emoji} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.25rem 0.5rem',
                border: '1px solid #E5E7EB',
                borderRadius: '1rem',
                background: index === 0 ? '#DBEAFE' : 'white',
                color: index === 0 ? '#3B82F6' : '#6B7280',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}>
                <span>{emoji}</span>
                <span>{index === 0 ? '3' : index === 1 ? '1' : '0'}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#374151', marginBottom: '1rem' }}>
          🚀 Implementation Benefits
        </h3>
        <ul style={{ color: '#6B7280', lineHeight: '1.6' }}>
          <li><strong>Zero bloat:</strong> Just added enum field to existing Highlight object</li>
          <li><strong>Client-side magic:</strong> Share URLs work with fragments, no server changes</li>
          <li><strong>Lightweight reactions:</strong> Simple integer increments in Firestore</li>
          <li><strong>Instant visual feedback:</strong> CSS-only color coding</li>
          <li><strong>Social features:</strong> Shareable highlights increase engagement</li>
        </ul>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        textAlign: 'center'
      }}>
        <h4 style={{ margin: '0 0 0.5rem 0' }}>Ready to highlight smarter? ✨</h4>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Select any text above to try the enhanced highlighting experience!
        </p>
      </div>
    </div>
  );
};

export default HighlightDemo; 