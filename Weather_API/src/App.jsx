import { Outlet } from "react-router-dom"
import { useState } from "react";

function App() {

   // Geoforecast

  //  const [geoForecast, setGeoforecast] = useState(false)
  const [selectedCity, setSelectedCity] = useState();

  return (
    <div id="selection">
    <p>Choose a city:</p>
    <select
      name="cities"
      id="cities"
      onChange={(e) => setSelectedCity(e.target.value)}
    >
      <option value="none">Select a City</option>
      <option value="Düsseldorf">Düsseldorf</option>
      <option value="Münster">Münster</option>
      <option value="Chandigarh">Chandigarh</option>
      <option value="Dehli">Dehli</option>
      <option value="Mumbai">Mumbai</option>
    </select>

    <div id="home">
      <div id="welcome">
        <p>Welcome to</p>
          <Outlet context={[selectedCity, setSelectedCity]} />
        </div>
      {/* <div id="forecast"> 
        <p>5 days forecast</p>
        <input type="checkbox" onChange={() => setGeoforecast(!geoForecast)}/>
        { geoForecast && <Forecast data={geoForecast} />}
      </div> */}
    </div>
  </div>
  )
}

export default App
