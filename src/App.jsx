
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Musica from './pages/Musica.jsx';

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
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/historia" element={<VistaPendiente titulo="Mi historia" />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/creador" element={<VistaPendiente titulo="PALAYENTI Creador" />} />
          <Route path="/galeria" element={<VistaPendiente titulo="Galería" />} />
          <Route path="/contacto" element={<VistaPendiente titulo="Contacto" />} />
          <Route path="*" element={<VistaPendiente titulo="Página no encontrada" />} />
          
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
