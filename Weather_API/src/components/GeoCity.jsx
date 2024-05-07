/* eslint-disable react/prop-types */
import { kelvinToCelcius } from "./functions";
import { dayOrNight } from "./functions";
import ForecastCheckbox from "./Forecast/ForecastCheckbox";
import Loader from "./Loader";

const GeoCity = ( { city } ) => {

    const icon = city.weather[0].icon;
    const weather = city.weather[0].main;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const dayOrNightChar = icon.slice(-1);
    const temp = kelvinToCelcius(city.main.temp);
    const fontColor = dayOrNight(dayOrNightChar);
    const lat = city.coord.lat;
    const lon = city.coord.lon

  return (
    <>
      { city ? 
      <div>
          <h1 style={{color:`${fontColor}`}}>{city.name}</h1>
          <h2>{weather}</h2>
          <img src={iconUrl} alt="" />
          <p>The current temperature is: </p><span style={{color:`${fontColor}`}} id="temp">{temp} °C</span>
          <ForecastCheckbox cityLat={lat} cityLon={lon}/> 
        </div>
      : <Loader />}
        </>
  )
}

export default GeoCity