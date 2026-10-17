import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

// Creates the Redux store and connects it to the todo slice.
export const Store = configureStore({
    reducer: todoReducer    // Store ko bata diya ki 'todo' feature ka data 'todoReducer' handle karega
});