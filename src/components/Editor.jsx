'use client'

// Import ProseMirror base styles FIRST
import 'prosemirror-view/style/prosemirror.css';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { EditorState, TextSelection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { toggleMark, setBlockType, baseKeymap } from 'prosemirror-commands';
import { wrapInList, splitListItem, liftListItem, sinkListItem } from 'prosemirror-schema-list';
import { undo, redo, history } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';
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
const Editor = React.forwardRef(({
    articleId,
    initialContent = '',
    onChange,
    placeholder = 'Tell your story...',
    className = ''
}, ref) => {
    const editorRef = useRef(null);
    const viewRef = useRef(null);
    const onChangeRef = useRef(onChange); // Store onChange in ref to avoid re-renders
    const [isReady, setIsReady] = useState(false);

    // Update onChange ref when it changes
    onChangeRef.current = onChange;

    // Method to insert text at cursor position
    const insertTextAtCursor = useCallback((text) => {
        if (!viewRef.current) return;

        const { state, dispatch } = viewRef.current;
        const { selection } = state;

        // Create a text node with the new content
        const textNode = schema.text(text);

        // Create transaction to insert text at current position
        const transaction = state.tr.replaceSelectionWith(textNode);

        // Apply the transaction
        dispatch(transaction);

        // Focus the editor
        viewRef.current.focus();
    }, []);

    // Expose method to parent component
    React.useImperativeHandle(ref, () => ({
        insertText: insertTextAtCursor,
        focus: () => viewRef.current?.focus()
    }), [insertTextAtCursor]);

    // Initialize ProseMirror editor
    useEffect(() => {
        // Guard against SSR - ProseMirror needs browser environment
        if (typeof window === 'undefined') {
            return;
        }

        if (!editorRef.current || viewRef.current) {
            return;
        }

        try {
            // Create document with initial content if provided
            let initialDoc;
            if (initialContent && initialContent.trim()) {
                console.log('Editor: Loading initial content, length:', initialContent.length);
                try {
                    initialDoc = parseHTML(initialContent);
                    console.log('Editor: Successfully parsed HTML content');
                } catch (parseError) {
                    console.error('Editor: Failed to parse HTML content:', parseError);
                    initialDoc = createEmptyDocument();
                }
            } else {
                console.log('Editor: No initial content, creating empty document');
                initialDoc = createEmptyDocument();
            }

            // Debug: console.log('Created initial document:', initialDoc.toJSON());

            // Add back essential plugins gradually
            const state = EditorState.create({
                doc: initialDoc,
                plugins: [
                    keymap({
                        // Custom shortcuts FIRST (higher priority)
                        'Mod-b': toggleMark(schema.marks.strong),
                        'Mod-i': toggleMark(schema.marks.em),
                        'Mod-z': undo,
                        'Mod-y': redo,
                        // Auto-formatting shortcuts
                        'Enter': splitListItem(schema.nodes.list_item),
                        'Mod-[': liftListItem(schema.nodes.list_item),
                        'Mod-]': sinkListItem(schema.nodes.list_item),
                        'Space': (state, dispatch) => {
                            const { $from } = state.selection;

                            console.log("🕵️‍♂️ Space handler triggered. beforeCursor:", $from.parent.textContent.slice(0, $from.parentOffset));

                            if ($from.parent.type === schema.nodes.paragraph) {
                                const beforeCursor = $from.parent.textContent.slice(0, $from.parentOffset);

                                // Auto-heading: ## + space = H2, ### + space = H3
                                const headingMatch = beforeCursor.match(/^(#{1,6})$/);
                                if (headingMatch) {
                                    const level = headingMatch[1].length;
                                    const tr = state.tr
                                        .delete($from.start(), $from.pos)
                                        .setBlockType($from.start(), $from.start(), schema.nodes.heading, { level });
                                    dispatch(tr);
                                    return true;
                                }

                                // Auto-bold: **text** + space = bold
                                const boldMatch = beforeCursor.match(/\*\*([^*]+)\*\*$/);
                                if (boldMatch) {
                                    const start = $from.pos - boldMatch[0].length;
                                    const tr = state.tr
                                        .delete(start, $from.pos)
                                        .insertText(boldMatch[1] + ' ', start)
                                        .addMark(start, start + boldMatch[1].length, schema.marks.strong);
                                    dispatch(tr);
                                    return true;
                                }

                                // Auto-italic: *text* + space = italic
                                const italicMatch = beforeCursor.match(/(?<!\*)\*([^*]+)\*$/);
                                if (italicMatch) {
                                    const start = $from.pos - italicMatch[0].length;
                                    const tr = state.tr
                                        .delete(start, $from.pos)
                                        .insertText(italicMatch[1] + ' ', start)
                                        .addMark(start, start + italicMatch[1].length, schema.marks.em);
                                    dispatch(tr);
                                    return true;
                                }

                                // Auto-code: `text` + space = inline code
                                const codeMatch = beforeCursor.match(/`([^`]+)`$/);
                                if (codeMatch) {
                                    const start = $from.pos - codeMatch[0].length;
                                    const tr = state.tr
                                        .delete(start, $from.pos)
                                        .insertText(codeMatch[1] + ' ', start)
                                        .addMark(start, start + codeMatch[1].length, schema.marks.code);
                                    dispatch(tr);
                                    return true;
                                }

                                // Auto-bullet list: - + space or * + space = bullet list
                                const bulletMatch = beforeCursor.match(/^[-*]$/);
                                if (bulletMatch) {
                                    console.log('Bullet list match:', bulletMatch[0]);
                                    try {
                                        // Create a simple list item with empty paragraph
                                        const listItem = schema.nodes.list_item.create(null,
                                            schema.nodes.paragraph.create()
                                        );
                                        const bulletList = schema.nodes.bullet_list.create(null, listItem);

                                        // Delete exactly the dash/asterisk character
                                        const dashPos = $from.pos - 1; // Position of the dash
                                        let tr = state.tr
                                            .delete(dashPos, $from.pos) // Remove exactly the - or *
                                            .replaceWith(dashPos, dashPos, bulletList);

                                        // Position cursor inside list item (after the transaction is built)
                                        tr = tr.setSelection(TextSelection.create(tr.doc, dashPos + 2));

                                        dispatch(tr);
                                        console.log('Auto bullet list creation: success');
                                        return true;
                                    } catch (error) {
                                        console.log('Auto bullet list creation failed:', error);
                                    }
                                }

                                // Auto-ordered list: 1. + space = ordered list
                                const orderedMatch = beforeCursor.match(/^1\.$/);
                                if (orderedMatch) {
                                    console.log('Ordered list match:', orderedMatch[0]);
                                    try {
                                        // Create a simple list item with empty paragraph
                                        const listItem = schema.nodes.list_item.create(null,
                                            schema.nodes.paragraph.create()
                                        );
                                        const orderedList = schema.nodes.ordered_list.create(null, listItem);

                                        // Delete exactly the "1." characters
                                        const numberedPos = $from.pos - 2; // Position of the "1."
                                        let tr = state.tr
                                            .delete(numberedPos, $from.pos) // Remove exactly the 1.
                                            .replaceWith(numberedPos, numberedPos, orderedList);

                                        // Position cursor inside list item (after the transaction is built)
                                        tr = tr.setSelection(TextSelection.create(tr.doc, numberedPos + 2));

                                        dispatch(tr);
                                        console.log('Auto ordered list creation: success');
                                        return true;
                                    } catch (error) {
                                        console.log('Auto ordered list creation failed:', error);
                                    }
                                }
                            }

                            // Default space behavior
                            return false;
                        }
                    }),
                    keymap(baseKeymap), // Base keymap AFTER custom
                    history(), // For undo/redo
                    dropCursor(),
                    gapCursor()
                ]
            });

            // Add back minimal transaction handling
            const view = new EditorView(editorRef.current, {
                state,
                editable: () => true,
                dispatchTransaction: (transaction) => {
                    // Apply transaction normally
                    const newState = view.state.apply(transaction);
                    view.updateState(newState);

                    // Call onChange only when content actually changes
                    if (transaction.docChanged && onChangeRef.current) {
                        const html = serializeToHTML(newState.doc);
                        const json = newState.doc.toJSON();
                        onChangeRef.current(html, json);
                    }
                },
                attributes: {
                    'data-placeholder': placeholder || 'Tell your story...',
                },
            });

            viewRef.current = view;
            setIsReady(true);

            // Focus the editor after it's ready
            setTimeout(() => {
                if (view && !view.isDestroyed) {
                    view.focus();
                }
            }, 100);

        } catch (error) {
            console.error('Error initializing editor:', error);
            setIsReady(true);
        }

        // Cleanup function
        return () => {
            if (viewRef.current) {
                viewRef.current.destroy();
                viewRef.current = null;
            }
        };
    }, []); // Only initialize once

    // Separate effect to handle initialContent changes without destroying editor
    useEffect(() => {
        if (!viewRef.current || !isReady || !initialContent) return;

        console.log('Editor: Updating content without reinitializing, length:', initialContent.length);

        try {
            const newDoc = parseHTML(initialContent);
            const currentContent = serializeToHTML(viewRef.current.state.doc);

            // Only update if content is actually different
            if (initialContent !== currentContent) {
                const transaction = viewRef.current.state.tr.replaceWith(
                    0,
                    viewRef.current.state.doc.content.size,
                    newDoc.content
                );
                viewRef.current.dispatch(transaction);
                console.log('Editor: Content updated successfully');
            }
        } catch (error) {
            console.error('Editor: Failed to update content:', error);
        }
    }, [initialContent, isReady]);

    // Toolbar action handlers - properly implemented
    const toggleBold = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        const command = toggleMark(schema.marks.strong);
        if (command(state, dispatch)) {
            viewRef.current.focus();
        }
    }, []);

    const toggleItalic = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        const command = toggleMark(schema.marks.em);
        if (command(state, dispatch)) {
            viewRef.current.focus();
        }
    }, []);

    const setHeading = useCallback((level) => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        const command = headingCmd(level);
        if (command(state, dispatch, viewRef.current)) {
            viewRef.current.focus();
        }
    }, []);

    const setParagraph = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        const command = paragraphCmd();
        if (command(state, dispatch, viewRef.current)) {
            viewRef.current.focus();
        }
    }, []);

    const setBlockquote = useCallback(() => {
        if (!viewRef.current) return;
        const { state, dispatch } = viewRef.current;
        const command = toggleBlockquote;
        if (command(state, dispatch, viewRef.current)) {
            viewRef.current.focus();
        }
    }, []);

    const setCodeBlock = useCallback(() => {
        if (!viewRef.current) return;

        // Ask user for language
        const language = prompt('Enter programming language (e.g., javascript, python, css):', 'javascript');
        if (!language) return;

        const { state, dispatch } = viewRef.current;
        const { from, to } = state.selection;

        // Create code block with language attribute
        const codeBlock = schema.nodes.code_block.create({ language: language.toLowerCase() });
        const transaction = state.tr.replaceRangeWith(from, to, codeBlock);

        if (dispatch) {
            dispatch(transaction);
            viewRef.current.focus();
        }
    }, []);

    const toggleBulletList = useCallback(() => {
        if (!viewRef.current) return;
        console.log('Bullet list button clicked');
        const { state, dispatch } = viewRef.current;
        const { $from, $to } = state.selection;

        try {
            // Try simple list creation approach
            const listItem = schema.nodes.list_item.create(null,
                schema.nodes.paragraph.create(null, $from.parent.content)
            );
            const bulletList = schema.nodes.bullet_list.create(null, listItem);

            const tr = state.tr.replaceWith($from.start(), $to.end(), bulletList);
            dispatch(tr);
            console.log('Manual bullet list creation: success');
            viewRef.current.focus();
        } catch (error) {
            console.log('Manual bullet list creation failed:', error);
            // Fallback to wrapInList
            const command = wrapInList(schema.nodes.bullet_list);
            const result = command(state, dispatch);
            console.log('wrapInList fallback result:', result);
            if (result) viewRef.current.focus();
        }
    }, []);

    const toggleOrderedList = useCallback(() => {
        if (!viewRef.current) return;
        console.log('Ordered list button clicked');
        const { state, dispatch } = viewRef.current;
        const { $from, $to } = state.selection;

        try {
            // Try simple list creation approach
            const listItem = schema.nodes.list_item.create(null,
                schema.nodes.paragraph.create(null, $from.parent.content)
            );
            const orderedList = schema.nodes.ordered_list.create(null, listItem);

            const tr = state.tr.replaceWith($from.start(), $to.end(), orderedList);
            dispatch(tr);
            console.log('Manual ordered list creation: success');
            viewRef.current.focus();
        } catch (error) {
            console.log('Manual ordered list creation failed:', error);
            // Fallback to wrapInList
            const command = wrapInList(schema.nodes.ordered_list);
            const result = command(state, dispatch);
            console.log('wrapInList fallback result:', result);
            if (result) viewRef.current.focus();
        }
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
    }, []);

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
    }, []);

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
    }, []);

    return (
        <div className={`${styles.editor} ${className === 'seamless-editor' ? styles.seamlessEditor : ''}`} style={className === 'seamless-editor' ? {} : { maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            {/* Modern Toolbar - Always visible for now */}
            {isReady && (
                <div className={styles.modernToolbar} style={className === 'seamless-editor' ? {} : { opacity: 1, visibility: 'visible', position: 'relative', top: 'auto', left: 'auto', transform: 'none', marginBottom: '20px' }}>
                    <div className={styles.toolbarContainer}>
                        {/* Text formatting */}
                        <div className={styles.formatGroup}>
                            <button
                                className={`${styles.toolBtn} ${isMarkActive(schema.marks.strong) ? styles.active : ''}`}
                                onClick={toggleBold}
                                title="Bold (⌘B)"
                                aria-label="Bold"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.5 15.5H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM10 6.5h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v-2zm5.6 4.5c.75-.9 1.2-2.05 1.2-3.3 0-2.76-2.24-5-5-5H6.5C5.67 2.7 5 3.37 5 4.2v15.6c0 .83.67 1.5 1.5 1.5h8.5c3.31 0 6-2.69 6-6 0-2.5-1.49-4.65-3.4-5.3z" />
                                </svg>
                            </button>
                            <button
                                className={`${styles.toolBtn} ${isMarkActive(schema.marks.em) ? styles.active : ''}`}
                                onClick={toggleItalic}
                                title="Italic (⌘I)"
                                aria-label="Italic"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z" />
                                </svg>
                            </button>
                        </div>

                        <div className={styles.divider}></div>

                        {/* Block types */}
                        <div className={styles.formatGroup}>
                            <button
                                className={`${styles.toolBtn} ${isBlockActive(schema.nodes.heading, { level: 1 }) ? styles.active : ''}`}
                                onClick={() => setHeading(1)}
                                title="Large Heading (⌘⇧1)"
                                aria-label="Heading 1"
                            >
                                <span className={styles.headingIcon}>H1</span>
                            </button>
                            <button
                                className={`${styles.toolBtn} ${isBlockActive(schema.nodes.heading, { level: 2 }) ? styles.active : ''}`}
                                onClick={() => setHeading(2)}
                                title="Medium Heading (⌘⇧2)"
                                aria-label="Heading 2"
                            >
                                <span className={styles.headingIcon}>H2</span>
                            </button>
                            <button
                                className={`${styles.toolBtn} ${isBlockActive(schema.nodes.heading, { level: 3 }) ? styles.active : ''}`}
                                onClick={() => setHeading(3)}
                                title="Small Heading (⌘⇧3)"
                                aria-label="Heading 3"
                            >
                                <span className={styles.headingIcon}>H3</span>
                            </button>
                        </div>

                        <div className={styles.divider}></div>

                        {/* Lists and special blocks */}
                        <div className={styles.formatGroup}>
                            <button
                                className={styles.toolBtn}
                                onClick={toggleBulletList}
                                title="Bullet List"
                                aria-label="Bullet list"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
                                </svg>
                            </button>
                            <button
                                className={styles.toolBtn}
                                onClick={toggleOrderedList}
                                title="Numbered List"
                                aria-label="Numbered list"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
                                </svg>
                            </button>
                            <button
                                className={`${styles.toolBtn} ${isInBlockquote() ? styles.active : ''}`}
                                onClick={setBlockquote}
                                title="Quote (⌘>)"
                                aria-label="Quote"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                </svg>
                            </button>
                        </div>

                        <div className={styles.divider}></div>

                        {/* Media and special */}
                        <div className={styles.formatGroup}>
                            <button
                                className={styles.toolBtn}
                                onClick={insertImage}
                                title="Add Image"
                                aria-label="Insert image"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                </svg>
                            </button>
                            <button
                                className={`${styles.toolBtn} ${isBlockActive(schema.nodes.code_block) ? styles.active : ''}`}
                                onClick={setCodeBlock}
                                title="Code Block"
                                aria-label="Code block"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                                </svg>
                            </button>
                        </div>

                        <div className={styles.divider}></div>

                        {/* History */}
                        <div className={styles.formatGroup}>
                            <button
                                className={styles.toolBtn}
                                onClick={undoCommand}
                                title="Undo (⌘Z)"
                                aria-label="Undo"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
                                </svg>
                            </button>
                            <button
                                className={styles.toolBtn}
                                onClick={redoCommand}
                                title="Redo (⌘Y)"
                                aria-label="Redo"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading state */}
            {!isReady && (
                <div className={styles.loading}>
                    <div className={styles.loadingSpinner}></div>
                    <span>Loading editor...</span>
                </div>
            )}

            {/* Editor content with safe styling */}
            <div
                ref={editorRef}
                className={styles.prosemirrorEditor}
                aria-label="Rich text editor"
                style={{
                    minHeight: className === 'seamless-editor' ? '500px' : '400px',
                    opacity: isReady ? 1 : 0.3,
                    ...(className === 'seamless-editor' ? {
                        background: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        padding: 0,
                        margin: 0,
                        fontSize: '18px',
                        lineHeight: '1.6',
                        color: '#1f2937'
                    } : {})
                }}
            />
        </div>
    );
});

Editor.displayName = 'Editor';

export default Editor; 