import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

function GraficRing() {
  const data = {
    labels: ['Éxito', 'Fracaso'],
    datasets: [
      {
        label: 'Probabilidad',
        data: [0.7, 0.3], // 70% de éxito, 30% de fracaso
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Distribución de Probabilidad',
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default GraficRing;
