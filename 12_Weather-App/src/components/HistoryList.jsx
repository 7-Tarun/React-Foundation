import { useWeather } from "../contexts/WeatherContext"

function HistoryList() {

    const { history } = useWeather();

    return (
        <>
            <div>
                <ul className="flex gap-2 justify-center">
                    {history.map((city, index) => (
                        <li key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-white">
                            {city}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default HistoryList