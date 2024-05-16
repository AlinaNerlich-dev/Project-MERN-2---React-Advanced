/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import GeoForecast from "./GeoForecast";
import Loader from "../Loader";
import GeoContext from "../../context/geoContext";

const ForecastAPI = () => {
  const [data, setData] = useState();
  const geoContext = useContext(GeoContext);
  const { cityLat, cityLon } = geoContext;

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
      ).then((response) => response.json());
      setData(response);
      console.log(response)
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div id="forecastWrapper">
      {data ? <GeoForecast data={data.list} /> : <Loader />}
    </div>
  );
};

export default ForecastAPI;
