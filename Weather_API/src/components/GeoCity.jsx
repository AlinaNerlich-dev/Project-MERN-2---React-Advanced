/* eslint-disable react/prop-types */
import { kelvinToCelcius } from "./functions";
import { dayOrNight } from "./functions";
import ForecastCheckbox from "./Forecast/ForecastCheckbox";

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
    <div>
        <h1 style={{color:`${fontColor}`}}>{city.name}</h1>
          <h2>{weather}</h2>
          <img src={iconUrl} alt="" />
          <p>The current temperature is: </p><span style={{color:`${fontColor}`}} id="temp">{temp} Celcius</span>
          <ForecastCheckbox cityLat={lat} cityLon={lon}/>
    </div>
  )
}

export default GeoCity