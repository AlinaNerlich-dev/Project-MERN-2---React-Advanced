const kelvinToCelcius = (temp) => {
    const kelvin = temp;
  
    const celcius = kelvin - 273.15;
    console.log(celcius) 
    const rounded_celcius = celcius.toFixed(2)

    return (rounded_celcius)
}

export {kelvinToCelcius};