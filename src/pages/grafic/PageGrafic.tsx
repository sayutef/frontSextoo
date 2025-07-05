import { useState } from 'react'
import './PageGrafic.css'
import Menu from '../../components/menu/menu'
import GraficL from '../../components/grafic_line/GraficL'

function PageGrafic() {

  return (
    <>
    <div className="flex">
      <Menu />
      
      
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        
        
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Visualización de Datos
          </h2>
          <GraficL />
        </div>
      </div>
    </div>
    </>
  )
}

export default PageGrafic