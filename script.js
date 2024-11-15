
//loop to get the stations and adding a div 'li' for each station

for (let i = 0; i < stations.length; i++){
    let li = document.querySelector('li')

    let nameOfStation = document.createTextNode('weatherData.name')

    li.appendChild(nameOfStation)

    li.id = i
    li.addEventListener('click', updateStation)


}

//function to get the new station. get the div ID and

function updateStation() {
    document.querySelector('#weather-data').textContent = weatherData.name
}

console.log(updateStation)
