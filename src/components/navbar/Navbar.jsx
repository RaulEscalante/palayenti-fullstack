
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Palayenti, inicio">
        <img src="/PALAYENTI_logo.png" alt="PALAYENTI" />
      </Link>

      <button className="mobile-menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}

        <a className="nav-contact" href="#contacto" onClick={() => setMenuOpen(false)}>
          Hablemos <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
