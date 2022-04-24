import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
    const { data } = await axios.get('http://localhost:7000/todos')
    return data;
})

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
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
    },
    extraReducers: {
        [getTodosAsync.pending]: (state) => {
            state.isLoading = true;
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [getTodosAsync.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        }

    }
})

export const { addItem, toggleComplete, removeItem, removeCompleted, setFilter } = todoSlice.actions;
export default todoSlice.reducer;