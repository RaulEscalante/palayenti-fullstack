
import { ArrowUpRight } from 'lucide-react';
import { videoclips } from './js/videoclipsData.js';
import YouTubePlayer from '../../components/youtube/YouTubePlayer.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/Videoclips.css';

export default function Videoclips() {
  return (
    <section className="videoclips-section" id="videoclips">
      <div className="section-heading">
        <div>
          <Reveal direction="left">
            <span className="eyebrow">MÚSICA EN IMÁGENES</span>
          </Reveal>

          <Reveal as="h2" direction="left" delay={100}>
            NUESTROS <span>VIDEOCLIPS.</span>
          </Reveal>
        </div>

        <Reveal direction="right" delay={150}>
          <p>
            Historias, sonidos e imágenes que llevan la música
            de PALAYENTI más allá del escenario.
          </p>
        </Reveal>
      </div>

      <div className="videoclips-grid">
        {videoclips.map((video, index) => (
          <Reveal key={video.id} direction="up"
            delay={(index % 2) * 120} className="videoclip-reveal">
            <article className="videoclip-card">
              <div className="videoclip-player">
                {video.youtube ? (
                  <YouTubePlayer url={video.youtube} title={video.titulo} />
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
                  <a className="videoclip-external" href={video.youtube} target="_blank"
                    rel="noopener noreferrer" aria-label={`Abrir ${video.titulo} en YouTube`}>
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
