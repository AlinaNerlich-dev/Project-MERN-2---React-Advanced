/* eslint-disable react/prop-types */
import { useState } from "react";
import ForecastAPI from "./ForecastAPI";

const ForecastCheckbox = () => {
  const [forecast, setForecast] = useState(false);

  function handleCheckbox() {
    setForecast(!forecast);
  }

  return (
    <>
      <div id="forecast">
        <p>5 days forecast</p>
        <input type="checkbox" onClick={() => handleCheckbox()} />
        {forecast && <ForecastAPI />}
      </div>
    </>
  );
};

export default ForecastCheckbox;
