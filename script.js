/**pseudocode for inputting images depending on temperature*/

function changePictureTemperature() {
  const temperatureValue = weatherData.temp

  let imgElement = document.getElementById('myImage');
  //could be a stylesheet link aswell, only temporary

  if (temperatureValue < 0) {
    imgElement.src = 'negativeDegrees.svg';
  } else if (temperatureValue === 0) {
    imgElement.src = 'freezingPoint.svg';
  } else {
    imgElement.src = 'positiveDegrees.svg';
  }
}

/**pseudocode for inputting images depending on overcast*/
function changePictureOvercast() {
  const overcastValue = weatherData.overcast();

  let imgElement = document.getElementById('myImage');
  //could be a stylesheet link aswell, only temporary
  if (overcastValue < 50) {
    imgElement.src = 'clearSkies.svg';
  } else if (overcastValue >= 50 && overcastValue < 75) {
    imgElement.src = 'sligthlyOvercast.svg';
  } else if (overcastValue >= 75) {
    imgElement.src = 'overcast.svg';
  }
}

/**pseudocode for inputting images depending on downfall*/
function changePictureDownfall() {
  const downfallValue = weatherData.downfall();

  let imgElement = document.getElementById('myImage');
  //once again, only temporary
  if (downfallValue === 0) {
    imgElement.src = 'clearSkies.svg';
  } else if (downfallValue <= 0.5) {
    imgElement.src = 'slightRain.svg';
  } else if (downfallValue > 0.5 && downfallValue < 3.9) {
    imgElement.src = 'moderateRain.svg';
  } else if (downfallValue >= 4 && downfallValue < 8) {
    imgElement.src = 'heavyRain.svg';
  } else if (downfallValue >= 8) {
    imgElement.src = 'stormRain.svg'
  }
}
