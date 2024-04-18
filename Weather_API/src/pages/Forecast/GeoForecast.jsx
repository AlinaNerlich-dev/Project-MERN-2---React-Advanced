/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';
import Forecast from "../../components/Forecast/Forecast"

const GeoForecast = ( { geoLocation }) => {

 const [data, setData] = useState();

 useEffect(()=>{
   (async () => {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocation.coord.lat}&lon=${geoLocation.coord.lon}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
       ).then((response) => response.json());
       setData(response)
       console.log(response)
   })();
   }, [])

  
  return (
    <div>
      <Forecast data={data}/>
      </div>
  )
}

export default GeoForecast

