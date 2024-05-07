/* eslint-disable react/prop-types */
import ForecastCard from "../../components/Forecast/ForecastCard";

const GeoForecast = ( forecast) => {

  const forecastData = forecast.data;

  function nthElementFinder(a, n) {
    const result = [];
    let i = n - 1;
    while (i < a.length) {
        result.push(a[i]);
        i += n;
    }
    return result;
  }
  const filteredArray = nthElementFinder(forecastData, 8);

  return (
      <>
        <ul>
            {filteredArray.map((day) =>{
              return(
                <li key={day.dt}>
                  <ForecastCard day={day} /> 
                </li>
              )
            })}
          
        </ul>
      </>
    )

}

export default GeoForecast

//// How can I use the index as an id?