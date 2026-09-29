import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo Msg",
            completed: false,
        },      //Creating a default structure
    ],
    addTodo: (todo) => {},
    updateTodo: (todo,id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}, //They are just for auto-suggestion to other component
});


export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}     //in createContext default structure is already set no need to through error