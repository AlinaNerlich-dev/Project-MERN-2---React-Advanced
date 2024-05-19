/* eslint-disable react/prop-types */
import ForecastCard from "./ForecastCard";
import { kelvinToCelcius } from "../functions";

const GeoForecast = (data) => {
  const forecastData = data.data;
console.log(forecastData)
    /// Obj -> Array
  let flattenArr = [];
  for (let i = 0; i < forecastData.length; i++) {
    const {
      dt_txt,
      main: { temp },
      weather: [{ icon }],
    } = forecastData[i];
    flattenArr.push({ dt_txt, temp, icon });
  }
  console.log(flattenArr)

  // Convert Array into usable formats
  const formatArray = flattenArr.map((timestamp) => ({
    ... timestamp,
    dt_txt: timestamp.dt_txt.slice(0, 10),
    temp: kelvinToCelcius(timestamp.temp),
  }));
  console.log(formatArray)

 // Group same days as Object
  const grouped = Object.groupBy(formatArray, ({ dt_txt }) => dt_txt);
  console.log(grouped)

  // Get the middle Object of each group/day
  const singleDayInfo = Object.keys(grouped).map(el =>(grouped[el][4])).slice(1);
  console.log(singleDayInfo)


  return (
    <>
      <ul>
        {singleDayInfo.map((day) => {
          return (
            <li key={day.dt_txt}>
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
