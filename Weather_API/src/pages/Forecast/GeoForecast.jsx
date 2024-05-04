/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';

const GeoForecast = ( forecast) => {
  const forecastData = forecast;
  console.log(forecastData)

  function createCard(){
    let cards = [];
    for(let i=0; i<5; i++)
      {
        cards.push(<h1>{forecastData.data[i].main.temp}</h1>)      
      }     
      return cards; 
    }


  return (
      <>
      {/* <h2>{forecastData.data[0].main.temp}</h2> */}
        {createCard()}
      </>
    )

}

export default GeoForecast

