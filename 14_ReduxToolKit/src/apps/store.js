import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer   // Store ko bata diya ki 'todo' feature ka data 'todoReducer' handle karega
    }
});