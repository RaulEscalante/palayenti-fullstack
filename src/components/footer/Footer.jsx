
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = [
  { label: 'Mi historia', to: '/historia' },
  { label: 'Palayenti Música', to: '/musica' },
  { label: 'Palayenti Creador', to: '/creador' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' },
];

export default function Footer() {
  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Identidad */}
        <div className="footer-identity">
          <Link
            className="brand footer-brand"
            to="/"
            aria-label="Palayenti, inicio"
            onClick={volverArriba}
          >
            PALA<span>YENTI</span><i>.</i>
          </Link>

          <p>Música, historias y experiencias.</p>
        </div>

        {/* Navegación */}
        <div className="footer-navigation">
          <h2>EXPLORA</h2>

          <nav aria-label="Navegación del pie de página">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={volverArriba}
              >
                {link.label}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Contacto */}
        <div className="footer-connect">
          <h2>¿CONECTAMOS?</h2>

          <p>
            Para música, colaboraciones, entrevistas o nuevas propuestas.
          </p>

          <Link
            className="footer-contact-link"
            to="/contacto"
            onClick={volverArriba}
          >
            HABLEMOS <ArrowUpRight size={15} />
          </Link>

          <button
            className="back-to-top"
            type="button"
            onClick={volverArriba}
            aria-label="Volver al inicio de la página"
          >
            VOLVER ARRIBA <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Cierre */}
      <div className="footer-bottom">
        <small>
          © {new Date().getFullYear()} PALAYENTI · TODOS LOS DERECHOS RESERVADOS
        </small>

        <Link to="/privacidad" onClick={volverArriba}>
          POLÍTICA DE PRIVACIDAD
        </Link>
      </div>
    </footer>
  );
}
