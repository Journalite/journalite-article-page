import { v4 as uuidv4 } from 'uuid';
import {
    DocumentModel,
    Section,
    Paragraph,
    TextRange,
    SerializedNode
} from '@/types/DocumentModel';

class DocumentMapper {
    /**
     * Converts a document model to TipTap-compatible JSON
     */
    modelToTiptap(model: DocumentModel): any {
        // The root document is a 'doc' node in TipTap
        const content: SerializedNode[] = [];

        // Process title (separate from sections)
        const titleNode: SerializedNode = {
            type: 'heading',
            attrs: { level: 1 },
            content: [{ type: 'text', text: model.title }]
        };
        content.push(titleNode);

        // Process each section and its paragraphs
        model.sections.forEach(section => {
            // Process each paragraph within the section
            section.paragraphs.forEach(paragraph => {
                const paragraphNode = this.paragraphToNode(paragraph);
                content.push(paragraphNode);
            });
        });

        return {
            type: 'doc',
            content
        };
    }

    /**
     * Converts a TipTap document back to our model format
     */
    tiptapToModel(tiptapDoc: any, existingModel?: DocumentModel): DocumentModel {
        // Create a new model or use the existing one
        const model: DocumentModel = existingModel || {
            id: uuidv4(),
            title: '',
            sections: [{
                id: uuidv4(),
                type: 'section',
                paragraphs: []
            }],
            status: 'drafts'
        };

        // Extract title from the first heading node if it exists
        const content = tiptapDoc.content || [];

        // Reset paragraphs in the default section
        const defaultSection: Section = model.sections[0] || {
            id: uuidv4(),
            type: 'section',
            paragraphs: []
        };
        defaultSection.paragraphs = [];

        // Process each node and convert to paragraphs
        content.forEach((node: any, index: number) => {
            if (index === 0 && node.type === 'heading' && node.attrs?.level === 1) {
                // First node is title
                model.title = this.extractTextFromNode(node);
            } else {
                // All other nodes become paragraphs in the default section
                const paragraph = this.nodeToParagraph(node);
                defaultSection.paragraphs.push(paragraph);
            }
        });

        // Update the model with the processed content
        model.sections = [defaultSection];
        return model;
    }

    /**
     * Convert a paragraph to a TipTap node
     */
    private paragraphToNode(paragraph: Paragraph): SerializedNode {
        const node: SerializedNode = {
            type: paragraph.type === 'heading' ? 'heading' : paragraph.type,
            attrs: {}
        };

        // Set attributes based on paragraph type
        if (paragraph.type === 'heading' && paragraph.level) {
            node.attrs!.level = paragraph.level;
        } else if (paragraph.type === 'image' && paragraph.src) {
            node.attrs!.src = paragraph.src;
            return node; // Images don't have text content
        }

        // If there are no marks, create a simple text node
        if (!paragraph.marks || paragraph.marks.length === 0) {
            node.content = [{ type: 'text', text: paragraph.text }];
            return node;
        }

        // Handle text with marks by creating segments
        const textSegments: SerializedNode[] = [];

        // Sort marks by position
        const sortedMarks = [...paragraph.marks].sort((a, b) => a.from - b.from);

        let lastIndex = 0;

        // Process each mark and create text segments
        sortedMarks.forEach(mark => {
            // Add any unmarked text before this mark
            if (mark.from > lastIndex) {
                textSegments.push({
                    type: 'text',
                    text: paragraph.text.substring(lastIndex, mark.from)
                });
            }

            // Add the marked text
            const markedText: SerializedNode = {
                type: 'text',
                text: paragraph.text.substring(mark.from, mark.to),
                marks: [{
                    type: mark.type,
                    ...(mark.attrs && { attrs: mark.attrs })
                }]
            };
            textSegments.push(markedText);

            lastIndex = mark.to;
        });

        // Add any remaining text after the last mark
        if (lastIndex < paragraph.text.length) {
            textSegments.push({
                type: 'text',
                text: paragraph.text.substring(lastIndex)
            });
        }

        node.content = textSegments;
        return node;
    }

    /**
     * Convert a TipTap node to a paragraph
     */
    private nodeToParagraph(node: any): Paragraph {
        const paragraph: Paragraph = {
            id: uuidv4(),
            type: node.type as any,
            text: '',
            marks: []
        };

        // Handle special paragraph types
        if (node.type === 'heading' && node.attrs?.level) {
            paragraph.level = node.attrs.level;
        } else if (node.type === 'image' && node.attrs?.src) {
            paragraph.src = node.attrs.src;
            paragraph.text = '[image]'; // Placeholder text for images
            return paragraph;
        }

        // Extract text and marks
        const { text, marks } = this.extractTextAndMarks(node);
        paragraph.text = text;
        paragraph.marks = marks;

        return paragraph;
    }

    /**
     * Extract text content from a node including its children
     */
    private extractTextFromNode(node: any): string {
        if (!node) return '';

        if (node.text) {
            return node.text;
        }

        if (node.content && Array.isArray(node.content)) {
            return node.content.map((child: any) =>
                this.extractTextFromNode(child)
            ).join('');
        }

        return '';
    }

    /**
     * Extract text and marks from a complex node structure
     */
    private extractTextAndMarks(node: any): { text: string; marks: TextRange[] } {
        let text = '';
        const marks: TextRange[] = [];

        const processNode = (n: any, startIndex: number): number => {
            if (!n) return startIndex;

            if (n.text) {
                // This is a leaf text node
                const currentIndex = startIndex;
                text += n.text;

                // Process any marks on this text node
                if (n.marks && Array.isArray(n.marks)) {
                    n.marks.forEach((mark: any) => {
                        marks.push({
                            type: mark.type as any,
                            from: currentIndex,
                            to: currentIndex + n.text.length,
                            ...(mark.attrs && { attrs: mark.attrs })
                        });
                    });
                }

                return startIndex + n.text.length;
            }

            // Process child nodes recursively
            if (n.content && Array.isArray(n.content)) {
                let currentIndex = startIndex;
                n.content.forEach((child: any) => {
                    currentIndex = processNode(child, currentIndex);
                });
                return currentIndex;
            }

            return startIndex;
        };

        processNode(node, 0);

        return { text, marks };
    }

    /**
     * Handle special case of pasted HTML content (lossy mapper)
     * This follows Medium's approach of being more strict with external content
     */
    parseExternalHTML(html: string): SerializedNode[] {
        // Create a temporary element to parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Process the elements to create nodes
        const nodes: SerializedNode[] = [];

        const processElement = (element: HTMLElement): SerializedNode | null => {
            // Only allow specific elements and convert others to plain paragraphs
            switch (element.tagName.toLowerCase()) {
                case 'p':
                    return {
                        type: 'paragraph',
                        content: this.extractTextWithMarks(element)
                    };
                case 'h1':
                case 'h2':
                case 'h3':
                    return {
                        type: 'heading',
                        attrs: { level: parseInt(element.tagName[1], 10) },
                        content: this.extractTextWithMarks(element)
                    };
                case 'img':
                    return {
                        type: 'image',
                        attrs: { src: element.getAttribute('src') || '' }
                    };
                case 'blockquote':
                    return {
                        type: 'blockquote',
                        content: this.extractTextWithMarks(element)
                    };
                case 'ul':
                    return {
                        type: 'bulletList',
                        content: Array.from(element.children).map(child => ({
                            type: 'listItem',
                            content: [{ type: 'paragraph', content: this.extractTextWithMarks(child as HTMLElement) }]
                        }))
                    };
                case 'ol':
                    return {
                        type: 'orderedList',
                        content: Array.from(element.children).map(child => ({
                            type: 'listItem',
                            content: [{ type: 'paragraph', content: this.extractTextWithMarks(child as HTMLElement) }]
                        }))
                    };
                default:
                    // For unsupported elements, extract text and convert to paragraph
                    return {
                        type: 'paragraph',
                        content: [{ type: 'text', text: element.textContent || '' }]
                    };
            }
        };

        // Process each top-level element
        Array.from(tempDiv.children).forEach(child => {
            const node = processElement(child as HTMLElement);
            if (node) {
                nodes.push(node);
            }
        });

        // If no valid nodes were created but there's text content, create a paragraph
        if (nodes.length === 0 && tempDiv.textContent) {
            nodes.push({
                type: 'paragraph',
                content: [{ type: 'text', text: tempDiv.textContent.trim() }]
            });
        }

        return nodes;
    }

    /**
     * Extract text with marks from an HTML element
     */
    private extractTextWithMarks(element: HTMLElement): SerializedNode[] {
        const result: SerializedNode[] = [];

        const processNode = (node: Node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                // This is a text node, add it directly
                if (node.textContent?.trim()) {
                    result.push({ type: 'text', text: node.textContent });
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const el = node as HTMLElement;
                const tagName = el.tagName.toLowerCase();

                // Only process specific inline elements for marks
                if (['strong', 'b', 'em', 'i', 'code', 'a'].includes(tagName)) {
                    const textContent = el.textContent || '';
                    const markType = this.htmlTagToMarkType(tagName);

                    const textNode: SerializedNode = {
                        type: 'text',
                        text: textContent,
                        marks: [{
                            type: markType,
                            ...(tagName === 'a' && { attrs: { href: el.getAttribute('href') || '' } })
                        }]
                    };

                    result.push(textNode);
                } else {
                    // For other elements, process children
                    Array.from(el.childNodes).forEach(processNode);
                }
            }
        };

        Array.from(element.childNodes).forEach(processNode);

        return result;
    }

    /**
     * Map HTML tag names to mark types
     */
    private htmlTagToMarkType(tag: string): string {
        switch (tag) {
            case 'strong':
            case 'b':
                return 'bold';
            case 'em':
            case 'i':
                return 'italic';
            case 'code':
                return 'code';
            case 'a':
                return 'link';
            default:
                return 'unknown';
        }
    }
}

export default new DocumentMapper(); 