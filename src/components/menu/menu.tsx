import './menu.css';
import {
  ChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RobotSmallInit from '../../assets/robotSmallInit.png'

function Menu() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`flex flex-col h-screen w-20 py-4 items-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-teal-500 text-white'}`}>
      
      <div className="bg-white p-2 rounded-full mb-4">
        <img src={RobotSmallInit} alt="Logo Robot" className="h-8 w-10" />
      </div>

      <div className="flex flex-col items-center gap-6">
        <Link to="/perfil">
          <UserCircleIcon className="h-6 w-6 hover:scale-110 transition cursor-pointer" title="Ver perfil" />
        </Link>
        <Link to="/grafic">
          <ChartBarIcon className="h-6 w-6 hover:scale-110 transition" title="Ver gráficas" />
        </Link>
        <Cog6ToothIcon className="h-6 w-6 hover:scale-110 transition" title="Ver mi robot" />

        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <SunIcon className="h-6 w-6 hover:rotate-180 transition" title="Modo claro" />
          ) : (
            <MoonIcon className="h-6 w-6 hover:rotate-180 transition" title="Modo oscuro" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Menu;
