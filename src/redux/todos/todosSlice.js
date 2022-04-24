import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        items: [
            {
                id: 1,
                title: "Learn JavaScript",
                completed: false
            },
            {
                id: 2,
                title: "Learn React",
                completed: true
            },
            {
                id: 3,
                title: "Have a life!",
                completed: false
            }
        ],
        filterName: 'all'
    },
    reducers: {
        addItem: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({title}) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false
                    }
                }
            }
        },
        toggleComplete(state, action) {
            const id = action.payload
            const item = state.items.find(item => item.id === id)
            item.completed = !item.completed
        },
        removeItem(state, action) {
            const id = action.payload
            const index = state.items.findIndex(item => item.id === id)
            state.items.splice(index, 1)
        },
        setFilter(state, action) {
            state.filterName = action.payload
        },
        removeCompleted(state){
            state.items = state.items.filter(item => item.completed !== true)
        }
    }
})

export const { addItem, toggleComplete, removeItem, removeCompleted, setFilter } = todoSlice.actions;
export default todoSlice.reducer;