
import { ArrowUpRight, Headphones, Play, } from 'lucide-react';

import SectionHeading from './SectionHeading.jsx';
import './Novedades.css';

export default function Novedades() {
  return (
    <section className="section news-section">
      <SectionHeading eyebrow="SIEMPRE HAY ALGO NUEVO" title="LO ÚLTIMO" highlight="DEL UNIVERSO." />

      <div className="news-grid">
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

            <h3>Una nueva historia <br /> en cada canción.</h3>

            <p>Descubre el universo musical de Palayenti. Aquí destacaremos
              el último lanzamiento y su enlace oficial.</p>

            <a className="text-link" href="#contacto">
              DESCUBRIR MÚSICA <ArrowUpRight size={17} />
            </a>
          </div>
        </article>

        <article className="news-feature creator-news" id="creador">
          <div className="news-artwork creator-artwork">
            <div className="video-frame">
              <div className="video-frame-inner">
                <Play size={36} fill="currentColor" />
              </div>

              <span>HISTORIAS POR CONTAR</span>
            </div>

            <span className="artwork-label">CREADOR / 001</span>
            <span className="artwork-caption">
              VÍDEO PROVISIONAL
            </span>
          </div>

          <div className="news-info">
            <span className="content-category">
              DEL LADO PERSONAL
            </span>

            <h3>Más allá de <br />la música.</h3>

            <p>Videos, vivencias y pensamientos. Un espacio para descubrir
              lo que hay detrás de cada historia.</p>

            <a className="text-link" href="#galeria">
              VER CONTENIDOS <ArrowUpRight size={17} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
