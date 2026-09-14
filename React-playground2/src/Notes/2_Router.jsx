import { Routes, Route, Link} from 'react-router-dom'
import Home from '../Components/1_Home'
import About from '../Components/2_About'

function Router() {
    return(
        <>
        {/* <Routes>
            <Route path='/' element  = {<Home/>} />
            <Route path='/' element  = {<About/>} />
        </Routes> */}
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        </>
    )
}

export default Router

//<a href="..."> performs a full page reload, which breaks the SPA navigation experience.

//<Link to="..."> is a component provided by React Router.
//It changes the URL and renders the matching component without reloading the page.