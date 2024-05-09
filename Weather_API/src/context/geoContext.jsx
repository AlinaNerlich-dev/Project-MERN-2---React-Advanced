import { createContext } from "react";

const GeoContext = createContext({
  cityLat: "",
  cityLon:""
});

export default GeoContext;
