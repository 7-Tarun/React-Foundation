import { Routes, Route } from 'react-router-dom'
import Home from '../Components/1_Home'
import About from '../Components/2_About'
import Navbar from '../Components/3_Navbar'

function Router() {
    return(
        <>
        <Routes>
            <Route path='/' element  = {<Home/>} />
            <Route path='/about' element  = {<About/>} />
        </Routes>
        <Navbar/>
        </>
    )
}

export default Router

// <Link> changes the URL without reloading the page.
// <Route> defines a rule that maps a URL path to a component.

// Example:
// <Route path="/about" element={<About />} />
// → If the URL is /about, React Router renders the <About /> component.