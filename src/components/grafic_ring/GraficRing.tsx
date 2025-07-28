import  { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PeriodItem {
  period_id: number
  day_work: string
  start_hour: string
  end_hour: string
  avg_weight: number
  readings_count: number
}

const GraficRing = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://pybot-analisis.namixcode.cc/graphics/anillo?user_id=17&days=30')
      .then(res => res.json())
      .then(json => {
        const periods: PeriodItem[] = json.data.attributes.periods

        if (periods.length > 0) {
          const total = periods.reduce((sum, p) => sum + p.avg_weight, 0)

          const labels = periods.map(p => 
            `${p.day_work} (${p.start_hour.slice(11, 16)} - ${p.end_hour.slice(11, 16)})`
          )

          const data = periods.map(p => (p.avg_weight / total).toFixed(4)) // Normalizado como probabilidad

          setChartData({
            labels,
            datasets: [
              {
                label: 'Probabilidad basada en peso promedio',
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
        text: 'Distribución de Probabilidad por Periodo',
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-center mb-4">Gráfica de Anillo (Probabilidad)</h2>
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
