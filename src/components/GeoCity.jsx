/* eslint-disable react/prop-types */

import ForecastCheckbox from "./Forecast/ForecastCheckbox";
import Loader from "./Loader";
import GeoContext from "../context/geoContext";
import './GeoCity.css'
import WeatherTemplate from "./WeatherTemplate";

const GeoCity = ({ cityData }) => { 

  const geoContext = {
    cityLat: cityData.coord.lat,
    cityLon: cityData.coord.lon,
  };

  return (
    <>
      {cityData ? (
        <div>
         <WeatherTemplate cityData={cityData}/> 
          <GeoContext.Provider value={geoContext}>
            <ForecastCheckbox />
          </GeoContext.Provider>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default GeoCity;
