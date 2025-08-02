import { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Peso en tiempo real (Simulado)',
    },
    legend: {
      display: true,
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      type: 'linear' as const,
      position: 'bottom' as const,
      title: {
        display: true,
        text: 'Tiempo (segundos)',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Peso (g)',
      },
    },
  },
};

interface DataPoint {
  x: number;
  y: number;
}

interface ChartDataType {
  datasets: {
    type: 'scatter';
    label: string;
    data: DataPoint[];
    backgroundColor: string;
    borderColor: string;
    pointRadius: number;
    showLine: boolean;
    tension: number;
  }[];
}

function GraficL() {
  const [chartData, setChartData] = useState<ChartDataType>({
    datasets: [{
      type: 'scatter',
      label: 'Peso (g)',
      data: [],
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,0.6)',
      pointRadius: 6,
      showLine: true,
      tension: 0,
    }],
  });

  useEffect(() => {
    // Simulación de datos falsos (tiempo vs peso)
    const fakeData: DataPoint[] = [
      { x: 1, y: 100 },
      { x: 2, y: 105 },
      { x: 3, y: 106 },
      { x: 4, y: 111 },
      { x: 5, y: 117 },
      { x: 6, y: 117 },
      { x: 7, y: 117 },
      { x: 8, y: 123 },
      { x: 9, y: 128 },
      { x: 10, y: 135 },
    ];

    setChartData(prev => ({
      ...prev,
      datasets: [{
        ...prev.datasets[0],
        data: fakeData,
      }],
    }));
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Scatter data={chartData} options={options} />
    </div>
  );
}

export default GraficL;
