import { useState, useEffect } from "react";
import { getHourlyForecastData } from "../services/weatherApi.js";

const HourlyForecastCard = ({ location }) => {
  const [hours, setHours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    getHourlyForecastData(location, 24)
      .then((data) => {
        if (!cancelled) setHours(data);
      })
      .catch((e) => {
        if (!cancelled) setError(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    if (error) return <p>Error: {error}</p>;
    return () => {
      cancelled = true;
    };
  }, [location]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="flex flex-wrap items-center justify-space-between gap-5 overflow-x-auto p-4">
      {hours.map((hourData, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-2 border-2 border-gray-300 rounded-lg w-auto h-auto"
        >
            <p className="text-lg font-semibold">{hourData.time.split(" ")[1]}</p>
         
            <img
              src={hourData.condition.icon}
              alt={hourData.condition.text}
              className="w-16 h-16"
            />

            <p className="text-sm font-semibold">{hourData.temp_c}°C</p>
    

          <p className="text-sm text-gray-400">{hourData.condition.text} </p>
        
        </div>
      ))}
    </div>
  );
};

export default HourlyForecastCard;
