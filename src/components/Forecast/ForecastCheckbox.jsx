/* eslint-disable react/prop-types */
import { useContext } from "react";
import ForecastAPI from "./ForecastAPI";
import CheckboxContext from "../../context/CheckboxContext";
import './ForecastCheckbox.css'


const ForecastCheckbox = () => {
  const {forecast, setForecast} = useContext(CheckboxContext);

  function handleClick(){
    setForecast(!forecast) ;
  }
  console.log(forecast)
  return (
    <>
      <div id="forecast">
        <p>5 days forecast</p>
        <input type="checkbox" id="checkbox" onClick={() => handleClick()} />
        {forecast && <ForecastAPI />}
      </div>
    </>
  );
};

export default ForecastCheckbox;
