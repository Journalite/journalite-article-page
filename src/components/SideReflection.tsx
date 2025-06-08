'use client'

import React, { useState, useEffect } from 'react';
import { ReflectionPrompt, saveReflectionResponse, getPromptByIndex } from '@/services/reflectionService';
import { SparkleIcon, ThoughtIcon } from './icons/CustomIcons';
import styles from './SideReflection.module.css';

interface SideReflectionProps {
    articleId: string;
    position: number;
    paragraphId: string;
    onResponseSaved?: (response: string) => void;
    customPrompt?: ReflectionPrompt;
}

const SideReflection: React.FC<SideReflectionProps> = ({
    articleId,
    position,
    paragraphId,
    onResponseSaved,
    customPrompt
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
                true
            );
            
            setHasSaved(true);
            setShowThankYou(true);
            onResponseSaved?.(response.trim());

            setTimeout(() => {
                setShowThankYou(false);
            }, 2000);

        } catch (error) {
            console.error('Error saving reflection:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleSkip = () => {
        setIsExpanded(false);
        setHasSaved(true);
    };

    if (!prompt || (hasSaved && !showThankYou)) return null;

    return (
        <div className={styles.sideReflectionContainer}>
            {showThankYou ? (
                <div className={styles.thankYouMessage}>
                    <div className={styles.thankYouIcon}>
                        <SparkleIcon size={20} color="#22c55e" />
                    </div>
                    <p>Saved!</p>
                </div>
            ) : !isExpanded ? (
                <div className={styles.reflectionPrompt} onClick={handleExpand}>
                    <div className={styles.promptIcon}>
                        <ThoughtIcon size={18} color="#6b7280" />
                    </div>
                    <div className={styles.promptText}>
                        {prompt.text}
                    </div>
                    <div className={styles.expandHint}>Tap to reflect</div>
                </div>
            ) : (
                <div className={styles.reflectionForm}>
                    <div className={styles.formHeader}>
                        <div className={styles.promptIcon}>
                            <ThoughtIcon size={18} color="#3b82f6" />
                        </div>
                        <p className={styles.formPrompt}>{prompt.text}</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Your thoughts..."
                            className={styles.responseTextarea}
                            rows={3}
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
                                {isSaving ? '...' : 'Save'}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SideReflection; 