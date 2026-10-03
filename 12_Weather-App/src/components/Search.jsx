import { useState } from "react"
import { useWeather } from "../contexts/WeatherContext";

function Search() {

    const [city, setCity] = useState("");
    const {addSearchHistory} = useWeather();

    const addCity = (e) => {
        e.preventDefault();
        
        // Agar input khali hai toh kuch mat karo
        if (!city.trim()){
            alert('Input field can not be empty');
            return;
        }

        // Context wale function ko call kar diya
        addSearchHistory(city);
        // Search hone ke baad input box ko wapas khali kar diya
        setCity(""); 
    }

    return (
        <>
            <form onSubmit={addCity} className=" mt-4 gap-2 text-center text-sm">
                <input
                    className="border-black border-2 rounded-md m-2 p-1"
                    type="text"
                    placeholder="Enter City/State/Contry"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button
                    className="text-xl cursor-pointer"
                    type="submit"
                >➡️</button>
            </form>
        </>
    )
}

export default Search