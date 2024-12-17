import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';

const API_KEY = '7c714bae5fcbb9546860f507e7ffaf20'; // Ganti dengan API key dari OpenWeatherMap

const App = () => {
  const [city, setCity] = useState('Jakarta');
  const [weatherData, setWeatherData] = useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      // Fetch Current Weather and Forecast based on city name (need geolocation)
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const weatherJson = await weatherResponse.json();
      setWeatherData(weatherJson);

      // Fetch AQI (Air Quality Index) based on city name
      const aqiResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherJson.coord.lat}&lon=${weatherJson.coord.lon}&appid=${API_KEY}`
      );

      const aqiJson = await aqiResponse.json();
      setAqiData(aqiJson);
    } catch (err) {
      setError('Gagal mengambil data cuaca. Coba lagi.');
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]); // Menambahkan 'city' sebagai dependensi

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-800 to-gray-900 text-white
      flex flex-col items-center justify-center p-12"
    >
      <h1 className="text-4xl font-bold text-center mb-5">Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Cari kota..."
        className="p-3 w-full max-w-md mb-5 rounded-md text-gray-200"
        onChange={(e) => setCity(e.target.value)}
      />

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <WeatherCard
          city={city}
          current={weatherData.main}
          daily={weatherData.weather} // Sesuaikan dengan data cuaca harian
          aqi={aqiData}
        />
      )}
    </div>
  );
};

export default App;
