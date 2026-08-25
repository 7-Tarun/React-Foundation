//Execution Flow: index.html  →  main.jsx  →  App.jsx  →  JsxBasics.jsx

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

// export default allows a file to export a single main value, and when importing it, you can give it any name you like — the name doesn't need to match. A named export, on the other hand, lets a file export multiple values, but when importing them, you have to use the exact same name, wrapped in curly braces.
// The common convention is one default export per component file, and named exports for helper functions or constants.


// Core insight to remember:
// Functions operate just like normal top-to-bottom JS — JSX isn't a separate language, just a shorthand syntax for writing React.createElement().
// {} curly braces = "This is JavaScript, not HTML" — variables, function calls, calculations, anything can go inside.
// Components are functions, and writing <ComponentName /> means calling that function.