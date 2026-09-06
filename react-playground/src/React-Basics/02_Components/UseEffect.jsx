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