import { createContext, useContext } from "react";
const LocationContext = createContext();

const LocationProviderContext = ({ children }) => {
  const [location, setLocation] = useState("");
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProviderContext;
