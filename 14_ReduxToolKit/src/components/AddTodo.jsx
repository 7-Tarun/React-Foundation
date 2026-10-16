import { useDispatch } from 'react-redux';      // Action bhejne ke liye hook
import { addTodo } from '../features/todoSlice';    // Jo action trigger karna hai
import { useState } from 'react';

function AddTodo() {

    const [input, setInput] = useState('');     
    const dispatch = useDispatch()      // Courier boy ko bula liya

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return(
        <>
        <form onSubmit={addTodoHandler}>
            <input 
            type="text"
            placeholder='Enter a Todo...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Add Todo</button>
        </form>
        </>
    )
}

export default AddTodo