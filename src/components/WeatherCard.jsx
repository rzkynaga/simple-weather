import React from 'react';

const WeatherCard = ({ city = 'Unknown', current = {}, daily = [], aqi = null }) => {
  // Fungsi untuk menentukan level AQI
  const getAQILevel = (aqi) => {
    if (!aqi?.list || !aqi.list[0]?.main?.aqi) return 'Unknown';
    const levels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
    return levels[aqi.list[0].main.aqi - 1] || 'Unknown';
  };

  // Menangani data kosong agar tidak error
  const temperature = current?.temp ?? 'N/A';
  const humidity = current?.humidity ?? 'N/A';
  const windSpeed = current?.wind_speed ?? 'N/A';
  const aqiLevel = getAQILevel(aqi);

  return (
    <div className="w-full max-w-md bg-gray-800 p-5 rounded-lg shadow-lg text-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Cuaca di {city}
      </h2>

      {/* Informasi Cuaca Sekarang */}
      <div className="flex justify-between text-sm mb-2">
        <p>Suhu: {temperature}°C</p>
        <p>Kelembapan: {humidity}%</p>
        <p>Angin: {windSpeed} m/s</p>
      </div>
      <p className="mt-2">Kualitas Udara: {aqiLevel}</p>

      {/* Prakiraan 7 Hari */}
      <h3 className="text-xl font-semibold mt-4 mb-2">Prakiraan Cuaca 7 Hari</h3>
      {daily.length > 0 ? (
        <ul>
          {daily.map((day, index) => (
            <li
              key={index}
              className="flex justify-between p-2 bg-gray-700 rounded mb-1"
            >
              <span>Hari {index + 1}</span>
              <span>{day?.temp?.day ?? 'N/A'}°C</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400">Tidak ada data prakiraan.</p>
      )}
    </div>
  );
};

export default WeatherCard;
