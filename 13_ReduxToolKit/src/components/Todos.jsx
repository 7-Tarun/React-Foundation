import { useSelector, useDispatch } from "react-redux"
import { removeTodo, updateTodo } from '../features/todoSlice'
import { useState } from "react";

function Todos() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()      //Courier boy yahan bhi aayega

    const [editValue, setEditValue] = useState('')
    const [editingTodoId, setEditingTodoId] = useState(null)

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, text: editValue }))
        setEditingTodoId(null)
    }

    return (
        <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-700">My Todos</h2>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 text-slate-700" key={todo.id}>
                        {editingTodoId === todo.id ? (
                            <form
                                className="flex min-w-0 flex-1 items-center gap-2"
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    handleUpdate(todo.id)
                                }}
                            >
                                <input
                                    aria-label={`Edit todo ${todo.text}`}
                                    className="min-w-0 flex-1 rounded-md border border-slate-300 px-2 py-1 outline-none focus:border-blue-500"
                                    autoFocus
                                    value={editValue}
                                    onChange={(event) => setEditValue(event.target.value)}
                                />
                                <button
                                    className="rounded px-2 py-1 text-sm text-blue-600 hover:bg-blue-50"
                                    type="submit"
                                >Save</button>
                                <button
                                    className="rounded px-2 py-1 text-sm text-slate-600 hover:bg-slate-200"
                                    type="button"
                                    onClick={() => setEditingTodoId(null)}
                                >Cancel</button>
                            </form>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50"
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                    >X</button>
                                    <button
                                        className="rounded px-2 py-1 text-sm text-blue-600 hover:bg-blue-50"
                                        type="button"
                                        onClick={() => {
                                            setEditValue(todo.text)
                                            setEditingTodoId(todo.id)
                                        }}
                                    >✏️</button>
                                </div>
                            </>
                        )}
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