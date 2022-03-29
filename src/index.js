import './style.css'
import { getWeather } from './API.js'
import { displayWeather, toggleCelsius, updateIcon, displayError } from './updateDisplay.js'
import searchIcon from './icons/magnifying-glass.png'

const searchBtn = document.getElementById('search-btn')
const searchImg = document.getElementById('search-icon')
const searchInput = document.getElementById('search-box')
const tempToggle = document.getElementById('temp-box')
const unitInput = document.getElementById('units')

searchImg.src = searchIcon

function weatherForecast () {
  getWeather(searchInput.value, unitInput.value).then(result => {
    if (result.name) {
      displayWeather(result)
      updateIcon(result)
    } else {
      displayError()
    }
  })
}

searchBtn.addEventListener('click', weatherForecast)

searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    weatherForecast()
  }
})

tempToggle.addEventListener('click', toggleCelsius)

getWeather('Iceland', 'imperial').then(result => {
  if (result.name) {
    displayWeather(result)
    updateIcon(result)
  } else {
    displayError()
  }
})
