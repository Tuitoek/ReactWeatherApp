import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center gap-4 p-10 drop-shadow-xl w-100% h-lg">
        
        <input className = "w-lg h-lg border-2 border-gray-300 rounded-lg p-2  focus:border-blue-500" 
         type="search" placeholder='Please Enter Your Location' id="Searchbar" />         
         
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">Search</button>
         </div>
  )
}

export default SearchBar