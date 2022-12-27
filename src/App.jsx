import {useEffect} from 'react'
import getWeather from './api/getWeather'
export default function App() {
  useEffect(() => {
    getWeather("904d2b0ae7cb4f3a83674209222712", "Lima")
      .then(res => console.log(res))
  }, [])


  return (
    <div >
      Hello World
    </div>
  )
}
