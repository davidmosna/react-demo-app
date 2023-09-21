import {ListItem} from "./ListItem";
import {useList} from "./ListContext";
import './List.css'

export function List() {
    const items = useList()

    return (
        <ul className="List">
            {items.map(item => (
                <ListItem key={item.name} item={item}/>
            ))}
        </ul>
    )
}
