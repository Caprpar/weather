// Funktionen lägger upp temperaturen på hemsidan

function displayTemp(weatherData) {
  temp = weatherData.temp
  disp = document.querySelector('#degree')
  disp.textContent = temp + "°"
}
