/* eslint-disable react/prop-types */
import { useContext } from "react";
import ForecastAPI from "./ForecastAPI";
import CheckboxContext from "../../context/CheckboxContext";

const ForecastCheckbox = () => {
  const forecast = useContext(CheckboxContext);

  function handleClick(){
    forecast == !forecast;
  }
  console.log(forecast)
  return (
    <>
      <div id="forecast">
        <p>5 days forecast</p>
        <input type="checkbox" onClick={() => handleClick()} />
        {forecast && <ForecastAPI />}
      </div>
    </>
  );
};

export default ForecastCheckbox;
