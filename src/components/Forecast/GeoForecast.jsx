/* eslint-disable react/prop-types */
import ForecastCard from "./ForecastCard";
import { kelvinToCelcius } from "../../utilities/functions";

const GeoForecast = (data) => {
  const forecastData = data.data;

    /// Obj -> Array
  let flattenArr = [];
  for (let i = 0; i < forecastData.length; i++) {
    const {
      dt_txt,
      main: { temp },
      weather: [{ icon }],
    } = forecastData[i];
    flattenArr.push({ dt_txt: dt_txt.slice(0, 10), temp: kelvinToCelcius(temp), icon });
  }

 // Group same days as Object
  const grouped = Object.groupBy(flattenArr, ({ dt_txt }) => dt_txt);

  // Get the middle Object of each group/day
  const singleDayInfo = Object.keys(grouped).map(el =>(grouped[el][4])).slice(1);


  return (
    <>
      <ul>
        {singleDayInfo.map((day) => {
          return (
            <li key={day.index}>
              <ForecastCard day={day} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GeoForecast;

//// How can I use the index as a key?
