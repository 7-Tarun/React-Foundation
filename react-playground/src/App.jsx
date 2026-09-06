import JsxBasics from './React-Basics/01_Basics/JsxBasic'
import Greeting from './React-Basics/02_Core/2_Greeting'
import Example from './React-Basics/02_Core/5_UseEffect'
import TitleUpdater from './React-Basics/02_Core/6_UseEffect'
import Counter from './React-Basics/02_Core/3_UseState'

function App() {
    return (
        <div>
            {/* <JsxBasics/> */}
            {/* <Greeting name = "Master" age = {21}/> */}
            {/* <Greeting name = "Shifu" age = {18}/> */}
            {/* <Counter/> */}
            {/* <Example/> */}
            <TitleUpdater/>
        </div>
    )
}

export default App

// Props are read-only and cannot be modified by the child component.
// React follows one-way data flow: data moves from parent to child.
// This makes data flow predictable and easier to manage.