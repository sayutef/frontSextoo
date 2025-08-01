import { useState } from 'react';
import Swal from 'sweetalert2';           
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from 'react-icons/hi';
import { serviceLogin } from '../../services/login/serviceLogin';
import { serviceAccount } from '../../services/acount/serviceAccount';
import { useNavigate } from 'react-router-dom';
import Igs from '../../assets/igs.png'
import Face from '../../assets/facee.png'
import Twiter from '../../assets/t.png'

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  // Estados para Sign Up
  const [first_name, setfirst_name] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados para Sign In
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    const userData = { first_name, last_name, email, password };

    serviceAccount(
      userData,
      (data) => {
        console.log('Registro exitoso:', data);
        Swal.fire({
          icon: 'success',
          title: '¡Usuario registrado con éxito!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (errorMessage) => {
        console.error('Error en el registro:', errorMessage);
        Swal.fire({
          icon: 'error',
          title: 'Error en el registro',
          text: errorMessage,
        });
      }
    );
  };

  const handleSignIn = () => {
    const credentials = { email: loginEmail, password: loginPassword };

    serviceLogin(
      credentials,
      (data) => {
        console.log('Inicio de sesión exitoso:', data);
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/init');
        });
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
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
              <h1 className="text-3xl font-bold text-teal-600 mb-6 ml-35">Sign In</h1>
              <div className="flex space-x-4 text-xl text-gray-700 mb-6 justify-center">
                <img src={Face}></img>
                <img src={Igs}></img>
                <img src={Twiter}></img>
              </div>
              <div className="space-y-4 mb-4">
                <div className="relative">
                  <HiOutlineMail className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="relative">
                  <HiOutlineLockClosed className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600 hover:text-teal-600 cursor-pointer mb-6">
                Forgot your password?
              </p>
              <button
                onClick={handleSignIn}
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                SIGN IN
              </button>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="w-1/2 h-full flex items-center justify-center bg-white">
            <div className="max-w-md w-full px-12 ml-190">
              <h1 className="text-3xl font-bold text-teal-600 mb-6 ml-20">Create Account</h1>
              <div className="flex space-x-4 text-xl text-gray-700 mb-6 justify-center">
                <img src={Face}></img>
                <img src={Igs}></img>
                <img src={Twiter}></img>
              </div>
              <div className="space-y-4 mb-4">
                <div className="relative">
                  <HiOutlineUser className="absolute left-3 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={first_name}
                    onChange={(e) => setfirst_name(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                onClick={handleSignUp}
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                SIGN UP
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
                <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                <p className="mb-6">
                  To keep connected with us, please log in with your personal info
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-600 transition"
                >
                  SIGN IN
                </button>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
                <p className="mb-6">
                  Enter your personal details and start your journey with us
                </p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-600 transition"
                >
                  SIGN UP
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
