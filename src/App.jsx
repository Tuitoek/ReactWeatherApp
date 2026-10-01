import { useState } from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Current from './pages/Current';
import Forecast from './pages/Forecast';
import Astronomy from './pages/Astronomy';
import History from './pages/History';
import Alerts from './pages/Alerts';
import Marine from './pages/Marine';
import Timezone from './pages/Timezone';
import Sports from './pages/Sports';  

function App() {
  return (
    <div className="h-screen w-screen 
    bg-white-100 ">
   
     
           
           <BrowserRouter>
           <Navbar />
           <Routes>
            <Route path="/current" element={<Current />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/astronomy" element={<Astronomy />} />
            <Route path="/history" element={<History />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/marine" element={<Marine />} />
            <Route path="/timezone" element={<Timezone />} />
            <Route path="/sports" element={<Sports />} />
           </Routes>
           </BrowserRouter> 
          
          
    </div>
    
  )
    
}

export default App
