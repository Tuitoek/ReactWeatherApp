import React from 'react'
import WeatherLogo from '../assets/WeatherLogo.png'

function Navbar() {
  return (
    <div className='flex items-center justify-center 
    gap-4 p-2 decorative-border  bg-transparent 
    border-b-2 border-indigo-600 backdrop-blur-lg'>

        <img className = "w-16 h-16" src={WeatherLogo} alt="Weather Logo" />
        
        <h1 className='text-xl font-semibold'>Weather App</h1>
        
        <input className = "w-2xl h-lg bg-white border
         border-gray-600 placeholder:text-gray-500
          placeholder:text-center rounded-lg p-2" 
         type="search" placeholder='Please Enter Your Location' id="Searchbar" />
         
         <input className="bg-violet-700 hover:bg-blue-400 text-white 
         font-semibold py-2 px-4 rounded-lg mx-2" type="submit" value="Search" />
    </div>
  )
}

export default Navbar