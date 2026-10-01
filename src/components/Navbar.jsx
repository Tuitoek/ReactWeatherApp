import React from "react";
import WeatherLogo from "../assets/WeatherLogo.png";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div
      className="flex flex-col items-center justify-center 
    gap-4 p-10 drop-shadow-xl w-100% h-lg"
    >
      <span className="flex flex-row gap-4 items-center justify-center  drop-shadow-xl w-full h-lg">
        <img className="w-16 h-16" src={WeatherLogo} alt="Weather Logo" />

        <h1 className="text-xl font-semibold dop-shadow-xl">Weather App</h1>
        <SearchBar />
      </span>

      <span className="text-md font-semibold dop-shadow-xl flex flex-row gap-4 ">
        |<p>Current</p>
        <p>Forecast</p>
        <p>Astronomy</p>
        <p>History</p>
        <p>Alerts</p>
        <p>Marine</p>
        <p>Timezone</p>
        <p>Sports</p>
      </span>
    </div>
  );
}

export default Navbar;
