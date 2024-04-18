/* eslint-disable react/prop-types */
import { kelvinToCelcius } from "../components/functions";
import { dayOrNight } from "../components/functions";

const SelectedCity = ( {selectedCity} ) => {
  console.log(selectedCity)
  const icon = selectedCity.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const weather = selectedCity.weather[0].main;
  const dayOrNightChar = icon.slice(-1);
  const temp = kelvinToCelcius(selectedCity.main.temp);
  const fontColor = dayOrNight(dayOrNightChar);  


  return (
    <div>
       
          <h1 style={{color:`${fontColor}`}}>{(selectedCity.name == "Konkan Division") ? "Mumbai" : selectedCity.name}</h1>
          <div id="weather-icon">
              <h2>{weather}</h2>
              <img src={iconUrl} alt="" />
          </div>
            { selectedCity.name == "Düsseldorf" && <img className="cityImg" src="https://www.h-hotels.com/_Resources/Persistent/c/a/9/1/ca9197ce1ed9fb231e01395d89240a34b2ad19b1/duesseldorf-panorama-03-1601x1600-600x600.jpg" alt="Düsseldorf" />}
            { selectedCity.name == "Münster" && <img className="cityImg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b1/da/9b/caption.jpg?w=300&h=300&s=1" alt="Münster" />}
            { selectedCity.name == "Chandigarh" && <img className="cityImg" src="https://lh6.googleusercontent.com/nTvzaQhtRkBdRvR8TVAnhE3L8tLYTVyHaHjQdEu1Q5F4rbwH1YhOglaK8E32DQzamza-3DQRgR89daJRT-B6mDPbGBClw1UnzsFGUTYJM5askw_9cUo543_CqYfPsiGwU_8oAabOkLqq4WSamcqum3lNvXLDAUfZiQ7j3XIiamZVYspvh7YZmiMcGPUPUQ" alt="Chandigarh" />}
            { selectedCity.name == "Delhi" && <img className="cityImg" src="https://cdn.britannica.com/16/189816-050-5B006088/neighbourhood-Paharganj-New-Delhi-India.jpg" alt="Dehli" />}
            { selectedCity.name == "Konkan Division" && <img className="cityImg" src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/02/17135842/things-to-do-in-mumbai-travel-guide-india-destinations-attractions-to-visit.jpg?tr=w-1200,h-900" alt="Mumbai" />}
          <p>The current temperature is: </p><span style={{color:`${fontColor}`}} id="temp">{temp} Celcius</span>

    </div>
  )
}

export default SelectedCity