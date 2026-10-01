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
          }&q=${location}`
        );

        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [location]);

  if (!location) {
    return <p>Please search for a location.</p>;
  }

  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex 
    flex-col items-center justify-center gap-4 p-10 drop-shadow-xl w-lg h-lg border-2 border-gray-300 rounded-lg">
      <h1>{weather.location.name}</h1>
      <p>{weather.current.temp_c}°C</p>
      <p>{weather.current.condition.text}</p>
    </div>
  );
}

export default Current;