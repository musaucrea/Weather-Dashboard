import React from "react";

function WeatherCard({ weatherData }) {
  return (
    <div className="bg-white p-6 rounded shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{weatherData.name}</h2>
      <div className="text-xl mb-2">
        <strong>Temperature:</strong> {weatherData.main.temp}°C
      </div>
      <div className="text-xl mb-2">
        <strong>Humidity:</strong> {weatherData.main.humidity}%
      </div>
      <div className="text-xl mb-2">
        <strong>Wind Speed:</strong> {weatherData.wind.speed} km/h
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
        className="mx-auto"
      />
      <p className="text-xl">{weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
