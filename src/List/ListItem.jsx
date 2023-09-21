import {useListDispatch} from "./ListContext";

export function ListItem({item}) {
    const dispatch = useListDispatch()

    const handleClick = () => {
        dispatch({
            type: item.active ? 'DESELECT_ITEM' : 'SELECT_ITEM',
            id: item.name
        })
    }

    return (
        <li key={item.name}
            className={`List__item List__item--${item.color} ${item.active ? 'List__item--active' : null}`}
            onClick={handleClick}>
            {item.name}
        </li>
    )
}
