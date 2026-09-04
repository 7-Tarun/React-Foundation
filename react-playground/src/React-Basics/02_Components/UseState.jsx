import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(15);
    return(
        <>
        <h1>Counter: {count}</h1>
        <button
        onClick={() => setCount(count+1)}
        >Increase</button>
        <button
        onClick={() => setCount(count-1)}
        >Decrease</button>
        </>
    )
}

export default Counter
// useState — Is the most imp hook of React.