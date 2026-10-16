import { useState } from "react";
import { useWeatherLocation } from "../context/LocationProviderContext";

const SearchBar = ({ onSearch }) => {
  const { setLocation } = useWeatherLocation();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    setLocation(search.trim());
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-row items-center justify-center gap-2 border-2 border-gray-300 rounded-lg p-2"
    >
      <input
        className="p-2 mr-2"
        type="search"
        placeholder="Search city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white font-semibold text-sm py-2 px-4 rounded-xl"
      >
        Go
      </button>
    </form>
  );
};

export default SearchBar;
