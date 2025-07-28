// src/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')

  // Si no hay token, redirigir al login
  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
