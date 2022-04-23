import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/todos/todosSlice'

function Header() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addItem(title))
        setTitle('')
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
            </form>
        </header>
    )
}

export default Header