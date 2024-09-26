import React, { useState } from "react";


function SearchBar({ setCity, fetchWeatherData }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(input);
    fetchWeatherData(input);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded mr-2"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
