
import { kelvinToCelcius } from "../utilities/functions";
import { dayOrNight } from "../utilities/functions";

const WeatherTemplate = (cityData) => {
    console.log(cityData)
    const icon = cityData.weather[0].icon;
    const weather = cityData.weather[0].main;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const dayOrNightChar = icon.slice(-1);
    const temp = kelvinToCelcius(cityData.main.temp);
    const fontColor = dayOrNight(dayOrNightChar);

    return (
        <div> 
            <h1 style={{ color: `${fontColor}` }}> {cityData.name == "Konkan Division" ? "Mumbai" : cityData.name}</h1>
            <div id="weather-icon">
            <h2>{weather}</h2>
            <img src={iconUrl} alt="" />
            </div>
            <p>The current temperature is: </p>
            <span style={{ color: `${fontColor}` }} id="temp">
            {temp} °C
            </span>
        </div>


  )
}

export default WeatherTemplate