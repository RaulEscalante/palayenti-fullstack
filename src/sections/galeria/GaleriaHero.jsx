
import { Camera, ArrowDown } from 'lucide-react';
import './css/GaleriaHero.css';

export default function GaleriaHero() {
  return (
    <section className="gallery-hero">
      <div className="gallery-hero-content">
        <span className="eyebrow">
          <Camera size={14} />
          EL UNIVERSO PALAYENTI
        </span>

        <h1>
          Momentos que
          <br />
          <span>merecen ser vistos.</span>
        </h1>

        <p>
          Un recorrido visual por la música, las experiencias,
          las personas y los instantes que forman parte de
          esta historia.
        </p>

        <a href="#galeria-grid" className="gallery-hero-link">
          EXPLORAR GALERÍA
          <ArrowDown size={15} />
        </a>
      </div>

      <div className="gallery-hero-visual" aria-label="Composición visual de PALAYENTI">
        <div className="gallery-hero-orbit gallery-hero-orbit-one" />
        <div className="gallery-hero-orbit gallery-hero-orbit-two" />

        <div className="gallery-hero-frame">
          <span className="gallery-hero-frame-index">PALAYENTI / VISUAL ARCHIVE</span>
          <div className="gallery-hero-frame-center">
            <span>P.</span>
            <small>MÚSICA · HISTORIAS · EXPERIENCIAS</small>
          </div>
          <span className="gallery-hero-frame-caption">UNA MIRADA A MI UNIVERSO</span>
        </div>

        <span className="gallery-hero-side-label">CAPTURANDO MOMENTOS</span>
      </div>

      <div className="gallery-hero-bottom">
        <span>01 — GALERÍA</span>
        <span>UNA VOZ. MUCHAS FORMAS DE EXPRESARSE.</span>
      </div>
    </section>
  );
}
