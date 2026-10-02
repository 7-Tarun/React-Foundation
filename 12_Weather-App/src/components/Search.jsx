import { useState, useEffect } from "react"

function Search () {

    return(
        <>
        <div className=" mt-4 gap-2 text-center text-sm">
            <input className="border-black border-2 rounded-md m-2 p-1" type="text" placeholder="Enter City/State/Contry" />
            <button className="text-xl cursor-pointer">➡️</button>
        </div>
        </>
    )
}

export default Search