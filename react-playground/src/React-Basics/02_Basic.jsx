// In Vanilla JS, you write the layout, logic, and user events all in the same place. As your app grows, this mix turns into messy, tangled "spaghetti" code that is hard to fix. React solves this by using a Lego-like approach. Instead of building a whole website in one massive file, you break the UI down into small, independent, and reusable blocks called components. Each feature gets its own clean file, and App.jsx simply snaps them together like Lego bricks to build the final page.

import Navbar from "./Components/Navbar"    //Importing Navbar file
import Footer from "./Components/Footer"    //Importing Footer file

function Basic() {
    return(
        <>
        <Navbar />
        <h1>Hello World!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, qui.</p>
        <Footer />
        </>
    )
}

// REACT FRAGMENT (<> </>):
//   - React components must return a single parent element.
//   - React Fragment Groups multiple neighbor elements without adding extra wrapper tags (like <div>) to the HTML.