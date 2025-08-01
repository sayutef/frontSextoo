import { useState } from 'react';
import './PageGrafic.css';
import Menu from '../../components/menu/menu';
import GraficL from '../../components/grafic_line/GraficL';
import WorkPeriodSuccessProbability from '../../components/WorkPeriodSuccessProbability/WorkPeriodSuccessProbability.tsx';
import GraficaBarras from '../../components/grafic_barChart/graficBar.tsx';
import CorrelationChart from '../../components/graficCorrelation/graficCorrelation.tsx';
import Derecha from '../../assets/derecha.png'
import Izquierda from '../../assets/izquierda.png'

function PageGrafic() {
  const graficas = [

    { titulo: 'Ojiva', componente: <WorkPeriodSuccessProbability /> },
    { titulo: 'relativa', componente: <GraficL /> },
    { titulo: 'Gráfica de Barras', componente: <GraficaBarras />  },
    { titulo: 'Gráfica de Correlacion', componente: <CorrelationChart />  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false); // modo oscuro global

  const siguienteGrafica = () => {
    setCurrentIndex((prev) => (prev + 1) % graficas.length);
  };

  const anteriorGrafica = () => {
    setCurrentIndex((prev) => (prev - 1 + graficas.length) % graficas.length);
  };

  return (
    <div className="flex">
      {/* Pasamos props al Menu */}
      <Menu darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <div className={`flex-1 p-6 min-h-screen flex flex-col items-center transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Visualización de Datos
        </h2>

        {/* Contenedor de la gráfica */}
        <div className={`relative w-[90%] h-[570px] rounded-2xl shadow-2xl p-8 mb-4 flex flex-col items-center justify-center transition-all duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
          <h3 className="text-xl font-semibold mb-4 text-center">
            {graficas[currentIndex].titulo}
          </h3>

          <div
            style={{
              width: 'calc(100% - 4px)',
              height: 'calc(450px - 4px)',
            }}
            className="flex items-center justify-center"
          >
            {graficas[currentIndex].componente}
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={anteriorGrafica}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            <img src={Izquierda}></img>
          </button>

          {/* Flecha derecha */}
          <button
            onClick={siguienteGrafica}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            <img src={Derecha}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageGrafic;
