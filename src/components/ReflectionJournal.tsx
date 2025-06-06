'use client'

import React, { useState, useEffect } from 'react';
import { ReflectionJournalEntry, getUserReflectionJournals, deleteReflectionResponse } from '@/services/reflectionService';
import styles from './ReflectionJournal.module.css';

interface ReflectionJournalProps {
    userId?: string;
}

const ReflectionJournal: React.FC<ReflectionJournalProps> = ({ userId }) => {
    const [journals, setJournals] = useState<ReflectionJournalEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedJournal, setSelectedJournal] = useState<ReflectionJournalEntry | null>(null);
    const [articleContent, setArticleContent] = useState<{ title: string; body: string } | null>(null);
    const [loadingArticle, setLoadingArticle] = useState(false);
    const [deletingReflection, setDeletingReflection] = useState<string | null>(null);

    useEffect(() => {
        loadJournals();
    }, [userId]);

    const loadJournals = async () => {
        try {
            console.log('Loading reflection journals...');
            const userJournals = await getUserReflectionJournals(userId);
            console.log('Loaded journals:', userJournals);
            setJournals(userJournals);
        } catch (error) {
            console.error('Error loading reflection journals:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (timestamp: any): string => {
        try {
            const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        } catch (error) {
            return 'Unknown date';
        }
    };

    const loadArticleContent = async (articleId: string) => {
        setLoadingArticle(true);
        setArticleContent(null);
        
        try {
            const { getArticleById } = await import('@/firebase/articles');
            const article = await getArticleById(articleId);
            
            if (article) {
                setArticleContent({
                    title: article.title,
                    body: article.body
                });
            } else {
                setArticleContent({
                    title: 'Article not found',
                    body: 'This article may have been deleted or is no longer available.'
                });
            }
        } catch (error) {
            console.error('Error loading article content:', error);
            setArticleContent({
                title: 'Error loading article',
                body: 'There was an error loading this article content.'
            });
        } finally {
            setLoadingArticle(false);
        }
    };

    const handleDeleteReflection = async (articleId: string, reflectionId: string) => {
        if (!confirm('Are you sure you want to delete this reflection? This action cannot be undone.')) {
            return;
        }
        
        setDeletingReflection(reflectionId);
        
        try {
            const success = await deleteReflectionResponse(articleId, reflectionId);
            
            if (success) {
                // Reload the journals to reflect the changes
                await loadJournals();
                
                // If the current journal has no more reflections, clear the selection
                if (selectedJournal && selectedJournal.articleId === articleId) {
                    const updatedJournal = journals.find(j => j.articleId === articleId);
                    if (!updatedJournal || updatedJournal.responses.length === 0) {
                        setSelectedJournal(null);
                    } else {
                        setSelectedJournal(updatedJournal);
                    }
                }
            } else {
                alert('Failed to delete reflection. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting reflection:', error);
            alert('Error deleting reflection. Please try again.');
        } finally {
            setDeletingReflection(null);
        }
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loading}>
                    <div className={styles.loadingSpinner}></div>
                    <p>Loading your reflection journal...</p>
                </div>
            </div>
        );
    }



    if (journals.length === 0) {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>📓 Your Reflection Journal</h1>
                    <p>Your personal thoughts and reflections from your reading journey</p>
                </div>
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>📖</div>
                    <h3>No reflections yet</h3>
                    <p>Start reading articles and share your thoughts through interactive reflection prompts.</p>
                    <p>Your private reflections will appear here as you engage with content.</p>
                    

                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>📓 Your Reflection Journal</h1>
                <p>Your personal thoughts and reflections from your reading journey</p>
                <div className={styles.stats}>
                    <span>{journals.length} articles reflected on</span>
                    <span>•</span>
                    <span>{journals.reduce((total, journal) => total + journal.responses.length, 0)} reflections</span>
                </div>
                

            </div>

            <div className={styles.journalGrid}>
                <div className={styles.journalList}>
                    <h2>Articles</h2>
                    {journals.map((journal) => (
                        <div 
                            key={journal.articleId}
                            className={`${styles.journalCard} ${selectedJournal?.articleId === journal.articleId ? styles.selected : ''}`}
                            onClick={() => setSelectedJournal(journal)}
                        >
                            <h3 className={styles.articleTitle}>{journal.articleTitle}</h3>
                            <div className={styles.journalMeta}>
                                <span>{journal.responses.length} reflections</span>
                                <span>•</span>
                                <span>{formatDate(journal.updatedAt)}</span>
                            </div>
                            <button 
                                className={styles.readAgainLink}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    loadArticleContent(journal.articleId);
                                }}
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    padding: 0, 
                                    font: 'inherit',
                                    cursor: 'pointer',
                                    color: 'inherit'
                                }}
                            >
                                Read again →
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.reflectionDetails}>
                    {articleContent ? (
                        // Show article content when "Read again" is clicked
                        <div>
                            <div className={styles.detailsHeader}>
                                <h2>{articleContent.title}</h2>
                                <button 
                                    onClick={() => setArticleContent(null)}
                                    style={{ 
                                        background: '#f0f0f0', 
                                        border: 'none', 
                                        padding: '8px 16px', 
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '14px'
                                    }}
                                >
                                    ← Back to reflections
                                </button>
                            </div>
                            {loadingArticle ? (
                                <div style={{ padding: '20px', textAlign: 'center' }}>
                                    <div className={styles.loadingSpinner}></div>
                                    <p>Loading article...</p>
                                </div>
                            ) : (
                                <div 
                                    className={styles.articleContent}
                                    dangerouslySetInnerHTML={{ __html: articleContent.body }}
                                    style={{
                                        padding: '20px',
                                        lineHeight: '1.6',
                                        fontSize: '16px',
                                        maxHeight: '70vh',
                                        overflowY: 'auto'
                                    }}
                                />
                            )}
                        </div>
                    ) : selectedJournal ? (
                        // Show reflections when a journal is selected
                        <>
                            <div className={styles.detailsHeader}>
                                <h2>{selectedJournal.articleTitle}</h2>
                                <p>Reflections from {formatDate(selectedJournal.updatedAt)}</p>
                            </div>

                            <div className={styles.reflectionsList}>
                                {selectedJournal.responses.map((response, index) => (
                                    <div key={response.id} className={styles.reflectionItem}>
                                        <div className={styles.reflectionPrompt} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span className={styles.promptIcon}>💭</span>
                                            <strong style={{ flex: 1 }}>{response.promptText}</strong>
                                            <button
                                                onClick={() => handleDeleteReflection(selectedJournal.articleId, response.id)}
                                                disabled={deletingReflection === response.id}
                                                style={{
                                                    marginLeft: 'auto',
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#dc2626',
                                                    cursor: 'pointer',
                                                    padding: '4px 8px',
                                                    borderRadius: '4px',
                                                    fontSize: '12px',
                                                    opacity: deletingReflection === response.id ? 0.5 : 1
                                                }}
                                                title="Delete reflection"
                                            >
                                                {deletingReflection === response.id ? '⏳' : '🗑️'}
                                            </button>
                                        </div>
                                        <div className={styles.reflectionResponse}>
                                            <p>{response.response}</p>
                                        </div>
                                        <div className={styles.reflectionMeta}>
                                            <small>Position: Paragraph {response.position + 1}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        // Default state when nothing is selected
                        <div className={styles.selectPrompt}>
                            <div className={styles.selectIcon}>👈</div>
                            <h3>Select an article</h3>
                            <p>Choose an article from the left to view your reflections, or click "Read again" to view the full article</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReflectionJournal; 