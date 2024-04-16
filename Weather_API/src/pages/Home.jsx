/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import Template from "../components/Template";
import mockup from "../components/mockup";
import cityContext from "../context/cityContext";
import { cities } from "../data";

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
  const [selectedCity, setSelectedCity] = useState();
  let conditionalProp = {};


  useEffect(()=>{
    const city = cities.find((city) => city.name == selectedCity);
+
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
        ).then((response) => response.json());

        conditionalProp['selectedCity'] = { ...selectedCity, selectedCity: response } 
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCity])

    console.log(conditionalProp)
  return (
    <div id="home">
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
        <cityContext.Provider value={mockup}>
          <Template {...conditionalProp.selectedCity}/>
        </cityContext.Provider>
      </div>
      <div id="forecast">
        <p>5 days forecast</p>
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Home;
