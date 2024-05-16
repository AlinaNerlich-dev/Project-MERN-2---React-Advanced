/* eslint-disable react/prop-types */


const ForecastCard = ({day}) => {
    const date = new Date(`${day.dt_txt}`);
    const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const weekDay = weekdays[date.getDay()];
    const icon = day.icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
return(
    <div className="forecastCard">
        <h2>{weekDay}</h2>
        <img src={iconUrl} alt={''} />
        <h3>{day.temp} °C</h3>
    </div>
  )
}

export default ForecastCard