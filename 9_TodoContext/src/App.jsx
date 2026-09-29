import { useEffect, useState } from "react"
import { TodoProvider } from './contexts/index'
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //1. Core State
  const [todos, setTodos] = useState([]);

  //2. Logic Function
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        (prevTodo.id === id ? todo : prevTodo)
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  //Local Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))   //getdata string ko array me convert kiya

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])  //Empty array no dependency sirf ak baar chalega page load hone pe

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))  //setdata array ko string me convert kiya
  }, [todos]) //One dependency, State ke sath updates rahega

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App