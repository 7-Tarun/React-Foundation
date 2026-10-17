import { useState } from "react"
import { useDispatch } from 'react-redux'   // Action bhejne ke liye hook
import { addTodo } from '../features/todoSlice'     // Jo action trigger karna hai

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()      // Courier boy ko bula liya

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))

        setInput('');
    }

    return (
        <>
            <form onSubmit={addTodoHandler} className="mb-6 flex gap-2">
                <input className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500" type="text" placeholder="Enter Todo" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" type="submit">Add Todo</button>
            </form>
        </>
    )
}

export default AddTodo