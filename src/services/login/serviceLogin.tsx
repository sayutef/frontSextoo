// serviceLogin.ts

const API_BASE_URL = "https://pybot-api.namixcode.cc/users/login"; 

interface SignInData {
  email: string;
  password: string;
}

interface SignInSuccessResponse {
  mensaje: string;
  access_token: string;
  status: boolean;
}

interface SignInErrorResponse {
  error: string;
  status: boolean;
}

export function serviceLogin(
  credentials: SignInData,
  onSuccess: (data: SignInSuccessResponse) => void,
  onError: (error: string) => void
): void {
  fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then(async (response) => {
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error desconocido al iniciar sesión");
      }
      localStorage.setItem("token", data.access_token);

      onSuccess(data);
    })
    .catch((error: Error) => {
      console.error("Error al iniciar sesión:", error.message);
      onError(error.message);
    });
}
