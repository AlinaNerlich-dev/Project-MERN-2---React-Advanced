/* eslint-disable no-unused-vars */
const kelvinToCelcius = (temp) => {
    const kelvin = temp;
  
    const celcius = kelvin - 273.15;
    const rounded_celcius = celcius.toFixed(0)

    return (rounded_celcius)
}
export {kelvinToCelcius};


const dayOrNight = (character) => {
    let fontColor; 
    if (character == "d"){
        return fontColor = "#FFFF99"
      } else {
        return fontColor = "#80CEE1"
      }
}
export {dayOrNight}

