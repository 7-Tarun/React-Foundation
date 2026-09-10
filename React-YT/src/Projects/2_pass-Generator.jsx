import { useState, useEffect, useCallback } from "react";

function PjPassword() {

    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
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
                <button className="ml-6 rounded-lg py-1 px-3 bg-amber-950">Copy</button>
            </div>
            <div className="flex gap-x-6 w-full max-w-xl mx-auto shadow-lg px-2 my-8 text-white bg-amber-800 rounded-lg text-center p-2 justify-center">
                <div className="flex items-center gap-x-2">
                    <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
                    <label className="ml-3 text-xl">Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-2 text-xl">
                    <input type="checkbox" defaultChecked={numAllowed} id="numberInput"
                    onChange={() => {setNumAllowed((prev) => !prev);}} />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-2 text-xl">
                    <input type="checkbox" defaultChecked={charAllowed} id="charInput"
                    onChange={() => {setCharAllowed((prev) => !prev);}} />
                    <label htmlFor="charInput">Characters</label>
                </div>
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