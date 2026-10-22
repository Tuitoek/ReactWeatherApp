import { useState, useEffect } from "react";
import { useWeatherLocation } from "../context/LocationProviderContext";
import { getAstronomyData } from "../services/weatherApi.js";
import CurrentWeatherCard from "../components/CurrentWeatherCard.jsx";

const Astronomy = () => {
  const { location } = useWeatherLocation();
  const [astro, setAstro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!location) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    getAstronomyData(location)
      .then((result) => {
        if (!cancelled) setAstro(result.astronomy.astro);
      })
      .catch((e) => {
        if (!cancelled) {
          setAstro(null);
          setError(e.message);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [location]);
  if (!location) return <p>Please search for a location.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!astro) return null;
  return (
    <div className="flex flex-col gap-3">
      <CurrentWeatherCard />
      <div className="flex flex-col gap-2 p-6 border-2 border-gray-300 rounded-lg p-3">
        <h2 className="text-2xl font-bold">SUN</h2>
        <p className="w-full h-auto bg-gray-300 p-2 rounded-lg text-lg font-semibold text-gray-700">
          Sunrise: {astro.sunrise}
        </p>
        <p className="w-full h-auto bg-gray-300 p-2 rounded-lg text-lg font-semibold text-gray-700">
          Sunset: {astro.sunset}
        </p>
      </div>
      <div className="flex flex-col gap-2 p-6 border-2 border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold">MOON</h2>

        <p className="w-full h-auto bg-gray-300 p-2 rounded-lg text-lg font-semibold text-gray-700">
          Moonrise: {astro.moonrise}
        </p>
        <p className="w-full h-auto bg-gray-300 p-2 rounded-lg text-lg font-semibold text-gray-700">
          Moonset: {astro.moonset}
        </p>
        <p className="w-full h-auto bg-gray-300 p-2 rounded-lg text-lg font-semibold text-gray-700">
          Moon phase: {astro.moon_phase}
        </p>
        <p className="w-full h-auto bg-gray-300 p-2 rounded-lg text-lg font-semibold text-gray-700">
          Moon illumination: {astro.moon_illumination}%
        </p>
      </div>
    </div>
  );
};

export default Astronomy;
