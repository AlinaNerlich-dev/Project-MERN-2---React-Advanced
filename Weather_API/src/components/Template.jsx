/* eslint-disable react/prop-types */

import SelectedCity from "../pages/SelectedCity";
import GeoCity from "./GeoCity";

const Template = ( {selectedCity} ) => { // When do I need to use {} around the prop? As thought when its an object but also when its conditional?
  console.log(selectedCity)
  return (
    <>
          { selectedCity 
          ? 
          <SelectedCity selectedCity={selectedCity.selectedCity} /> 
          :
          <GeoCity />
          }
          
     
    </>
  )
}

export default Template