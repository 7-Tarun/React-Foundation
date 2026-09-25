import { createContext, useContext } from "react";
import { useState } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});


export const TodoProvider = TodoContext.Provider;


export const useTodo = () => {
    const context = useContext(TodoContext);

    if(context === null){
        throw new Error("useTodo must be used within TodoProvider");
    }

    return context;
}