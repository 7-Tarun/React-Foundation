import { Routes, Route, Link} from 'react-router-dom'
import Home from '../Components/1_Home'
import About from '../Components/2_About'

function Router() {
    return(
        <>
        <Routes>
            <Route path='/' element  = {<Home/>} />
            <Route path='/about' element  = {<About/>} />
        </Routes>
        <nav>
            <Link className='text-amber-950 border-2 rounded-2xl px-2 cursor-pointer' to="/">Home</Link>
            <Link className='text-amber-950 border-2 rounded-2xl px-2 cursor-pointer ml-2' to="/about">About</Link>
        </nav>
        </>
    )
}

export default Router

//<a href="..."> performs a full page reload, which breaks the SPA navigation experience.

//<Link to="..."> is a component provided by React Router.
//It changes the URL and renders the matching component without reloading the page.


// <Link> changes the URL without reloading the page.
// <Route> defines a rule that maps a URL path to a component.

// Example:
// <Route path="/about" element={<About />} />
// → If the URL is /about, React Router renders the <About /> component.