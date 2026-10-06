import { useWeather } from "../contexts/WeatherContext"

function HistoryList() {

    const { history, weatherFetcher } = useWeather();

    

    return (
        <div className="flex w-full flex-wrap items-center justify-center gap-2.5 px-3">

            {history.map((city) => (
                <button
                onClick={() => weatherFetcher(city)}
                    key={city}  //using city instead of index Because we filter duplicate cities before they even enter the array. that's why city can also bhi uniquely identified.
                    className="mb-4 max-w-full rounded-full border border-stone-300 bg-stone-100 px-4 py-2.5 text-sm font-medium text-stone-500 transition hover:border-orange-400 hover:bg-orange-950 hover:text-orange-300 sm:px-8 sm:text-base">
                    {city}
                </button>
            ))}

        </div>
    );
};

export default HistoryList;