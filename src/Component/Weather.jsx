import React from 'react';

const Weather = ({ data }) => {
  if (!data) {
    return <div className="text-center text-light">Enter a city to get the weather information.</div>;
  }

  const {
    name,
    sys: { country },
    main: { temp, humidity, temp_min, temp_max },
    weather,
    wind: { speed },
  } = data;

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="card text-center" style={{ 
        
        backgroundImage: `url('https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
          }}>
      <div style={{width:'600px'}} className="card-body">
        <h2 className="card-title">
          {name}, {country}
        </h2>
        <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
        <h3>{Math.round(temp)}°C</h3>
        <p className="text-capitalize">{weather[0].description}</p>
        <p>Humidity: {humidity}%</p>
        <p>
          Min: {Math.round(temp_min)}°C | Max: {Math.round(temp_max)}°C
        </p>
        <p>Wind Speed: {speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
