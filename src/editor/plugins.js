import { history, undo, redo } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap, toggleMark, setBlockType } from 'prosemirror-commands';
import {
    wrapInList,
    splitListItem,
    liftListItem,
    sinkListItem
} from 'prosemirror-schema-list';
import {
    inputRules,
    wrappingInputRule,
    textblockTypeInputRule,
    smartQuotes,
    emDash,
    ellipsis
} from 'prosemirror-inputrules';
import { dropCursor } from 'prosemirror-dropcursor';
import { gapCursor } from 'prosemirror-gapcursor';
import { schema } from './schema.js';
import { headingCmd, paragraphCmd, toggleBlockquote } from './commands.js';
import { exitHeadingPlugin } from './exitHeadingPlugin.js';
import { syntaxHighlightingPlugin } from './syntaxHighlighting.js';

// Create input rules for automatic formatting
function buildInputRulesPlugin() {
    const rules = [];

    // 1) Smart text rules - only ellipsis to avoid conflicts
    rules.push(ellipsis);

    // 2) Bullet list: typing "- " at start of line
    const bulletRule = wrappingInputRule(
        /^([-+*])\s$/,
        schema.nodes.bullet_list,
        match => null,
        (match, node) => ({ tight: true })
    );
    rules.push(bulletRule);

    // 3) Ordered list: typing "1. " at start of line
    const orderedRule = wrappingInputRule(
        /^(\d+)\.\s$/,
        schema.nodes.ordered_list,
        match => ({ order: +match[1] }),
        (match, node) => ({ tight: true })
    );
    rules.push(orderedRule);

    // 4) Headings: typing "#" to "######" followed by space
    const headingRule = textblockTypeInputRule(
        /^(#{1,6})\s$/,
        schema.nodes.heading,
        match => ({ level: match[1].length })
    );
    rules.push(headingRule);

    // 5) Blockquote: typing "> " at start of line
    const blockquoteRule = wrappingInputRule(
        /^>\s$/,
        schema.nodes.blockquote
    );
    rules.push(blockquoteRule);

    // 6) Code block: typing "```" or "```javascript" at start of line
    const codeRule = textblockTypeInputRule(
        /^```([a-zA-Z0-9]*)?$/,
        schema.nodes.code_block,
        match => ({ language: match[1] || 'javascript' })
    );
    rules.push(codeRule);

    return inputRules({ rules });
}

// Build keymap with common shortcuts
function buildKeymap() {
    const keys = {
        // Text formatting shortcuts
        'Mod-b': toggleMark(schema.marks.strong),
        'Mod-i': toggleMark(schema.marks.em),

        // Block type shortcuts - now using selection-aware commands
        'Mod-0': paragraphCmd(),
        'Mod-Shift-1': headingCmd(1),
        'Mod-Shift-2': headingCmd(2),
        'Mod-Shift-3': headingCmd(3),
        'Mod-Shift-4': headingCmd(4),
        'Mod-Shift-5': headingCmd(5),
        'Mod-Shift-6': headingCmd(6),
        'Mod->': toggleBlockquote,          // ⌘/Ctrl + Shift + .
        'Shift-Ctrl->': toggleBlockquote,   // Windows/Linux variant

        // List shortcuts
        'Shift-Ctrl-8': wrapInList(schema.nodes.bullet_list),
        'Shift-Ctrl-9': wrapInList(schema.nodes.ordered_list),

        // Enhanced list item navigation - only for list items
        'Enter': (state, dispatch, view) => {
            const { $from, empty } = state.selection;

            // Handle Enter in list items
            if ($from.parent.type === schema.nodes.list_item) {
                return splitListItem(schema.nodes.list_item)(state, dispatch);
            }

            // For all other cases, return false to let baseKeymap handle it
            return false;
        },
        'Mod-[': liftListItem(schema.nodes.list_item),
        'Mod-]': sinkListItem(schema.nodes.list_item),

        // Only handle backspace for empty list items
        'Backspace': (state, dispatch, view) => {
            const { $from, empty } = state.selection;
            if (empty && $from.parent.type === schema.nodes.list_item &&
                $from.parentOffset === 0 && $from.parent.content.size === 0) {
                return liftListItem(schema.nodes.list_item)(state, dispatch);
            }
            return false; // Let baseKeymap handle normal backspace
        },

        // History
        'Mod-z': undo,
        'Mod-y': redo,
        'Shift-Mod-z': redo,
        // REMOVED custom 'Space' handler to let input rules and default behavior manage it.
    };

    return keymap(keys);
}

// Create and export the complete plugins array
export function createPlugins() {
    const inputRulesPlugin = buildInputRulesPlugin();
    const historyPlugin = history();
    const baseKeymapPlugin = keymap(baseKeymap); // Essential for basic editor functionality
    const customKeymapPlugin = buildKeymap();
    const dropCursorPlugin = dropCursor();
    const gapCursorPlugin = gapCursor();

    const allPlugins = [
        // Input rules MUST come before keymap for auto-formatting to work
        inputRulesPlugin,
        historyPlugin,
        // Base keymap MUST come first to handle basic interactions
        baseKeymapPlugin,
        // Exit heading plugin must come before custom keymap
        exitHeadingPlugin,
        // Custom keymap comes after base keymap
        customKeymapPlugin,
        dropCursorPlugin,
        gapCursorPlugin,
        // Syntax highlighting for code blocks
        syntaxHighlightingPlugin(schema),
    ];

    return allPlugins;
}

// Export individual plugins for custom configurations
export {
    buildInputRulesPlugin,
    buildKeymap
}; 