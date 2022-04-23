import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

function List() {
    let filteredItems = []  
    const items = useSelector(state => state.todos.items)
    const filterName = useSelector(state => state.todos.filterName)

    switch (filterName) {
        case 'active':
            filteredItems = items.filter(item => item.completed === false)
            break;
        case 'completed':
            filteredItems = items.filter(item => item.completed === true)
            break;
        default:
            filteredItems = items
            break;
    }

    return (
        <ul className="todo-list">
            {filteredItems.map(todo => (
                <ListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default List