
import './Login.css';

export default function Login() {
  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <span className="admin-login__brand">PALAYENTI</span>

        <h1>Panel administrativo</h1>
        <p>Inicia sesión para administrar el contenido del sitio.</p>

        <form>
          <div className="admin-login__field">
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Ingresa tu usuario"
              autoComplete="username"
            />
          </div>

          <div className="admin-login__field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
            />
          </div>

          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}
