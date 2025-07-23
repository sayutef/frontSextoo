import './menu.css';
import {
  ChartBarIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
  ArrowRightOnRectangleIcon // 👈 ícono para "Salir"
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import RobotSmallInit from '../../assets/robotSmallInit.png';

function Menu({ darkMode, toggleDarkMode }) {
  return (
    <div className={`flex flex-col h-[120vh] w-52 py-8 px-4 transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-teal-500 text-white'}`}>
      
      {/* Logo */}
      <div className="bg-white p-2 rounded-full mb-8 self-center">
        <img src={RobotSmallInit} alt="Logo Robot" className="h-10 w-12" />
      </div>

      {/* Menú de opciones */}
      <div className="flex flex-col gap-6">
        <Link to="/perfil" className="flex items-center gap-3 px-2 py-2 rounded hover:bg-teal-600 transition">
          <UserCircleIcon className="h-6 w-6" />
          <span className="font-semibold hover:text-gray-100">Perfil</span>
        </Link>

        <Link to="/grafic" className="flex items-center gap-3 px-2 py-2 rounded hover:bg-teal-600 transition">
          <ChartBarIcon className="h-6 w-6" />
          <span className="font-semibold hover:text-gray-100">Gráficas</span>
        </Link>

        <button onClick={toggleDarkMode} className="flex items-center gap-3 px-2 py-2 rounded hover:bg-teal-600 transition">
          {darkMode ? (
            <>
              <SunIcon className="h-6 w-6" />
              <span className="font-semibold hover:text-gray-100">Modo claro</span>
            </>
          ) : (
            <>
              <MoonIcon className="h-6 w-6" />
              <span className="font-semibold hover:text-gray-100">Modo oscuro</span>
            </>
          )}
        </button>

        <Link to="/" className="flex items-center gap-3 px-2 py-2 rounded hover:bg-teal-600 transition">
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
          <span className="font-semibold hover:text-gray-100">Salir</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
