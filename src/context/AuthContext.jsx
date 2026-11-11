
import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import {
  iniciarSesion,
  obtenerSesion,
  cerrarSesion
} from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Comprobar si existe una sesión al cargar la aplicación.
  useEffect(() => {
    async function comprobarSesion() {
      try {
        const data = await obtenerSesion();
        setAdmin(data.admin);
      } catch {
        setAdmin(null);
      } finally {
        setCargando(false);
      }
    }

    comprobarSesion();
  }, []);

  // Iniciar sesión.
  async function login(username, password) {
    await iniciarSesion(username, password);

    const data = await obtenerSesion();
    setAdmin(data.admin);

    return data.admin;
  }

  // Cerrar sesión.
  async function logout() {
    await cerrarSesion();
    setAdmin(null);
  }

  return (
    <AuthContext.Provider
      value={{
        admin,
        autenticado: Boolean(admin),
        cargando,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook para utilizar la autenticación desde otros componentes.
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth debe utilizarse dentro de un AuthProvider.'
    );
  }

  return context;
}
