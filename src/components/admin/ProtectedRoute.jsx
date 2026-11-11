
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute() {
  const { autenticado, cargando } = useAuth();

  // Esperar a que se compruebe la sesión.
  if (cargando) {
    return <p>Comprobando sesión...</p>;
  }

  // Si no está autenticado, regresar al login.
  if (!autenticado) {
    return <Navigate to="/admin/login" replace />;
  }

  // Si está autenticado, permitir el acceso.
  return <Outlet />;
}
