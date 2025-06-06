'use client'

import React, { useState, useEffect } from 'react';
import { ReflectionPrompt, saveReflectionResponse, getPromptByIndex } from '@/services/reflectionService';
import styles from './InlineReflection.module.css';

interface InlineReflectionProps {
    articleId: string;
    position: number; // Paragraph index or percentage where this appears
    customPrompt?: ReflectionPrompt;
    onResponseSaved?: (response: string) => void;
    className?: string;
}

const InlineReflection: React.FC<InlineReflectionProps> = ({
    articleId,
    position,
    customPrompt,
    onResponseSaved,
    className
}) => {
    const [prompt, setPrompt] = useState<ReflectionPrompt | null>(
        customPrompt || getPromptByIndex(position)
    );
    const [response, setResponse] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [hasSaved, setHasSaved] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    useEffect(() => {
        // Use custom prompt or get one by position for faster, predictable rendering
        const selectedPrompt = customPrompt || getPromptByIndex(position);
        setPrompt(selectedPrompt);
    }, [customPrompt, position]);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!response.trim() || !prompt) return;

        setIsSaving(true);
        try {
            await saveReflectionResponse(
                articleId,
                prompt.id,
                prompt.text,
                response.trim(),
                position,
                true // Private by default
            );
            
            setHasSaved(true);
            setShowThankYou(true);
            onResponseSaved?.(response.trim());

            // Hide thank you message after 3 seconds
            setTimeout(() => {
                setShowThankYou(false);
            }, 3000);

        } catch (error) {
            console.error('Error saving reflection:', error);
            // Could show an error toast here
        } finally {
            setIsSaving(false);
        }
    };

    const handleSkip = () => {
        setIsExpanded(false);
        setHasSaved(true);
    };

    if (!prompt) return null;

    if (hasSaved && !showThankYou) {
        return null; // Hide the component after saving
    }

    return (
        <div className={`${styles.reflectionContainer} ${className || ''}`}>
            {showThankYou ? (
                <div className={styles.thankYouMessage}>
                    <div className={styles.thankYouIcon}>✨</div>
                    <p>Thank you for sharing your reflection!</p>
                    <small>Your thoughts have been saved to your private reading journal.</small>
                </div>
            ) : !isExpanded ? (
                <div className={styles.reflectionPrompt} onClick={handleExpand}>
                    <div className={styles.promptIcon}>💭</div>
                    <div className={styles.promptContent}>
                        <p className={styles.promptText}>{prompt.text}</p>
                        <small className={styles.promptHint}>Click to reflect and respond</small>
                    </div>
                    <div className={styles.expandIcon}>→</div>
                </div>
            ) : (
                <div className={styles.reflectionForm}>
                    <div className={styles.formHeader}>
                        <div className={styles.promptIcon}>💭</div>
                        <h4 className={styles.formTitle}>{prompt.text}</h4>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Share your thoughts... (This will be saved privately to your reading journal)"
                            className={styles.responseTextarea}
                            rows={4}
                            autoFocus
                        />
                        
                        <div className={styles.formActions}>
                            <button
                                type="button"
                                onClick={handleSkip}
                                className={styles.skipButton}
                                disabled={isSaving}
                            >
                                Skip
                            </button>
                            <button
                                type="submit"
                                className={styles.saveButton}
                                disabled={!response.trim() || isSaving}
                            >
                                {isSaving ? 'Saving...' : 'Save Reflection'}
                            </button>
                        </div>
                    </form>
                    
                    <small className={styles.privacyNote}>
                        🔒 Your reflections are private and only visible to you
                    </small>
                </div>
            )}
        </div>
    );
};

export default InlineReflection; 