import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(15);
    function handleDecrease() {
        if(count > 0){
            setCount(count-1);
        }
    }
    return(
        <>
        <h1>Counter: {count}</h1>
        <button
        onClick={() => setCount(count+1)}
        >Increase</button>
        <button
        onClick={handleDecrease}
        >Decrease</button>
        <button
        onClick={() => setCount(0)}
        >Reset</button>
        </>
    )
}

export default Counter
// useState — Is the most imp hook of React.