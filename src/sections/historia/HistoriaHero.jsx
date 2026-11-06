
import { ArrowDown, Sparkles } from 'lucide-react';
import './css/HistoriaHero.css';
import Reveal from '../../components/reveal/Reveal';

export default function HistoriaHero() {
  return (
    <section className="history-hero" id="historia-inicio">
      <div className="history-hero-content">
        <Reveal direction="left">
          <span className="history-eyebrow">
            <Sparkles size={14} />
            DETRÁS DE PALAYENTI
          </span>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <h1>
            Toda historia
            <br />
            tiene una <span>voz.</span>
          </h1>
        </Reveal>

        <Reveal direction="left" delay={200}>
          <p className="history-hero-description">
            Un camino de música, experiencias y aprendizajes.
            Esta es la historia detrás del nombre, las ideas
            y las distintas formas de expresarme.
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <a className="history-scroll-link" href="#trayectoria">
            CONOCE MI CAMINO
            <ArrowDown size={15} />
          </a>
        </Reveal>
      </div>

      <Reveal direction="right" delay={150}>
        <div
          className="history-hero-visual"
          aria-label="Espacio reservado para una fotografía de PALAYENTI"
        >
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

          <span className="history-vertical-label">
            MÚSICA · HISTORIAS · EXPERIENCIAS
          </span>
        </div>
      </Reveal>

      <div className="history-hero-bottom">
        <span>01 — MI HISTORIA</span>
        <span>UNA VOZ. MUCHAS FORMAS DE EXPRESARSE.</span>
      </div>
    </section>
  );
}
