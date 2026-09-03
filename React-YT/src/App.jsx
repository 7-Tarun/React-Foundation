function App() {
  let counter = 5;

  const addValue = () => {
    console.log("Value added: ", counter);
    counter = counter+1;
    
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add   {counter}</button>
      <button>Remove</button>
      <p>{counter}</p>
    </>
  )
}

export default App

//UI Updation is controlled by React