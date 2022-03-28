import './style.css'
import { getWeather } from './API.js'
import { displayWeather, toggleCelsius } from './updateDisplay.js'

const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-box')
const tempToggle = document.getElementById('temp-box')

searchBtn.addEventListener('click', () => {
  getWeather(searchInput.value).then(result => {
    displayWeather(result)
  })
})

tempToggle.addEventListener('click', toggleCelsius)

getWeather('Iceland').then(result => {
  displayWeather(result)
})
