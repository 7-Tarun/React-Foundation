import { useState } from 'react'
import JsxBasics from './React-Basics/01_Basics/JsxBasic'
import Greeting from './React-Basics/02_Core/2_Greeting'
import Example from './React-Basics/02_Core/5_UseEffect'
import TitleUpdater from './React-Basics/02_Core/6_UseEffect'
import Counter from './React-Basics/02_Core/3_UseState'
import Timer from './React-Basics/02_Core/8_Timer'

function App() {
    const [showTimer, setShowTimer] = useState(true);
    return (
        <div>
            {/* <JsxBasics/> */}
            {/* <Greeting name = "Master" age = {21}/> */}
            {/* <Greeting name = "Shifu" age = {18}/> */}
            <Counter/>
            {/* <Example/> */}
            {/* <TitleUpdater/> */}

            {/* <button className="rounded bg-blue-500 px-2 py-`1 text-white" 
            onClick={() => setShowTimer(!showTimer)}>
                Toggle Timer
            </button> */}
            {/* {showTimer && <Timer />} */}

        </div>
    )
}

export default App

//Timer component only called when 

// Props are read-only and cannot be modified by the child component.
// React follows one-way data flow: data moves from parent to child.
// This makes data flow predictable and easier to manage.