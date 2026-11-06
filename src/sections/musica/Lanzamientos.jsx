
import { ArrowUpRight } from 'lucide-react';
import { lanzamientos } from './js/lanzamientosData.js';
import SpotifyPlayer from '../../components/spotify/SpotifyPlayer.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Lanzamientos.css';

export default function Lanzamientos() {
  return (
    <section className="lanzamientos-section" id="lanzamientos">
      <div className="section-heading">
        <div>
          <Reveal direction="left">
            <span className="eyebrow">ESCUCHA Y DESCUBRE</span>
          </Reveal>

          <Reveal as="h2" direction="left" delay={100}>
            NUESTRA <span>MÚSICA.</span>
          </Reveal>
        </div>

        <Reveal direction="right" delay={150}>
          <p>
            Canciones que cuentan historias y conectan emociones.
            Descubre el universo sonoro de PALAYENTI.
          </p>
        </Reveal>
      </div>

      <div className="lanzamientos-grid">
        {lanzamientos.map((cancion, index) => (
          <Reveal
            key={cancion.id}
            direction="up"
            delay={(index % 3) * 120}
            className="lanzamiento-reveal"
          >
            <article className="lanzamiento-card">
              <div className="lanzamiento-info">
                <div className="lanzamiento-meta">
                  <span className="lanzamiento-tipo">
                    {cancion.tipo}
                  </span>

                  <span className="lanzamiento-anio">
                    {cancion.anio}
                  </span>
                </div>

                <p className="lanzamiento-descripcion">
                  {cancion.descripcion}
                </p>

                {cancion.spotify ? (
                  <>
                    <div className="lanzamiento-player">
                      <SpotifyPlayer
                        url={cancion.spotify}
                        title={cancion.titulo}
                      />
                    </div>

                    <a
                      className="lanzamiento-spotify-link"
                      href={cancion.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir en Spotify
                      <ArrowUpRight size={15} />
                    </a>
                  </>
                ) : (
                  <span className="lanzamiento-pendiente">
                    Próximamente
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
