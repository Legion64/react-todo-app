import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, removeItem } from '../redux/todos/todosSlice'

function ListItem(props) {
    const dispatch = useDispatch()
    const {id, title, completed} = props.todo

    const handleRemove = (id) => {
        if(window.confirm('Are you sure?')) {
            dispatch(removeItem(id))
        }
    }
    
    return (
        <li className={completed ? 'completed' : null}>
            <div className="view">
                <input className="toggle" type="checkbox" defaultChecked={completed}
                    onChange={() => dispatch(toggleComplete(id))} />
                <label>{title}</label>
                <button className="destroy"
                    onClick={() => handleRemove(id)}
                ></button>
            </div>
        </li>
    )
}

export default ListItem