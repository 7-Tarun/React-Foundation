import { useWeather } from "../contexts/WeatherContext"

function HistoryList() {

    const { history } = useWeather();
    return (
        <div className="flex items-center justify-center gap-2.5">

            {history.map((city, index) => (
                <button
                    key={index}
                    className=" mb-4 rounded-full border border-stone-300 bg-stone-100 px-8 py-2.5 text-base font-medium text-stone-500 transition hover:border-orange-400 hover:bg-orange-950 hover:text-orange-300">
                    {city}
                </button>
            ))}

        </div>
    );
};

export default HistoryList;