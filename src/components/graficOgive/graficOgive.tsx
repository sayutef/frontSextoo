import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'

// Registrar los elementos necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

interface CumulativePoint {
  distance: number
  frequency: number
}

const GraficOgive = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1201/graphics/ojiva?user_id=1&days=30')
      .then(res => res.json())
      .then(json => {
        const cumulative: CumulativePoint[] = json.data.attributes.cumulative_data

        if (cumulative.length > 0) {
          const labels = cumulative.map(p => `${p.distance} km`)
          const data = cumulative.map(p => p.frequency)

          setChartData({
            labels,
            datasets: [
              {
                label: 'Frecuencia Acumulada',
                data,
                borderColor: '#6366f1',
                backgroundColor: '#a5b4fc',
                fill: false,
                tension: 0.3,
              },
            ],
          })
        } else {
          setChartData(null)
        }

        setLoading(false)
      })
      .catch(error => {
        console.error('Error al cargar ojiva:', error)
        setChartData(null)
        setLoading(false)
      })
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const
      },
      title: {
        display: true,
        text: 'Gráfica de Ojiva - Frecuencia Acumulada',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frecuencia acumulada',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Distancia (km)',
        },
      },
    },
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Gráfica de Ojiva</h2>
      {loading ? (
        <p className="text-center text-gray-500">Cargando datos...</p>
      ) : chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p className="text-center text-gray-500">No hay datos disponibles para mostrar.</p>
      )}
    </div>
  )
}

export default GraficOgive
