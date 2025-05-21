import { v4 as uuidv4 } from 'uuid';
import {
    DocumentModel,
    DocumentOp,
    Paragraph,
    Section,
    TextRange
} from '@/types/DocumentModel';

/**
 * EditorOperations
 * 
 * Implements atomic operations for the document model
 * These operations follow Medium's approach of using surgical DOM updates
 * based on a predictable document model
 */
export class EditorOperations {
    /**
     * Apply a single operation to the document model
     * Returns a new document model with the operation applied
     */
    applyOperation(model: DocumentModel, operation: DocumentOp): DocumentModel {
        // Create a deep clone of the document model to avoid mutations
        const newModel: DocumentModel = JSON.parse(JSON.stringify(model));

        switch (operation.type) {
            case 'INSERT_PARAGRAPH':
                return this.insertParagraph(
                    newModel,
                    operation.sectionId,
                    operation.index,
                    operation.paragraph
                );

            case 'REMOVE_PARAGRAPH':
                return this.removeParagraph(
                    newModel,
                    operation.sectionId,
                    operation.paragraphId,
                    operation.index
                );

            case 'UPDATE_PARAGRAPH':
                return this.updateParagraph(
                    newModel,
                    operation.sectionId,
                    operation.paragraphId,
                    operation.updates
                );

            case 'INSERT_SECTION':
                return this.insertSection(
                    newModel,
                    operation.index,
                    operation.section
                );

            case 'REMOVE_SECTION':
                return this.removeSection(
                    newModel,
                    operation.sectionId,
                    operation.index
                );

            case 'UPDATE_SECTION':
                return this.updateSection(
                    newModel,
                    operation.sectionId,
                    operation.updates
                );

            default:
                console.warn('Unknown operation type:', (operation as any).type);
                return newModel;
        }
    }

    /**
     * Apply multiple operations to the document model in sequence
     * Returns a new document model with all operations applied
     */
    applyOperations(model: DocumentModel, operations: DocumentOp[]): DocumentModel {
        return operations.reduce((currentModel, operation) => {
            return this.applyOperation(currentModel, operation);
        }, model);
    }

    /**
     * Insert a paragraph at the specified index in a section
     */
    private insertParagraph(
        model: DocumentModel,
        sectionId: string,
        index: number,
        paragraph: Paragraph
    ): DocumentModel {
        const sectionIndex = model.sections.findIndex(section => section.id === sectionId);

        if (sectionIndex === -1) {
            console.warn(`Section with ID ${sectionId} not found`);
            return model;
        }

        // Ensure the paragraph has an ID
        const newParagraph: Paragraph = {
            ...paragraph,
            id: paragraph.id || uuidv4()
        };

        // Insert paragraph at the specified index
        model.sections[sectionIndex].paragraphs.splice(index, 0, newParagraph);

        return model;
    }

    /**
     * Remove a paragraph from a section
     */
    private removeParagraph(
        model: DocumentModel,
        sectionId: string,
        paragraphId: string,
        index: number
    ): DocumentModel {
        const sectionIndex = model.sections.findIndex(section => section.id === sectionId);

        if (sectionIndex === -1) {
            console.warn(`Section with ID ${sectionId} not found`);
            return model;
        }

        // Verify the paragraph at the index has the expected ID
        const section = model.sections[sectionIndex];
        if (index >= 0 && index < section.paragraphs.length) {
            if (section.paragraphs[index].id !== paragraphId) {
                console.warn(`Paragraph ID mismatch at index ${index}`);
                // Fall back to finding by ID if index doesn't match
                const paragraphIndex = section.paragraphs.findIndex(p => p.id === paragraphId);
                if (paragraphIndex !== -1) {
                    section.paragraphs.splice(paragraphIndex, 1);
                }
            } else {
                // Remove paragraph at the specified index
                section.paragraphs.splice(index, 1);
            }
        }

        return model;
    }

    /**
     * Update a paragraph with new properties
     */
    private updateParagraph(
        model: DocumentModel,
        sectionId: string,
        paragraphId: string,
        updates: Partial<Paragraph>
    ): DocumentModel {
        const sectionIndex = model.sections.findIndex(section => section.id === sectionId);

        if (sectionIndex === -1) {
            console.warn(`Section with ID ${sectionId} not found`);
            return model;
        }

        // Find the paragraph by ID
        const paragraphIndex = model.sections[sectionIndex].paragraphs.findIndex(
            p => p.id === paragraphId
        );

        if (paragraphIndex === -1) {
            console.warn(`Paragraph with ID ${paragraphId} not found in section ${sectionId}`);
            return model;
        }

        // Update the paragraph with new properties
        model.sections[sectionIndex].paragraphs[paragraphIndex] = {
            ...model.sections[sectionIndex].paragraphs[paragraphIndex],
            ...updates
        };

        return model;
    }

    /**
     * Insert a section at the specified index
     */
    private insertSection(
        model: DocumentModel,
        index: number,
        section: Section
    ): DocumentModel {
        // Ensure the section has an ID
        const newSection: Section = {
            ...section,
            id: section.id || uuidv4()
        };

        // Insert section at the specified index
        model.sections.splice(index, 0, newSection);

        return model;
    }

    /**
     * Remove a section by ID and index
     */
    private removeSection(
        model: DocumentModel,
        sectionId: string,
        index: number
    ): DocumentModel {
        // Verify the section at the index has the expected ID
        if (index >= 0 && index < model.sections.length) {
            if (model.sections[index].id !== sectionId) {
                console.warn(`Section ID mismatch at index ${index}`);
                // Fall back to finding by ID if index doesn't match
                const sectionIndex = model.sections.findIndex(s => s.id === sectionId);
                if (sectionIndex !== -1) {
                    model.sections.splice(sectionIndex, 1);
                }
            } else {
                // Remove section at the specified index
                model.sections.splice(index, 1);
            }
        }

        return model;
    }

    /**
     * Update a section with new properties
     */
    private updateSection(
        model: DocumentModel,
        sectionId: string,
        updates: Partial<Section>
    ): DocumentModel {
        const sectionIndex = model.sections.findIndex(s => s.id === sectionId);

        if (sectionIndex === -1) {
            console.warn(`Section with ID ${sectionId} not found`);
            return model;
        }

        // Update the section with new properties
        model.sections[sectionIndex] = {
            ...model.sections[sectionIndex],
            ...updates
        };

        // Note: We don't replace paragraphs array unless explicitly provided in updates

        return model;
    }

    /**
     * Helper: Create a new text mark (formatting) in a paragraph
     */
    addTextMark(
        model: DocumentModel,
        sectionId: string,
        paragraphId: string,
        markType: 'bold' | 'italic' | 'code' | 'link',
        from: number,
        to: number,
        attrs?: { href?: string }
    ): DocumentModel {
        // Find the paragraph
        const sectionIndex = model.sections.findIndex(s => s.id === sectionId);
        if (sectionIndex === -1) return model;

        const paragraphIndex = model.sections[sectionIndex].paragraphs.findIndex(
            p => p.id === paragraphId
        );
        if (paragraphIndex === -1) return model;

        // Create a new mark
        const newMark: TextRange = {
            type: markType,
            from,
            to,
            ...(attrs && { attrs })
        };

        // Add the mark to the paragraph
        const paragraph = model.sections[sectionIndex].paragraphs[paragraphIndex];
        const updatedMarks = [...paragraph.marks, newMark];

        // Update the paragraph with the new mark
        return this.updateParagraph(model, sectionId, paragraphId, {
            marks: updatedMarks
        });
    }

    /**
     * Helper: Remove a text mark from a paragraph
     */
    removeTextMark(
        model: DocumentModel,
        sectionId: string,
        paragraphId: string,
        markType: 'bold' | 'italic' | 'code' | 'link',
        from: number,
        to: number
    ): DocumentModel {
        // Find the paragraph
        const sectionIndex = model.sections.findIndex(s => s.id === sectionId);
        if (sectionIndex === -1) return model;

        const paragraphIndex = model.sections[sectionIndex].paragraphs.findIndex(
            p => p.id === paragraphId
        );
        if (paragraphIndex === -1) return model;

        // Get the paragraph and its marks
        const paragraph = model.sections[sectionIndex].paragraphs[paragraphIndex];

        // Filter out the mark that matches the criteria
        const updatedMarks = paragraph.marks.filter(mark =>
            !(mark.type === markType && mark.from === from && mark.to === to)
        );

        // Update the paragraph with the filtered marks
        return this.updateParagraph(model, sectionId, paragraphId, {
            marks: updatedMarks
        });
    }

    /**
     * Helper: Split a paragraph at the specified offset
     * Creates two paragraphs from one, dividing at the given text position
     */
    splitParagraph(
        model: DocumentModel,
        sectionId: string,
        paragraphId: string,
        offset: number
    ): DocumentModel {
        const sectionIndex = model.sections.findIndex(s => s.id === sectionId);
        if (sectionIndex === -1) return model;

        const paragraphIndex = model.sections[sectionIndex].paragraphs.findIndex(
            p => p.id === paragraphId
        );
        if (paragraphIndex === -1) return model;

        const paragraph = model.sections[sectionIndex].paragraphs[paragraphIndex];

        // Create first paragraph (text before the split)
        const firstText = paragraph.text.substring(0, offset);
        const firstMarks = paragraph.marks
            .filter(mark => mark.from < offset)
            .map(mark => ({
                ...mark,
                to: Math.min(mark.to, offset)
            }));

        // Create second paragraph (text after the split)
        const secondText = paragraph.text.substring(offset);
        const secondMarks = paragraph.marks
            .filter(mark => mark.to > offset)
            .map(mark => ({
                ...mark,
                from: Math.max(mark.from - offset, 0),
                to: mark.to - offset
            }));

        // Update first paragraph
        let newModel = this.updateParagraph(model, sectionId, paragraphId, {
            text: firstText,
            marks: firstMarks
        });

        // Create and insert second paragraph
        const secondParagraph: Paragraph = {
            id: uuidv4(),
            type: paragraph.type,
            text: secondText,
            marks: secondMarks,
            level: paragraph.level  // Preserve heading level if applicable
        };

        return this.insertParagraph(
            newModel,
            sectionId,
            paragraphIndex + 1,
            secondParagraph
        );
    }

    /**
     * Helper: Merge two adjacent paragraphs into one
     */
    mergeParagraphs(
        model: DocumentModel,
        sectionId: string,
        firstParagraphId: string,
        secondParagraphId: string
    ): DocumentModel {
        const sectionIndex = model.sections.findIndex(s => s.id === sectionId);
        if (sectionIndex === -1) return model;

        const section = model.sections[sectionIndex];
        const firstIndex = section.paragraphs.findIndex(p => p.id === firstParagraphId);
        const secondIndex = section.paragraphs.findIndex(p => p.id === secondParagraphId);

        // Ensure paragraphs are adjacent
        if (firstIndex === -1 || secondIndex === -1 || secondIndex !== firstIndex + 1) {
            return model;
        }

        const firstParagraph = section.paragraphs[firstIndex];
        const secondParagraph = section.paragraphs[secondIndex];

        // Calculate joined text
        const joinedText = firstParagraph.text + secondParagraph.text;

        // Adjust marks from the second paragraph
        const adjustedSecondMarks = secondParagraph.marks.map(mark => ({
            ...mark,
            from: mark.from + firstParagraph.text.length,
            to: mark.to + firstParagraph.text.length
        }));

        // Combine marks from both paragraphs
        const joinedMarks = [...firstParagraph.marks, ...adjustedSecondMarks];

        // Update the first paragraph with combined content
        let newModel = this.updateParagraph(model, sectionId, firstParagraphId, {
            text: joinedText,
            marks: joinedMarks
        });

        // Remove the second paragraph
        return this.removeParagraph(newModel, sectionId, secondParagraphId, secondIndex);
    }
}

export default new EditorOperations(); 