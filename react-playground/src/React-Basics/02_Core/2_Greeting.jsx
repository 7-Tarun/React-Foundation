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

// What's the practical benefit of destructuring props, other than just shorter code?
// -Readability:      function UserCard({ name, age, email, avatar }) {  // yehi pata chal gaya kya-kya chahiye
// -You can set default values:    function Greeting({ name, age = 18 }) {   // age nahi diya toh 18 default
// -This makes data flow predictable and easier to manage.