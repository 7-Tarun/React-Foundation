import { useWeather } from "../contexts/WeatherContext"

function Card() {

    const {weatherData} = useWeather();

    return (
        <>
            <div className="text-center mt-10">
                <h1>{weatherData.city}</h1>
                <h3>{weatherData.temp}</h3>
                <p>{weatherData.feels}</p>
            </div>
        </>
    )
}

export default Card