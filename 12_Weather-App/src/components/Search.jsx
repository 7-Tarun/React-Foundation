import { useState } from "react"
import { useWeather } from "../contexts/WeatherContext";

function Search() {

    const [city, setCity] = useState("");
    const {addSearchHistory, weatherFetcher} = useWeather();

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
        weatherFetcher(city);
    }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-6">
      <form onSubmit={addCity} className="bg-gradient-to-r from-white/80 via-amber-50/40 to-orange-100/40 backdrop-blur-md rounded-2xl p-2 shadow-sm border border-orange-100/50 flex items-center justify-between">
        <div className="flex items-center flex-1 px-3 gap-3">
          <svg 
            className="w-5 h-5 text-amber-700/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search city (e.g., Jaipur, India)..." 
            className="w-full bg-transparent text-[#1A2B4C] font-medium placeholder-amber-900/40 focus:outline-none text-base"
            value={city}
            onChange={(e) => setCity(e.target.value)} 
          />
        </div>
        <button 
          type="submit" 
          className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md transition-all duration-200 text-sm tracking-wide"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search