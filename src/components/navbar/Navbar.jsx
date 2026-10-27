
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Mi historia', href: '/historia' },
  { label: 'Música', href: '/musica' },
  { label: 'Blog y videos', href: '/creador' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Palayenti, inicio">
        <img src="/PALAYENTI_logo.png" alt="PALAYENTI" />
      </Link>

      <button
        className="mobile-menu-toggle"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav
        id="main-navigation"
        className={`main-nav ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}

        <Link
          className={`nav-contact ${location.pathname === '/contacto' ? 'is-current' : ''
            }`}
          to="/contacto"
          onClick={() => setMenuOpen(false)}
        >
          Hablemos <ArrowUpRight size={15} />
        </Link>
      </nav>
    </header>
  );
}
