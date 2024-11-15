/**pseudocode for inputting images depending on temperature*/
displayWeatherImagePseudo(weatherData) {
  function changePicture(weatherData) {
    const temperatureValue = getWeatherValue();

    let imgElement = document.getElementById('myImage');

    if (temperatureValue < 0) {
      imgElement.src = 'negativeDegrees.jpg';
    } else if (temperatureValue === 0) {
      imgElement.src = 'freezingPoint.jpg';
    } else {
      imgElement.src = 'positiveDegrees.jpg';
    }
  }
}
