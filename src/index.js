import './style.css'
import { getWeather } from './API.js'
import { displayWeather, toggleCelsius } from './updateDisplay.js'

const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-box')
const tempToggle = document.getElementById('temp-box')
const unitInput = document.getElementById('units')

searchBtn.addEventListener('click', () => {
  getWeather(searchInput.value, unitInput.value).then(result => {
    displayWeather(result)
  })
})

tempToggle.addEventListener('click', toggleCelsius)

getWeather('Iceland', 'imperial').then(result => {
  displayWeather(result)
})
