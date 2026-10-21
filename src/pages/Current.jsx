import HourlyForecastCard from "../components/HourlyForecastCard";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import { useWeatherLocation } from "../context/LocationProviderContext";

import { useState } from "react";

function Current() {
  const { location } = useWeatherLocation();
  const [weather, setWeather] = useState(null);


  

  return (
    <div
      className={`flex  flex-wrap
    flex-col  gap-4 my-6 p-10 drop-shadow-xl w-auto h-auto`}
    >
      <CurrentWeatherCard location={location} />
      <HourlyForecastCard location={location} />
    </div>
  );
}

export default Current;
