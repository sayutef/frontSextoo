import { useEffect, useRef, useState } from 'react';
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
// @ts-expect-error: serviceWeight does not have TypeScript type definitions yet
import { serviceWeight } from '../../services/grafic/weight/serviceWeight.js';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

const options = {
  responsive: true,
  maintainAspectRatio: false,  // clave para responsive
  plugins: {
    title: {
      display: true,
      text: 'Peso en tiempo real',
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

// Define el tipo de un punto de datos para Chart.js
interface DataPoint {
  x: number;
  y: number;
}

// Define el tipo para chartData según Chart.js
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
  // Estado con tipado explícito
  const [chartData, setChartData] = useState<ChartDataType>({
    datasets: [{
      type: 'scatter',
      label: 'Peso (g)',
      data: [],
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,0.6)',
      pointRadius: 6,
      showLine: true,
      tension: 0.4,
    }],
  });

  const startTimeRef = useRef(Date.now());

  // Aquí indicamos que el ref puede ser un WebSocket o null
  const socketRef = useRef<WebSocket | null>(null);

  const lastUpdateRef = useRef(0);

  useEffect(() => {
    // Aquí asumimos que weight es número (ajusta si no es así)
    socketRef.current = serviceWeight((weight: number) => {
      const now = Date.now();

      if (now - lastUpdateRef.current >= 1000) {
        lastUpdateRef.current = now;
        const secondsElapsed = (now - startTimeRef.current) / 1000;

        const newPoint = { x: secondsElapsed, y: weight };

        setChartData(prev => ({
          ...prev,
          datasets: [{
            ...prev.datasets[0],
            data: [...prev.datasets[0].data, newPoint],
            showLine: true,
            tension: 0.4,
            type: 'scatter',
          }],
        }));
      }
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Scatter data={chartData} options={options} />
    </div>
  );
}

export default GraficL;
