import { createSlice, nanoid } from '@reduxjs/toolkit';

//Initial State, default state
const initialState = {
    todos: [{ id: 1, text: 'Hello World', completed: false, }]
}

//Slice Creation
export const todoSlice = createSlice({
    name: 'todo',   //Ye nam redux DevTools extension me dikhega
    initialState,   //Uper banaya hua initialState pass kar diya
    reducers: {     //Reducers me function aate hai jo state modify karte hai
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),   //nano id generate unique ID
                text: action.payload    // Component se jo data aayega wo 'action.payload' me hoga
            }
            state.todos.push(todo)  //State me new todo push kar diya
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

// Components ke liye actions (addTodo, removeTodo) export karo
export const { addTodo, removeTodo } = todoSlice.actions

// Store ke liye inka main reducer export karo
export default todoSlice.reducer