import { useState } from "react";

const SearchBar = ({ location, setLocation }) => {
  const [search, setSearch] = useState(location);

  const handleSearch = () => {
    if (search.trim() === "") return;

    setLocation(search.trim());
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2 border-2 border-gray-300 rounded-lg p-2">
      <input
        className="p-2 mr-2"
        type="search"
        placeholder="Please Enter Your Location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="bg-black text-white font-semibold text-sm py-2 px-4 rounded-xl"
        onClick={handleSearch}
      >
        Go
      </button>
      
    </div>
  );
};

export default SearchBar;