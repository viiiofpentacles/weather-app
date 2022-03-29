import storm from './icons/storm.png'
import drizzle from './icons/drizzle.png'
import rain from './icons/rain.png'
import snow from './icons/snowflake.png'
import atmosphere from './icons/fog.png'
import clear from './icons/sun.png'
import clouds from './icons/sunny.png'
const countryName = document.getElementById('country')
const weatherType = document.getElementById('weather')
const temperature = document.getElementById('temperature')
const degreeToggle = document.getElementById('degree-toggle')
const unitInput = document.getElementById('units')
const icon = document.getElementById('weather-icon')
const container = document.getElementById('container')

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

function updateIcon (country) {
  if (String(country.weather[0].id).charAt(0) === '2') {
    icon.src = storm
    container.classList.remove(container.classList.item(0))
    container.classList.add('storm')
  } else if (String(country.weather[0].id).charAt(0) === '3') {
    icon.src = drizzle
    container.classList.remove(container.classList.item(0))
    container.classList.add('drizzle')
  } else if (String(country.weather[0].id).charAt(0) === '5') {
    icon.src = rain
    container.classList.remove(container.classList.item(0))
    container.classList.add('rain')
  } else if (String(country.weather[0].id).charAt(0) === '6') {
    icon.src = snow
    container.classList.remove(container.classList.item(0))
    container.classList.add('snow')
  } else if (String(country.weather[0].id).charAt(0) === '7') {
    icon.src = atmosphere
    container.classList.remove(container.classList.item(0))
    container.classList.add('atmosphere')
  } else if (String(country.weather[0].id) === '800') {
    icon.src = clear
    container.classList.remove(container.classList.item(0))
    container.classList.add('clear')
  } else if (String(country.weather[0].id) !== '800' && String(country.weather[0].id).charAt(0) === '8') {
    icon.src = clouds
    container.classList.remove(container.classList.item(0))
    container.classList.add('clouds')
  }
}

function displayError () {
  countryName.textContent = 'Please check that you have entered the name correctly.'
}

export { displayWeather, toggleCelsius, updateIcon, displayError }
