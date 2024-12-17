import React from 'react';

const WeatherCard = ({ city = 'Unknown', current = {}, aqi = null }) => {
  // Fungsi untuk menentukan level AQI
  const getAQILevel = (aqi) => {
    if (!aqi?.list || !aqi.list[0]?.main?.aqi) return 'Unknown';
    const levels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
    return levels[aqi.list[0].main.aqi - 1] || 'Unknown';
  };

  // Menangani data kosong agar tidak error
  const temperature = current?.temp ?? 'N/A';
  const humidity = current?.humidity ?? 'N/A';
  const windSpeed = current?.windSpeed ?? 'N/A';
  const aqiLevel = getAQILevel(aqi);
const saveFavoriteCity = (cityName) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(cityName)) {
    favorites.push(cityName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

  return (
    <div className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-2xl text-gray-100">
      {/* Judul Cuaca */}
      <h2 className="text-3xl font-semibold text-center mb-6">
        Cuaca di <span className="text-blue-400">{city}</span>
      </h2>

      {/* Informasi Cuaca Sekarang */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-xl font-medium">Suhu: {temperature}°C</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-xl font-medium">Kelembapan: {humidity}%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-xl font-medium">Kecepatan Angin: {windSpeed} m/s</p>
        </div>
      </div>

      {/* Kualitas Udara */}
      <div className="mb-4 text-center">
        <p className="text-xl">
          Kualitas Udara:{' '}
          <span
            className={`font-semibold ${
              aqiLevel === 'Good'
                ? 'text-green-500'
                : aqiLevel === 'Very Poor'
                ? 'text-red-500'
                : 'text-yellow-500'
            }`}
          >
            {aqiLevel}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
