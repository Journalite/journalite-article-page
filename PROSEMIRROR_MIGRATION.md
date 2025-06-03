# ProseMirror Editor Migration Guide

## Overview

This project has been successfully migrated from a custom contentEditable implementation to a modern ProseMirror-based rich text editor. This provides better reliability, extensibility, and user experience.

## What Changed

### 🗂️ New File Structure

```
src/
├── components/
│   ├── Editor.jsx           ← New ProseMirror React component
│   ├── ArticleEditor.tsx.bak ← Old implementation (backup)
│   └── ArticleComposer.tsx   ← Updated to use new Editor
├── editor/
│   ├── schema.js            ← ProseMirror schema definitions
│   └── plugins.js           ← ProseMirror plugins setup
└── styles/
    ├── Editor.module.css     ← New styling for ProseMirror editor
    └── ArticleEditor.module.css.bak ← Old styles (backup)
```

### 📦 Dependencies

**Added:**
- `prosemirror-model` - Document model and schema
- `prosemirror-state` - Editor state management
- `prosemirror-view` - Editor view and DOM handling
- `prosemirror-history` - Undo/redo functionality
- `prosemirror-keymap` - Keyboard shortcuts
- `prosemirror-commands` - Basic editing commands
- `prosemirror-schema-basic` - Basic nodes and marks
- `prosemirror-schema-list` - List support
- `prosemirror-dropcursor` - Visual drop cursor
- `prosemirror-gapcursor` - Better cursor positioning
- `prosemirror-inputrules` - Markdown-like input rules

**Removed:**
- All TipTap dependencies (unused)
- Custom document model and event handler

## 🎯 Features

### Rich Text Formatting
- **Bold** (Cmd/Ctrl+B) and **Italic** (Cmd/Ctrl+I)
- Headings H1-H6 (Cmd/Ctrl+1-6)
- Paragraphs (Cmd/Ctrl+0)
- Blockquotes and code blocks
- Bullet and ordered lists
- Image insertion
- Links (with title and target support)

### Keyboard Shortcuts
- `Cmd/Ctrl+B` - Toggle bold
- `Cmd/Ctrl+I` - Toggle italic
- `Cmd/Ctrl+1-6` - Set heading level
- `Cmd/Ctrl+0` - Set paragraph
- `Cmd/Ctrl+Z` - Undo
- `Cmd/Ctrl+Y` / `Cmd/Ctrl+Shift+Z` - Redo
- `Cmd/Ctrl+Shift+8` - Toggle bullet list
- `Cmd/Ctrl+Shift+9` - Toggle ordered list
- `Enter` - Split list item
- `Tab` - Sink list item
- `Shift+Tab` - Lift list item
- `Shift+Enter` - Insert hard break

### Markdown-like Input Rules
- `# ` → Heading 1
- `## ` → Heading 2
- `### ` → Heading 3
- `- ` or `* ` → Bullet list
- `1. ` → Ordered list
- `> ` → Blockquote
- ``` → Code block

### Modern UX
- Visual drop cursor when dragging content
- Gap cursor for better positioning
- Responsive toolbar that appears on focus
- Clean, modern styling
- Mobile-optimized interface

## 🔧 Usage

### Basic Usage

```jsx
import Editor from '@/components/Editor';

function MyComponent() {
  const [content, setContent] = useState('');

  const handleChange = (html, json) => {
    setContent(html);
    // Save to backend, localStorage, etc.
  };

  return (
    <Editor
      articleId="unique-id"
      initialContent={content}
      onChange={handleChange}
      placeholder="Start writing..."
    />
  );
}
```

### Props

- `articleId` (string, required) - Unique identifier for the document
- `initialContent` (string, optional) - HTML or JSON string to load initially
- `onChange` (function, optional) - Callback when content changes: `(html: string, json: object) => void`
- `placeholder` (string, optional) - Placeholder text for empty editor
- `className` (string, optional) - Additional CSS classes

### Content Formats

The editor supports both HTML and JSON for content:

**HTML Input/Output:**
```html
<h1>My Article</h1>
<p>This is a <strong>bold</strong> paragraph with <em>italic</em> text.</p>
<ul>
  <li>Bullet point one</li>
  <li>Bullet point two</li>
</ul>
```

**JSON Output:**
```json
{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": { "level": 1 },
      "content": [{ "type": "text", "text": "My Article" }]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "text": "This is a " },
        { "type": "text", "marks": [{ "type": "strong" }], "text": "bold" },
        { "type": "text", "text": " paragraph with " },
        { "type": "text", "marks": [{ "type": "em" }], "text": "italic" },
        { "type": "text", "text": " text." }
      ]
    }
  ]
}
```

## 🎨 Styling

The editor uses CSS modules for styling. Key classes:

- `.editor` - Main container
- `.toolbar` - Floating toolbar
- `.toolbarButton` - Individual toolbar buttons
- `.prosemirrorEditor` - Main editor content area

### Customization

To customize the appearance, modify `src/styles/Editor.module.css`:

```css
/* Change toolbar position */
.toolbar {
  position: relative; /* Instead of fixed */
  opacity: 1;
  visibility: visible;
}

/* Customize button styles */
.toolbarButton {
  background-color: #f0f0f0;
  border-radius: 8px;
}

/* Style editor content */
.prosemirrorEditor {
  font-family: 'Your Custom Font';
  font-size: 18px;
}
```

## 🔌 Extending the Editor

### Adding Custom Nodes

To add new content types, extend the schema in `src/editor/schema.js`:

```javascript
const customNodes = {
  ...basicNodes,
  callout: {
    content: 'block+',
    group: 'block',
    attrs: { type: { default: 'info' } },
    parseDOM: [{ tag: 'div.callout' }],
    toDOM(node) {
      return ['div', { class: `callout callout-${node.attrs.type}` }, 0];
    }
  }
};
```

### Adding Custom Commands

Create new toolbar commands by adding them to the Editor component:

```javascript
const insertCallout = useCallback(() => {
  const calloutNode = schema.nodes.callout.create({ type: 'info' });
  const transaction = viewRef.current.state.tr.replaceSelectionWith(calloutNode);
  viewRef.current.dispatch(transaction);
  viewRef.current.focus();
}, []);
```

### Adding Plugins

Extend functionality with custom plugins in `src/editor/plugins.js`:

```javascript
import { Plugin } from 'prosemirror-state';

const myCustomPlugin = new Plugin({
  props: {
    handleKeyDown(view, event) {
      // Custom key handling
      if (event.key === 'Tab' && event.shiftKey) {
        // Custom behavior
        return true;
      }
      return false;
    }
  }
});

export function createPlugins() {
  return [
    // ... existing plugins
    myCustomPlugin
  ];
}
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Bold and italic formatting works
- [ ] Heading levels H1-H6 can be set
- [ ] Lists (bullet and ordered) work correctly
- [ ] Blockquotes and code blocks render properly
- [ ] Image insertion via URL prompt
- [ ] Undo/redo functionality
- [ ] Keyboard shortcuts work
- [ ] Markdown-like input rules work
- [ ] Content persists between sessions
- [ ] Mobile interface is responsive
- [ ] Toolbar appears/disappears correctly

### Test Content

Use this sample content to test all features:

```html
<h1>Test Article</h1>
<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
<h2>Lists</h2>
<ul>
  <li>Bullet point one</li>
  <li>Bullet point two</li>
</ul>
<ol>
  <li>Numbered item one</li>
  <li>Numbered item two</li>
</ol>
<blockquote>This is a blockquote</blockquote>
<pre><code>console.log('This is code');</code></pre>
<img src="https://via.placeholder.com/300x200" alt="Test image" />
```

## 🐛 Troubleshooting

### Common Issues

**1. Editor not rendering:**
- Check that all ProseMirror dependencies are installed
- Verify the CSS is properly imported
- Check browser console for JavaScript errors

**2. Content not saving:**
- Ensure the `onChange` callback is properly implemented
- Check that the parent component is handling the content updates
- Verify the backend API is receiving the data

**3. Styling issues:**
- Import `prosemirror-view/style/prosemirror.css` for base styles
- Check that CSS modules are properly configured
- Verify class names match the CSS module exports

**4. TypeScript errors:**
- The Editor component is written in JavaScript (.jsx)
- Ensure proper prop types are passed from TypeScript components

### Performance Considerations

- The editor creates a new state on every transaction - this is normal
- For large documents, consider implementing lazy loading
- Use `React.memo` for the parent component if re-renders are expensive

## 📚 Resources

- [ProseMirror Guide](https://prosemirror.net/docs/guide/)
- [ProseMirror Reference](https://prosemirror.net/docs/ref/)
- [Schema Guide](https://prosemirror.net/docs/guide/#schema)
- [Plugin Development](https://prosemirror.net/docs/guide/#plugins)

## 🤝 Contributing

When extending the editor:

1. Keep the schema simple and focused
2. Add comprehensive keyboard shortcuts
3. Ensure mobile compatibility
4. Test with various content types
5. Update this documentation

## 🔄 Migration Notes

### For Developers

The old `ArticleEditor.tsx` used:
- Custom `contentEditable` with `document.execCommand`
- Custom document model with sections and paragraphs
- Manual event handling and DOM manipulation

The new `Editor.jsx` uses:
- ProseMirror's structured document model
- Immutable state with transactions
- Robust undo/redo and collaboration support
- Better accessibility and mobile support

### Breaking Changes

- `initialHtml` prop renamed to `initialContent`
- `onChange` now provides both HTML and JSON
- No more custom document model - uses ProseMirror's standard format
- Keyboard shortcuts slightly different (added more standard ones)

The migration maintains backward compatibility for content and provides a significantly improved editing experience. 