/**pseudocode for inputting images depending on temperature*/
displayWeatherImagePseudo(weatherData) {
  function changePictureTemperature(weatherData) {
    const temperatureValue = getWeatherValue();

    let imgElement = document.getElementById('myImage');
    //could be a stylesheet link aswell, only temporary

    if (temperatureValue < 0) {
      imgElement.src = 'negativeDegrees.jpg';
    } else if (temperatureValue === 0) {
      imgElement.src = 'freezingPoint.jpg';
    } else {
      imgElement.src = 'positiveDegrees.jpg';
    }
  }

  /**pseudocode for inputting images depending on overcast*/
  function changePictureOvercast(weatherData) {
    const overcastValue = getWeatherValue();

    let imgElement = document.getElementById('myImage');
    //could be a stylesheet link aswell, only temporary
    if (overcastValue < 50) {
      imgElement.src = 'clearSkies.jpg';
    } else if (overcastValue >= 50 && overcastValue < 75) {
      imgElement.src = 'sligthlyOvercast.jpg';
    } else (overcastValue >= 75){
      imgElement.src = 'overcast.jpg'
    }
  }

  /**pseudocode for inputting images depending on downfall*/
  function downfallValue(weatherData) {
    const downfallValue = getWeatherValue();
  }
}
