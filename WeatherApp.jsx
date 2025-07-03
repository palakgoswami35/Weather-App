import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 38.2,
    humidity: 30,
    temp: 37.27,
    tempMax: 37.27,
    tempMin: 37.27,
    weather: "clear sky"
  });

let updateInfo=(newInfo)=>{
 setWeatherInfo(newInfo);
}

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
