/* eslint-disable react/prop-types */
import { kelvinToCelcius } from "./functions";

const Template = ({ city } ) => {
const temp = kelvinToCelcius(city.main.temp)
const icon = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
console.log(city.weather[0].icon)

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
          <h1>{city.name}</h1>
          <h2>{city.weather[0].main}</h2>
          <img src={icon} alt="" />
          <p>The current temperature is: </p><span>{temp} Celcius</span>
      </div>
      <div id ="forecast">
        <p>5 days forecast</p>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default Template