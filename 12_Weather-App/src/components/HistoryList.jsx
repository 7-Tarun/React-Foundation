import { useWeather } from "../contexts/WeatherContext"

function HistoryList () {

    const {history} = useWeather();

    return(
        <>
        <div>
            <ul className="flex gap-2 justify-center">
                <li>{history[0]}</li>
                <li>{history[1]}</li>
                <li>{history[2]}</li>
            </ul>
        </div>
        </>
    )
}

export default HistoryList