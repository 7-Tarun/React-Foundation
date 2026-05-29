/* What are Props?
-Properties(Props) are data inputs for components. Just like normal JavaScript functions take arguments, React components take Props to render dynamic content.
1. One-Way Data FlowData travels on a strict one-way street. It only flows down from the Parent (like 03_Props.jsx) to the Child (like Props.jsx), never backward.
2. Read-OnlyProps are strictly read-only. A Child component can use the received props to display data, but it is not allowed to modify or change them.
*/

import Props from '../components/Props'     //Using double dots because importing from outer folder

function ParentProps() {
    return(
        <>
        <Props rollno = {21} username = "Stephen" />
        <h1>This is the code example of Properties.</h1>
        </>
    )
}

export default ParentProps