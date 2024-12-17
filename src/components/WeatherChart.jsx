import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherChart = ({ dailyData }) => {
  const data = {
    labels: dailyData.map((_, index) => `Hari ${index + 1}`),
    datasets: [
      {
        label: 'Suhu Harian (°C)',
        data: dailyData.map((day) => day.temp.day ?? 0),
        fill: false,
        borderColor: '#4fa3d1',
        backgroundColor: '#4fa3d1',
      },
    ],
  };

  return <Line data={data} />;
};

export default WeatherChart;
