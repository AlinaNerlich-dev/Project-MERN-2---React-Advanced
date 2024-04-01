/* eslint-disable react/prop-types */
import { kelvinToCelcius } from "./functions";
import { dayOrNight } from "./functions";

const Template = ({ city } ) => {
  const icon = city.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const dayOrNightChar = icon.slice(-1);
  const temp = kelvinToCelcius(city.main.temp);
  const fontColor = dayOrNight(dayOrNightChar);
  
  
  return (
    <>
      <div id="selection">
        <p>Choose a city:</p>
        <select 
          name="cities" 
          id="cities"
          // onChange={(e) => setSelectedAPI(e.target.value)}
          >
          <option value="Düsseldorf">Düsseldorf</option>
          <option value="Münster">Münster</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Dehli">Dehli</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Funchal">Funchal</option>
        </select>
      </div>
      <div id="welcome">
          <p>Welcome to</p>
          <h1 style={{color:`${fontColor}`}}>{city.name}</h1>
          <h2>{city.weather[0].main}</h2>
          <img src={iconUrl} alt="" />
          <p>The current temperature is: </p><span style={{color:`${fontColor}`}} id="temp">{temp} Celcius</span>
      </div>
      <div id ="forecast">
        <p>5 days forecast</p>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default Template