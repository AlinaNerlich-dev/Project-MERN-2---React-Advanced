/* eslint-disable react/prop-types */
/* eslint-disable no-inner-declarations */
import { useEffect, useState } from "react";
import GeoCity from "../components/GeoCity";
import Loader from "../components/Loader";

const home = document.getElementById("home");

const Home = () => {
  const [geoLocation, setGeoLocation] = useState({
    lat: null,
    lon: null,
  });

  const [cityData, setCityData] = useState();

  useEffect(() => {
    const fetchCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        home.innerHTML = "Geolocation is not supported by this browser.";
      }
    };

    function showPosition(position) {
      setGeoLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    }
    fetchCurrentPosition();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=2b9b192a3fd2926952d5abd3b15aac0f&units=metric`
      ).then((response) => response.json());
      setCityData(response);
    })();
  }, [geoLocation]);

  return <>{cityData ? <GeoCity cityData={cityData} /> : <Loader />}</>;
};

export default Home;
