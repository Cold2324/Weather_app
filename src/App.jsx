import { useEffect, useState } from "react";
import getWeather from "./api/getWeather";
export default function App() {
  const [city, setCity] = useState("");
  const [onSubmit, setOnSubmit] = useState(false);

  useEffect(() => {
    getWeather("904d2b0ae7cb4f3a83674209222712", city)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, [onSubmit]);

  const handleChangeInput = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOnSubmit(true);
  };

  return (
    <div className="w-[100%] h-screen bg-[url('./assets/sun.jpg')]">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeInput}
          className="outline-none p-5"
          type="text"
          placeholder="Lima"
        />
      </form>
    </div>
  );
}
