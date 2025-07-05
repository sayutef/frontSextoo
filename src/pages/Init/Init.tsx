import React from 'react'
import Menu from '../../components/menu/menu'
import { FaHeart } from 'react-icons/fa'
import robotInit from '../../assets/robotInit.png'
import robotSmallInit from '../../assets/robotSmallInit.png'

export default function Init() {
  return (
    <div className="flex min-h-screen bg-[#fefdf6]">
      {/* Lado izquierdo: menú */}
      <Menu />

      {/* Lado derecho: contenido */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-teal-600 mb-8">Welcome to PyBot Dashboard</h1>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Tarjeta 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center relative">
            <div className="flex justify-between mb-2">
              <h2 className="text-xl font-bold text-teal-600">PyBot</h2>
              <img src={robotSmallInit} alt="Icon" className="w-6 h-6" />
            </div>
            <p className="text-gray-500 mb-4">Clean Homes</p>
            <img
              src={robotInit}
              alt="PyBot"
              className="w-32 h-32 mx-auto"
            />
            <button className="absolute bottom-4 right-4 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600">
              <FaHeart />
            </button>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center relative">
            <div className="flex justify-between mb-2">
              <h2 className="text-xl font-bold text-teal-600">PyBot</h2>
              <img src={robotSmallInit} alt="Icon" className="w-6 h-6" />
            </div>
            <p className="text-gray-500 mb-4">Clean Homes</p>
            <img
              src={robotInit}
              alt="PyBot"
              className="w-32 h-32 mx-auto"
            />
            <button className="absolute bottom-4 right-4 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600">
              <FaHeart />
            </button>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center relative">
            <div className="flex justify-between mb-2">
              <h2 className="text-xl font-bold text-teal-600">PyBot</h2>
              <img src={robotSmallInit} alt="Icon" className="w-6 h-6" />
            </div>
            <p className="text-gray-500 mb-4">Clean Homes</p>
            <img
              src={robotInit}
              alt="PyBot"
              className="w-32 h-32 mx-auto"
            />
            <button className="absolute bottom-4 right-4 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600">
              <FaHeart />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
