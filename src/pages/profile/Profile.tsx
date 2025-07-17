import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/menu';
import robotPassword from '../../assets/robotPassword.png';
import User from '../../assets/userd.png';

import { serviceChangeUser } from '../../services/serviceChangeUser/serviceChangeUser.tsx';

interface UserProfile {
  first_name: string;
  last_name: string;
  email: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [newFirstName, setNewFirstName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('https://pybot-api.namixcode.cc/users/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener datos del perfil');
        return res.json();
      })
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleUpdateUserName = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No tienes permiso para realizar esta acción');
      return;
    }

    if (!newFirstName.trim()) {
      alert('El nuevo nombre no puede estar vacío');
      return;
    }

    serviceChangeUser(
      token,
      newFirstName,
      (data) => {
        alert('Nombre de usuario actualizado con éxito');
        // Recarga toda la página para obtener datos actualizados
        window.location.reload();
      },
      (error) => {
        alert('Error al actualizar usuario: ' + error);
      }
    );
  };

  if (!user) {
    return <div className="p-10">Cargando perfil...</div>;
  }

  return (
    <div className="flex">
      <Menu />

      <div className="flex-1 bg-[#faf9f2] min-h-screen p-6 space-y-8">
        <div className="bg-teal-500 text-white rounded-xl p-6 shadow-md flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={User} alt="Foto de perfil" className="h-20 w-20 rounded-full border-4 border-white" />
            <div>
              <h1 className="text-2xl font-bold">{`${user.first_name} ${user.last_name}`}</h1>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">🇲🇽</span>
          </div>
        </div>

        {/* Información básica */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <span>🖋️</span> Información básica
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold">Primer nombre:</p>
              <p>{user.first_name}</p>
            </div>
            <div>
              <p className="font-semibold">Apellidos:</p>
              <p>{user.last_name}</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>{user.email}</p>
            </div>
          </div>
        </div>

        {/* Cambiar nombre de usuario */}
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex-1 w-full">
            <h2 className="font-bold text-lg flex items-center gap-2 mb-4">
              <span>🖋️</span> Cambiar nombre de usuario
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nuevo nombre de usuario</label>
                <input
                  type="text"
                  placeholder={user.first_name}
                  value={newFirstName}
                  onChange={(e) => setNewFirstName(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <button
                onClick={handleUpdateUserName}
                className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
              >
                Actualizar nombre
              </button>
            </div>
          </div>

          <img src={robotPassword} alt="robot" className="h-40 w-auto" />
        </div>
      </div>
    </div>
  );
}
