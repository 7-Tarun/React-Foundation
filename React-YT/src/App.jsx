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