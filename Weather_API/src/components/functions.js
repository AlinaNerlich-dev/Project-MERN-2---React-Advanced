/* eslint-disable no-unused-vars */
const kelvinToCelcius = (temp) => {
    const kelvin = temp;
  
    const celcius = kelvin - 273.15;
    const rounded_celcius = celcius.toFixed(2)

    return (rounded_celcius)
}
export {kelvinToCelcius};


const dayOrNight = (character) => {
    let fontColor; 
    if (character == "d"){
        return fontColor = "yellow"
      } else {
        return fontColor = "blue"
      }
}
export {dayOrNight}


// const cityChosen = (city) => {
//   let backgroundImage;

//   if (city == "Düsseldorf"){
//     backgroundImage = "https://www.h-hotels.com/_Resources/Persistent/c/a/9/1/ca9197ce1ed9fb231e01395d89240a34b2ad19b1/duesseldorf-panorama-03-1601x1600-600x600.jpg"
//    }
//    return backgroundImage
// }
// export {cityChosen}