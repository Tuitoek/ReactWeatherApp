import { useState } from "react";

const SearchBar = ({ location, setLocation }) => {
  const [search, setSearch] = useState(location);

  const handleSearch = () => {
    if (search.trim() === "") return;

    setLocation(search.trim());
  };

  return (
    <div className="flex items-center justify-center gap-4 p-10">
      <input
        className="w-lg h-lg border-2 border-gray-300 rounded-lg p-2"
        type="search"
        placeholder="Please Enter Your Location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={handleSearch}
      >
        Go
      </button>
    </div>
  );
};

export default SearchBar;