import { jwtDecode } from 'jwt-decode';

export const getUserIdFromToken = (): number | null => {
  const token = localStorage.getItem('token')
  if (!token) return null

  try {
    const decoded: any = jwtDecode(token)
    return decoded.user_id || decoded.id || null // depende del nombre en tu token
  } catch (error) {
    console.error('Error al decodificar el token:', error)
    return null
  }
}
