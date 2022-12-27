import { useEffect, useState } from 'react'
import getWeather from './api/getWeather'
export default function App() {
  const [city, setCity] = useState('Lima')
  const [onSubmit, setOnSubmit] = useState(false)
  const [resJSON, setResJSON] = useState({})

  useEffect(() => {
    getWeather(city)
      .then((res) => setResJSON(res))
      .catch((e) => console.log(e))
    setOnSubmit(false)
  }, [onSubmit])

  const handleChangeInput = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOnSubmit(true)
  }

  return (
    <div className="w-[100%] h-screen bg-[url('./assets/cold.jpg')]">
      <section className="p-5">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChangeInput}
            className="w-[100%] outline-none p-3 bg-white rounded-[10px] "
            type="text"
            placeholder="Lima"
            value={city}
          />
        </form>
      </section>
      <section className="p-5 flex flex-col items-center justify-center">
        <p className="text-bold text-[70px] text-gray-700">
          {resJSON?.location?.name}
        </p>
        {resJSON.hasOwnProperty('error') ? (
          <p className="pl-3 text-bold text-[30px] text-gray-700">
            {resJSON?.error?.message}
          </p>
        ) : (
          <p className="pl-5 text-bold text-[60px] text-gray-700">
            {resJSON?.current?.temp_c}°
          </p>
        )}
      </section>
    </div>
  )
}
