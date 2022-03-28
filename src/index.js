import { getWeather } from './API.js'
import { displayWeather } from './updateDisplay.js'

const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-box')

searchBtn.addEventListener('click', () => {
  getWeather(searchInput.value).then(result => {
    displayWeather(result)
  })
})
