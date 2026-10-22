const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export const getCurrentWeather = async (location) => {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const getHourlyForecastData = async (location, hours) => {
 const days = Math.ceil(hours / 24); // Calculate the number of days needed for the given hours
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`,
    );
    const data = await response.json();
    const currentHour = new Date().getHours()
    const hourlyData = data.forecast.forecastday
      .flatMap((day) => day.hour)
      .slice(currentHour, 24);
    return hourlyData;
  } catch (error) {
    console.error("Error fetching hourly forecast data:", error);
    throw error;
  }
};

export const getForecastData = async (location, days = 3, aqi = "no", alerts = "no") => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${encodeURIComponent(location)}&days=${days}&aqi=${aqi}&alerts=${alerts}`,
    );
    const data = await response.json();
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Request failed (${response.status})`);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};