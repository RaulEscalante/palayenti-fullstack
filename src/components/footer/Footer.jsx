
import { useEffect, useRef, useState } from 'react';
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
  const footerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFloating = isScrolled && !isFooterVisible;

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="footer-main">
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

        <div className="footer-navigation">
          <h2>EXPLORA</h2>
          <nav aria-label="Navegación del pie de página">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={volverArriba}>
                {link.label}<ArrowUpRight size={13} />
              </Link>
            ))}
          </nav>
        </div>

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
            className={`back-to-top ${isFloating ? 'back-to-top-floating' : ''}`}
            type="button"
            onClick={volverArriba}
            aria-label="Volver al inicio"
          >
            <span>VOLVER ARRIBA</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

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