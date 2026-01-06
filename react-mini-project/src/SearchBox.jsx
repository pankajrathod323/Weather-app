import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css'

export function SearchBox(){
  let [city, setCity] = useState('');
  let handleChange = (event) => {
      setCity(event.target.value);
  }
   
  let handleSubmit = (event) => {
      event.preventDefault;
      console.log(city);
       setCity("");
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
         </form>
    </div>
  )
}