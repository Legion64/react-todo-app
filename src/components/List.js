import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosAsync } from '../redux/todos/todosSlice'
import Loading from './Loading'
import Error from './Error'

function List() {
    let filteredItems = []
    const items = useSelector(state => state.todos.items)
    const { filterName, isLoading, error } = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosAsync())
    }, [])

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

    if (isLoading)
        return (
            <Loading />
        )

    if (error)
        return (
            <Error message={error} />
        )

    return (
        <ul className="todo-list">
            {filteredItems.map(todo => (
                <ListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default List