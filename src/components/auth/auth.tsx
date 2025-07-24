// auth.js
export const isAuthenticated = () => {
  return !!localStorage.getItem('token') // o tu método de verificación
}
