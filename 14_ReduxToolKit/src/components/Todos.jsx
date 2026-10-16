import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

function Todos(){

    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()      //Courier boy yahan bhi aayega

    return(
        <>
        <div>Todos List</div>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}

                <button onClick={() => dispatch(removeTodo(todo.id))}>
                    Delete
                </button>
            </li>
        ))}
        </>
    )
}

export default Todos


// Line dekho: useSelector((state) => state.todo.todos)
// Yeh state.todo.todos kya hai?

// state: Yeh tumhara poora Global Store hai.

// .todo: Yeh wo naam hai jo tumne store.js file mein reducer: { todo: todoReducer } likha tha. (Agar tum wahan tasks: todoReducer likhte, toh yahan state.tasks likhna padta).

// .todos: Yeh wo array hai jo tumne todoSlice.js ki initialState mein define kiya tha (todos: [{id: 1, text: "Hello"}]).