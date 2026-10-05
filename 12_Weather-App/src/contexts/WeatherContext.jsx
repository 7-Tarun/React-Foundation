import { createContext, useContext, useEffect, useState } from "react";

export const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {

    const [weatherData, setWeatherData] = useState({
        city: 'Jaipur, IN',
        temp: 32,
        feels: 31,
        condition: 'CLEAR SKY',
        humidity: 28,
        wind: 13,
        gust: 15,       
        pressure: 1012, 
        visibility: 10, 
        low: 29,        
        high: 34,       
        uv: 'HIGH'
    });

    const [history, setHistory] = useState([
        'Jaipur',
        'Rajasthan',
        'Haryana',
    ]);

    const [isFahrenheit, setIsFahrenheit] = useState(false);
    const toggleUnit = () => setIsFahrenheit(prev => !prev);

    const addSearchHistory = (newCity) => {
        setHistory((prevHistory) => {
            const cleanHistory = prevHistory.filter(city => city.toLowerCase() !== newCity.toLowerCase());
            const updateHistory = [newCity, ...cleanHistory];
            return updateHistory.slice(0, 3); // Search history ko sirf latest 3 cities tak limit rakhne ke liye
        })
    }

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const weatherFetcher = async (city) => {
        setIsLoading(true);
        setError(null);
        try {
            const apiKey = '69b3a087502d180bcc9cfdd7446944c1'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const weather = await response.json();
            addSearchHistory(city);     //add searhistory only if get the result
            setWeatherData({
                city: `${weather.name}, ${weather.sys.country}`,
                temp: Math.round(weather.main.temp),
                feels: Math.round(weather.main.feels_like),
                condition: weather.weather[0].description.toUpperCase(),
                humidity: weather.main.humidity,
                wind: weather.wind.speed,
                gust: weather.wind.gust,
                pressure: weather.main.pressure,
                visibility: weather.visibility,
                low: weather.main.temp_min,
                high: weather.main.temp_max,
                uv: 'HIGH'
            });
        }
        catch (e) {
            setError(`Failed to fetch Weather Data${e}`);
            alert('City not found, Please check spelling');
        }
        finally {
            setIsLoading(false);
        }

    }

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData, history, setHistory, isFahrenheit, toggleUnit, addSearchHistory, weatherFetcher, isLoading, error, }}>
            {children}
        </WeatherContext.Provider>
    )
}

export function useWeather() {
    const context = useContext(WeatherContext);

    if (!context) {
        throw new Error('useWeather must be used within the WeatherProvider');
    }

    return context;
}