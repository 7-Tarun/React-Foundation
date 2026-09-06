import { useState, useEffect } from "react";

function Example(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Effect Run Count: ",count);
    }, [count]);

    return(
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Increase</button>
        </>
    )
}

export default Example

// `useEffect` takes two arguments:

// A function — the code to run (the side effect)
// An array — called the dependency array, which controls when the effect runs.

// Three Cases of Dependency array: (imp for interview)
// useEffect(() => { ... })              // Case A: har render pe chalega
// useEffect(() => { ... }, [])          // Case B: sirf ek baar chalega (component mount hone pe)
// useEffect(() => { ... }, [count])     // Case C: sirf jab 'count' change ho tab chalega

// Case B is most common: run once when the component loads, e.g. fetch API data.
// Case C tracks specific state/props, e.g. search when the search text changes.