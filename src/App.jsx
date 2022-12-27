import { useEffect, useState } from 'react'
import getWeather from './api/getWeather'
export default function App() {
  const [city, setCity] = useState('')
  const [onSubmit, setOnSubmit] = useState(false)
  const [resJSON, setResJSON] = useState(undefined)

  useEffect(() => {
    getWeather(city)
      .then((res) => setResJSON(res))
      .catch((e) => console.log(e))
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
      <section>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChangeInput}
            className="outline-none p-5 bg-transparent"
            type="text"
            placeholder="Lima"
          />
        </form>
      </section>
    </div>
  )
}
