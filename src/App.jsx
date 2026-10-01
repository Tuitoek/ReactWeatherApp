import { useState } from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Current from "./pages/Current";
import Forecast from "./pages/Forecast";
import Astronomy from "./pages/Astronomy";
import History from "./pages/History";
import Alerts from "./pages/Alerts";
import Marine from "./pages/Marine";
import Timezone from "./pages/Timezone";
import Sports from "./pages/Sports";

function App() {
  const [location, setLocation] = useState("Nairobi"); 
  return (
    <div
      className="h-screen w-screen 
    bg-white-100 flex flex-col items-center  gap-4 p-10 drop-shadow-sm"
    >
      <BrowserRouter>
        <Navbar location={location} setLocation={setLocation} />
        <Routes>
          <Route path="/current" element={<Current location={location} />} />
          <Route path="/forecast" element={<Forecast location={location} />} />
          <Route path="/astronomy" element={<Astronomy location={location} />} />
          <Route path="/history" element={<History location={location} />} />
          <Route path="/alerts" element={<Alerts location={location} />} />
          <Route path="/marine" element={<Marine  location={location} />} />
          <Route path="/timezone" element={<Timezone location={location} />} />
          <Route path="/sports" element={<Sports location={location} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
