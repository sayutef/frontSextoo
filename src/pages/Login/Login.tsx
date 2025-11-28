import { useState } from 'react';
import Swal from 'sweetalert2';               // Importa SweetAlert2
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi';
import { serviceLogin } from '../../services/login/serviceLogin';
import { serviceAccount } from '../../services/acount/serviceAccount';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  // Estados para Sign Up
  const [first_name, setfirst_name] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // Estados para Sign In
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W])[A-Za-z\d\W]{8}$/;

  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Email inválido",
      text: "El correo debe contener @ y un dominio válido.",
    });
    return;
  }

  if (!passwordRegex.test(password)) {
    Swal.fire({
      icon: "error",
      title: "Contraseña inválida",
      text: "La contraseña debe tener exactamente 8 caracteres, incluir 1 mayúscula, 1 minúscula y 1 carácter alfanumérico.",
    });
    return;
  }

  const userData = { first_name, last_name, email, password };

  serviceAccount(
    userData,
    () => {
      Swal.fire({
        icon: 'success',
        title: '¡Usuario registrado con éxito!',
        showConfirmButton: false,
        timer: 1500
      });
    },
    (errorMessage) => {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: errorMessage,
      });
    }
  );
};



  const handleSignIn = () => {
  if (!emailRegex.test(loginEmail)) {
    Swal.fire({
      icon: "error",
      title: "Email inválido",
      text: "El correo debe contener @ y un dominio válido.",
    });
    return;
  }

  const credentials = { email: loginEmail, password: loginPassword };

  serviceLogin(
    credentials,
    (data) => {
      Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => navigate('/init'));
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: error,
      });
    }
  );
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fafaf5]">
      <div className="relative w-full h-full shadow-lg overflow-hidden">
        {/* Forms Container */}
        <div
          className={`absolute top-0 left-0 w-[200%] h-full flex transition-transform duration-700 ease-in-out ${
            isSignUp ? '-translate-x-1/2' : 'translate-x-0'
          }`}
        >
          {/* Sign In Form */}
          <div className="w-1/2 h-full flex items-center justify-center bg-white">
            <div className="max-w-md w-full px-8 -ml-190">
              <h1 className="text-3xl font-bold text-teal-600 mb-6 ml-35">Acceso</h1>
              <div className="flex space-x-4 text-xl text-gray-700 mb-6 justify-center">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
              <div className="space-y-4 mb-4">
                <div className="relative">
                  <HiOutlineMail className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Correo"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 hover:text-teal-600 cursor-pointer mb-6">
                ¿Olvidaste tu contraseña?
              </p>
              <button
                onClick={handleSignIn}
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Ingresar
              </button>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="w-1/2 h-full flex items-center justify-center bg-white">
            <div className="max-w-md w-full px-12 ml-190">
              <h1 className="text-3xl font-bold text-teal-600 mb-6 ml-20">Crear una cuenta</h1>
              <div className="flex space-x-4 text-xl text-gray-700 mb-6 justify-center">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
              <div className="space-y-4 mb-4">
                <div className="relative">
                  <HiOutlineUser className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={first_name}
                    onChange={(e) => setfirst_name(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Apellido"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="email"
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                onClick={handleSignUp}
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Inscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Overlay Panel */}
        <div
          className={`absolute top-0 w-1/2 h-full transition-all duration-700 ease-in-out bg-gradient-to-br from-teal-500 to-teal-600 text-white flex items-center justify-center px-8 ${
            isSignUp ? 'left-0' : 'left-1/2'
          }`}
        >
          <div className="text-center">
            {isSignUp ? (
              <>
                <h2 className="text-3xl font-bold mb-4">Bienvenido!</h2>
                <p className="mb-6">
                  Mantente conectado con nosotros, por favor ingresa con tu informacion personal.
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-600 transition"
                >
                  Iniciar sesion
                </button>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4">Hola, Amigo!</h2>
                <p className="mb-6">
                  Ingresa tus detalles personales e inicia tu jornada con nosotros.
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-600 transition"
                >
                  Inscribirse
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
