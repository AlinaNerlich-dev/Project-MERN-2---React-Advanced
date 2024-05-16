/* eslint-disable react/prop-types */
import ForecastCard from "./ForecastCard";
import { kelvinToCelcius } from "../functions";

const GeoForecast = (data) => {
  const forecastData = data.data;

  let flattenArr = [];
  for (let i = 0; i < forecastData.length; i++) {
    const {
      dt_txt,
      main: { temp },
      weather: [{ icon }],
    } = forecastData[i];
    flattenArr.push({ dt_txt, temp, icon });
  }

  const celciusArray = flattenArr.map((timestamp) => ({
    dt_txt: timestamp.dt_txt.slice(0, 10),
    temp: kelvinToCelcius(timestamp.temp),
    icon: timestamp.icon,
  }));

  const finalArry = celciusArray.slice(1, 5);

  const grouped = Object.groupBy(celciusArray, ({ dt_txt }) => dt_txt);

  function avgByGroup(groupedObj) {
    const result = {};
    for (const key of Object.keys(groupedObj)) {
      const group = groupedObj[key];
      result[key] =
        group.reduce((avg, current) => avg + current.temp, 0) / group.length;
    }
    return result;
  }

  avgByGroup(grouped);

  return (
    <>
      <ul>
        {finalArry.map((day) => {
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
