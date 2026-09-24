import Counter from "./Components/Counter"
import { useContext } from "react"
import { CounterContext } from "./Context/Counter"

function App() {

  const counterState = useContext(CounterContext);
  // console.log(counterState);

  return (
    <>
      <h1 className="heading">Context Api</h1>
      <h3>Count: {counterState.count}</h3>
      <Counter /> <br />
    </>
  )
}

export default App