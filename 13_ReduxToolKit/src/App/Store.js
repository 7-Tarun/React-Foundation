import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

// Creates the Redux store and connects it to the todo slice.
export const Store = configureStore({
    // Syntax: reducer: <slice reducer> — the reducer manages this store's state.
    reducer: todoReducer
});