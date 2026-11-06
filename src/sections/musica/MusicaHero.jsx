
import { obtenerEnlaceWhatsApp } from '../../config/contacto.js';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/MusicaHero.css';

export default function MusicaHero() {
  const enlaceWhatsApp = obtenerEnlaceWhatsApp(
    'Hola, quisiera información sobre las contrataciones de PALAYENTI.'
  );

  // Cambia esta ruta cuando quieras utilizar otra fotografía.
  const imagenHero = '/images/musica/musica-hero.jpg';

  return (
    <section className="musica-hero">
      <div className="musica-hero-glow" />

      <div className="musica-hero-container">
        <div className="musica-hero-content">
          <Reveal direction="left">
            <span className="eyebrow">
              PALAYENTI · UNIVERSO MUSICAL
            </span>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <h1>
              MÚSICA
              <br />
              <span>PALAYENTI.</span>
            </h1>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <p>
              Canciones, historias y emociones que cobran vida
              a través de la música.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="musica-hero-actions">
              <a href="#lanzamientos" className="button button-primary">
                DESCUBRIR MÚSICA
              </a>

              {enlaceWhatsApp && (
                <a href={enlaceWhatsApp} className="button button-secondary"
                  target="_blank" rel="noopener noreferrer" >
                  CONTRATA A PALAYENTI
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={150}>
          <div className="musica-hero-visual">
            <div className="musica-hero-image">
              <img
                src={imagenHero}
                alt="PALAYENTI - Proyecto musical"
              />
            </div>

            <span className="musica-hero-image-label">
              PALAYENTI · MÚSICA
            </span>

            <div className="musica-hero-decoration">
              <span>01</span>
              <span>UNIVERSO SONORO</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="musica-hero-index">
        <span>01</span>
        <span>PALAYENTI MÚSICA</span>
      </div>
    </section>
  );
}
