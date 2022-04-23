import React from 'react'
import { useDispatch } from 'react-redux'

import {setFilter} from '../redux/todos/todosSlice'

function Filter() {
    const dispatch = useDispatch()

    const handleFilter = (filter) => {
        dispatch(setFilter(filter))
    }

    return (
        <ul className="filters">
            <li>
                <a href="#/" className="selected" onClick={() => handleFilter('all')}>All</a>
            </li>
            <li>
                <a href="#/" onClick={() => handleFilter('active')}>Active</a>
            </li>
            <li>
                <a href="#/" onClick={() => handleFilter('completed')}>Completed</a>
            </li>
        </ul>
    )
}

export default Filter