import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from '../features/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()      //Courier boy yahan bhi aayega

    return (
        <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-700">My Todos</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 text-slate-700" key={todo.id}>
                        {todo.text}
                        <button
                            className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >X</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Todos

// Line dekho: useSelector((state) => state.todo.todos)
// Yeh state.todo.todos kya hai?

// state: Yeh tumhara poora Global Store hai.

// .todo: Yeh wo naam hai jo tumne store.js file mein reducer: { todo: todoReducer } likha tha. (Agar tum wahan tasks: todoReducer likhte, toh yahan state.tasks likhna padta).

// .todos: Yeh wo array hai jo tumne todoSlice.js ki initialState mein define kiya tha (todos: [{id: 1, text: "Hello"}]).