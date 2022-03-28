const countryName = document.getElementById('country')
const weatherType = document.getElementById('weather')
const temperature = document.getElementById('temperature')

function displayWeather (country) {
  // eslint-disable-next-line dot-notation
  countryName.textContent = country.name
  temperature.textContent = `${country.main.temp} °F`
  weatherType.textContent = country.weather[0].description
}

export { displayWeather }
