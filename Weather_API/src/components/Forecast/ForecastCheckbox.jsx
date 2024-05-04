/* eslint-disable react/prop-types */
import { useState } from "react";
import ForecastAPI from "./ForecastAPI"

const ForecastCheckbox = ( { cityLat, cityLon } ) => {
  const [geoForecast, setGeoforecast] = useState(false);
  return (
        <>  
          <div id="forecast"> 
            <p>5 days forecast</p>
            <input type="checkbox" onChange={() => setGeoforecast(!geoForecast)}/>
            { geoForecast && <ForecastAPI lat={cityLat} lon={cityLon}/>}
          </div>
        </>
  )
}

export default ForecastCheckbox