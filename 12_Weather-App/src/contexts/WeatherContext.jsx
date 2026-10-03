import { createContext, useContext, useState } from "react";

export const WeatherContext = createContext(null);

export const WeatherProvider = ({children}) => {

    const [weatherData, setWeatherData] = useState({
        city: 'Jaipur, IN',
        temp: 32,
        feels: 31,
        condition: 'CLEAR SKY',
        humidity: 28,
        wind: 13,
        uv: 'HIGH'
    });

    const [history, setHistory] = useState([
        'Jaipur',
        'Rajasthan',
        'Haryana',
    ]);

    const [isFahrenheit , setIsFahrenheit ] = useState(false);
    const toggleUnit = () => setIsFahrenheit(prev => !prev);

    return(
        <WeatherContext.Provider value={{weatherData, setWeatherData, history, setHistory, isFahrenheit, toggleUnit}}>
            {children}
        </WeatherContext.Provider>
    )
}

export function useWeather() {
    const context = useContext(WeatherContext);

    if(!context){
        throw new Error('useWeather must be used within the WeatherProvider');
    }

    return context;
}