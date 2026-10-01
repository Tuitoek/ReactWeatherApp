import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/weatherApi.js";

const Current = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await getCurrentWeather("Nairobi"); // Replace with your desired location
        setWeatherData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchWeatherData();
  }, []);
  return (
    <div className="flex flex-col items-center  h-screen w-full gap-4">
      <div className="shadow-md rounded-lg p-4 w-xl h-lg flex flex-col items-center justify-center gap-4 drop-shadow-xl">
        <h1>Location:  {weatherData ? weatherData.location.name : "Loading..."} </h1>
        <p>
          Temperature: {weatherData ? weatherData.current.temp_c : "Loading..."}{" "}
          °C
        </p>
                <p>Feels Like: {weatherData ? weatherData.current.feelslike_c : "Loading..."} °C</p>

        <p>
          Condition:{" "}
          {weatherData ? weatherData.current.condition.text : "Loading..."}
        </p>
        <p>
          Humidity: {weatherData ? weatherData.current.humidity : "Loading..."}%
        </p>
        <p>
          Wind Speed:{" "}
          {weatherData ? weatherData.current.wind_kph : "Loading..."} kph
        </p>
        <p>Chance of Rain: {weatherData ? weatherData.current.precip_mm : "Loading..."}%</p>
        {error && <p>Error fetching weather data: {error.message}</p>}
      </div>
    </div>
  );
};

export default Current;
