
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Music2, Play } from 'lucide-react';
import './css/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="hero-content hero-animate-content">
        <span className="eyebrow hero-animate-item">
          <span className="status-dot" />
          MÚSICA · HISTORIAS · EXPERIENCIAS
        </span>

        <h1 className="hero-animate-item">
          UNA VOZ.<br />
          <span className="hero-outline">MUCHAS</span>
          <br />
          FORMAS DE<br />
          <span className="hero-blue">EXPRESARSE.</span>
        </h1>

        <p className="hero-description hero-animate-item">
          Soy Palayenti. Este es mi universo: la música que comparto,
          las historias que vivo y todo lo que tengo por contar.
        </p>

        <div className="hero-actions hero-animate-item">
          <Link className="button button-primary" to="/musica">
            <Music2 size={18} />
            Explorar música
            <ArrowUpRight size={17} />
          </Link>

          <Link className="button button-outline" to="/creador">
            <Play size={17} />
            Ver mis contenidos
          </Link>
        </div>

        <a className="hero-scroll hero-animate-item" href="#universos">
          DESCUBRE MI UNIVERSO <ArrowDown size={15} />
        </a>
      </div>


      <div className="hero-visual hero-animate-visual" aria-label="Imagen de PALAYENTI">
        <div className="hero-visual-decoration" />

        <div className="hero-photo-tag">
          <span className="status-dot" />
          UNIVERSO CREATIVO
        </div>

        <div className="hero-placeholder">
          <img
            src="/portada-palayenti.jpg"
            alt="PALAYENTI"
            className="hero-image"
          />
        </div>

        <div className="hero-stamp">
          <Music2 size={17} />
          <div>
            <span>PALAYENTI</span>
            <small>MÚSICA · CREADOR</small>
          </div>
          <ArrowUpRight size={17} />
        </div>

        <div className="hero-side-label">
          UNIVERSO PALAYENTI / 001
        </div>
      </div>


      <div className="hero-bottom-line hero-animate-bottom">
        <span>UNA SOLA IDENTIDAD</span>
        <span>DOS UNIVERSOS</span>
        <span className="hero-bottom-index">01 / 06</span>
      </div>
    </section>
  );
}
