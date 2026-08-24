function JsxBasics() {
    const name = "Stephen";
    return (
        <div>
            <h1>Hello I am React</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, totam.</p>
            <p>I am {2+2}</p>
            <p>I am {name}</p>
        </div>
    )
}

export default JsxBasics

//Execution Flow: index.html  →  main.jsx  →  App.jsx  →  JsxBasics.jsx

// Core insight to remember:
// Functions operate just like normal top-to-bottom JS — JSX isn't a separate language, just a shorthand syntax for writing React.createElement().
// {} curly braces = "This is JavaScript, not HTML" — variables, function calls, calculations, anything can go inside.
// Components are functions, and writing <ComponentName /> means calling that function.