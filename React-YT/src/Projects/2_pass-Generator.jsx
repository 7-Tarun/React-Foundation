import { useState, useEffect, useCallback } from "react";

function PjPassword() {

    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setChatAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) str += "0123456789";
        if (charAllowed) str += "~`!<>?/@#$;:'.,+-*(){}&^%";

        for (let i = 1; i <= array.length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass = str.charAt(char);
        }
        setPassword(pass);

    }, [length, numAllowed, charAllowed, setPassword]);

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-lg px-4 my-8 text-orange-100 bg-amber-800 rounded-lg text-center p-2 text-2xl">
                <h1 className="mb-6 font-bold tracking-wide">Password Generator</h1>
                <input type="text" value={password} className="outline-none py-1 px-3 bg-amber-900 rounded-lg mb-4" placeholder="Password" readOnly />
                <button className="ml-6 border-2 rounded-lg px-3 bg-amber-950">Copy</button>
            </div>
        </>
    )
}

export default PjPassword



/* 
  CRUCIAL: DEPENDENCY ARRAY DIFFERENCE
  
  1. useEffect Array: "If a dependency changes, RUN the function."
     Syntax: useEffect(() => {  / logic /  }, [dep1, dep2]);
  
  2. useCallback Array: "If a dependency changes, RE-CREATE the function in memory."
     Syntax: const func = useCallback(() => { / logic / }, [dep1, dep2]);
 */