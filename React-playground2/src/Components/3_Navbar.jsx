import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link className='text-amber-950 border-2 rounded-2xl px-2 cursor-pointer' to="/">Home</Link>
            <Link className='text-amber-950 border-2 rounded-2xl px-2 cursor-pointer ml-2' to="/about">About</Link>
            <Link className='text-amber-950 border-2 rounded-2xl px-2 cursor-pointer ml-2' to="/user/Stephen">User</Link>
        </nav>
    )
}

export default Navbar

//<a href="..."> performs a full page reload, which breaks the SPA navigation experience.

//<Link to="..."> is a component provided by React Router.
//It changes the URL and renders the matching component without reloading the page.