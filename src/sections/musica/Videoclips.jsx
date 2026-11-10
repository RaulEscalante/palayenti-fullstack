import { useMemo, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import ReproductorYoutube from '../../components/youtube/ReproductorYoutube.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import useContenidos from '../../hooks/useContenidos.js';
import './css/Videoclips.css';

function obtenerYoutubeId(url) {
  if (!url) return null;

  try {
    const direccion = new URL(url);

    if (direccion.hostname.includes('youtu.be')) {
      return direccion.pathname.slice(1);
    }

    if (direccion.hostname.includes('youtube.com')) {
      if (direccion.pathname === '/watch') {
        return direccion.searchParams.get('v');
      }

      const coincidencia = direccion.pathname.match(
        /^\/(?:embed|shorts)\/([^/?]+)/
      );

      return coincidencia ? coincidencia[1] : null;
    }

    return null;
  } catch {
    return null;
  }
}

export default function Videoclips() {
  const { contenidos, cargando, error, recargar } = useContenidos();
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [videoActivo, setVideoActivo] = useState(null);

  // Obtener únicamente los videos musicales y ordenarlos
  // desde el más reciente hasta el más antiguo.
  const videoclips = useMemo(() => {
    return contenidos
      .filter((video) => video.categoria === 'MUSICA')
      .sort(
        (a, b) => new Date(b.fecha) - new Date(a.fecha)
      );
  }, [contenidos]);

  // Mostrar dos o todos los videoclips.
  const videoclipsVisibles = mostrarTodos
    ? videoclips
    : videoclips.slice(0, 2);

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

      {cargando ? (
        <p className="videoclips-message">
          Cargando videoclips...
        </p>
      ) : error ? (
        <div className="videoclips-message">
          <p>No se pudieron cargar los videoclips.</p>
          <button onClick={recargar}>
            Intentar nuevamente
          </button>
        </div>
      ) : videoclips.length === 0 ? (
        <p className="videoclips-message">
          Todavía no hay videoclips disponibles.
        </p>
      ) : (
        <>
          <div className="videoclips-grid">
            {videoclipsVisibles.map((video, index) => (
              <Reveal
                key={video.id}
                direction="up"
                delay={(index % 2) * 120}
                className="videoclip-reveal"
              >
                <article className="videoclip-card">

                  <div className="videoclip-player">
                    {video.enlace ? (
                      videoActivo === video.id ? (
                        <ReproductorYoutube
                          videoId={obtenerYoutubeId(video.enlace)}
                          titulo={video.titulo}
                          onCerrar={() => setVideoActivo(null)}
                        />
                      ) : (
                        <button
                          type="button"
                          className="videoclip-preview"
                          onClick={() => setVideoActivo(video.id)}
                          aria-label={`Reproducir ${video.titulo}`}
                        >
                          <img
                            src={video.miniatura}
                            alt=""
                            loading="lazy"
                          />

                          <span className="videoclip-play">
                            <Play size={36} fill="currentColor" />
                          </span>
                        </button>
                      )
                    ) : (
                      <div className="videoclip-placeholder">
                        <span>PALAYENTI</span>
                        <strong>{video.titulo}</strong>
                      </div>
                    )}
                  </div>


                  <div className="videoclip-info">
                    <div>
                      <span className="videoclip-year">
                        {video.fecha
                          ? new Date(video.fecha).getFullYear()
                          : ''}
                      </span>

                      <h3>{video.titulo}</h3>
                      <p>{video.descripcion}</p>
                    </div>

                    {video.enlace && (
                      <a
                        className="videoclip-external"
                        href={video.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir ${video.titulo} en YouTube`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {videoclips.length > 2 && (
            <div className="videoclips-actions">
              <button
                type="button"
                onClick={() => setMostrarTodos(!mostrarTodos)}
              >
                {mostrarTodos ? 'Mostrar menos' : 'Mostrar todos'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
