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

// Create input rules for automatic formatting
function buildInputRulesPlugin() {
    console.log('Building input rules plugin...');
    const rules = [];

    // 1) Smart text rules (quotes, em-dash, ellipsis) - but be more conservative
    // Only add ellipsis to avoid conflicts with typing
    rules.push(ellipsis);
    console.log('Added basic smart text rules');

    // 2) Bullet list: typing "- " at start of line (more precise pattern to avoid cursor jumping)
    const bulletRule = wrappingInputRule(
        /^([-+*])\s$/,  // Must be at start of line with space
        schema.nodes.bullet_list,
        match => null,
        (match, node) => ({ tight: true })
    );
    rules.push(bulletRule);
    console.log('Added bullet list rule');

    // 3) Ordered list: typing "1. " at start of line (more precise)
    const orderedRule = wrappingInputRule(
        /^(\d+)\.\s$/,  // Must be at start of line with space
        schema.nodes.ordered_list,
        match => ({ order: +match[1] }),
        (match, node) => ({ tight: true })
    );
    rules.push(orderedRule);
    console.log('Added ordered list rule');

    // 4) Headings: typing "#" to "######" followed by space (FIXED: more precise to prevent cursor jumping)
    const headingRule = textblockTypeInputRule(
        /^(#{1,6})\s$/,  // Must be at very start of line followed by space
        schema.nodes.heading,
        match => ({ level: match[1].length })
    );
    rules.push(headingRule);
    console.log('Added heading rule');

    // 5) Blockquote: typing "> " at start of line (more precise)
    const blockquoteRule = wrappingInputRule(
        /^>\s$/,  // Must be at start of line with space
        schema.nodes.blockquote
    );
    rules.push(blockquoteRule);
    console.log('Added blockquote rule');

    // 6) Code block: typing "```" at start of line (no space needed for this one)
    const codeRule = textblockTypeInputRule(
        /^```$/,
        schema.nodes.code_block
    );
    rules.push(codeRule);
    console.log('Added code block rule');

    console.log('Total input rules created:', rules.length);
    const plugin = inputRules({ rules });
    console.log('Input rules plugin created successfully');
    return plugin;
}

// Build keymap with common shortcuts
function buildKeymap() {
    const keys = {
        ...baseKeymap,

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

        // Enhanced list item navigation
        'Enter': splitListItem(schema.nodes.list_item),
        'Mod-[': liftListItem(schema.nodes.list_item),
        'Mod-]': sinkListItem(schema.nodes.list_item),

        // Simplified backspace handling
        'Backspace': (state, dispatch, view) => {
            const { $from, empty } = state.selection;
            if (empty && $from.parent.type === schema.nodes.list_item &&
                $from.parentOffset === 0 && $from.parent.content.size === 0) {
                if (dispatch) {
                    const lifted = liftListItem(schema.nodes.list_item)(state, dispatch);
                    if (!lifted) {
                        const tr = state.tr;
                        const range = $from.blockRange();
                        if (range) {
                            tr.setBlockType(range.start, range.end, schema.nodes.paragraph);
                            dispatch(tr);
                        }
                    }
                }
                return true;
            }
            return false; // Fall back to default
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
    console.log('Creating ProseMirror plugins...');

    const inputRulesPlugin = buildInputRulesPlugin();
    console.log('Input rules plugin ready');

    const historyPlugin = history();
    console.log('History plugin ready');

    const keymapPlugin = buildKeymap();
    console.log('Keymap plugin ready');

    const dropCursorPlugin = dropCursor();
    console.log('Drop cursor plugin ready');

    const gapCursorPlugin = gapCursor();
    console.log('Gap cursor plugin ready');

    console.log('Exit heading plugin ready');

    const allPlugins = [
        // Input rules MUST come before keymap for auto-formatting to work
        inputRulesPlugin,
        historyPlugin,
        keymapPlugin,
        dropCursorPlugin,
        gapCursorPlugin,
        exitHeadingPlugin,
    ];

    console.log('All plugins created. Total count:', allPlugins.length);
    return allPlugins;
}

// Export individual plugins for custom configurations
export {
    buildInputRulesPlugin,
    buildKeymap
}; 