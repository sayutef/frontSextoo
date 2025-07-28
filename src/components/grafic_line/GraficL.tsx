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
      position: 'top',
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
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

function GraficL() {
  const [chartData, setChartData] = useState({
    datasets: [{
      type: 'line',
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
  const socketRef = useRef(null);
  const lastUpdateRef = useRef(0); 

  useEffect(() => {
    socketRef.current = serviceWeight((weight) => {
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
