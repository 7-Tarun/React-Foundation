//Creating a NavBar in a seperate file.

function Navbar({ userName, cartCount}) {
    return(
        <nav>
            <h2>I am {userName}</h2>
            <ul>
                <li>Home</li>
                <li>Cart: {cartCount}</li>
            </ul>
            <hr />
        </nav>
    )
}

export default Navbar

//The next step is to inport this file in App.jsx file.