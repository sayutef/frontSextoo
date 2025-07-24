// src/components/GraficCake.tsx
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DistributionItem {
  type: string
  value: number
}

const GraficCake = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1201/graphics/pastel?user_id=1&days=30')
      .then(res => res.json())
      .then(json => {
        const distribution: DistributionItem[] = json.data.attributes.distribution

        if (distribution.length > 0) {
          const labels = distribution.map(item => item.type)
          const data = distribution.map(item => item.value)

          setChartData({
            labels,
            datasets: [
              {
                label: 'Distribución de residuos',
                data,
                backgroundColor: [
                  '#f87171',
                  '#60a5fa',
                  '#34d399',
                  '#fbbf24',
                  '#a78bfa',
                  '#f472b6'
                ],
                borderWidth: 1
              }
            ]
          })
        } else {
          setChartData(null)
        }
        setLoading(false)
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error)
        setChartData(null)
        setLoading(false)
      })
  }, [])

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Gráfica de Residuos (30 días)</h2>
      {loading ? (
        <p className="text-center text-gray-500">Cargando datos...</p>
      ) : chartData ? (
        <Pie data={chartData} />
      ) : (
        <p className="text-center text-gray-500">No hay datos para mostrar.</p>
      )}
    </div>
  )
}

export default GraficCake
