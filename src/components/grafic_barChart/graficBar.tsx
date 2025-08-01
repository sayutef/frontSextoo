import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const allDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const BarChart = () => {
  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    // Datos falsos de horas trabajadas por día (en español)
    const fakeHours: Record<string, number> = {
      Lunes: 6.5,
      Martes: 7.2,
      Miércoles: 5.8,
      Jueves: 8.0,
      Viernes: 6.9,
      Sábado: 3.5,
      Domingo: 0,
    }

    const orderedLabels = allDays
    const orderedHours = allDays.map((day) => fakeHours[day] ?? 0)

    setChartData({
      labels: orderedLabels,
      datasets: [
        {
          label: 'Horas Trabajadas',
          data: orderedHours,
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
          borderRadius: 5,
        },
      ],
    })
  }, [])

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Horas Trabajadas por Día</h2>
      {chartData && (
        <div className="h-[370px]">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              indexAxis: 'y',
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Horas Trabajadas',
                  },
                  beginAtZero: true,
                },
                y: {
                  title: {
                    display: true,
                    text: 'Días de la Semana',
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  )
}

export default BarChart
