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
      { distance_traveled: 10, weight_waste: 2 },
      { distance_traveled: 20, weight_waste: 4.5 },
      { distance_traveled: 15, weight_waste: 3.2 },
      { distance_traveled: 30, weight_waste: 6 },
      { distance_traveled: 25, weight_waste: 5.1 },
      { distance_traveled: 12, weight_waste: 2.7 },
      { distance_traveled: 18, weight_waste: 3.9 },
      { distance_traveled: 35, weight_waste: 6.8 },
      { distance_traveled: 28, weight_waste: 5.5 },
      { distance_traveled: 22, weight_waste: 4.3 },
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
          backgroundColor: 'rgba(16, 185, 129, 0.7)',
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
        <Scatter data={chartData} />
      ) : (
        <p className="text-center text-gray-500">No hay datos para mostrar.</p>
      )}
    </div>
  )
}

export default CorrelationChart
