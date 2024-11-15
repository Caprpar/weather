
//loop to get the stations and adding a div 'li' for each station

for (let i = 0; i < stations.length; i++){
    let station = document.createElement('li')
    station.id = i
    station.addEventListener('click', updateStation)

}

function updateStation() {
    document.querySelector('#weather-data').textContent = weatherData.name



}

console.log(updateStation)
