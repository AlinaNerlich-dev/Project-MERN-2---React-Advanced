import { Outlet } from "react-router-dom"
import { useState } from "react";

function App() {

   // Geoforecast

  //  const [geoForecast, setGeoforecast] = useState(false)
  const [selectedCity, setSelectedCity] = useState();

  console.log(selectedCity)

  return (
    <div id="selection">
    <p>Choose a city:</p>
    <select
      name="cities"
      id="cities"
      onChange={(e) => setSelectedCity(e.target.value)}
    >
      <option value="none">Select a City</option>
      <option value="Düsseldorf" name="Duesseldorf">Düsseldorf</option>
      <option value="Münster" name="Muenster">Münster</option>
      <option value="Chandigarh" name="Chandigarh">Chandigarh</option>
      <option value="Dehli" name="Dehli">Dehli</option>
      <option value="Mumbai" name="Mumbai">Mumbai</option>
    </select>

    <div id="home">
      <div id="welcome">
        <p>Welcome to</p>
          <Outlet context={[selectedCity, setSelectedCity]} />
      </div>
    </div>
  </div>
  )
}

export default App
