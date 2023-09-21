import {ListContext, ListDispatchContext} from "./ListContext";
import {itemsData} from "./data";
import {useImmerReducer} from "use-immer";

export const SELECT_ITEM = "SELECT_ITEM"
export const DESELECT_ITEM = "DESELECT_ITEM"

const listReducer = (draft, action) => {
    switch (action.type) {
        case SELECT_ITEM: {
            const item = draft.find(item => item.name === action.id)
            item.active = true
            break;
        }
        case DESELECT_ITEM: {
            const item = draft.find(item => item.name === action.id)
            item.active = false
            break;
        }
        default:
            throw new Error('Unknown action')
    }
}

export const ListProvider = ({children}) => {
    const [items, dispatch] = useImmerReducer(listReducer, itemsData)

    return (
        <ListContext.Provider value={items}>
            <ListDispatchContext.Provider value={dispatch}>
                {children}
            </ListDispatchContext.Provider>
        </ListContext.Provider>
    )
}
