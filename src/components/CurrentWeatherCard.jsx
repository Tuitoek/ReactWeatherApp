import { useState, useEffect } from "react";
import { getForecastData } from "../services/weatherApi.js";
import { useWeatherLocation } from "../context/LocationProviderContext.jsx";

const CurrentWeatherCard = () => {
  const { location } = useWeatherLocation();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const data = await getForecastData(location);
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [location]);

  const getWeatherTheme = (condition) => {
    const weather = condition.toLowerCase();

    if (weather.includes("sunny") || weather.includes("clear")) {
      return "sunny";
    }
    if (weather.includes("cloudy") || weather.includes("overcast")) {
      return "cloudy";
    }
    if (weather.includes("rain") || weather.includes("drizzle")) {
      return "rainy";
    }
    if (
      weather.includes("snow") ||
      weather.includes("sleet") ||
      weather.includes("ice")
    ) {
      return "snowy";
    }
    if (weather.includes("thunder") || weather.includes("storm")) {
      return "stormy";
    }
    if (weather.includes("fog") || weather.includes("mist")) {
      return "foggy";
    }
  };

  const theme = weather
    ? getWeatherTheme(weather.current.condition.text)
    : "default";

  const themes = {
    sunny: "bg-orange-100 text-orange-950",
    cloudy: "bg-gray-300 text-gray-950",
    rainy: "bg-blue-200 text-blue-950",
    snowy: "bg-white text-gray-950",
    stormy: "bg-purple-200 text-purple-950",
    foggy: "bg-gray-200 text-gray-950",
    default: "bg-white text-black",
  };
  if (!location) {
    return <p>Please search for a location.</p>;
  }

  if (!weather) {
    return <p>Loading...</p>;
  }
  return (
    <div
      className={`flex  flex-wrap
    flex-col  gap-4 my-6 p-10 drop-shadow-xl w-auto h-auto border-2 border-gray-300 rounded-lg ${themes[theme]}`}
    >
      <span className={`flex flex-row gap-10   drop-shadow-xl w-full h-lg `}>
        <span className="flex flex-col gap-3 text-md text-lg font-semibold drop-shadow-xl">
          <span className="flex flex-row gap-6 items-center   drop-shadow-xl ">
            <p className="text-md">
              {weather.location.name}, {weather.location.country}
            </p>
            <p className="text-sm">
              {weather.location.lat}, {weather.location.lon}
            </p>
          </span>

          <span className="flex flex-row gap-6 items-center justify-center  drop-shadow-xl w-full h-lg ">
            <p className="text-5xl font-bold">{weather.current.temp_c}°C</p>
            <img
              className="w-10 h-10"
              src={weather.current.condition.icon}
              alt="Weather Icon"
            />
            <span className="flex flex-col">
              <p className="text-lg">{weather.current.condition.text}</p>
              <p className="text-sm text-light">
                Feels like: {weather.current.feelslike_c}°C
              </p>
            </span>
          </span>
        </span>
      </span>
      <span className="flex flex-row gap-10   drop-shadow-xl w-full h-lg ">
        <p className="text-md">
          <span className="text-xl text-gray-600">UV:</span>{" "}
          <span className="font-bold text-lg">{weather.current.uv}</span>
        </p>
        <p className="text-md">
          <span className=" text-xl text-gray-700">Pressure:</span>{" "}
          <span className="font-bold text-lg">
            {weather.current.pressure_mb} hPa
          </span>{" "}
        </p>
        <p className="text-md">
          <span className=" text-xl text-gray-700">Visibility:</span>{" "}
          <span className="font-bold text-lg">
            {weather.current.vis_km} KM
          </span>{" "}
        </p>
      </span>
      <span className="flex flex-row gap-10   drop-shadow-xl w-full h-lg ">
        <div className="flex flex-col gap-2 drop-shadow-xl  border-1 border-blue-300 rounded-lg p-4 bg-blue-100">
          <p className="text-lg font-bold">Wind</p>
          <p className="text-sm">
            <span className=" text-sm text-gray-700">Speed:</span>{" "}
            <span className="font-bold text-md">
              {weather.current.wind_kph} KPH
            </span>{" "}
          </p>
          <p className="text-md">
            <span className=" text-sm text-gray-700">Direction:</span>{" "}
            <span className="font-bold text-md">
              {weather.current.wind_dir}
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2 drop-shadow-xl  border-1 border-blue-300 rounded-lg p-4 bg-blue-100">
          <p className="text-lg font-bold">Humidity</p>
          <p className="text-sm">
            <span className=" text-sm text-gray-700">Value:</span>{" "}
            <span className="font-bold text-md">
              {weather.current.humidity}%
            </span>{" "}
          </p>
          <p className="text-sm">
            <span className=" text-sm text-gray-700">Dew Point:</span>{" "}
            <span className="font-bold text-md">
              {weather.current.dewpoint_c}°C
            </span>{" "}
          </p>
        </div>
      </span>

      <span className="m-3 text-sm text-lg font-light drop-shadow-xl">
        Last Updated: {weather.current.last_updated}
      </span>
    </div>
  );
};

export default CurrentWeatherCard;
