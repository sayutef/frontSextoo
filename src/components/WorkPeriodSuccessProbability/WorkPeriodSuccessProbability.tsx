import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const WorkPeriodSuccessProbability = () => {
  const [chartData, setChartData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [probability, setProbability] = useState<number | null>(null)
  const fixedWeight = 0.15 // 150 gramos en kg

  useEffect(() => {
    // Datos falsos simulados en gramos
    const fakeDataPoints = [
      { avg_weight: 80 },
      { avg_weight: 95 },
      { avg_weight: 110 },
      { avg_weight: 125 },
      { avg_weight: 140 },
      { avg_weight: 155 },
      { avg_weight: 170 },
      { avg_weight: 185 },
      { avg_weight: 200 },
      { avg_weight: 215 },
    ]

    // Ordenar por peso promedio
    fakeDataPoints.sort((a, b) => a.avg_weight - b.avg_weight)

    const total = fakeDataPoints.length
    let cumulativeCount = 0
    const weights: number[] = []
    const probabilities: number[] = []

    // Convertir gramos a kilogramos y llenar pesos
    for (const p of fakeDataPoints) {
      weights.push(p.avg_weight / 1000)
    }

    // Calcular probabilidades acumuladas
    for (let i = 0; i < fakeDataPoints.length; i++) {
      cumulativeCount += 1
      probabilities.push(cumulativeCount / total)
    }

    setChartData({
      labels: weights.map(w => w.toFixed(3) + ' kg'),
      datasets: [
        {
          label: 'Probabilidad acumulada de éxito (peso promedio)',
          data: probabilities,
          borderColor: '#6366f1',
          backgroundColor: '#a5b4fc',
          fill: false,
          tension: 0.3,
        },
      ],
    })

    // Calcular probabilidad acumulada para peso ≤ fixedWeight (0.15 kg)
    let prob = 0
    for (let i = 0; i < weights.length; i++) {
      if (weights[i] <= fixedWeight) {
        prob = probabilities[i]
      } else {
        break
      }
    }

    setProbability(prob)
    setLoading(false)
  }, [])

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8 h-120">
      <p className="mt-6 text-center text-lg font-medium">
        La probabilidad acumulada de tener un período de trabajo exitoso con peso promedio menor o igual a <strong>150 gramos</strong> es:{' '}
        <strong>{(probability !== null ? (probability * 100).toFixed(2) : '0')}%</strong>
      </p>

      {loading && <p className="text-center text-gray-500">Cargando datos...</p>}

      {chartData && (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: true, position: 'bottom' },
              title: {
                display: true,
                text: 'Función de Probabilidad Acumulada de Peso Promedio',
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 1,
                title: {
                  display: true,
                  text: 'Probabilidad acumulada',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Peso Promedio (kg)',
                },
              },
            },
          }}
        />
      )}

      {!loading && !chartData && (
        <p className="text-center text-gray-500">No hay datos disponibles para mostrar.</p>
      )}
    </div>
  )
}

export default WorkPeriodSuccessProbability
