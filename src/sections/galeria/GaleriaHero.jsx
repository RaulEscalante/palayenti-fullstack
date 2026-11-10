
import {
  Camera,
  Music2,
  Sparkles,
  ArrowDown,
} from 'lucide-react';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/GaleriaHero.css';

export default function GaleriaHero() {
  return (
    <section className="gallery-hero">
      <img
        className="gallery-hero-background"
        src="/eventos/portada-galeria.webp"
        alt="PALAYENTI compartiendo una experiencia musical en vivo"
        fetchPriority="high"
      />

      <div className="gallery-hero-overlay" />

      <div className="gallery-hero-content">
        <Reveal direction="left">
          <span className="gallery-hero-eyebrow">
            <Camera size={15} />
            PALAYENTI · ARCHIVO VISUAL
          </span>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <h1>
            Cada momento
            <br />
            cuenta una
            <br />
            <span>historia.</span>
          </h1>
        </Reveal>

        <Reveal direction="left" delay={200}>
          <p>
            Y cada historia merece ser recordada.
            Revive la música, las personas y las experiencias
            que dan vida al universo PALAYENTI.
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <a href="#galeria-grid" className="gallery-hero-link">
            EXPLORAR GALERÍA
            <ArrowDown size={16} />
          </a>
        </Reveal>
      </div>

      <div className="gallery-hero-floating-icons" aria-hidden="true">
        <div className="gallery-hero-icon gallery-hero-icon-camera">
          <Camera size={21} />
        </div>

        <div className="gallery-hero-icon gallery-hero-icon-music">
          <Music2 size={23} />
        </div>

        <div className="gallery-hero-icon gallery-hero-icon-sparkles">
          <Sparkles size={19} />
        </div>
      </div>

      <div className="gallery-hero-bottom">
        <span>01 — GALERÍA</span>
        <span>UNA VOZ. MUCHAS FORMAS DE EXPRESARSE.</span>
      </div>
    </section>
  );
}
