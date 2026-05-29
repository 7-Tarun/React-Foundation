import { useState } from 'react'              //Importing reacts state hook
import Navbar from '../components/Navbar'    

function Destructure() {

  const [count, setCount] = useState(0);    //Here count is a variable and setCount is a function (function to update the count). It is a Array Destructuring.

  const btn = () => {       //Using Arrow function to handle button click, runs when the button is clicked.
    setCount(count + 1);
  }

  return (
    <>
      <Navbar cartCount={count} userName="Stephen" />
      <button onClick={btn}>Add to Cart</button>
    </>
  )
}

export default Destructure