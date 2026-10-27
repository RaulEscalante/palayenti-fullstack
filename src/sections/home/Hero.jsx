
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Music2, Play } from 'lucide-react';
import './css/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot" />
          MÚSICA · HISTORIAS · EXPERIENCIAS
        </span>

        <h1>UNA VOZ.<br /> <span className="hero-outline">MUCHAS</span>
          <br /> FORMAS DE<br /> <span className="hero-blue">EXPRESARSE.</span>
        </h1>

        <p className="hero-description">
          Soy Palayenti. Este es mi universo: la música que comparto,
          las historias que vivo y todo lo que tengo por contar.
        </p>

        <div className="hero-actions">
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

        <a className="hero-scroll" href="#universos">
          DESCUBRE MI UNIVERSO <ArrowDown size={15} />
        </a>
      </div>

      <div className="hero-visual" aria-label="Espacio visual provisional">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-placeholder">
          <div className="placeholder-cross">+</div>
          <Music2 size={62} strokeWidth={1} />
          <span>PALAYENTI</span>
          <img src="portada-palayenti.jpg" alt="PALAYENTI" />
        </div>

        <div className="hero-stamp">
          <span>ARTISTA</span>
          <span className="stamp-line" />
          <span>CREADOR</span>
        </div>

        <div className="hero-side-label">
          UNIVERSO PALAYENTI / 001
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>UNA SOLA IDENTIDAD</span>
        <span>DOS UNIVERSOS</span>
        <span className="hero-bottom-index">01 / 06</span>
      </div>
    </section>
  );
}
