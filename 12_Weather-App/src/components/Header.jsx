import { useWeather } from "../contexts/WeatherContext"

function Header() {

    const { isFahrenheit, toggleUnit } = useWeather();

    return (
        <>
            <div className="flex justify-center gap-10">
                <h1>Weather App</h1>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" 
                    onClick={toggleUnit}
                    checked={isFahrenheit} />
                    <div className="relative w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    <span className="ml-3 text-sm font-medium text-gray-400">{`${isFahrenheit ? 'Fahrenheit' : 'Celcious'}`}</span>
                </label>
            </div>
        </>
    )
}

export default Header