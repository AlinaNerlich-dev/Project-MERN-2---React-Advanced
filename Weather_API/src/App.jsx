import { Outlet } from "react-router-dom"
import { useState } from "react";




function App() {

   // Geoforecast

  //  const [geoForecast, setGeoforecast] = useState(false)
  const [selectedCity, setSelectedCity] = useState(); 
  // const navigate = useNavigate();

  function handleChange(e){
    const cityName = e.target.value
    console.log(e.target.value)
    setSelectedCity(cityName);
    // navigate(`selectedCity/${city.name}`);
  }

  return (
    <>
    <div id="select">
    <select
      defaultValue="none"
      name="cities"
      id="cities"
      onChange={(e) => handleChange(e)}
      // onChange={(e) => setSelectedCity(e.target.value)}
    >
      <option disabled value="none">Select a City</option>
      <option value="Duesseldorf" name="Duesseldorf">Düsseldorf</option>
      <option value="Muenster" name="Muenster">Münster</option>
      <option value="Chandigarh" name="Chandigarh">Chandigarh</option>
      <option value="Dehli" name="Dehli">Dehli</option>
      <option value="Mumbai" name="Mumbai">Mumbai</option>
    </select>
    </div>
    <div id="home">
      <div id="welcome">
        <p>- Welcome to -</p>
          <Outlet context={[selectedCity, setSelectedCity]} />
      </div>
    </div>
    </>
  )
}

export default App
