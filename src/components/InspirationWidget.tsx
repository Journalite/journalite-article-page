'use client'

import React, { useState } from 'react';
import { getReflectionInspiration, getReflectionThemes } from '@/services/reflectionService';
import { InspirationIcon, BulbIcon, ThoughtIcon, PaletteIcon } from './icons/CustomIcons';
// import { useEffect, LoadingIcon } from 'react' and './icons/CustomIcons'; // Unused
import styles from '@/styles/home.module.css';

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
            <div className="fixed bottom-8 right-8 z-40">
                <button
                    onClick={handleToggle}
                    className={`${styles['glass-button']} ${styles['glass-button-primary']} flex items-center gap-2 px-6 py-4 text-sm font-semibold`}
                    title="Get inspiration from your reflections"
                >
                    <InspirationIcon size={16} color="currentColor" />
                    Inspiration
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-8 right-8 z-40 w-96">
            <div className={`${styles['glass-modal']} max-h-96 overflow-hidden`}>
                <div className={styles['glass-highlight']} />
                
                <div className={styles['glass-content']}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/20">
                        <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2 font-serif">
                            <BulbIcon size={18} color="#f59e0b" />
                            Your Reflection Insights
                        </h3>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-stone-500 hover:text-stone-700 text-xl font-bold leading-none"
                        >
                            ×
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex p-4 gap-2">
                        <button
                            className={`${styles['glass-tag']} flex-1 text-center py-2 text-sm font-semibold transition-all ${
                                activeTab === 'inspirations' 
                                    ? 'bg-blue-500/20 text-blue-700 border-blue-300/30' 
                                    : 'hover:bg-white/20'
                            }`}
                            onClick={() => setActiveTab('inspirations')}
                        >
                            Recent Thoughts ({inspirations.length})
                        </button>
                        <button
                            className={`${styles['glass-tag']} flex-1 text-center py-2 text-sm font-semibold transition-all ${
                                activeTab === 'themes' 
                                    ? 'bg-blue-500/20 text-blue-700 border-blue-300/30' 
                                    : 'hover:bg-white/20'
                            }`}
                            onClick={() => setActiveTab('themes')}
                        >
                            Writing Themes ({themes.length})
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 max-h-64 overflow-y-auto">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-8 text-center">
                                <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                                <p className="text-stone-600">Loading your insights...</p>
                            </div>
                        ) : activeTab === 'inspirations' ? (
                            <div>
                                {inspirations.length === 0 ? (
                                    <div className="text-center py-8">
                                        <div className="flex items-center justify-center gap-2 text-stone-500 mb-2">
                                            <ThoughtIcon size={16} color="#6b7280" />
                                            <p className="font-semibold">No reflections yet!</p>
                                        </div>
                                        <p className="text-sm text-stone-500">Start reading articles and reflecting to build your inspiration library.</p>
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-sm text-stone-600 mb-4 font-semibold">Your past reflections that might spark new ideas:</p>
                                        <div className="space-y-3">
                                            {inspirations.map((inspiration, index) => (
                                                <div key={index} className={`${styles['glass-card']} p-4`}>
                                                    <div className={styles['glass-card-highlight']} />
                                                    <div className="relative z-10">
                                                        <p className="text-sm text-stone-700 italic mb-2">"{inspiration.response}"</p>
                                                        {inspiration.articleTitle && (
                                                            <p className="text-xs text-stone-500 mb-3">
                                                                From: {inspiration.articleTitle}
                                                            </p>
                                                        )}
                                                        <button
                                                            onClick={() => {
                                                                const attribution = inspiration.articleTitle ? ` (inspired by "${inspiration.articleTitle}")` : '';
                                                                handleInsert(`"${inspiration.response}"${attribution} - This reminds me of...`);
                                                            }}
                                                            className={`${styles['glass-button']} ${styles['glass-button-primary']} text-xs px-3 py-1 w-full`}
                                                        >
                                                            Use as starting point
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div>
                                {themes.length === 0 ? (
                                    <div className="text-center py-8">
                                        <div className="flex items-center justify-center gap-2 text-stone-500 mb-2">
                                            <PaletteIcon size={16} color="#6b7280" />
                                            <p className="font-semibold">No themes identified yet!</p>
                                        </div>
                                        <p className="text-sm text-stone-500">Keep reflecting on articles to discover your writing themes.</p>
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-sm text-stone-600 mb-4 font-semibold">Writing prompts based on your reflection patterns:</p>
                                        <div className="space-y-3">
                                            {themes.map((theme, index) => (
                                                <div key={index} className={`${styles['glass-card']} p-4`}>
                                                    <div className={styles['glass-card-highlight']} />
                                                    <div className="relative z-10">
                                                        <div className={`${styles['glass-tag']} inline-block mb-2 text-xs`}>{theme}</div>
                                                        <p className="text-sm text-stone-700 mb-3">{generateWritingPrompt(theme)}</p>
                                                        <button
                                                            onClick={() => handleInsert(generateWritingPrompt(theme))}
                                                            className={`${styles['glass-button']} ${styles['glass-button-primary']} text-xs px-3 py-1 w-full`}
                                                        >
                                                            Start writing
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-white/20">
                        <button
                            onClick={loadInspirationData}
                            className={`${styles['glass-button']} text-sm px-4 py-2 w-full disabled:opacity-50`}
                            disabled={loading}
                        >
                            🔄 Refresh insights
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InspirationWidget; 