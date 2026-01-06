import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export function SearchBox({updateInfo}){
  let [city, setCity] = useState('');
  let [error, setError] = useState(false);

  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


  let getWeatherdata = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    if(jsonResponse.cod === "404"){
      throw new Error("City not found");
    }
    let result = {
     city: city,
     feels_like: jsonResponse.main.feels_like,
     humidity: jsonResponse.main.humidity,
     temp: jsonResponse.main.temp,
     pressure : jsonResponse.main.pressure,
     maxTemp : jsonResponse.main.temp_max,
     minTemp : jsonResponse.main.temp_min,
     weather: jsonResponse.weather[0].description
    };
    return result;
}

  let handleChange = (event) => {
      setCity(event.target.value);
  }
   
  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
      setCity("");
     let newInfo = await getWeatherdata();
     updateInfo(newInfo);
     setError(false);
    }
    catch(err){
      setError(true);
    }
  }

  return (
    <div className='SearchBox'>
        <h3>Search for the city to get Weather</h3>
        <form action="" onSubmit={handleSubmit}>
         <TextField id="outlined-basic" label="City Name" variant="outlined" 
           required
           value={city}
          onChange={handleChange}/>
           <br /><br />
          <Button variant="contained" type='submit' >
            Search
          </Button>
          {error && <p style={{color: "red"}}>No such place exists in the API!</p>}
         </form>
    </div>
  )
}