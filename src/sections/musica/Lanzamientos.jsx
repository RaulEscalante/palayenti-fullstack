
import { ArrowUpRight, Play } from 'lucide-react';
import { lanzamientos } from './js/lanzamientosData.js';
import './css/Lanzamientos.css';

export default function Lanzamientos() {
  return (
    <section className="lanzamientos-section" id="lanzamientos">
      <div className="section-heading">
        <div>
          <span className="eyebrow">ESCUCHA Y DESCUBRE</span>
          <h2>NUESTRA <span>MÚSICA.</span></h2>
        </div>

        <p> Canciones que cuentan historias y conectan emociones.
          Descubre el universo sonoro de PALAYENTI. </p>
      </div>

      <div className="lanzamientos-grid">
        {lanzamientos.map((cancion) => (
          <article className="lanzamiento-card" key={cancion.id}>
            <div className="lanzamiento-cover">
              {cancion.portada ? (
                <img src={cancion.portada} alt={`Portada de ${cancion.titulo}`} />
              ) : (
                <div className="lanzamiento-placeholder">
                  <span>PALAYENTI</span>
                  <strong>{cancion.titulo}</strong>
                  <small>{cancion.anio}</small>
                </div>
              )}

              {cancion.youtube && (
                <a
                  className="lanzamiento-play"
                  href={cancion.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver ${cancion.titulo} en YouTube`}
                >
                  <Play size={20} fill="currentColor" />
                </a>
              )}
            </div>

            <div className="lanzamiento-info">
              <span className="lanzamiento-tipo">{cancion.tipo}</span>
              <h3>{cancion.titulo}</h3>
              <p>{cancion.descripcion}</p>

              <div className="lanzamiento-links">
                {cancion.spotify && (
                  <a href={cancion.spotify} target="_blank" rel="noreferrer">
                    Spotify <ArrowUpRight size={15} />
                  </a>
                )}

                {cancion.youtube && (
                  <a href={cancion.youtube} target="_blank" rel="noreferrer">
                    YouTube <ArrowUpRight size={15} />
                  </a>
                )}

                {!cancion.spotify && !cancion.youtube && (
                  <span className="lanzamiento-pendiente">
                    Enlaces próximamente
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
