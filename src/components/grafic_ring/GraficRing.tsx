import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

// Registrar los componentes necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend)

interface PeriodItem {
  period: string
  weight: number
}

const GraficRing = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1201/graphics/ring?user_id=1&days=30')
      .then(res => res.json())
      .then(json => {
        const periods: PeriodItem[] = json.data.attributes.periods

        if (periods.length > 0) {
          const labels = periods.map(p => p.period)
          const data = periods.map(p => p.weight)

          setChartData({
            labels,
            datasets: [
              {
                label: 'Peso por periodo',
                data,
                backgroundColor: [
                  '#36A2EB',
                  '#FF6384',
                  '#FFCE56',
                  '#4BC0C0',
                  '#9966FF',
                  '#FF9F40'
                ],
                hoverOffset: 10,
              },
            ],
          })
        } else {
          setChartData(null)
        }

        setLoading(false)
      })
      .catch(error => {
        console.error('Error al obtener los datos del anillo:', error)
        setChartData(null)
        setLoading(false)
      })
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Distribución de Peso por Periodo',
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Gráfica de Anillo</h2>
      {loading ? (
        <p className="text-center text-gray-500">Cargando datos...</p>
      ) : chartData ? (
        <Doughnut data={chartData} options={options} />
      ) : (
        <p className="text-center text-gray-500">No hay datos disponibles.</p>
      )}
    </div>
  )
}

export default GraficRing
