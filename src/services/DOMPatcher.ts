import {
    DocumentModel,
    DocumentOp,
    Paragraph,
    Section,
    TextRange
} from '@/types/DocumentModel';

/**
 * DOMPatcher
 * 
 * Handles surgical DOM updates based on document model changes.
 * Following Medium's approach of minimal DOM patching for performance.
 */
export class DOMPatcher {
    // Reference to the editor container element
    private containerElement: HTMLElement | null = null;
    // Map of paragraph IDs to DOM elements
    private paragraphMap: Map<string, HTMLElement> = new Map();
    // Map of section IDs to DOM elements
    private sectionMap: Map<string, HTMLElement> = new Map();
    // Current document model
    private currentModel: DocumentModel | null = null;

    /**
     * Initialize the patcher with a DOM element and document model
     */
    initialize(container: HTMLElement, model: DocumentModel): void {
        this.containerElement = container;
        this.currentModel = model;
        this.rebuildParagraphMap();
    }

    /**
     * Full render of the document model to DOM
     * Used for initial render or complete rebuilds
     */
    fullRender(model: DocumentModel): void {
        if (!this.containerElement) {
            console.error('DOMPatcher not initialized with a container element');
            return;
        }

        // Store the new model
        this.currentModel = model;

        // Clear current content
        this.containerElement.innerHTML = '';
        this.paragraphMap.clear();
        this.sectionMap.clear();

        // Create title element (outside of sections)
        const titleElement = document.createElement('h1');
        titleElement.classList.add('article-title');
        titleElement.textContent = model.title;
        this.containerElement.appendChild(titleElement);

        // Render each section
        model.sections.forEach(section => {
            const sectionElement = this.createSectionElement(section);
            this.containerElement!.appendChild(sectionElement);
            this.sectionMap.set(section.id, sectionElement);

            // Render paragraphs within the section
            section.paragraphs.forEach(paragraph => {
                const paragraphElement = this.createParagraphElement(paragraph);
                sectionElement.appendChild(paragraphElement);
                this.paragraphMap.set(paragraph.id, paragraphElement);
            });
        });
    }

    /**
     * Apply a single operation to the DOM
     */
    applyOperation(model: DocumentModel, operation: DocumentOp): void {
        if (!this.containerElement) {
            console.error('DOMPatcher not initialized with a container element');
            return;
        }

        // Update our reference model
        this.currentModel = model;

        // Apply the operation to the DOM
        switch (operation.type) {
            case 'INSERT_PARAGRAPH':
                this.insertParagraphDOM(
                    operation.sectionId,
                    operation.index,
                    operation.paragraph
                );
                break;

            case 'REMOVE_PARAGRAPH':
                this.removeParagraphDOM(
                    operation.sectionId,
                    operation.paragraphId
                );
                break;

            case 'UPDATE_PARAGRAPH':
                this.updateParagraphDOM(
                    operation.sectionId,
                    operation.paragraphId,
                    operation.updates
                );
                break;

            case 'INSERT_SECTION':
                this.insertSectionDOM(
                    operation.index,
                    operation.section
                );
                break;

            case 'REMOVE_SECTION':
                this.removeSectionDOM(
                    operation.sectionId
                );
                break;

            case 'UPDATE_SECTION':
                this.updateSectionDOM(
                    operation.sectionId,
                    operation.updates
                );
                break;

            default:
                console.warn('Unknown operation type:', (operation as any).type);
                // Fall back to full render for unknown operations
                this.fullRender(model);
        }
    }

    /**
     * Apply multiple operations to the DOM
     */
    applyOperations(model: DocumentModel, operations: DocumentOp[]): void {
        // For multiple operations, apply each one in sequence
        operations.forEach(operation => {
            this.applyOperation(model, operation);
        });
    }

    /**
     * Create a DOM element for a paragraph
     */
    private createParagraphElement(paragraph: Paragraph): HTMLElement {
        let element: HTMLElement;

        // Create appropriate element based on paragraph type
        switch (paragraph.type) {
            case 'heading':
                // Create heading with appropriate level
                element = document.createElement(`h${paragraph.level || 2}`);
                break;
            case 'image':
                // Create image element
                element = document.createElement('img');
                if (paragraph.src) {
                    element.setAttribute('src', paragraph.src);
                    element.setAttribute('alt', paragraph.text || 'Image');
                }
                return element; // Return early for images
            case 'blockquote':
                element = document.createElement('blockquote');
                break;
            case 'bulletList':
                element = document.createElement('ul');
                break;
            case 'orderedList':
                element = document.createElement('ol');
                break;
            case 'listItem':
                element = document.createElement('li');
                break;
            case 'paragraph':
            default:
                element = document.createElement('p');
        }

        // Set paragraph ID as data attribute
        element.dataset.paragraphId = paragraph.id;

        // If there are no text formatting marks, set text content directly
        if (!paragraph.marks || paragraph.marks.length === 0) {
            element.textContent = paragraph.text;
            return element;
        }

        // Process text with formatting marks
        this.renderFormattedText(element, paragraph.text, paragraph.marks);

        return element;
    }

    /**
     * Create a DOM element for a section
     */
    private createSectionElement(section: Section): HTMLElement {
        const element = document.createElement('section');

        // Set section ID as data attribute
        element.dataset.sectionId = section.id;

        return element;
    }

    /**
     * Render text with formatting marks
     */
    private renderFormattedText(element: HTMLElement, text: string, marks: TextRange[]): void {
        // Sort marks by position
        const sortedMarks = [...marks].sort((a, b) => a.from - b.from);

        // If no marks, just set the text
        if (sortedMarks.length === 0) {
            element.textContent = text;
            return;
        }

        // Clear existing content
        element.innerHTML = '';

        let lastIndex = 0;

        // Process each mark
        sortedMarks.forEach(mark => {
            // Add any plain text before this mark
            if (mark.from > lastIndex) {
                const plainText = text.substring(lastIndex, mark.from);
                element.appendChild(document.createTextNode(plainText));
            }

            // Add the marked text in an appropriate element
            const markedText = text.substring(mark.from, mark.to);
            let markElement: HTMLElement;

            switch (mark.type) {
                case 'bold':
                    markElement = document.createElement('strong');
                    break;
                case 'italic':
                    markElement = document.createElement('em');
                    break;
                case 'code':
                    markElement = document.createElement('code');
                    break;
                case 'link':
                    markElement = document.createElement('a');
                    if (mark.attrs?.href) {
                        markElement.setAttribute('href', mark.attrs.href);
                    }
                    break;
                default:
                    markElement = document.createElement('span');
            }

            markElement.textContent = markedText;
            element.appendChild(markElement);

            lastIndex = mark.to;
        });

        // Add any remaining text
        if (lastIndex < text.length) {
            const remainingText = text.substring(lastIndex);
            element.appendChild(document.createTextNode(remainingText));
        }
    }

    /**
     * Insert a paragraph element into the DOM
     */
    private insertParagraphDOM(sectionId: string, index: number, paragraph: Paragraph): void {
        // Get the section element
        const sectionElement = this.sectionMap.get(sectionId);
        if (!sectionElement) {
            console.warn(`Section element with ID ${sectionId} not found`);
            return;
        }

        // Create the paragraph element
        const paragraphElement = this.createParagraphElement(paragraph);

        // Insert at correct position
        if (index >= sectionElement.children.length) {
            // Append to end if index is beyond current length
            sectionElement.appendChild(paragraphElement);
        } else {
            // Insert before the element at the specified index
            sectionElement.insertBefore(paragraphElement, sectionElement.children[index]);
        }

        // Update the paragraph map
        this.paragraphMap.set(paragraph.id, paragraphElement);
    }

    /**
     * Remove a paragraph element from the DOM
     */
    private removeParagraphDOM(sectionId: string, paragraphId: string): void {
        // Get the paragraph element
        const paragraphElement = this.paragraphMap.get(paragraphId);
        if (!paragraphElement) {
            console.warn(`Paragraph element with ID ${paragraphId} not found`);
            return;
        }

        // Remove from DOM
        paragraphElement.remove();

        // Update the paragraph map
        this.paragraphMap.delete(paragraphId);
    }

    /**
     * Update a paragraph element in the DOM
     */
    private updateParagraphDOM(sectionId: string, paragraphId: string, updates: Partial<Paragraph>): void {
        // Get the paragraph element
        const paragraphElement = this.paragraphMap.get(paragraphId);
        if (!paragraphElement) {
            console.warn(`Paragraph element with ID ${paragraphId} not found`);
            return;
        }

        // Find the full paragraph data from the model
        const section = this.currentModel?.sections.find(s => s.id === sectionId);
        if (!section) return;

        const paragraph = section.paragraphs.find(p => p.id === paragraphId);
        if (!paragraph) return;

        // If type has changed, replace the entire element
        if (updates.type && updates.type !== paragraph.type) {
            const newElement = this.createParagraphElement({
                ...paragraph,
                ...updates
            });

            // Replace in DOM
            paragraphElement.replaceWith(newElement);

            // Update the paragraph map
            this.paragraphMap.set(paragraphId, newElement);
            return;
        }

        // Handle specific updates
        if (updates.text !== undefined || updates.marks !== undefined) {
            // Update text content or formatting
            const updatedParagraph = {
                ...paragraph,
                text: updates.text !== undefined ? updates.text : paragraph.text,
                marks: updates.marks !== undefined ? updates.marks : paragraph.marks
            };

            // Render the updated text with marks
            if (updatedParagraph.type === 'image') {
                // Special case for images
                if (paragraphElement.tagName === 'IMG' && updatedParagraph.src) {
                    (paragraphElement as HTMLImageElement).src = updatedParagraph.src;
                    (paragraphElement as HTMLImageElement).alt = updatedParagraph.text || 'Image';
                }
            } else {
                // Clear current content
                paragraphElement.innerHTML = '';

                // Render formatted text
                this.renderFormattedText(
                    paragraphElement,
                    updatedParagraph.text,
                    updatedParagraph.marks
                );
            }
        }

        // Update level for headings
        if (updates.level !== undefined && paragraph.type === 'heading') {
            const newHeading = document.createElement(`h${updates.level}`);

            // Copy attributes and content
            while (paragraphElement.attributes.length > 0) {
                const attr = paragraphElement.attributes[0];
                newHeading.setAttribute(attr.name, attr.value);
                paragraphElement.removeAttributeNode(attr);
            }

            newHeading.innerHTML = paragraphElement.innerHTML;

            // Replace in DOM
            paragraphElement.replaceWith(newHeading);

            // Update the paragraph map
            this.paragraphMap.set(paragraphId, newHeading);
        }
    }

    /**
     * Insert a section element into the DOM
     */
    private insertSectionDOM(index: number, section: Section): void {
        if (!this.containerElement) return;

        // Create the section element
        const sectionElement = this.createSectionElement(section);

        // Add paragraphs to the section
        section.paragraphs.forEach(paragraph => {
            const paragraphElement = this.createParagraphElement(paragraph);
            sectionElement.appendChild(paragraphElement);
            this.paragraphMap.set(paragraph.id, paragraphElement);
        });

        // Get all existing section elements
        const sectionElements = Array.from(this.containerElement.querySelectorAll('section'));

        // Insert at correct position
        if (index >= sectionElements.length) {
            // Append to end if index is beyond current length
            this.containerElement.appendChild(sectionElement);
        } else {
            // Insert before the element at the specified index
            this.containerElement.insertBefore(sectionElement, sectionElements[index]);
        }

        // Update the section map
        this.sectionMap.set(section.id, sectionElement);
    }

    /**
     * Remove a section element from the DOM
     */
    private removeSectionDOM(sectionId: string): void {
        // Get the section element
        const sectionElement = this.sectionMap.get(sectionId);
        if (!sectionElement) {
            console.warn(`Section element with ID ${sectionId} not found`);
            return;
        }

        // Remove paragraphs from the paragraph map
        const paragraphElements = sectionElement.querySelectorAll('[data-paragraph-id]');
        paragraphElements.forEach(element => {
            const paragraphId = element.getAttribute('data-paragraph-id');
            if (paragraphId) {
                this.paragraphMap.delete(paragraphId);
            }
        });

        // Remove from DOM
        sectionElement.remove();

        // Update the section map
        this.sectionMap.delete(sectionId);
    }

    /**
     * Update a section element in the DOM
     */
    private updateSectionDOM(sectionId: string, updates: Partial<Section>): void {
        // Get the section element
        const sectionElement = this.sectionMap.get(sectionId);
        if (!sectionElement) {
            console.warn(`Section element with ID ${sectionId} not found`);
            return;
        }

        // For now, sections don't have much to update apart from paragraphs,
        // which are handled by separate paragraph operations
    }

    /**
     * Rebuild the paragraph map from the current DOM
     */
    private rebuildParagraphMap(): void {
        if (!this.containerElement) return;

        // Clear current maps
        this.paragraphMap.clear();
        this.sectionMap.clear();

        // Rebuild section map
        const sectionElements = this.containerElement.querySelectorAll('section[data-section-id]');
        sectionElements.forEach(element => {
            const sectionId = element.getAttribute('data-section-id');
            if (sectionId) {
                this.sectionMap.set(sectionId, element as HTMLElement);
            }
        });

        // Rebuild paragraph map
        const paragraphElements = this.containerElement.querySelectorAll('[data-paragraph-id]');
        paragraphElements.forEach(element => {
            const paragraphId = element.getAttribute('data-paragraph-id');
            if (paragraphId) {
                this.paragraphMap.set(paragraphId, element as HTMLElement);
            }
        });
    }
}

export default new DOMPatcher(); 