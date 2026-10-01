import { useEffect, useState } from "react";

function Current({ location }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&q=${location}`,
        );

        const data = await response.json();

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
      if (
    weather.includes("fog") ||
    weather.includes("mist")
  ) {
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
    default: "bg-white text-black"
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
    flex-col  gap-4 p-10 drop-shadow-xl w-auto h-auto border-2 border-gray-300 rounded-lg ${themes[theme]}`}
    >
      <h3 className="text-xl font-bold text-center">Current Weather</h3>
      <span className={`flex flex-row gap-10 items-center justify-center  drop-shadow-xl w-full h-lg `}>
        <span className="text-md text-lg font-semibold drop-shadow-xl">
          <p className="text-lg font-medium">{weather.location.name},</p>
          <p className="text-md">
            {weather.location.region}, {weather.location.country}
          </p>
          <p className="text-sm">Local Time: {weather.location.localtime}</p>
        </span>

        <span>
          <img
            className="w-24 h-24"
            src={weather.current.condition.icon}
            alt="Weather Icon"
          />
          <p className="text-2xl font-bold">{weather.current.temp_c}°C</p>
          <p className="text-md">Feels like: {weather.current.feelslike_c}°C</p>
        </span>
      </span>
      <span className={`flex  justify-content space-x-7 text-md text-lg font-semibold drop-shadow-xl flex flex-row gap-4 items-center justify-center  drop-shadow-xl w-full h-lg `}>
        <p className="text-md">Humidity: {weather.current.humidity}%</p>
        <p className="text-lg">{weather.current.condition.text}</p>
      </span>

      <span className="m-3 text-sm text-lg font-light drop-shadow-xl">
        Last Updated: {weather.current.last_updated}
      </span>
    </div>
  );
}

export default Current;
