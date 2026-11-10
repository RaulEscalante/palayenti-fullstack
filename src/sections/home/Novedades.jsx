
import { ArrowUpRight, Headphones, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReproductorYoutube from '../../components/youtube/ReproductorYoutube.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import useContenidos from '../../hooks/useContenidos.js';
import './css/Novedades.css';

export default function Novedades() {
  const { contenidos, cargando, error, } = useContenidos();
  // Última entrevista para la tarjeta Creador
  const ultimaEntrevista = contenidos.find(
    (contenido) => contenido.categoria === 'ENTREVISTAS'
  );

  // Último videoclip para la tarjeta Música
  const ultimoVideoclip = contenidos.find(
    (contenido) => contenido.categoria === 'MUSICA'
  );
  const [videoMusicaActivo, setVideoMusicaActivo] = useState(false);
  const [videoCreadorActivo, setVideoCreadorActivo] = useState(false);


  return (
    <section className="section news-section">
      <SectionHeading eyebrow="SIEMPRE HAY ALGO NUEVO" title="LO ÚLTIMO" highlight="DEL UNIVERSO." />

      <div className="news-grid">
        <Reveal delay={100}>
          <article className="news-feature" id="musica">
            <div className="news-artwork">
              {ultimoVideoclip && videoMusicaActivo ? (
                <div className="news-video-player">
                  <ReproductorYoutube
                    videoId={ultimoVideoclip.youtubeId}
                    titulo={ultimoVideoclip.titulo}
                    onCerrar={() => setVideoMusicaActivo(false)}
                  />
                </div>
              ) : ultimoVideoclip ? (
                <button
                  type="button"
                  className="news-video-preview"
                  onClick={() => setVideoMusicaActivo(true)}
                  aria-label={`Reproducir ${ultimoVideoclip.titulo}`}
                >
                  <img
                    src={ultimoVideoclip.miniatura}
                    alt=""
                    className="news-video-thumbnail"
                  />

                  <span className="news-video-play">
                    <Play size={36} fill="currentColor" />
                  </span>
                </button>
              ) : (
                <div className="video-frame">
                  <div className="video-frame-inner">
                    <Headphones size={48} strokeWidth={1} />
                  </div>
                  <span>
                    {cargando ? 'CARGANDO MÚSICA' : 'PRÓXIMAMENTE'}
                  </span>
                </div>
              )}

              <span className="artwork-label">MÚSICA / 001</span>

              <span className="artwork-caption">
                {cargando
                  ? 'CARGANDO CONTENIDO'
                  : error
                    ? 'CONTENIDO NO DISPONIBLE'
                    : ultimoVideoclip
                      ? videoMusicaActivo
                        ? 'REPRODUCIENDO'
                        : 'ÚLTIMO VIDEOCLIP'
                      : 'PRÓXIMAMENTE'}
              </span>
            </div>

            <div className="news-info">
              <span className="content-category">
                {ultimoVideoclip?.categoria || 'MÚSICA'}
              </span>

              <h3>
                {ultimoVideoclip
                  ? ultimoVideoclip.titulo
                  : 'Una nueva historia en cada canción.'}
              </h3>

              <p>
                {ultimoVideoclip
                  ? 'Descubre el último videoclip del universo musical de Palayenti.'
                  : 'Descubre el universo musical de Palayenti y sus próximos lanzamientos.'}
              </p>

              <Link className="text-link" to="/musica">
                DESCUBRIR MÚSICA <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        </Reveal>


        <Reveal delay={220}>
          <article className="news-feature creator-news" id="creador">

            <div className="news-artwork creator-artwork">
              {ultimaEntrevista && videoCreadorActivo ? (
                <div className="news-video-player">
                  <ReproductorYoutube videoId={ultimaEntrevista.youtubeId} titulo={ultimaEntrevista.titulo}
                    onCerrar={() => setVideoCreadorActivo(false)} />
                </div>
              ) : ultimaEntrevista ? (
                <button
                  type="button"
                  className="news-video-preview"
                  onClick={() => setVideoCreadorActivo(true)}
                  aria-label={`Reproducir ${ultimaEntrevista.titulo}`}
                >
                  <img
                    src={ultimaEntrevista.miniatura}
                    alt=""
                    className="news-video-thumbnail"
                  />

                  <span className="news-video-play">
                    <Play size={36} fill="currentColor" />
                  </span>
                </button>
              ) : (
                <div className="video-frame">
                  <div className="video-frame-inner">
                    <Play size={36} fill="currentColor" />
                  </div>
                  <span>HISTORIAS POR CONTAR</span>
                </div>
              )}

              <span className="artwork-label">CREADOR / 001</span>

              <span className="artwork-caption">
                {cargando
                  ? 'CARGANDO CONTENIDO'
                  : error
                    ? 'CONTENIDO NO DISPONIBLE'
                    : ultimaEntrevista
                      ? videoCreadorActivo
                        ? 'REPRODUCIENDO'
                        : 'ÚLTIMA ENTREVISTA'
                      : 'PRÓXIMAMENTE'}
              </span>
            </div>


            <div className="news-info">
              <span className="content-category">
                {ultimaEntrevista?.categoria || 'DEL LADO PERSONAL'}
              </span>

              <h3>
                {ultimaEntrevista
                  ? ultimaEntrevista.titulo
                  : 'Más allá de la música.'}
              </h3>

              <p>
                {ultimaEntrevista
                  ? 'Una nueva conversación, experiencias e historias que merecen ser compartidas.'
                  : 'Videos, vivencias y pensamientos. Un espacio para descubrir lo que hay detrás de cada historia.'}
              </p>

              {ultimaEntrevista ? (
                <a className="text-link" href={ultimaEntrevista.enlace} target="_blank" rel="noreferrer">
                  VER ENTREVISTA <ArrowUpRight size={17} />
                </a>
              ) : (
                <Link className="text-link" to="/creador">
                  VER CONTENIDOS <ArrowUpRight size={17} />
                </Link>
              )}
            </div>
          </article>
        </Reveal>

      </div>
    </section>
  );
}
