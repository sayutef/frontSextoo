import React from 'react';
import Menu from '../../components/menu/menu';
import robotPassword from '../../assets/robotPassword.png';

export default function Profile() {
  return (
    <div className="flex">
      {/* Menú lateral */}
      <Menu />

      {/* Contenido de la página */}
      <div className="flex-1 bg-[#faf9f2] min-h-screen p-6 space-y-8">

        {/* Tarjeta de perfil */}
        <div className="bg-teal-500 text-white rounded-xl p-6 shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/avatar.png" 
              alt="Foto de perfil"
              className="h-20 w-20 rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-2xl font-bold">Faustina del Castillo</h1>
              <p className="text-sm">faustocas@mail.com</p>
              <p className="text-sm">ID: #001</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🇲🇽 México</span>
          </div>
        </div>

        {/* Información básica */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <span>🖋️</span> Información básica
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold">Primer nombre:</p>
              <p>Faustina</p>
            </div>
            <div>
              <p className="font-semibold">Apellidos:</p>
              <p>del Castillo Rodriguez</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>faustocas@email.com</p>
            </div>
          </div>
        </div>

        {/* Cambio de contraseña */}
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex-1 w-full">
            <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
              <span>🖋️</span> Cambio de contraseña
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ingrese nueva contraseña</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Confirmar nueva contraseña</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition">
                Actualizar
              </button>
            </div>
          </div>

          <img
            src={robotPassword}
            alt="robot"
            className="h-40 w-auto"
          />
        </div>

      </div>
    </div>
  )
}
