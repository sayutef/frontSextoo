const API_BASE_URL = "https://pybot-api.namixcode.cc/users/login";
const API_USER_DATA_URL = "https://pybot-api.namixcode.cc/users/"; // ← ruta correcta según tu backend

interface SignInData {
  email: string;
  password: string;
}

interface SignInSuccessResponse {
  mensaje: string;
  access_token: string;
  status: boolean;
}

interface UserDataResponse {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
}

// Función para obtener datos de usuario con el token
async function fetchUserData(token: string): Promise<UserDataResponse> {
  const res = await fetch(API_USER_DATA_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!res.ok) throw new Error("No se pudo obtener datos del usuario");
  return await res.json();
}

// Función principal para login
export function serviceLogin(
  credentials: SignInData,
  onSuccess: (data: SignInSuccessResponse) => void,
  onError: (error: string) => void
): void {
  fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(async (response) => {
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error desconocido al iniciar sesión");
      }

      // Guardar token
      localStorage.setItem("token", data.access_token);

      // Obtener user_id usando el token
      try {
        const userData = await fetchUserData(data.access_token);
        localStorage.setItem("user_id", userData.user_id.toString());
        console.log("User ID guardado en localStorage:", userData.user_id);
      } catch (error) {
        console.warn("No se pudo obtener user_id tras login:", error);
      }

      onSuccess(data);
    })
    .catch((error: Error) => {
      console.error("Error al iniciar sesión:", error.message);
      onError(error.message);
    });
}
