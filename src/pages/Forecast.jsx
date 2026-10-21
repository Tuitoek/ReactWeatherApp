import { useEffect, useState } from "react";
import { getForecastData } from "../services/weatherApi.js";
import { useWeatherLocation } from "../context/LocationProviderContext";

const Forecast = () => {
  const { location }  = useWeatherLocation();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState({
    days: 1,
    aqi: "no",
    alerts: "no",
  });

  // useEffect to fetch forecast data when the location changes
  useEffect(() => {
    const getForecast = async () => {
      const data = await getForecastData(
        location,
        forecastData.days,
        forecastData.aqi,
        forecastData.alerts,
      );
      setWeatherData(data);
    };

    getForecast();
  }, [location, forecastData.days, forecastData.aqi, forecastData.alerts]);

  // Create a function to generate an array of numbers from start to end

  function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  const forecastOptions = range(1, 14);

  // Handle form submission to fetch forecast data based on user input
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getForecastData(
      location,
      forecastData.days,
      forecastData.aqi,
      forecastData.alerts,
    );
    setWeatherData(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "forecast") {
      setForecastData((prev) => ({ ...prev, days: value }));
    }

    if (name === "aqi") {
      setForecastData((prev) => ({ ...prev, aqi: value }));
    }

    if (name === "alerts") {
      setForecastData((prev) => ({ ...prev, alerts: value }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-content w-auto h-auto p-10 border-2 border-blue-100 rounded-lg">
      <h2 className="text-2xl font-bold">Forecast for {location}</h2>
      <span className="flex flex-col gap-4 items-center justify-content">
        <h3 className="text-lg font-semibold">
          Please select a forecast option:
        </h3>

        <span className="flex flex-row gap-10 items-center justify-center  drop-shadow-xl w-full h-lg ">
          <p>Number of days to forecast (1-14):</p>

          <select
            name="forecast"
            id="forecast"
            value={forecastData.days}
            onChange={handleChange}
          >
            {forecastOptions.map((option) => (
              <option key={option} value={option}>
                {option} {option === 1 ? "day" : "days"}
              </option>
            ))}
          </select>
        </span>
        <span className="flex flex-row gap-10 items-center justify-center  drop-shadow-xl w-full h-lg ">
          <p>Get Air Quality Index (AQI) data:</p>

          <select
            name="aqi"
            id="aqi"
            value={forecastData.aqi}
            onChange={handleChange}
          >
            <option key="yes" value="yes">
              Yes
            </option>
            <option key="no" value="no">
              No
            </option>
          </select>
        </span>
        <span className="flex flex-row gap-10 items-center justify-center  drop-shadow-xl w-full h-lg ">
          <p>Get weather alert data:</p>

          <select
            name="alerts"
            id="alerts"
            value={forecastData.alerts}
            onChange={handleChange}
          >
            <option key="yes" value="yes">
              Yes
            </option>
            <option key="no" value="no">
              No
            </option>
          </select>
        </span>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Get Forecast
        </button>
      </span>

      {weatherData && (
        <div>
          <h3 className="text-xl font-bold">Forecast for {location}</h3>

          <ul className="flex flex-row flex-wrap gap-4 items-center justify-content  p-10 ">
            {weatherData.forecast.forecastday.map((day) => (
              <li
                className="w-auto h-auto border rounded-md border-gray-300 p-4 border-solid shadow-md"
                key={day.date}
              >
                <p className="text-cyan-900">Date: {day.date}</p>
                <p>Max Temp: {day.day.maxtemp_c}°C</p>
                <p>Min Temp: {day.day.mintemp_c}°C</p>
                <p>Condition: {day.day.condition.text}</p>
                <p>Chance of Rain: {day.day.daily_chance_of_rain}%</p>
                <p>Chance of Snow: {day.day.daily_chance_of_snow}%</p>
                <p>Max Wind Speed: {day.day.maxwind_kph} kph</p>
                <p>UV Index: {day.day.uv}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Forecast;
