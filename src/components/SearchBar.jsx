import React, { useState } from "react";

const SearchBar = () => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = async () => {
    if (location.trim() === "") return;

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${location}`
      );

      if (!response.ok) {
        throw new Error("Location not found");
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 p-10 drop-shadow-xl">
      <input
        className="w-lg h-lg border-2 border-gray-300 rounded-lg p-2 focus:border-blue-500"
        type="search"
        placeholder="Please Enter Your Location"
        id="Searchbar"
        value={location}
        onChange={handleChange}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded"
        onClick={handleSearch}
        type="button"
      >
        Go
      </button>
    </div>
  );
};

export default SearchBar;