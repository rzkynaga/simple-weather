import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';

const API_KEY = '7c714bae5fcbb9546860f507e7ffaf20'; // Ganti dengan API key dari OpenWeatherMap

const App = () => {
  const [city, setCity] = useState('Jambi');
  const [weatherData, setWeatherData] = useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      // Fetch Current Weather
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!weatherResponse.ok) {
        throw new Error('Gagal mengambil data cuaca. Pastikan nama kota benar.');
      }

      const weatherJson = await weatherResponse.json();
      console.log(weatherJson); // Debugging respons

      setWeatherData({
        temp: weatherJson.main.temp,
        humidity: weatherJson.main.humidity,
        windSpeed: weatherJson.wind.speed, // Ambil kecepatan angin
        weather: weatherJson.weather,
      });

      // Fetch AQI jika koordinat tersedia
      if (weatherJson.coord) {
        const aqiResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherJson.coord.lat}&lon=${weatherJson.coord.lon}&appid=${API_KEY}`
        );

        if (!aqiResponse.ok) {
          throw new Error('Gagal mengambil data kualitas udara.');
        }

        const aqiJson = await aqiResponse.json();
        setAqiData(aqiJson);
      }

      setError(null); // Reset error jika sukses
    } catch (err) {
      setError(err.message); // Set pesan error
      setWeatherData(null); // Reset data agar UI tidak crash
      setAqiData(null);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div
      className="min-h-screen w-screen bg-gradient-to-br from-blue-800 to-gray-900 text-white
      flex flex-col items-center justify-center p-12"
    >
      <h1 className="text-4xl font-bold text-center mb-5">Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Cari kota... (Jakarta, Tokyo, London)"
        className="p-3 w-full max-w-md mb-5 rounded-md text-gray-200"
        onChange={(e) => setCity(e.target.value)}
      />

      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <WeatherCard
          city={city}
          current={weatherData} // Kirim semua data ke WeatherCard
          aqi={aqiData}
        />
      )}
      
      {/* Widget OpenWeather */}
      <div id="openweathermap-widget-15"></div>
    </div>
  );
};

export default App;
