import { createSlice, nanoid } from "@reduxjs/toolkit";

//Initial State, default state
const initialState = {
    todos: [{ id: 1, text: 'Hello World', completed: false }]
}

// createSlice combines this slice's initial state, reducer logic, and generated actions.
const todoSlice = createSlice({
    name: 'todo',   //Ye nam redux DevTools extension me dikhega
    initialState,   //Uper banaya hua initialState pass kar diya
    reducers: {     //Reducers me function aate hai jo state modify karte hai
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),   //nano id generate unique ID
                text: action.payload,    // Component se jo data aayega wo 'action.payload' me hoga
                completed: false,
            }
            // Redux Toolkit uses Immer, so this state update syntax safely creates a new state.
            state.todos.push(todo)  //new todo push in state
        },
        removeTodo: (state, action) => {
            // Keep todos whose id does not match the id provided in action.payload.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// Components ke liye actions (addTodo, removeTodo) export karo
export const {addTodo, removeTodo} = todoSlice.actions

// Store ke liye inka main reducer export karo
export default todoSlice.reducer