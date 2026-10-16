import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto max-w-lg rounded-xl bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Redux Tool Kit</h1>
        <AddTodo />
        <Todos />
      </section>
    </main>
  )
}

export default App