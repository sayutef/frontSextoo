export interface Prototype {
  prototype_id: string;
  prototype_name: string;
  model: string;
  user_id: string;
}

const BASE_URL = 'https://pybot-api.namixcode.cc/prototypes/';
const token = localStorage.getItem('token');

function getHeaders() {
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

// Obtener todos los prototipos
export async function getAllPrototypes(): Promise<Prototype[]> {
  const res = await fetch(BASE_URL, {
    headers: getHeaders()
  });
  if (!res.ok) throw new Error('Error al obtener prototipos');
  return await res.json();
}

// Obtener un prototipo por ID
export async function getPrototype(id: string): Promise<Prototype> {
  const res = await fetch(`${BASE_URL}${id}`, {
    headers: getHeaders()
  });
  if (!res.ok) throw new Error(`Prototipo con ID ${id} no encontrado`);
  return await res.json();
}

// Crear un nuevo prototipo
export async function createPrototype(data: Omit<Prototype, 'prototype_id'>): Promise<Prototype> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al crear prototipo');
  return await res.json();
}

// Actualizar un prototipo
export async function updatePrototype(data: Prototype): Promise<Prototype> {
  const res = await fetch(BASE_URL, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Error al actualizar prototipo');
  return await res.json();
}

// Eliminar un prototipo por ID
export async function deletePrototype(id: string): Promise<{ message: string }> {
  const res = await fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: getHeaders()
  });
  if (!res.ok) throw new Error('Error al eliminar prototipo');
  return await res.json();
}
