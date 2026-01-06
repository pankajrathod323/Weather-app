import { SearchBox } from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 38.05,
    humidity: 45,
    temp: 33,
    pressure : 999,
    maxTemp : 33,
    minTemp : 33,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div className="container"> 
       <div className="heading">
       <h2>Weather App</h2>
       </div>
       <SearchBox updateInfo={updateInfo}/>
       <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default App
