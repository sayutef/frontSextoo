import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Card from '../../components/cards/card.tsx'
import { getAllPrototypes, createPrototype } from '../../services/prototype/prototype.tsx'
import type { Prototype } from '../../services/prototype/prototype.tsx'

const MySwal = withReactContent(Swal)

export default function Init() {
  const [cards, setCards] = useState<Prototype[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPrototypes() {
      try {
        const allPrototypes = await getAllPrototypes()
        console.log('Respuesta API prototipos:', allPrototypes)

        const prototypesArray = Array.isArray(allPrototypes?.data?.prototypes)
          ? allPrototypes.data.prototypes
          : []

        if (!Array.isArray(prototypesArray)) {
          console.warn('No es un arreglo válido de prototipos')
          setCards([])
          return
        }

        const userIdStr = localStorage.getItem('user_id')
        const user_id = userIdStr ? Number(userIdStr) : 0
        console.log('User ID desde localStorage:', user_id)
        console.log('Lista completa de prototipos:', prototypesArray)

        const filteredPrototypes = prototypesArray.filter((proto) => {
          console.log('Comparando proto.user_id:', proto.user_id, 'con user_id:', user_id)
          return Number(proto.user_id) === user_id
        })

        console.log('Prototipos filtrados:', filteredPrototypes)
        setCards(filteredPrototypes)
      } catch (error) {
        console.error('Error al cargar prototipos:', error)
        setCards([])
      } finally {
        setLoading(false)
      }
    }

    fetchPrototypes()
  }, [])

  const handleAddCard = async () => {
    const { value: formValues } = await MySwal.fire({
      title: 'Agregar dispositivo',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="ID del dispositivo">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Nombre del dispositivo">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const prototype_name = (document.getElementById('swal-input1') as HTMLInputElement).value.trim()
        const model = (document.getElementById('swal-input2') as HTMLInputElement).value.trim()
        if (!prototype_name || !model) {
          Swal.showValidationMessage('Ambos campos son obligatorios')
          return
        }
        return { prototype_name, model }
      }
    })

    if (formValues) {
      try {
        const userIdStr = localStorage.getItem('user_id')
        const user_id = userIdStr ? Number(userIdStr) : 0

        const newPrototype = await createPrototype({
          ...formValues,
          user_id
        })

        setCards((prev) => [...prev, newPrototype])

        Swal.fire({
          icon: 'success',
          title: 'Dispositivo agregado',
          text: `Dispositivo "${newPrototype.prototype_name}" agregado con ID ${newPrototype.prototype_id}`
        })
      } catch (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message || 'Error desconocido al agregar dispositivo'
        })
      }
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-teal-600 text-xl">Cargando prototipos...</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-[#fefdf6] relative">
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-teal-600 mb-8">Welcome to PyBot</h1>

        {cards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map(({ prototype_id, prototype_name }) => (
              <Card key={prototype_id} id={prototype_id} name={prototype_name} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No hay prototipos para mostrar.</p>
        )}
      </div>

      <button
        onClick={handleAddCard}
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 z-50"
        title="Agregar nuevo dispositivo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}
