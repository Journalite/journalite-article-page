import { Plugin, PluginKey } from 'prosemirror-state';
import { setBlockType } from 'prosemirror-commands';
import { schema } from './schema.js';

export const exitHeadingPlugin = new Plugin({
    key: new PluginKey('exitHeading'),
    props: {
        handleKeyDown(view, event) {
            if (event.key !== 'Enter' || event.shiftKey) return false;

            const { state, dispatch } = view;
            const { $from, empty } = state.selection;
            const { heading, paragraph } = schema.nodes;

            // Only trigger if the cursor is at the *end* of a heading
            if (
                empty &&
                $from.parent.type === heading &&
                $from.parentOffset === $from.parent.content.size
            ) {
                event.preventDefault();           // stop default split behaviour
                return setBlockType(paragraph)(state, dispatch, view);
            }
            return false; // let other handlers run
        },
    },
}); 