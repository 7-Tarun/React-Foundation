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
        <h1 className="font-bold text-amber-950 text-center">Counter: {count}</h1>
        <button className="px-0.5 py-0.5 bg-red-500 text-white rounded-lg font-semibold"
        onClick={() => setCount(count+1)}
        >Increase</button>
        <button className="px-0.5 py-0.5 bg-red-500 text-white rounded-lg font-semibold"
        onClick={handleDecrease}
        >Decrease</button>
        <button className="px-0.5 py-0.5 bg-red-500 text-white rounded-lg font-semibold"
        onClick={() => setCount(15)}
        >Reset</button>
        </>
    )
}

export default Counter
// useState — Is the most imp hook of React.

//Remember the difference
// { setCount(...) }        → turant chalega (evaluate = execute) {means execute the jsx expression immediately}
// { () => setCount(...) }  → sirf tab chalega jab actual event ho (click)

// Reason: onClick expects a function, not the result of calling one..
// setCount(...) calls the function during render,
// while () => setCount(...) gives React a function to call later.