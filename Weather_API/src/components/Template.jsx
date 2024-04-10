/* eslint-disable react/prop-types */
import { useState } from "react";

import SelectedCity from "../pages/SelectedCity";
import GeoCity from "../pages/GeoCity";

const Template = ( ) => {


  const [selectedCity, setSelectedCity] = useState()

  return (
    <>
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
      </div>
      <div id="welcome">
          <p>Welcome to</p>
          { selectedCity 
          ? 
          <SelectedCity selectedCity={selectedCity} /> 
          : 
          <GeoCity />
          }
          
      </div>
      <div id ="forecast">
        <p>5 days forecast</p>
        <input type="checkbox" />
      </div>
    </>
  )
}

export default Template