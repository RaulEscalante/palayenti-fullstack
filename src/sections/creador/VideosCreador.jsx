
import { ArrowUpRight, Play } from 'lucide-react';
import { videosCreador } from './js/videosCreadorData.js';
import './css/VideosCreador.css';

function TarjetaVideo({ video, destacado = false }) {
  return (
    <article
      className={`video-creador-card ${
        destacado ? 'video-creador-card-destacado' : ''
      }`}
    >
      <a
        className="video-creador-miniatura"
        href={video.youtube || undefined}
        target={video.youtube ? '_blank' : undefined}
        rel={video.youtube ? 'noreferrer' : undefined}
        onClick={(event) => {
          if (!video.youtube) event.preventDefault();
        }}
        aria-label={
          video.youtube
            ? `Ver video: ${video.titulo}`
            : `Video próximamente: ${video.titulo}`
        }
      >
        {video.miniatura ? (
          <img
            src={video.miniatura}
            alt={video.titulo}
            loading="lazy"
          />
        ) : (
          <div className="video-creador-placeholder">
            <span>PALAYENTI</span>
            <strong>{video.categoria}</strong>
          </div>
        )}

        <span className="video-creador-play">
          <Play size={22} fill="currentColor" />
        </span>

        {destacado && (
          <span className="video-creador-destacado-label">
            VIDEO DESTACADO
          </span>
        )}
      </a>

      <div className="video-creador-info">
        <span className="video-creador-categoria">
          {video.categoria}
        </span>

        <h3>{video.titulo}</h3>
        <p>{video.descripcion}</p>

        {video.youtube ? (
          <a
            className="video-creador-link"
            href={video.youtube}
            target="_blank"
            rel="noreferrer"
          >
            VER VIDEO <ArrowUpRight size={17} />
          </a>
        ) : (
          <span className="video-creador-pendiente">
            PRÓXIMAMENTE
          </span>
        )}
      </div>
    </article>
  );
}

export default function VideosCreador() {
  const videoDestacado = videosCreador.find(
    (video) => video.destacado
  );

  const otrosVideos = videosCreador.filter(
    (video) => video.id !== videoDestacado?.id
  );

  return (
    <section className="videos-creador-section" id="videos-creador">
      <div className="section-heading">
        <div>
          <span className="eyebrow">MIRADAS, VOCES Y MOMENTOS</span>
          <h2>
            HISTORIAS QUE <span>SE PUEDEN VER.</span>
          </h2>
        </div>

        <p>
          Videos, conversaciones y experiencias que dan vida a las
          ideas y muestran el lado más personal de PALAYENTI.
        </p>
      </div>

      {videoDestacado && (
        <div className="video-creador-featured">
          <TarjetaVideo video={videoDestacado} destacado />
        </div>
      )}

      {otrosVideos.length > 0 && (
        <div className="videos-creador-grid">
          {otrosVideos.map((video) => (
            <TarjetaVideo key={video.id} video={video} />
          ))}
        </div>
      )}
    </section>
  );
}
