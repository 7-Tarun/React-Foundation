import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Hello World', completed: false }]
}

// createSlice combines this slice's initial state, reducer logic, and generated actions.
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Syntax: (state, action) => ...; action.payload contains the value sent with the action.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            // Redux Toolkit uses Immer, so this state update syntax safely creates a new state.
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // Keep todos whose id does not match the id provided in action.payload.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// createSlice generates one action creator for each reducer.
export const {addTodo, removeTodo} = todoSlice.actions

// The store uses this reducer to update the todo slice state.
export default todoSlice.reducer