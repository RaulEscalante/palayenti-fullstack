
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Mi historia', href: '#historia' },
  { label: 'Música', href: '#musica' },
  { label: 'Blog y videos', href: '#creador' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Palayenti, inicio">
        PALA<span>YENTI</span><i>.</i>
      </a>

      <button
        className="mobile-menu-toggle"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          className="nav-contact"
          href="#contacto"
          onClick={() => setMenuOpen(false)}
        >
          Hablemos <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
