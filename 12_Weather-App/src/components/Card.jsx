import { useWeather } from "../contexts/WeatherContext"

function Card() {
    
    const { weatherData } = useWeather();
    const { city, temp, feels } = weatherData;

    return (
        <>
            <div className="text-center mt-10">
                <h1>{city}</h1>
                <h3>{temp}</h3>
                <p>{feels}</p>
            </div>
        </>
    )
}

export default Card