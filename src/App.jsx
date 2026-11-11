
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';

import Home from './pages/Home.jsx';
import Historia from './pages/Historia.jsx';
import Musica from './pages/Musica.jsx';
import Creador from './pages/Creador.jsx';
import Galeria from './pages/Galeria.jsx';
import Contacto from './pages/Contacto.jsx';

import Login from './pages/admin/Login.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';

import './App.css';

function VistaPendiente({ titulo }) {
  return (
    <section className="section">
      <span className="eyebrow">PALAYENTI</span>
      <h1>{titulo}</h1>
      <p>Estamos preparando esta sección.</p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Páginas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/creador" element={<Creador />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="*"
            element={<VistaPendiente titulo="Página no encontrada" />}
          />
        </Route>

        {/* Acceso administrativo */}
        <Route path="/admin/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
