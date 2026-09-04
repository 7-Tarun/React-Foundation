import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(15);
    return(
        <>
        <h1>Counter: {count}</h1>
        <button
        onClick={() => setCount(count+1)}
        >Increase</button>
        <button
        onClick={() => setCount(count-1)}
        >Decrease</button>
        <button
        onClick={() => setCount(count = 0)}
        >Reset</button>
        </>
    )
}

export default Counter
// useState — Is the most imp hook of React.