import React from 'react'
import { useDispatch } from 'react-redux'

import { removeCompleted } from '../redux/todos/todosSlice'

function ClearCompleted() {
    const dispatch = useDispatch()

    return (
        <button className="clear-completed" onClick={() => dispatch(removeCompleted())}>
            Clear completed
        </button>
    )
}

export default ClearCompleted