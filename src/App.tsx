import { Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import PageGrafic from './pages/grafic/PageGrafic'
import SignIn from './pages/singIn/SingIn'
import Login from './pages/Login/Login'
import Init from './pages/Init/Init'
import Home from './pages/Home/Home'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/grafic" element={<PageGrafic />} />
      <Route path='/singin' element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/init" element={<Init />} />
    </Routes>
  )
}

export default App
