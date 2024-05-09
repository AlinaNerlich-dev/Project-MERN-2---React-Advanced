/* eslint-disable react/prop-types */
import { kelvinToCelcius } from "./functions";
import { dayOrNight } from "./functions";
import ForecastCheckbox from "./Forecast/ForecastCheckbox";
import Loader from "./Loader";
import GeoContext from "../context/geoContext";

const GeoCity = ({ cityData }) => {

  const icon = cityData.weather[0].icon;
  const weather = cityData.weather[0].main;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const dayOrNightChar = icon.slice(-1);
  const temp = kelvinToCelcius(cityData.main.temp);
  const fontColor = dayOrNight(dayOrNightChar);

  const geoContext = {
    cityLat: cityData.coord.lat,
    cityLon: cityData.coord.lon,
  };

  return (
    <>
      {cityData ? (
        <div>
          <h1 style={{ color: `${fontColor}` }}>{cityData.name}</h1>
          <h2>{weather}</h2>
          <img src={iconUrl} alt="" />
          <p>The current temperature is: </p>
          <span style={{ color: `${fontColor}` }} id="temp">
            {temp} °C
          </span>
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
