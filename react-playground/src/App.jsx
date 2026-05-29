// In React, the function that returns UI is called a Component. A Component name must start with a capital letter (e.g. App, Cart), otherwise React may treat it as an HTML tag.

//You cannot return two separate tags directly from one component,
//So React lets you wrap them in a fragment like <>...</>. Fragments group elements without adding extra HTML tags.

//--------------------------------------------------------------------------------------------------------------------------------------------

import { useState } from 'react'              //Importing reacts state hook
import Navbar from './components/Navbar'    //Importing Navbar file
import Footer from './components/Footer'    //Importing Footer file

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
// export default App:- Makes this component available to be imported and used in other files.

//Note:- In Vanilla JS, you write the layout, logic, and user events all in the same place. As your app grows, this mix turns into messy, tangled "spaghetti" code that is hard to fix. React solves this by using a Lego-like approach. Instead of building a whole website in one massive file, you break the UI down into small, independent, and reusable blocks called components. Each feature gets its own clean file, and App.jsx simply snaps them together like Lego bricks to build the final page.