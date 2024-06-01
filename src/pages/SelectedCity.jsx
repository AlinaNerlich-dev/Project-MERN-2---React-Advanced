/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { cities } from "../data";
import { kelvinToCelcius } from "../utilities/functions";
import { dayOrNight } from "../utilities/functions";
import ForecastCheckbox from "../components/Forecast/ForecastCheckbox";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import GeoContext from "../context/geoContext";
import { images } from "../utilities/images";
import './SelectedCity.css'
import WeatherTemplate from "../components/WeatherTemplate";

const SelectedCity = () => {
  let { cityName } = useParams();
  const [cityData, setCityData] = useState();
  const city = cities.find((city) => city.name == cityName);

    const icon = cityData?.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const weather = cityData?.weather[0].main;
    const dayOrNightChar = icon?.slice(-1);
    const temp = kelvinToCelcius(cityData?.main.temp);
    const fontColor = dayOrNight(dayOrNightChar);

    const geoContext = {
      cityLat: city.latitude,
      cityLon: city.longitude,
    };
    
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
      ).then((response) => response.json());
      setCityData(response);
    })();
  }, [city]);

  function findCityImg(list, cityName){
    return list.filter((obj) => obj.city == cityName).map((city) => city.src)
  }
  return (
    <>
      {cityData ? (
        <div>
          <WeatherTemplate cityData={cityData} weather={weather} iconUrl={iconUrl} temp={temp} fontColor={fontColor}/>
          <img className="cityImg" src={findCityImg(images, cityName)} alt={cityName} />
          <GeoContext.Provider value={geoContext}>
          <ForecastCheckbox />
          </GeoContext.Provider>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SelectedCity;
