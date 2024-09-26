import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
//import About from './About';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = '6ee87873a68c83a0e4ebefa8c03ea3bf'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null); // Clear error when data is fetched successfully
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#113355] via-[#4A90E2] to-[#FFA500] flex flex-col items-center justify-center px-4">
      <h1 className="text-white text-4xl font-bold mb-6 text-center">Weather Dashboard</h1>

      <div className="w-full max-w-md flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg mb-4 w-full text-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Search
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weatherData && (
          <div className="mt-6 bg-blue-100 p-4 rounded-lg shadow-md w-full text-center">
            <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
            <p className="text-xl">Temperature: {weatherData.main.temp} °C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} km/h</p>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
              className="mx-auto mt-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#113355] via-[#4A90E2] to-[#FFA500] flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">About the Weather Dashboard</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;




