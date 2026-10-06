import { useState } from "react";
import { useWeather } from "../contexts/WeatherContext"

function Card() {

  const { weatherData } = useWeather();
  const { isFahrenheit } = useWeather();
  const { city, temp, feels, condition, humidity, wind, low, high, gust, pressure, visibility, uv } = weatherData;

  return (
    <article className="weather-card" aria-label={`Weather in ${city}`}>
      <div className="weather-card__wash" aria-hidden="true" />

      <header className="weather-card__header">
        <div className="weather-card__location">
          <span className="weather-card__location-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M19 10.2c0 5.2-7 10.3-7 10.3S5 15.4 5 10.2a7 7 0 1 1 14 0Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.25" fill="currentColor" />
            </svg>
          </span>
          <div>
            <p className="weather-card__eyebrow">Local forecast</p>
            <h2>{city}</h2>
          </div>
        </div>
        <p className="weather-card__date">{Date().split(" ").slice(0, 4).join(" ")}</p>
      </header>

      <section className="weather-card__main" aria-label="Current conditions">
        <div className="weather-card__reading">
          <p className="weather-card__time">
            Today <span aria-hidden="true">/</span> 12:30 PM
          </p>
          <div className="weather-card__temperature" role="img" aria-label={`${temp} degrees Celsius`}>
            <span className="tracking-wide">
              {isFahrenheit ? Math.round(temp * 9/5 + 32) : temp}
            </span>
            <sup className="relative top-[-0.2em] font-normal">°</sup>
            <small>{isFahrenheit ? 'F' : 'C'}</small>
          </div>
          <p className="weather-card__condition">{condition}</p>
          <div className="weather-card__summary">
            <span>Feels like {isFahrenheit ? Math.round(feels * 1.8 + 32) : feels}</span>
            <span className="weather-card__summary-divider" aria-hidden="true" />
            <span>H {high} <span aria-hidden="true">/</span> L {low}</span>
          </div>
        </div>

        <div className="weather-card__sun-art" aria-hidden="true">
          <span className="weather-card__sun-glow" />
          <span className="weather-card__spark weather-card__spark--one" />
          <span className="weather-card__spark weather-card__spark--two" />
          <svg className="weather-card__sun" viewBox="0 0 180 180" fill="none">
            <defs>
              <linearGradient id="weather-sun-gradient" x1="56" y1="43" x2="125" y2="131" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD978" />
                <stop offset="1" stopColor="#F5A43C" />
              </linearGradient>
            </defs>
            <circle className="weather-card__sun-orbit" cx="90" cy="90" r="77" />
            <g stroke="#E99A46" strokeWidth="7" strokeLinecap="round">
              <path d="M90 13v15M90 152v15M13 90h15M152 90h15M35.6 35.6l10.6 10.6M133.8 133.8l10.6 10.6M144.4 35.6l-10.6 10.6M46.2 133.8l-10.6 10.6" />
            </g>
            <circle cx="90" cy="90" r="45" fill="url(#weather-sun-gradient)" />
            <circle cx="90" cy="90" r="33" fill="#FFE89D" fillOpacity=".32" />
          </svg>
        </div>
      </section>

      <div className="weather-card__divider" />

      <footer className="weather-card__details" aria-label="Weather details">
        <div className="weather-card__metric">
          <div className="weather-card__metric-head">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3.5s6.25 6.9 6.25 11.1a6.25 6.25 0 1 1-12.5 0C5.75 10.4 12 3.5 12 3.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path d="M9 15.7a3.1 3.1 0 0 0 2.4 2.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <span>Humidity</span>
          </div>
          <strong>{humidity}<span className="ml-0.5 text-[0.80em] font-large opacity-70">%</span></strong>
        </div>

        <div className="weather-card__metric">
          <div className="weather-card__metric-head">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 8h12.2a2.45 2.45 0 1 0-2.4-2.9M2.5 12h16.2a2.25 2.25 0 1 1-2.2 2.8M4 16h8.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <span>Wind</span>
          </div>
          <strong>{wind}<span className="ml-0.5 text-[0.80em] font-large opacity-70">Km/h</span></strong>
        </div>

        <div className="weather-card__metric">
          <div className="weather-card__metric-head">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 2.8v2M12 19.2v2M21.2 12h-2M4.8 12h-2M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4M18.5 18.5l-1.4-1.4M6.9 6.9 5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <span>UV index</span>
          </div>
          <strong>{uv}</strong>
        </div>

        <div className="weather-card__metric">
          <div className="weather-card__metric-head">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 15a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M12 11l3.2-3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <circle cx="12" cy="11" r="1.4" fill="currentColor" />
              <path d="M6.5 18h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <span>Pressure</span>
          </div>
          <strong>{pressure}<span className="ml-0.5 text-[0.80em] font-large opacity-70">hPa</span></strong>
        </div>

        <div className="weather-card__metric">
          <div className="weather-card__metric-head">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 9h8.5a2.5 2.5 0 1 0-2.3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M3 14h13a3 3 0 1 0-2.8-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M6 19h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M18.5 6.5l1.2-1.2M20 9.5h1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            <span>Gust</span>
          </div>
          <strong>{gust}<span className="ml-0.5 text-[0.80em] font-large opacity-70">Km/h</span></strong>
        </div>

        <div className="weather-card__metric">
          <div className="weather-card__metric-head">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M2.8 12s3.3-5 9.2-5 9.2 5 9.2 5-3.3 5-9.2 5-9.2-5-9.2-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="2.3" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            <span>Visibility</span>
          </div>
          <strong>{visibility/1000}<span className="ml-0.5 text-[0.80em] font-large opacity-70">Km</span></strong>
        </div>

      </footer>
    </article>
  );
}

export default Card