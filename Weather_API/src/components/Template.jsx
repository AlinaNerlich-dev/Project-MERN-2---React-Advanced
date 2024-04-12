/* eslint-disable react/prop-types */

import SelectedCity from "../pages/SelectedCity";
import GeoCity from "../pages/GeoCity";

const Template = ( selectedCity ) => {


  return (
    <>
          { selectedCity 
          ? 
          <SelectedCity selectedCity={selectedCity} /> 
          :  
          <GeoCity />
          }
          
     
    </>
  )
}

export default Template