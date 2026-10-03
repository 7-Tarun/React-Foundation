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

    const addSearchHistory = (newCity) => {
        setHistory((prevHistory) => {
            const updateHistory = [newCity, ...prevHistory];
            return updateHistory.slice(0, 3); // Search history ko sirf latest 3 cities tak limit rakhne ke liye
        })
    }

    return(
        <WeatherContext.Provider value={{weatherData, setWeatherData, history, setHistory, isFahrenheit, toggleUnit, addSearchHistory}}>
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