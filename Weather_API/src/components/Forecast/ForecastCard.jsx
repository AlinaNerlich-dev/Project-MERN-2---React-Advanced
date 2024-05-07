/* eslint-disable react/prop-types */
import { kelvinToCelcius } from "../functions";

const ForecastCard = ({day}) => {
    const date = new Date(`${day.dt_txt}`);
    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const weekDay = weekdays[date.getDay()];
    const temp = kelvinToCelcius(day.main.temp)
    const icon = day.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


    console.log(weekDay)
  return (
    <div className="forecastCard">
        <h2>{weekDay}</h2>
        <img src={iconUrl} alt={day.weather[0].description} />
        <h3>{temp} °C</h3>
    </div>
  )
}

export default ForecastCard