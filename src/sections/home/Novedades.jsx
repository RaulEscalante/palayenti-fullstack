
import { ArrowUpRight, Headphones, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReproductorYoutube from '../creador/components/ReproductorYoutube.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import useContenidos from '../../hooks/useContenidos.js';
import './css/Novedades.css';

export default function Novedades() {
  const { contenidos, cargando, error, recargar, } = useContenidos();

  const ultimaEntrevista = contenidos.find((contenido) => contenido.fuente === 'YOUTUBE');
  const [videoActivo, setVideoActivo] = useState(false);


  return (
    <section className="section news-section">
      <SectionHeading eyebrow="SIEMPRE HAY ALGO NUEVO" title="LO ÚLTIMO" highlight="DEL UNIVERSO." />

      <div className="news-grid">
        <Reveal delay={100}>
          <article className="news-feature" id="musica">
            <div className="news-artwork">
              <div className="artwork-circle artwork-circle-one" />
              <div className="artwork-circle artwork-circle-two" />

              <div className="artwork-center">
                <Headphones size={48} strokeWidth={1} />
                <span>NUEVO SONIDO</span>
              </div>

              <span className="artwork-label">MÚSICA / 001</span>

              <span className="artwork-caption">
                PORTADA PROVISIONAL
              </span>
            </div>

            <div className="news-info">
              <span className="content-category">
                ÚLTIMO LANZAMIENTO
              </span>

              <h3>Una nueva historia <br />en cada canción.</h3>

              <p>
                Descubre el universo musical de Palayenti. Aquí destacaremos
                el último lanzamiento y su enlace oficial.
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
              {ultimaEntrevista && videoActivo ? (
                <div className="news-video-player">
                  <ReproductorYoutube videoId={ultimaEntrevista.youtubeId} 
                  titulo={ultimaEntrevista.titulo} onCerrar={() => setVideoActivo(false)} />
                </div>
              ) : ultimaEntrevista ? (
                <button
                  type="button"
                  className="news-video-preview"
                  onClick={() => setVideoActivo(true)}
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
                      ? videoActivo
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
