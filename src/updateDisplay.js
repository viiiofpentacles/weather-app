import snow from './icons/snowflake.png'
const countryName = document.getElementById('country')
const weatherType = document.getElementById('weather')
const temperature = document.getElementById('temperature')
const degreeToggle = document.getElementById('degree-toggle')
const unitInput = document.getElementById('units')
const icon = document.getElementById('weather-icon')

function displayWeather (country) {
  // eslint-disable-next-line dot-notation
  countryName.textContent = country.name
  temperature.textContent = country.main.temp
  weatherType.textContent = country.weather[0].description
}
function toggleCelsius () {
  if (degreeToggle.textContent === '°F') {
    degreeToggle.textContent = '°C'
    unitInput.value = 'metric'
    const tempVal = ((parseFloat(temperature.textContent) - 32) * (5 / 9)).toFixed(2)
    temperature.textContent = tempVal
  } else {
    degreeToggle.textContent = '°F'
    unitInput.value = 'imperial'
    const tempVal = ((parseFloat(temperature.textContent) * (9 / 5) + 32)).toFixed(2)
    temperature.textContent = tempVal
  }
}

export { displayWeather, toggleCelsius }
