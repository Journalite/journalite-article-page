import { v4 as uuidv4 } from 'uuid';
import {
    DocumentModel,
    DocumentOp,
    Paragraph,
    Section,
    TextRange
} from '@/types/DocumentModel';
import editorOperations from './EditorOperations';
import domPatcher from './DOMPatcher';

/**
 * EditorEventHandler
 *
 * Handles keyboard events and user interactions with the editor.
 * Translates user actions into document operations and DOM updates.
 */
export class EditorEventHandler {
    // Current document model
    private model: DocumentModel | null = null;
    // Editor container element
    private editorElement: HTMLElement | null = null;
    // Selection state
    private selectionState: {
        anchorNode: Node | null;
        anchorOffset: number;
        focusNode: Node | null;
        focusOffset: number;
        isCollapsed: boolean;
    } = {
            anchorNode: null,
            anchorOffset: 0,
            focusNode: null,
            focusOffset: 0,
            isCollapsed: true
        };
    // Callback for changes
    private onChangeCallback: ((model: DocumentModel) => void) | null = null;
    // Element that currently has focus
    private focusedElement: HTMLElement | null = null;
    // Current paragraph and section
    private currentParagraphId: string | null = null;
    private currentSectionId: string | null = null;

    /**
     * Initialize the event handler with a document model and editor element
     */
    initialize(
        model: DocumentModel,
        editorElement: HTMLElement,
        onChange?: (model: DocumentModel) => void
    ): void {
        this.model = model;
        this.editorElement = editorElement;
        this.onChangeCallback = onChange || null;

        // Initialize DOM patcher
        domPatcher.initialize(editorElement, model);

        // Initial render
        domPatcher.fullRender(model);

        // Attach event listeners
        this.attachEventListeners();
    }

    /**
     * Update the document model
     */
    updateModel(model: DocumentModel): void {
        this.model = model;

        // Update DOM
        domPatcher.fullRender(model);
    }

    /**
     * Attach event listeners to the editor
     */
    private attachEventListeners(): void {
        if (!this.editorElement) return;

        // Content editable setup
        this.editorElement.setAttribute('contenteditable', 'true');
        this.editorElement.setAttribute('spellcheck', 'true');

        // Key events
        this.editorElement.addEventListener('keydown', this.handleKeyDown);

        // Selection events
        document.addEventListener('selectionchange', this.handleSelectionChange);

        // Focus events
        this.editorElement.addEventListener('focus', this.handleFocus);
        this.editorElement.addEventListener('blur', this.handleBlur);

        // Input events
        this.editorElement.addEventListener('input', this.handleInput);

        // Click events for cursor positioning
        this.editorElement.addEventListener('click', this.handleClick);

        // Paste events
        this.editorElement.addEventListener('paste', this.handlePaste);
    }

    /**
     * Remove event listeners
     */
    destroy(): void {
        if (!this.editorElement) return;

        // Remove key events
        this.editorElement.removeEventListener('keydown', this.handleKeyDown);

        // Remove selection events
        document.removeEventListener('selectionchange', this.handleSelectionChange);

        // Remove focus events
        this.editorElement.removeEventListener('focus', this.handleFocus);
        this.editorElement.removeEventListener('blur', this.handleBlur);

        // Remove input events
        this.editorElement.removeEventListener('input', this.handleInput);

        // Remove click events
        this.editorElement.removeEventListener('click', this.handleClick);

        // Remove paste events
        this.editorElement.removeEventListener('paste', this.handlePaste);
    }

    /**
     * Handle key down events
     */
    private handleKeyDown = (e: KeyboardEvent): void => {
        if (!this.model) return;

        // Get current paragraph and section
        this.updateCurrentParagraphAndSection();

        // Handle special keys
        switch (e.key) {
            case 'Enter':
                if (!e.shiftKey) {
                    e.preventDefault();
                    this.handleEnterKey();
                }
                break;

            case 'Backspace':
                if (this.isAtStartOfParagraph()) {
                    e.preventDefault();
                    this.handleBackspaceAtStart();
                }
                break;

            case 'Delete':
                if (this.isAtEndOfParagraph()) {
                    e.preventDefault();
                    this.handleDeleteAtEnd();
                }
                break;

            // Keyboard shortcuts for formatting
            case 'b':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.toggleFormat('bold');
                }
                break;

            case 'i':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.toggleFormat('italic');
                }
                break;

            case '`':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.toggleFormat('code');
                }
                break;

            case 'k':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.insertLink();
                }
                break;
        }
    };

    /**
     * Handle selection change events
     */
    private handleSelectionChange = (): void => {
        const selection = window.getSelection();
        if (!selection) return;

        // Store selection state
        this.selectionState = {
            anchorNode: selection.anchorNode,
            anchorOffset: selection.anchorOffset,
            focusNode: selection.focusNode,
            focusOffset: selection.focusOffset,
            isCollapsed: selection.isCollapsed
        };

        // Update current paragraph and section based on selection
        this.updateCurrentParagraphAndSection();
    };

    /**
     * Handle focus events
     */
    private handleFocus = (e: FocusEvent): void => {
        // Update focused element
        this.focusedElement = e.target as HTMLElement;

        // Update current paragraph and section
        this.updateCurrentParagraphAndSection();
    };

    /**
     * Handle blur events
     */
    private handleBlur = (): void => {
        // Reset focused element
        this.focusedElement = null;
    };

    /**
 * Handle input events (text changes)
 */
    private handleInput = (e: Event): void => {
        if (!this.model || !this.currentParagraphId || !this.currentSectionId) return;

        // Get the paragraph element that was modified
        const paragraphElement = e.target as HTMLElement;

        // Extract text content
        const textContent = paragraphElement.textContent || '';

        // Create update operation
        const operation: DocumentOp = {
            type: 'UPDATE_PARAGRAPH',
            sectionId: this.currentSectionId,
            paragraphId: this.currentParagraphId,
            updates: {
                text: textContent,
                // We would need to extract marks here as well,
                // but that's complex and would require deeper DOM analysis
                // For now we're just updating text
            }
        };

        // Apply operation to model
        const updatedModel = editorOperations.applyOperation(this.model, operation);

        // Update model and notify
        this.model = updatedModel;
        this.notifyChange();
    };

    /**
     * Handle click events
     */
    private handleClick = (): void => {
        // Update current paragraph and section
        this.updateCurrentParagraphAndSection();
    };

    /**
     * Handle paste events
     */
    private handlePaste = (e: ClipboardEvent): void => {
        e.preventDefault();

        if (!this.model || !this.currentParagraphId || !this.currentSectionId || !e.clipboardData) return;

        // Get plain text from clipboard
        const text = e.clipboardData.getData('text/plain');

        // Get current selection
        const selection = window.getSelection();
        if (!selection || !selection.rangeCount) return;

        const range = selection.getRangeAt(0);

        // Insert text at cursor position
        const paragraph = this.findParagraphById(this.currentParagraphId);
        if (!paragraph) return;

        // Find cursor offset in text
        const offset = this.findCursorOffsetInParagraph();
        if (offset === null) return;

        // Split text at cursor position and insert new text
        const newText = paragraph.text.substring(0, offset) + text + paragraph.text.substring(offset);

        // Create update operation
        const operation: DocumentOp = {
            type: 'UPDATE_PARAGRAPH',
            sectionId: this.currentSectionId,
            paragraphId: this.currentParagraphId,
            updates: {
                text: newText
            }
        };

        // Apply operation to model
        const updatedModel = editorOperations.applyOperation(this.model, operation);

        // Update model
        this.model = updatedModel;

        // Update DOM
        domPatcher.applyOperation(updatedModel, operation);

        // Notify change
        this.notifyChange();

        // Set cursor position after pasted text
        this.setCursorPosition(this.currentParagraphId, offset + text.length);
    };

    /**
     * Handle Enter key to create a new paragraph
     */
    private handleEnterKey(): void {
        if (!this.model || !this.currentParagraphId || !this.currentSectionId) return;

        // Find cursor position
        const offset = this.findCursorOffsetInParagraph();
        if (offset === null) return;

        // Split the paragraph at cursor position
        const updatedModel = editorOperations.splitParagraph(
            this.model,
            this.currentSectionId,
            this.currentParagraphId,
            offset
        );

        // Find the new paragraph (it's the one right after the current one)
        const sectionIndex = updatedModel.sections.findIndex(s => s.id === this.currentSectionId);
        if (sectionIndex === -1) return;

        const paragraphIndex = updatedModel.sections[sectionIndex].paragraphs.findIndex(
            p => p.id === this.currentParagraphId
        );
        if (paragraphIndex === -1 || paragraphIndex + 1 >= updatedModel.sections[sectionIndex].paragraphs.length) return;

        const newParagraphId = updatedModel.sections[sectionIndex].paragraphs[paragraphIndex + 1].id;

        // Update model
        this.model = updatedModel;

        // Full render for now (for simplicity - in production code we would do a more surgical update)
        domPatcher.fullRender(updatedModel);

        // Set cursor at start of new paragraph
        this.setCursorPosition(newParagraphId, 0);

        // Notify change
        this.notifyChange();
    };

    /**
     * Handle Backspace at start of paragraph (merge with previous)
     */
    private handleBackspaceAtStart(): void {
        if (!this.model || !this.currentParagraphId || !this.currentSectionId) return;

        // Find the current paragraph
        const sectionIndex = this.model.sections.findIndex(s => s.id === this.currentSectionId);
        if (sectionIndex === -1) return;

        const paragraphIndex = this.model.sections[sectionIndex].paragraphs.findIndex(
            p => p.id === this.currentParagraphId
        );
        if (paragraphIndex === -1 || paragraphIndex === 0) return; // No previous paragraph

        // Get the previous paragraph
        const prevParagraph = this.model.sections[sectionIndex].paragraphs[paragraphIndex - 1];
        const prevParagraphLength = prevParagraph.text.length;

        // Merge paragraphs
        const updatedModel = editorOperations.mergeParagraphs(
            this.model,
            this.currentSectionId,
            prevParagraph.id,
            this.currentParagraphId
        );

        // Update model
        this.model = updatedModel;

        // Full render for now
        domPatcher.fullRender(updatedModel);

        // Set cursor at the join point
        this.setCursorPosition(prevParagraph.id, prevParagraphLength);

        // Update current paragraph
        this.currentParagraphId = prevParagraph.id;

        // Notify change
        this.notifyChange();
    };

    /**
     * Handle Delete at end of paragraph (merge with next)
     */
    private handleDeleteAtEnd(): void {
        if (!this.model || !this.currentParagraphId || !this.currentSectionId) return;

        // Find the current paragraph
        const sectionIndex = this.model.sections.findIndex(s => s.id === this.currentSectionId);
        if (sectionIndex === -1) return;

        const paragraphIndex = this.model.sections[sectionIndex].paragraphs.findIndex(
            p => p.id === this.currentParagraphId
        );
        if (paragraphIndex === -1 ||
            paragraphIndex >= this.model.sections[sectionIndex].paragraphs.length - 1) {
            return; // No next paragraph
        }

        // Get the current paragraph
        const currentParagraph = this.model.sections[sectionIndex].paragraphs[paragraphIndex];
        const cursorPosition = currentParagraph.text.length;

        // Get the next paragraph
        const nextParagraph = this.model.sections[sectionIndex].paragraphs[paragraphIndex + 1];

        // Merge paragraphs
        const updatedModel = editorOperations.mergeParagraphs(
            this.model,
            this.currentSectionId,
            this.currentParagraphId,
            nextParagraph.id
        );

        // Update model
        this.model = updatedModel;

        // Full render for now
        domPatcher.fullRender(updatedModel);

        // Set cursor at the join point
        this.setCursorPosition(this.currentParagraphId, cursorPosition);

        // Notify change
        this.notifyChange();
    };

    /**
     * Toggle formatting (bold, italic, code) for selected text
     */
    private toggleFormat(format: 'bold' | 'italic' | 'code'): void {
        if (!this.model || !this.currentParagraphId || !this.currentSectionId) return;

        // Get selection
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) return;

        // Get start and end offsets
        const { startOffset, endOffset } = this.getSelectionOffsets();
        if (startOffset === null || endOffset === null) return;

        // Find existing mark of this type that covers the selection
        const paragraph = this.findParagraphById(this.currentParagraphId);
        if (!paragraph) return;

        const existingMark = paragraph.marks.find(mark =>
            mark.type === format && mark.from <= startOffset && mark.to >= endOffset
        );

        let updatedModel: DocumentModel;

        if (existingMark) {
            // Remove the mark
            updatedModel = editorOperations.removeTextMark(
                this.model,
                this.currentSectionId,
                this.currentParagraphId,
                format,
                existingMark.from,
                existingMark.to
            );
        } else {
            // Add new mark
            updatedModel = editorOperations.addTextMark(
                this.model,
                this.currentSectionId,
                this.currentParagraphId,
                format,
                startOffset,
                endOffset
            );
        }

        // Update model
        this.model = updatedModel;

        // Full render
        domPatcher.fullRender(updatedModel);

        // Restore selection
        this.setTextSelection(this.currentParagraphId, startOffset, endOffset);

        // Notify change
        this.notifyChange();
    }

    /**
     * Insert a link for selected text
     */
    private insertLink(): void {
        if (!this.model || !this.currentParagraphId || !this.currentSectionId) return;

        // Get selection
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed) return;

        // Get start and end offsets
        const { startOffset, endOffset } = this.getSelectionOffsets();
        if (startOffset === null || endOffset === null) return;

        // Prompt for URL
        const url = window.prompt('Enter URL:');
        if (!url) return;

        // Add link mark
        const updatedModel = editorOperations.addTextMark(
            this.model,
            this.currentSectionId,
            this.currentParagraphId,
            'link',
            startOffset,
            endOffset,
            { href: url }
        );

        // Update model
        this.model = updatedModel;

        // Full render
        domPatcher.fullRender(updatedModel);

        // Restore selection
        this.setTextSelection(this.currentParagraphId, startOffset, endOffset);

        // Notify change
        this.notifyChange();
    }

    /**
     * Find the paragraph that contains the current selection
     */
    private updateCurrentParagraphAndSection(): void {
        const selection = window.getSelection();
        if (!selection || !selection.anchorNode) {
            this.currentParagraphId = null;
            this.currentSectionId = null;
            return;
        }

        // Find the parent paragraph element
        let paragraphElement: Element | null = selection.anchorNode.nodeType === Node.ELEMENT_NODE
            ? selection.anchorNode as Element
            : selection.anchorNode.parentElement;

        // Traverse up until we find an element with data-paragraph-id
        while (paragraphElement && !paragraphElement.hasAttribute('data-paragraph-id')) {
            paragraphElement = paragraphElement.parentElement;
        }

        if (!paragraphElement) {
            this.currentParagraphId = null;
            this.currentSectionId = null;
            return;
        }

        // Get paragraph ID
        this.currentParagraphId = paragraphElement.getAttribute('data-paragraph-id');

        // Find parent section
        let sectionElement = paragraphElement.parentElement;
        while (sectionElement && !sectionElement.hasAttribute('data-section-id')) {
            sectionElement = sectionElement.parentElement;
        }

        if (!sectionElement) {
            this.currentSectionId = null;
            return;
        }

        // Get section ID
        this.currentSectionId = sectionElement.getAttribute('data-section-id');
    }

    /**
     * Check if cursor is at the start of a paragraph
     */
    private isAtStartOfParagraph(): boolean {
        const selection = window.getSelection();
        if (!selection || !selection.anchorNode || !selection.isCollapsed) return false;

        // If selection is in a text node, check if offset is 0
        if (selection.anchorNode.nodeType === Node.TEXT_NODE) {
            return selection.anchorOffset === 0;
        }

        // If selection is in an element, check if it's at the beginning
        return selection.anchorOffset === 0;
    }

    /**
     * Check if cursor is at the end of a paragraph
     */
    private isAtEndOfParagraph(): boolean {
        const selection = window.getSelection();
        if (!selection || !selection.anchorNode || !selection.isCollapsed) return false;

        // If selection is in a text node, check if offset is at the end
        if (selection.anchorNode.nodeType === Node.TEXT_NODE) {
            return selection.anchorOffset === selection.anchorNode.textContent?.length;
        }

        // If selection is in an element, check if it's at the end
        const element = selection.anchorNode as Element;
        return selection.anchorOffset === element.childNodes.length;
    }

    /**
     * Find cursor offset within the current paragraph's text
     */
    private findCursorOffsetInParagraph(): number | null {
        if (!this.currentParagraphId || !this.model) return null;

        const selection = window.getSelection();
        if (!selection || !selection.isCollapsed) return null;

        // Find the paragraph in the model
        const paragraph = this.findParagraphById(this.currentParagraphId);
        if (!paragraph) return null;

        // Get paragraph element
        const paragraphElement = document.querySelector(`[data-paragraph-id="${this.currentParagraphId}"]`);
        if (!paragraphElement) return null;

        // Calculate offset in text content
        // This is a simplified approach - we'd need more complex logic
        // to handle nested elements and formatting correctly

        // If cursor is in a text node directly
        if (selection.anchorNode?.nodeType === Node.TEXT_NODE &&
            selection.anchorNode.parentNode === paragraphElement) {
            return selection.anchorOffset;
        }

        // More complex case - we'd need to traverse nodes and calculate offset
        // This is a simplified placeholder approach:
        return paragraph.text.length; // Position at end as fallback
    }

    /**
     * Find a paragraph by ID
     */
    private findParagraphById(paragraphId: string): Paragraph | null {
        if (!this.model) return null;

        for (const section of this.model.sections) {
            const paragraph = section.paragraphs.find(p => p.id === paragraphId);
            if (paragraph) return paragraph;
        }

        return null;
    }

    /**
     * Set cursor position in a paragraph
     */
    private setCursorPosition(paragraphId: string, offset: number): void {
        // Find paragraph element
        const paragraphElement = document.querySelector(`[data-paragraph-id="${paragraphId}"]`);
        if (!paragraphElement) return;

        // Create a range
        const range = document.createRange();
        const selection = window.getSelection();

        // Simple approach - set at start/end of element
        if (offset === 0) {
            // Set at beginning
            range.setStart(paragraphElement, 0);
            range.collapse(true);
        } else {
            // Set at specific position or end
            // This is a simplified approach - in a real implementation
            // we'd need to find the exact text node and position

            // Just set at end for this example
            range.selectNodeContents(paragraphElement);
            range.collapse(false);
        }

        // Apply selection
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    /**
     * Set text selection in a paragraph
     */
    private setTextSelection(paragraphId: string, startOffset: number, endOffset: number): void {
        // Find paragraph element
        const paragraphElement = document.querySelector(`[data-paragraph-id="${paragraphId}"]`);
        if (!paragraphElement) return;

        // Create a range
        const range = document.createRange();
        const selection = window.getSelection();

        // Simplified approach - doesn't handle nested elements properly
        range.selectNodeContents(paragraphElement);

        // Apply selection
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    /**
     * Get selection start and end offsets
     */
    private getSelectionOffsets(): { startOffset: number | null, endOffset: number | null } {
        // This is a simplified implementation
        // In a real-world scenario, we would need complex logic to calculate
        // the actual offsets within the paragraph text

        return {
            startOffset: 0,
            endOffset: 0
        };
    }

    /**
     * Notify about model changes
     */
    private notifyChange(): void {
        if (this.onChangeCallback && this.model) {
            this.onChangeCallback(this.model);
        }
    }
}

export default new EditorEventHandler(); 