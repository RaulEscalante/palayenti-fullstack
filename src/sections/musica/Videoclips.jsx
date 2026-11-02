
import { ArrowUpRight } from 'lucide-react';
import { videoclips } from './js/videoclipsData.js';
import YouTubePlayer from '../../components/youtube/YouTubePlayer.jsx';
import './css/Videoclips.css';

export default function Videoclips() {
  return (
    <section className="videoclips-section" id="videoclips">
      <div className="section-heading">
        <div>
          <span className="eyebrow">MÚSICA EN IMÁGENES</span>
          <h2>
            NUESTROS <span>VIDEOCLIPS.</span>
          </h2>
        </div>

        <p>
          Historias, sonidos e imágenes que llevan la música
          de PALAYENTI más allá del escenario.
        </p>
      </div>

      <div className="videoclips-grid">
        {videoclips.map((video) => (
          <article className="videoclip-card" key={video.id}>
            <div className="videoclip-player">
              {video.youtube ? (
                <YouTubePlayer
                  url={video.youtube}
                  title={video.titulo}
                />
              ) : (
                <div className="videoclip-placeholder">
                  <span>PALAYENTI</span>
                  <strong>{video.titulo}</strong>
                  <small>{video.anio}</small>
                </div>
              )}
            </div>

            <div className="videoclip-info">
              <div>
                <span className="videoclip-year">{video.anio}</span>
                <h3>{video.titulo}</h3>
                <p>{video.descripcion}</p>
              </div>

              {video.youtube && (
                <a
                  className="videoclip-external"
                  href={video.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${video.titulo} en YouTube`}
                >
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
