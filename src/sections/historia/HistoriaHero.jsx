
import { ArrowDown, Sparkles } from 'lucide-react';
import './css/HistoriaHero.css';

export default function HistoriaHero() {
  return (
    <section className="history-hero" id="historia-inicio">
      <div className="history-hero-content">
        <span className="history-eyebrow">
          <Sparkles size={14} />
          DETRÁS DE PALAYENTI
        </span>

        <h1>
          Toda historia
          <br />
          tiene una <span>voz.</span>
        </h1>

        <p className="history-hero-description">
          Un camino de música, experiencias y aprendizajes.
          Esta es la historia detrás del nombre, las ideas
          y las distintas formas de expresarme.
        </p>

        <a className="history-scroll-link" href="#trayectoria">
          CONOCE MI CAMINO
          <ArrowDown size={15} />
        </a>
      </div>

      <div className="history-hero-visual" aria-label="Espacio reservado para una fotografía de PALAYENTI">
        <div className="history-visual-orbit history-visual-orbit-one" />
        <div className="history-visual-orbit history-visual-orbit-two" />

        <div className="history-photo-placeholder">
          <span>PALAYENTI</span>
          <small>MI HISTORIA · MI CAMINO</small>
        </div>

        <div className="history-photo-caption">
          <span className="history-caption-dot" />
          UNA IDENTIDAD, MUCHAS EXPERIENCIAS
        </div>

        <span className="history-vertical-label">MÚSICA · HISTORIAS · EXPERIENCIAS</span>
      </div>

      <div className="history-hero-bottom">
        <span>01 — MI HISTORIA</span>
        <span>UNA VOZ. MUCHAS FORMAS DE EXPRESARSE.</span>
      </div>
    </section>
  );
}
