'use client'

import React, { useState } from 'react';
import { getReflectionInspiration, getReflectionThemes } from '@/services/reflectionService';
import { InspirationIcon, BulbIcon, ThoughtIcon, PaletteIcon } from './icons/CustomIcons';
// import { useEffect, LoadingIcon } from 'react' and './icons/CustomIcons'; // Unused
import styles from './InspirationWidget.module.css';

interface InspirationWidgetProps {
    onInsert?: (text: string) => void;
}

const InspirationWidget: React.FC<InspirationWidgetProps> = ({ onInsert }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inspirations, setInspirations] = useState<Array<{response: string, articleTitle?: string, promptText?: string}>>([]);
    const [themes, setThemes] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState<'inspirations' | 'themes'>('inspirations');

    const loadInspirationData = async () => {
        setLoading(true);
        try {
            const [inspirationData, themeData] = await Promise.all([
                getReflectionInspiration(),
                getReflectionThemes()
            ]);
            setInspirations(inspirationData);
            setThemes(themeData);
        } catch (error) {
            console.error('Error loading inspiration data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = () => {
        if (!isOpen) {
            loadInspirationData();
        }
        setIsOpen(!isOpen);
    };

    const handleInsert = (text: string) => {
        if (onInsert) {
            onInsert(text);
        }
        setIsOpen(false);
    };

    const generateWritingPrompt = (theme: string) => {
        const prompts = {
            'emotions': 'Explore a moment when your emotions surprised you...',
            'decision-making': 'Write about a decision that changed your perspective...',
            'personal experience': 'Reflect on an experience that shaped who you are today...',
            'questioning': 'What questions have been on your mind lately?',
            'unexpected insights': 'Share something that recently surprised you...',
            'perspectives': 'How has your viewpoint on something important changed?',
            'dialogue with authors': 'What would you say to an author whose work moved you?',
            'connections': 'Write about connections you\'ve discovered between different ideas...'
        };
        return prompts[theme as keyof typeof prompts] || `Write about ${theme}...`;
    };

    if (!isOpen) {
        return (
            <button
                onClick={handleToggle}
                className={styles.inspirationButton}
                title="Get inspiration from your reflections"
            >
                <InspirationIcon size={16} color="currentColor" />
                Inspiration
            </button>
        );
    }

    return (
        <div className={styles.inspirationWidget}>
            <div className={styles.header}>
                <h3>
                    <BulbIcon size={18} color="#f59e0b" />
                    Your Reflection Insights
                </h3>
                <button 
                    onClick={() => setIsOpen(false)}
                    className={styles.closeButton}
                >
                    ×
                </button>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'inspirations' ? styles.active : ''}`}
                    onClick={() => setActiveTab('inspirations')}
                >
                    Recent Thoughts ({inspirations.length})
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'themes' ? styles.active : ''}`}
                    onClick={() => setActiveTab('themes')}
                >
                    Writing Themes ({themes.length})
                </button>
            </div>

            <div className={styles.content}>
                {loading ? (
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Loading your insights...</p>
                    </div>
                ) : activeTab === 'inspirations' ? (
                    <div className={styles.inspirationsList}>
                        {inspirations.length === 0 ? (
                            <div className={styles.empty}>
                                <p>
                                    <ThoughtIcon size={16} color="#6b7280" />
                                    No reflections yet!
                                </p>
                                <p>Start reading articles and reflecting to build your inspiration library.</p>
                            </div>
                        ) : (
                            <>
                                <p className={styles.subtitle}>Your past reflections that might spark new ideas:</p>
                                {inspirations.map((inspiration, index) => (
                                    <div key={index} className={styles.inspirationItem}>
                                        <p>"{inspiration.response}"</p>
                                        {inspiration.articleTitle && (
                                            <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                                                From: {inspiration.articleTitle}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => {
                                                const attribution = inspiration.articleTitle ? ` (inspired by "${inspiration.articleTitle}")` : '';
                                                handleInsert(`"${inspiration.response}"${attribution} - This reminds me of...`);
                                            }}
                                            className={styles.useButton}
                                        >
                                            Use as starting point
                                        </button>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                ) : (
                    <div className={styles.themesList}>
                        {themes.length === 0 ? (
                            <div className={styles.empty}>
                                <p>
                                    <PaletteIcon size={16} color="#6b7280" />
                                    No themes identified yet!
                                </p>
                                <p>Keep reflecting on articles to discover your writing themes.</p>
                            </div>
                        ) : (
                            <>
                                <p className={styles.subtitle}>Writing prompts based on your reflection patterns:</p>
                                {themes.map((theme, index) => (
                                    <div key={index} className={styles.themeItem}>
                                        <div className={styles.themeTag}>{theme}</div>
                                        <p className={styles.themePrompt}>{generateWritingPrompt(theme)}</p>
                                        <button
                                            onClick={() => handleInsert(generateWritingPrompt(theme))}
                                            className={styles.useButton}
                                        >
                                            Start writing
                                        </button>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>

            <div className={styles.footer}>
                <button
                    onClick={loadInspirationData}
                    className={styles.refreshButton}
                    disabled={loading}
                >
                    🔄 Refresh insights
                </button>
            </div>
        </div>
    );
};

export default InspirationWidget; 