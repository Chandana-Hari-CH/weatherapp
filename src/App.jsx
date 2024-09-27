import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import Weather from './Component/Weather';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '21cf13e8afe1a6e0fcf28b480c5101f3'; // Replace with your API key

  const fetchWeather = async (city) => {
    try {
      setError('');
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setWeatherData(null);
      if (err.response && err.response.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
   
<div>
  <div className="background" />

  <div className="container-fluid  mt-5">
      <h1 style={{color:'white'}} className="text-center mb-5">Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <div className="alert alert-danger text-center">{error}</div>}
      <Weather data={weatherData} />
    </div>
</div>

    
  );
};

export default App;
