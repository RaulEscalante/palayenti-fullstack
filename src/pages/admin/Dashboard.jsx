
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const { admin, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__header">
        <span className="admin-dashboard__brand">PALAYENTI</span>

        <button onClick={handleLogout}>
          Cerrar sesión
        </button>
      </header>

      <main className="admin-dashboard__content">
        <span className="admin-dashboard__eyebrow">
          ADMINISTRACIÓN
        </span>

        <h1>Bienvenido, {admin?.displayName}</h1>

        <p>
          Desde aquí podrás administrar el contenido de Palayenti.
        </p>

        <div className="admin-dashboard__card">
          <h2>Panel administrativo</h2>
          <p>
            El acceso está protegido y la sesión se encuentra activa.
          </p>
        </div>
      </main>
    </div>
  );
}
