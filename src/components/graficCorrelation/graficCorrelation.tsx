import { useEffect, useState } from 'react'
import { Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(PointElement, LinearScale, Tooltip, Legend)

const CorrelationChart = () => {
  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    // Datos falsos para prueba
    const fakeData = [
      { distance_traveled: 5, weight_waste: 0.7 },
      { distance_traveled: 10, weight_waste: 0.8 },
      { distance_traveled: 15, weight_waste: 0.844 },
      { distance_traveled: 20, weight_waste: 0.844 },
      { distance_traveled: 25, weight_waste: 0.903 },
      { distance_traveled: 30, weight_waste: 1.0 },
      { distance_traveled: 35, weight_waste: 1.4 },
      { distance_traveled: 40, weight_waste: 1.6 },
      { distance_traveled: 45, weight_waste: 1.9 },
      { distance_traveled: 50, weight_waste: 2.0 },
    ]

    const points = fakeData.map((item) => ({
      x: item.distance_traveled,
      y: item.weight_waste,
    }))

    setChartData({
      datasets: [
        {
          label: 'Distancia recorrida vs Peso de desecho',
          data: points,
          pointRadius: 7,
          backgroundColor: 'rgba(0, 169, 113, 0.7)',
        },
      ],
    })
  }, [])

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-200">
      <h2 className="text-xl font-bold mb-4 text-center">
        Correlación Distancia vs Peso de Desperdicio
      </h2>
      {chartData ? (
        <Scatter
  data={chartData}
  options={{
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Correlación Distancia vs Peso de Desperdicio',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Distancia recorrida (m)', // Cambia según tus unidades
        },
      },
      y: {
        title: {
          display: true,
          text: 'Peso de desecho (kg)', // Cambia según tus unidades
        },
      },
    },
  }}
/>

      ) : (
        <p className="text-center text-gray-500">No hay datos para mostrar.</p>
      )}
    </div>
  )
}

export default CorrelationChart
