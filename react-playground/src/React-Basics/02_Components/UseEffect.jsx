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

// useEffect — "Side Effects" handle karne ka Hook
// What is a Side Effect?

// A component normally receives data and returns UI.
// A Side Effect is an action performed outside this normal render process, such as:

// Fetching API data
// Changing `document.title`
// Setting timers
// Saving to `localStorage`
// Connecting to external services