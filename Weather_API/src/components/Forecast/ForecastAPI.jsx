/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import GeoForecast from '../../pages/Forecast/GeoForecast';
import Loader from '../Loader';

const ForecastAPI = ({lat, lon}) => {

  const [data, setData] = useState();
  console.log(data)
 
  useEffect(()=>{
   (async () => {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
       ).then((response) => response.json());
       setData(response)
       console.log(response)
   })();
   }, [])



  return (
    <div id="forecastWrapper">
      { data ? <GeoForecast data={data.list}/> : <Loader />}
    </div>
  )
}

export default ForecastAPI