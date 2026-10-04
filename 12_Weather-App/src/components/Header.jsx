import { useWeather } from "../contexts/WeatherContext"

function Header() {

    const { isFahrenheit, toggleUnit } = useWeather();

    return (
        <header className="w-full bg-[#2E1F18] border-b border-[#4A342E] shadow-md rounded-b-2xl">
            <div className="max-w-4xl mx-auto px-3 py-3 flex items-center justify-center gap-8">

                {/* Title */}
                <h1 className="text-3xl font-extrabold tracking-wide">
                    <span className="text-[#F5EFE6]">Weather</span>{' '}
                    <span className="text-[#E8A87C]">App</span>
                </h1>

                {/* Working Toggle Button */}
                <button
                    onClick={toggleUnit}
                    checked={isFahrenheit}
                    className="w-[68px] h-8 rounded-full bg-[#1E1410] border border-[#5D4437] flex items-center px-1 cursor-pointer transition-colors duration-300 relative focus:outline-none"
                    aria-label="Toggle Temperature Unit"
                >
                    {/* Animated Sliding Knob */}
                    <div
                        className={`w-7 h-6 rounded-full bg-[#E8A87C] flex items-center justify-center text-[#2E1F18] text-sm font-bold shadow-md transition-transform duration-300 transform ${isFahrenheit ? "translate-x-[30px]" : "translate-x-0"
                            }`}
                    >
                        <p>{isFahrenheit ? "°F" : "°C"}</p>
                    </div>
                </button>

            </div>
        </header >
    );
}

export default Header;