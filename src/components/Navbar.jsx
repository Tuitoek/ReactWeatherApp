import React from "react";
import { Link } from "react-router-dom";
import WeatherLogo from "../assets/WeatherLogo.png";
import SearchBar from "./SearchBar";

function Navbar({ location, setLocation }) {
  return (
    <div
      className="flex flex-col items-center justify-center 
    gap-4 p-10 drop-shadow-xl w-100% h-lg"
    >
      <span className="flex flex-row gap-4 items-center justify-center  drop-shadow-xl w-full h-lg">
        <img className="w-16 h-16" src={WeatherLogo} alt="Weather Logo" />

        <h1 className="text-xl font-semibold dop-shadow-xl">Weather App</h1>
        <SearchBar location={location} setLocation={setLocation} />
      </span>

      <span className="text-md font-semibold dop-shadow-xl flex flex-row gap-8 border-b-2 border-gray-300 pb-2">
        <Link to="/current" className="text-black hover:text-blue-700 active:text-blue-800">
          Current
        </Link>
        <Link to="/forecast" className="text-black hover:text-blue-700 active:text-blue-800">
          Forecast
        </Link  >
        <Link to="/astronomy" className="text-black hover:text-blue-700 active:text-blue-800 ">
          Astronomy
        </Link>
        <Link to="/history" className="text-black   hover:text-blue-700 active:text-blue-800">
          History
        </Link>
        <Link to="/alerts" className="text-black hover:text-blue-700 active:text-blue-800">
          Alerts
        </Link>
        <Link to="/marine" className="text-black hover:text-blue-700 active:text-blue-800">
          Marine
        </Link>
        <Link to="/timezone" className="text-black hover:text-blue-700 active:text-blue-800">
          Timezone
        </Link>
        <Link to="/sports" className="text-black hover:text-blue-700 active:text-blue-800">
          Sports
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
