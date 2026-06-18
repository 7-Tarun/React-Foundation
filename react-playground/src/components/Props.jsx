function Props (props) {
    return (
        <nav>
            <h2>I am {props.userName}</h2>
            <ul>
                <li>Home</li>
                <li>User Name: {props.username}</li>
                <li>Roll No: {props.rollno}</li>
            </ul>
            <hr />
        </nav>
    )
}

export default Props

/* Problem in Props:-
The Problem: Repetitive CodeWriting (props.userName, props.cartCount, and props.theme) repeatedly makes your code long, messy, and ugly when dealing with multiple props.
The Solution: Destructuring (The Industry Standard)
Since props are just JavaScript objects behind the scenes, you can use ES6 Object Destructuring to unpack the variables directly inside the function parameters.
Example:- function Navbar({ userName, cartCount }) {
  return <h1>{userName}</h1>;
} */