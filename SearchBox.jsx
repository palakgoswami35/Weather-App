import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="e7a6499bcaa78e2668ff54d51c0110c1";

let getWeatherInfo = async()=>{
  try{
     let response= await fetch(`${API_URL}?q=${city} &appid=${API_KEY}&units=metric`);
 let jsonResponse= await response.json();
 let result={
  city:city,
  temp: jsonResponse.main.temp,
  tempMin: jsonResponse.main.temp_min,
  tempMax: jsonResponse.main.temp_max,
  humidity: jsonResponse.main.humidity,
  feelsLike: jsonResponse.main.feels_like,
  weather: jsonResponse.weather[0].description,
 };
 console.log(result);
 return result;
  } catch(err){
   throw err;
  }
};

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo=await getWeatherInfo();
    updateInfo(newInfo);
    } catch(err){
    seterror(true);
    }
   
  };

  return (
    <div className="searchBox">
      {/* <h3>Search for the weather</h3> */}
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exist!</p>}
      </form>
    </div>
  );
}
