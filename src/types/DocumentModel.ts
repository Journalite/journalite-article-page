// Document Model Types for Journalite Editor
// Following Medium's approach of a structured JSON document model

export interface TextRange {
    type: 'bold' | 'italic' | 'code' | 'link';
    from: number;  // Start index in text
    to: number;    // End index in text
    attrs?: {      // Additional attributes for specific mark types
        href?: string; // For links
    };
}

export interface Paragraph {
    id: string;          // Unique identifier
    type: 'paragraph' | 'heading' | 'image' | 'blockquote' | 'bulletList' | 'orderedList' | 'listItem';
    text: string;        // Plain text content
    marks: TextRange[];  // Formatting applied to text ranges
    level?: number;      // For headings (1-3)
    src?: string;        // For images
}

export interface Section {
    id: string;
    type: 'section';     // Could be extended later for different section types
    paragraphs: Paragraph[];
}

export interface DocumentModel {
    id: string;          // Document ID (article ID)
    title: string;       // Article title
    sections: Section[]; // Content sections
    coverImage?: string; // Optional cover image
    tags?: string[];     // Article tags
    createdAt?: string;  // Creation timestamp
    updatedAt?: string;  // Last update timestamp
    authorId?: string;   // Author ID
    status?: 'published' | 'drafts'; // Article status
}

// Document Operations (the six atomic operations mentioned in Medium's approach)
export type DocumentOp =
    | { type: 'INSERT_PARAGRAPH'; sectionId: string; paragraphId: string; index: number; paragraph: Paragraph }
    | { type: 'REMOVE_PARAGRAPH'; sectionId: string; paragraphId: string; index: number }
    | { type: 'UPDATE_PARAGRAPH'; sectionId: string; paragraphId: string; updates: Partial<Paragraph> }
    | { type: 'INSERT_SECTION'; index: number; section: Section }
    | { type: 'REMOVE_SECTION'; sectionId: string; index: number }
    | { type: 'UPDATE_SECTION'; sectionId: string; updates: Partial<Section> };

// Helper types for Document conversions
export interface NodeAttributes {
    [key: string]: any;
}

export interface SerializedNode {
    type: string;
    content?: SerializedNode[];
    text?: string;
    attrs?: NodeAttributes;
    marks?: {
        type: string;
        attrs?: NodeAttributes;
    }[];
}

export interface DocumentConverter {
    modelToDOM: (model: DocumentModel) => HTMLElement;
    DOMToModel: (dom: HTMLElement) => DocumentModel;
    modelToTiptap: (model: DocumentModel) => SerializedNode[];
    tiptapToModel: (nodes: SerializedNode[]) => DocumentModel;
} 