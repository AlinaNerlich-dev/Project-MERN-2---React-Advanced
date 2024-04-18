/* eslint-disable react/prop-types */
/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import { cities } from "../data";
import { useOutletContext } from "react-router-dom";
import GeoCity from "../components/GeoCity";
import SelectedCity from "./SelectedCity";
import mockup from "../components/mockup"

// const home = document.getElementById("home");

const Home = () => {

   // GEO Location  API Call
  // const [geoLocation, setGeoLocation] = useState({
  //     lat: null,
  //     lon: null
  // })

  // useEffect(()=>{
  //          const fetchCurrentPosition = () => {
  //                 if (navigator.geolocation) {
  //                         navigator.geolocation.getCurrentPosition(showPosition);
  //                       } else {
  //                         home.innerHTML = "Geolocation is not supported by this browser.";
  //                       }
  //                     }

  //             function showPosition(position) {
  //                 setGeoLocation(
  //                     {
  //                         lat: position.coords.latitude,
  //                         lon: position.coords.longitude
  //                     }
  //                 )
  //                 }
  //           fetchCurrentPosition();
  //         }, []);
  //         console.log(geoLocation)

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=-8.4483318&lon=115.3100376&appid=2b9b192a3fd2926952d5abd3b15aac0f`
  //     ).then((response) => response.json());
  //     console.log(response);
  //   })();
  // }, [geoLocation]);



 // Selected City API Call
 // eslint-disable-next-line no-unused-vars
 const [selectedCity, setSelectedCity] = useOutletContext();
 const [cityWeather, setCity] = useState();
console.log(selectedCity)

 useEffect(()=>{
  const city = cities.find((city) => city.name == selectedCity);
  console.log(city);
   (async () => {
     const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
       ).then((response) => response.json());
      setCity(response)
   })();

   }, [selectedCity])

  return (
          <>
          { selectedCity 
            ? 
              <SelectedCity selectedCity={cityWeather} /> 
            :
              <GeoCity city={mockup}/>
          }
          </>
        );
            
     
};

export default Home;

