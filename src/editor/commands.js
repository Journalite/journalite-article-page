import { setBlockType, wrapIn, lift } from 'prosemirror-commands';
import { liftListItem } from 'prosemirror-schema-list';
import { schema } from './schema.js';
import { withListLift } from './commandHelpers.js';

const { heading, paragraph, list_item, blockquote } = schema.nodes;

/**
 * Heading command that works even when text is inside lists
 * Lifts out of lists first, then applies heading level
 */
export const headingCmd = (level) =>
    withListLift(
        setBlockType(heading, { level }),
        list_item
    );

/**
 * Paragraph command that works even when text is inside lists
 * Lifts out of lists first, then applies paragraph format
 */
export const paragraphCmd = () =>
    withListLift(
        setBlockType(paragraph),
        list_item
    );

/**
 * Toggle block-quote on the current selection:
 *   • if already quoted  → lift out
 *   • otherwise          → wrap in <blockquote>
 * Works on multiple paragraphs and inside lists.
 */
export const toggleBlockquote = (state, dispatch, view) => {
    // 1. If we're *inside* a blockquote anywhere in the selection, lift it out
    const { from, to } = state.selection;
    let inQuote = false;
    state.doc.nodesBetween(from, to, node => {
        if (node.type === blockquote) {
            inQuote = true;
            return false;              // early exit
        }
        return true;
    });

    if (inQuote) {
        // also lift once if we're inside a list → blockquote → paragraph
        if (liftListItem(list_item)(state, dispatch)) return true;
        return lift(state, dispatch);
    }

    // 2. Otherwise wrap the selection in a new blockquote
    //    (lift out of list first so the quote sits at top level)
    if (liftListItem(list_item)(state, dispatch)) {
        // state has changed; fetch the fresh state from the view
        state = view.state;
    }
    return wrapIn(blockquote)(state, dispatch, view);
}; 