import { useState, useEffect, useCallback} from "react";

function PjPassword() {

    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setChatAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if(numAllowed) str += "0123456789";
        if(charAllowed) str += "~`!<>?/@#$;:'.,+-*(){}&^%";

        for(let i=1; i <= array.length; i++){
            let char = Math.floor(Math.random() * str.length+1);
            pass = str.charAt(char);
        }
        setPassword(pass);

    }, [length,numAllowed, charAllowed, setPassword]);

    return(
        <>
        <h1 className="text-4xl text-center">Password Generator</h1>
        </>
    )
}

export default PjPassword