
import { ArrowUpRight, Music2, Video } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import './Universos.css';

export default function Universos() {
  return (
    <section className="section universes-section" id="universos">
      <SectionHeading eyebrow="DOS FACETAS · UNA MISMA ESENCIA" title="¿QUÉ QUIERES" highlight="DESCUBRIR?"
        description="Dos caminos para entrar en mi mundo. Elige el tuyo y quédate por lo que encuentres." />

      <div className="universe-grid">
        <a href="#musica" className="universe-card music-card">
          <div className="universe-card-bg">
            <div className="music-equalizer">
              {[30, 55, 80, 45, 100, 65, 38, 72, 48, 88, 35].map(
                (height, index) => (
                  <span key={index} style={{ '--bar-height': `${height}%` }} />
                ),
              )}
            </div>

            <Music2 className="universe-watermark" strokeWidth={0.8} />
          </div>

          <div className="universe-card-content">
            <span className="card-kicker">
              01 / EL PROYECTO MUSICAL
            </span>

            <h3>PALAYENTI<br /> MÚSICA<span>.</span></h3>
            <p>Canciones, escenarios y momentos que merecen ser escuchados.</p>

            <span className="card-link">
              ENTRAR AL UNIVERSO <ArrowUpRight size={17} />
            </span>
          </div>

          <span className="universe-number">01</span>
        </a>

        <a href="#creador" className="universe-card creator-card">
          <div className="universe-card-bg">
            <div className="creator-shape creator-shape-one" />
            <div className="creator-shape creator-shape-two" />
            <Video className="universe-watermark" strokeWidth={0.8} />
          </div>

          <div className="universe-card-content">
            <span className="card-kicker">
              02 / EL LADO PERSONAL
            </span>
            <h3> PALAYENTI <br />CREADOR<span>.</span></h3>
            <p>Historias, experiencias e ideas que quiero compartir contigo.</p>
            <span className="card-link">
              EXPLORAR CONTENIDO <ArrowUpRight size={17} />
            </span>
          </div>

          <span className="universe-number">02</span>
        </a>
      </div>
    </section>
  );
}
