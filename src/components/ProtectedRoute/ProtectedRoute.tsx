// src/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'

import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token')

  // Si no hay token, redirigir al login
  if (!token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
