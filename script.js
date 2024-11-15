
/**
 * a station = {
 *  id: number,
 *  name: string
 * }
 *
 */
let stations = []

let weatherData = {
  id: 0,
  temp: '', // temp in celsius
  windDirection: '', // wind Direction in degrees
  windSpeed: '', // wind Speed in m/s
  overcast: '', // moln coverage in percentage
  downfall: '', // rain in millimeter, total of rain per 15min
  weatherType: '' //type of weather, in string
}

function getStations(stationsOld) {
  let stationsNew = [] // create new temporary array to house the new stations
  fetch("https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station-set/all/period/latest-hour/data.json").then((response) => {
    // console.log(response)
    return response.json() // return the fetch response in json
  }).then((result) => {
    // console.log(result.station[0])
    result.station.forEach(station => { // for every station in station(from response)
      // push a new object into new stations, which has id and name
      stationsNew.push({
        id: station.key,
        name: station.name
      })
    });
    // replaces old stations with new stations content
    stationsOld = stationsNew
    // console.log(stationsOld.length)
  }).catch((err) => {
    console.log(err) // logs an error if anything would go wrong
  })
}

getStations(stations)
