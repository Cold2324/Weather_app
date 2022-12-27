export default async function getWeather(CITY) {
  const API_KEY = `${import.meta.env.VITE_API_KEY}`
  const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=yes`
  const res = await fetch(URL)
  const resJSON = await res.json()

  return resJSON
}
