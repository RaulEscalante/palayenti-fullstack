
import { obtenerEnlaceWhatsApp } from '../../config/contacto.js';
import './css/MusicaHero.css';

export default function MusicaHero() {
  
  const enlaceWhatsApp = obtenerEnlaceWhatsApp(
    'Hola, quisiera información sobre las contrataciones de PALAYENTI.'
  );
  return (
    <section className="musica-hero">
      <div className="musica-hero-glow" />

      <div className="musica-hero-content">
        <span className="eyebrow">
          PALAYENTI · UNIVERSO MUSICAL
        </span>

        <h1>
          MUSICA -
          <br />
          <span>PALAYENTI.</span>
        </h1>

        <p>
          Canciones, historias y emociones que cobran vida
          a través de la música.
        </p>

        <div className="musica-hero-actions">
          <a href="#lanzamientos" className="button button-primary">
            DESCUBRIR MÚSICA
          </a>
        </div>
        {enlaceWhatsApp && (
          <a href={enlaceWhatsApp} className="button button-secondary"
            target="_blank" rel="noreferrer">
            CONTRATA A PALAYENTI
          </a>
        )}
      </div>

      <div className="musica-hero-index">
        <span>01</span>
        <span>PALAYENTI MÚSICA</span>
      </div>
    </section>
  );
}
