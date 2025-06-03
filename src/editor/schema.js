import { Schema, DOMParser, DOMSerializer } from 'prosemirror-model';

// Define all nodes manually including list nodes
const nodes = {
    // Document node - the root
    doc: {
        content: 'block+'
    },

    // Text node - inline text content
    text: {
        group: 'inline'
    },

    // Paragraph node - basic block containing inline content
    paragraph: {
        content: 'inline*',
        group: 'block',
        parseDOM: [{ tag: 'p' }],
        toDOM() { return ['p', 0] }
    },

    // Heading node with levels 1-6
    heading: {
        attrs: { level: { default: 1 } },
        content: 'inline*',
        group: 'block',
        defining: true,
        parseDOM: [
            { tag: 'h1', attrs: { level: 1 } },
            { tag: 'h2', attrs: { level: 2 } },
            { tag: 'h3', attrs: { level: 3 } },
            { tag: 'h4', attrs: { level: 4 } },
            { tag: 'h5', attrs: { level: 5 } },
            { tag: 'h6', attrs: { level: 6 } }
        ],
        toDOM(node) { return [`h${node.attrs.level}`, 0] }
    },

    // Hard break node
    hard_break: {
        inline: true,
        group: 'inline',
        selectable: false,
        parseDOM: [{ tag: 'br' }],
        toDOM() { return ['br'] }
    },

    // Image node with enhanced attributes
    image: {
        inline: true,
        attrs: {
            src: {},
            alt: { default: null },
            title: { default: null },
            width: { default: null },
            height: { default: null }
        },
        group: 'inline',
        draggable: true,
        parseDOM: [
            {
                tag: 'img[src]',
                getAttrs(dom) {
                    return {
                        src: dom.getAttribute('src'),
                        title: dom.getAttribute('title'),
                        alt: dom.getAttribute('alt'),
                        width: dom.getAttribute('width'),
                        height: dom.getAttribute('height')
                    };
                }
            }
        ],
        toDOM(node) {
            const { src, alt, title, width, height } = node.attrs;
            const attrs = { src };
            if (alt != null) attrs.alt = alt;
            if (title != null) attrs.title = title;
            if (width != null) attrs.width = width;
            if (height != null) attrs.height = height;
            return ['img', attrs];
        }
    },

    // Blockquote node
    blockquote: {
        content: 'block+',
        group: 'block',
        defining: true,
        parseDOM: [{ tag: 'blockquote' }],
        toDOM() { return ['blockquote', 0] }
    },

    // Code block node
    code_block: {
        content: 'text*',
        marks: '',
        group: 'block',
        code: true,
        defining: true,
        parseDOM: [{ tag: 'pre', preserveWhitespace: 'full' }],
        toDOM() { return ['pre', ['code', 0]] }
    },

    // Horizontal rule
    horizontal_rule: {
        group: 'block',
        parseDOM: [{ tag: 'hr' }],
        toDOM() { return ['hr'] }
    },

    // List nodes - manually defined to avoid addListNodes issue
    bullet_list: {
        content: 'list_item+',
        group: 'block',
        parseDOM: [{ tag: 'ul' }],
        toDOM() { return ['ul', 0] }
    },

    ordered_list: {
        content: 'list_item+',
        group: 'block',
        attrs: { order: { default: 1 } },
        parseDOM: [{
            tag: 'ol',
            getAttrs(dom) {
                return { order: dom.hasAttribute('start') ? +dom.getAttribute('start') : 1 }
            }
        }],
        toDOM(node) {
            return node.attrs.order == 1 ? ['ol', 0] : ['ol', { start: node.attrs.order }, 0]
        }
    },

    list_item: {
        content: 'paragraph block*',
        parseDOM: [{ tag: 'li' }],
        toDOM() { return ['li', 0] },
        defining: true
    }
};

// Define marks
const marks = {
    // Strong mark (bold)
    strong: {
        parseDOM: [
            { tag: 'strong' },
            { tag: 'b', getAttrs: node => node.style.fontWeight != 'normal' && null },
            { style: 'font-weight', getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null }
        ],
        toDOM() { return ['strong', 0] }
    },

    // Emphasis mark (italic)
    em: {
        parseDOM: [
            { tag: 'i' }, { tag: 'em' },
            { style: 'font-style=italic' }
        ],
        toDOM() { return ['em', 0] }
    },

    // Code mark (inline code)
    code: {
        parseDOM: [{ tag: 'code' }],
        toDOM() { return ['code', 0] }
    },

    // Link mark with enhanced attributes
    link: {
        attrs: {
            href: {},
            title: { default: null },
            target: { default: null }
        },
        inclusive: false,
        parseDOM: [
            {
                tag: 'a[href]',
                getAttrs(dom) {
                    return {
                        href: dom.getAttribute('href'),
                        title: dom.getAttribute('title'),
                        target: dom.getAttribute('target')
                    };
                }
            }
        ],
        toDOM(node) {
            const { href, title, target } = node.attrs;
            const attrs = { href };
            if (title != null) attrs.title = title;
            if (target != null) attrs.target = target;
            return ['a', attrs, 0];
        }
    }
};

// Create and export the schema
export const schema = new Schema({
    nodes,
    marks
});

// Helper function to create an empty document
export function createEmptyDocument() {
    return schema.node('doc', null, [
        schema.node('paragraph')
    ]);
}

// Parse HTML content to ProseMirror document
export function parseHTML(html) {
    if (!html || html.trim() === '') {
        return createEmptyDocument();
    }

    const div = document.createElement('div');
    div.innerHTML = html;
    return DOMParser.fromSchema(schema).parse(div);
}

// Serialize ProseMirror document to HTML
export function serializeToHTML(doc) {
    const div = document.createElement('div');
    div.appendChild(DOMSerializer.fromSchema(schema).serializeFragment(doc.content));
    return div.innerHTML;
} 