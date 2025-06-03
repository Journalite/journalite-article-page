'use client'

// Import ProseMirror base styles FIRST
import 'prosemirror-view/style/prosemirror.css';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { toggleMark, setBlockType, baseKeymap } from 'prosemirror-commands';
import { wrapInList } from 'prosemirror-schema-list';
import { undo, redo } from 'prosemirror-history';
import { schema, createEmptyDocument, parseHTML, serializeToHTML } from '@/editor/schema.js';
import { createPlugins } from '@/editor/plugins.js';
import { headingCmd, paragraphCmd, toggleBlockquote } from '@/editor/commands.js';
import styles from '@/styles/Editor.module.css';

/**
 * ProseMirror-based Rich Text Editor
 * 
 * A modern, extensible editor built with ProseMirror
 * 
 * Props:
 * - articleId: string - Unique identifier for the article
 * - initialContent?: string - JSON string or HTML initial content
 * - onChange?: function - Callback when content changes (content: string, json: any) => void
 * - placeholder?: string - Placeholder text for empty editor
 * - className?: string - Additional CSS classes
 */
const Editor = ({
    articleId,
    initialContent = '',
    onChange,
    placeholder = 'Tell your story...',
    className = ''
}) => {
    const editorRef = useRef(null);
    const viewRef = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const [, forceUpdate] = useState(0);

    // Initialize ProseMirror editor
    useEffect(() => {
        // Guard against SSR - ProseMirror needs browser environment
        if (typeof window === 'undefined') {
            console.log('Editor: Running on server, skipping initialization');
            return;
        }

        console.log('Editor: useEffect running on client');
        console.log('Editor: editorRef.current:', editorRef.current);
        console.log('Editor: viewRef.current:', viewRef.current);

        if (!editorRef.current) {
            console.log('Editor: editorRef.current is null, cannot initialize');
            return;
        }

        if (viewRef.current) {
            console.log('Editor: viewRef.current already exists, skipping');
            return;
        }

        try {
            console.log('Editor: Starting initialization...');

            // Parse initial content
            let initialDoc;
            try {
                if (initialContent) {
                    // Try to parse as JSON first, then as HTML
                    if (initialContent.startsWith('{')) {
                        const jsonDoc = JSON.parse(initialContent);
                        initialDoc = schema.nodeFromJSON(jsonDoc);
                    } else {
                        // Clean HTML and parse
                        const cleanHtml = initialContent
                            .replace(/<div[^>]*>Content is loaded from HTML<\/div>/g, '')
                            .replace(/<h1[^>]*>Untitled Article<\/h1>/g, '');
                        initialDoc = parseHTML(cleanHtml);
                    }
                } else {
                    initialDoc = createEmptyDocument();
                }
                console.log('Editor: Initial document created successfully');
            } catch (error) {
                console.error('Error parsing initial content:', error);
                initialDoc = createEmptyDocument();
            }

            // Validate that we have a valid document
            if (!initialDoc) {
                console.error('Failed to create initial document');
                initialDoc = createEmptyDocument();
            }

            console.log('Editor: Creating editor state...');
            // Create editor state
            const state = EditorState.create({
                doc: initialDoc,
                plugins: createPlugins()
            });

            console.log('Editor: Creating editor view...');
            // Create editor view
            const view = new EditorView(editorRef.current, {
                state,
                dispatchTransaction: (transaction) => {
                    const newState = view.state.apply(transaction);
                    view.updateState(newState);

                    // 1) fire onChange only when the *document* changed
                    if (transaction.docChanged && onChange) {
                        const html = serializeToHTML(newState.doc);
                        const json = newState.doc.toJSON();
                        onChange(html, json);
                    }

                    // 2) but force a React re-render whenever *either*
                    //    the document OR the selection changed
                    if (transaction.docChanged || transaction.selectionSet) {
                        forceUpdate(v => v + 1);        // <- one line does the trick
                    }
                },
                attributes: {
                    class: `${styles.prosemirrorEditor} prosemirror-content`,
                    'data-placeholder': placeholder,
                    'contenteditable': 'true',
                    'role': 'textbox',
                    'aria-multiline': 'true'
                },
                editable: () => true,
                handleDOMEvents: {
                    // Ensure proper focus handling
                    focus: (view, event) => {
                        console.log('Editor focused');
                        return false; // Let ProseMirror handle it
                    },
                    blur: (view, event) => {
                        console.log('Editor blurred');
                        return false; // Let ProseMirror handle it
                    }
                }
            });

            console.log('Editor: EditorView created successfully');
            viewRef.current = view;
            setIsReady(true);
            console.log('Editor: setIsReady(true) called - editor should now be visible');

        } catch (error) {
            console.error('Error initializing editor:', error);
            console.error('Error details:', error.message, error.stack);
            // Set ready to true anyway to show the editor, even if there was an error
            setIsReady(true);
        }

        // Cleanup function
        return () => {
            if (viewRef.current) {
                console.log('Editor: Cleaning up view');
                viewRef.current.destroy();
                viewRef.current = null;
            }
        };
    }, []);

    // Toolbar action handlers - simplified
    const toggleBold = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        toggleMark(schema.marks.strong)(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, []);

    const toggleItalic = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        toggleMark(schema.marks.em)(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, []);

    const setHeading = useCallback((level) => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        headingCmd(level)(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, []);

    const setParagraph = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        paragraphCmd()(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, []);

    const setBlockquote = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        toggleBlockquote(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, [forceUpdate]);

    const setCodeBlock = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        setBlockType(schema.nodes.code_block)(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, []);

    const toggleBulletList = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        wrapInList(schema.nodes.bullet_list)(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, []);

    const toggleOrderedList = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        wrapInList(schema.nodes.ordered_list)(state, dispatch, viewRef.current);
        viewRef.current.focus();
    }, []);

    const insertImage = useCallback(() => {
        const url = prompt('Enter image URL:');
        if (url && viewRef.current) {
            const { state, dispatch } = viewRef.current;
            const imageNode = schema.nodes.image.create({ src: url, alt: '' });
            const transaction = state.tr.replaceSelectionWith(imageNode);
            dispatch(transaction);
            viewRef.current.focus();
        }
    }, []);

    const undoCommand = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        undo(state, dispatch);
        viewRef.current.focus();
    }, []);

    const redoCommand = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        redo(state, dispatch);
        viewRef.current.focus();
    }, []);

    // Check if a mark or node is active (range-aware for multi-block selections)
    const isMarkActive = useCallback((markType) => {
        if (!viewRef.current) return false;
        const { from, $from, to, empty } = viewRef.current.state.selection;
        if (empty) {
            return markType.isInSet(viewRef.current.state.storedMarks || $from.marks());
        }
        return viewRef.current.state.doc.rangeHasMark(from, to, markType);
    }, [forceUpdate]);

    const isBlockActive = useCallback((nodeType, attrs = {}) => {
        if (!viewRef.current) return false;
        const { from, to } = viewRef.current.state.selection;
        let allMatch = true;

        viewRef.current.state.doc.nodesBetween(from, to, node => {
            if (node.isTextblock && !node.hasMarkup(nodeType, attrs)) {
                allMatch = false;
                return false;          // early exit
            }
            return true;
        });
        return allMatch;
    }, [forceUpdate]);

    const isInBlockquote = useCallback(() => {
        if (!viewRef.current) return false;
        const { from, to } = viewRef.current.state.selection;
        let inQuote = false;
        viewRef.current.state.doc.nodesBetween(from, to, node => {
            if (node.type === schema.nodes.blockquote) {
                inQuote = true;
                return false;              // early exit
            }
            return true;
        });
        return inQuote;
    }, [forceUpdate]);

    return (
        <div className={`${styles.editor} ${className}`}>
            {/* Conditionally show toolbar only when ready */}
            {isReady ? (
                <div className={styles.toolbar}>
                    {/* Text formatting */}
                    <div className={styles.toolbarGroup}>
                        <button
                            className={`${styles.toolbarButton} ${isMarkActive(schema.marks.strong) ? styles.active : ''}`}
                            onClick={toggleBold}
                            title="Bold (⌘/Ctrl+B)"
                        >
                            <strong>B</strong>
                        </button>
                        <button
                            className={`${styles.toolbarButton} ${isMarkActive(schema.marks.em) ? styles.active : ''}`}
                            onClick={toggleItalic}
                            title="Italic (⌘/Ctrl+I)"
                        >
                            <em>I</em>
                        </button>
                    </div>

                    {/* Block types */}
                    <div className={styles.toolbarGroup}>
                        <button
                            className={`${styles.toolbarButton} ${isBlockActive(schema.nodes.paragraph) ? styles.active : ''}`}
                            onClick={setParagraph}
                            title="Paragraph (⌘/Ctrl+0)"
                        >
                            P
                        </button>
                        <button
                            className={`${styles.toolbarButton} ${isBlockActive(schema.nodes.heading, { level: 1 }) ? styles.active : ''}`}
                            onClick={() => setHeading(1)}
                            title="Heading 1 (⌘/Ctrl+Shift+1)"
                        >
                            H1
                        </button>
                        <button
                            className={`${styles.toolbarButton} ${isBlockActive(schema.nodes.heading, { level: 2 }) ? styles.active : ''}`}
                            onClick={() => setHeading(2)}
                            title="Heading 2 (⌘/Ctrl+Shift+2)"
                        >
                            H2
                        </button>
                        <button
                            className={`${styles.toolbarButton} ${isBlockActive(schema.nodes.heading, { level: 3 }) ? styles.active : ''}`}
                            onClick={() => setHeading(3)}
                            title="Heading 3 (⌘/Ctrl+Shift+3)"
                        >
                            H3
                        </button>
                    </div>

                    {/* Lists and blocks */}
                    <div className={styles.toolbarGroup}>
                        <button
                            className={styles.toolbarButton}
                            onClick={toggleBulletList}
                            title="Bullet List"
                        >
                            • List
                        </button>
                        <button
                            className={styles.toolbarButton}
                            onClick={toggleOrderedList}
                            title="Ordered List"
                        >
                            1. List
                        </button>
                        <button
                            className={`${styles.toolbarButton} ${isInBlockquote() ? styles.active : ''}`}
                            onClick={setBlockquote}
                            title="Blockquote (⌘/Ctrl+>)"
                        >
                            " Quote
                        </button>
                        <button
                            className={`${styles.toolbarButton} ${isBlockActive(schema.nodes.code_block) ? styles.active : ''}`}
                            onClick={setCodeBlock}
                            title="Code Block"
                        >
                            &lt;/&gt;
                        </button>
                    </div>

                    {/* Media and actions */}
                    <div className={styles.toolbarGroup}>
                        <button
                            className={styles.toolbarButton}
                            onClick={insertImage}
                            title="Insert Image"
                        >
                            🖼️ Image
                        </button>
                    </div>

                    {/* History */}
                    <div className={styles.toolbarGroup}>
                        <button
                            className={styles.toolbarButton}
                            onClick={undoCommand}
                            title="Undo (⌘/Ctrl+Z)"
                        >
                            ↶ Undo
                        </button>
                        <button
                            className={styles.toolbarButton}
                            onClick={redoCommand}
                            title="Redo (⌘/Ctrl+Y)"
                        >
                            ↷ Redo
                        </button>
                    </div>

                    {/* Keyboard shortcuts hint */}
                    <div className={styles.keyboardHint}>
                        <kbd>⌘B</kbd> Bold &nbsp; <kbd>⌘I</kbd> Italic &nbsp; <kbd>⌘⇧1-3</kbd> Headings
                    </div>
                </div>
            ) : (
                <div className={styles.loading}>Loading editor...</div>
            )}

            {/* Always render the editor container so the ref can attach */}
            <div
                ref={editorRef}
                className={`ProseMirror ${styles.editorContent}`}
                aria-label="Rich text editor"
                style={{
                    minHeight: '300px',
                    opacity: isReady ? 1 : 0.5
                }}
            />
        </div>
    );
};

export default Editor; 