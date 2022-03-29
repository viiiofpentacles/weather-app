async function getWeather (place, units) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=2e58f4e7b39a2f4f7cc949cf4f3bd92b&units=${units}`, { mode: 'cors' })
  const weatherObj = response.json()
  return weatherObj
}

export { getWeather }
