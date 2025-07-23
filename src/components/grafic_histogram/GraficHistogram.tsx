import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GraficHistogram() {
  // Datos simulados (pueden ser edades, puntuaciones, etc.)
  const rawData = [3, 5, 7, 8, 9, 12, 14, 14, 16, 18, 18, 19, 20, 21, 22, 23, 23, 24, 25, 26];

  // Definir los rangos (bins)
  const binSize = 5;
  const max = Math.max(...rawData);
  const bins = Array.from({ length: Math.ceil(max / binSize) }, (_, i) => i * binSize);

  // Contar la cantidad de datos por bin
  const frequencies = bins.map((start, i) =>{
    const end = start + binSize;
    return rawData.filter(value => value >= start && value < end).length;
  });

  const data = {
    labels: bins.map(start => `${start}-${start + binSize - 1}`),
    datasets: [
      {
        label: 'Frecuencia',
        data: frequencies,
        backgroundColor: '#4A90E2',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Histograma',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frecuencia',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Intervalos',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default GraficHistogram;
