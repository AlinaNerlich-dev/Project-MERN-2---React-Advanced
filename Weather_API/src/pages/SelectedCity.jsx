/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { cities } from "../data";
import { kelvinToCelcius } from "../components/functions";
import { dayOrNight } from "../components/functions";


const SelectedCity = ( {selectedCity} ) => {

  const [cityData, setCityData] = useState({});
  const city = cities.find((city) => city.name == selectedCity);
  let fontColor;
  let weather;
  let iconUrl;
  let temp;


  async function setVariables (cityData){
    const icon = cityData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const weather = cityData.weather[0].main;
    const dayOrNightChar = icon.slice(-1);
    const temp = kelvinToCelcius(cityData.main.temp);
    const fontColor = dayOrNight(dayOrNightChar); 
    return (iconUrl, weather, dayOrNightChar, temp, fontColor)
  }
  
  
  useEffect(()=>{
    console.log(`Use Effect renders`);
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=2b9b192a3fd2926952d5abd3b15aac0f`
        ).then((response) => response.json());
        console.log(await response)
        
        setCityData(await response)
        return setVariables(await response)
    })();
    
    }, [city])
    
 // eslint-disable-next-line no-unused-vars

 

  return (
    <>
    { cityData && (
      <div>
        <h1 style={{color:`${fontColor}`}}>{(city.name == "Konkan Division") ? "Mumbai" : cityData.name}</h1>
        <div id="weather-icon">
            <h2>{weather}</h2>
            <img src={iconUrl} alt="" />
        </div>
          { city.name == "Düsseldorf" && <img className="cityImg" src="https://www.h-hotels.com/_Resources/Persistent/c/a/9/1/ca9197ce1ed9fb231e01395d89240a34b2ad19b1/duesseldorf-panorama-03-1601x1600-600x600.jpg" alt="Düsseldorf" />}
          { city.name == "Münster" && <img className="cityImg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b1/da/9b/caption.jpg?w=300&h=300&s=1" alt="Münster" />}
          { city.name == "Chandigarh" && <img className="cityImg" src="https://lh6.googleusercontent.com/nTvzaQhtRkBdRvR8TVAnhE3L8tLYTVyHaHjQdEu1Q5F4rbwH1YhOglaK8E32DQzamza-3DQRgR89daJRT-B6mDPbGBClw1UnzsFGUTYJM5askw_9cUo543_CqYfPsiGwU_8oAabOkLqq4WSamcqum3lNvXLDAUfZiQ7j3XIiamZVYspvh7YZmiMcGPUPUQ" alt="Chandigarh" />}
          { city.name == "Delhi" && <img className="cityImg" src="https://cdn.britannica.com/16/189816-050-5B006088/neighbourhood-Paharganj-New-Delhi-India.jpg" alt="Dehli" />}
          { city.name == "Konkan Division" && <img className="cityImg" src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/02/17135842/things-to-do-in-mumbai-travel-guide-india-destinations-attractions-to-visit.jpg?tr=w-1200,h-900" alt="Mumbai" />}
        <p>The current temperature is: </p><span style={{color:`${fontColor}`}} id="temp">{temp} Celcius</span>
      </div>)
    }
  </>
  )
}

export default SelectedCity