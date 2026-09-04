import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter >= 20){
      return alert("Maximum Limit Reached");
    }
    setCounter(counter+1);
  }

  const removeValue = () => {
    if(counter <= 0){
      return alert("Minimum Limit Reached");
    }
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add   {counter}</button>
      <button
      onClick={removeValue}
      >Remove</button>
      <p>{counter}</p>
    </>
  )
}

export default App

//UI Updation is controlled by React

// useState tells React to keep this variable in sync with the UI—wherever the variable is displayed, it will auto-update automatically.

/* 
 * REACT BATCHING TRAP: 
 * React batches state updates for performance. 
 * setCounter(counter + 1) called multiple times uses the same state snapshot, incrementing only by 1.
 * FIX (Updater Callback): 
 * Use a callback to fetch the latest pending state from the queue:
 * setCounter((prevCounter) => prevCounter + 1); 
 */