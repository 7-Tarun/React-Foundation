import { useState } from 'react'              //Importing reacts state hook
import Navbar from './components/Navbar'    
import Footer from './components/Footer'    

function App() {

  const [count, setCount] = useState(0);    //Here count is a variable and setCount is a function (function to update the count). It is a Array Destructuring.

  const btn = () => {       //Using Arrow function to handle button click, runs when the button is clicked.
    setCount(count + 1);
  }

  return (
    <>
      <Navbar cartCount={count} userName="Stephen" />
      <h1>Phase 3: My First React Component</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea.</p>
      <button onClick={btn}>Add to Cart</button>
      <Footer />
    </>

  )
}

export default App