/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { cities } from "../data";
import { kelvinToCelcius } from "../components/functions";
import { dayOrNight } from "../components/functions";
import ForecastCheckbox from "../components/Forecast/ForecastCheckbox";
import Loader from "../components/Loader";
// import { useNavigate } from "react-router-dom";

const SelectedCity = ( {selectedCity} ) => {
  console.log(selectedCity)

  const [cityData, setCityData] = useState();
  const city = cities.find((city) => city.name == selectedCity);
  const icon = cityData?.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const weather = cityData?.weather[0].main;

  const dayOrNightChar = icon?.slice(-1);
  const temp = kelvinToCelcius(cityData?.main.temp);
  const fontColor = dayOrNight(dayOrNightChar); 

 
  
  useEffect(()=>{
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
        ).then((response) => response.json());
        console.log(response)
        setCityData(response)
    })();
    }, [city])

  
  return (
    <>
    { cityData ? (
      <div>
        <h1 style={{color:`${fontColor}`}}>{(cityData.name == "Konkan Division") ? "Mumbai" : cityData.name}</h1>
        <div id="weather-icon">
            <h2>{weather}</h2>
            <img src={iconUrl} alt="" />
        </div>
          { cityData.name == "Düsseldorf" && <img className="cityImg" src="https://www.h-hotels.com/_Resources/Persistent/c/a/9/1/ca9197ce1ed9fb231e01395d89240a34b2ad19b1/duesseldorf-panorama-03-1601x1600-600x600.jpg" alt="Düsseldorf" />}
          { cityData.name == "Münster" && <img className="cityImg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b1/da/9b/caption.jpg?w=300&h=300&s=1" alt="Münster" />}
          { cityData.name == "Chandigarh" && <img className="cityImg" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Open_Hand_monument%2C_Chandigarh.jpg" alt="Chandigarh" />}
          { cityData.name == "Delhi" && <img className="cityImg" src="https://cdn.britannica.com/16/189816-050-5B006088/neighbourhood-Paharganj-New-Delhi-India.jpg" alt="Dehli" />}
          { cityData.name == "Konkan Division" && <img className="cityImg" src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/02/17135842/things-to-do-in-mumbai-travel-guide-india-destinations-attractions-to-visit.jpg?tr=w-1200,h-900" alt="Mumbai" />}
        <p>The current temperature is: </p><span style={{color:`${fontColor}`}} id="temp">{temp} °C</span>
        <ForecastCheckbox cityLat={city.latitude} cityLon={city.longitude}/>
      </div>
      )
    : <Loader />}
  </>
  )
}

export default SelectedCity