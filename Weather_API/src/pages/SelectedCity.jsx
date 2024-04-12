/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { cities } from "../data";
import { kelvinToCelcius } from "../components/functions";
import { dayOrNight } from "../components/functions";

const SelectedCity = ({ selectedCity }) => {
  
  const city = cities.find((city) => city.name == selectedCity);
  console.log(city)
  let weather;
  let fontColor;
  let temp;

  useEffect(() => {

    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
        ).then((response) => response.json());

      const icon = response.weather[0].icon;
      weather = response.weather[0].main;
      const dayOrNightChar = icon.slice(-1);
      temp = kelvinToCelcius(response.main.temp);
      fontColor = dayOrNight(dayOrNightChar);  
      console.log(response);
    })();
  }, [city]);



  return (
    <div>
          <h1 style={{color:`${fontColor}`}}>{city.name}</h1>
          <h2>{weather}</h2>
            { selectedCity == "Düsseldorf" && <img className="cityImg" src="https://www.h-hotels.com/_Resources/Persistent/c/a/9/1/ca9197ce1ed9fb231e01395d89240a34b2ad19b1/duesseldorf-panorama-03-1601x1600-600x600.jpg" alt="Düsseldorf" />}
            { selectedCity == "Münster" && <img className="cityImg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b1/da/9b/caption.jpg?w=300&h=300&s=1" alt="Düsseldorf" />}
            { selectedCity == "Chandigarh" && <img className="cityImg" src="https://lh6.googleusercontent.com/nTvzaQhtRkBdRvR8TVAnhE3L8tLYTVyHaHjQdEu1Q5F4rbwH1YhOglaK8E32DQzamza-3DQRgR89daJRT-B6mDPbGBClw1UnzsFGUTYJM5askw_9cUo543_CqYfPsiGwU_8oAabOkLqq4WSamcqum3lNvXLDAUfZiQ7j3XIiamZVYspvh7YZmiMcGPUPUQ" alt="Düsseldorf" />}
            { selectedCity == "Dehli" && <img className="cityImg" src="https://www.shutterstock.com/image-photo/lotus-temple-located-delhi-india-600nw-2191479471.jpg" alt="Düsseldorf" />}
            { selectedCity == "Mumbai" && <img className="cityImg" src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/02/17135842/things-to-do-in-mumbai-travel-guide-india-destinations-attractions-to-visit.jpg?tr=w-1200,h-900" alt="Düsseldorf" />}
          <p>The current temperature is: </p><span style={{color:`${fontColor}`}} id="temp">{temp} Celcius</span>

    </div>
  )
}

export default SelectedCity