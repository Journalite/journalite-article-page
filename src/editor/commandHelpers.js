import { liftListItem } from 'prosemirror-schema-list';

/**
 * If the selection is inside a list, lift it out first,
 * then run the real command (cmd).
 */
export const withListLift = (cmd, listItemNode) => {
    return (state, dispatch, view) => {
        let lifted = false;

        if (liftListItem(listItemNode)(state, dispatch, view)) {
            // state has changed, pull the fresh state from the view
            state = view.state;
            lifted = true;
        }
        const ok = cmd(state, dispatch, view);
        return lifted || ok;
    };
}; 