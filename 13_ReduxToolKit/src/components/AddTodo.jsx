import { useState } from "react"
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todoSlice'

function AddTodo() {

const [input, setInput] = useState('')
const dispatch = useDispatch()

const addTodoHandler = (e) => {
    e.preventDefault()

    dispatch(addTodo(input))
    
    setInput('');
}

    return(
        <>
        <form>
            <input onSubmit={addTodoHandler} type="text" placeholder="Enter Todo" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
        </>
    )
}

export default AddTodo