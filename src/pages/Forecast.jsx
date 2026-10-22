import { useEffect, useState } from "react";
import { getForecastData } from "../services/weatherApi.js";
import { useWeatherLocation } from "../context/LocationProviderContext";
import CurrentWeatherCard from "../components/CurrentWeatherCard.jsx";

const Forecast = () => {
  const { location } = useWeatherLocation();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState({
    days: 3,
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

  return (
    <div className="flex flex-col  w-auto h-auto p-10 ">
      <CurrentWeatherCard />
      <div className="flex-col items-center justify-content ">

        {weatherData && (
          <div>
      

            <ul className="flex flex-row flex-wrap gap-4 items-center justify-content  p-10 ">
              {weatherData.forecast.forecastday.map((day) => (
                <li
                  className="flex flex-col justify-center items-center w-auto h-auto border rounded-md border-gray-300 p-4 border-solid shadow-md"
                  key={day.date}
                >
                  <p className="text-xl font-semibold">{new Date(day.date).toLocaleString('default', {
                    weekday: 'long',}).toUpperCase().slice(0,3)} </p>
                  <img src={day.day.condition.icon} alt="" />
                  <p ><span className="text-xl font-semibold">{day.day.maxtemp_c}°C</span> </p>
                  <p><span className="text-sm font-semibold text-gray-500">{day.day.mintemp_c}°C</span> </p>
                  <p className="text-sm text-gray-500 font-semibold">Rain {day.day.daily_chance_of_rain}% </p>
                  <p className="text-sm text-gray-500 font-semibold">UV: {day.day.uv}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forecast;
