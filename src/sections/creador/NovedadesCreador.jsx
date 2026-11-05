
import { useState } from 'react';
import { Play, RefreshCw, ArrowUpRight } from 'lucide-react';
import { obtenerUltimosPorCategoria } from '../../services/contenidoService.js';
import ReproductorYoutube from './components/ReproductorYoutube.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import './css/NovedadesCreador.css';

export default function NovedadesCreador({
  contenidos = [],
  cargando = false,
  error = null,
  recargar,
}) {
  const [videoActivo, setVideoActivo] = useState(null);

  const novedades = obtenerUltimosPorCategoria(contenidos);

  return (
    <section className="novedades-creador-section" id="novedades">
      <div className="section-heading">
        <div>
          <Reveal as="span" direction="left">
            <span className="eyebrow">LO MÁS RECIENTE</span>
          </Reveal>

          <Reveal as="h2" direction="left" delay={100}>
            NOVEDADES <span>CREADOR.</span>
          </Reveal>
        </div>

        <Reveal as="p" direction="right" delay={150}>
          Historias, conversaciones y nuevas experiencias
          que forman parte del universo PALAYENTI.
        </Reveal>
      </div>

      {cargando ? (
        <div className="novedades-estado">
          <RefreshCw className="novedades-spinner" size={24} />
          <p>CARGANDO CONTENIDOS...</p>
        </div>
      ) : error ? (
        <div className="novedades-estado novedades-error">
          <p>{error}</p>
          <button type="button" onClick={recargar}>
            INTENTAR NUEVAMENTE
          </button>
        </div>
      ) : novedades.length === 0 ? (
        <div className="novedades-estado">
          <p>PRÓXIMAMENTE NUEVOS CONTENIDOS.</p>
        </div>
      ) : (

        <div className="novedades-lista">
          {novedades.map((contenido, index) => (
            <Reveal
              key={contenido.id}
              direction="up"
              delay={index * 120}
              className="novedad-reveal"
            >
              <article className="novedad-card novedad-card-destacada" key={contenido.id}>
                <div className="novedad-media">
                  {videoActivo === contenido.id ? (
                    <ReproductorYoutube
                      videoId={contenido.youtubeId}
                      titulo={contenido.titulo}
                      onCerrar={() => setVideoActivo(null)}
                    />
                  ) : (
                    <>
                      {contenido.miniatura ? (
                        <img
                          src={contenido.miniatura}
                          alt={contenido.titulo}
                          loading="lazy"
                        />
                      ) : (
                        <div className="novedad-placeholder">
                          <span>PALAYENTI</span>
                          <strong>{contenido.categoria}</strong>
                        </div>
                      )}

                      {contenido.youtubeId && (
                        <button
                          type="button"
                          className="novedad-play"
                          onClick={() => setVideoActivo(contenido.id)}
                          aria-label={`Reproducir ${contenido.titulo}`}
                        >
                          <Play size={25} fill="currentColor" />
                        </button>
                      )}
                    </>
                  )}
                </div>

                <div className="novedad-info">
                  <div className="novedad-meta">
                    <span>{contenido.categoria}</span>
                    <time>
                      {contenido.fecha
                        ? new Date(contenido.fecha).toLocaleDateString('es-PE', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })
                        : ''}
                    </time>
                  </div>

                  <span className="novedad-etiqueta">
                    ÚLTIMA PUBLICACIÓN
                  </span>

                  <h3>{contenido.titulo}</h3>

                  <p>
                    {contenido.descripcion ||
                      'Descubre este nuevo contenido de PALAYENTI.'}
                  </p>

                  {contenido.enlace && (
                    <a
                      href={contenido.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="novedad-enlace"
                    >
                      DESCUBRIR MÁS <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      )}
    </section>
  );
}
