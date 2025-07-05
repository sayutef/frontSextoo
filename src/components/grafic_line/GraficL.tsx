import './GraficL.css'
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

const data = {
  datasets: [
    {
      label: 'Estilo de puntos',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 10 },
        { x: 20, y: 30 },
        { x: 25, y: 15 },
        { x: 30, y: 25 }
      ],
      backgroundColor: 'rgba(75,192,192,1)',
      pointRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Gráfico de Estilo de Puntos',
    },
    legend: {
      display: true,
      position: 'top',
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'Eje X'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Eje Y'
      }
    }
  }
};

function GraficL() {
  return (
    <div className="grafico-contenedor">
      <Scatter data={data} options={options} />
    </div>
  );
}

export default GraficL;
