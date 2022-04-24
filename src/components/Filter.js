import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {setFilter} from '../redux/todos/todosSlice'

function Filter() {
    const [selected, setSelected] = useState('all')
    const dispatch = useDispatch()

    const handleFilter = (filter) => {
        setSelected(filter)
        dispatch(setFilter(filter))
    }

    return (
        <ul className="filters">
            <li>
                <a href="#/" className={(selected === 'all') ? 'selected': null} onClick={() => handleFilter('all')}>All</a>
            </li>
            <li>
                <a href="#/" className={(selected === 'active') ? 'selected': null} onClick={() => handleFilter('active')}>Active</a>
            </li>
            <li>
                <a href="#/" className={(selected === 'completed') ? 'selected': null} onClick={() => handleFilter('completed')}>Completed</a>
            </li>
        </ul>
    )
}

export default Filter