// -Properties(Props)

function Greeting({name,age}) {
    return(
        <>
        <h1>Hello, {name} !</h1>
        <p>You are {age} Years Old.</p>
        </>
    )
}
export default Greeting

// Props are read-only and cannot be modified by the child component.
// React follows one-way data flow: data moves from parent to child.
// This makes data flow predictable and easier to manage.