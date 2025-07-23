// Card.tsx
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import robotInit from '../../assets/robotInit.png'
import robotSmallInit from '../../assets/robotSmallInit.png'

interface CardProps {
  id: string
  name: string
}

export default function Card({ id, name }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center relative min-h-[400px]">
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-bold text-teal-600">{name}</h2>
        <img src={robotSmallInit} alt="Icon" className="w-6 h-6" />
      </div>
      <p className="text-gray-500 mb-4">ID: {id}</p>
      <img src={robotInit} alt="PyBot" className="w-32 h-32 mx-auto" />
      <button className="absolute bottom-4 right-4 bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-600">
        <FaHeart />
      </button>
    </div>
  )
}
