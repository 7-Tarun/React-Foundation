import { useState } from "react";

function PjColor() {

    const [color, setColor] = useState("grey");

    return(
        <div className="w-full h-screen duration-200" style={{background: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-amber-50 px-2 py-2 rounded-full">

                    <button onClick={() => setColor("red")}
                    className="outline-none px-3 text-white text-xl rounded-lg shadow-xl" style={{backgroundColor: "red"}}>Red</button>
                    <button onClick={() => {setColor("green")}} 
                    className="outline-none px-3 text-white text-xl rounded-lg shadow-xl" style={{backgroundColor: "green"}}>Green</button>
                    <button onClick={() => setColor("blue")} 
                    className="outline-none px-3 text-white text-xl rounded-lg shadow-xl" style={{backgroundColor: "blue"}}>Blue</button>
                    <button onClick={() => setColor("purple")} 
                    className="outline-none px-3 text-white text-xl rounded-lg shadow-xl" style={{backgroundColor: "purple"}}>Purple</button>
                    <button onClick={() => setColor("orange")} 
                    className="outline-none px-3 text-white text-xl rounded-lg shadow-xl" style={{backgroundColor: "orange"}}>Orange</button>
                    <button onClick={() => setColor("black")} 
                    className="outline-none px-3 text-white text-xl rounded-lg shadow-xl" style={{backgroundColor: "black"}}>Black</button>
                    <button onClick={() => setColor("bisque")} 
                    className="outline-none px-3 text-white text-xl rounded-lg shadow-xl" style={{backgroundColor: "bisque"}}>Bisque</button>
                    
                </div>
            </div>
        </div>
    )
}

export default PjColor