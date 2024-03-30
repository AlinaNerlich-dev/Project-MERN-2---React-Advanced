/* eslint-disable react/prop-types */
const Template = ({ city } ) => {

  const kelvin = city.main.temp;
  
  const celcius = kelvin - 273.15;
  console.log(celcius) 
  const rounded_celcius = celcius.toFixed(2)

  return (
    <>
      <div>
        <p>Choose a city:</p>
        <select name="cities" id="cities">
          
        </select>
      </div>
      <div>
          <p>Welcome to</p>
          <h1>{city.name}</h1>
          <h2>{city.weather.main}</h2>
          <p>The current temperature is: </p><span>{rounded_celcius}</span>
      </div>
    </>
  )
}

export default Template